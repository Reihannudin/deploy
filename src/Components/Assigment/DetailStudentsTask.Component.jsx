import {Link, useNavigate, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {DetailStudentTaskCardComponent} from "../Classmate/Card/DetailStudentsTask.Component";
import {AssignmentNavComponent} from "../Body/MainNav/AssignmentNav.Component";
import api from "../../Config/api";
import {DetailStudentRankTaskCardComponent} from "../Classmate/Card/DetailStudentRankTask.Component";

export const DetailStudentsTaskComponent= (props) => {

    const navigate = useNavigate();
    const { id , class_id , slug } = useParams();
    const token = localStorage.getItem('auth_token');

    const [assigmentStatus , setAssigmentStatus] = useState([]);
    const [isFetchingAssigment, setIsFetchingAssigment] = useState(true);
    const [isDataFetchedAssigment, setIsDataFetchedAssigment] = useState(false);
    const [errorAssigment, setErrorAssigment] = useState(null);

    useEffect(()=> {
        let isMounted = true;
        const fetchData = async () => {
            try {
                if (!isDataFetchedAssigment) {
                    const response = await api.get(`/${slug}/assignment/${id}/status` , {
                        "Content-Type" : "multipart/form-data" ,
                        "Authorization" : "Bearer " + token,
                    });
                    await new Promise((resolve) => setTimeout(resolve, 1500));

                    const data = response.data;
                    if (isMounted) {
                        setAssigmentStatus(data);
                        setIsDataFetchedAssigment(true);
                    }
                }
                setIsFetchingAssigment(false);
            } catch (error) {
                if (isMounted) {
                    setErrorAssigment(error);
                    setIsFetchingAssigment(false);
                }
            }
        }

        const timeout = setTimeout(() => {
            if (isFetchingAssigment) {
                if (isMounted) {
                    setErrorAssigment(new Error("Timeout: Could not fetch data."));
                    setIsFetchingAssigment(false);
                }
            }
        }, 20000);

        fetchData();

        return () => {
            isMounted = false;
            clearTimeout(timeout);
        };
    } , [assigmentStatus])


    console.log(assigmentStatus)

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


    const [classmate , setClassmate] = useState([]);
    const [isFetchingClassmate, setIsFetchingClassmate] = useState(true);
    const [isDataFetchedClassmate, setIsDataFetchedClassmate] = useState(false);
    const [errorClassmate, setErrorClassmate] = useState(null);
    const [filterClassmate, setFilterClassmate] = useState('');
    const [isDropdownFilterClassmate , setIsDropdownFilterClassmate] = useState(true);

    const toggleDropdowFilterClassmate = () => {
        setIsDropdownFilterClassmate((prevHidden) => ! prevHidden);
    }

    const handleFilterClassmateClick = (filterValue) => {
        setFilterClassmate(filterValue);
        const url = `?filter=${filterValue}`;
        navigate(url); // Replace navigate with your navigation function
    };



    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem("auth_token");
                setIsFetchingClassmate(true); // Set isFetchingAbsent to true before fetching data
                const response = await api.get(`/${slug}/assignment/${id}/student?filter=${filterClassmate}`, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                });

                await new Promise((resolve) => setTimeout(resolve, 1500));
                const data = response.data;
                setClassmate(data);
                setIsDataFetchedClassmate(true);
                setIsFetchingClassmate(false); // Set isFetchingAbsent to false after data is fetched
            } catch (error) {
                setErrorClassmate(error);
                setIsFetchingClassmate(false); // Set isFetchingAbsent to false in case of an error
            }
        };

        fetchData();
    }, [ slug, filterClassmate]);



    const [assignmentStatus , setAssignmentStatus] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // const response = await axios.get(`https://rest-api.spaceskool.site/public/api/${slug}/assignment/${id}/status`);
                const response = await axios.get(`http://127.0.0.1:8000/api/${slug}/assignment/${id}/status`);
                const data = response.data;
                setAssignmentStatus(data)
            }catch (error){
                console.log("Error Fetching status assignment data:"  , error)
            }
        }
        fetchData()
    } , [])

    console.log("assigment status" , assigmentStatus)


    return(
        <>
            <div className=" md:w-full sm:w-11/12  mx-auto w-full"  style={{ minWidth:"333px"}}>
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
                                                        <div className="flex pt-3 pb-2 justify-between">
                                                            <div>
                                                                <h2 className="font18-res-300  ">{props.name}</h2>
                                                            </div>
                                                            <Link to={`/class/${slug}/${props.class_id}/edit/assignment/${id}`} className="my-auto">
                                                                <div  className="px-1 py-0 bg-white hover:px-1 border-radius-4 hover:bg-gray-100 radius-100 ">
                                                                    <div className="my-auto mx-1 " style={{ height:"17px"}}>
                                                                        <img className="h-full w-full" src="/assets/edit-icon.svg"/>
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                        </div>
                                                        <h2 className="font16-res-300" style={{ fontWeight:"500" , color:"#525252"}}>{props.start_time} - {props.end_time} / {props.date}</h2>
                                                        <div className="flex justify-between w-full my-3 gap-4 ms-auto">
                                                            <div className="w-3/12">
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
                                                        ) :  (props.status === "terkunci") ? (
                                                                    <div>
                                                                        <div className="w-full text-purple-600 bg-gray-200 px-2 border-radius-4 " >
                                                                            <p className="font14-res-300">{props.status}</p>
                                                                        </div>
                                                                    </div>
                                                                ):(
                                                            <div>
                                                                <div className="w-full text-yellow-600 bg-yellow-200 px-4 border-radius-4 " >
                                                                    <p className="font14-res-300">{props.status}</p>
                                                                </div>
                                                            </div>
                                                        )}

                                                            </div>
                                                            <div className="flex  gap-2  sm-auto me-0">
                                                                <div  className="mt-0.5 w-full font14-res-300  " >
                                                                    <p className="my-auto text-gray-400" >{props.post_time}</p>
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
                                                                        <div className="w-12 h-12  rounded-full mx-auto">
                                                                            <div
                                                                                className={`w-12 h-12 ${assigmentStatus.mengerjakan !== 0 ? "bg-green-400" : "bg-gray-200"} rounded-full relative flex justify-center items-center`}

                                                                                // className={`w-12 h-12   ${assigmentStatus.mengerjakan === 0 ?  "bg-green-400": "bg-gray-200"}  rounded-full relative flex justify-center items-center`}
                                                                                style={{
                                                                                    clipPath: `polygon(0 0, 100% 0, 100%, 0 100%)`,
                                                                                }}
                                                                            >
                                                                                <p className="font22-res-300 text-white font-normal">
                                                                                    {assigmentStatus.mengerjakan !== 0 ? assigmentStatus.mengerjakan : 0}
                                                                                </p>

                                                                            </div>

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="my-3 w-full">
                                                                    <div className="block w-full text-center">
                                                                        <p className="font13-res-300 mb-2">Melewatkan penugasan</p>

                                                                        <div className="w-12 h-12  rounded-full mx-auto">
                                                                            <div
                                                                                className={`w-12 h-12 ${assigmentStatus.melewatkan !== 0 ? "bg-red-400" : "bg-gray-200"} rounded-full relative flex justify-center items-center`}

                                                                                // className={`w-12 h-12 ${assigmentStatus.melewatkan === 0 ?  "bg-red-400":"bg-gray-200" } rounded-full relative flex justify-center items-center`}

                                                                                style={{
                                                                                    clipPath: `polygon(0 0, 100% 0, 100%, 0 100%)`,
                                                                                }}
                                                                            >
                                                                                <p className="font22-res-300 text-white font-normal">
                                                                                    {assigmentStatus.melewatkan !== 0 ? assigmentStatus.melewatkan : 0}
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="my-3 w-full">
                                                                    <div className="block w-full text-center">
                                                                        <p className="font13-res-300 mb-2">Belum mengerjakan</p>
                                                                        <div className="w-12 h-12 rounded-full mx-auto">
                                                                            <div
                                                                                className={`w-12 h-12 ${assigmentStatus.belum_mengerjakan !== 0 ? "bg-purple-400" : "bg-gray-200"} rounded-full relative flex justify-center items-center`}
                                                                                style={{
                                                                                    clipPath: `polygon(0 0, 100% 0, 100%, 0 100%)`,
                                                                                }}
                                                                            >
                                                                                <p className="font22-res-300 text-white font-normal">
                                                                                    {assigmentStatus.belum_mengerjakan !== 0 ? assigmentStatus.belum_mengerjakan : 0}
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
                                                                <p className="my-1 font14-res-300" style={{ color:"#646464"}}>Tanggal {props.date} dengan Jumlah {props.action_length} </p>
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
                                                                    <div className="md:mt-2.5 mt-2 md:pb-0 pb-0 text-left">
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
                                                                <div className=" pb-2">
                                                                    <div className="mb-0 mt-2">
                                                                        {classmate.length === 0 ? (
                                                                                <div className="md:py-8 sm:py-6 py-4">
                                                                                    <div className="my-10">
                                                                                        <div className="mx-auto my-5" style={{ height:"30px"}}>
                                                                                            <img className="h-full mx-auto" src="/assets/icon-tidak-ada.svg" />
                                                                                        </div>
                                                                                        <h2 className="font16-res-300 my-3 text-gray-500">Belum ada murid yang mengerjakan tugas</h2>
                                                                                    </div>
                                                                                </div>

                                                                        ):(
                                                                        <ul className="pt-1 w-full block">
                                                                            {classmate.map((item) => {
                                                                                console.log(classmate);
                                                                                return(
                                                                                    <li className="" key={item.id} >
                                                                                        <div>
                                                                                            <DetailStudentTaskCardComponent intime={item.intime} image={item.image} score={item.score} assignment_name={item.assignment_name} assignment_deadline={item.assignment_deadline} assignment_date={item.assignment_date} assignment_status={item.assignment_status} assignment_teacher={item.assignment_teacher} student={item.student} status={item.status} long_time={item.long_time} assignment_time={item.assignment_time} />
                                                                                        </div>
                                                                                    </li>
                                                                                )
                                                                            })}
                                                                        </ul>
                                                                        )}
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div id="rank" className={`py-2 lg:px-4 ${activeTab === 'rank' ? '' : 'hidden'}`}>
                                                            <div className=" w-full my-5  mx-auto lg:w-full ">
                                                                <div className="flex mx-0 justify-between">
                                                                    <div className="md:mt-2.5 mt-2 md:pb-0 pb-0 text-left">
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
                                                                <div className="">
                                                                    <div className="mb-0 mt-2">
                                                                        {classmate.length === 0 ? (
                                                                            <div className="md:py-8 sm:py-6 py-4">
                                                                                <div className="my-10">
                                                                                    <div className="mx-auto my-5" style={{ height:"30px"}}>
                                                                                        <img className="h-full mx-auto" src="/assets/icon-tidak-ada.svg" />
                                                                                    </div>
                                                                                    <h2 className="font16-res-300 my-3 text-gray-500">Belum ada murid yang mengerjakan tugas</h2>
                                                                                </div>
                                                                            </div>
                                                                        ):(
                                                                            <ul className="pt-1 w-full block">
                                                                                {classmate.map((item) => {
                                                                                    console.log(classmate);
                                                                                    return(
                                                                                        <li className="" key={item.id} >
                                                                                            <div>
                                                                                                <DetailStudentRankTaskCardComponent   intime={item.intime} assignment_name={item.assignment_name} assignment_deadline={item.assignment_deadline} assignment_date={item.assignment_date} assignment_status={item.assignment_status} assignment_teacher={item.assignment_teacher}  image={item.image} score={item.score} student={item.student} status={item.status} long_time={item.long_time} assignment_time={item.assignment_time} />
                                                                                            </div>
                                                                                        </li>
                                                                                    )
                                                                                })}
                                                                            </ul>
                                                                        )}

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