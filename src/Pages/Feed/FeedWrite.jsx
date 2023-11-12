import { NavbarComponent } from "../../Components/Body/Nav/Navbar.Component";
import { FeedWriteComponent } from "../../Components/Feed/FeedWrite.Component";
import { useEffect, useState } from "react";
import api from "../../Config/api";
import { useNavigate } from "react-router-dom/dist/umd/react-router-dom.development";
import {NavbarFeedComponent} from "../../Components/Body/Nav/NavbarFeed.Component";
import {FeedComponent} from "../../Components/Feed/Feed.Component";
import {NavbarFeedBackComponent} from "../../Components/Body/Nav/NavbarFeedBack.Component";

function FeedWrite({user , isFetching , isDataFetched}) {

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

  return (
    <>
      <div className="w-full mx-auto"  style={{ background: "#FFFFFF" , minWidth:"300px" }}>
        <NavbarFeedBackComponent user={user} isFetching={isFetching} isDataFetched={isDataFetched} />
        <div className="w-full relative mx-0 px-0 h-full " style={{ background:"#FFFFFF"}}>
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
