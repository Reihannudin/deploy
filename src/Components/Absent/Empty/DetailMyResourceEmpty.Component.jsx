
import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {AbsentNavComponent} from "../../Body/MainNav/AbsentNav.Component";
import {ResoruceCardComponent} from "../../Resource/Card/ResoruceCard.Component";

export const  DetailMyResourceComponentEmpty = (props) => {
    const { id , class_id , slug } = useParams();

    return(
        <>
            <div className=' h-full mx-auto md:pt-16  pt-14 px-0' style={{ minWidth:"300px"}}>
                <div className="lg:flex md:block lg:w-10/12 sm:w-11/12 w-full mx-auto">
                    <div className="lg:w-10/12 w-full">
                        <div className="my-7">
                            <div className="lg:w-full w-11/12 bg-white flex justify-between  pb-1 mx-auto border-radius-8" >
                                <div className="flex w-9/12 mx-auto gap-2">

                                    <div className="p-2 border-radius-4 me-2" style={{ background:"#A568E6" , height:"45px" }} >
                                        <div className="my-auto" style={{ height:"30px"}}>
                                            <img className="h-full" src="/assets/resource-sm-icon.svg" />
                                        </div>
                                    </div>
                                    <div className="text-left">
                                        <p className="font14-res-300">Resource</p>
                                        <h1 className="font18-res-300 py-2.5 mt-0.5 bg-gray-200 w-40 animate-pulse"></h1>
                                    </div>
                                </div>
                                <div className="w-2/12  me-auto">
                                    <div className="mt-2" style={{ width:"40px" , height:"40px"}}>
                                        <Link to={`/class/${slug}/${class_id}/edit/resource/${id}`} className="my-auto">
                                            <div  className="px-1 py-2 bg-white hover:px-1 hover:bg-gray-100 radius-100 ">
                                                <div className="my-auto mx-1 " style={{ height:"20px"}}>
                                                    <img className="h-full w-full" src="/assets/edit-icon.svg"/>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="text-left lg:w-full w-11/12 mx-auto mt-1 mb-6">
                                <div className=" w-full  mx-auto pb-3">
                                    <div className="mt-2 sm:mx-5 mx-2.5  text-gray-500 flex gap-2">
                                        <label className="my-0 py-0 font13-res-300" >Dibuat : </label>
                                        <p className="my-0  font13-res-300  py-1.5 bg-gray-200 w-40 animate-pulse" ></p>
                                    </div>
                                    <div className="block my-0 sm:mx-5 mx-2.5  text-gray-700  gap-4 w-full  ">
                                        <p className="mb-2 mt-1 font14-res-300 text-gray-500 py-1.5 bg-gray-200 w-40 animate-pulse" >
                                        </p>
                                    </div>
                                </div>
                                <hr className="w-full mx-auto lg:mx-5"/>
                                <div className="block pt-3 gap-4 mx-auto  lg:mx-5 w-full  ">
                                    <ul className="pt-1 md:grid md:grid-cols-2  mx-auto   w-full block">
                                        <div className="flex items-center justify-center  h-72 md:mt-6 mt-14 sm:mt-20">
                                            <div
                                                className="animate-spin rounded-full border-r-gray-50 border-l-gray-50  border-b-gray-50  w-7 h-7 md:h-10 md:w-10 border-t-4 border-purple-700"></div>
                                        </div>
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