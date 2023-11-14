import {NavbarComponent} from "../../Components/Body/Nav/Navbar.Component";
import {FeedNotificationComponent} from "../../Components/Feed/FeedNotification.Component";
import {useEffect, useState} from "react";
import api from "../../Config/api";

function FeedNotification ({user , isFetching , isDataFetched}){

    return(
        <>
            <div className="w-full mx-auto"  style={{ background: "#FFFFFF" , minWidth:"300px" }}>
                <NavbarComponent user={user}  isFetching={isFetching} isDataFetched={isDataFetched}/>
                <div className="w-full mx-0 px-0 h-full " style={{ background:"#FFFFFF"}}>
                    <FeedNotificationComponent />
                </div>
            </div>
        </>
    )
}

export default FeedNotification