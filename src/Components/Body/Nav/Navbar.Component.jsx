import {Link} from "react-router-dom";
import React, {useState} from "react";
import axios from "axios";


export const NavbarComponent = ({isFetching ,isDataFetched ,user}) => {

    const [isMenuHidden , setIsMenuHidden] = useState(true);
    const toggleMenu = () => {
        setIsMenuHidden((prevHidden) => !prevHidden);
    }

    const [isDropdownHidden, setIsDropdownHidden] = useState(true);

    const toggleDropdown = () => {
        setIsDropdownHidden((prevHidden) => !prevHidden);
    };
    const handleDropdownProfile = () => {
        // Close the dropdown when an item is clicked
        setIsDropdownHidden(true);
    };

    const [isDropdownHiddenCreate , setIsDropdownHiddenCreate] = useState(true);
    const toggleDropdownCreate = () => {
        setIsDropdownHiddenCreate((prevHidden) => ! prevHidden);
    }

    const handleDropdownCreate = () => [
        setIsDropdownHiddenCreate(true)
    ]
    const photoProfile = user.image;

    const urlParams = new URLSearchParams(window.location.search);

    console.log("isFetching " , isFetching )
    console.log("isDataFetched " , isDataFetched )

    return(
        <>
            <div className="w-full mx-auto"  style={{  zIndex:"39" , minWidth:"280px" , maxWidth:"1500px"}}>
                <div className="w-full fixed  bg-white mx-auto" style={{  zIndex:"39" , minWidth:"280px" , maxWidth:"1500px"}}>
                    <div className="mx-auto pb-2  lg:pb-2 pt-1 flex  w-full" style={{ borderBottom:"1px solid #E5E3E9"}}>
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
                                <div className="w-full justify-between  gap-2 sm:gap-6 flex">
                                    <div className="flex">
                                        <a href="#">
                                            <div className="sm:mt-2 mt-3 mb-2 h-logo-nav"  >
                                                <img className="w-full my-auto h-full" src="/assets/spaceskool-logo-bg.svg" alt="" />
                                            </div>
                                        </a>
                                    </div>

                                    <div className="flex justify-between">
                                        <div className="  hidden   mx-16 w-full lg:flex my-auto  lg:items-center lg:w-auto" id="menu">
                                            <div className="flex gap-4 my-auto ">
                                                <div  style={{ fontSize:"16px"}} className="font-medium mt-1">
                                                    <ul className="list-none gap-6 flex" style={{ fontWeight :"500"}}>
                                                        <li className="pe-6 my-auto" style={{ borderRight:"1px solid #ebebeb"}}>
                                                            <Link  style={{ fontWeight:"500"}} className=" text-purple-400 my-0 relative cursor-pointer hover:text-purple-600 font" to={`/`}>Beranda
                                                                <div className="w-full mx-auto  absolute top-2 my-3  h-1 cursor-pointer hover:bg-purple-400  block hover:scale-x-50 transform origin-center  transition-transform duration-300">
                                                                </div>
                                                            </Link>
                                                        </li>
                                                        <li className="pe-6 my-auto" style={{ borderRight:"1px solid #ebebeb"}}>
                                                            <Link style={{ fontWeight:"500"}}  className=" text-purple-400 hover:text-purple-600 my-0 relative cursor-pointer  font" to={`/my/class`}>Feed
                                                                <div className="w-full mx-auto  absolute top-2 my-3  h-1 cursor-pointer hover:bg-purple-400  block hover:scale-x-50 transform origin-center  transition-transform duration-300">
                                                                </div>
                                                            </Link>
                                                        </li>
                                                        <li className="pe-6 my-auto" style={{ borderRight:"1px solid #ebebeb"}}>
                                                            <Link style={{ fontWeight:"500"}}  className=" text-purple-400 hover:text-purple-600 my-0 relative cursor-pointer  font" to={`/my/class`}>Kelasku
                                                                <div className="w-full mx-auto  absolute top-2 my-3  h-1 cursor-pointer hover:bg-purple-400  block hover:scale-x-50 transform origin-center  transition-transform duration-300">
                                                                </div>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex  gap-5 ">
                                            <button id="menu-button" className="  hidden md:block ms-2 sm:ms-0 mx-0" onClick={toggleMenu} style={{  transform: isMenuHidden ? 'rotate(-40deg)' : 'none' ,    transition: 'transform 0.3s ease-in-out'}}>
                                                {isMenuHidden === false ? (

                                                    <div className="h-6 w-6 me-2 cursor-pointer lg:hidden block" style={{ height:"26px"}} >
                                                        <img className="h-full w-full" src="/assets/icon-close.svg"/>
                                                    </div>
                                                ) : (
                                                    <div style={{  transform: isMenuHidden ? 'rotate(40deg)' : 'none' ,    transition: 'transform 0.3s ease-in-out'}}>
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
                                                    </div>
                                                )}
                                            </button>
                                            <div className="relative  hidden md:block ms-auto sm:ms-0 me-0 sm:me-0 my-auto">
                                                <button onClick={toggleDropdownCreate} id="menu-button" className={` ${isDropdownHiddenCreate ? 'bg-white px-1 ' : 'px-1 bg-gray-100 radius-100 '} my-2`} >
                                                    <div className="h-8 w-8 mx-auto my-auto cursor-pointer block" style={{ height:"36px"}} >
                                                        <img className="h-full w-full" style={{ height:"36px"}} src="/assets/add-icon.svg"/>
                                                    </div>
                                                </button>
                                                {isDropdownHiddenCreate ? null : (
                                                    <div
                                                        id="dropdown_profile"
                                                        className="z-10 fixed inset-0"
                                                        onClick={handleDropdownCreate}
                                                    >
                                                        <div className="bg-white bg-opacity-0 w-full h-full z-40 absolute right-0 bottom-0"></div>
                                                        <div className="absolute right-0 md:right-16 xl:right-28 z-50 top-12 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-36 md:w-44 dark:bg-gray-700 dark:divide-gray-600">
                                                            <ul className="py-2 text-sm text-left text-gray-700 dark:text-gray-400">
                                                                <li className={"py-1"}>
                                                                    <Link to={`/join/class`} className="block px-4 py-1.5 lg:py-2  font14-res-300 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-purple-600  dark:hover:text-white">Bergabung Kelas</Link>
                                                                </li>
                                                                <li className={"py-1"}>
                                                                    <Link to={`/create/class`} className="block px-4 py-1.5 lg:py-2  font14-res-300 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-purple-600  dark:hover:text-white">Buat Kelas</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                            <div className="mt-0.5 relative flex gap-3">
                                                <li className="my-auto relative mt-1 list-none">
                                                    <button
                                                        onClick={toggleDropdown}
                                                        style={{ fontSize: "14px" }}
                                                        className="cursor-pointer ms-auto gap-2 my-auto flex"
                                                    >
                                                        {isFetching? (
                                                            <div className="wh-icon-pp" >
                                                                <div className="h-full w-full  radius-full bg-gray-200 py-2 animate-pulse"   ></div>
                                                            </div>
                                                        ) : !isDataFetched ? (
                                                            <div  className="wh-icon-pp">
                                                                <div className="h-full w-full  radius-full bg-gray-200 py-2 animate-pulse"   ></div>
                                                            </div>
                                                        ) :(
                                                                <div className="wh-icon-pp">
                                                                    <img className="h-full w-full" src={user.image || "../assets/default-profile.svg"} alt="Profile" />
                                                                </div>
                                                            )
                                                        }
                                                        <div className="my-auto" style={{ maxHeight: "19px", minHeight:"16px" , maxWidth: "19px" , minWidth:"16px" , transform: isDropdownHidden ? 'rotate(-180deg)' : 'none' ,    transition: 'transform 0.3s ease-in-out' }}>
                                                            <img className="w-full h-full" src="/assets/expand-icon.svg" alt="Expand" />
                                                        </div>
                                                    </button>
                                                </li>
                                                {isDropdownHidden ? null : (
                                                    <div
                                                        id="dropdown_profile"
                                                        className="z-10 fixed inset-0"
                                                        onClick={handleDropdownProfile}
                                                    >
                                                        <div className="bg-white bg-opacity-0 w-full h-full z-40 absolute right-0 bottom-0"></div>
                                                        <div className="absolute right-0 md:right-16 xl:right-28 z-50 top-12 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-36-c dark:bg-gray-700 dark:divide-gray-600">
                                                            <ul className="py-2 text-sm text-left text-gray-700 dark:text-gray-400">
                                                                <li className="py-1">
                                                                    <Link to="/" className="block px-4 py-1.5 lg:py-2 hover:bg-gray-100 font15-res-300 dark:hover:bg-gray-600 hover:text-purple-600 dark:hover:text-white">Activities</Link>
                                                                </li>
                                                                <li className="py-1">
                                                                    <Link to="/profile" className="block px-4 py-1.5 lg:py-2 hover:bg-gray-100 font15-res-300 dark:hover:bg-gray-600 hover:text-purple-600 dark:hover:text-white">Profile</Link>
                                                                </li>
                                                                <li className="py-1">
                                                                    <Link to="/logout" className="block px-4 py-1.5 lg:py-2 hover:bg-gray-100 font15-res-300 dark:hover:bg-gray-600 hover:text-purple-600 dark:hover:text-white">Log out</Link>

                                                                    {/*<button onSubmit={handleLogout} className="block px-4 font15-res-300 py-1.5 lg:py-2 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-purple-600 dark:hover:text-white">Log Out</button>*/}
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </nav>
                        </header>
                    </div>
                    <div id="menu" className={`h-full menu ${isMenuHidden ? 'hidden' : 'block'}`}>
                        <div className={`w-full z-50 bg-white border-b lg:hidden lg:w-full  relative flex items-center  sm:flex sm:items-center sm:w-auto md:flex md:items-center md:w-auto ${isMenuHidden ? 'opacity-0 translate-y-[-10px] pointer-events-none' : 'opacity-100 translate-y-0 pointer-events-auto'} transition-opacity duration-300 transition-transform duration-300`}>
                            <ul className="pt-4 text-base text-gray-700 lg:flex pb-4 w-full font18-res-300 lg:justify-between lg:pt-0">
                                <li className="pt-10 pb-8">
                                    <Link to="/" className="text-purple-400 cursor-pointer hover:text-purple-600">Beranda
                                        <div className="w-1/12 mx-auto h-1 cursor-pointer hover:bg-purple-400 block hover:scale-x-50 transform origin-center transition-transform duration-300"></div>
                                    </Link>
                                </li>
                                <li className="pb-8 pt-6">
                                    <Link to="/my/class" className="text-purple-400 cursor-pointer hover:text-purple-600">Feed
                                        <div className="w-1/12 mx-auto h-1 cursor-pointer hover:bg-purple-400 block hover:scale-x-50 transform origin-center transition-transform duration-300"></div>
                                    </Link>
                                </li>
                                <li className="pb-8 pt-6">
                                    <Link to="/my/class" className="text-purple-400 cursor-pointer hover:text-purple-600">Kelasku
                                        <div className="w-1/12 mx-auto h-1 cursor-pointer hover:bg-purple-400 block hover:scale-x-50 transform origin-center transition-transform duration-300"></div>
                                    </Link>
                                </li>
                                <li className="pb-8 pt-6">
                                    <Link to="/my/class" className="text-purple-400 cursor-pointer hover:text-purple-600">Note
                                        <div className="w-1/12 mx-auto h-1 cursor-pointer hover:bg-purple-400 block hover:scale-x-50 transform origin-center transition-transform duration-300"></div>
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


