import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {DetailClassmateTaskCardComponent} from "../Classmate/Card/DetailClassmateTaskCard.Component";

export const DetailClassmateTaskComponent = (props) => {

    const user = JSON.parse(localStorage.getItem('whoLogin'));

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
            const response = await axios.get(`http://127.0.0.1:8000/api/${slug}/assignment/${id}/classmate?filter=${filterClassmate}`);
            const data = response.data;
            setClassmate(data);
        } catch (error) {
            console.log("Error Fetching assignment data:", error);
        }
    };


    console.log(classmate)

    return(
        <>
            <div className="w-full md:mt-8 mt-2"  style={{ minWidth:"300px"}}>
                <div className="md:flex md:gap-4 gap-2 grid  md:grid-cols-2 sm:grid-cols-1 sm:w-full sm:mx-0 mx-auto w-full">
                    <div className=" mt-3 xl:w-5/12  lg:w-7/12 md:w-8/12 md:mx-0 sm:w-full w-11/12 mx-auto">
                        <div className="block lg:shadow lg:border-b-0 border-b  border-purple-700 w-full md:border-radius-8  px-4 py-3  shadow text-left text-gray-600">
                            <div className="block my-1">
                                <div className="flex justify-between">
                                    <h2 className="font16-res-300" style={{ color:"#646464"}}>{props.name}</h2>
                                    {props.status === "selesai" || props.status === "hadir" ? (
                                        <div>
                                            <div className="w-full text-green-600 bg-green-200 px-4 border-radius-4">
                                                <p className="font14-res-300">{props.status}</p>
                                            </div>
                                        </div>
                                    ) : props.status === "melewatkan" ? (
                                        <div>
                                            <div className="w-full text-red-600 bg-red-200 px-2 border-radius-4">
                                                <p className="font14-res-300">{props.status}</p>
                                            </div>
                                        </div>
                                    ) : (
                                        <div>
                                            <div className="w-full text-yellow-600 bg-yellow-200 px-4 border-radius-4">
                                                <p className="font14-res-300">{props.status}</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className="flex my-1 justify-between">
                                    <div className="font14-res-300  mt-0 flex">
                                        <p style={{ fontWeight:"500"}}>Point : </p>
                                        <p>
                                            {props.point}
                                        </p>
                                    </div>
                                    <div className="flex gap-1 font14-res-300">
                                        <p className="">Teacher : </p>
                                        <div className="font14-res-300 font-semibold">
                                            <h4>{props.teacher}</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-1 mt-2 md:mt-4 md:font14-res-300 font13-res-300">
                                <p>Due : </p>
                                <p>
                                    {props.start_time} - {props.end_time} - {props.date}
                                </p>
                            </div>

                        </div>
                        <div className=" mt-5  w-full">
                            <div className="w-full py-3 px-4 lg:ms-auto lg:mx-0 mx-auto shadow border-radius-8">
                                <div className="text-left">
                                    <h2 className="font16-res-400" style={{ color:"#646464"}}>Rangkuman Tugas</h2>
                                    <p className="my-0 font14-res-300" style={{ color:"#646464"}}>Tanggal {props.date} dengan Jumlah {props.action_length} Siswa 30</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-11/12 sm:py-3 py-5 lg:px-0 px-0 sm:w-full w-11/12 mx-auto">
                        <div className="flex justify-between">
                            <div className="md:my-3 mt-2 md:pb-4 pb-2 border-b text-left">
                                <h2 className="font6-res-400 text-gray-600">Daftar Classmate Tugas</h2>
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
                                    <ul className="py-2 text-sm text-left font14-res-300 text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
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
                                    console.log(item.student);
                                    return(
                                        <li className="" key={item.id} >
                                            <div>
                                                <DetailClassmateTaskCardComponent  assignment_time={item.assignment_time} long_time={item.long_time} classmate={item.student} status={item.status}  />
                                            </div>
                                        </li>
                                    )
                                })}

                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}