import React, {useEffect, useRef, useState} from "react";
import {Link, useNavigate, useParams, useSearchParams} from "react-router-dom";
import axios from "axios";
import {DetailStudentAbsentCardComponent} from "./Card/DetailStudentAbsentCard.Component";
import {AbsentNavComponent} from "../Body/MainNav/AbsentNav.Component";
import api from "../../Config/api";
import CustomAlert from "../Helper/CustomAlert.Component";

export const DetailStudentAbsentComponent = (props) => {

    const navigate = useNavigate();
    const { id, class_id , slug } = useParams();

    const [absentStatus , setAbsentStatus] = useState([]);
    const [isFetching, setIsFetching] = useState(true);
    const [isDataFetched, setIsDataFetched] = useState(false);
    const [error, setError] = useState(null);

    useEffect(()=> {
        let isMounted = true;
        const fetchData = async () => {
            try {
                if (!isDataFetched) {
                    const response = await api.get(`${slug}/absent/${id}/status` , {
                        "Content-Type" : "multipart/form-data" ,
                        "Authorization" : "Bearer " + token,
                    });
                    await new Promise((resolve) => setTimeout(resolve, 1500));

                    const data = response.data;
                    if (isMounted) {
                        setAbsentStatus(data);
                        setIsDataFetched(true);
                    }
                }
                setIsFetching(false);
            } catch (error) {
                if (isMounted) {
                    setError(error);
                    setIsFetching(false);
                }
            }
        }

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
    } , [absentStatus])


    console.log(absentStatus)

    //  =========================

    const [student, setStudent] = useState([]);
    const [isFetchingStudent, setIsFetchingStudent] = useState(true);
    const [isDataFetchedStudent, setIsDataFetchedStudent] = useState(false);
    const [errorStudent, setErrorStudent] = useState(null);
    const [filterStudent, setFilterStudent] = useState('');

    const token = localStorage.getItem('auth_token');

    useEffect(() => {
        let isMounted = true;

        const fetchData = async () => {
            try {
                if (!isDataFetchedStudent) {
                    const response = await axios.get(
                        `http://127.0.0.1:8000/api/${slug}/absent/${id}/show/action/user?filter=${filterStudent}`,
                        {
                            headers: {
                                'Authorization': `Bearer ${token}`,
                            },
                        }
                    );
                    const data = response.data;

                    if (isMounted) {
                        setStudent(data);
                        setIsDataFetchedStudent(true);
                        setIsFetchingStudent(false);
                    }
                }
            } catch (error) {
                if (isMounted) {
                    setErrorStudent(error);
                    setIsFetchingStudent(false);
                }
            }
        };

        const timeout = setTimeout(() => {
            if (isFetchingStudent) {
                if (isMounted) {
                    setErrorStudent(new Error("Timeout: Could not fetch data."));
                    setIsFetchingStudent(false);
                }
            }
        }, 20000);

        fetchData();

        return () => {
            isMounted = false;
            clearTimeout(timeout);
        };
    },
        [slug, id, filterStudent, token, isDataFetchedStudent]);

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


    const definedUrlAbsent = `/view/${slug}/detail/absent/${props.id}`;

    const inputRef = useRef(null);
    const [showAlert, setShowAlert] = useState(false);

    const copyText = () => {
        if (inputRef.current){
            setShowAlert(true);
            inputRef.current.value = definedUrlAbsent;
            inputRef.current.select();
            document.execCommand('copy');
        }
    }

    return(
        <>
            <div className=" md:w-full sm:w-11/12  mx-auto w-full"  style={{ minWidth:"300px"}}>
                <div className="block w-full md:hidden">
                    <AbsentNavComponent />
                </div>
                <div className="lg:flex gap-4 lg:justify-between grid  md:grid-cols-1 sm:w-full sm:mx-0 mx-auto w-full">
                    <div className="lg:w-4/12 md:border-none border-b border-purple-700 w-full">
                        <div className="lg:shadow md:mt-0 mt-3  lg:w-11/12 lg:pt-4 md:border-b border-b  md:border-purple-700 w-full pb-6 md:border-radius-8">
                            <div className="mx-2 md:mx-4 text-left md:pt-2 pb-0 ">
                                <div className="flex justify-between">
                                    <h2 className="font16-res-400" style={{ color:"#646464" , fontWeight:"500"}}>Rangkuman Absent </h2>
                                    {props.status === "selesai" || props.status === "hadir" ? (
                                        <div>
                                            <div className="w-full text-green-600 bg-green-200 px-4 border-radius-4">
                                                <p className="font13-res-300">{props.status}</p>
                                            </div>
                                        </div>
                                    ) : props.status === "melewatkan" ? (
                                        <div>
                                            <div className="w-full text-red-600 bg-red-200 px-2 border-radius-4">
                                                <p className="font13-res-300">{props.status}</p>
                                            </div>
                                        </div>
                                    ) : (
                                        <div>
                                            <div className="w-full text-yellow-600 bg-yellow-200 px-4 border-radius-4">
                                                <p className="font13-res-300">{props.status}</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <p className="my-1 font14-res-300" style={{ color:"#646464"}}>Tanggal {props.date} dengan Jumlah {props.action_length} Siswa</p>
                            </div>

                            <div className="text-left mx-2 md:mx-4">
                                {isFetching ? (
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

                                ): !isDataFetched ?(
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
                                ):(
                                    <div className="flex">
                                        <div className="my-3 w-full">
                                            <div className="block w-full text-center">
                                                <p className="font14-res-300">Hadir</p>
                                                <div className="w-12 h-12 bg-gray-200 rounded-full mx-auto">
                                                    <div
                                                        className={`w-12 h-12 ${absentStatus.hadir === 0 ? "bg-gray-200" : "bg-green-400"} rounded-full relative flex justify-center items-center`}
                                                        style={{
                                                            clipPath: `polygon(0 0, 100% 0, 100%, 0 100%)`,
                                                        }}
                                                    >
                                                        <p className="font22-res-300 text-white font-normal">
                                                            {absentStatus.hadir !== 0 ? absentStatus.hadir : 0}
                                                            {/*{absentStatus.izin === 0 ? "Tidak ada siswa" : absentStatus.izin + " siswa"}*/}
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
                                                        className={`w-12 h-12 ${absentStatus.izin === 0 ? "bg-gray-200" : "bg-yellow-400"} rounded-full relative flex justify-center items-center`}
                                                        style={{
                                                            clipPath: `polygon(0 0, 100% 0, 100%, 0 100%)`,
                                                        }}
                                                    >
                                                        <p className="font22-res-300 text-white font-normal">
                                                            {absentStatus.izin !== 0 ? absentStatus.izin : 0}
                                                            {/*{absentStatus.izin === 0 ? "Tidak ada siswa" : absentStatus.izin + " siswa"}*/}
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
                                                        className={`w-12 h-12 ${absentStatus.melewatkan === 0 ? "bg-gray-200" : "bg-red-400"} rounded-full relative flex justify-center items-center`}
                                                        style={{
                                                            clipPath: `polygon(0 0, 100% 0, 100%, 0 100%)`,
                                                        }}
                                                    >
                                                        <p className="font22-res-300 text-white font-normal">
                                                            {absentStatus.melewatkan !== 0 ? absentStatus.melewatkan : 0}
                                                            {/*{absentStatus.izin === 0 ? "Tidak ada siswa" : absentStatus.izin + " siswa"}*/}
                                                        </p>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className=" lg:shadow w-11/12  block pb-3 md:mx-0 mx-auto md:my-6 my-2">
                            <div className="my-2 text-center py-1 border-none md:border-t">
                                <p className="my-2 font16-res-400">URL Absensi</p>
                                <div className="lg:w-10/12 md:w-8/12 w-10/12  bg-white flex  mx-auto border-radius-4" >
                                    <input ref={inputRef}  className=" font16-res-400 py-2 px-3 bg-gray-100 w-10/12" value={definedUrlAbsent}  onChange={() => {}} />
                                    <button className="w-2/12 bg-purple-500" onClick={copyText}>
                                        <img className="my-auto w-full " style={{ height:"20px"}} src="/assets/copy-icon.svg" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-8/12 mx-auto sm:w-11/12  w-full">
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
                                                        <DetailStudentAbsentCardComponent id={item.id} confirmation_status={item.absent_confirmation} student={item.name} status={item.status} absent_time={item.absent_time} />
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
            {showAlert && (
                <div id="drop-action" className="fixed inset-0 flex items-center justify-center"  style={{ zIndex: "10000" }}>
                    {/* This div serves as a backdrop and should cover the entire screen */}
                    <button
                        onClick={() => setShowAlert(false)} // Close the alert when clicking the backdrop
                        className="bg-gray-500 bg-opacity-30 w-full h-full fixed top-0 left-0"
                        style={{ zIndex: "10000" }}
                    ></button>

                    <CustomAlert
                        message={`Copied Url: ${definedUrlAbsent}`}
                        onClose={() => setShowAlert(false)} // Close the alert when using the custom alert's close button
                    />
                </div>
            )}
        </>
    )
}
