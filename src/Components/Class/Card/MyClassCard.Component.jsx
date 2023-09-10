import React, {useEffect, useRef, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import api from "../../../Config/api";
import CustomAlert from "../../Helper/CustomAlert.Component";
import {DeleteAlertComponent} from "../../Helper/DeleteAlert.Component";

export const MyClassCardComponent = ( props ) => {

    const navigate = useNavigate();

    const [isDropdownMenu , setIsDropdownMenu] = useState(true);

    const toggleDropdownMenu = () => {
        setIsDropdownMenu((prevHidden) => ! prevHidden);
    }

    const handleDropdownClass = () => {
        setIsDropdownMenu(true)


    }

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

    const propsName = props.name.length;
    const propsTeacher = props.teacher.length;

    const truncatedName = propsName > 17 ? `${props.name.slice(0, 16)}...` : props.name;
    const truncatedTeacher = propsTeacher > 20 ? `${props.teacher.slice(0, 20)}...` : props.teacher;

    const [classes, setClasses] = useState([]);
    const [isFetching, setIsFetching] = useState(true);
    const [isDataFetched, setIsDataFetched] = useState(false);

    const [deleteClasses, setDeleteClasses] = useState([]);
    const [isDataDeleteClass, setIsDataDeleteClass] = useState(false);
    const [isDeleteClass, setIsDeleteClass] = useState(true);

    const [error, setError] = useState("");

    useEffect(() => {
        // Show the custom alert when the component mounts
        let isMounted = true;

        const fetchData = async () => {
            try {
                if (!isDataFetched) {
                    const response = await api.get(`/my/classes/${props.id}/status`);
                    const data = response.data;

                    if (isMounted) {
                        setClasses(data);
                        setIsDataFetched(true);
                        setIsFetching(false);
                    }
                }
            } catch (error) {
                if (isMounted) {
                    setError(error);
                    setIsFetching(false);
                }
            }
        };

        const timeout = setTimeout(() => {
            if (isFetching) {
                if (isMounted) {
                    setError(new Error("Timeout: Could not fetch data."));
                    setIsFetching(false);
                }
            }
        }, 20000);

        fetchData();

        return () => {
            isMounted = false;
            clearTimeout(timeout);
        };
    }, [isDataFetched]);


    const [redirectPath, setRedirectPath] = useState("/create/class");
    const [isLoading, setIsLoading] = useState(false);

    const handleDeleteClass = async (event) => {
        event.preventDefault();

        // console.log(`${props.slug}/delete/classes/${props.id}`)

        api
            .delete(`${props.slug}/delete/classes/${props.id}`)
            .then((response) => {
                setIsLoading(false); // Stop loading indicator
                if (response.data.status === 201 && response.data.message === "Berhasil menghapus kelas!") {
                    let redirectUrl = response.data.redirect_path;
                    setRedirectPath(redirectUrl);
                    navigate(redirectUrl);
                    window.location.reload(); // Refresh the page
                  }

                else if (response.data.status === 406) {
                    // console.log(response.data.errors);
                    if (response.data.errors.error_name === "Kelas tidak ditemukan") {
                        let redirectUrl = response.data.redirect_path;
                        setRedirectPath(redirectUrl);
                        setError(response.data.errors.error_name);
                        navigate(redirectUrl);
                    }
                }


            })
            .catch((error) => {
                const { errors } = error.response.data;
                setError(errors?.errors?.[0] || '');
            });

    };

    const urlClass = window.location.href;
    const definedUrlClass = `http://localhost:3000/view/class/${props.id}/${props.slug}`;
    const inputRefClass = useRef(null);
    const [showAlert, setShowAlert] = useState(false);

    const copyUrlClass = () => {
            setShowAlert(true)
            setIsDropdownMenu(false)
            inputRefClass.current.value = definedUrlClass;
            inputRefClass.current.select();
            document.execCommand('copy');
    };

    const [showAlertDelete  , setShowAlertDelete] = useState(false);
    const inputRefClassDelete = useRef(null);

    const handleAlertClass = () => {
        setShowAlertDelete(true)
        setIsDropdownMenu(false)
        inputRefClassDelete.current.select();
        document.execCommand('delete');
    };

    const handleAlertnItemClick = () => {
        // Close the dropdown when an item is clicked
        setShowAlert(false);
    };


    // console.log(showAlert)



    return(
        <>
            <div className="bg-white shadow mx-auto border-radius-8"   style={{ maxWidth:"320px" }}>
                <div className="w-full ">
                    <div className="w-full " >
                        <img className="w-full h-full object-cover"  style={{ maxWidth:"320px" , borderRadius:"8px 8px 0px 0px" , maxHeight:"140px"}} src="/assets/bg-absence.svg"  />
                    </div>
                    <div className="block w-11/12 sm:w-11/12 mx-auto text-left sm:mx-4 sm:py-2 py-2 gap-4">
                        <div className="flex justify-between">
                            <div>
                                <h2 className="font-normal text-gray-800 my-0 py-0 font16-res-400"> {window.innerWidth > 465 ? truncatedName : props.name}</h2>
                                <h3 className="font-thin mt-0 text-gray-600 mb-2 font13-res-300 py-0" >{truncatedTeacher}</h3>
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

                                    >
                                        <div className="bg-white bg-opacity-0 w-full h-full z-40 absolute right-0 bottom-0"
                                            onClick={handleDropdownClass}
                                        ></div>
                                        <div className="relative">
                                            <div className="absolute right-0  z-50 bottom-10 font14-res-300 bg-white divide-y divide-gray-100 rounded-lg shadow w-36 md:w-44 dark:bg-gray-700 dark:divide-gray-600">
                                                <div id="dropdown_profile" className={`z-10 ${isDropdownMenu ? 'hidden' : ''} absolute right-10 top-0 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-36 dark:bg-gray-700 dark:divide-gray-600`}>
                                                    <ul className="py-2 font13-res-300 text-left text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
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
                                                                <Link to={`/edit/my/class/${props.id}/${props.slug}`}
                                                                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-purple-600 dark:hover:text-white"
                                                                >Edit Class</Link>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div>
                                                                <button
                                                                    onClick={() => setShowAlertDelete(true)}
                                                                    className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-red-600 hover:text-red-600 dark:hover:text-white"
                                                                >
                                                                    Hapus
                                                                </button>

                                                                {showAlertDelete && (
                                                                    <div id="drop-action" className="fixed inset-0 flex items-center justify-center">
                                                                        <button
                                                                            onClick={() => setShowAlertDelete(false)} // Close the alert when clicking the backdrop
                                                                            className="bg-gray-500 bg-opacity-30 w-full h-full absolute top-0 left-0"
                                                                            style={{ zIndex: "300" }}
                                                                        ></button>

                                                                        <DeleteAlertComponent
                                                                            type={"Kelas"}
                                                                            name={props.name}
                                                                            onClose={() => setShowAlertDelete(false)} // Close the alert when using the custom alert's close button
                                                                            onSubmit={(event) => handleDeleteClass(event)}
                                                                        />

                                                                    </div>
                                                                )}
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
                        <div className="border-t pt-1 sm:pt-2  flex justify-between">
                            <div className="my-auto">
                                {parseInt(classes.absent_count) === 0 && parseInt(classes.assignment_count) === 0 ? (
                                    <p className="font12-res-300 text-gray-600" >tidak ada aktivitas</p>
                                ):(
                                    <p className="font12-res-300 text-gray-600" >terdapat {classes.total_count} activitas </p>
                                )}
                            </div>
                            <button className=" py-0.5 mx-2 mb-1 text-black border-radius-8">
                                <Link to={`/view/my/class/${props.id}/${props.slug}`}>
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
