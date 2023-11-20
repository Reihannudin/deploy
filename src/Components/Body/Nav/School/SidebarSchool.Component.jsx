import {Link, useNavigate} from "react-router-dom";
import React, {useState} from "react";


export const  SidebarSchoolComponent = ({isMenuHidden , setIsMenuHidden ,  toggleMenu}) => {

    const navigate = useNavigate();

    const navigateBack = () => {
        navigate(-1)
    };



    return(
        <>
            <div className={`w-full bg-white  h-screen border-r ${isMenuHidden ? 'small-sidebar py-5' : 'py-4'}`}>
                <div className="w-10/12 block mx-auto">
                    <div className={`flex transition ${isMenuHidden ? 'mx-auto' : 'mx-0'} w-10/12`}>

                        <button
                            id="menu-button"
                            className={`block transition ${isMenuHidden ? 'mx-auto' : 'mx-0'}`}
                            onClick={toggleMenu}
                            style={{ transform: isMenuHidden ? 'rotate(-40deg)' : 'none', transition: 'transform 0.3s ease-in-out' }}
                        >
                            {isMenuHidden === false ? (
                                <div className="flex">
                                    <div className="h-6 w-6 my-4 cursor-pointer block" style={{ height: "26px" }}>
                                        <img className="h-full w-full" src="/assets/icon-close.svg" />
                                    </div>
                                </div>
                            ) : (
                                <div style={{ transform: isMenuHidden ? 'rotate(40deg)' : 'none', transition: 'transform 0.3s ease-in-out' }}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        id="menu-button"
                                        className="h-6 w-6 cursor-pointer block"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                </div>
                            )}
                        </button>

                        <div className={`transition ${isMenuHidden ? 'opacity-0 max-w-0 overflow-hidden ' : 'opacity-100 max-w-full my-4 ms-auto overflow-visible'}`}>
                            <h2 className="font18-res-300 mx-auto text-purple-600 my-auto">Nama sekolah</h2>
                        </div>

                    </div>
                    <div className="w-full">
                        <ul className="list-none text-left w-full">
                            <li className={`my-4 w-11/12 transition ${isMenuHidden ? 'mx-auto' : 'mx-0'}`}>
                                <Link to={"/"}>
                                    <div className="bg-white hover:bg-gray-50 border-radius-12 text-gray-600 hover:text-purple-600 cursor-pointer py-4">
                                        <div className={`flex  w-11/12 ${isMenuHidden ? 'mx-auto' : 'mx-0'}`}>
                                            <div className={`my-auto ${isMenuHidden ? 'mx-auto' : 'mx-1'} h-icon-back`}>
                                                <img
                                                    src="/assets/icon-dashboard-gray.svg"
                                                    className="h-full mx-auto my-auto"
                                                    onMouseOver={(e) => e.currentTarget.src = "/assets/icon-dashboard-purple.svg"}
                                                    onMouseOut={(e) => e.currentTarget.src = "/assets/icon-dashboard-gray.svg"}
                                                />
                                            </div>
                                            {isMenuHidden === false ? (
                                                <p className="font15-res-300 mx-auto" style={{ fontWeight: "500" }}>
                                                    Dashboard
                                                </p>
                                            ) : (
                                                <></>
                                            )}
                                        </div>
                                    </div>
                                </Link>
                            </li>
                            <li className={`my-4 w-11/12 transition ${isMenuHidden ? 'mx-auto' : 'mx-0'}`}>
                                <Link to={"/"}>
                                    <div className="bg-white hover:bg-gray-50 border-radius-12 text-gray-600 hover:text-purple-600 cursor-pointer py-4">
                                        <div className={`flex  w-11/12 ${isMenuHidden ? 'mx-auto' : 'mx-0'}`}>
                                            <div className={`my-auto ${isMenuHidden ? 'mx-auto' : 'mx-1'} h-icon-back`}>
                                                <img
                                                    src="/assets/icon-laporan-gray.svg"
                                                    className="h-full mx-auto my-auto"
                                                    onMouseOver={(e) => e.currentTarget.src = "/assets/icon-laporan-purple.svg"}
                                                    onMouseOut={(e) => e.currentTarget.src = "/assets/icon-laporan-gray.svg"}
                                                />
                                            </div>
                                            {isMenuHidden === false ? (
                                                <p className="font15-res-300 mx-auto" style={{ fontWeight: "500" }}>
                                                    Laporan
                                                </p>
                                            ) : (
                                                <></>
                                            )}
                                        </div>
                                    </div>
                                </Link>
                            </li>
                            <li className={`my-4 w-11/12 transition ${isMenuHidden ? 'mx-auto' : 'mx-0'}`}>
                                <Link to={"/"}>
                                    <div className="bg-white hover:bg-gray-50 border-radius-12 text-gray-600 hover:text-purple-600 cursor-pointer py-4">
                                        <div className={`flex  w-11/12 ${isMenuHidden ? 'mx-auto' : 'mx-0'}`}>
                                            <div className={`my-auto ${isMenuHidden ? 'mx-auto' : 'mx-1'} h-icon-back`}>
                                                <img
                                                    src="/assets/icon-class-gray.svg"
                                                    className="h-full mx-auto my-auto"
                                                    onMouseOver={(e) => e.currentTarget.src = "/assets/icon-class-purple.svg"}
                                                    onMouseOut={(e) => e.currentTarget.src = "/assets/icon-class-gray.svg"}
                                                />
                                            </div>
                                            {isMenuHidden === false ? (
                                                <p className="font15-res-300 mx-auto" style={{ fontWeight: "500" }}>
                                                    Kelas
                                                </p>
                                            ) : (
                                                <></>
                                            )}
                                        </div>
                                    </div>
                                </Link>
                            </li>

                            <li className={`my-4 w-11/12 transition ${isMenuHidden ? 'mx-auto' : 'mx-0'}`}>
                                <Link to={"/"}>
                                    <div className="bg-white hover:bg-gray-50 border-radius-12 text-gray-600 hover:text-purple-600 cursor-pointer py-4">
                                        <div className={`flex  w-11/12 ${isMenuHidden ? 'mx-auto' : 'mx-0'}`}>
                                            <div className={`my-auto ${isMenuHidden ? 'mx-auto' : 'mx-1'} h-icon-back`}>
                                                <img
                                                    src="/assets/icon-teacher-gray.svg"
                                                    className="h-full mx-auto my-auto"
                                                    onMouseOver={(e) => e.currentTarget.src = "/assets/icon-teacher-purple.svg"}
                                                    onMouseOut={(e) => e.currentTarget.src = "/assets/icon-teacher-gray.svg"}
                                                />
                                            </div>
                                            {isMenuHidden === false ? (
                                                <p className="font15-res-300 mx-auto" style={{ fontWeight: "500" }}>
                                                    Pendidik
                                                </p>
                                            ) : (
                                                <></>
                                            )}
                                        </div>
                                    </div>
                                </Link>
                            </li>

                            <li className={`my-4 w-11/12 transition ${isMenuHidden ? 'mx-auto' : 'mx-0'}`}>
                                <Link to={"/"}>
                                    <div className="bg-white hover:bg-gray-50 border-radius-12 text-gray-600 hover:text-purple-600 cursor-pointer py-4">
                                        <div className={`flex  w-11/12 ${isMenuHidden ? 'mx-auto' : 'mx-0'}`}>
                                            <div className={`my-auto ${isMenuHidden ? 'mx-auto' : 'mx-1'} h-icon-back`}>
                                                <img
                                                    src="/assets/icon-setting-gray.svg"
                                                    className="h-full mx-auto my-auto"
                                                    onMouseOver={(e) => e.currentTarget.src = "/assets/icon-setting-purple.svg"}
                                                    onMouseOut={(e) => e.currentTarget.src = "/assets/icon-setting-gray.svg"}
                                                />
                                            </div>
                                            {isMenuHidden === false ? (
                                                <p className="font15-res-300 mx-auto" style={{ fontWeight: "500" }}>
                                                    Pengaturan
                                                </p>
                                            ) : (
                                                <></>
                                            )}
                                        </div>
                                    </div>
                                </Link>
                            </li>


                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

// <li className={"my-6"}>
//     <Link to={"/"}>
//         <div className={"bg-white hover:bg-gray-50 border-radius-12 text-gray-600 hover:text-purple-600 cursor-pointer py-4"}>
//             <div className={"flex mx-4 "}>
//                 <div className={"my-auto ms-2 me-3 h-icon-back"} >
//                     <img
//                         src="/assets/icon-laporan-gray.svg"
//                         className={"h-full my-auto"}
//                         onMouseOver={(e) => e.currentTarget.src = "/assets/icon-laporan-purple.svg"}
//                         onMouseOut={(e) => e.currentTarget.src = "/assets/icon-laporan-gray.svg"}
//                     />
//                 </div>
//                 <p className={"font15-res-300 mt-0.5"} style={{ fontWeight:"500"}}>Laporan</p>
//
//             </div>
//         </div>
//     </Link>
// </li>
// <li className={"my-6"}>
//     <Link to={"/"}>
//         <div className={"bg-white hover:bg-gray-50 border-radius-12 text-gray-600 hover:text-purple-600 cursor-pointer py-4"}>
//             <div className={"flex mx-4 "}>
//                 <div className={"my-auto ms-2 me-3 h-icon-back"} >
//                     <img
//                         src="/assets/icon-class-gray.svg"
//                         className={"h-full my-auto"}
//                         onMouseOver={(e) => e.currentTarget.src = "/assets/icon-class-purple.svg"}
//                         onMouseOut={(e) => e.currentTarget.src = "/assets/icon-class-gray.svg"}
//                     />
//                 </div>
//                 <p className={"font15-res-300"} style={{ fontWeight:"500"}}>Kelas</p>
//
//             </div>
//         </div>
//     </Link>
// </li>
// <li className={"my-6"}>
//     <Link to={"/"}>
//         <div className={"bg-white hover:bg-gray-50 border-radius-12 text-gray-600 hover:text-purple-600 cursor-pointer py-4"}>
//             <div className={"flex mx-4 "}>
//                 <div className={"my-auto ms-2 me-3 h-icon-back"} >
//                     <img
//                         src="/assets/icon-teacher-gray.svg"
//                         className={"h-full my-auto"}
//                         onMouseOver={(e) => e.currentTarget.src = "/assets/icon-teacher-purple.svg"}
//                         onMouseOut={(e) => e.currentTarget.src = "/assets/icon-teacher-gray.svg"}
//                     />
//                 </div>
//                 <p className={"font15-res-300"} style={{ fontWeight:"500"}}>Pendidik</p>
//
//             </div>
//         </div>
//     </Link>
// </li>
// <li className={"my-6"}>
//     <Link to={"/"}>
//         <div className={"bg-white hover:bg-gray-50 border-radius-12 text-gray-600 hover:text-purple-600 cursor-pointer py-4"}>
//             <div className={"flex mx-4 "}>
//                 <div className={"my-auto ms-2 me-3 h-icon-back"} >
//                     <img
//                         src="/assets/icon-setting-gray.svg"
//                         className={"h-full my-auto"}
//                         onMouseOver={(e) => e.currentTarget.src = "/assets/icon-setting-purple.svg"}
//                         onMouseOut={(e) => e.currentTarget.src = "/assets/icon-setting-gray.svg"}
//                     />
//                 </div>
//                 <p className={"font15-res-300"} style={{ fontWeight:"500"}}>Pengaturan</p>
//
//             </div>
//         </div>
//     </Link>
// </li>
