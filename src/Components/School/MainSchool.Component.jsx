import {MainNavComponent} from "../Body/MainNav/MainNav.Component";
import React from "react";
import {MainNavSchoolComponent} from "../Body/MainNav/MainNavSchool.Component";


export const MainSchoolComponent = ({user}) => {
    return(
        <>
            <div className=' h-full min-h-screen mx-auto md:pt-16  relative  pt-16 px-0' style={{ minWidth:"280px" , maxWidth:"1500px"}}>
                <div className="block w-full md:hidden">
                    <MainNavSchoolComponent user={user} />
                </div>
                <div className="w-bar-class-list md:py-3 py-2  mx-auto  lg:mb-10 md:mb-2 bg-white">
                    <div id="tab-contents" className="xl:w-10/12 lg:w-11/12 md:w-11/12  sm:w-11/12 w-full mx-auto">
                        <div>
                            <div>
                                <div>
                                    <div>
                                        <div>
                                            <h2>Selamat Pagi Jennifer</h2>
                                            <div>
                                                <p>08 November 2023</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}