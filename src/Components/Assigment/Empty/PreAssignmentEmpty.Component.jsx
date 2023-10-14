
import React, {useEffect, useState} from "react";
import {Link, useLocation, useNavigate, useParams} from "react-router-dom";
import {TaskPreAssigmentPGCardComponent} from "../Card/TaskPreAssigmentPGCard.Component";
import {TaskPreAssigmentEssayCardComponent} from "../Card/TaskPreAssigmentEssayCard.Component";
import {TaskPreAssigmentFileCardComponent} from "../Card/TaskPreAssigmentFileCard.Component";
import api from "../../../Config/api";



export const PreAssignmentEmptyComponent = (props) => {

    const { id , class_id , slug } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    let token = localStorage.getItem('auth_token');


    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    let changeAction = parseInt(props.out_app);

    return(
        <>
            <div className="h-full mx-auto md:pt-16 pt-10 px-0" style={{ minWidth: "300px"  , maxWidth:"1500px"}}>
                <div className="lg:flex xl:w-10/12  md:w-10/12 lg:w-11/12 w-11/12 mx-auto">
                    <div className=" w-full mx-auto block lg:flex lg:justify-between">
                        <div className="lg:w-5/12 md:w-full sm:w-11/12  w-full  mx-auto my-8 lg:mx-0 ">
                            <div className="shadow-none border-b  mt-3 bg-white my-6 md:px-2 px-1 w-full pb-1 border-radius-12">
                                <div className="lg:mx-4 mx-0 text-left  border-b pb-2 border-b-gray-200 lg:pt-0 pt-2 mb-3 ">
                                    <h2 className="font16-res-400 md:font18-res-300" style={{ color:"#646464" , fontWeight:"550"}}>Keterangan task</h2>
                                    <p className="mt-1 md:mt-3 mb-3 font14-res-300 text-gray-500" >Pastikan anda memiliki sambungkan internet untuk mengambil data dari tugas, dan anda tidak diperbolehkan untuk menghidupkan internet saat mengrjakan jika anda memaksa untuk tetap menaktifkan internet anda akan terlempar keluar</p>
                                    <p className="my-3 font14-res-300 text-gray-500" >Setiap anda terlempar/keluar dari aplikasi kesempatan anda akan berkurang, jika kesempatan sudah habis tugas anda akan otomatis terkirim</p>
                                </div>

                                <div className="block lg:mx-4 mx-0"  style={{  color:"#646464"}}>
                                    <div className="flex lg:block justify-between">
                                        <div className="text-left  mb-2 border-radius-4 lg:w-full  w-5/12 ">
                                            <div className=" w-full">
                                                <label className="my-0 py-0 font13-res-300 md:font14-res-300" >Time</label>
                                                <p className="my-0 py-0 font14-res-300">
                                                    {hours + ":" + minutes + ":" + seconds}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="text-left  mb-2 border-radius-4 lg:w-full w-5/12 mx-auto">
                                            <div className=" w-full">
                                                <label className="my-0 py-0 font13-res-300 md:font14-res-300" >Deadline</label>
                                                <p className="my-0  font16-res-300 py-1.5 animate-pulse w-32 bg-gray-100" ></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <div className="w-full text-left  mx-auto">
                                            <div className="pt-1  pb-2 mx-auto border-radius-4 font14-res-300 text-gray-600 " >
                                                <p className="font13-res-300 md:font14-res-300">Point</p>
                                                <p className="my-1  font16-res-300 py-1.5 animate-pulse w-32 bg-gray-100" ></p>
                                            </div>
                                        </div>
                                        <div className="w-full text-left  mx-auto">
                                            <div className="pt-1  pb-2 mx-auto border-radius-4 font14-res-300 text-gray-600 " >
                                                <p className="font13-res-300 md:font14-res-300">Teacher</p>
                                                <p className="my-0  font16-res-300 py-1.5 animate-pulse w-32 bg-gray-100" ></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full text-left  mx-auto">
                                        <div className=" pb-1 mx-auto border-radius-4 font14-res-300 text-gray-600">
                                            <p className="font13-res-300 md:font14-res-300">Kesempatan pengerjaan</p>
                                            <p className="my-0  font16-res-300 py-1.5 animate-pulse w-32 bg-gray-100" ></p>
                                        </div>
                                    </div>
                                    <div className="w-full text-left  mx-auto">
                                        <div className=" pb-4 mx-auto border-radius-4 font14-res-300 text-gray-600">
                                            <p className="font13-res-300 md:font14-res-300">Kesempatan telah keluar saat pengerjaan</p>
                                            <p className="my-0  font16-res-300 py-1.5 animate-pulse w-32 bg-gray-100" ></p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="xl:w-8/12 relative lg:w-7/12 md:w-full sm:w-11/12 w-full  lg:ms-2 me-auto ms-auto  my-8">
                            <ul className="">
                                <li className="mb-6 relative">
                                    <div className="shadow  lg:my-2  sm:my-3 my-6 pt-4 bg-white unselectable pb-2 px-3" style={{ borderRadius: "4px" , maxHeight:"265px" }}>
                                        <div className="mx-2 ">
                                            <div className="flex w-full  pb-2 justify-between">
                                                <div className="flex w-6/12 gap-1">
                                                    <div className="mt-0" style={{ height: "20px" }}>
                                                        <img className="h-full" src="/assets/pg-icon.svg" />
                                                    </div>
                                                    <p className="my-0  font16-res-300 py-1.5 animate-pulse w-32 bg-gray-100" ></p>
                                                </div>
                                                <div className="flex  w-5/12 gap-3">
                                                    <div className="ms-auto w-6/12 text-gray-500">
                                                        <div className="w-full font14-res-300 md:font15-res-300 0">
                                                            <input className="border font14-res-300 md:font15-res-300   border-gray-200 text-center w-full cursor-no-drop" style={{ borderRadius: "2px", fontWeight: "500" }} placeholder="minute" type="text"  disabled />
                                                        </div>
                                                    </div>
                                                    <div className="ms-auto w-3/12 text-gray-500">
                                                        <div className="w-full font14-res-300 md:font15-res-300 ">
                                                            <input className="border font14-res-300 md:font15-res-300  border-gray-200 text-center w-full cursor-no-drop" style={{ borderRadius: "2px", fontWeight: "500" }} placeholder="pts" type="number" disabled />
                                                        </div>
                                                    </div>
                                                    {props.required === 1 ? (
                                                        <div className="w-1/12 ms-auto">
                                                            <div className="text-red-600">
                                                                <p className="justify-center" style={{ fontSize: "16px" }}>*</p>
                                                            </div>
                                                        </div>
                                                    ) : (
                                                        <div className="w-1/12 ms-auto"></div>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="pt-2 flex text-gray-700">
                                                <div className="w-full text-gray-600">
                                                    <div className="text-left font15-res-300 md:font16-res-300 text-gray-600" style={{ overflowWrap: "break-word" }}>
                                                        <p className="my-0  font16-res-300 py-1.5 animate-pulse w-32 bg-gray-100" ></p>

                                                        <div className="font15-res-300 md:font16-res-300text-gray-600">{/*{question}*/}</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <ul className="text-gray-500">
                                                <li className="my-2">
                                                    <label className="big-radio">
                                                        <div className="flex gap-1">
                                                            <input className="my-auto font14-res-300 cursor-pointer" type="radio" disabled />
                                                            <input type="text" disabled placeholder="Jawaban A" className="w-full bg-white font15-res-300 md:font16-res-300 py-2 text-gray-500" />
                                                        </div>
                                                        <p className="my-0  font16-res-300 py-1.5 animate-pulse w-32 bg-gray-100" ></p>
                                                    </label>
                                                </li>
                                                <li className="my-2">
                                                    <label className="big-radio">
                                                        <div className="flex gap-1">
                                                            <input className="my-auto font14-res-300 cursor-pointer" type="radio" disabled />
                                                            <input type="text" placeholder="Jawaban B" disabled className="w-full font15-res-300 md:font16-res-300 bg-white py-2 text-gray-500" />
                                                        </div>
                                                        <p className="my-0  font16-res-300 py-1.5 animate-pulse w-32 bg-gray-100" ></p>
                                                    </label>
                                                </li>
                                                <li className="my-2">
                                                    <label className="big-radio">
                                                        <div className="flex gap-1">
                                                            <input className="my-auto font14-res-300 bg-white cursor-pointer" disabled type="radio" />
                                                            <input type="text" placeholder="Jawaban C" disabled className="w-full font15-res-300 md:font16-res-300 bg-white py-2 text-gray-500" />
                                                        </div>
                                                        <p className="my-0  font16-res-300 py-1.5 animate-pulse w-32 bg-gray-100" ></p>
                                                    </label>
                                                </li>

                                            </ul>
                                            <div>
                                                <div className="my-1"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute bottom-0 z-40 w-full h-full">
                                        <div className="bg-gradient-to-t relative from-gray-100 to-transparent  via-gray-50 w-full h-full">
                                            <div className="mx-auto absolute top-40 left-10 right-10 my-auto" style={{ height:"40px"}}>
                                                <img className="h-full mx-auto my-auto" src="/assets/lock-icon.svg"/>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex items-center justify-center mt-10  mb-20 md:mt-28 md:mb-32 ">
                                        <div
                                            className="animate-spin rounded-full border-r-gray-50 border-l-gray-50  border-b-gray-50  w-7 h-7 md:h-10 md:w-10 border-t-4 border-purple-700"></div>
                                    </div>
                                </li>
                            </ul>
                            <div className="mt-6 bg-white z-50 fixed bottom-0 xl:w-6/12 lg:w-6/12 md:w-10/12 sm:w-10/12 w-11/12 ">
                                <div className="flex xl:w-11/12 w-full pt-2 border-t gap-4 ">
                                    <button
                                        disabled
                                        className="w-6/12 sm:w-5/12 md:w-4/12 lg:w-5/12 xl:w-5/12 mb-3 mt-2 ms-auto font14-res-300  bg-gray-200 text-gray-500  py-2 px-4 rounded"
Z                                    >
                                        Mulai mengerjakan
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
