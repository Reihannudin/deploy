import {useNavigate} from "react-router-dom";
import React, {useEffect} from "react";
import {FeedBarComponent} from "./FeedBar.Component";
import {FeedCardComponent} from "./Card/FeedCard.Component";
import {FeedFormCardComponent} from "./Card/FeedFormCard.Component";
import {MainNavSchoolComponent} from "../Body/MainNav/MainNavSchool.Component";
import {FeedMiniBarComponent} from "./FeedMiniBar.Component";
import {FeedSpacesComponent} from "./FeedSpaces.Component";

export const FeedLikedComponent = () => {

    const navigate = useNavigate();

    const handleTabCLick = (e , tabName) => {
        e.preventDefault();
        navigate(`/feed/liked#${tabName}`)
    }


    useEffect(() => {
        const tabsContainer = document.querySelector("#tabs");
        const tabTogglers = tabsContainer.querySelectorAll("#tabs a");

        tabTogglers.forEach(function (toggler) {
            toggler.addEventListener("click" , function (e){
                e.preventDefault();

                let tabName = this.getAttribute("href");

                let tabContents = document.querySelector("#tab-contents");

                for (let i = 0; i < tabContents.children.length; i++){
                    tabTogglers[i].parentElement.classList.remove("border-b" , "bg-white" , "py-1" , "-mb-px", "text-purple-500" );
                    tabContents.children[i].classList.remove("hidden");

                    if("#" + tabContents.children[i].id === tabName){
                        continue;
                    }
                    tabContents.children[i].classList.add("hidden");

                    e.target.parentElement.classList.add("border-b" , "bg-white" , "py-1" , "-mb-px", "text-purple-500" , )
                }
            });
        });
        return () => {
            tabTogglers.forEach(function(toggler) {
                toggler.removeEventListener("click", () => {});
            });
        };
    }, [])

    return(
        <>
            <div
                className="h-full w-11/12  mx-auto md:pt-16 pt-16 px-0"
                style={{ minWidth: "300px" }}
            >
                <div className="block w-full md:hidden">
                    <MainNavSchoolComponent  />
                </div>
                <div className="xl:w-11/12  relativelg:w-full md:w-full w-full mx-auto">
                    <div className="flex justify-between my-4 md:my-6 w-full">
                        <div className="sm:w-1/12 w-1/12 relative">
                            <div className="    fixed w-3-3   lg:mx-3 xl:mx-4   top-auto   ">
                                {/*<FeedBarComponent />*/}
                                <FeedMiniBarComponent />
                            </div>

                        </div>

                        <div className="lg:w-7/12 md:w-8/12 sm:w-11/12 w-10/12 md:mx-auto">
                            <div className="w-full">
                                <div className="w-full">
                                    <div className="relative w-full">
                                        <div className=" pt-5 top-16 w-11/12 mx-auto bg-white">
                                            <div className="lg:w-full w-full mx-auto text-left flex ">
                                                    <h1 className="font18-res-300  w-full mx-auto" style={{ fontWeight: "500"}}>Notifikasi</h1>
                                            </div>
                                            <ul id="tabs" className="flex mt-1 w-full font16-res-300 justify-between     mx-auto px-1 pb-1 text-purple-500">
                                                <li className="px-4 w-full border-b text-gray-500 hover:text-purple-600 mx-0 font-normal py-2">
                                                    <a id="default-tab" className="w-full font15-res-300" href="#semua" onClick={(e) => handleTabCLick(e, 'semua')}>Semua</a>
                                                </li>
                                                <li className="px-4 w-full text-gray-500 hover:text-purple-600 font-normal py-2">
                                                    <a href="#sebutan" className="w-full font15-res-300" onClick={(e) => handleTabCLick(e, 'sebutan')}>Sebutan</a>
                                                </li>
                                                <li className="px-4 text-gray-800 hidden font-semibold py-2">
                                                    <a href="#fourth">Tab 4</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="mt-auto" >
                                        <div id="tab-contents" className="w-full h-full">
                                            <div id="semua" className="pb-2 px-4">
                                                <div className="w-full pb-5">
                                                    <div className="mt-0 ">
                                                        <div className="w-full my-4 mx-auto">
                                                            <ul className="gap-2">
                                                                <li className="mb-0">
                                                                    <FeedCardComponent />
                                                                </li>
                                                                <li className="mb-0">
                                                                    <FeedCardComponent />
                                                                </li>
                                                                <li className="mb-0">
                                                                    <FeedCardComponent />
                                                                </li>

                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="sebutan" className="hidden pb-2 px-4">
                                                <div className="w-full pb-5">
                                                    <div className="mt-0 ">
                                                        <div className="w-full my-4 mx-auto">
                                                            <ul className="gap-2">
                                                                <li className="mb-0">
                                                                    <FeedFormCardComponent />
                                                                </li>
                                                                <li className="mb-0">
                                                                    <FeedFormCardComponent />
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="fourth" className="hidden py-2 px-4">
                                                Fourth tab
                                            </div>
                                            {/*<div className="lg:w-10/12 md:w-11/12  w-10/12 mx-auto">*/}
                                            {/*    <div className="flex mx-6 justify-between">*/}
                                            {/*        <div>*/}
                                            {/*            <h3 className="font-medium-little">Activity Recently</h3>*/}
                                            {/*        </div>*/}
                                            {/*        <div>*/}
                                            {/*            <Link to={`/`}>*/}
                                            {/*                <p className="font-medium-littlet">See All</p>*/}
                                            {/*            </Link>*/}
                                            {/*        </div>*/}
                                            {/*    </div>*/}
                                            {/*    <div className="w-full my-4 mx-auto">*/}
                                            {/*            <div className="flex gap-4 overscroll-x-auto mx-6" style={{ overflowX: "auto" }}>*/}

                                            {/*            </div>*/}
                                            {/*    </div>*/}
                                            {/*</div>*/}
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="lg:w-4/12 md:w-5/12 relative">
                            <div className="fixed   xl:w-3/12 lg:w-4/12 sm:w-2/12 w-2/12  md:w-5/12 left-auto  top-auto  ">
                                {/*<FeedBarComponent />*/}
                                <FeedSpacesComponent />
                            </div>
                        </div>

                        {/*<div className="lg:w-4/12 md:w-4/12 relative">*/}
                        {/*  <div className="fixed   xl:w-3/12 lg:w-4/12 sm:w-2/12 w-2/12  md:w-4/12 left-auto  top-auto  ">*/}
                        {/*    <FeedBarComponent />*/}
                        {/*  </div>*/}
                        {/*</div>*/}
                    </div>
                    {/*<div className="fixed  right-10  bottom-24 z-50  flex justify-center items-center">*/}
                    {/*  <div className="bg-white border-b border-l border-r z-50  border-gray-300 rounded-full">*/}
                    {/*    <button onClick={toggleDropAction} style={{ transform: dropAction ? 'rotate(40deg)' : 'none' ,    transition: 'transform 0.3s ease-in-out' }}  className="bg-purple-600 p-3 rounded-full">*/}
                    {/*      <img className="h-icon-add" src="/assets/add-icon-white.svg" alt="Add Icon" />*/}
                    {/*    </button>*/}
                    {/*  </div>*/}
                    {/*</div>*/}
                </div>
            </div>

        </>

    )
}