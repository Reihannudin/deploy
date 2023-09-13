import React, {useEffect, useRef, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import api from "../../../Config/api";
import CustomAlert from "../../Helper/CustomAlert.Component";
import {DeleteAlertComponent} from "../../Helper/DeleteAlert.Component";
import {AbsentMyTaskClassCardHelper} from "./Helper/AbsentMyTaskClassCard.Helper";

export const TaskMyClassCardComponent = (props) => {
    const {id  ,slug} = useParams();


    const [windowWidth , setWindowWidth] = useState(window.innerWidth);
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize' , handleResize);

        return () => {
            window.removeEventListener('resize' , handleResize);
        }
    } , []);

    const urlAbsent = window.location.href;

    const definedUrlAbsent = `/view/${slug}/detail/absent/${props.id}`;
    const inputRefAbsent = useRef(null);

    const copyUrlAbsent = () => {
        if (inputRefAbsent.current) {
            setShowAlert(true);
            inputRefAbsent.current.value = definedUrlAbsent;
            inputRefAbsent.current.select();
            document.execCommand('copy');
        }
    };

    const truncatedName = props.name.length > 24 ? `${props.name.slice(0, 23)}...` : props.name;

    const [isDropdownMenu , setIsDropdownMenu] = useState(true);
    const [error, setError] = useState("");

    const toggleDropdownMenu = () => {
        setIsDropdownMenu((prevHidden) => ! prevHidden);
    }

    const handleDropdownMenu = () => {
        setIsDropdownMenu(true)
    }


    const username = props.username;


    const navigate = useNavigate();


    console.log(isDropdownMenu)


    // Copy Assignment
    const urlAssignment = window.location.href;

    const definedUrlAssignment = `https://spaceskool.site/view/${slug}/my/assignment/${props.id}`

    const inputRefAssignment = useRef(null);

    const copyUrlAssignment = () => {
        if (inputRefAssignment.current){
            inputRefAssignment.current.value = definedUrlAssignment;
            inputRefAssignment.current.select();
            document.execCommand('copy');
            alert("Copied URL: " + definedUrlAssignment)
        }
    }

    // Copy Resource
    const urlResource = window.location.href;

    const definedUrlResource = `https://spaceskool.site/view/${slug}/${id}/my/resource/${props.id}`

    const inputRefResource = useRef(null);

    const copyUrlResource = () => {
        if (inputRefResource.current){
            inputRefResource.current.value = definedUrlResource;
            inputRefResource.current.select();
            document.execCommand('copy');
            alert("Copied URL: " + definedUrlResource)
        }
    }

    // const handleDeleteAbsent = async () => {
    //     try {
    //         const response = await axios.delete(
    //             `https://rest-api.spaceskool.site/public/api/${username}/${props.slug}/${props.class_id}/delete/absent/${props.id}`
    //         );
    //         const { redirectUrl } = response.data;
    //         window.location.href = redirectUrl;
    //     } catch (error) {
    //         const { errors } = error.response.data;
    //         setError(errors?.classname?.[0] || "");
    //     }
    // };

    const handleDeleteAssignment = async () => {
        try {
            const response = await axios.delete(
                `https://rest-api.spaceskool.site/public/api/${username}/${props.slug}/delete/assignment/${props.id}`
            );
            const { redirectUrl } = response.data;
            window.location.href = redirectUrl;
        } catch (error) {
            const { errors } = error.response.data;
            setError(errors?.classname?.[0] || "");
        }
    };

    const handleDeleteResource = async () => {
        try {
            const response = await axios.delete(
                `https://rest-api.spaceskool.site/public/api/${username}/${props.slug}/delete/resource/${props.id}`
            );
            const { redirectUrl } = response.data;
            window.location.href = redirectUrl;
        } catch (error) {
            const { errors } = error.response.data;
            setError(errors?.classname?.[0] || "");
        }
    };

    useEffect(() => {
        if (error) {
            navigate(`/view/my/class/${id}/${slug}`);
        }
    }, [error, navigate]);

    return(
        <>
            <div className="mb-10">
                {props.type  === "absent" ? (
                    <div >
                        <AbsentMyTaskClassCardHelper
                            id={id} slug={slug} navigate={navigate}
                            absentId={props.id} absentStatus={props.status} absentEndTime={props.end_time} absentDate={props.date}
                            absentName={props.name} absentPostTime={props.post_time}
                            isDropdownMenu={isDropdownMenu} setIsDropdownMenu={setIsDropdownMenu}
                            copyUrlAbsent={copyUrlAbsent} inputRefAbsent={inputRefAbsent} urlAbsent={urlAbsent}
                        />
                    </div>
                ) : (props.type === "assignment") ? (
                    <div>
                        <div>
                            <div className="bg-white border  py-3 border-b-0 border-radius-4 px-4">
                                <div className="flex relative">
                                    <div className="p-2 border-radius-4 me-2" style={{ background:"#A568E6" , height:"40px" }} >
                                        <div className="my-auto" style={{ height:"24px"}}>
                                            <img className="h-full" src="/assets/assigment-sm-icon.svg" />
                                        </div>
                                    </div>

                                    <div className="w-10/12 text-left mx-3">
                                        <h2 className="font16-res-300"> {window.innerWidth >= 768 ? truncatedName : props.name}</h2>
                                        <p className="font14-res-300" style={{  color:"#5d5959"}}>{props.post_time}</p>
                                    </div>
                                    <div className="md:w-1/12 w-2/12 my-auto">
                                        <button onClick={toggleDropdownMenu} className="my-auto">
                                            <div  className="px-1 py-2 bg-white hover:px-1 hover:bg-gray-100 radius-100 ">
                                                <div className="my-auto  mx-1 " style={{ height:"24px"}}>
                                                    <img className="h-full w-full" src="/assets/menu-icon.svg"/>
                                                </div>
                                            </div>
                                        </button>

                                    </div>
                                    {isDropdownMenu ? null : (
                                        <div
                                            id="dropdown_menu_assignment"
                                            className="z-10 fixed inset-0"
                                            onClick={handleDropdownMenu}
                                        >
                                            <div className="bg-white bg-opacity-0 w-full h-full z-40 absolute right-0 bottom-0"></div>
                                            <div className="absolute right-0 md:right-16 xl:right-28 z-50 top-12 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-36 md:w-44 dark:bg-gray-700 dark:divide-gray-600">
                                                <ul className="py-2 text-sm text-left text-gray-700 dark:text-gray-400">
                                                    <li className={"py-1"}>
                                                        <input ref={inputRefAssignment} defaultValue={urlAssignment} style={{ position: 'fixed', top: '-9999px' }} />
                                                        <button onClick={copyUrlAssignment} className="block w-full text-left font14-res-300 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-purple-600 dark:hover:text-white">
                                                            Copy Link
                                                        </button>
                                                    </li>
                                                    <li className={"py-1"}>
                                                        <Link to={`/class/${slug}/${props.class_id}/edit/assignment/${props.id}`} className="block px-4 py-1.5 lg:py-2  font14-res-300 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-purple-600  dark:hover:text-white">Edit Assignment</Link>
                                                    </li>
                                                    <li className={"py-1"}>
                                                        <button onClick={handleDeleteAssignment} className="block px-4 py-1.5 lg:py-2  font14-res-300 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-purple-600  dark:hover:text-white">Hapus</button>

                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="bg-white border border-radius-4 px-4 py-2">
                                <Link to={`/view/${slug}/${id}/my/assignment/${props.id}`}>
                                    <div className="flex justify-between w-11/12 gap-4 ms-auto">
                                        {props.status === "selesai" ? (
                                            <div>
                                                <div className="w-full text-green-600 bg-green-200 px-4 border-radius-4 " >
                                                    <p className="font14-res-300">{props.status}</p>
                                                </div>
                                            </div>
                                        ): (props.status === "melewatkan") ? (
                                            <div>
                                                <div className="w-full text-red-600 bg-red-200 px-2 border-radius-4 " >
                                                    <p className="font14-res-300">{props.status}</p>
                                                </div>
                                            </div>
                                        ) : (
                                            <div>
                                                <div className="w-full text-yellow-600 bg-yellow-200 px-4 border-radius-4 " >
                                                    <p className="font14-res-300">{props.status}</p>
                                                </div>
                                            </div>
                                        )}
                                        <div className="flex gap-2 mx-6">
                                            <div  className="mt-0.5 font14-res-300" >
                                                <p className="my-auto text-gray-400" >{props.end_time} - {props.date}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>

                        </div>

                    </div>
                ) : (
                    <div >
                        <div>
                            <div className="bg-white border py-3 border-b-0 border-radius-4 px-4">
                                <div className="flex relative">
                                    <div className="p-2 border-radius-4 me-2" style={{ background: "#A568E6", height: "40px" , width:"40px" }}>
                                        <div className="my-auto" style={{ height: "24px" ,  width:"40px" }}>
                                            <img className="h-full" src="/assets/resource-sm-icon.svg" alt="" />
                                        </div>
                                    </div>
                                    <div className="w-10/12 text-left mx-3">
                                        <h2 className="font16-res-300">{window.innerWidth >= 768 ? truncatedName : props.name}</h2>
                                        <p className="font14-res-300" style={{ color: "#5d5959" }}>{props.post_time}</p>
                                    </div>
                                    <div className="md:w-1/12 w-2/12 my-auto">
                                        <button onClick={toggleDropdownMenu} className="my-auto">
                                            <div className="px-1 py-2 bg-white hover:px-1 hover:bg-gray-100 rounded-full">
                                                <div className="my-auto mx-1" style={{ height: "24px" }}>
                                                    <img className="h-full w-full" src="/assets/menu-icon.svg" alt="" />
                                                </div>
                                            </div>
                                        </button>
                                    </div>
                                    <div id="dropdown_menu_resource" className={`z-10 ${isDropdownMenu ? 'hidden' : ''} absolute right-0 top-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}>
                                        <ul className="py-2 font16-res-300 text-sm text-left text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                            <li>
                                                <div>
                                                    <input ref={inputRefResource} defaultValue={urlResource} style={{ position: 'fixed', top: '-9999px' }} />
                                                    <button onClick={copyUrlResource} className="block w-full text-left px-4 py-2 font16-res-300 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-purple-600 dark:hover:text-white">
                                                        Copy Link
                                                    </button>
                                                </div>
                                            </li>
                                            <li>
                                                <div>
                                                    <Link to={`/class/${slug}/${id}/edit/resource/${props.id}`} className="block px-4 py-2 font16-res-300 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-purple-600 dark:hover:text-white">Edit Resource</Link>
                                                </div>
                                            </li>
                                            <li>
                                                <div>
                                                    <button onClick={handleDeleteResource} className="block px-4 w-full text-left py-2 font16-res-300 hover:bg-gray-100 dark:hover:bg-red-600 hover:text-red-600 dark:hover:text-white">Hapus</button>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white border border-radius-4 px-4 py-2">
                                <Link to={`/view/${slug}/${id}/my/resource/${props.id}`}>
                                    <div className="flex justify-between w-11/12 gap-4 ms-auto">
                                        {props.status === "selesai" ? (
                                            <div>
                                                <div className="w-full text-green-600 bg-green-200 px-4 border-radius-4">
                                                    <p className="font14-res-300">{props.status}</p>
                                                </div>
                                            </div>
                                        ) : props.status === "melewatkan" ? (
                                            <div>
                                                <div className="w-full text-red-600 bg-red-200 px-2 border-radius-4">
                                                    <p className="font14-res-300">{props.status}</p>
                                                </div>
                                            </div>
                                        ) : (
                                            <div>
                                                <div className="w-full text-yellow-600 bg-yellow-200 px-4 border-radius-4">
                                                    <p className="font14-res-300">{props.status}</p>
                                                </div>
                                            </div>
                                        )}
                                        <div className="flex gap-2 mx-5">
                                            <div className="mt-0.5 font14-res-300">
                                                <div style={{ height:"18px"}}>
                                                    <img src="/assets/arrows-right.svg" className="w-full h-full" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {showAlert && (
                <div id="drop-action" className="fixed inset-0 flex items-center justify-center"  style={{ zIndex: "10000" }}>
                    {/* This div serves as a backdrop and should cover the entire screen */}
                    <button
                        onClick={() => setShowAlert(false)} // Close the alert when clicking the backdrop
                        className="bg-gray-500 bg-opacity-30 w-full h-full fixed top-0 left-0"
                        style={{ zIndex: "10000" }}
                    ></button>

                    <CustomAlert
                        message={`Copied Url: ${urlAbsent}`}
                        onClose={() => setShowAlert(false)} // Close the alert when using the custom alert's close button
                    />
                </div>
            )}
        </>
    )
}
