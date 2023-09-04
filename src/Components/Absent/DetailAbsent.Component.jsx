import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import axios from "axios";


export const  DetailAbsentComponent = (props) => {

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

    const [isAbsentidden , setIsAbsentHidden] = useState(true);

    const toggleAbsent = () => {
        setIsAbsentHidden((prevHidden) => !prevHidden);
    }

    const popUpDetail = () => {
        const popUp = document.getElementById('pop_up_detail');
        if (popUp.style.display === 'none'){
            popUp.style.display = 'block'
        } else if(popUp.style.display === 'block'){
            popUp.style.display = 'none'
        }
    }

    const { id , class_id , slug } = useParams();
    const user = JSON.parse(localStorage.getItem('whoLogin'));
    const username = user.username;

    const classname = slug.replace(/_/g, ' ');

    const [absents , setAbsents] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // const response = await axios.get(`https://rest-api.spaceskool.site/public/api/${username}/${slug}/absent/${id}/user`);
                const response = await axios.get(`http://127.0.0.1:8000/api/${username}/${slug}/absent/${id}/user`);
                const data = response.data;
                setAbsents(data);
            } catch (error){
                console.log("Error Fetching Absent Data:"  , error)
            }
        }
        fetchData()
    } , [])

    const [absentAction , setAbsentAction] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // const response = await axios.get(`https://rest-api.spaceskool.site/public/api/${slug}/absent/${id}/show/action/user`);
                const response = await axios.get(`http://127.0.0.1:8000/api/${slug}/absent/${id}/show/action/user`);
                const data = response.data;
                setAbsentAction(data);
            } catch (error){
                console.log("Error Fetching class data:"  , error)
            }
        }
        fetchData()
    } , [])


    return(
        <>
            {absents.map((item) => {
                return(
                    <div className='h-screen mx-auto md:pt-16 pt-16 px-0' style={{minWidth: "300px"}}>
                        <div className="lg:flex md:block relative h-full lg:w-10/12 md:w-11/12 w-full mx-auto lg:justify-between">
                            <div className="lg:w-8/12 w-full">
                                <div className="md:mt-7 mt-4">
                                    <div
                                        className="lg:w-full flex justify-between w-11/12 bg-white pb-1 mx-auto border-radius-8">
                                        <div className="flex w-9/12 mx-auto gap-2">
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
                                    <div className="text-left lg:w-full w-11/12 mx-auto md:mt-4 mt-1 ">
                                        <div className="w-11/12 pt-3 md:pt-0 mx-auto pb-3">
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
                                        <div className="w-11/12 pt-2 mx-auto pb-3">
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
                                                <p className="my-0 py-0 font14-res-300">{item.change}</p>
                                            </div>
                                            <div className="my-2">
                                                <label className="my-0 py-0 font14-res-300">Batas Waktu Absent</label>
                                                <p className="my-0 py-0 font14-res-300">{props.start_time} - {props.end_time} / {props.date}</p>
                                            </div>
                                        </div>
                                        <hr/>
                                        <div className="block pt-3 gap-4 mx-auto w-11/12">
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
                            <div
                                className="xl:w-3/12 lg:w-4/12 w-full sw-full lg:relative absolute bottom-0 lg:mx-0 mx-auto lg:mt-5  ">
                                <div className="lg:w-full md:w-10/12 bg-white z-50  w-full mx-auto">
                                    {absentAction.map((itemAction) => {
                                        return(
                                            <>
                                                {itemAction.username === username ? (
                                                    <div className="shadow md:shadow-none lg:shadow lg:pb-4 pb-3 border-radius-8">
                                                        <div className="flex lg:mx-4 lg:w-11/12 md:w-full w-10/12 mx-auto py-5 justify-between">
                                                            <h2 className="font16-res-400">Your Absent</h2>
                                                            {itemAction.status === "hadir" || item.change === 0 ? (
                                                                <p className="my-0 font14-res-300 text-green-500">Sudah absent</p>
                                                            ) : props.status === "selesai" && itemAction.status === null ? (
                                                                <p className="my-0 font14-res-300 text-gray-500">Melewatkan</p>
                                                            ) : (
                                                                <p className="my-0 font14-res-300" style={{ color: "#7e7e7e" }}>diperlukan absent</p>
                                                            )}
                                                        </div>
                                                        <div className="lg:mx-4 lg:w-11/12 md:w-full w-10/12 mx-auto relative">
                                                            {itemAction.status === "hadir" || item.change === 0 || props.status === "selesai" ? (
                                                                <button
                                                                    onClick={popUpDetail}
                                                                    disabled
                                                                    className="w-full py-2 font16-res-300 bg-gray-300 cursor-no-drop text-white border-radius-4"
                                                                >
                                                                    Tidak Dizinkan Absent
                                                                </button>
                                                            ) : props.status === "selesai" && itemAction.status === null ? (
                                                                <button
                                                                    onClick={popUpDetail}
                                                                    disabled
                                                                    className="w-full py-2 font16-res-300 bg-gray-300 cursor-no-drop text-white border-radius-4"
                                                                >
                                                                    Tidak Dizinkan Absent
                                                                </button>
                                                            ) : (
                                                                <button
                                                                    onClick={popUpDetail}
                                                                    className="w-full py-2 font16-res-300 weverse-background-btn text-white border-radius-4"
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

                )
            })}

            <div id="pop_up_detail" tabIndex="-1" onClose={popUpDetail}  style={{ display:"none" , background:"rgba(75,75,75,0.67)" }} className="fixed z-50 w-full p-0 overflow-x-hidden overflow-y-auto inset-0 h-[calc(100%)] ">
                <div className="absolute lg:w-6/12 md:w-7/12 sm:w-8/12 w-9/12 mx-auto h-full max-w-2xl position-pop-up md:h-auto" >
                    <div className="relative bg-white pb-3 xl:w-8/12 lg:w-9/12 md:w-10/12 w-full top-24 rounded-lg shadow dark:bg-gray-700" style={{ minHeight:"260px" , maxHeight:"290px"}} >
                        <div className="flex items-start justify-end md:pt-5 md:pb-5 pt-3 pb-2 px-4 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-lg my-1 w-full ms-5 font-normal font16-res-400 text-center text-gray-900 dark:text-white">
                                Metode Absent
                            </h3>
                            <button type="button"  onClick={popUpDetail} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path></svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <div className="my-3">
                            <div className="w-10/12 mt-4 text-left mx-auto" >
                                <div className="my-2">
                                    <p className="font15-res-300" style={{ color:"#656565"}}>Pilih metode absensi, yang akan kamu gunakan untuk melakukan absent </p>
                                    <ul className="py-2 font15-res-300 text-left text-gray-700 dark:text-gray-400"
                                        aria-labelledby="dropdownLargeButton">
                                        <li className=" my-3 ">
                                            <a href={`/view/${slug}/detail/absent/${id}/action/password`} className="block px-4 py-2.5 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-purple-600  dark:hover:text-white">Password</a>
                                        </li>
                                        <li className="bg-gray-100 text-gray-400 disabled cursor-no-drop">
                                            <button disabled className="w-full text-left flex cursor-no-drop">
                                                <p className="block ps-4 pe-1 py-3.5 hover:bg-gray-50 dark:hover:bg-gray-600 hover:text-purple-600  dark:hover:text-white">Selfie/Foto</p>
                                                <p className="text-yellow-500 my-auto">(Dalam pemeliharaan)</p>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}