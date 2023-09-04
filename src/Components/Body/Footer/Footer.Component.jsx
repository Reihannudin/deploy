
import {Link} from "react-router-dom";
import React from "react";

export const FooterComponent = () => {
    return(
        <>
            <footer className="w-full pt-1 pb-4 bg-gray-50" style={{ minWidth:"300px", position:"relative"}}>
                <div className="xl:w-9/12 lg:w-10/12 sm:w-12/12 w-11/12 mx-auto">
                    <div className="lg:w-10/12 md:w-11/12 w-full  mb-2 mt-6 md:mx-auto mx-auto">
                        <ul className="flex gap-1 w-full md:text-center text-left font-medium mx-auto font12-res-300" style={{  color:"#8a8a8a"}}>
                            <div className="sm:mx-auto  md:mx-auto  sm:w-9/12 md md:w-7/12 lg:w-7/12 w-full mx-3 sm:flex grid grid-cols-3 ">
                                <li className=" mx-1 md:mx-auto hover:text-purple-500">
                                    <Link>
                                        <span>Privacy Policy</span>
                                    </Link>
                                </li>
                                <li className="mx-1 md:mx-auto hover:text-purple-500">
                                    <Link>
                                        <span>Terms of Use</span>
                                    </Link>
                                </li>
                                <li className="mx-1 md:mx-auto hover:text-purple-500">
                                    <Link>
                                        <span>Cookie Policy</span>
                                    </Link>
                                </li>
                                <li className="mx-1 md:mx-auto hover:text-purple-500">
                                    <Link>
                                        <span>Developer</span>
                                    </Link>
                                </li>
                                <li className="mx-1 md:mx-auto hover:text-purple-500">
                                    <Link>
                                        <span>Support Us</span>
                                    </Link>
                                </li>
                            </div>
                        </ul>
                    </div>
                    <div className="md:w-10/12  w-full my-b mx-auto">
                        <p className="sm:text-center md:mx-7 mx-3 text-left font-normal" style={{ fontSize:"12px" , color:"#838383"}}>
                            <br/>
                            Spaceskool is a Learning Management system, which provides space for managing the learning system provided with several features such as attendance features, assignments, classes and accounting of learning that is accurate, reliable and safe. System management and maintenance responsibilities reside with Sonyeondan Team
                            <br/>
                            <br/>
                            Copyright by PatPat. or its affiliates (clHorizon) All rights reserved.
                        </p>
                    </div>
                    <div className=" w-11/12 sm:mx-auto  md:mx-7 mx-3 mb-4 mt-6  sm:text-center text-left">
                        <span className="font-medium" style={{ fontSize:"12px" ,  color:"#838383"}}>© Spaceskool 2023 Made With Luv By PatPat </span>
                    </div>
                </div>
            </footer>
        </>
    )
}