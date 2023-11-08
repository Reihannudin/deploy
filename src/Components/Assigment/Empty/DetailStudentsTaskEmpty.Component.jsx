import {Link, useNavigate, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {AssignmentNavComponent} from "../../Body/MainNav/AssignmentNav.Component";
import {DetailClassmateAbsentCardComponent} from "../../Absent/Card/DetailClassmateAbsentCard.Component";
import {DetailStudentTaskCardComponent} from "../../Classmate/Card/DetailStudentsTask.Component";

export const DetailStudentsTaskEmptyComponent = (props) => {

    const { id , class_id , slug } = useParams();

    const [activeTab, setActiveTab] = useState('student'); // Set the initial active tab

    const handleTabClick = (tabName) => {
        setActiveTab(tabName); // Update the active tab state
    };

    useEffect(() => {
        // Set the active tab based on the URL hash
        const hash = window.location.hash.substring(1);
        if (hash) {
            setActiveTab(hash);
        }
    }, []);

    useEffect(() => {
        // Update the URL hash when the active tab changes
        window.history.replaceState(null, null, `#${activeTab}`);
    }, [activeTab]);


    const [isDropdownFilterClassmate , setIsDropdownFilterClassmate] = useState(true);

    const navigate = useNavigate();

    const toggleDropdowFilterClassmate = () => {
        setIsDropdownFilterClassmate((prevHidden) => ! prevHidden);
    }
    const [filterClassmate, setFilterClassmate] = useState('');


    const handleFilterClassmateClick = (filterValue) => {
        setFilterClassmate(filterValue);
        const url = `?filter=${filterValue}`;
        navigate(url); // Replace navigate with your navigation function
    };


    return(
        <>
            <div className=" md:w-full sm:w-11/12  mx-auto w-full"  style={{ minWidth:"300px"}}>
                <div className="block w-full md:hidden">
                    <AssignmentNavComponent />
                </div>
                <div className="lg:flex gap-4 flex sm:w-full  mx-auto w-full">

                    <div className="lg:w-11/12 mx-auto w-full">
                        <div className="my-3 md:my-7">
                            <div className="w-full">
                                <div className="gap-4  grid  grid-cols-1 w-full">
                                    <div className="w-full ">
                                        <div className="md:flex block md:w-full gap-4 w-11/12  lg:w-full mx-auto justify-between">
                                            <div className="w-full md:w-4/12 lg:w-7/12 xl:w-6/12 ">
                                                <div className="pt-2 w-full  pb-1      text-left">
                                                    <div className="shadow md:pt-4 pt-2 pb-1   px-5  ">
                                                        <div className="flex py-3 justify-between">
                                                            <div>
                                                                <h2 className="font18-res-300 w-36  sm:w-44 md:w-20 lg:w-56 py-2 bg-gray-200 animate-pulse"></h2>
                                                            </div>
                                                            <Link to={`/class/${slug}/${props.class_id}/edit/assignment/${id}`} className="my-auto">
                                                                <div  className="px-1 py-0 bg-white hover:px-1 border-radius-4 hover:bg-gray-100 radius-100 ">
                                                                    <div className="my-auto mx-1 " style={{ height:"17px"}}>
                                                                        <img className="h-full w-full" src="/assets/edit-icon.svg"/>
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                        </div>
                                                        <h2 className="font13-res-300 py-2 bg-gray-200 animate-pulse px-4 border-radius-4" style={{ fontWeight:"500" , color:"#525252"}}></h2>
                                                        <div className="flex justify-between w-full my-3 gap-4 ms-auto">
                                                            <div className="w-3/12">
                                                                <div className="w-full text-purple-600 py-1.5 bg-gray-200 animate-pulse px-4 border-radius-4 " >
                                                                    <p className="font14-res-300 animate-pulse"></p>
                                                                </div>
                                                            </div>
                                                            <div className="flex w-3/12  gap-2  sm-auto me-0">
                                                                <div  className="mt-0.5 w-full font14-res-300  py-1.5 bg-gray-200 animate-pulse px-4 border-radius-4 " >
                                                                    <p className="my-auto animate-pulse text-gray-400" ></p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className=" w-full">
                                                    <div className="shadow  lg:mt-1  mt-5   lg:pt-2 border-purple-700 w-full pt-3 pb-3 md:border-radius-8">
                                                        <h2 className="font16-res-400 text-left mx-4">Statistik</h2>
                                                        <div className="text-left mx-4 md:mx-4">
                                                            <div className="flex lg:flex md:block">
                                                                <div className="my-3 w-full">
                                                                    <div className="block w-full text-center">
                                                                        <p className="font13-res-300 mb-2">Selesai mengerjakan</p>
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
                                                                        <p className="font13-res-300 mb-2">Sedang mengerjakan</p>
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
                                                                        <p className="font13-res-300 mb-2">Belum mengerjakan</p>
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
                                                </div>

                                            </div>
                                            <div className="md:w-full sm:w-11/12 w-full mx-auto gap-3 block lg:flex lg:justify-between">
                                                <div className="lg:w-full lg:mt-0 md:mb-0 mt-5 mb-3 w-full">

                                                    <div className=" w-full">
                                                        <div className="md:w-full w-full pt-3  md:pb-3 pb-1 px-4 lg:ms-auto lg:mx-0 mx-auto shadow border-radius-8">
                                                            <div className="text-left">
                                                                <h2 className="font16-res-300" style={{ color:"#646464"}}>Rangkuman Tugas</h2>
                                                                <p className="my-1 font14-res-300" style={{ color:"#646464"}}>Tanggal {props.date} dengan Jumlah {props.action_length} Siswa 30</p>
                                                            </div>
                                                            <div className="bg-white md:my-0 my-3">
                                                                <div className="me-auto    border-b lg:w-full w-full mx-auto">
                                                                    <div className="w-full  md:mt-2 mt-4 mb-0 ">
                                                                        <ul id="tabs" className="flex mt-1  font16-res-300 w-10/12 px-1 text-purple-500">
                                                                            <li className="pe-0 sm:pe-3  text-gray-500 hover:text-purple-600 text-left font15-res-300 py-2">
                                                                                <a id="default-tab" href="#student" className="w-full" onClick={() => handleTabClick('student')}>
                                                                                    List Siswa
                                                                                </a>
                                                                            </li>
                                                                            <li className="px-4 sm:px-6 md:px-6 text-gray-500 hover:text-purple-600 text-left mx-4  font15-res-300 py-2">
                                                                                <a href="#rank" className="w-full" onClick={() => handleTabClick('rank')}>
                                                                                    Rank Siswa
                                                                                </a>
                                                                            </li>
                                                                            <li className="px-4 text-gray-800 hidden font-semibold py-2">
                                                                                <a href="#fourth">Tab 4</a>
                                                                            </li>
                                                                        </ul>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div id="tab-contents" className="w-full md:w-11/12 lg:w-full lg:mx-3 mx-auto">
                                                        <div id="student" className={`py-2 lg:px-4 ${activeTab === 'student' ? '' : 'hidden'}`}>
                                                            <div className=" w-full my-5  mx-auto lg:w-full ">
                                                                <div className="flex mx-0 justify-between">
                                                                    <div className="md:mt-2.5 mt-2 md:pb-2 pb-2  text-left">
                                                                        <h2 className="font16-res-400 text-gray-600">Daftar Siswa</h2>
                                                                    </div>
                                                                    <div className="relative">
                                                                        <button className="my-auto"  onClick={toggleDropdowFilterClassmate}>
                                                                            <div  className="px-1 py-2 bg-white hover:px-1 hover:bg-gray-100 radius-100 ">
                                                                                <div className="my-auto  mx-1 " style={{ height:"22px"}}>
                                                                                    <img className="h-full w-full" src="/assets/filter-icon.svg"/>
                                                                                </div>
                                                                            </div>
                                                                        </button>
                                                                        <div id="dropdown_profile"
                                                                             className={`z-10 ${isDropdownFilterClassmate ? 'hidden' : ''} absolute right-0 top-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}>
                                                                            <ul className="py-2 text-sm text-left text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                                                                <li>
                                                                                    <button className="block px-4 py-2 font15-res-300 w-full text-left hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-purple-600 dark:hover:text-white" onClick={() => handleFilterClassmateClick('')}>Semua</button>
                                                                                </li>
                                                                                <li>
                                                                                    <button className="block px-4 py-2 font15-res-300  w-full text-left hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-purple-600 dark:hover:text-white" onClick={() => handleFilterClassmateClick('mengerjakan')}>Mengerjakan</button>
                                                                                </li>
                                                                                <li>
                                                                                    <button className="block px-4 py-2 font15-res-300  w-full text-left hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-purple-600 dark:hover:text-white" onClick={() => handleFilterClassmateClick('belum_mengerjakan')}>Belum Absent</button>
                                                                                </li>
                                                                                <li>
                                                                                    <button className="block px-4 py-2 font15-res-300  w-full text-left hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-purple-600 dark:hover:text-white" onClick={() => handleFilterClassmateClick('melewatkan')}>Melewatkan</button>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="md:py-8 sm:py-6 py-4">
                                                                    <div className="mb-0 mt-2">
                                                                        <div className="my-16">
                                                                            <div className="flex items-center justify-center ">
                                                                                <div
                                                                                    className="animate-spin rounded-full border-r-gray-50 border-l-gray-50  border-b-gray-50  w-8 h-8 md:h-10 md:w-10 border-t-4 border-purple-700"></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div id="rank" className={`py-2 lg:px-4 ${activeTab === 'rank' ? '' : 'hidden'}`}>
                                                            <div className=" w-full my-5  mx-auto lg:w-full ">
                                                                <div className="flex mx-0 justify-between">
                                                                    <div className="md:mt-2.5 mt-2 md:pb-2 pb-2  text-left">
                                                                        <h2 className="font16-res-400 text-gray-600">Rank Pengerjaan</h2>
                                                                    </div>
                                                                    <div className="relative">
                                                                        <button className="my-auto"  onClick={toggleDropdowFilterClassmate}>
                                                                            <div  className="px-1 py-2 bg-white hover:px-1 hover:bg-gray-100 radius-100 ">
                                                                                <div className="my-auto  mx-1 " style={{ height:"22px"}}>
                                                                                    <img className="h-full w-full" src="/assets/filter-icon.svg"/>
                                                                                </div>
                                                                            </div>
                                                                        </button>
                                                                        <div id="dropdown_profile"
                                                                             className={`z-10 ${isDropdownFilterClassmate ? 'hidden' : ''} absolute right-0 top-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}>
                                                                            <ul className="py-2 text-sm text-left text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                                                                <li>
                                                                                    <button className="block px-4 py-2 font15-res-300 w-full text-left hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-purple-600 dark:hover:text-white" onClick={() => handleFilterClassmateClick('')}>Semua</button>
                                                                                </li>
                                                                                <li>
                                                                                    <button className="block px-4 py-2 font15-res-300  w-full text-left hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-purple-600 dark:hover:text-white" onClick={() => handleFilterClassmateClick('teringgi')}>Tertinggi</button>
                                                                                </li>
                                                                                <li>
                                                                                    <button className="block px-4 py-2 font15-res-300  w-full text-left hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-purple-600 dark:hover:text-white" onClick={() => handleFilterClassmateClick('terendah')}>Terendah</button>
                                                                                </li>

                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="md:py-8 sm:py-6 py-4">
                                                                    <div className="mb-0 mt-2">
                                                                        <div className="my-16">
                                                                            <div className="flex items-center justify-center ">
                                                                                <div
                                                                                    className="animate-spin rounded-full border-r-gray-50 border-l-gray-50  border-b-gray-50  w-8 h-8 md:h-10 md:w-10 border-t-4 border-purple-700"></div>
                                                                            </div>
                                                                        </div>

                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div id="fourth" className="py-2 md:px-4" style={{ display: 'none' }}>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>

                                        </div>
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


// <>
//     <div className="w-full">
//         <div className="gap-4  grid  grid-cols-1 w-full">
//             <div className="w-full ">
//                 <div className="w-full  mx-auto" style={{height:"10px"}}>
//                     {/*<img className="w-full h-full sm:border-radius-8 object-cover"  src="/assets/bg-absence.svg"/>*/}
//                 </div>
//                 <div className="md:flex block sm:w-10/12 md:w-full gap-4 w-11/12  lg:w-11/12 mx-auto justify-between">
//                     <div className="pt-2 lg:w-5/12 md:w-6/12  pb-1      text-left">
//                         <div className="shadow md:pt-4 pt-2 pb-1   px-5  md:mt-3 mt-1 ">
//                             <div className="flex justify-between">
//                                 <div>
//                                     <h2 className="font18-res-300">{props.name}</h2>
//                                 </div>
//                                 <Link to={`/class/${slug}/${props.class_id}/edit/assignment/${id}`} className="my-auto">
//                                     <div  className="px-1 py-2 bg-white hover:px-1 hover:bg-gray-100 radius-100 ">
//                                         <div className="my-auto mx-1 " style={{ height:"18px"}}>
//                                             <img className="h-full w-full" src="/assets/edit-icon.svg"/>
//                                         </div>
//                                     </div>
//                                 </Link>
//                             </div>
//                             <h2 className="font13-res-300" style={{ fontWeight:"500" , color:"#525252"}}>{props.start_time} - {props.end_time} / {props.date}</h2>
//                             <div className="flex justify-between w-full my-3 gap-4 ms-auto">
//                                 {props.status === "selesai" ? (
//                                     <div>
//                                         <div className="w-full text-green-600 bg-green-200 px-4 border-radius-4 " >
//                                             <p className="font14-res-300">{props.status}</p>
//                                         </div>
//                                     </div>
//                                 ): (props.status === "melewatkan") ? (
//                                     <div>
//                                         <div className="w-full text-red-600 bg-red-200 px-2 border-radius-4 " >
//                                             <p className="font14-res-300">{props.status}</p>
//                                         </div>
//                                     </div>
//                                 ) : (
//                                     <div>
//                                         <div className="w-full text-yellow-600 bg-yellow-200 px-4 border-radius-4 " >
//                                             <p className="font14-res-300">{props.status}</p>
//                                         </div>
//                                     </div>
//                                 )}
//                                 <div className="flex gap-2 mx-0">
//                                     <div  className="mt-0.5 font14-res-300" >
//                                         <p className="my-auto text-gray-400" >{props.post_time}</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="md:w-6/12 w-full">
//                         <div className="shadow  lg:mt-1  mt-5  lg:w-11/12 lg:pt-2 border-purple-700 w-full pt-3 pb-3 md:border-radius-8">
//                             <h2 className="font16-res-400 text-left mx-4">Statistik</h2>
//                             <div className="text-left mx-4 md:mx-4">
//                                 <div className="my-2 w-full">
//                                     <div className="flex w-full justify-between">
//                                         <p className="font13-res-300">Mengerjakan</p>
//                                         <p className="font13-res-300 text-gray-600">
//                                             {assignmentStatus.mengerjakan === 0 ? "Tidak ada siswa" : assignmentStatus.mengerjakan + " siswa"}
//                                         </p>
//                                     </div>
//                                     <div className="w-full my-2 h-2 bg-gray-200 rounded-full">
//                                         <div
//                                             className="h-full bg-green-400 rounded-full"
//                                             style={{
//                                                 width: `${Math.min((assignmentStatus.mengerjakan * 3), 100)}%`,
//                                             }}
//                                         ></div>
//                                     </div>
//                                 </div>
//                                 <div className="my-2 w-full">
//                                     <div className="flex w-full justify-between">
//                                         <p className="font13-res-300">Melewatkan</p>
//                                         <p className="font13-res-300 text-gray-600">
//                                             {assignmentStatus.melewatkan === 0 ? "Tidak ada siswa" : assignmentStatus.melewatkan + " siswa"}
//                                         </p>
//                                     </div>
//                                     <div className="w-full my-2 h-2 bg-gray-200 rounded-full">
//                                         <div
//                                             className="h-full bg-red-400 rounded-full"
//                                             style={{
//                                                 width: `${Math.min((assignmentStatus.melewatkan * 3), 100)}%`,
//                                             }}
//                                         ></div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="md:w-full sm:w-11/12 w-full mx-auto gap-3 block lg:flex lg:justify-between">
//                 <div className="lg:w-3/12  w-full">
//                     <div className="lg:w-10/12 md:w-full w-11/12 py-3 px-4 lg:ms-auto lg:mx-0 mx-auto shadow border-radius-8">
//                         <div className="text-left">
//                             <h2 className="font16-res-300" style={{ color:"#646464"}}>Rangkuman Tugas</h2>
//                             <p className="my-1 font14-res-300" style={{ color:"#646464"}}>Tanggal {props.date} dengan Jumlah {props.action_length} Siswa 30</p>
//                         </div>
//                     </div>
//                 </div>

            // </div>
//         </div>
//     </div>
// </>


