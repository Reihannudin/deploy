import React, {useEffect, useState} from "react";
import {Link, useNavigate, useParams, useSearchParams} from "react-router-dom";
import axios from "axios";
import {DetailStudentAbsentCardComponent} from "../Absent/Card/DetailStudentAbsentCard.Component";
import {AbsentNavComponent} from "../Body/MainNav/AbsentNav.Component";

export const DetailStudentAbsentComponent = (props) => {

    const [absentStatus , setAbsentStatus] = useState([]);

    const { id, class_id , slug } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                // const response = await axios.get(`https://rest-api.spaceskool.site/public/api/${slug}/absent/${id}/status`);
                const response = await axios.get(`http://127.0.0.1:8000/api/${slug}/absent/${id}/status`);
                const data = response.data;
                setAbsentStatus(data);
            } catch (error){
                console.log("Error Fetching class data:"  , error)
            }
        }
        fetchData()
    } , [])


    const [student , setStudent] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/${slug}/absent/${id}/show/action/user?filter=${filterStudent}`);
                const data = response.data;
                setStudent(data);
            } catch (error){
                console.log("Error Fetching students data:"  , error)
            }
        }
        fetchData()
    } , [])

    const [isDropdownFilterStudent , setIsDropdownFilterStudent] = useState(true);

    const navigate = useNavigate();
    const toggleDropdowFilterStudent = () => {
        setIsDropdownFilterStudent((prevHidden) => ! prevHidden);
    }

    const [filterStudent, setFilterStudent] = useState('');

    useEffect(() => {
        fetchDataStudent();
    }, [filterStudent]);
    const handleFilterStudentClick = (filterValue) => {
        setFilterStudent(filterValue);
        const url = `?filter=${filterValue}`;
        navigate(url); // Replace navigate with your navigation function
    };

    const handleFilterStudent = () => {
        setIsDropdownFilterStudent(true)
    }

    const fetchDataStudent = async () => {
        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/${slug}/absent/${id}/show/action/user?filter=${filterStudent}`);
            const data = response.data;
            setStudent(data);
        } catch (error) {
            console.log("Error Fetching absent data:", error);
        }
    };

    console.log(student);


    return(
        <>
            <div className=" md:w-full sm:w-11/12  mx-auto w-full"  style={{ minWidth:"300px"}}>
                <div className="block w-full md:hidden">
                    <AbsentNavComponent />
                </div>
                <div className="lg:flex gap-4 lg:justify-between grid  md:grid-cols-1 sm:w-full sm:mx-0 mx-auto w-full">
                    <div className="lg:w-4/12 w-full">
                        <div className="lg:shadow mt-0  lg:w-11/12 lg:pt-4 border-b border-purple-700 w-full pb-6 md:border-radius-8">
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
                                <div className="flex">
                                    <div className="my-3 w-full">
                                        <div className="block w-full text-center">
                                            <p className="font14-res-300">Hadir</p>
                                            <div className="w-12 h-12 bg-gray-200 rounded-full mx-auto">
                                                <div
                                                    className={`w-12 h-12 ${absentStatus.izin === 0 ? "bg-gray-200" : "bg-green-400"} rounded-full relative flex justify-center items-center`}
                                                    style={{
                                                        clipPath: `polygon(0 0, 100% 0, 100%, 0 100%)`,
                                                    }}
                                                >
                                                    <p className="font22-res-300 text-white font-normal">
                                                        0
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
                                                        0
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
                                                    className={`w-12 h-12 ${absentStatus.izin === 0 ? "bg-gray-200" : "bg-red-400"} rounded-full relative flex justify-center items-center`}
                                                    style={{
                                                        clipPath: `polygon(0 0, 100% 0, 100%, 0 100%)`,
                                                    }}
                                                >
                                                    <p className="font22-res-300 text-white font-normal">
                                                        0
                                                        {/*{absentStatus.izin === 0 ? "Tidak ada siswa" : absentStatus.izin + " siswa"}*/}
                                                    </p>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
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
                                <button className="my-auto"  onClick={toggleDropdowFilterStudent}>
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
        </>
    )
}
