import {Link, useNavigate, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {DetailStudentTaskCardComponent} from "../Classmate/Card/DetailStudentsTask.Component";

export const DetailStudentsTaskComponent= (props) => {


    const [classmate , setClassmate] = useState([]);

    const { id, slug } = useParams();


    const [isDropdownFilterClassmate , setIsDropdownFilterClassmate] = useState(true);

    const navigate = useNavigate();

    const toggleDropdowFilterClassmate = () => {
        setIsDropdownFilterClassmate((prevHidden) => ! prevHidden);
    }
    const [filterClassmate, setFilterClassmate] = useState('');

    useEffect(() => {
        fetchDataClassmate();
    }, [filterClassmate]);

    const handleFilterClassmateClick = (filterValue) => {
        setFilterClassmate(filterValue);
        const url = `?filter=${filterValue}`;
        navigate(url); // Replace navigate with your navigation function
    };

    const fetchDataClassmate = async () => {
        try {
            // const response = await axios.get(`https://rest-api.spaceskool.site/public/api/${slug}/assignment/${id}/classmate?filter=${filterClassmate}`);
            const response = await axios.get(`http://127.0.0.1:8000/api/${slug}/assignment/${id}/classmate?filter=${filterClassmate}`);
            const data = response.data;
            setClassmate(data);
        } catch (error) {
            console.log("Error Fetching assignment data:", error);
        }
    };

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

    return(
        <>
            <div className="w-full">
                <div className="gap-4  grid  grid-cols-1 w-full">
                    <div className="w-full ">
                        <div className="w-full  mx-auto" style={{height:"10px"}}>
                            {/*<img className="w-full h-full sm:border-radius-8 object-cover"  src="/assets/bg-absence.svg"/>*/}
                        </div>
                        <div className="md:flex block sm:w-10/12 md:w-full gap-4 w-11/12  lg:w-11/12 mx-auto justify-between">
                            <div className="pt-2 lg:w-5/12 md:w-6/12  pb-1      text-left">
                                <div className="shadow md:pt-4 pt-2 pb-1   px-5  md:mt-3 mt-1 ">
                                    <div className="flex justify-between">
                                        <div>
                                            <h2 className="font18-res-300">{props.name}</h2>
                                        </div>
                                        <Link to={`/class/${slug}/${props.class_id}/edit/assignment/${id}`} className="my-auto">
                                            <div  className="px-1 py-2 bg-white hover:px-1 hover:bg-gray-100 radius-100 ">
                                                <div className="my-auto mx-1 " style={{ height:"18px"}}>
                                                    <img className="h-full w-full" src="/assets/edit-icon.svg"/>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <h2 className="font13-res-300" style={{ fontWeight:"500" , color:"#525252"}}>{props.start_time} - {props.end_time} / {props.date}</h2>
                                    <div className="flex justify-between w-full my-3 gap-4 ms-auto">
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
                                        ) : (
                                            <div>
                                                <div className="w-full text-yellow-600 bg-yellow-200 px-4 border-radius-4 " >
                                                    <p className="font14-res-300">{props.status}</p>
                                                </div>
                                            </div>
                                        )}
                                        <div className="flex gap-2 mx-0">
                                            <div  className="mt-0.5 font14-res-300" >
                                                <p className="my-auto text-gray-400" >{props.post_time}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="md:w-6/12 w-full">
                                <div className="shadow  lg:mt-1  mt-5  lg:w-11/12 lg:pt-2 border-purple-700 w-full pt-3 pb-3 md:border-radius-8">
                                    <h2 className="font16-res-400 text-left mx-4">Statistik</h2>
                                    <div className="text-left mx-4 md:mx-4">
                                        <div className="my-2 w-full">
                                            <div className="flex w-full justify-between">
                                                <p className="font13-res-300">Mengerjakan</p>
                                                <p className="font13-res-300 text-gray-600">
                                                    {assignmentStatus.mengerjakan === 0 ? "Tidak ada siswa" : assignmentStatus.mengerjakan + " siswa"}
                                                </p>
                                            </div>
                                            <div className="w-full my-2 h-2 bg-gray-200 rounded-full">
                                                <div
                                                    className="h-full bg-green-400 rounded-full"
                                                    style={{
                                                        width: `${Math.min((assignmentStatus.mengerjakan * 3), 100)}%`,
                                                    }}
                                                ></div>
                                            </div>
                                        </div>
                                        <div className="my-2 w-full">
                                            <div className="flex w-full justify-between">
                                                <p className="font13-res-300">Melewatkan</p>
                                                <p className="font13-res-300 text-gray-600">
                                                    {assignmentStatus.melewatkan === 0 ? "Tidak ada siswa" : assignmentStatus.melewatkan + " siswa"}
                                                </p>
                                            </div>
                                            <div className="w-full my-2 h-2 bg-gray-200 rounded-full">
                                                <div
                                                    className="h-full bg-red-400 rounded-full"
                                                    style={{
                                                        width: `${Math.min((assignmentStatus.melewatkan * 3), 100)}%`,
                                                    }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-full sm:w-11/12 w-full mx-auto gap-3 block lg:flex lg:justify-between">
                        <div className="lg:w-3/12  w-full">
                            <div className="lg:w-10/12 md:w-full w-11/12 py-3 px-4 lg:ms-auto lg:mx-0 mx-auto shadow border-radius-8">
                                <div className="text-left">
                                    <h2 className="font16-res-300" style={{ color:"#646464"}}>Rangkuman Tugas</h2>
                                    <p className="my-1 font14-res-300" style={{ color:"#646464"}}>Tanggal {props.date} dengan Jumlah {props.action_length} Siswa 30</p>
                                </div>
                            </div>
                        </div>
                        <div className="xl:w-9/12 lg:w-8/12 lg:mt-0 md:mb-0 mt-5 mb-3 w-full">
                            <div className="xl:w-10/12 md:w-full mx-auto w-11/12">
                                <div className="flex justify-between">
                                    <div className="md:mt-3 mt-3 md:pb-2 pb-2  text-left">
                                        <h2 className="font18-res-300 text-gray-600">Daftar Siswa</h2>
                                    </div>
                                    <div className="relative">
                                        <button className="my-auto"  onClick={toggleDropdowFilterClassmate}>
                                            <div  className="px-1 py-2 bg-white hover:px-1 hover:bg-gray-100 radius-100 ">
                                                <div className="my-auto  mx-1 " style={{ height:"24px"}}>
                                                    <img className="h-full w-full" src="/assets/filter-icon.svg"/>
                                                </div>
                                            </div>
                                        </button>
                                        <div id="dropdown_profile"
                                             className={`z-10 ${isDropdownFilterClassmate ? 'hidden' : ''} absolute right-0 top-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}>
                                            <ul className="py-2 text-sm text-left text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                                <li>
                                                    <button className="block px-4 py-2 font16-res-300 w-full text-left hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-purple-600 dark:hover:text-white" onClick={() => handleFilterClassmateClick('')}>Semua</button>
                                                </li>
                                                <li>
                                                    <button className="block px-4 py-2 font16-res-300  w-full text-left hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-purple-600 dark:hover:text-white" onClick={() => handleFilterClassmateClick('mengerjakan')}>Mengerjakan</button>
                                                </li>
                                                <li>
                                                    <button className="block px-4 py-2 font16-res-300  w-full text-left hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-purple-600 dark:hover:text-white" onClick={() => handleFilterClassmateClick('belum_mengerjakan')}>Belum Absent</button>
                                                </li>
                                                <li>
                                                    <button className="block px-4 py-2 font16-res-300  w-full text-left hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-purple-600 dark:hover:text-white" onClick={() => handleFilterClassmateClick('melewatkan')}>Melewatkan</button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {classmate.length === 0 ? (
                                    <div className="md:py-8 sm:py-6 py-4">
                                        <div className="mb-0 mt-2">
                                            <div>
                                                <div className="mx-auto" style={{ height: "150px", width: "270px" }}>
                                                    <img className="w-full mx-auto h-full" src="/assets/icon-not-assignment.svg" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ):(
                                    <ul className="pt-1 w-full block">
                                        {classmate.map((item) => {
                                            console.log(classmate);
                                            return(
                                                <li className="" key={item.id} >
                                                    <div>
                                                        <DetailStudentTaskCardComponent  student={item.student} status={item.status} long_time={item.long_time} assignment_time={item.assignment_time} />
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
            </div>
        </>
    )
}