import {Link, useLocation, useNavigate, useParams} from "react-router-dom";
import React, {useEffect, useRef, useState} from "react";
import axios from "axios";


export const NavbarFeedComponent = ({isFetching ,isDataFetched ,user}) => {
    const { id, slug } = useParams();

    const location = useLocation();

    const isDetailClassActive = location.pathname === `/view/class/${id}/${slug}`
    const isStudentActive = location.pathname === `/view/class/${id}/${slug}/classmate`


    const [isMenuHidden , setIsMenuHidden] = useState(true);
    const [isDropdownHidden  , setIsDropdownHidden] = useState(true);

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

    const [isSearchHidden, setIsSearchHidden] = useState(true);
    const [isSearchHiddenMini, setIsSearchHiddenMini] = useState(true);
    const componentRef = useRef();

    const handleSearchHiddenMini = () => {
        setIsSearchHiddenMini((prevHidden) => !prevHidden);
    };


    const handleSearchHidden = () => {
        // Close the dropdown when an item is clicked
        setIsSearchHidden(true);
    };

    const handleInputFocus = () => {
        // Open the dropdown when the input is focused
        setIsSearchHidden(false);
    };

    const handleComponentBlur = (event) => {
        // Check if the click is outside the component
        if (!componentRef.current.contains(event.target)) {
            setIsSearchHidden(true);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleComponentBlur);
        // Cleanup event listener on component unmount
        return () => {
            document.removeEventListener('click', handleComponentBlur);
        };
    }, []);

    function handleHover(event) {
        event.target.src = event.target.getAttribute('data-hover-src');
    }

    function handleHoverOut(event) {
        event.target.src = "/assets/icon-history-gray.svg";
    }

    const navigate = useNavigate();

    const navigateBack = () => {
        navigate(-1);
    };

    useEffect(() => {
        document.addEventListener('click', handleComponentBlur);
        // Cleanup event listener on component unmount
        return () => {
            document.removeEventListener('click', handleComponentBlur);
        };
    }, []);


    return(
        <>
            <div className="w-full mx-auto "  style={{  zIndex:"39" , minWidth:"300px" , maxWidth:"1500px"}}>

            <div className="w-full fixed md:py-0.5 py-0 bg-white" style={{  zIndex:"39" , minWidth:"300px"}}>
                <div className="mx-auto   flex py-3 w-full border-b border-gray-200" >
                    <header className="w-full">
                        <nav
                            className="
                        lg:w-11/12
                        w-11/12
                        xl:w-10/12
          flex
          justify-between
          mx-auto
          md:py-0
          px-4
          relative
          text-lg text-gray-700
          bg-white
        "
                        >
                            <div className="w-full justify-between flex">
                                <div className="flex xl:w-4/12 lg:w-3/12 md:w-5/12 w-6/12 my-auto  gap-1">
                                    <a href="#" >
                                        <div className="sm:mt-2 mt-3 hidden md:block mb-2 h-logo-nav"  >
                                            <img className="w-full my-auto h-full" src="/assets/spaceskool-logo-bg.svg" alt="" />
                                        </div>
                                    </a>
                                    {isSearchHiddenMini === true? (
                                        <div className="my-0.5 text-left  text-purple-700" >
                                            <h4 className="mt-0 md:mt-3 font18-res-300 sm:font16-res-300 ps-0 sm:ps-2  border-none sm:border-s border-gray-100" style={{  fontWeight:"500"}} >Feeds</h4>
                                        </div>
                                    ): (
                                        <>
                                            <input

                                                className="font16-res-300 py-0  md:hidden   w-full border-gray-300 border-b" placeholder="Cari sesuatu"/>

                                        </>
                                    )}

                                </div>
                                <div className="flex  xl:w-8/12 lg:w-8/12 md:w-7/12 w-6/12 justify-between">
                                    <div className=" lg:w-5/12 md:w-9/12 flex ">
                                        <div className="w-10/12 relative hidden md:block" ref={componentRef}>
                                            <div className="my-2.5 bg-gray-100 w-full flex  text-gray-500 ps-6 border-radius-4 ">
                                                <input
                                                    onFocus={handleInputFocus}
                                                    onBlur={handleSearchHidden}
                                                    className="font14-res-300 py-1 w-full bg-gray-100" placeholder="Cari sesuatu"/>
                                            </div>
                                            {isSearchHidden ? null : (
                                                <div className={"fixed w-6/12 top-14 z-30 "}>
                                                    <div className="w-11/12 bg-gray-50  border border-r-gray-100 ">
                                                        <div className="w-full">
                                                            <div className="py-3  px-3" style={{ maxHeight:"400px"}}>
                                                                <div className="text-left">
                                                                    <span className="font14-res-300">Rekomendasi Spaces</span>
                                                                    <ul className="flex gap-2 mt-2 mb-3 overflow-x-scroll  scrollbar-hide ">
                                                                        <li className="border border-gray-300 hover:border-purple-700 border-radius-12 px-2 cursor-pointer hover:text-white  hover:bg-purple-600">
                                                                            <p className="font13-res-300 py-0 my-0">Matematika</p>
                                                                        </li>
                                                                        <li className="border border-gray-300 hover:border-purple-700 border-radius-12 px-2 cursor-pointer hover:text-white  hover:bg-purple-600">
                                                                            <p className="font13-res-300 py-0 my-0">Website</p>
                                                                        </li>
                                                                        <li className="border border-gray-300 hover:border-purple-700 border-radius-12 px-2 cursor-pointer hover:text-white  hover:bg-purple-600">
                                                                            <p className="font13-res-300 py-0 my-0">Website</p>
                                                                        </li>
                                                                        <li className="border border-gray-300 hover:border-purple-700 border-radius-12 px-2 cursor-pointer hover:text-white  hover:bg-purple-600">
                                                                            <p className="font13-res-300 py-0 my-0">Website</p>
                                                                        </li>

                                                                    </ul>
                                                                </div>
                                                                <div className="text-left my-3">
                                                                    <h4 className={"font15-res-300 "} style={{ fontWeight:"500"}}>Pencarian Terakhir</h4>
                                                                    <ul className="block w-full overflow-y-auto" style={{ maxHeight:"180px"}}>
                                                                        <Link >
                                                                            <li  onMouseOver={handleHover}
                                                                                 onMouseOut={handleHoverOut}
                                                                                 className="w-11/12 flex py-2 justify-between text-purple-700 px-3 border-radius-4 hover:text-white  border-b cursor-pointer  border-gray-100 hover:bg-purple-600">
                                                                                <div className="w-full ">
                                                                                    <p className="font14-res-300 w-full my-0 cursor-pointer ">Website</p>
                                                                                </div>
                                                                                <div>
                                                                                    <div className="my-auto" style={{height:"20px"}}>
                                                                                        <img
                                                                                            className="h-full mt-1 icon"
                                                                                            src="/assets/icon-history-white.svg"
                                                                                            data-hover-src="/assets/icon-history-white.svg"
                                                                                            alt="History Icon"
                                                                                        />
                                                                                    </div>
                                                                                </div>
                                                                            </li>
                                                                        </Link>
                                                                        <Link >
                                                                            <li  onMouseOver={handleHover}
                                                                                 onMouseOut={handleHoverOut}
                                                                                 className="w-11/12 flex py-2 justify-between text-purple-700 px-3 border-radius-4 hover:text-white  border-b cursor-pointer  border-gray-100 hover:bg-purple-600">
                                                                                <div className="w-full ">
                                                                                    <p className="font14-res-300 w-full my-0 cursor-pointer ">Website</p>
                                                                                </div>
                                                                                <div>
                                                                                    <div className="my-auto" style={{height:"20px"}}>
                                                                                        <img
                                                                                            className="h-full mt-1 icon"
                                                                                            src="/assets/icon-history-white.svg"
                                                                                            data-hover-src="/assets/icon-history-white.svg"
                                                                                            alt="History Icon"
                                                                                        />
                                                                                    </div>
                                                                                </div>
                                                                            </li>
                                                                        </Link>
                                                                        <Link >
                                                                            <li  onMouseOver={handleHover}
                                                                                 onMouseOut={handleHoverOut}
                                                                                 className="w-11/12 flex py-2 justify-between text-purple-700 px-3 border-radius-4 hover:text-white  border-b cursor-pointer  border-gray-100 hover:bg-purple-600">
                                                                                <div className="w-full ">
                                                                                    <p className="font14-res-300 w-full my-0 cursor-pointer ">Website</p>
                                                                                </div>
                                                                                <div>
                                                                                    <div className="my-auto" style={{height:"20px"}}>
                                                                                        <img
                                                                                            className="h-full mt-1 icon"
                                                                                            src="/assets/icon-history-white.svg"
                                                                                            data-hover-src="/assets/icon-history-white.svg"
                                                                                            alt="History Icon"
                                                                                        />
                                                                                    </div>
                                                                                </div>
                                                                            </li>
                                                                        </Link>
                                                                        <Link >
                                                                            <li  onMouseOver={handleHover}
                                                                                 onMouseOut={handleHoverOut}
                                                                                 className="w-11/12 flex py-2 justify-between text-purple-700 px-3 border-radius-4 hover:text-white  border-b cursor-pointer  border-gray-100 hover:bg-purple-600">
                                                                                <div className="w-full ">
                                                                                    <p className="font14-res-300 w-full my-0 cursor-pointer ">Website</p>
                                                                                </div>
                                                                                <div>
                                                                                    <div className="my-auto" style={{height:"20px"}}>
                                                                                        <img
                                                                                            className="h-full mt-1 icon"
                                                                                            src="/assets/icon-history-white.svg"
                                                                                            data-hover-src="/assets/icon-history-white.svg"
                                                                                            alt="History Icon"
                                                                                        />
                                                                                    </div>
                                                                                </div>
                                                                            </li>
                                                                        </Link>
                                                                        <Link >
                                                                            <li  onMouseOver={handleHover}
                                                                                 onMouseOut={handleHoverOut}
                                                                                 className="w-11/12 flex py-2 justify-between text-purple-700 px-3 border-radius-4 hover:text-white  border-b cursor-pointer  border-gray-100 hover:bg-purple-600">
                                                                                <div className="w-full ">
                                                                                    <p className="font14-res-300 w-full my-0 cursor-pointer ">Website</p>
                                                                                </div>
                                                                                <div>
                                                                                    <div className="my-auto" style={{height:"20px"}}>
                                                                                        <img
                                                                                            className="h-full mt-1 icon"
                                                                                            src="/assets/icon-history-white.svg"
                                                                                            data-hover-src="/assets/icon-history-white.svg"
                                                                                            alt="History Icon"
                                                                                        />
                                                                                    </div>
                                                                                </div>
                                                                            </li>
                                                                        </Link>
                                                                        <Link >
                                                                            <li  onMouseOver={handleHover}
                                                                                 onMouseOut={handleHoverOut}
                                                                                 className="w-11/12 flex py-2 justify-between text-purple-700 px-3 border-radius-4 hover:text-white  border-b cursor-pointer  border-gray-100 hover:bg-purple-600">
                                                                                <div className="w-full ">
                                                                                    <p className="font14-res-300 w-full my-0 cursor-pointer ">Website</p>
                                                                                </div>
                                                                                <div>
                                                                                    <div className="my-auto" style={{height:"20px"}}>
                                                                                        <img
                                                                                            className="h-full mt-1 icon"
                                                                                            src="/assets/icon-history-white.svg"
                                                                                            data-hover-src="/assets/icon-history-white.svg"
                                                                                            alt="History Icon"
                                                                                        />
                                                                                    </div>
                                                                                </div>
                                                                            </li>
                                                                        </Link>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/*<div*/}
                                                    {/*    id="dropdown_profile"*/}
                                                    {/*    className="z-10 fixed inset-0"*/}
                                                    {/*    onClick={handleSearchHidden}*/}
                                                    {/*>*/}
                                                    {/*    <div className="bg-white bg-opacity-0 w-full h-full z-40 absolute right-0 bottom-0"></div>*/}
                                                    {/*    <div className="absolute right-0 md:right-16 xl:right-28 z-50 top-12 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-36-c dark:bg-gray-700 dark:divide-gray-600">*/}
                                                    {/*        <ul className="py-2 text-sm text-left text-gray-700 dark:text-gray-400">*/}
                                                    {/*            <li className="py-1">*/}
                                                    {/*                <Link to="/" className="block px-4 py-1.5 lg:py-2 hover:bg-gray-100 font15-res-300 dark:hover:bg-gray-600 hover:text-purple-600 dark:hover:text-white">Activities</Link>*/}
                                                    {/*            </li>*/}
                                                    {/*            <li className="py-1">*/}
                                                    {/*                <Link to="/profile" className="block px-4 py-1.5 lg:py-2 hover:bg-gray-100 font15-res-300 dark:hover:bg-gray-600 hover:text-purple-600 dark:hover:text-white">Profile</Link>*/}
                                                    {/*            </li>*/}
                                                    {/*            <li className="py-1">*/}
                                                    {/*                <Link to="/logout" className="block px-4 py-1.5 lg:py-2 hover:bg-gray-100 font15-res-300 dark:hover:bg-gray-600 hover:text-purple-600 dark:hover:text-white">Log out</Link>*/}

                                                    {/*                /!*<button onSubmit={handleLogout} className="block px-4 font15-res-300 py-1.5 lg:py-2 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-purple-600 dark:hover:text-white">Log Out</button>*!/*/}
                                                    {/*            </li>*/}
                                                    {/*        </ul>*/}
                                                    {/*    </div>*/}
                                                    {/*</div>*/}
                                                </div>
                                            )}
                                        </div>
                                        <div className="w-2/12 mt-0 relative  hidden md:flex gap-3">
                                            <li className="my-auto w-full  relative list-none">
                                                <button
                                                    style={{ fontSize: "14px"  , borderRadius:"0px 4px 4px 0px"}}
                                                    className="cursor-pointer w-full  bg-purple-600 px-2 hover:bg-purple-700 p-1.5  ms-auto gap-2 my-auto flex"
                                                >
                                                    <div  className="my-auto mx-auto" style={{ height:"24px"}}>
                                                        <img className="h-full mx-auto" src="/assets/icon-search-gray.svg"/>
                                                    </div>

                                                </button>
                                            </li>

                                        </div>
                                    </div>
                                    <div className={"flex  lg:w-7/12 md:w-5/12 justify-end lg:justify-between"}>
                                        <button id="menu-button" className="  hidden sm:hidden md:block ms-2 sm:ms-0 mx-0" onClick={toggleMenu} style={{  transform: isMenuHidden ? 'rotate(-40deg)' : 'none' ,    transition: 'transform 0.3s ease-in-out'}}>
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
                                            <button
                                                onClick={handleSearchHiddenMini}
                                                style={{ fontSize: "14px"  }}
                                                className="
                                                 cursor-pointer block md:hidden  hover:bg-gray-50 py-1.5 px-1.5 radius-full  mx-auto gap-2 my-auto">                                                <div  className="my-auto mx-auto" style={{ height:"20px"}}>
                                                    <img className="h-full mx-auto" src="/assets/icon-search-purple.svg"/>
                                                </div>

                                            </button>

                                        <div className="  hidden   xl:mx-10 lg:mx-6 lg:w-6/12 lg:flex my-auto  lg:items-center lg:w-auto" id="menu">
                                            <div className="flex gap-2 my-auto ">
                                                <div  style={{ fontSize:"16px"}} className="font-medium mt-1">
                                                    <ul className="list-none gap-6 flex" style={{ fontWeight :"500"}}>
                                                        <li className="pe-4 my-auto" style={{ borderRight:"1px solid #ebebeb"}}>
                                                            <Link  style={{ fontWeight:"500"}} className=" text-purple-400 my-0 relative cursor-pointer hover:text-purple-600 font" to={`/`}>Beranda
                                                                <div className="w-full mx-auto  absolute top-2 my-3  h-1 cursor-pointer hover:bg-purple-400  block hover:scale-x-50 transform origin-center  transition-transform duration-300">
                                                                </div>
                                                            </Link>
                                                        </li>
                                                        <li className="pe-4 my-auto" style={{ borderRight:"1px solid #ebebeb"}}>
                                                            <Link style={{ fontWeight:"500"}}  className=" text-purple-400 hover:text-purple-600 my-0 relative cursor-pointer  font" to={`/my/class`}>Feed
                                                                <div className="w-full mx-auto  absolute top-2 my-3  h-1 cursor-pointer hover:bg-purple-400  block hover:scale-x-50 transform origin-center  transition-transform duration-300">
                                                                </div>
                                                            </Link>
                                                        </li>
                                                        <li className="pe-4 my-auto" style={{ borderRight:"1px solid #ebebeb"}}>
                                                            <Link style={{ fontWeight:"500"}}  className=" text-purple-400 hover:text-purple-600 my-0 relative cursor-pointer  font" to={`/my/class`}>Kelasku
                                                                <div className="w-full mx-auto  absolute top-2 my-3  h-1 cursor-pointer hover:bg-purple-400  block hover:scale-x-50 transform origin-center  transition-transform duration-300">
                                                                </div>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-0.5 md:ms-6 lg:ms-0 relative w-4/12 sm:w-6/12 flex gap-3">
                                            <li className="my-auto relative  list-none">
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
                            {isSearchHiddenMini ? null : (
                                <div className={"fixed w-full md:hidden block top-14 z-30 "} >
                                    <div className="w-10/12 bg-gray-50  border border-r-gray-100 ">
                                        <div className="w-full">
                                            <div className="py-3  px-3" style={{ maxHeight:"400px"}}>
                                                <div className="text-left">
                                                    <span className="font14-res-300">Rekomendasi Spaces</span>
                                                    <ul className="flex gap-2 mt-2 mb-3 overflow-x-scroll  scrollbar-hide ">
                                                        <li className="border border-gray-300 hover:border-purple-700 border-radius-12 px-2 cursor-pointer hover:text-white  hover:bg-purple-600">
                                                            <p className="font13-res-300 py-0 my-0">Matematika</p>
                                                        </li>
                                                        <li className="border border-gray-300 hover:border-purple-700 border-radius-12 px-2 cursor-pointer hover:text-white  hover:bg-purple-600">
                                                            <p className="font13-res-300 py-0 my-0">Website</p>
                                                        </li>
                                                        <li className="border border-gray-300 hover:border-purple-700 border-radius-12 px-2 cursor-pointer hover:text-white  hover:bg-purple-600">
                                                            <p className="font13-res-300 py-0 my-0">Website</p>
                                                        </li>
                                                        <li className="border border-gray-300 hover:border-purple-700 border-radius-12 px-2 cursor-pointer hover:text-white  hover:bg-purple-600">
                                                            <p className="font13-res-300 py-0 my-0">Website</p>
                                                        </li>

                                                    </ul>
                                                </div>
                                                <div className="text-left my-3">
                                                    <h4 className={"font15-res-300 "} style={{ fontWeight:"500"}}>Pencarian Terakhir</h4>
                                                    <ul className="block w-full overflow-y-auto" style={{ maxHeight:"180px"}}>
                                                        <Link >
                                                            <li  onMouseOver={handleHover}
                                                                 onMouseOut={handleHoverOut}
                                                                 className="w-11/12 flex py-2 justify-between text-purple-700 px-3 border-radius-4 hover:text-white  border-b cursor-pointer  border-gray-100 hover:bg-purple-600">
                                                                <div className="w-full ">
                                                                    <p className="font14-res-300 w-full my-0 cursor-pointer ">Website</p>
                                                                </div>
                                                                <div>
                                                                    <div className="my-auto" style={{height:"20px"}}>
                                                                        <img
                                                                            className="h-full mt-1 icon"
                                                                            src="/assets/icon-history-white.svg"
                                                                            data-hover-src="/assets/icon-history-white.svg"
                                                                            alt="History Icon"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </Link>
                                                        <Link >
                                                            <li  onMouseOver={handleHover}
                                                                 onMouseOut={handleHoverOut}
                                                                 className="w-11/12 flex py-2 justify-between text-purple-700 px-3 border-radius-4 hover:text-white  border-b cursor-pointer  border-gray-100 hover:bg-purple-600">
                                                                <div className="w-full ">
                                                                    <p className="font14-res-300 w-full my-0 cursor-pointer ">Website</p>
                                                                </div>
                                                                <div>
                                                                    <div className="my-auto" style={{height:"20px"}}>
                                                                        <img
                                                                            className="h-full mt-1 icon"
                                                                            src="/assets/icon-history-white.svg"
                                                                            data-hover-src="/assets/icon-history-white.svg"
                                                                            alt="History Icon"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </Link>
                                                        <Link >
                                                            <li  onMouseOver={handleHover}
                                                                 onMouseOut={handleHoverOut}
                                                                 className="w-11/12 flex py-2 justify-between text-purple-700 px-3 border-radius-4 hover:text-white  border-b cursor-pointer  border-gray-100 hover:bg-purple-600">
                                                                <div className="w-full ">
                                                                    <p className="font14-res-300 w-full my-0 cursor-pointer ">Website</p>
                                                                </div>
                                                                <div>
                                                                    <div className="my-auto" style={{height:"20px"}}>
                                                                        <img
                                                                            className="h-full mt-1 icon"
                                                                            src="/assets/icon-history-white.svg"
                                                                            data-hover-src="/assets/icon-history-white.svg"
                                                                            alt="History Icon"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </Link>
                                                        <Link >
                                                            <li  onMouseOver={handleHover}
                                                                 onMouseOut={handleHoverOut}
                                                                 className="w-11/12 flex py-2 justify-between text-purple-700 px-3 border-radius-4 hover:text-white  border-b cursor-pointer  border-gray-100 hover:bg-purple-600">
                                                                <div className="w-full ">
                                                                    <p className="font14-res-300 w-full my-0 cursor-pointer ">Website</p>
                                                                </div>
                                                                <div>
                                                                    <div className="my-auto" style={{height:"20px"}}>
                                                                        <img
                                                                            className="h-full mt-1 icon"
                                                                            src="/assets/icon-history-white.svg"
                                                                            data-hover-src="/assets/icon-history-white.svg"
                                                                            alt="History Icon"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </Link>
                                                        <Link >
                                                            <li  onMouseOver={handleHover}
                                                                 onMouseOut={handleHoverOut}
                                                                 className="w-11/12 flex py-2 justify-between text-purple-700 px-3 border-radius-4 hover:text-white  border-b cursor-pointer  border-gray-100 hover:bg-purple-600">
                                                                <div className="w-full ">
                                                                    <p className="font14-res-300 w-full my-0 cursor-pointer ">Website</p>
                                                                </div>
                                                                <div>
                                                                    <div className="my-auto" style={{height:"20px"}}>
                                                                        <img
                                                                            className="h-full mt-1 icon"
                                                                            src="/assets/icon-history-white.svg"
                                                                            data-hover-src="/assets/icon-history-white.svg"
                                                                            alt="History Icon"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </Link>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*<div*/}
                                    {/*    id="dropdown_profile"*/}
                                    {/*    className="z-10 fixed inset-0"*/}
                                    {/*    onClick={handleSearchHidden}*/}
                                    {/*>*/}
                                    {/*    <div className="bg-white bg-opacity-0 w-full h-full z-40 absolute right-0 bottom-0"></div>*/}
                                    {/*    <div className="absolute right-0 md:right-16 xl:right-28 z-50 top-12 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-36-c dark:bg-gray-700 dark:divide-gray-600">*/}
                                    {/*        <ul className="py-2 text-sm text-left text-gray-700 dark:text-gray-400">*/}
                                    {/*            <li className="py-1">*/}
                                    {/*                <Link to="/" className="block px-4 py-1.5 lg:py-2 hover:bg-gray-100 font15-res-300 dark:hover:bg-gray-600 hover:text-purple-600 dark:hover:text-white">Activities</Link>*/}
                                    {/*            </li>*/}
                                    {/*            <li className="py-1">*/}
                                    {/*                <Link to="/profile" className="block px-4 py-1.5 lg:py-2 hover:bg-gray-100 font15-res-300 dark:hover:bg-gray-600 hover:text-purple-600 dark:hover:text-white">Profile</Link>*/}
                                    {/*            </li>*/}
                                    {/*            <li className="py-1">*/}
                                    {/*                <Link to="/logout" className="block px-4 py-1.5 lg:py-2 hover:bg-gray-100 font15-res-300 dark:hover:bg-gray-600 hover:text-purple-600 dark:hover:text-white">Log out</Link>*/}

                                    {/*                /!*<button onSubmit={handleLogout} className="block px-4 font15-res-300 py-1.5 lg:py-2 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-purple-600 dark:hover:text-white">Log Out</button>*!/*/}
                                    {/*            </li>*/}
                                    {/*        </ul>*/}
                                    {/*    </div>*/}
                                    {/*</div>*/}
                                </div>
                            )}
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
                                <Link to="/feed" className="text-purple-400 cursor-pointer hover:text-purple-600">Feed
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


