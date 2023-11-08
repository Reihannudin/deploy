import React, {useState} from "react";
import {Link, useLocation, useParams} from "react-router-dom";

export const DetailClassNavComponent = () => {

    const location = useLocation();

    const { id, slug } = useParams();
    const isDetailClassActive = location.pathname === `/view/class/${id}/${slug}`
    const isStudentActive = location.pathname === `/view/class/${id}/${slug}/classmate`
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

            <div className="w-full fixed z-40  bottom-0 border-t border-gray-300 bg-white" >
                <div className="mx-auto relative sm:w-10/12 w-full">

                    <div className="w-full bg-white justify-between flex h-bar-main-nav">
                        <div className="flex bg-white  justify-center pt-3-c pb-2-c mx-auto sm:w-5/12 w-5/12">
                            <div className=" p-1 bg-white hover:bg-gray-100 radius-full" style={{ width:"60px"}}>

                                {/*/view/class/:id/:slug/classmate*/}
                            <Link to={`/view/class/${id}/${slug}`} className="text-center bg-white cursor-pointer   " style={{ height: "28px" }}>
                                <div>
                                    <div className="mx-auto cursor-pointer h-icon-main-nav">
                                        <img className="mx-auto cursor-pointer h-full" src={`${isDetailClassActive ? '/assets/icon-myclass-main-nav.svg' : '/assets/icon-myclass-main-nav-gray.svg'} `} alt="Home Icon" />
                                    </div>
                                    <p className={`my-1 ${isDetailClassActive ? 'text-purple-600' : 'text-gray-400'} hover:text-purple-700  font11-res-300`}>Dashboard</p>
                                </div>
                            </Link>
                            </div>

                        </div>

                        <div className="flex justify-center  bg-white mx-auto  pt-2 pb-1 sm:w-5/12 w-5/12">
                            <div className="text-center bg-white cursor-pointer  radius-full " >
                                <div className="cursor-pointer p-1 hover:bg-gray-100 radius-full" style={{ width:"60px"}}>
                                    <Link to={`/view/class/${id}/${slug}/classmate`} >
                                            <div className="mx-auto cursor-pointer h-icon-main-nav" >
                                                <img className="mx-auto cursor-pointer h-full" src={`${isStudentActive ? '/assets/icon-student-nav.svg' : '/assets/icon-student-nav-gray.svg'} `} alt="Home Icon" />
                                            </div>
                                            <p className={`my-1 ${isStudentActive ? 'text-purple-600' : 'text-gray-400'}  font11-res-300 hover:text-purple-700`} >Teman</p>
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