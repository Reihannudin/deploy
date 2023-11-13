import {NavbarComponent} from "../../Components/Body/Nav/Navbar.Component";
import {FeedLikedComponent} from "../../Components/Feed/FeedLiked.Component";
import {useEffect, useState} from "react";
import api from "../../Config/api";

function FeedLiked ({user , isFetching , isDataFetched}){

    return(
        <>
            <div className="w-full mx-auto"  style={{ background: "#FFFFFF" , minWidth:"300px" }}>
                <NavbarComponent user={user} isFetching={isFetching} isDataFetched={isDataFetched}/>
                <div className="w-full mx-0 px-0 h-full " style={{ background:"#FFFFFF"}}>
                    <FeedLikedComponent />
                </div>
            </div>
        </>
    )
}

export default FeedLiked