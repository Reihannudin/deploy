import React, {useState} from "react";
import {Link, useLocation, useParams} from "react-router-dom";

export const  MyDetailClassNavComponent = () => {

    const location = useLocation();

    const { id, slug } = useParams();
    const isDetailClassActive = location.pathname === `/view/my/class/${id}/${slug}`
    const isStudentActive = location.pathname === `/view/my/class/${id}/${slug}/students`
    const [dropAction , setDropAction] = useState(false);

    const toggleDropAction = () => {
        setDropAction(!dropAction);
    }

    const handleDropdownItemClick = () => {
        // Close the dropdown when an item is clicked
        setDropAction(false);
    };

    return(
        <>
            {dropAction && (
                <div id="drop-action" className="flex items-center justify-center w-full fixed bottom-16 min-h-screen">
                    {/* This div serves as a backdrop and should cover the entire screen */}
                    <div onClick={handleDropdownItemClick} className="bg-gray-300 bg-opacity-30 w-full h-full absolute bottom-0 z-50" ></div>
                    {/* Centered dropdown content */}
                    <div className="absolute bg-white bottom-0 w-6/12 sm:w-4/12 py-4 border-radius-8 z-50" >

                        <Link to={`/class/${slug}/${id}/create/absent`} className="py-3 hover:bg-gray-100 font16-res-300">
                            <p className="text-gray-500 py-3  hover:text-purple-700 cursor-pointer">Buat Absent</p>
                        </Link>
                        <Link to={`/class/${slug}/${id}/create/assignment`} className="py-3 hover:bg-gray-100 font16-res-300">
                            <p className="text-gray-500 py-3  hover:text-purple-700 cursor-pointer">Buat Tugas</p>
                        </Link>
                        <Link to={`/class/${slug}/${id}/create/resource`} className="py-3 hover:bg-gray-100 font16-res-300">
                            <p className="text-gray-500 py-3  hover:text-purple-700 cursor-pointer">Buat Resource</p>
                        </Link>

                    </div>
                </div>
            )}



            <div className="w-full fixed z-40  bottom-0 border-t border-gray-300 bg-white" >
                <div className="mx-auto relative sm:w-10/12 w-full">
                    <div className="absolute left-0 right-0 top-0 bottom-6 flex justify-center items-center">
                        <div className="bg-white p-2-c border-b border-l border-r border-gray-300 rounded-full">
                            <button onClick={toggleDropAction} style={{ transform: dropAction ? 'rotate(40deg)' : 'none' ,    transition: 'transform 0.3s ease-in-out' }} className="bg-purple-600 p-2 rounded-full">
                                <img  className="h-icon-add" src="/assets/add-icon-white.svg" alt="Add Icon" />
                            </button>
                        </div>
                    </div>
                    <div className="w-full bg-white justify-between flex h-bar-main-nav">
                        <div className="flex bg-white  justify-center pt-3-c pb-2-c mx-auto sm:w-5/12 w-5/12">
                            <div className=" p-1 bg-white hover:bg-gray-100 radius-full" style={{ width:"60px"}}>

                            <Link to={`/view/my/class/${id}/${slug}`} className="text-center bg-white cursor-pointer   " style={{ height: "28px" }}>
                                <div>
                                    <div className="mx-auto cursor-pointer h-icon-main-nav">
                                        <img className="mx-auto cursor-pointer h-full" src={`${isDetailClassActive ? '/assets/icon-myclass-main-nav.svg' : '/assets/icon-myclass-main-nav-gray.svg'} `} alt="Home Icon" />
                                    </div>
                                    <p className={`my-1 ${isDetailClassActive ? 'text-purple-600' : 'text-gray-400'} hover:text-purple-700  font11-res-300`}>Kelasku</p>
                                </div>
                            </Link>
                            </div>

                        </div>

                        <div className="flex justify-center  bg-white mx-auto  pt-2 pb-1 sm:w-5/12 w-5/12">
                            <div className="text-center bg-white cursor-pointer  radius-full " >
                                <div className="cursor-pointer p-1 hover:bg-gray-100 radius-full" style={{ width:"60px"}}>
                                    <Link to={`/view/my/class/${id}/${slug}/students`} >
                                            <div className="mx-auto cursor-pointer h-icon-main-nav" >
                                                <img className="mx-auto cursor-pointer h-full" src={`${isStudentActive ? '/assets/icon-student-nav.svg' : '/assets/icon-student-nav-gray.svg'} `} alt="Home Icon" />
                                            </div>
                                            <p className={`my-1 ${isStudentActive ? 'text-purple-600' : 'text-gray-400'}  font11-res-300 hover:text-purple-700`} >Murid</p>
                                    </Link>
                                </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

