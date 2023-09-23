import {Link, useLocation, useNavigate, useParams, useSearchParams} from "react-router-dom";
import React, {useEffect, useRef, useState} from "react";
import {MyDetailClassNavComponent} from "../../Body/MainNav/MyDetailClassNav.Component";
import {StudentCardComponent} from "../../Classmate/Card/StudentCard.Component";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const DetailMyClassStudentsEmptyComponent = (props) => {


    const inputRef = useRef(null);


    return(
        <>
            <div className='h-full mx-auto lg:pt-16 md:pt-7  sm:pt-7 pt-7 px-0' style={{ minWidth:"300px"}} key={props.id}>
                <div className="block w-full md:hidden">
                    <MyDetailClassNavComponent />
                </div>
                <div className="lg:flex lg:py-0 md:py-8 py-5 md:block xl:w-10/12 lg:w-11/12 w-full mx-auto lg:justify-between">
                    <div className=" w-full md:w-11/12 mx-auto lg:my-0 my-5 lg:w-9/12">
                        <div className="w-full lg:py-6 py-3 text-left  lg:mb-10 md:mb-5 bg-white">
                            <h2 className="font30-res-300 mx-5 mb-5 bg-gray-200 py-4 animate-pulse"></h2>
                            <div className="text-left flex border-b border-gray-200  pb-5  justify-between mx-5">
                                <div className="block">
                                    <h2 className="font14-res-300 text-gray-700 my-2  w-32 bg-gray-100 py-1 animate-pulse" ></h2>
                                    <h2 className="font14-res-300 text-gray-700 my-2   w-32 bg-gray-100 py-1 animate-pulse"></h2>
                                </div>
                                <div className="block">
                                    <h2 className="font14-res-300 text-gray-700 my-2  w-32 bg-gray-100 py-1 animate-pulse" ></h2>
                                    <h2 className="font14-res-300 text-gray-700 my-2  w-32 bg-gray-100 py-1  animate-pulse "></h2>
                                </div>
                            </div></div>
                        <div className="md:w-10/12 w-11/12 lg:hidden block  mx-auto ">
                            <div className="my-2 text-center py-1 border-none md:border-t">
                                <p className="my-2 font16-res-400">Code class</p>
                                <div className="lg:w-10/12 md:w-8/12 w-10/12  bg-white flex  mx-auto border-radius-4" >
                                    <input ref={inputRef}  className=" font16-res-400 py-2 px-3 bg-gray-100 w-10/12" value={props.code}  onChange={() => {}} />
                                    <button className="w-2/12 bg-purple-500" >
                                        <img className="my-auto w-full " style={{ height:"20px"}} src="/assets/copy-icon.svg" />
                                    </button>
                                    <button disabled className="w-2/12 bg-gray-100  cursor-pointer border border-purple-600">
                                        <img className="my-2 w-full" style={{ height: "20px" }} src="/assets/change-code.svg" alt="Change Code" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="  md:w-full  w-11/12 h-full  mx-auto">
                            <div className="flex  md:mx-5 justify-between" style={{ borderBottom:"2px solid#A568E6"}}>
                                {/*<h2 className="my-3 font18-res-300" style={{  color:"#8D2EF4"}} >Siswa</h2>*/}
                                <p className=" my-3 font16-res-300" style={{  color:"#8D2EF4"}} >Jumlah siswa</p>
                                <p className=" my-3 font16-res-300 bg-gray-100 border-radius-8 w-24 py-1 animate-pulse" ></p>
                            </div>
                            <ul  className="my-2  scrollbar-hide" >

                                <div className="md:py-8 sm:py-6 py-4">
                                    <div className="flex items-center justify-center mb-2 mt-40 md:mt-28 ">
                                        <div
                                            className="animate-spin rounded-full border-r-gray-50 border-l-gray-50  border-b-gray-50  w-8 h-8 md:h-10 md:w-10 border-t-4 border-purple-700"></div>

                                    </div>

                                </div>

                            </ul>
                        </div>
                    </div>
                    <div className="xl:w-4/12 lg:w-5/12 mx-auto lg:mx-0 sm:w-full w-full md:w-full">
                        <div className="md:w-10/12 hidden lg:block w-11/12 mx-auto my-6">
                            <div className="my-2 pt-3 border-t">
                                <p className="my-2 font16-res-400">Code class</p>
                                <div className="lg:w-10/12 md:w-8/12 w-10/12  bg-white flex  mx-auto border-radius-4" >
                                    <input ref={inputRef}  className=" font16-res-400 py-2 px-3 bg-gray-100 w-10/12"   onChange={() => {}} value={props.code}  />
                                    <button className="w-2/12 bg-purple-500" >
                                        <img className="my-auto w-full " style={{ height:"20px"}} src="/assets/copy-icon.svg" />
                                    </button>
                                    <button disabled className="w-2/12 bg-gray-100  cursor-pointer border border-purple-600">
                                        <img className="my-2 w-full" style={{ height: "20px" }} src="/assets/change-code.svg" alt="Change Code" />
                                    </button>>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
