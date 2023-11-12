import { NavbarComponent } from "../../Components/Body/Nav/Navbar.Component";
import { FeedComponent } from "../../Components/Feed/Feed.Component";
import { useEffect, useState } from "react";
import api from "../../Config/api";
import {NavbarFeedComponent} from "../../Components/Body/Nav/NavbarFeed.Component";
import {useNavigate} from "react-router-dom";

function Feed({user , isFetching , isDataFetched}) {

    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [content, setContent] = useState(null);
    const [isArchive, setIsArchive] = useState(false);

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


    // const [feeds , setFeeds] = useState([])

  // const getFeeds = async () => {
  //   const response = await api.get("/feed");
  //   if (response.data.status) {
  //     setFeeds(response.data.data.feeds);
  //     return response.data.data.feeds
  //   }
  // };

  // useEffect(async () => {
  //   await getFeeds();
  // }, []);



  return (
    <div className="w-full mx-auto"  style={{ background: "#FFFFFF" , minWidth:"300px" }}>
      <NavbarComponent user={user} isFetching={isFetching} isDataFetched={isDataFetched} />
        <div className="w-full relative mx-0 px-0 h-full " style={{ background:"#FFFFFF"}}>
            <FeedComponent
                storeFeed={storeFeed}
                setContent={setContent}
                isArchive={isArchive}
                setIsArchive={setIsArchive}
                isLoading={isLoading}
            />
        </div>
    </div>
  );
}

export default Feed;
