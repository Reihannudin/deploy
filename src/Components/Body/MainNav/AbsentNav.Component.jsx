
import React, {useState} from "react";
import {Link, useParams} from "react-router-dom";

export const  AbsentNavComponent = () => {
    
    const { id , class_id, slug } = useParams();

    return(
        <>

            <div className="w-full fixed  bottom-0 border-t border-gray-300 z-50 bg-white" >
                <div className="mx-auto relative sm:w-10/12 w-full">

                    <div className="w-full bg-white justify-between flex" style={{ height:"70px"}}>
                        <div className="flex bg-white  justify-center pt-3 pb-2 mx-auto sm:w-5/12 w-5/12">
                            <Link to={`/view/${slug}/${class_id}/my/absent/${id}`} className="text-center bg-white cursor-pointer   " style={{ height: "28px" }}>
                                <div className="cursor-pointer p-1 bg-white hover:bg-gray-100 radius-full" style={{ width:"60px"}}>
                                    <div className="mx-auto cursor-pointer" style={{ height: "28px" }}>
                                        <img className="mx-auto cursor-pointer h-full" src="/assets/icon-absent-nav.svg" alt="Home Icon" />
                                    </div>
                                    <p className="my-1 text-gray-400 hover:text-purple-700" style={{ fontSize: "11px" }}>Absensi</p>
                                </div>
                            </Link>

                        </div>

                        <div className="flex justify-center  bg-white mx-auto py-3 sm:w-5/12 w-5/12">

                            <Link to={`/view/${slug}/${class_id}/my/absent/${id}/students`} className="text-center bg-white cursor-pointer  radius-full " style={{ height: "28px" }}>
                                <div className="cursor-pointer p-1 hover:bg-gray-100 radius-full" style={{ width:"60px"}}>
                                    <div className="mx-auto cursor-pointer" style={{ height: "28px" }}>
                                        <img className="mx-auto cursor-pointer h-full" src="/assets/icon-student-nav.svg" alt="Profile Icon" />
                                    </div>
                                    <p className="my-1 text-gray-500 hover:text-purple-700" style={{ fontSize: "11px" }}>Murid</p>

                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}