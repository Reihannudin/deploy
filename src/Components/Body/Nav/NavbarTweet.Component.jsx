import {Link} from "react-router-dom";
import {useState} from "react";


export const NavbarTweetComponent = () => {

    const [isMenuHidden , setIsMenuHidden] = useState(true);
    const [isDropdownHidden  , setIsDropdownHidden] = useState(true);
    const [isDropdownHiddenCreate , setIsDropdownHiddenCreate] = useState(true);

    const toggleMenu = () => {
        setIsMenuHidden((prevHidden) => !prevHidden);
    }

    const toggleDropdown = () => {
        setIsDropdownHidden((prevHidden) => ! prevHidden);
    }

    const toggleDropdownCreate = () => {
        setIsDropdownHiddenCreate((prevHidden) => ! prevHidden);
    }


    return(
        <>
            <div className="w-full fixed  bg-white" style={{  zIndex:"44" , minWidth:"400px"}}>
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
                            <div className="w-full justify-between flex">
                                <div className="flex">
                                    <a href="#">
                                        <div className="mt-2 mb-2" style={{ height:"36px"}} >
                                            <img className="w-full my-auto h-full" src="/assets/spaceskool-logo-bg.svg" alt="" />
                                        </div>
                                    </a>
                                </div>

                                <div className="flex justify-between">
                                    <div className="  mx-16 w-full lg:flex hidden my-auto  lg:items-center lg:w-auto" id="menu">
                                        <div className="flex gap-4 my-auto ">
                                            <div  style={{ fontSize:"16px"}} className="font-medium mt-1">
                                                <ul className="list-none gap-6 flex" style={{ fontWeight :"500"}}>
                                                    <li className="pe-6 my-auto" style={{ borderRight:"1px solid #ebebeb"}}>
                                                        <Link  style={{ fontWeight:"500"}} className="roboto text-gray-400 my-0 relative cursor-pointer hover:text-purple-600 font" to="#">Beranda
                                                            <div className="w-full mx-auto  absolute top-2 my-3  h-1 cursor-pointer hover:bg-purple-400  block hover:scale-x-50 transform origin-center  transition-transform duration-300">
                                                            </div>
                                                        </Link>
                                                    </li>
                                                    <li className="pe-6 my-auto" style={{ borderRight:"1px solid #ebebeb"}}>
                                                        <Link style={{ fontWeight:"500"}}  className="roboto text-gray-400 my-0 relative cursor-pointer hover:text-purple-600 font" to="#">Tweet
                                                            <div className="w-full mx-auto  absolute top-2 my-3  h-1 cursor-pointer hover:bg-purple-400  block hover:scale-x-50 transform origin-center  transition-transform duration-300">
                                                            </div>
                                                        </Link>
                                                    </li>
                                                    <li className="pe-6 my-auto" style={{ borderRight:"1px solid #ebebeb"}}>
                                                        <Link style={{ fontWeight:"500"}}  className="roboto text-gray-400 my-0 relative cursor-pointer hover:text-purple-600 font" to="#">My Class
                                                            <div className="w-full mx-auto  absolute top-2 my-3  h-1 cursor-pointer hover:bg-purple-400  block hover:scale-x-50 transform origin-center  transition-transform duration-300">
                                                            </div>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex  ">
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

                                        <div className="my-auto flex gap-3">
                                            <li className="my-auto relative mt-1 list-none">
                                                <button  onClick={toggleDropdown} style={{ fontSize:"14px"}}  data-dropdown-toggle="dropdown_profile"
                                                         className=" cursor-pointer gap-2 my-auto flex ">
                                                    <span style={{ fontSize:"16px"}} className="font-medium roboto text-gray-500">Reihannudin</span>
                                                    <div className="my-auto" style={{ height:"14px" , width:"14px"}}>
                                                        <img  className="w-full h-full" src="/assets/expand-icon.svg"/>
                                                    </div>
                                                </button>
                                                <div id="dropdown_profile"
                                                     className={`z-10 ${isDropdownHidden ? 'hidden' : ''} absolute left-0 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}>
                                                    <ul className="py-2 text-sm text-left text-gray-700 dark:text-gray-400"
                                                        aria-labelledby="dropdownLargeButton">
                                                        <li>
                                                            <a href={`http://127.0.0.1:8000/logout`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-purple-600  dark:hover:text-white">Pengaturan</a>
                                                        </li>
                                                        <li>
                                                            <a href={`http://127.0.0.1:8000/logout`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-purple-600  dark:hover:text-white">Activities</a>
                                                        </li>
                                                        <li>
                                                            <a href={`http://127.0.0.1:8000/logout`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-purple-600  dark:hover:text-white">Log Out</a>
                                                        </li>

                                                    </ul>
                                                </div>
                                            </li>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </nav>
                    </header>
                </div>
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
                                <li className="pt-8 pb-4">
                                    <Link  className=" roboto text-gray-400  cursor-pointer hover:text-purple-400" href="#">Beranda
                                        <div className="w-1/12 mx-auto h-1 cursor-pointer hover:bg-purple-400  block hover:scale-x-50 transform origin-center  transition-transform duration-300">
                                        </div>
                                    </Link>
                                </li>
                                <li className="py-4">
                                    <Link  className=" roboto text-gray-400  cursor-pointer hover:text-purple-400" href="#">Tweet
                                        <div className="w-1/12 mx-auto h-1 cursor-pointer hover:bg-purple-400  block hover:scale-x-50 transform origin-center  transition-transform duration-300">
                                        </div>
                                    </Link>
                                </li>
                                <li className="pb-6 pt-4">
                                    <Link  className="  roboto text-gray-400 cursor-pointer hover:text-purple-400" href="#">My Class
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