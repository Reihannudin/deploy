import {Link, useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";


export const NavbarClassComponent = (props) => {

    const [isDropdownHidden  , setIsDropdownHidden] = useState(true);
    const [windowWidth , setWindowWidth] = useState(window.innerWidth);

    const user = JSON.parse(localStorage.getItem('whoLogin'));
    const photoProfile = user.image;


    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize' , handleResize);

        return () => {
            window.removeEventListener('resize' , handleResize);
        }
    } , []);

    const toggleDropdown = () => {
        setIsDropdownHidden((prevHidden) => ! prevHidden);
    }

    const handleDropdown = () => {
        setIsDropdownHidden(true)
    }

    const navigate = useNavigate();

    const navigateBack = () => {
        navigate(-1)
    };

    const propsName = props.name.length;
    const truncatedName = propsName > 12 ? `${props.name.slice(0, 12)}...` : props.name;


    return(
        <>
            <nav className="w-full fixed md:py-0.5 py-0 border-b bg-white" style={{  zIndex:"44" , minWidth:"300px"}}>
                <div className="mx-auto  pt-2 pb-2 flex  w-full" >
                    <header className="w-full">
                        <nav
                            className="
                        lg:w-11/12
                        sm:w-11/12
                        w-11/12
                        xl:w-10/12
          flex
          justify-between
          mx-auto
          sm:py-0
          sm:px-4
          ps-0 pe-4
          text-lg text-gray-700
          bg-white
        "
                        >
                            <div className="w-full justify-between flex">
                                <div className="flex my-auto mt-1 gap-3">
                                    <Link to="/">
                                            <div className="my-2">
                                                <img  style={{ height:"24px"}} src="/assets/arrow-back.svg"/>
                                            </div>
                                    </Link>
                                    <div className="my-1 text-left text-purple-700" >
                                        <h4 className="my-0.5 font16-res-400" >{window.innerWidth > 465 ? props.name : truncatedName}</h4>
                                    </div>
                                </div>

                                <div className="flex justify-end">
                                    <div className="  w-full lg:flex  my-auto items-end ms-auto lg:w-auto" id="menu">
                                        <div className="flex gap-4 ms-auto my-auto ">
                                            <div className="mt-0.5 relative flex gap-3">
                                                <li className="my-auto relative mt-1 list-none">
                                                    <button
                                                        onClick={toggleDropdown}
                                                        style={{ fontSize: "14px" }}
                                                        className="cursor-pointer ms-auto gap-2 my-auto flex"
                                                    >
                                                        <div style={{ width: "38px", height: "38px" }}>
                                                            <img className="h-full w-full" src={photoProfile} alt="Profile" />
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
                                                        onClick={handleDropdown}
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


                                        </div>
                                    </div>

                                </div>

                            </div>
                        </nav>
                    </header>
                </div>
            </nav>
        </>
    )
}