
import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {TaskPreAssigmentPGCardComponent} from "./Card/TaskPreAssigmentPGCard.Component";
import {TaskPreAssigmentEssayCardComponent} from "./Card/TaskPreAssigmentEssayCard.Component";
import {TaskPreAssigmentFileCardComponent} from "./Card/TaskPreAssigmentFileCard.Component";



export const PreAssignmentComponent = (props) => {
    const popUpDetail = () => {
        const popUp = document.getElementById('pop_up_detail');
        if (popUp.style.display === 'none'){
            popUp.style.display = 'block'
        } else if(popUp.style.display === 'block'){
            popUp.style.display = 'none'
        }
    }

    const {id } = useParams();

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
            <div className="h-full mx-auto md:pt-16 pt-10 px-0" style={{ minWidth: "300px" }}>
                <div className="lg:flex xl:w-9/12 lg:w-10/12 md:w-10/12 w-11/12 mx-auto">
                    <div className=" w-full mx-auto block lg:flex lg:justify-between">
                        <div className="lg:w-5/12 md:w-full sm:w-11/12  w-full  mx-auto my-8 lg:mx-0 ">
                            <div className="lg:shadow shadow-none border-b  mt-3 lg:w-11/12 bg-white my-6 md:px-2 px-1 w-full pb-1 border-radius-12">
                                <div className="lg:mx-4 mx-0 text-left  border-b pb-2 border-b-gray-200 lg:pt-5 pt-2 mb-3 ">
                                    <h2 className="font16-res-400 md:font18-res-300" style={{ color:"#646464" , fontWeight:"500"}}>Keterangan task</h2>
                                    <p className="my-3 font13-res-300 md:font14-res-300 text-gray-500" >Pastikan anda memiliki sambungkan internet untuk mengambil data dari tugas, dan anda tidak diperbolehkan untuk menghidupkan internet saat mengrjakan jika anda memaksa untuk tetap menaktifkan internet anda akan terlempar keluar</p>
                                    <p className="my-3 font13-res-300 md:font14-res-300 text-gray-500" >Setiap anda terlempar/keluar dari aplikasi kesempatan anda akan berkurang, jika kesempatan sudah habis tugas anda akan otomatis terkirim</p>
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
                                                <p className="my-0 py-0 font14-res-300">{props.end_time} - {props.date}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <div className="w-full text-left  mx-auto">
                                            <div className="pt-1  pb-2 mx-auto border-radius-4 font14-res-300 text-gray-600 " >
                                                <p className="font13-res-300 md:font14-res-300">Point</p>
                                                <p className="my-1  font14-res-300">{props.point} Points</p>
                                            </div>
                                        </div>
                                        <div className="w-full text-left  mx-auto">
                                            <div className="pt-1  pb-2 mx-auto border-radius-4 font14-res-300 text-gray-600 " >
                                                <p className="font13-res-300 md:font14-res-300">Teacher</p>
                                                <p className="my-1  font14-res-300">{props.teacher}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full text-left  mx-auto">
                                        <div className=" pb-1 mx-auto border-radius-4 font14-res-300 text-gray-600">
                                            <p className="font13-res-300 md:font14-res-300">Kesempatan pengerjaan</p>
                                            <p className="my-1 font-semibold font14-res-300">{props.change} kali</p>
                                        </div>
                                    </div>
                                    <div className="w-full text-left  mx-auto">
                                        <div className=" pb-4 mx-auto border-radius-4 font14-res-300 text-gray-600">
                                            <p className="font13-res-300 md:font14-res-300">Kesempatan telah keluar saat pengerjaan</p>
                                            <p className="my-1 font-semibold font14-res-300">{changeAction} kali</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="xl:w-8/12 relative lg:w-7/12 md:w-full sm:w-11/12 w-full  lg:ms-2 me-auto ms-auto  my-8">
                            <ul className="">
                                {props.question.map((item) => {
                                    return(
                                        <li key={item.id} className="mb-6 relative">
                                            {item.type === "PG" ? (
                                                <TaskPreAssigmentPGCardComponent question={item.question} answer_a={item.answer_a} answer_b={item.answer_b} answer_c={item.answer_c} answer_d={item.answer_d} required={item.required} />
                                            ): (item.type === "Essay") ? (
                                                    <TaskPreAssigmentEssayCardComponent question={item.question} required={item.required} />
                                            ): (
                                                    <TaskPreAssigmentFileCardComponent />
                                            )}
                                            <div className="absolute bottom-0 z-40 w-full h-full">
                                                <div className="bg-gradient-to-t relative from-gray-100 to-transparent  via-gray-50 w-full h-full">
                                                    <div className="mx-auto absolute top-40 left-10 right-10 my-auto" style={{ height:"40px"}}>
                                                        <img className="h-full mx-auto my-auto" src="/assets/lock-icon.svg"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    )
                                })}

                            </ul>
                            <div className="mt-6 bg-white z-50 fixed bottom-0 xl:w-6/12 lg:w-6/12 md:w-10/12 sm:w-10/12 w-11/12 ">
                                <div className="flex xl:w-11/12 lg:me-8 w-full pt-2 border-t gap-4 ">
                                    <button
                                        onClick={popUpDetail}
                                        className="w-6/12 sm:w-5/12 md:w-4/12 lg:w-5/12 xl:w-5/12 mb-3 mt-2 ms-auto font16-res-300  weverse-background-btn  hover:bg-purple-500 text-white py-2 px-4 rounded"
                                        style={{ color:"#ffffff" , borderRadius:"4px" , border:"1px solid #A373E9" , fontWeight:"500" }}
                                    >
                                        Mulai mengerjakan
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div id="pop_up_detail" tabIndex="-1" onClose={popUpDetail}  style={{ display:"none" , background:"rgba(75,75,75,0.67)" }} className="fixed pb-4 z-50 w-full px-4  overflow-x-hidden overflow-y-auto inset-0 h-[calc(100%)] ">
                <div className="absolute lg:w-6/12 md:w-7/12 sm:w-8/12 w-9/12 mx-auto h-full max-w-2xl position-pop-up md:h-auto" >
                    <div className="relative pb-2 bg-white xl:w-8/12 lg:w-9/12 md:w-10/12 top-24 rounded-lg shadow dark:bg-gray-700" style={{ maxHeight:"360px"}} >
                        <div className="flex items-start  md:pt-5 md:pb-5 pt-3 pb-3 px-4 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-lg my-1 w-full mx-auto font-normal font18-res-300 text-center text-gray-900 dark:text-white">
                                Mengerjakan Tugas Anda?
                            </h3>

                        </div>
                        <div className="lg:my-3 md:my-5 my-3">
                            <div className="w-10/12 my-4 text-left mx-auto" >
                                <div className="my-2  relative">
                                    <p className="font15-res-300 md:font16-res-300 text-gray-600">Pastikan anda menonaktifkan koneksi internet anda, jikalau anda menaktifkan intenet anda saat pengerjaan tugas anda akan terlempar kehalaman utama dan kesempatakan anda untuk mengerjakan akan berkurang.</p>
                                    <div className="md:mt-6 mb-4  mt-6">
                                        <div className="flex pt-4 border-t gap-4 justify-between" style={{ fontWeight:"500"}}>
                                            <button
                                                onClick={popUpDetail}
                                                className=" w-10/12 mx-auto font16-res-300 border-b-purple-600 text-purple-600 py-2 px-4 rounded"
                                                style={{  borderRadius:"4px" , fontSize:"15px" , border:"1px solid #A373E9" }}
                                            >
                                                Kembali
                                            </button>
                                            {!props.isOnline ? (
                                                <Link to={`/view/${props.slug}/${props.action}/work/assignment/${id}`}
                                                      className="w-10/12 text-center mx-auto font16-res-300 weverse-background-btn  hover:bg-purple-500 text-white py-2 px-4 rounded"
                                                      style={{ color:"#ffffff" , borderRadius:"4px" , fontSize:"15px" , border:"1px solid #A373E9" }}
                                                >
                                                    Lanjutkan
                                                </Link>
                                            ) : (
                                                <button disabled
                                                      className="w-10/12 text-center mx-auto text-gray-400 cursor-no-drop font16-res-300 bg-gray-100  hover:bg-grey-200 py-2 px-4 rounded"
                                                      style={{ borderRadius:"4px"  }}
                                                >
                                                    Lanjutkan
                                                </button>
                                            )}

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
