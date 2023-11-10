import { NavbarComponent } from "../../Components/Body/Nav/Navbar.Component";
import { FeedWriteComponent } from "../../Components/Feed/FeedWrite.Component";
import { useEffect, useState } from "react";
import api from "../../Config/api";
import { useNavigate } from "react-router-dom/dist/umd/react-router-dom.development";

function FeedWrite() {

  const navigate = useNavigate()
  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(true);
  const [isDataFetched, setIsDataFetched] = useState(false);
  const [error, setError] = useState(null);
  const [content, setContent] = useState(null);
  const [isArchive, setIsArchive] = useState(false);

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

  const storeFeed = async () => {
    setIsLoading(true);
    const response = await api.post("feed/store", {
      content,
      status: isArchive ? "archive" : "public",
    });

    if(response.data.status && response.data.message == "Feed terupload"){
      navigate('/feed')
    }

    setIsLoading(false);
  };

  return (
    <>
      <div className="w-full" style={{ background: "#FFFFFF" }}>
        {/* <NavbarComponent user={user} /> */}
        <div
          className="w-full mx-0 px-0 h-full "
          style={{ background: "#FFFFFF" }}
        >
          <FeedWriteComponent
            storeFeed={storeFeed}
            setContent={setContent}
            isArchive={isArchive}
            setIsArchive={setIsArchive}
            isLoading={isLoading}
          />
        </div>
      </div>
    </>
  );
}

export default FeedWrite;
