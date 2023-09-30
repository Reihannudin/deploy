import React, {useEffect, useState} from "react";
import {Link, useNavigate, useParams, useSearchParams} from "react-router-dom";
import axios from "axios";
import {AbsentNavComponent} from "../../Body/MainNav/AbsentNav.Component";
export const DetailStudentAbsentEmptyComponent = (props) => {

    const navigate = useNavigate();
    const { id, class_id , slug } = useParams();


    const [isDropdownFilterStudent, setIsDropdownFilterStudent] = useState(true);

    const toggleDropdownFilterStudent = () => {
        setIsDropdownFilterStudent((prevHidden) => !prevHidden);
    };

    const handleFilterStudentClick = (filterValue) => {
        const url = `?filter=${filterValue}`;
        // Replace navigate with your navigation function
        navigate(url);
    };

    const handleFilterStudent = () => {
        setIsDropdownFilterStudent(true);
    };

    return(
        <>
            <div className=" md:w-full sm:w-11/12  mx-auto w-full"  style={{ minWidth:"300px"}}>
                <div className="block w-full md:hidden">
                    <AbsentNavComponent />
                </div>
                <div className="lg:flex gap-4 lg:justify-between grid  md:grid-cols-1 sm:w-full sm:mx-0 mx-auto w-full">
                    <div className="lg:w-4/12 md:border-none border-b border-purple-700 mx-auto w-11/12">
                        <div className="lg:shadow md:mt-0 mt-3  lg:w-11/12 lg:pt-4 md:border-b border-b  md:border-purple-700 w-full pb-6 md:border-radius-8">
                            <div className="mx-2 md:mx-4 text-left md:pt-2 pb-0 ">
                                <div className="flex justify-between">
                                    <h2 className="font16-res-400" style={{ color:"#646464" , fontWeight:"500"}}>Rangkuman Absent </h2>
                                    <div>
                                        <div className="w-full text-green-600 px-0 border-radius-4">
                                            <p className="font13-res-300 bg-gray-200 w-16 py-2 animate-pulse"></p>
                                        </div>
                                    </div>
                                </div>
                                <p className="my-1 font14-res-300" style={{ color:"#646464"}}>Tanggal {props.date} dengan Jumlah {props.action_length} Siswa</p>
                            </div>

                            <div className="text-left mx-2 md:mx-4">
                                <div className="flex">
                                    <div className="my-3 w-full">
                                        <div className="block w-full text-center">
                                            <p className="font14-res-300">Hadir</p>
                                            <div className="w-12 h-12 bg-gray-200 rounded-full mx-auto">
                                                <div
                                                    className={`w-12 h-12  "bg-gray-200" rounded-full relative flex justify-center items-center`}
                                                    style={{
                                                        clipPath: `polygon(0 0, 100% 0, 100%, 0 100%)`,
                                                    }}
                                                >
                                                    <p className="font22-res-300 text-white font-normal">
                                                        0
                                                    </p>

                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="my-3 w-full">
                                        <div className="block w-full text-center">
                                            <p className="font14-res-300">Izin</p>
                                            <div className="w-12 h-12 bg-gray-200 rounded-full mx-auto">
                                                <div
                                                    className={`w-12 h-12 "bg-gray-200" rounded-full relative flex justify-center items-center`}
                                                    style={{
                                                        clipPath: `polygon(0 0, 100% 0, 100%, 0 100%)`,
                                                    }}
                                                >
                                                    <p className="font22-res-300 text-white font-normal">
                                                        0
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="my-3 w-full">
                                        <div className="block w-full text-center">
                                            <p className="font14-res-300">Alpha</p>
                                            <div className="w-12 h-12 bg-gray-200 rounded-full mx-auto">
                                                <div
                                                    className={`w-12 h-12 bg-gray-200 rounded-full relative flex justify-center items-center`}
                                                    style={{
                                                        clipPath: `polygon(0 0, 100% 0, 100%, 0 100%)`,
                                                    }}
                                                >
                                                    <p className="font22-res-300 text-white font-normal">
                                                        0
                                                    </p>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className=" lg:shadow w-11/12  block pb-3 md:mx-0 mx-auto md:my-6 my-2">
                            <div className="my-2 text-center py-1 border-none md:border-t">
                                <p className="my-2 font16-res-400">URL Absensi</p>
                                <div className="lg:w-10/12 md:w-8/12 w-full  bg-white flex  mx-auto border-radius-4" >
                                    <input  disabled className=" font16-res-400 py-2 px-3 bg-gray-100 w-10/12 animate-pulse " value={""}  onChange={() => {}} />
                                    <button className="w-2/12 bg-purple-500 " >
                                        <img className="my-auto w-full " style={{ height:"20px"}} src="/assets/copy-icon.svg" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-8/12  sm:w-11/12 mx-auto w-11/12">
                        <div className="flex border-b justify-between">
                            <div className="md:my-3 my-1 md:pb-2 pb-2 text-left">
                                <h2 className="font16-res-400 text-gray-600">Daftar Student absent</h2>
                            </div>
                            <div className="relative">
                                <button className="my-auto"  onClick={toggleDropdownFilterStudent}>
                                    <div  className="px-1 py-2 bg-white hover:px-1 hover:bg-gray-100 radius-100 ">
                                        <div className="my-auto  mx-1 " style={{ height:"20px"}}>
                                            <img className="h-full w-full" src="/assets/filter-icon.svg"/>
                                        </div>
                                    </div>
                                </button>
                                {isDropdownFilterStudent ? null : (
                                    <div>
                                        <div className="relative">

                                        <div
                                            id="dropdown_profile"
                                            className="z-10 fixed inset-0"
                                            onClick={handleFilterStudent}
                                        >
                                            <div className="bg-whie bg-opacity-0 w-full h-full z-40 absolute right-0 bottom-0"></div>
                                        </div>
                                            <div className="absolute right-0 md:right-16 xl:right-28 z-50 top-0 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-36 md:w-44 dark:bg-gray-700 dark:divide-gray-600">
                                                <ul className="py-2 text-sm text-left text-gray-700 dark:text-gray-400">
                                                    <li>
                                                        <button className="block px-4 py-2 font16-res-300 w-full text-left hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-purple-600 dark:hover:text-white" onClick={() => handleFilterStudentClick('')}>Semua</button>
                                                    </li>
                                                    <li>
                                                        <button className="block px-4 py-2 font16-res-300  w-full text-left hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-purple-600 dark:hover:text-white" onClick={() =>  handleFilterStudentClick('hadir')}>Hadir</button>
                                                    </li>
                                                    <li>
                                                        <button className="block px-4 py-2 font16-res-300  w-full text-left hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-purple-600 dark:hover:text-white" onClick={() =>  handleFilterStudentClick('izin')}>Izin</button>
                                                    </li>
                                                    <li>
                                                        <button className="block px-4 py-2 font16-res-300  w-full text-left hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-purple-600 dark:hover:text-white" onClick={() =>  handleFilterStudentClick('belum_absent')}>Belum Absent</button>
                                                    </li>
                                                    <li>
                                                        <button className="block px-4 py-2 font16-res-300  w-full text-left hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-purple-600 dark:hover:text-white" onClick={() =>  handleFilterStudentClick('melewatkan')}>Melewatkan</button>
                                                    </li>
                                                </ul>
                                            </div>

                                        </div>

                                    </div>

                                )}

                            </div>
                        </div>
                        <ul className="pt-1 w-full block">
                                <div className="my-20">
                                    <div className="flex items-center justify-center h-32 mb-2 mt-6 ">
                                        <div
                                            className="animate-spin rounded-full border-r-gray-50 border-l-gray-50  border-b-gray-50  w-8 h-8 md:h-10 md:w-10 border-t-4 border-purple-700"></div>

                                    </div>
                                </div>

                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
