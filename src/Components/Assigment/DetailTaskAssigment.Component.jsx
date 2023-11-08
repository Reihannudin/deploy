import React, {useEffect, useState} from "react";
import {Link, useLocation, useNavigate, useParams} from "react-router-dom";
import api from "../../Config/api";
import {DetailClassmateAbsentCardComponent} from "../Absent/Card/DetailClassmateAbsentCard.Component";
import {DetailClassmateAssignmentCardComponent} from "./Card/DetailClassmateAssignmentCard.Component";


export const  DetailTaskAssigmentComponent = (props) => {
    const { id , class_id , slug } = useParams();

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


    const classname = slug.replace(/_/g, ' ')

    const [dropAction , setDropAction] = useState(false);

    const toggleDropAction = () => {
        setDropAction(!dropAction);
    }

    const handleDropdownItemClick = () => {
        // Close the dropdown when an item is clicked
        setDropAction(false);
    };


    const [isAssignmentidden , setIsAssignmentHidden] = useState(true);

    const toggleAssignment = () => {
        setIsAssignmentHidden((prevHidden) => !prevHidden);
    }


    const user = props.user;
    console.log("detail absent component " , user)
    const username = user.username;


    const [assignmentAction, setAssignmentAction] = useState([]);
    const [isFetchingAssignmentAction, setIsFetchingAssignmentAction] = useState(true);
    const [isDataFetchedAssignmentAction, setIsDataFetchedAssignmentAction] = useState(false);
    const [errorAssignmentAction, setErrorAssignmentAction] = useState(null);

    let token = localStorage.getItem('auth_token');

    useEffect(() => {
        let isMounted = true;

        const fetchData = async () => {
            try {
                if (!isDataFetchedAssignmentAction) {
                    const response = await api.get(`${slug}/assignment/${id}/show/action/user` , {
                        "Content-Type" : "multipart/form-data" ,
                        "Authorization" : "Bearer " + token,
                    });
                    const data = response.data;

                    if (isMounted) {
                        setAssignmentAction(data);
                        setIsDataFetchedAssignmentAction(true);
                        setIsFetchingAssignmentAction(false);
                    }
                }

            } catch (error) {
                if (isMounted) {
                    setErrorAssignmentAction(error);
                    setIsFetchingAssignmentAction(false);
                }
            }
        };

        const timeout = setTimeout(() => {
            if (isFetchingAssignmentAction) {
                if (isMounted) {
                    setErrorAssignmentAction(new Error("Timeout: Could not fetch data."));
                    setIsFetchingAssignmentAction(false);
                }
            }
        }, 20000);

        fetchData();

        return () => {
            isMounted = false;
            clearTimeout(timeout);
        };
    }, [assignmentAction]);

    const [activeTab, setActiveTab] = useState('assignment'); // Set the initial active tab

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
                const response = await api.get(`/${slug}/assignment/${id}/show/action/user?filter=${filterStudent}`, {
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



    const popUpDetail = () => {
        const popUp = document.getElementById('pop_up_detail');
        if (popUp.style.display === 'none'){
            popUp.style.display = 'block'
        } else if(popUp.style.display === 'block'){
            popUp.style.display = 'none'
        }
    }

    let changeAction = parseInt(props.out_app);

    console.log("status" , props.status);
    console.log("change" , props.change);
    console.log("status action" ,  props.statusAction)

    return(
        <>

            <div className='h-screen mx-auto md:pt-16 pt-14  px-0' style={{minWidth: "300px"}}>
                <div className="lg:flex md:block relative h-full lg:w-10/12 md:w-11/12 w-full mx-auto lg:justify-between">
                <div className="xl:w-9/12 md:w-full mx-auto lg:w-9/12 w-full">
                        <div className="bg-white">
                            <div className="me-auto   md:w-10/12 border-b lg:w-full w-11/12 mx-auto">
                                <div className="w-11/12 lg:mx-6 mt-4 mb-0 ">
                                    <ul id="tabs" className="flex mt-1  font18-res-300 w-10/12 px-1 text-purple-500">
                                        <li className="pe-3 sm:pe-6  text-gray-500 hover:text-purple-600 text-left font15-res-300 py-2">
                                            <a id="default-tab" href="#assignment" className="w-full" onClick={() => handleTabClick('assignment')}>
                                                Tugas
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
                            <div id="assignment" className={`py-2 lg:px-4 ${activeTab === 'assignment' ? '' : 'hidden'}`}>
                                <div className="my-3">
                                    <div
                                        className="lg:w-full flex justify-between w-full md:w-11/12 bg-white pb-1 mx-auto border-radius-8">
                                        <div className="flex md:w-full w-9/12 mx-auto gap-2">
                                            <div className="p-2 border-radius-4 me-2" style={{ background:"#A568E6" , height:"45px" }} >
                                                <div className="my-auto" style={{ height:"30px"}}>
                                                    <img className="h-full" src="/assets/assigment-sm-icon.svg" />
                                                </div>
                                            </div>
                                            <div className="text-left my-auto">
                                                <p className="font14-res-300" style={{ color:"#5d5c5c"}}>Assignment</p>
                                                <h1 className="font18-res-300">{props.name}</h1>
                                            </div>
                                        </div>
                                        <div className="w-2/12 me-auto"></div>
                                    </div>
                                    <div className="text-left lg:w-full mx-auto md:mt-4 mt-1 ">
                                        <div className="w-11/12 lg:w-full pt-1 md:pt-0 mx-auto pb-3">
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
                                                    <label className="my-0 py-0 font14-res-300" >Point</label>
                                                    <p className="my-0 py-0  font16-res-300" >{props.point} pts</p>
                                                </div>
                                                <div className="my-1 w-6/12">
                                                    <label className="my-0 py-0 font14-res-300">Time</label>
                                                    <p className="my-0 py-0 font16-res-300">{hours + ':' + minutes + ':' + seconds}</p>
                                                </div>
                                            </div>

                                        </div>
                                        <hr/>
                                        <div className=" w-11/12  pt-2 mx-auto pb-3">
                                            <div className="block pt-3 gap-4 ">
                                                <h1 className="font18-res-300" style={{  fontWeight:"450"}}>Ringkasan Pengerjaan Tugas</h1>
                                                <div className="flex my-2">
                                                    <label className="my-0 py-0 font14-res-300"  style={{ color:"#6e6e6e"}}>Status : </label>
                                                    <p className="my-0 py-0 font14-res-300" >{props.status}</p>
                                                </div>
                                            </div>
                                            <div className="flex my-2">
                                                <label className="my-0 py-0 font14-res-300" >Diizinkan melakukan mengerjakan : </label>
                                                <p className="my-0 py-0 font14-res-300" >{props.change}</p>
                                            </div>
                                            <div className="flex my-2">
                                                <label className="my-0 py-0 font14-res-300" >Kesempatan keluar dari aplikasi : </label>
                                                <p className="my-0 py-0 font14-res-300" >{changeAction}</p>
                                            </div>
                                            <div className="my-2">
                                                <label className="my-0 py-0 font14-res-300" >Batas Waktu pengerjaan tugas</label>
                                                <p className="my-0 py-0 font14-res-300">{props.start_time} - {props.end_time} / {props.date}</p>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="block pt-3 gap-4 mx-auto w-11/12  ">
                                            <h1 className="font18-res-300" style={{fontWeight:"450"}}>Terms of reference</h1>
                                            <p className="my-2 font14-res-300" style={{ color:"#3e3e3e"}}>
                                                Setiap anggota wajib menyelesaikan tugas sebelum batas waktu yang ditentukan, setiap anggota diharapkan tidak menyalin jawaban dari internet, jika setiap keluar dari aplikasi maka waktu mengerjakan tugas akan berkurang 2 menit secara otomatis.
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
                                                <h2 className="font16-res-400 text-gray-600">Daftar teman</h2>
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
                                                                        <button className="block px-4 py-2 font15-res-300  w-full text-left hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-purple-600 dark:hover:text-white" onClick={() =>  handleFilterStudentClick('online')}>Online</button>
                                                                    </li>
                                                                    <li>
                                                                        <button className="block px-4 py-2 font15-res-300  w-full text-left hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-purple-600 dark:hover:text-white" onClick={() =>  handleFilterStudentClick('offline')}>Offline</button>
                                                                    </li>
                                                                    <li>
                                                                        <button className="block px-4 py-2 font15-res-300  w-full text-left hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-purple-600 dark:hover:text-white" onClick={() =>  handleFilterStudentClick('selesai')}>selesai</button>
                                                                    </li>
                                                                    <li>
                                                                        <button className="block px-4 py-2 font15-res-300  w-full text-left hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-purple-600 dark:hover:text-white" onClick={() =>  handleFilterStudentClick('melewatkan')}>Melewatkan</button>
                                                                    </li>
                                                                    <li>
                                                                        <button className="block px-4 py-2 font15-res-300  w-full text-left hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-purple-600 dark:hover:text-white" onClick={() =>  handleFilterStudentClick('belum_mengerjakan')}>Belum mengerjakan</button>
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
                                                                        <DetailClassmateAssignmentCardComponent id={item.id} image={item.image} name={item.name} assignment_date={item.absent_date} assignment_name={item.assignment_name} correct={item.correct} wrong={item.wrong} task_time={item.task_time} intime={item.intime} status_assignment={item.assignment_status}  action={item.action} reason={item.reason} assignment_time={item.assignment_time} assignment_deadline={item.assignment_deadline}   assignment_confirmation={item.assignment_confirmation} student={item.name} status={item.status} />
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
                        className="xl:w-3/12 lg:w-4/12 w-full sw-full lg:relative absolute bottom-0 lg:mx-0 mx-auto lg:mt-5  ">
                        <div className="lg:w-full md:w-10/12 bg-white z-50  w-full mx-auto">
                            <div className="shadow md:shadow-none lg:shadow lg:pb-4 pb-3 border-radius-8">
                                <div className="flex lg:mx-4 lg:w-11/12 md:w-full w-10/12 mx-auto py-5 justify-between">
                                    <h2 className="font16-res-400">Tugas Anda</h2>
                                    {props.status  === "selesai" || props.change === 0 || props.statusAction === "mengerjakan"  ? (
                                        <p className="my-0 font14-res-300 text-green-500">Sudah mengerjakan</p>
                                    ) : props.status === "selesai" && props.statusAction === null ? (
                                        <p className="my-0 font14-res-300 text-gray-500">Melewatkan</p>
                                    ) : (
                                        <p className="my-0 font14-res-300" style={{ color: "#7e7e7e" }}>diperlukan pengerjaan</p>
                                    )}
                                </div>
                                <div className="lg:mx-4 lg:w-11/12 md:w-full w-10/12 mx-auto relative">
                                    {props.status === "selesai" || props.change === 0 || props.statusAction === "mengerjakan" ? (
                                        <button
                                            onClick={toggleDropAction}
                                            disabled
                                            className="w-full py-2 font16-res-300 bg-gray-300 cursor-no-drop text-white border-radius-4"
                                        >
                                            Tidak Dizinkan Mengerjakan
                                        </button>
                                    ) : props.status === "selesai" &&  props.statusAction === null ? (
                                        <button
                                            onClick={toggleDropAction}
                                            disabled
                                            className="w-full py-2 font16-res-300 bg-gray-300 cursor-no-drop text-white border-radius-4"
                                        >
                                            Tidak Dizinkan Mengerjakan
                                        </button>
                                    ) : (
                                        <button
                                            onClick={toggleDropAction}
                                            className="w-full py-2 font16-res-300 weverse-background-btn text-white border-radius-4"
                                        >
                                            Kerjakan Sekarang
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {dropAction && (
                <div id="drop-action" className="flex items-center z-50 justify-center w-full fixed bottom-0 min-h-screen md:top-0 md:left-0 md:h-full md:flex">
                    {/* This div serves as a backdrop and should cover the entire screen */}
                    <div onClick={handleDropdownItemClick} className="bg-gray-500 bg-opacity-30 w-full h-full absolute bottom-0  z-50"></div>
                    {/* Centered dropdown content */}
                    <div className="absolute bg-white bottom-0  w-full py-4 border-radius-8 z-50" style={{ borderRadius: "25px 25px 0px 0px" }}>
                        <div className="py-4 text-left md:w-10/12 mx-auto"> {/* Add 'md:' to center the content on md screens */}
                            <h2 className="font16-res-400">Mengerjakan tugas</h2>
                            <div className="block mt-3 text-left font14-res-300">
                                <div className="">
                                    <p className="text-gray-700">Izin keluar dari aplikasi : </p>
                                    <p className="text-gray-500"> {props.out_app}</p>
                                </div>
                                <div className="">
                                    <p className="text-gray-700">Kesempatan pengerjaan : </p>
                                    <p className="text-gray-500">{props.change}</p>
                                </div>
                            </div>
                            <div className="pt-4 pb-2">
                                <ul className="gap-3 block">
                                    <li className="mb-3">
                                        <Link to={`/view/${slug}/${class_id}/detail/pre/assignment/${id}`}>
                                            <div className="py-3 border-radius-4 border-purple-700 hover:bg-purple-600 text-purple-600 border hover:text-white font16-res-300">
                                                <p className="mx-3 cursor-pointer">Kerjakan sekarang</p>
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                                <div className="mt-3 mx-1">
            <span className="text-gray-500 font13-res-300">
              Pastikan Anda Melakukan pengerjaan sebelum deadline
            </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </>
    )
}

