import {Link, useNavigate} from "react-router-dom";
import React, {useEffect, useRef, useState} from "react";
import axios from "axios";

export const ClassCardComponent = ( props ) => {

    const user = JSON.parse(localStorage.getItem('whoLogin'));
    const username = user.username;

    const [classes, setClasses] = useState([]);

    const [windowWidth , setWindowWidth] = useState(window.innerWidth);

    const [isDropdownMenu , setIsDropdownMenu] = useState(true);

    const toggleDropdownMenu = () => {
        setIsDropdownMenu((prevHidden) => ! prevHidden);
    }

    const handleDropdownMenu = () => {
        setIsDropdownMenu(true)
    }

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize' , handleResize);

        return () => {
            window.removeEventListener('resize' , handleResize);
        }
    } , []);

    const propsName = props.name.length;
    const propsTeacher = props.teacher.length;

    const truncatedName = propsName > 17 ? `${props.name.slice(0, 20)}...` : props.name;
    const truncatedTeacher = propsTeacher > 30 ? `${props.teacher.slice(0, 26)}...` : props.teacher;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://rest-api.spaceskool.site/public/api/classes/${props.id}/status`);
                const data = response.data;
                setClasses(data);
            } catch (error){
                console.log("Error Fetching class data:"  , error)
            }
        }
        fetchData()
    } , [])

    const urlClass = window.location.href;

    const definedUrlClass = `https://spaceskool.site/view/class/${props.id}/${props.slug}`

    const inputRefClass = useRef(null);

    const copyUrlClass = () => {
        if (inputRefClass.current){
            inputRefClass.current.value = definedUrlClass;
            inputRefClass.current.select();
            document.execCommand('copy');
            alert("Copied URL: " + definedUrlClass)
        }
    }

    const navigate = useNavigate();

    const [error, setError] = useState("");

    const handleOutClass = async () => {
        try {
            const response = await axios.delete(
                `https://rest-api.spaceskool.site/public/api/${username}/${props.slug}/out/classes/${props.id}`
            );
            const { redirectUrl } = response.data;
            window.location.href = redirectUrl;
        } catch (error) {
            const { errors } = error.response.data;
            setError(errors?.classname?.[0] || "");
        }
    }

    useEffect(() => {
        if (error) {
            navigate("/");
        }
    }, [error, navigate]);

    return(
        <>
            <div className="bg-white shadow mx-auto border-radius-8"   style={{ maxWidth:"320px" }}>
                <div className="w-full ">
                    <div className="w-full " >
                        <img className="w-full h-full object-cover"  style={{ maxWidth:"320px" , borderRadius:"8px 8px 0px 0px"  , maxHeight:"140px"}} src="/assets/bg-absence.svg"  />
                    </div>
                    <div className="block text-left mx-4 py-2 gap-4">
                        <div className="flex justify-between">
                            <div>
                                <h2 className="font-normal text-gray-800 my-0 py-0 font16-res-400"> {window.innerWidth > 639 ? truncatedName : props.name}</h2>
                                <h3 className="font-thin mt-0 text-gray-600 mb-2 font14-res-300 py-0" >{truncatedTeacher}</h3>
                            </div>
                            <div className="">
                                <button onClick={toggleDropdownMenu} className="my-auto">
                                    <div className="px-1 py-2 bg-white hover:px-1 hover:bg-gray-100 rounded-full">
                                        <div className="my-auto mx-1" style={{ height: "20px" }}>
                                            <img className="h-full w-full" src="/assets/menu-icon.svg" alt="" />
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
                                            <div className="absolute right-0 md:right-16 xl:right-28 z-50 bottom-10 font14-res-300 bg-white divide-y divide-gray-100 rounded-lg shadow w-36 md:w-44 dark:bg-gray-700 dark:divide-gray-600">
                                                <div id="dropdown_profile" className={`z-10 ${isDropdownMenu ? 'hidden' : ''} absolute right-10 top-0 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-36 dark:bg-gray-700 dark:divide-gray-600`}>
                                                    <ul className="py-2 text-sm font14-res-300 text-left text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                                        <li>
                                                            <div>
                                                                <input ref={inputRefClass} defaultValue={urlClass} style={{ position: 'fixed', top: '-9999px' }} />
                                                                <button onClick={copyUrlClass} className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-purple-600 dark:hover:text-white">
                                                                    Copy Link
                                                                </button>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div>
                                                                <button onClick={handleOutClass} className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-red-600 hover:text-red-600 dark:hover:text-white">Keluar</button>
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
                        <div className="border-t pt-2 flex justify-between">
                            <div className="my-auto">
                                {parseInt(classes.absent_count)  === 0 && parseInt(classes.assignment_count) === 0 ? (
                                    <p className="font13-res-300 text-gray-600" >tidak ada aktivitas</p>
                                ):(
                                    <p className="font13-res-300 text-gray-600" >terdapat {classes.total_count} activitas </p>
                                )}
                            </div>
                            <button className="mt-1 py-0.5 mb-1 text-black border-radius-8">
                                <Link to={`/view/class/${props.id}/${props.slug}`}>
                                    <div style={{ height:"18px"}}>
                                        <img src="/assets/arrows-right.svg" className="w-full h-full" />
                                    </div>
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}