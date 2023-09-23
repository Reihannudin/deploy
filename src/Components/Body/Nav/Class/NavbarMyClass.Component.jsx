import {Link, useLocation, useNavigate, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";


export const NavbarMyClassComponent = (props) => {

    const { id, slug } = useParams();

    const [isMenuHidden, setIsMenuHidden] = useState(true);
    const [isDropdownHidden, setIsDropdownHidden] = useState(true);
    const [isDropdownHiddenCreate, setIsDropdownHiddenCreate] = useState(true);

    const location = useLocation();

    const isDetailClassActive = location.pathname === `/view/my/class/${id}/${slug}`
    const isStudentActive = location.pathname === `/view/my/class/${id}/${slug}/students`
    const [dropAction , setDropAction] = useState(false);

    const toggleMenu = () => {
        setIsMenuHidden((prevHidden) => !prevHidden);
    };

    const toggleDropdown = () => {
        setIsDropdownHidden((prevHidden) => !prevHidden);
    };

    const handleDropdownProfile = () => {
        // Close the dropdown when an item is clicked
        setIsDropdownHidden(true);
    };

    const toggleDropdownCreate = () => {
        setIsDropdownHiddenCreate((prevHidden) => !prevHidden);
    };

    const handleDropdownCreate = () => {
        setIsDropdownHiddenCreate(true);
    };


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

    const photoProfile = props.image;

    const propsName = props.name.length;
    const truncatedName = propsName > 12 ? `${props.name.slice(0, 20)}...` : props.name;

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
                                    <div className="my-0.5 text-left  text-purple-700" >
                                        <h4 className="my-2 font16-res-400" >{window.innerWidth > 465 ? props.name : truncatedName}</h4>
                                    </div>
                                </div>

                                <div className="flex justify-between">
                                    <div className="  mx-16 w-full lg:flex hidden my-auto  lg:items-center lg:w-auto" id="menu">
                                        <div className="flex gap-4 my-auto ">
                                            <div  className="font-medium mt-1">
                                                <ul className="list-none gap-6 font16-res-300 flex" style={{ fontWeight :"500"}}>
                                                    <li className="pe-6 my-auto" style={{ borderRight:"1px solid #ebebeb"}}>
                                                        <Link  style={{ fontWeight:"500"}} className={` text-gray-400 my-0 relative cursor-pointer ${isDetailClassActive ? 'text-purple-600' : 'text-gray-400'} hover:text-purple-600 font`} to={`/view/my/class/${id}/${slug}`}>Kelas
                                                            <div className="w-full mx-auto  absolute top-2 my-3  h-1 cursor-pointer hover:bg-purple-400  block hover:scale-x-50 transform origin-center  transition-transform duration-300">
                                                            </div>
                                                        </Link>
                                                    </li>
                                                    <li className="pe-6 my-auto" style={{ borderRight:"1px solid #ebebeb"}}>
                                                        <Link style={{ fontWeight:"500"}}   className={` text-gray-400 my-0 relative cursor-pointer ${isStudentActive ? 'text-purple-600' : 'text-gray-400'} hover:text-purple-600 font`} to={`/view/my/class/${id}/${slug}/students`} >Murid
                                                            <div className="w-full mx-auto  absolute top-2 my-3  h-1 cursor-pointer hover:bg-purple-400  block hover:scale-x-50 transform origin-center  transition-transform duration-300">
                                                            </div>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex  ">
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
                                        <div className="relative my-auto hidden md:block">
                                            <button onClick={toggleDropdownCreate} id="menu-button" className={`me-4 ms-2  ${isDropdownHiddenCreate ? 'bg-white px-1 ' : 'px-1 bg-gray-100 radius-100 '} my-2`} >
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
                                                    <div className="bg-white bg-opacity-0 w-full h-full z-40 absolute right-0 bottom-0 top-0"></div>
                                                    <div className="absolute right-0 md:right-16 xl:right-28 z-50 top-12 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-36 md:w-44 dark:bg-gray-700 dark:divide-gray-600">
                                                        <ul className="py-2 text-sm text-left text-gray-700 dark:text-gray-400">
                                                            <li className="">
                                                                <Link to={`/class/${slug}/${id}/create/absent`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-purple-600 font14-res-300 dark:hover:text-white">Buat Absensi</Link>
                                                            </li>
                                                            <li className="">
                                                                <Link to={`/class/${slug}/${id}/create/assignment`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-purple-600 font14-res-300 dark:hover:text-white">Buat Tugas</Link>
                                                            </li>
                                                            <li className="">
                                                                <Link to={`/class/${slug}/${id}/create/resource`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-purple-600 font14-res-300 dark:hover:text-white">Buat Sumber Daya</Link>
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
                                                    <div style={{ width: "38px", height: "38px" }} >
                                                        <img className="h-full w-full" src={photoProfile || '../assets/default-profile.svg' } alt="Profile" />
                                                    </div>
                                                    <div className="my-auto" style={{ height: "19px", width: "19px" , transform: isDropdownHidden ? 'rotate(-180deg)' : 'none' ,    transition: 'transform 0.3s ease-in-out' }}>
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
                                                    <div className="absolute right-0 md:right-16 xl:right-28 z-50 top-12 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-36 md:w-44 dark:bg-gray-700 dark:divide-gray-600">
                                                        <ul className="py-2 text-sm text-left text-gray-700 dark:text-gray-400">
                                                            <li className="py-1">
                                                                <a href="/" className="block px-4 py-1.5 lg:py-2 hover:bg-gray-100 font15-res-300 dark:hover:bg-gray-600 hover:text-purple-600 dark:hover:text-white">Activities</a>
                                                            </li>
                                                            <li className="py-1">
                                                                <a href="/profile" className="block px-4 py-1.5 lg:py-2 hover:bg-gray-100 font15-res-300 dark:hover:bg-gray-600 hover:text-purple-600 dark:hover:text-white">Profile</a>
                                                            </li>
                                                            <li className="py-1">
                                                                <a href="http://127.0.0.1:8000/logout" className="block px-4 font15-res-300 py-1.5 lg:py-2 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-purple-600 dark:hover:text-white">Log Out</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        {/*<div className="my-auto flex gap-3">*/}
                                        {/*    <li className="my-auto relative mt-1 list-none">*/}
                                        {/*        <button  onClick={toggleDropdown} style={{ fontSize:"14px"}}  data-dropdown-toggle="dropdown_profile"*/}
                                        {/*                 className=" cursor-pointer gap-2 my-auto flex ">*/}
                                        {/*            <div style={{width:"35px", height:"35px"}}>*/}
                                        {/*                <img className="h-full w-full" src="/assets/default-profile.svg"/>*/}
                                        {/*            </div>*/}
                                        {/*            <div className="my-auto" style={{ height:"19px" , width:"19px"}}>*/}
                                        {/*                <img  className="w-full h-full" src="/assets/expand-icon.svg"/>*/}
                                        {/*            </div>*/}
                                        {/*        </button>*/}
                                        {/*        <div id="dropdown_profile"*/}
                                        {/*             className={`z-10 ${isDropdownHidden ? 'hidden' : ''} absolute right-0 top-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-32 dark:bg-gray-700 dark:divide-gray-600`}>*/}
                                        {/*            <ul className="py-2 text-sm text-left font16-res-300 text-gray-700 dark:text-gray-400"*/}
                                        {/*                aria-labelledby="dropdownLargeButton">*/}
                                        {/*                <li className="">*/}
                                        {/*                    <a href={``} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-purple-600  dark:hover:text-white">Activities</a>*/}
                                        {/*                </li>*/}
                                        {/*                <li className="">*/}
                                        {/*                    <a href={`/profile`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-purple-600  dark:hover:text-white">Profile</a>*/}
                                        {/*                </li>*/}
                                        {/*                <li className="">*/}
                                        {/*                    <a href={`https://rest-api.spaceskool.site/public/api/logout`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-purple-600  dark:hover:text-white">Log Out</a>*/}
                                        {/*                </li>*/}

                                        {/*            </ul>*/}
                                        {/*        </div>*/}
                                        {/*    </li>*/}
                                        {/*</div>*/}
                                    </div>
                                </div>

                            </div>
                        </nav>
                    </header>
                </div>
                <div  id="menu" className="h-full md:block hidden " >
                {/*<div id="menu" className={`h-full md:block  menu ${isMenuHidden ? 'hidden' : ''}`}>*/}
                    <div className={`h-full w-full  ${isMenuHidden ? 'hidden': 'block'} bg-white border-b `}>
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
                                    <Link to={`/view/my/class/${id}/${slug}`} className={ ` cursor-pointer hover:text-purple-600  ${isDetailClassActive? 'text-purple-600' : 'text-gray-400'}`} href="#">Kelas
                                        <div className="w-1/12 mx-auto h-1 cursor-pointer hover:bg-purple-400  block hover:scale-x-50 transform origin-center  transition-transform duration-300">
                                        </div>
                                    </Link>
                                </li>
                                <li className="pb-6 pt-4">
                                    <Link to={`/view/my/class/${id}/${slug}/students`} className={ `  cursor-pointer hover:text-purple-600  ${isStudentActive? 'text-purple-600' : 'text-gray-400'}`} href="#">Murid
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
