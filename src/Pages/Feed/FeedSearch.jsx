import {NavbarComponent} from "../../Components/Body/Nav/Navbar.Component";
import {FeedSearchComponent} from "../../Components/Feed/FeedSearch.Component";
import {useEffect, useState} from "react";
import api from "../../Config/api";

function FeedSearch ({user , isFetching , isDataFetched}){

    return(
        <>
            <div className="w-full mx-auto"  style={{ background: "#FFFFFF" , minWidth:"300px" }}>
                <NavbarComponent user={user} isFetching={isFetching} isDataFetched={isDataFetched}/>
                <div className="w-full mx-0 px-0 h-full " style={{ background:"#FFFFFF"}}>
                    <FeedSearchComponent />
                </div>
            </div>
        </>
    )
}

export default FeedSearch