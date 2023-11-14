import {FeedBarComponent} from "./FeedBar.Component";
import {MainNavSchoolComponent} from "../Body/MainNav/MainNavSchool.Component";
import {FeedMiniBarComponent} from "./FeedMiniBar.Component";
import {FeedCardComponent} from "./Card/FeedCard.Component";
import {FeedSpacesComponent} from "./FeedSpaces.Component";
import React from "react";
import {FeedProfileCardComponent, FeedSpacesCardComponent} from "./Card/FeedSearchCard.Component";

export const FeedSearchComponent = ({query}) => {
    return(
        <>
            <div
                className="h-full w-11/12  mx-auto md:pt-16 pt-16 px-0"
                style={{ minWidth: "300px" }}
            >
                <div className="block w-full b md:hidden">
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

                        <div className="lg:w-7/12 md:w-8/12 relative sm:w-10/12 w-10/12 md:mx-auto">
                            <div className="
                            fixed top-16 xl:w-5/12 bg-white pt-5 lg:w-6/12  md:w-6/12  sm:w-9/12  w-9/12
                             ">
                                <input
                                    className="w-full  text-gray-500 font15-res-300 mx-auto bg-gray-50 py-2 px-4 border-radius-20"
                                    placeholder="Cari di SpaceSkool"
                                />
                            </div>
                            <div className="w-full mt-3">
                                <div className="w-full">
                                    <div className="w-full">


                                        <div className="mt-10">
                                            {query ?(
                                                <>
                                                    <div className="w-full  border-b border-gray-100 pt-4  pb-1 my-4 mx-auto">
                                                        <div className="pt-4 pb-2">
                                                            <div className="w-full text-left">
                                                                <h2 className="text-black font18-res-300 " style={{ fontWeight:"500"}}>Rekomendasi Space</h2>
                                                            </div>
                                                        </div>
                                                        <ul className="gap-2">
                                                            <li className="my-0">
                                                                <FeedSpacesCardComponent  />
                                                            </li>
                                                            <li className="my-0">
                                                                <FeedSpacesCardComponent  />
                                                            </li>
                                                            <li className="my-0">
                                                                <FeedSpacesCardComponent  />
                                                            </li>
                                                        </ul>
                                                            <div className="py-3 text-left bg-white hover:bg-gray-50 cursor-pointer">
                                                                <div className="w-10/12 mx-auto">
                                                                    <p className="font14-res-300 underline text-purple-700">Lihat Semua</p>
                                                                </div>
                                                            </div>
                                                    </div>

                                                    <div className="w-full my-4 mx-auto">
                                                        <ul className="gap-2">
                                                            {/*{feeds.map((feed) => (*/}
                                                            <li className="my-0">
                                                                <FeedCardComponent    />
                                                            </li>

                                                            {/*))}*/}
                                                        </ul>
                                                    </div>
                                                </>
                                            ) : (
                                                <>
                                                    <div className="text-left w-11/12 mx-auto mt-5 mb-2">
                                                        <div className="mx-2 my-3 ">
                                                            <span className="font16-res-300">Rekomendasi Spaces</span>
                                                            <ul className="flex gap-2 mt-2 mb-3 overflow-x-scroll  scrollbar-hide ">
                                                                <li className="border border-gray-300 hover:border-purple-700 border-radius-12 px-2 cursor-pointer hover:text-white  hover:bg-purple-600">
                                                                    <p className="font13-res-300 py-1.5 my-0">Matematika</p>
                                                                </li>
                                                                <li className="border border-gray-300 hover:border-purple-700 border-radius-12 px-2 cursor-pointer hover:text-white  hover:bg-purple-600">
                                                                    <p className="font13-res-300 py-1.5 my-0">Website</p>
                                                                </li>
                                                                <li className="border border-gray-300 hover:border-purple-700 border-radius-12 px-2 cursor-pointer hover:text-white  hover:bg-purple-600">
                                                                    <p className="font13-res-300 py-1.5 my-0">Website</p>
                                                                </li>
                                                                <li className="border border-gray-300 hover:border-purple-700 border-radius-12 px-2 cursor-pointer hover:text-white  hover:bg-purple-600">
                                                                    <p className="font13-res-300 py-1.5 my-0">Website</p>
                                                                </li>

                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div style={{ height:"320px"}}>
                                                        <div className="h-full mt-5 mb-2">
                                                            <div className={"w-11/12 mx-auto text-left py-3"}>
                                                                <h2 className="mx-3 font16-res-300" style={{  fontWeight:"550"}}>Pencarian Terakhir Anda</h2>
                                                            </div>
                                                            <ul>
                                                                <li className="hover:bg-gray-50 cursor-pointer">
                                                                    <div className=" flex w-10/12 mx-auto font14-res-300 justify-between py-3 ">
                                                                        <div style={{ color:"#727272"}}>
                                                                            <a>Fellow</a>
                                                                        </div>
                                                                        <div className="flex">
                                                                            <div className="my-auto" style={{height:"20px"}}>
                                                                                <img
                                                                                    className="h-full mt-1 icon"
                                                                                    src="/assets/icon-history-white.svg"
                                                                                    data-hover-src="/assets/icon-history-white.svg"
                                                                                    alt="History Icon"
                                                                                />
                                                                            </div>
                                                                            <div className="my-auto" style={{height:"20px"}}>
                                                                                <img
                                                                                    className="h-full mt-1 icon"
                                                                                    src="/assets/close-icon.svg"
                                                                                    data-hover-src="/assets/close-icon.svg"
                                                                                    alt="History Icon"
                                                                                />
                                                                            </div>

                                                                        </div>

                                                                    </div>
                                                                </li>


                                                            </ul>
                                                            <div className="w-full my-6">
                                                                <div className="mx-auto">
                                                                    <button className="text-purple-700 hover:underline font14-res-300" >
                                                                        Lihat pencarian sebelumnya
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            )}
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



