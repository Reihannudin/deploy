import {Link} from "react-router-dom";
import React from "react";

export const DetailFooterComponent = () => {
    return(
        <>
            <footer className="w-full pt-1 pb-4 " style={{ minWidth:"525px"}}>
                <div className="w-full mx-auto">
                    <div className="sm:flex block pt-3 pb-5 border-y">
                        <div className="sm:my-auto sm:mx-0 my-5 mx-auto" style={{ height:"40px"}}>
                            <img className="h-full sm:mx-0 mx-auto" src="/assets/fessta.svg"/>
                        </div>
                        <div className="lg:w-11/12 w-full mt-4 md:mx-auto mx-auto">
                            <ul className="flex gap-3 font-medium " style={{ fontSize:"13px" , color:"#8a8a8a"}}>
                                <div className="sm:mx-auto flex">
                                    <li className=" mx-3 font-semibold hover:text-purple-500">
                                        <Link>
                                            <span>Privacy Policy</span>
                                        </Link>
                                    </li>
                                    <li className="mx-3 hover:text-purple-500">
                                        <Link>
                                            <span>Terms of Use</span>
                                        </Link>
                                    </li>
                                    <li className="mx-3 hover:text-purple-500">
                                        <Link>
                                            <span>Cookie Policy</span>
                                        </Link>
                                    </li>
                                    <li className="mx-3 hover:text-purple-500">
                                        <Link>
                                            <span>Developer</span>
                                        </Link>
                                    </li>
                                    <li className="mx-3 hover:text-purple-500">
                                        <Link>
                                            <span>Support Us</span>
                                        </Link>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </div>
                    <div className=" sm:w-11/12 w-8/12 sm:mx-auto mx-auto mb-4 mt-6  sm:text-center text-left">
                        <span className="font-medium sm:mx-0 mx-auto" style={{ fontSize:"12px" ,  color:"#838383"}}>© Fessta.SPACE 2023 Made With Luv By Sonyeondan Team </span>
                    </div>
                </div>
            </footer>
        </>
    )
}