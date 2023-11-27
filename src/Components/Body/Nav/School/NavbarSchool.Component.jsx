import {Link} from "react-router-dom";
import React, {useState} from "react";


export  const NavbarSchoolComponent = ({isFetching ,isDataFetched ,user}) => {

    const [isDropdownHidden, setIsDropdownHidden] = useState(true);

    const toggleDropdown = () => {
        setIsDropdownHidden((prevHidden) => !prevHidden);
    };

    const handleDropdownProfile = () => {
        // Close the dropdown when an item is clicked
        setIsDropdownHidden(true);
    };


    return(
        <>
            <nav className={"w-full py-5 border-b border-gray-300 bg-white"}>
                <header className={"sm:W-11/12 w-10/12 me-auto"}>
                    <div className={"w-11/12 mx-auto flex justify-between"}>
                        <div className={" text-left my-auto"}>
                            <h2 className={"text-purple-600"} style={{fontSize:"18px"}}>Dashboard</h2>
                        </div>
                        <div className={""}>
                            <div className="relative flex gap-3">
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
                </header>
            </nav>
        </>
    )
}