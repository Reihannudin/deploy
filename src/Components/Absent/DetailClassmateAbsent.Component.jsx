import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {DetailClassmateAbsentCardComponent} from "./Card/DetailClassmateAbsentCard.Component";

export const DetailClassmateAbsentComponent = (props) => {


    const user = JSON.parse(localStorage.getItem('whoLogin'));

    const [classmate , setClassmate] = useState([]);

    const { id, slug } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                // const response = await axios.get(`https://rest-api.spaceskool.site/public/api/${slug}/absent/${id}/classmate`);
                const response = await axios.get(`http://127.0.0.1:8000/api/${slug}/absent/${id}/classmate`);
                const data = response.data;
                setClassmate(data);
            } catch (error){
                console.log("Error Fetching Absent Data:"  , error)
            }
        }
        fetchData()
    } , [])

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
            // const response = await axios.get(`https://rest-api.spaceskool.site/public/api/${slug}/absent/${id}/classmate?filter=${filterClassmate}`);
            const response = await axios.get(`http://127.0.0.1:8000/api/${slug}/absent/${id}/classmate?filter=${filterClassmate}`);
            const data = response.data;
            setClassmate(data);
        } catch (error) {
            console.log("Error Fetching absent data:", error);
        }
    };

    const [absentStatus , setAbsentStatus] = useState([]);
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


    return(
        <>
            <div className="md:w-full sm:w-11/12  mx-auto w-full md:mt-8 sm:mt-4 mt-0"  style={{ minWidth:"300px"}}>
                <div className="lg:flex md:gap-4 gap-2 lg:justify-between grid  md:grid-cols-1 sm:w-full sm:mx-0 mx-auto w-full">
                    <div className="xl:w-4/12 lg:w-5/12 gap-4 lg:gap-2  sm:w-full w-11/12 mx-auto lg:block sm:flex block">
                        <div className="lg:shadow lg:order-1   order-2 mt-0 xl:w-11/12 lg:w-11/12 md:w-9/12 sm:w-10/12 w-full sm:mx-0 mx-auto px-4 py-4 sm:px-3 md:py-2 sm:border-b border-b-0 border-purple-700 md:pb-6 pb-0 md:border-radius-8">
                            <div className="sm:mx-3 mx-0 text-left md:pt-3  pb-0 ">
                                <div className="flex justify-between">
                                    <h2 className="font16-res-400" style={{ color:"#646464"}}>Rangkuman Absent </h2>

                                </div>
                                <p className="mb-1 font13-res-300" style={{ color:"#646464"}}>Tanggal {props.date} dengan Jumlah {props.action_length} Siswa</p>
                            </div>
                            <div className="text-left sm:mx-3 sm:pb-0 pb-5 mx-0 ">
                                <div className="my-3 w-full">
                                    <div className="flex w-full justify-between">
                                        <p className="font14-res-300">Hadir</p>
                                        <p className="font14-res-300 text-gray-600">
                                            {absentStatus.hadir === 0 ? "Tidak ada siswa" : absentStatus.hadir + " siswa"}
                                        </p>
                                    </div>
                                    <div className="w-full my-2 h-2 bg-gray-200 rounded-full">
                                        <div
                                            className="h-full bg-green-400 rounded-full"
                                            style={{
                                                width: `${Math.min((absentStatus.hadir * 3), 100)}%`,
                                            }}
                                        ></div>
                                    </div>
                                </div>
                                <div className="my-3 w-full">
                                    <div className="flex w-full justify-between">
                                        <p className="font14-res-300">Izin</p>
                                        <p className="font14-res-300 text-gray-600">
                                            {absentStatus.izin === 0 ? "Tidak ada siswa" : absentStatus.izin + " siswa"}
                                        </p>
                                    </div>
                                    <div className="w-full my-2 h-2 bg-gray-200 rounded-full">
                                        <div
                                            className="h-full bg-yellow-400 rounded-full"
                                            style={{
                                                width: `${Math.min((absentStatus.izin * 3), 100)}%`,
                                            }}
                                        ></div>
                                    </div>
                                </div>
                                <div className="my-3 w-full">
                                    <div className="flex w-full justify-between">
                                        <p className="font14-res-300">Alpha</p>
                                        <p className="font14-res-300 text-gray-600">
                                            {absentStatus.melewatkan === 0 ? "Tidak ada siswa" : absentStatus.melewatkan + " siswa"}
                                        </p>
                                    </div>
                                    <div className="w-full my-2 h-2 bg-gray-200 rounded-full">
                                        <div
                                            className="h-full bg-red-400 rounded-full"
                                            style={{
                                                width: `${Math.min((absentStatus.melewatkan * 3), 100)}%`,
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="lg:shadow lg:border-b-0 border-b lg:order-2 order-1 mt-0 md:mt-3 xl:w-11/12  lg:w-11/12 md:w-11/12 sm:w-10/12 border-purple-700 w-full md:border-radius-8">
                            <div className="block lg:shadow-none px-4 py-3  shadow text-left text-gray-600">
                                <div className="block">
                                    <div className="flex justify-between">
                                        <h2 className="font16-res-300" style={{ color:"#646464"}}>{props.name}</h2>
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
                                    <div className="flex gap-1 font14-res-300">
                                        <p>Deadline : </p>
                                        <p>
                                            {props.start_time} - {props.end_time}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-1 font13-res-300">
                                    <p className="">Teacher : </p>
                                    <div className="font14-res-300 font-semibold">
                                        <h4>{props.teacher}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-8/12 sm:py-3 py-5 lg:px-0 px-0 sm:w-full w-11/12 mx-auto">
                        <div className="flex  border-b justify-between">
                            <div className="md:mt-3 my-1 md:pb-2 pb-2 text-left">
                                <h2 className="font16-res-400 text-gray-600">Daftar Classmate absent</h2>
                            </div>
                            <div className="relative">
                                <button className="my-auto"  onClick={toggleDropdowFilterClassmate}>
                                    <div  className="px-1 py-2 bg-white hover:px-1 hover:bg-gray-100 radius-100 ">
                                        <div className="my-auto  mx-1 " style={{ height:"20px"}}>
                                            <img className="h-full w-full" src="/assets/filter-icon.svg"/>
                                        </div>
                                    </div>
                                </button>
                                <div id="dropdown_profile"
                                     className={`z-10 ${isDropdownFilterClassmate ? 'hidden' : ''} absolute right-0 top-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}>
                                    <ul className="py-2 text-sm text-left text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                        <li>
                                            <button className="block px-4 py-1 md:py-1.5 font15-res-300 w-full text-left hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-purple-600 dark:hover:text-white" onClick={() => handleFilterClassmateClick('')}>Semua</button>
                                        </li>
                                        <li>
                                            <button className="block px-4 py-1 md:py-1.5 font15-res-300  w-full text-left hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-purple-600 dark:hover:text-white" onClick={() => handleFilterClassmateClick('hadir')}>Hadir</button>
                                        </li>
                                        <li>
                                            <button className="block px-4 py-1 md:py-1.5 font15-res-300  w-full text-left hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-purple-600 dark:hover:text-white" onClick={() => handleFilterClassmateClick('izin')}>Izin</button>
                                        </li>
                                        <li>
                                            <button className="block px-4 py-1 md:py-1.5 font15-res-300  w-full text-left hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-purple-600 dark:hover:text-white" onClick={() => handleFilterClassmateClick('belum_absent')}>Belum Absent</button>
                                        </li>
                                        <li>
                                            <button className="block px-4 py-1 md:py-1.5 font15-res-300  w-full text-left hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-purple-600 dark:hover:text-white" onClick={() => handleFilterClassmateClick('melewatkan')}>Melewatkan</button>
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
                                            <img className="w-full mx-auto h-full" src="/assets/icon-no-absent.svg" />
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
                                                    <DetailClassmateAbsentCardComponent classmate={item.student} status={item.status} absent_time={item.absent_time} />
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