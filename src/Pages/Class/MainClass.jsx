import {NavbarComponent} from "../../Components/Body/Nav/Navbar.Component";
import {MainComponent} from "../../Components/Home/Main.Component";
import {MainNavComponent} from "../../Components/Body/MainNav/MainNav.Component";
import {useEffect, useState} from "react";
import api from "../../Config/api";

function Main({user , isFetching , isDataFetched}){


    return(
        <>
            <div className="w-full mx-auto" style={{ background:"#FFFFFF" , minWidth:"280px"}}>
                <NavbarComponent user={user} isFetching={isFetching} isDataFetched={isDataFetched} />
                <div className="w-full relative mx-0 px-0 h-full " style={{ background:"#FFFFFF"}}>
                    <MainComponent user={user} />
                </div>
            </div>
        </>
    )
}

export default Main