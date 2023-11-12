import { NavbarComponent } from "../../Components/Body/Nav/Navbar.Component";
import { FeedWriteComponent } from "../../Components/Feed/FeedWrite.Component";
import { useEffect, useState } from "react";
import api from "../../Config/api";
import { useNavigate } from "react-router-dom/dist/umd/react-router-dom.development";
import {NavbarFeedComponent} from "../../Components/Body/Nav/NavbarFeed.Component";
import {FeedComponent} from "../../Components/Feed/Feed.Component";
import {NavbarFeedBackComponent} from "../../Components/Body/Nav/NavbarFeedBack.Component";

function FeedWrite({user , isFetching , isDataFetched}) {


  return (
    <>
      <div className="w-full mx-auto"  style={{ background: "#FFFFFF" , minWidth:"300px" }}>
        <NavbarFeedBackComponent user={user} isFetching={isFetching} isDataFetched={isDataFetched} />
        <div className="w-full relative mx-0 px-0 h-full " style={{ background:"#FFFFFF"}}>
          <FeedWriteComponent

          />
        </div>
      </div>
    </>
  );
}

export default FeedWrite;
