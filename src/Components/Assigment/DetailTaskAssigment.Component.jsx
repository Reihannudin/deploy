import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";


export const  DetailTaskAssigmentComponent = (props) => {

    const popUpDetail = () => {
        const popUp = document.getElementById('pop_up_detail');
        if (popUp.style.display === 'none'){
            popUp.style.display = 'block'
        } else if(popUp.style.display === 'block'){
            popUp.style.display = 'none'
        }
    }

    const {id , action , slug} = useParams();

    const classname = slug.replace(/_/g, ' ');

    let changeAction = parseInt(props.out_app);

    console.log("status" , props.status);
    console.log("change" , props.change);
    console.log("status action" ,  props.statusAction)

    return(
        <>
            <div className='h-screen mx-auto md:pt-16 pt-14 px-0' style={{minWidth: "300px"}}>
                <div className="lg:flex md:block relative h-full lg:w-10/12 md:w-11/12 w-full mx-auto lg:justify-between">
                    <div className="lg:w-8/12 w-full">
                        <div className="lg:my-7 my-6">
                            <div className="lg:w-full w-11/12 bg-white  pb-1 mx-auto border-radius-8" >
                                <div className="flex w-11/12 mx-auto gap-2">
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
                            </div>
                            <div className="text-left lg:w-full w-11/12 mx-auto mt-3 mb-6">
                                <div className=" w-11/12  mx-auto pb-3">
                                    <div className="flex justify-between">
                                        <div className="my-1 w-6/12">
                                            <label className="my-0 py-0 font14-res-300"  >Kelas</label>
                                            <p className="my-0 py-0 font16-res-300" >{classname}</p>
                                        </div>
                                        <div className="my-1 w-6/12">
                                            <label className="my-0 py-0 font14-res-300" >Guru</label>
                                            <p className="my-0 py-0  font16-res-300" >{props.teacher}</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <div className="my-1 w-6/12">
                                            <label className="my-0 py-0 font14-res-300" >Point</label>
                                            <p className="my-0 py-0  font16-res-300" >{props.point} pts</p>
                                        </div>
                                        <div className="my-1 w-6/12">
                                            <label className="my-0 py-0 font14-res-300"  >Time</label>
                                            <p className="my-0 py-0  font16-res-300" >{props.start_time} - {props.end_time}</p>
                                        </div>
                                    </div>

                                </div>
                                <hr />
                                <div className=" w-11/12  pt-2 mx-auto pb-3">
                                    <div className="block pt-3 gap-4 ">
                                        <h1 className="font18-res-300" style={{  fontWeight:"450"}}>Ringkasan Pengerjaan Absensi</h1>
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
                                        <label className="my-0 py-0 font14-res-300" >Batas Waktu Absent</label>
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
                                        <p className="my-0 font14-res-300" style={{ color: "#7e7e7e" }}>diperlukan absent</p>
                                    )}
                                </div>
                                <div className="lg:mx-4 lg:w-11/12 md:w-full w-10/12 mx-auto relative">
                                    {props.status === "selesai" || props.change === 0 || props.statusAction === "mengerjakan" ? (
                                        <button
                                            onClick={popUpDetail}
                                            disabled
                                            className="w-full py-2 font16-res-300 bg-gray-300 cursor-no-drop text-white border-radius-4"
                                        >
                                            Tidak Dizinkan Absent
                                        </button>
                                    ) : props.status === "selesai" &&  props.statusAction === null ? (
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
                                            Kerjakan Sekarang
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="pop_up_detail" tabIndex="-1" onClose={popUpDetail}  style={{ display:"none" , background:"rgba(75,75,75,0.67)" }} className="fixed z-50 w-full p-4 overflow-x-hidden overflow-y-auto inset-0 h-[calc(100%)] ">
                <div className="absolute lg:w-6/12 md:w-7/12 sm:w-8/12 w-9/12 mx-auto h-full max-w-2xl position-pop-up md:h-auto" >
                    <div className="relative bg-white lg:w-8/12 md:w-10/12 top-24 rounded-lg shadow dark:bg-gray-700" style={{ height:"280px"}} >
                        <div className="flex items-start  md:pt-5 md:pb-5 pt-3 pb-3 px-4 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-lg my-1 w-full mx-auto font-normal font18-res-300 text-center text-gray-900 dark:text-white">
                                Mengerjakan Tugas Anda?
                            </h3>

                        </div>
                        <div className="lg:my-3 md:my-5 my-3">
                            <div className="w-10/12 my-4 text-left mx-auto" >
                                <div className="my-2  relative">
                                    <p style={{ color:"#656565"}} className="font15-res-300 md:font16-res-300">Apakah anda sudah yakin untuk mengerjakan tugas ini sekarang?, anda hanya bisa mengerjakannya 1 kali saja.</p>
                                    <div className="md:mt-10 mt-16">
                                        <div className="flex pt-4 border-t gap-4 justify-between" style={{ fontWeight:"500"}}>
                                            <button
                                                onClick={popUpDetail}
                                                className=" w-10/12 mx-auto font16-res-300 border-b-purple-600 text-purple-600 py-2 px-4 rounded"
                                                style={{  borderRadius:"4px" , fontSize:"15px" , border:"1px solid #A373E9" }}
                                            >
                                                Kembali
                                            </button>
                                                <Link to={`/view/${slug}/${props.action_id}/detail/pre/assignment/${id}`}
                                                    className="w-10/12 text-center mx-auto font16-res-300 weverse-background-btn  hover:bg-purple-500 text-white py-2 px-4 rounded"
                                                    style={{ color:"#ffffff" , borderRadius:"4px" , fontSize:"15px" , border:"1px solid #A373E9" }}
                                                >
                                                        Lanjutkan
                                                </Link>
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

