import {Link, useNavigate, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";


export const NavbarClassEmptyComponent = (props) => {

    const { id, slug } = useParams();

    const [isMenuHidden , setIsMenuHidden] = useState(true);
    const [isDropdownHidden  , setIsDropdownHidden] = useState(true);
    const [isDropdownHiddenCreate , setIsDropdownHiddenCreate] = useState(true);

    const toggleMenu = () => {
        setIsMenuHidden((prevHidden) => !prevHidden);
    }

    const toggleDropdown = () => {
        setIsDropdownHidden((prevHidden) => ! prevHidden);
    }
    const handleDropdownProfile = () => {
        // Close the dropdown when an item is clicked
        setIsDropdownHidden(true);
    };

    const toggleDropdownCreate = () => {
        setIsDropdownHiddenCreate((prevHidden) => ! prevHidden);
    }
    const handleDropdownCreate = () => [
        setIsDropdownHiddenCreate(true)
    ]

    const classname = slug.replace(/_/g, ' ').toUpperCase();

    const [windowWidth , setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize' , handleResize);

        return () => {
            window.removeEventListener('resize' , handleResize);
        }
    } , []);


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
                                                        <Link  style={{ fontWeight:"500"}} className=" text-gray-400 my-0 relative cursor-pointer hover:text-purple-600 font" to={`/view/class/${id}/${slug}`}>Kelas
                                                            <div className="w-full mx-auto  absolute top-2 my-3  h-1 cursor-pointer hover:bg-purple-400  block hover:scale-x-50 transform origin-center  transition-transform duration-300">
                                                            </div>
                                                        </Link>
                                                    </li>
                                                    <li className="pe-6 my-auto" style={{ borderRight:"1px solid #ebebeb"}}>
                                                        <Link style={{ fontWeight:"500"}}  className=" text-gray-400 my-0 relative cursor-pointer hover:text-purple-600 font"  to={`/view/class/${id}/${slug}/classmate`} >Teman kelas
                                                            <div className="w-full mx-auto  absolute top-2 my-3  h-1 cursor-pointer hover:bg-purple-400  block hover:scale-x-50 transform origin-center  transition-transform duration-300">
                                                            </div>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={"flex"}>
                                        <button id="menu-button" className="md:mx-4  md:block hidden mx-0" onClick={toggleMenu}>
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

                            </div>
                        </nav>
                    </header>
                </div>
                <div  id="menu" className={`h-full md:block hidden menu `} >
                    <div className={` h-full w-full ${isMenuHidden ? 'hidden': 'block'}  bg-white border-b `}>
                        <div className="lg:hidden lg:w-full relative flex items-center w-auto sm:flex sm:items-center sm:w-auto md:flex md:items-center md:w-auto">
                            <ul
                                className="
                                         pt-4
                                          text-base text-gray-700
                                          lg:flex
                                          pb-4
                                       w-full
                                       font18-res-300
                                          lg:justify-between
                                          lg:pt-0"
                            >
                                <li className="pt-8 pb-4">
                                    <Link to={`/view/class/${id}/${slug}`} className=" text-purple-400  cursor-pointer hover:text-purple-600" href="#">Kelas
                                        <div className="w-1/12 mx-auto h-1 cursor-pointer hover:bg-purple-400  block hover:scale-x-50 transform origin-center  transition-transform duration-300">
                                        </div>
                                    </Link>
                                </li>
                                <li className="pb-6 pt-4">
                                    <Link to={`/view/class/${id}/${slug}/classmate`} className="  text-purple-400  cursor-pointer hover:text-purple-600 " href="#">Teman kelas
                                        <div className="w-1/12 mx-auto h-1 cursor-pointer hover:bg-purple-400  block hover:scale-x-50 transform origin-center  transition-transform duration-300">
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
