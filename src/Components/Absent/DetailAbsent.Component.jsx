import React, {useEffect, useState} from "react";
import {Link, useLocation, useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {AbsentNavComponent} from "../Body/MainNav/AbsentNav.Component";
import api from "../../Config/api";
import AbsentDetailMyClassHelper from "../Class/Comps/AbsentDetailMyClass.Helper";
import {AssignmentDetailMyClassHelper} from "../Class/Comps/AssignmentDetailMyClass.Helper";
import {ResourceDetailMyClassHelper} from "../Class/Comps/ResourceDetailMyClass.Helper";
import {DetailStudentAbsentCardComponent} from "./Card/DetailStudentAbsentCard.Component";
import {DetailClassmateAbsentCardComponent} from "./Card/DetailClassmateAbsentCard.Component";


export const  DetailAbsentComponent = (props) => {

    const navigate = useNavigate();
    const location = useLocation();

    const [currentTime , setCurrentTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        } , 1000);

        return () => {
            clearInterval(intervalId)
        }
    }, []);

    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    const { id , class_id , slug } = useParams();

    const classname = slug.replace(/_/g, ' ')

    const [dropAction , setDropAction] = useState(false);

    const toggleDropAction = () => {
        setDropAction(!dropAction);
    }

    const handleDropdownItemClick = () => {
        // Close the dropdown when an item is clicked
        setDropAction(false);
    };


    const [isAbsentidden , setIsAbsentHidden] = useState(true);

    const toggleAbsent = () => {
        setIsAbsentHidden((prevHidden) => !prevHidden);
    }


    const user = props.user;
    console.log("detail absent component " , user)
    const username = user.username;


    const [absentAction, setAbsentAction] = useState([]);
    const [isFetchingAbsentAction, setIsFetchingAbsentAction] = useState(true);
    const [isDataFetchedAbsentAction, setIsDataFetchedAbsentAction] = useState(false);
    const [errorAbsentAction, setErrorAbsentAction] = useState(null);

    let token = localStorage.getItem('auth_token');

    useEffect(() => {
        let isMounted = true;

        const fetchData = async () => {
            try {
                if (!isDataFetchedAbsentAction) {
                    const response = await api.get(`${slug}/absent/${id}/show/action/user` , {
                        "Content-Type" : "multipart/form-data" ,
                        "Authorization" : "Bearer " + token,
                    });
                    const data = response.data;

                    if (isMounted) {
                        setAbsentAction(data);
                        setIsDataFetchedAbsentAction(true);
                        setIsFetchingAbsentAction(false);
                    }
                }

            } catch (error) {
                if (isMounted) {
                    setErrorAbsentAction(error);
                    setIsFetchingAbsentAction(false);
                }
            }
        };

        const timeout = setTimeout(() => {
            if (isFetchingAbsentAction) {
                if (isMounted) {
                    setErrorAbsentAction(new Error("Timeout: Could not fetch data."));
                    setIsFetchingAbsentAction(false);
                }
            }
        }, 20000);

        fetchData();

        return () => {
            isMounted = false;
            clearTimeout(timeout);
        };
    }, [absentAction]);

    const [activeTab, setActiveTab] = useState('absent'); // Set the initial active tab

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


    //  ============================================

    const [student, setStudent] = useState([]);
    const [isFetchingStudent, setIsFetchingStudent] = useState(true);
    const [isDataFetchedStudent, setIsDataFetchedStudent] = useState(false);
    const [errorStudent, setErrorStudent] = useState(null);
    const [filterStudent, setFilterStudent] = useState('');



    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem("auth_token");
                setIsFetchingStudent(true); // Set isFetchingAbsent to true before fetching data
                const response = await api.get(`/${slug}/absent/${id}/show/action/user?filter=${filterStudent}`, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                });

                await new Promise((resolve) => setTimeout(resolve, 1500));
                const data = response.data;
                setStudent(data);
                setIsDataFetchedStudent(true);
                setIsFetchingStudent(false); // Set isFetchingAbsent to false after data is fetched
            } catch (error) {
                setErrorStudent(error);
                setIsFetchingStudent(false); // Set isFetchingAbsent to false in case of an error
            }
        };

        fetchData();
    }, [ slug, filterStudent]);


    const [isDropdownFilterStudent, setIsDropdownFilterStudent] = useState(true);

    const toggleDropdownFilterStudent = () => {
        setIsDropdownFilterStudent((prevHidden) => !prevHidden);
    };


    useEffect(() => {
        // Remove fetchDataStudent and fetchData function as it's no longer needed
    }, [filterStudent]);

    const handleFilterStudentClick = (filterValue) => {
        setFilterStudent(filterValue);
        const url = `?filter=${filterValue}`;
        // Replace navigate with your navigation function
        navigate(url);
    };

    const handleFilterStudent = () => {
        setIsDropdownFilterStudent(true);
    };



    return(
        <>
            <div className='h-full  mx-auto md:pt-16  pt-14 px-0' style={{ minWidth:"333px"}} key={props.id} >

                <div className="lg:flex md:block relative h-full gap-2 md:gap-4 lg:w-10/12 sm:w-11/12  w-full mx-auto lg:justify-between">
                    <div className="xl:w-9/12 md:w-full mx-auto lg:w-9/12 w-full">
                        <div className="bg-white">
                            <div className="me-auto   md:w-10/12 border-b lg:w-full w-11/12 mx-auto">
                                <div className="w-11/12 lg:mx-6 mt-4 mb-0 ">
                                    <ul id="tabs" className="flex mt-1  font18-res-300 w-10/12 px-1 text-purple-500">
                                        <li className="pe-3 sm:pe-6  text-gray-500 hover:text-purple-600 text-left font15-res-300 py-2">
                                            <a id="default-tab" href="#absent" className="w-full" onClick={() => handleTabClick('absent')}>
                                                Absent
                                            </a>
                                        </li>
                                        <li className="px-4 sm:px-6 md:px-6 text-gray-500 hover:text-purple-600 text-left mx-4  font15-res-300 py-2">
                                            <a href="#classmate" className="w-full" onClick={() => handleTabClick('classmate')}>
                                                Teman Kelas
                                            </a>
                                        </li>
                                        <li className="px-4 text-gray-800 hidden font-semibold py-2">
                                            <a href="#fourth">Tab 4</a>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                        <div id="tab-contents" className="w-full md:w-11/12 lg:w-full lg:mx-3 mx-auto">
                            <div id="absent" className={`py-2 lg:px-4 ${activeTab === 'absent' ? '' : 'hidden'}`}>
                                <div className="my-3">
                                    <div
                                        className="lg:w-full flex justify-between w-full md:w-11/12 bg-white pb-1 mx-auto border-radius-8">
                                        <div className="flex md:w-full w-9/12 mx-auto gap-2">
                                            <div className="p-2 border-radius-4 ms-1.5 me-2"
                                                 style={{background: "#A568E6", height: "45px"}}>
                                                <div className="my-auto" style={{height: "30px"}}>
                                                    <img className="h-full" src="/assets/absent-sm-icon.svg"/>
                                                </div>
                                            </div>
                                            <div className="text-left my-auto">
                                                <p className="font14-res-300" style={{color: "#5d5c5c"}}>Absent</p>
                                                <h1 className="font18-res-300">{props.name}</h1>
                                            </div>
                                        </div>
                                        <div className="w-2/12 me-auto"></div>
                                    </div>
                                    <div className="text-left lg:w-full mx-auto md:mt-4 mt-1 ">
                                        <div className="w-11/12 lg:w-full pt-3 md:pt-0 mx-auto pb-3">
                                            <div className="flex justify-between">
                                                <div className="my-1 w-6/12">
                                                    <label className="my-0 py-0 font14-res-300">Kelas</label>
                                                    <p className="my-0 py-0 font16-res-300">{classname}</p>
                                                </div>
                                                <div className="my-1 w-6/12">
                                                    <label className="my-0 py-0 font14-res-300">Guru</label>
                                                    <p className="my-0 py-0 font16-res-300">{props.teacher}</p>
                                                </div>
                                            </div>
                                            <div className="flex justify-between">
                                                <div className="my-1 w-6/12">
                                                    <label className="my-0 py-0 font14-res-300">Tanggal dibuat</label>
                                                    <p className="my-0 py-0 font16-res-300">{props.post_time}</p>
                                                </div>
                                                <div className="my-1 w-6/12">
                                                    <label className="my-0 py-0 font14-res-300">Time</label>
                                                    <p className="my-0 py-0 font16-res-300">{hours + ':' + minutes + ':' + seconds}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <hr/>
                                        <div className="w-11/12 lg:w-full pt-2 mx-auto pb-3">
                                            <div className="block pt-3 gap-4">
                                                <h1 className="font18-res-300" style={{fontWeight: "450"}}>Ringkasan
                                                    Pengerjaan Absensi</h1>
                                                <div className="flex my-2">
                                                    <label className="my-0 py-0 font14-res-300"
                                                           style={{color: "#6e6e6e"}}>Status : </label>
                                                    <p className="my-0 py-0 font14-res-300">{props.status}</p>
                                                </div>
                                            </div>
                                            <div className="flex my-2">
                                                <label className="my-0 py-0 font14-res-300">Diizinkan melakukan absent
                                                    : </label>
                                                <p className="my-0 py-0 font14-res-300">{props.change}</p>
                                            </div>
                                            <div className="my-2">
                                                <label className="my-0 py-0 font14-res-300">Batas Waktu Absent</label>
                                                <p className="my-0 py-0 font14-res-300">{props.start_time} - {props.end_time} / {props.date}</p>
                                            </div>
                                        </div>
                                        <hr/>
                                        <div className="block pt-3 gap-4 mx-auto w-11/12 lg:w-full">
                                            <h1 className="font18-res-300" style={{fontWeight: "450"}}>Terms of
                                                reference</h1>
                                            <p className="my-2 font14-res-300" style={{color: "#3e3e3e"}}>Setiap member
                                                wajib absen sebelum batas waktu yang ditentukan, Setiap member
                                                dipersilakan memilih menggunakan metode absen yang telah disediakan,
                                                Absensi ini akan tersimpan secara otomatis, jika berhasil absen
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="classmate" className={`py-2 lg:px-4 ${activeTab === 'classmate' ? '' : 'hidden'}`}>
                                <div className={"my-3 "}>
                                    <div className="lg:w-full mx-auto sm:w-11/12 md:w-11/12 w-11/12">
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
                                                            <div className="absolute right-0 md:right-10  z-50 top-0 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-36 md:w-44 dark:bg-gray-700 dark:divide-gray-600">
                                                                <ul className="py-2 text-sm text-left text-gray-700 dark:text-gray-400">
                                                                    <li>
                                                                        <button className="block px-4 py-2 font15-res-300 w-full text-left hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-purple-600 dark:hover:text-white" onClick={() => handleFilterStudentClick('')}>Semua</button>
                                                                    </li>
                                                                    <li>
                                                                        <button className="block px-4 py-2 font15-res-300  w-full text-left hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-purple-600 dark:hover:text-white" onClick={() =>  handleFilterStudentClick('hadir')}>Hadir</button>
                                                                    </li>
                                                                    <li>
                                                                        <button className="block px-4 py-2 font15-res-300  w-full text-left hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-purple-600 dark:hover:text-white" onClick={() =>  handleFilterStudentClick('izin')}>Izin</button>
                                                                    </li>
                                                                    <li>
                                                                        <button className="block px-4 py-2 font15-res-300  w-full text-left hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-purple-600 dark:hover:text-white" onClick={() =>  handleFilterStudentClick('belum_absent')}>Belum Absent</button>
                                                                    </li>
                                                                    <li>
                                                                        <button className="block px-4 py-2 font15-res-300  w-full text-left hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-purple-600 dark:hover:text-white" onClick={() =>  handleFilterStudentClick('melewatkan')}>Melewatkan</button>
                                                                    </li>
                                                                </ul>
                                                            </div>

                                                        </div>

                                                    </div>
                                                )}

                                            </div>
                                        </div>
                                        <ul className="pt-1 w-full block">
                                            {student.length === 0 ? (
                                                <div className="my-20">
                                                    <div className="mx-auto my-5" style={{ height:"30px"}}>
                                                        <img className="h-full mx-auto" src="/assets/icon-tidak-ada.svg" />
                                                    </div>
                                                    <h2 className="font16-res-300 my-3 text-gray-500">Belum ada murid yang melakukan absensi</h2>
                                                </div>
                                            ):(
                                                <div>
                                                    {student.map((item) => {
                                                        console.log(item)
                                                        return(
                                                            <li key={item.id} className="">
                                                                {item.action === 0 ? (
                                                                    <div className="my-8">
                                                                        <div className="mx-auto my-5" style={{ height:"30px"}}>
                                                                            <img className="h-full mx-auto" src="/assets/icon-tidak-ada.svg" />
                                                                        </div>
                                                                        <h2 className="font16-res-300 my-3 text-gray-500">Belum ada murid yang melakukan absensi</h2>
                                                                    </div>
                                                                ) : (
                                                                    <div>
                                                                        <DetailClassmateAbsentCardComponent id={item.id} image={item.image} name={item.name} absent_date={item.absent_date} absent_name={item.absent_name} status_absent={item.absent_status}  action={item.action} reason={item.reason} absent_time={item.absent_time} absent_deadline={item.absent_deadline}   absent_confirmation={item.absent_confirmation} student={item.name} status={item.status} />
                                                                    </div>
                                                                )}
                                                            </li>
                                                        )
                                                    })}
                                                </div>
                                            )}
                                        </ul>
                                    </div>

                                </div>
                            </div>
                            <div id="fourth" className="py-2 md:px-4" style={{ display: 'none' }}>
                            </div>
                        </div>
                    </div>
                    <div
                        className="xl:w-3/12 lg:w-4/12 sm:w-11/12 w-full  lg:relative fixed  bottom-0 lg:mx-0 mx-auto lg:mt-5  ">
                        <div className="xl:w-full  lg:w-full  md:w-10/12 bg-white z-50  w-full me-auto ms-auto lg:me-0 xl:me-auto">
                            {absentAction.map((itemAction) => {
                                return(
                                    <>
                                        {itemAction.username === username ? (
                                            <div className="shadow md:shadow-none lg:shadow lg:pb-4 pb-4 border-radius-8">
                                                <div className="flex lg:mx-4 lg:w-11/12 md:w-full w-11/12 ms-auto  me-auto lg:me-0  xl:me-auto py-6 md:py-5 justify-between">
                                                    <h2 className="font14-res-300">Absensi Anda</h2>
                                                    {itemAction.status === "hadir" || props.change === 0 ? (
                                                        <p className="my-0 font14-res-300 text-green-500">Sudah absent</p>
                                                    ) : props.status === "selesai" && itemAction.status === null ? (
                                                        <p className="my-0 font14-res-300 text-gray-500">Melewatkan</p>
                                                    ) : (
                                                        <p className="my-0 font14-res-300" style={{ color: "#7e7e7e" }}>diperlukan absent</p>
                                                    )}
                                                </div>
                                                <div className="lg:mx-4 lg:w-11/12 md:w-full w-11/12 mx-auto relative">
                                                    {itemAction.status === "hadir" || props.change === 0 || props.status === "selesai" ? (
                                                        <button
                                                            onClick={toggleDropAction}
                                                            disabled
                                                            className="w-full py-2 font14-res-300 bg-gray-300 cursor-no-drop text-white border-radius-4"
                                                        >
                                                            Tidak Dizinkan Absent
                                                        </button>
                                                    ) : props.status === "selesai" && itemAction.status === null ? (
                                                        <button
                                                            onClick={toggleDropAction}
                                                            disabled
                                                            className="w-full py-2 font14-res-300 bg-gray-300 cursor-no-drop text-white border-radius-4"
                                                        >
                                                            Tidak Dizinkan Absent
                                                        </button>
                                                    ) : (
                                                        <button
                                                            onClick={toggleDropAction}
                                                            className="w-full py-2 font14-res-300 weverse-background-btn text-white border-radius-4"
                                                        >
                                                            Absent Sekarang
                                                        </button>
                                                    )}
                                                </div>
                                            </div>
                                        ): (
                                            <>
                                            </>
                                        )}
                                    </>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>

            {dropAction && (
                <div id="drop-action" className="flex items-center justify-center w-full fixed bottom-0 min-h-screen">
                    {/* This div serves as a backdrop and should cover the entire screen */}
                    <div onClick={handleDropdownItemClick} className="bg-gray-300 bg-opacity-30 w-full h-full absolute bottom-0 z-50" ></div>
                    {/* Centered dropdown content */}
                    <div className="absolute bg-white bottom-0 w-full  py-4 border-radius-8 z-50" style={{ borderRadius:"25px 25px 0px 0px"}}>
                        <div className="py-4 text-left w-10/12 mx-auto">
                            <h2 className="font16-res-400">Metode Absensi</h2>
                            <div className="pt-6 pb-2">
                                <ul className="gap-3 block">
                                    <li className="mb-3">
                                        <Link to={`/class/${slug}/${id}/create/absent`} >
                                            <div className="py-3  border-radius-4 bg-gray-100  text-purple-600 hover:bg-purple-600 hover:text-white font16-res-300">
                                                <p className="mx-3 cursor-pointer">Absensi Dengan Passwordt</p>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={`/class/${slug}/${id}/create/assignment`}>
                                            <div  className="py-3 border-radius-4 bg-gray-100  text-purple-600  hover:bg-purple-600 hover:text-white font16-res-300">
                                                <p className="mx-3 cursor-pointer">Absensi Menggunakan Facial</p>
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                                <div className="mt-3 mx-1">
                                    <span className={"text-gray-500 font13-res-300"}>
                                        Pastikan Anda Melakukan absensi sebelum deadline
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}



            {/*<div id="pop_up_detail" tabIndex="-1" onClose={popUpDetail}  style={{ display:"none" , background:"rgba(75,75,75,0.67)" }} className="fixed z-50 w-full p-0 overflow-x-hidden overflow-y-auto inset-0 h-[calc(100%)] ">*/}
            {/*    <div className="absolute lg:w-6/12 md:w-7/12 sm:w-8/12 w-9/12 mx-auto h-full max-w-2xl position-pop-up md:h-auto" >*/}
            {/*        <div className="relative bg-white pb-3 xl:w-8/12 lg:w-9/12 md:w-10/12 w-full top-24 rounded-lg shadow dark:bg-gray-700" style={{ minHeight:"260px" , maxHeight:"290px"}} >*/}
            {/*            <div className="flex items-start justify-end md:pt-5 md:pb-5 pt-3 pb-2 px-4 border-b rounded-t dark:border-gray-600">*/}
            {/*                <h3 className="text-lg my-1 w-full ms-5 font-normal font16-res-400 text-center text-gray-900 dark:text-white">*/}
            {/*                    Metode Absent*/}
            {/*                </h3>*/}
            {/*                <button type="button"  onClick={popUpDetail} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">*/}
            {/*                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path></svg>*/}
            {/*                    <span className="sr-only">Close modal</span>*/}
            {/*                </button>*/}
            {/*            </div>*/}
            {/*            <div className="my-3">*/}
            {/*                <div className="w-10/12 mt-4 text-left mx-auto" >*/}
            {/*                    <div className="my-2">*/}
            {/*                        <p className="font15-res-300" style={{ color:"#656565"}}>Pilih metode absensi, yang akan kamu gunakan untuk melakukan absent </p>*/}
            {/*                        <ul className="py-2 font15-res-300 text-left text-gray-700 dark:text-gray-400"*/}
            {/*                            aria-labelledby="dropdownLargeButton">*/}
            {/*                            <li className=" my-3 ">*/}
            {/*                                <a href={`/view/${slug}/detail/absent/${id}/action/password`} className="block px-4 py-2.5 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-purple-600  dark:hover:text-white">Password</a>*/}
            {/*                            </li>*/}
            {/*                            <li className="bg-gray-100 text-gray-400 disabled cursor-no-drop">*/}
            {/*                                <button disabled className="w-full text-left flex cursor-no-drop">*/}
            {/*                                    <p className="block ps-4 pe-1 py-3.5 hover:bg-gray-50 dark:hover:bg-gray-600 hover:text-purple-600  dark:hover:text-white">Selfie/Foto</p>*/}
            {/*                                    <p className="text-yellow-500 my-auto">(Dalam pemeliharaan)</p>*/}
            {/*                                </button>*/}
            {/*                            </li>*/}
            {/*                        </ul>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}

            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </>
    )
}
