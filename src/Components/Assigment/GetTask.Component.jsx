
import React from "react";
import {TaskAssigmentPGCardComponent} from "./Card/TaskAssigmentPGCard.Component";
import {TaskAssigmentEssayCardComponent} from "./Card/TaskAssigmentEssayCard.Component";
import {TaskAssigmentFileCardComponent} from "./Card/TaskAssigmentFileCard.Component";
export const GetTaskComponent = () => {


    return(
        <>
            <div className=' h-full mx-auto md:pt-16 pb-4  pt-16 px-0' style={{ minWidth:"385px" , background:"#fcfcfc"}}>
                <div className="lg:flex md:block lg:w-10/12 w-11/12 mx-auto lg:justify-between">
                    <div className="xl:w-full lg:w-full md:8/12 w-full block lg:flex lg:justify-between mx-auto">
                        <div className="lg:w-5/12 md:w-7/12 sm:w-9/12 w-full  mx-auto  lg:mx-0 mt-10">
                            <div className="shadow mt-3 lg:w-10/12 bg-white my-6 px-2 w-full pb-1 border-radius-12">
                                <div className="mx-4 text-left  pt-5 pb-0 ">
                                    <h2 className="font18-res-300" style={{ color:"#646464" , fontWeight:"500"}}>Keterangan task</h2>
                                    <p className="my-3 font16-res-300" style={{ color:"#858585"}}>Pastikan anda memiliki sambungkan internet untuk mengambil data dari tugas, dan anda tidak diperbolehkan untuk menghidupkan internet saat mengrjakan jika anda memaksa untuk tetap menaktifkan internet anda akan terlempar keluar</p>
                                    <p className="my-3 font16-res-300" style={{ color:"#858585"}}>Setiap anda terlempar/keluar dari aplikasi kesempatan anda akan berkurang, jika kesempatan sudah habis tugas anda akan otomatis terkirim</p>
                                </div>
                                <div className="flex border-t border-gray-200 mt-4 pt-3 justify-between" style={{  color:"#646464"}}>
                                    <div className="text-left  mb-2 border-radius-4 w-5/12 mx-auto">
                                        <div className=" w-full">
                                            <label className="my-0 py-0"  style={{ fontSize:"14px"}}>Deadline</label>
                                            <p className="my-0 py-0" style={{ fontSize:"14px"}}>10:26:12</p>
                                        </div>
                                    </div>
                                    <div className="text-left  mb-2 border-radius-4 w-5/12 mx-auto">
                                        <div className=" w-full">
                                            <label className="my-0 py-0"  style={{ fontSize:"14px"}}>Time</label>
                                            <p className="my-0 py-0" style={{ fontSize:"14px"}}>10:26:12</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex mx-4  justify-between"  style={{  color:"#646464"}}>
                                    <div className="w-full text-left  mx-auto">
                                        <div className="pt-1  pb-4 mx-auto border-radius-4" style={{ fontSize:"14px" , color:"#494949"}}>
                                            <p>Anda telah keluar dari aplikasi sebanyak</p>
                                            <p className="my-1 font-semibold">3 kali</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="md:w-7/12 sm:w-9/12 w-full mx-auto my-8">
                            <ul>
                                <li>
                                    <TaskAssigmentPGCardComponent />
                                </li>
                                <li>
                                    <TaskAssigmentPGCardComponent />
                                </li>
                                <li>
                                    <TaskAssigmentPGCardComponent />
                                </li>
                                <li>
                                    <TaskAssigmentEssayCardComponent />
                                </li>
                                <li>
                                    <TaskAssigmentFileCardComponent />
                                </li>
                            </ul>
                            <div className="mt-10  border-t ">
                                <div className="flex pt-8 border-t gap-4 ">

                                    <button

                                        className="w-6/12  ms-auto font16-res-300  weverse-background-btn  hover:bg-purple-500 text-white font-bold py-2 px-4 rounded"
                                        style={{ color:"#ffffff" , borderRadius:"4px" , border:"1px solid #A373E9" }}
                                    >
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