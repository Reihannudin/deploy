import {FeedBarComponent} from "./FeedBar.Component";
import {FeedCardComponent} from "./Card/FeedCard.Component";
import {MainNavComponent} from "../Body/MainNav/MainNav.Component";
import React from "react";
export const FeedComponent = () => {
    return(
        <>
            <div className='h-full mx-auto md:pt-16 pt-16 px-0' style={{ minWidth: "300px" }}>
                <div className="block w-full md:hidden">
                    <MainNavComponent />
                </div>
                <div className="xl:w-10/12 lg:w-full md:w-full w-full mx-auto">
                    <div className="flex justify-between my-6 w-full">
                        {/*<div className="lg:w-4/12 md:w-4/12 relative">*/}
                        {/*    <div className="fixed   xl:w-3/12 lg:w-4/12 sm:w-2/12 w-2/12  md:w-4/12 left-auto  top-auto  ">*/}
                        {/*        <FeedBarComponent />*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        <div className="lg:w-8/12 md:w-8/12 w-11/12 mx-auto">
                            <div className="lg:w-10/12 md:w-full sm:w-11/12 w-full">
                                {/*<div className="bg-white sm:px-2.5 px-2.5 py-2.5 w-full flex justify-between border" style={{ borderRadius:"30px"}}>*/}
                                {/*    <div className="flex w-full text-left">*/}
                                {/*        <input className="my-auto w-full sm:mx-4 mx-2 font14-res-300 text-gray-500" placeholder="Buat Postingan!"/>*/}
                                {/*    </div>*/}
                                {/*    <div className="flex sm:mx-4 mx-2 sm:gap-3 gap-1">*/}
                                {/*        <button className="my-auto h-icon-menu" >*/}
                                {/*            <img className="h-full my-auto" src="/assets/image-icon.svg" />*/}
                                {/*        </button>*/}
                                {/*        <button className="my-auto  h-icon-menu">*/}
                                {/*            <img className="h-full my-auto" src="/assets/emoji-icon.svg" />*/}
                                {/*        </button>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                                <div className="w-full my-4 mx-auto">
                                    <ul className="gap-2">
                                        <li className="my-2">
                                            <FeedCardComponent />
                                        </li>
                                        <li className="my-2">
                                            <FeedCardComponent />
                                        </li>
                                        <li className="my-2">
                                            <FeedCardComponent />
                                        </li>
                                        <li className="my-2">
                                            <FeedCardComponent />
                                        </li>
                                        <li className="my-2">
                                            <FeedCardComponent />
                                        </li>
                                        <li className="my-2">
                                            <FeedCardComponent />
                                        </li>
                                        <li className="my-2">
                                            <FeedCardComponent />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
