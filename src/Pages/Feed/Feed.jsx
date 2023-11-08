import { NavbarComponent } from "../../Components/Body/Nav/Navbar.Component";
import { FeedComponent } from "../../Components/Feed/Feed.Component";
import { useEffect, useState } from "react";
import api from "../../Config/api";

function Feed() {
  const [user, setUser] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [isDataFetched, setIsDataFetched] = useState(false);
  const [error, setError] = useState(null);
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        if (!isDataFetched) {
          const response = await api.get(`/user`);
          await new Promise((resolve) => setTimeout(resolve, 1500));

          const data = response.data;
          if (isMounted) {
            setUser(data);
            setIsDataFetched(true);
          }
        }
        setIsFetching(false);
      } catch (error) {
        if (isMounted) {
          setError(error);
          setIsFetching(false);
        }
      }
    };

    const timeout = setTimeout(() => {
      if (isFetching) {
        if (isMounted) {
          setError(new Error("Timeout: Could not fetch data."));
          setIsFetching(false);
        }
      }
    }, 20000);

    fetchData();

    return () => {
      isMounted = false;
      clearTimeout(timeout);
    };
  }, [user]);

  const getFeeds = async () => {
    const response = await api.get("/feed");
    if (response.data.status) {
      setFeeds(response.data.data.feeds);
      return response.data.data.feeds
    }
  };

  useEffect(async () => {
    await getFeeds();
  }, []);

  return (
    <div className="w-full" style={{ background: "#FFFFFF" }}>
      <NavbarComponent user={user} />
      <div
        className="w-full mx-0 px-0 h-full "
        style={{ background: "#FFFFFF" }}
      >
        <FeedComponent feeds={feeds} />
      </div>
    </div>
  );
}

export default Feed;
