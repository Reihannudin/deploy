import {Link, useLocation, useNavigate, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";

export const NavbarDetailAssignmentComponent = (props) => {

    const navigate = useNavigate();

    const [isMenuHidden , setIsMenuHidden] = useState(true);
    const location = useLocation();
    const { slug , class_id , id } = useParams();

    const classname = slug.replace(/_/g, ' ');

    const isDetailClassActive = location.pathname === `/view/${slug}/${class_id}/assignment/${id}`
    const isStudentActive = location.pathname === `/view/${slug}/${class_id}/assignment/${id}/classmate`
    const [dropAction , setDropAction] = useState(false);


    const toggleMenu = () => {
        setIsMenuHidden((prevHidden) => !prevHidden);
    }

    const navigateBack = () => {
        navigate(-1);
    };


    return(
        <>

            <nav className="w-full fixed  bg-white" style={{  zIndex:"44" , minWidth:"333px" , borderBottom:"1px solid #E5E3E9"}}>
                <header className=" lg:w-10/12 w-11/12 py-1  mx-auto">
                    <div className="flex  justify-between gap-4">
                        <div className="flex gap-4">
                            <button onClick={navigateBack} className="my-auto" >
                                <div style={{ height:"24px"}}>
                                    <img className="h-full" src="/assets/arrow-back.svg"/>
                                </div>
                            </button>

                            <div className="my-2 font16-res-400 text-left" >
                                <h1 className={"font16-res-400"}>
                                    {window.innerWidth >= 992 ? (
                                        props.name
                                    ) : (
                                        props.name.length > 20 ? props.name.slice(0, 17) + '...' : props.name
                                    )}
                                </h1>
                                <p className="font14-res-300 text-purple-700" >{classname}</p>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div className="   w-full md:flex hidden my-auto  lg:items-center lg:w-auto" id="menu">
                                <div className="flex gap-4 my-auto ">
                                    <div style={{ fontSize:"16px"}} className="font-medium font16-res-300 mt-1">
                                        <ul className="list-none gap-6 flex" style={{ fontWeight :"500"}}>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:hidden hidden ">
                                <button id="menu-button" className="md:mx-4 mx-0" onClick={toggleMenu}>
                                    {isMenuHidden === false ? (

                                        <div className="h-6 w-6 me-2 cursor-pointer lg:hidden block" style={{ height:"26px"}} >
                                            <img className="h-full w-full" src="/assets/icon-close.svg"/>
                                        </div>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            id="menu-button"
                                            className="h-6 w-6 me-2 cursor-pointer lg:hidden block"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path

                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>

                    </div>
                </header>
                <div  id="menu" className={`h-full menu ${isMenuHidden ? 'hidden' : ''}`} >
                    <div className=" h-full w-full bg-white border-b ">
                        <div className="lg:hidden lg:w-full relative flex items-center w-auto sm:flex sm:items-center sm:w-auto md:flex md:items-center md:w-auto">
                            <ul
                                className="
                                         pt-4
                                          text-base text-gray-700
                                          lg:flex
                                          pb-4
                                       w-full
                                          lg:justify-between
                                          lg:pt-0"
                            >

                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>

    )
}


