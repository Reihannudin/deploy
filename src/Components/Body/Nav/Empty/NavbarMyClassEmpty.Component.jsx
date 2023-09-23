import {Link, useNavigate, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";


export const NavbarMyClassEmptyComponent = (props) => {

    const { id, slug } = useParams();

    const navigate = useNavigate();

    const navigateBack = () => {
        navigate(-1);
    };

    return(
        <>
            <div className="w-full fixed md:py-0.5 py-0 bg-white" style={{  zIndex:"39" , minWidth:"300px"}}>
                <div className="mx-auto   flex py-1 w-full border-b border-gray-200" >
                    <header className="w-full">
                        <nav
                            className="
                        lg:w-11/12
                        sm:w-11/12
                        w-full
                        xl:w-10/12
          flex
          justify-between
          mx-auto
          md:py-0
          px-4
          text-lg text-gray-700
          bg-white
        "
                        >
                            <div className="w-full justify-between flex">
                                <div className="flex my-auto mt-1 gap-4">
                                    <button onClick={navigateBack}>
                                        <div className="my-3" style={{ height:"24px"}}>
                                            <img className="h-full" src="/assets/arrow-back.svg"/>
                                        </div>
                                    </button>
                                    <div className="mb-0.5 mt-2  text-left text-purple-700" >
                                        <h4 className="my-2 font16-res-400 w-44 border-radius-4 bg-gray-200 py-2 animate-pulse">
                                        </h4>
                                    </div>
                                </div>

                                <div className="flex justify-between">
                                    <div className="  mx-16 w-full lg:flex hidden my-auto  lg:items-center lg:w-auto" id="menu_empty">
                                        <div className="flex gap-4 my-auto ">
                                            <div  className="font-medium mt-1">
                                                <ul className="list-none gap-6 font16-res-300 flex" style={{ fontWeight :"500"}}>
                                                    <li className="pe-6 my-auto" style={{ borderRight:"1px solid #ebebeb"}}>
                                                        <Link  style={{ fontWeight:"500"}} className=" text-gray-400 my-0 relative cursor-pointer hover:text-purple-600 font" to={`/view/my/class/${id}/${slug}`}>Kelas
                                                            <div className="w-full mx-auto  absolute top-2 my-3  h-1 cursor-pointer hover:bg-purple-400  block hover:scale-x-50 transform origin-center  transition-transform duration-300">
                                                            </div>
                                                        </Link>
                                                    </li>
                                                    <li className="pe-6 my-auto" style={{ borderRight:"1px solid #ebebeb"}}>
                                                        <Link style={{ fontWeight:"500"}}  className=" text-gray-400 my-0 relative cursor-pointer hover:text-purple-600 font"  to={`/view/my/class/${id}/${slug}/students`} >Students
                                                            <div className="w-full mx-auto  absolute top-2 my-3  h-1 cursor-pointer hover:bg-purple-400  block hover:scale-x-50 transform origin-center  transition-transform duration-300">
                                                            </div>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="relative my-auto hidden md:block">
                                        <button  id="menu-button_empty" className={`me-4 ms-2  bg-white px-1  my-2`} >
                                            <div className="h-8 w-8 mx-auto my-auto cursor-pointer block" style={{ height:"36px"}} >
                                                <img className="h-full w-full" style={{ height:"36px"}} src="/assets/add-icon.svg"/>
                                            </div>
                                        </button>

                                    </div>

                                    <div className="mt-0.5 relative flex gap-3">
                                        <li className="my-auto relative mt-1 list-none">
                                            <button
                                                style={{ fontSize: "14px" }}
                                                className="cursor-pointer ms-auto gap-2 my-auto flex"
                                            >
                                                <div style={{ width: "38px", height: "38px" }} >
                                                    <div className="h-full w-full  radius-full bg-gray-200 py-2 animate-pulse"   ></div>
                                                </div>
                                                <div className="my-auto" style={{ height: "19px", width: "19px" ? 'rotate(-180deg)' : 'none' ,    transition: 'transform 0.3s ease-in-out' }}>
                                                    <img className="w-full h-full" src="/assets/expand-icon.svg" alt="Expand" />
                                                </div>
                                            </button>
                                        </li>

                                    </div>

                                </div>

                            </div>
                        </nav>
                    </header>
                </div>
            </div>
        </>
    )
}
