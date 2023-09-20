import React, {useEffect, useRef, useState} from "react";
import {Link} from "react-router-dom";
import CustomAlert from "../../Helper/CustomAlert.Component";

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

    // Input date string
    const dateString = props.created_at;

// Create a Date object from the input string
    const date = new Date(dateString);

// Extract date components
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-indexed, so add 1 and pad with '0' if needed
    const day = date.getDate().toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');

// Format the date in your desired format
    const formattedDate = `${hours}:${minutes}:${seconds} `;

    console.log(formattedDate); // Output: "2023-09-20 09:08:10"

    const urlClass = window.location.href;

    const definedUrlClass = `/view/class/${props.id}/${props.slug}`
    const inputRefClass = useRef(null);
    const [showAlert, setShowAlert] = useState(false);

    const copyUrlClass = () => {
        setShowAlert(true)
        setIsDropdownMenu(false)
        inputRefClass.current.value = definedUrlClass;
        inputRefClass.current.select();
        document.execCommand('copy');
    };

    return(
        <>
            <div className="bg-white pb-1 pt-4 mb-2 md:w-1/2 w-full border-b shadow  border-gray-200 md:border-radius-8" >
                <div className="w-11/12 mx-auto">
                    <div className="flex w-full gap-1">
                        <div className="px-2 py-1 border-radius-4 me-2" style={{ background:"#A568E6" , height:"40px" }} >
                            <div className="my-auto" style={{ height:"32px"}}>
                                {props.type === "absent" ? (
                                    <img className="h-full" src="/assets/absent-sm-icon.svg" />
                                ): (
                                    <img className="h-full" src="/assets/assigment-sm-icon.svg" />
                                )}
                            </div>
                        </div>
                        <div className="flex w-full justify-between">
                            <div className="my-0 text-left py-0">
                                <h3 className="my-0 py-0 text-gray-500 sm:font16-res-300 font15-res-300" style={{  fontWeight:"500"}}>  {truncatedName}</h3>
                                <h5 className="mb-0 mt-0 text-left text-gray-600 sm:font14-res-300 font13-res-300" >{props.type}</h5>

                            </div>
                            <div className="flex  gap-3">
                                <div>
                                    {props.status === "selesai" ? (
                                        <h5 className="my-0 py-1 w-full px-2 bg-green-400 border-radius-4 text-center text-white sm:font14-res-300  font13-res-300" >{props.status}</h5>
                                    ) : props.status === "melewatkan" ? (
                                        <h5 className="my-0 py-1 w-full px-2 bg-red-400 border-radius-4 text-center text-white  sm:font14-res-300  font13-res-300" >{props.status}</h5>
                                    ) : (
                                        <h5 className="my-0 py-1 w-full px-2 bg-yellow-300 border-radius-4 text-center text-white  sm:font14-res-300  font13-res-300" >{props.status}</h5>
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
                                        >
                                            <div className="bg-white bg-opacity-0 w-full h-full z-40 absolute right-0 bottom-0"
                                                 onClick={handleDropdownMenu}
                                            ></div>
                                            <div className="relative">
                                                <div className="absolute right-0 md:right-0 xl:right-0 z-50 top-0 font14-res-300 bg-white divide-y divide-gray-100 rounded-lg shadow w-36 md:w-44 dark:bg-gray-700 dark:divide-gray-600">
                                                    <div id="dropdown_profile" className={`z-10 ${isDropdownMenu ? 'hidden' : ''} absolute right-10 top-0 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-36 dark:bg-gray-700 dark:divide-gray-600`}>
                                                        <ul className="py-2 text-sm font14-res-300 text-left text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                                            <li>

                                                                <div  >
                                                                    <input
                                                                        id="copyCode"
                                                                        ref={inputRefClass}
                                                                        defaultValue={urlClass}
                                                                        style={{ position: 'fixed', top: '-9999px' }}
                                                                    />
                                                                    <button
                                                                        onClick={copyUrlClass}
                                                                        className="block px-4 py-2  w-full  text-left hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-purple-600 dark:hover:text-white"

                                                                    >
                                                                        Copy Link
                                                                    </button>
                                                                    {showAlert && (
                                                                        <div id="drop-action" className="fixed inset-0 flex items-center justify-center">
                                                                            {/* This div serves as a backdrop and should cover the entire screen */}
                                                                            <button
                                                                                onClick={() => setShowAlert(false)} // Close the alert when clicking the backdrop
                                                                                className="bg-gray-500 bg-opacity-30 w-full h-full absolute top-0 left-0"
                                                                                style={{ zIndex: "300" }}
                                                                            ></button>

                                                                            <CustomAlert
                                                                                message={`Copied URL: ${definedUrlClass}`}
                                                                                onClose={() => setShowAlert(false)} // Close the alert when using the custom alert's close button
                                                                            />
                                                                        </div>
                                                                    )}


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

                        <div className="flex mt-3 border-t pt-2 justify-between text-gray-500 mb-1">
                            <div className="block">
                                <div className="flex  text-left  gap-1">
                                    <p className=" sm:font14-res-300  font13-res-300">Action :</p>
                                    <div className="flex gap-2 text-left">
                                        <p className="font14-res-300" style={{ fontWeight: "600" }}>
                                            {props.type === "absent"
                                                ? props.action === null
                                                    ? "belum absent"
                                                    : props.action
                                                : props.assignment_time === null
                                                    ? "belum mengerjakan"
                                                    : props.assignment_time}
                                        </p>

                                    </div>
                                </div>
                                <div className="flex  text-left  gap-1">
                                    <p className=" sm:font14-res-300  font13-res-300">Deadline :</p>
                                    <div className="flex gap-2 text-left">

                                        <p className=" sm:font14-res-300  font13-res-300">{props.deadline} </p>
                                    </div>
                                </div>
                            </div>
                           <div className="block">
                               <div className="flex text-left  gap-1">
                                   <p className=" sm:font14-res-300  font13-res-300">Guru :</p>
                                   <div className="flex text-left">
                                       <p className=" sm:font14-res-300  font13-res-300">{props.teacher}</p>
                                   </div>
                               </div>
                               <div className="flex   text-left  gap-1">
                                   <p className=" sm:font14-res-300  font13-res-300">Dibuat :</p>
                                   <div className="flex text-left">
                                       <p className=" sm:font14-res-300  font13-res-300">{formattedDate}</p>
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