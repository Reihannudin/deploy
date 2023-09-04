import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

export const TaskCardComponent = (props) => {

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

    const truncatedName = props.name.length > 18 ? `${props.name.slice(0, 18)}...` : props.name;

    const [isDropdownMenu , setIsDropdownMenu] = useState(true);

    const toggleDropdownMenu = () => {
        setIsDropdownMenu((prevHidden) => ! prevHidden);
    }

    const handleDropdownMenu = () => {
        setIsDropdownMenu(true)
    }


    return(
        <>
            <div className="bg-white roboto pb-1 pt-4  border-b shadow  border-gray-200 md:border-radius-8" >
                <div className="w-11/12 mx-auto">
                    <div className="flex w-full gap-1">
                        <div className="px-2 py-1 border-radius-4 me-2" style={{ background:"#A568E6" , height:"40px" }} >
                            <div className="my-auto" style={{ height:"32px"}}>
                                <img className="h-full" src="/assets/assigment-sm-icon.svg" />
                            </div>
                        </div>
                        <div className="flex w-full justify-between">
                            <div className="my-0 text-left py-0">
                                <h3 className="my-0 py-0 text-gray-500 font16-res-400" style={{  fontWeight:"500"}}>  {truncatedName}</h3>
                                <h5 className="mb-0 mt-0 text-left text-gray-600 font13-res-300" >{props.taskType}</h5>

                            </div>
                            <div className="flex  gap-3">
                                <div>
                                    {props.status === "selesai" ? (
                                        <h5 className="my-0 py-1 w-full px-2 bg-green-400 border-radius-4 text-center text-white font14-res-300 " >{props.status}</h5>
                                    ) : props.status === "melewatkan" ? (
                                        <h5 className="my-0 py-1 w-full px-2 bg-red-400 border-radius-4 text-center text-white font14-res-300 " >{props.status}</h5>
                                    ) : (
                                        <h5 className="my-0 py-1 w-full px-2 bg-yellow-300 border-radius-4 text-center text-white font14-res-300 " >{props.status}</h5>
                                    )}
                                </div>
                                <div>
                                    <button onClick={toggleDropdownMenu} style={{ height:"24px"}} className="my-0">
                                        <div className="px-0.5 py-1 my-0 bg-white hover:px-0.5 hover:bg-gray-100 rounded-full">
                                            <div className=" mx-1" >
                                                <img className="h-full w-full" src="/assets/menu-icon.svg" style={{ height: "20px" }} alt="" />
                                            </div>
                                        </div>
                                    </button>
                                    {isDropdownMenu ? null : (
                                        <div
                                            id="dropdown_profile"
                                            className="z-10"
                                            onClick={handleDropdownMenu}
                                        >
                                            <div className="bg-white bg-opacity-0 w-full h-full z-40 absolute right-0 bottom-0"></div>
                                            <div className="relative">
                                                <div className="absolute right-0 md:right-16 xl:right-28 z-50 top-2 font14-res-300 bg-white divide-y divide-gray-100 rounded-lg shadow w-36 md:w-44 dark:bg-gray-700 dark:divide-gray-600">
                                                    <div id="dropdown_profile" className={`z-10 ${isDropdownMenu ? 'hidden' : ''} absolute right-10 top-0 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-36 dark:bg-gray-700 dark:divide-gray-600`}>
                                                        <ul className="py-2 text-sm font14-res-300 text-left text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                                            <li>
                                                                <div>
                                                                    <button  className="block w-full text-left px-4 py-1.5 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-purple-600 dark:hover:text-white">
                                                                        Copy Link
                                                                    </button>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div>
                                                                    <Link  className="block px-4 py-1.5 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-purple-600 dark:hover:text-white">
                                                                        View Detai
                                                                    </Link>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="py-1  border-radius-4 w-full" >

                        <div className="flex mt-1 justify-between text-gray-500 mb-1">
                            <div className="md:block  text-left  gap-1">
                                <p className="font14-res-300">Deadline :</p>
                                <div className="flex gap-2 text-left">
                                    <div className="my-1" style={{ height:"14px"}}>
                                        <img className="h-full my-auto w-full" src="/assets/calendar-icon.svg" />
                                    </div>
                                    <p className="font14-res-300">{props.deadline_date}</p>
                                </div>
                            </div>
                           <div className="block">
                               <div className="flex text-left  gap-1">
                                   <p className="font14-res-300">Teacher :</p>
                                   <div className="flex text-left">
                                       <p className="font14-res-300">{props.teacher}</p>
                                   </div>
                               </div>
                               <div className="flex   text-left  gap-1">
                                   <p className="font14-res-300">Created :</p>
                                   <div className="flex text-left">
                                       <p className="font14-res-300">{props.post_time}</p>
                                   </div>
                               </div>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}