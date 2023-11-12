import { NavbarComponent } from "../../Components/Body/Nav/Navbar.Component";
import { FeedComponent } from "../../Components/Feed/Feed.Component";
import { useEffect, useState } from "react";
import api from "../../Config/api";
import {NavbarFeedComponent} from "../../Components/Body/Nav/NavbarFeed.Component";

function Feed({user , isFetching , isDataFetched}) {

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
            <FeedComponent />
        </div>
    </div>
  );
}

export default Feed;
