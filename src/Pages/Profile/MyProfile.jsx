
import React, {useEffect, useState} from "react";
import {NavbarProfileComponent} from "../../Components/Body/Nav/NavbarProfile.Component";
import {TestProfileComponent} from "../Helper/TestProfile.Component";
import api from "../../Config/api";
import {MyProfileComponent} from "../../Components/Profile/MyProfile.Component";


function MyProfile({user , isFetching , isDataFetched}){

    return(
        <>
            <div className={"w-full mx-auto"}  style={{ background:"#FFFFFF" , minWidth:"280px"}}>
                <div className="w-full bg-white"  >
                    <NavbarProfileComponent user={user} isFetching={isFetching} isDataFetched={isDataFetched}  />
                    <div className="w-full mx-0 px-0 h-full " style={{ background:"#e0e0e0"}}>
                        <MyProfileComponent user={user} isFetching={isFetching} isDataFetched={isDataFetched}/>
                    </div>
                </div>
            </div>
        </>
    )
};

export default MyProfile
