
import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {MainNavComponent} from "../Body/MainNav/MainNav.Component";
import {AbsentNavComponent} from "../Body/MainNav/AbsentNav.Component";

export const  DetailMyAbsentComponent = (props) => {

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

    const { id , class_id , slug } = useParams();

    const classname = slug.replace(/_/g, ' ')

    return(
        <>
            <div className=' h-full mx-auto md:pt-16  pt-14 px-0' style={{ minWidth:"333px"}} key={props.id} >
                <div className="block w-full md:hidden">
                    <AbsentNavComponent />
                </div>
                        <div className="lg:flex md:block lg:w-10/12 md:w-11/12 w-full mx-auto ">
                            <div className="lg:w-10/12 w-full">
                                <div className="my-7">
                                    <div className="lg:w-full flex justify-between md:w-11/12 w-full bg-white  pb-1 mx-auto border-radius-8" >
                                        <div className="flex w-9/12 mx-auto gap-2">
                                            <div className="p-2 border-radius-4 ms-1.5 me-2" style={{ background:"#A568E6" , height:"45px" }} >
                                                <div className="my-auto" style={{ height:"30px"}}>
                                                    <img className="h-full" src="/assets/absent-sm-icon.svg" />
                                                </div>
                                            </div>
                                            <div className="text-left my-auto">
                                                <p className="font14-res-300" style={{ color:"#5d5c5c"}}>Absent</p>
                                                <h1 className="font18-res-300">
                                                    {window.innerWidth >= 992 ? (
                                                        props.name
                                                    ) : (
                                                        props.name.length > 20 ? props.name.slice(0, 17) + '...' : props.name
                                                    )}
                                                </h1>
                                            </div>
                                        </div>
                                        <div className="w-2/12  me-auto">
                                            <div className="mt-2 ms-auto" style={{ width:"40px" , height:"40px"}}>
                                                <Link to={`/class/${slug}/${class_id}/edit/absent/${id}`} className="my-auto">
                                                    <div  className="px-1 py-2 bg-white hover:px-1 hover:bg-gray-100 radius-100 ">
                                                        <div className="my-auto mx-1 " style={{ height:"20px"}}>
                                                            <img className="h-full w-full" src="/assets/edit-icon.svg"/>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-left lg:w-full md:w-11/12 w-full mx-auto mt-3 mb-6">
                                        <div className=" w-11/12  mx-auto pb-3">
                                            <div className="flex mx-1 lg:mx-0 justify-between">
                                                <div className="my-1 w-6/12">
                                                    <label className="my-0 py-0 font14-res-300"  >Kelas</label>
                                                    <p className="my-0 py-0 font16-res-300" >
                                                        {window.innerWidth >= 682 ? (
                                                            classname
                                                        ) : (
                                                            classname.length > 20 ? classname.slice(0, 17) + '...' : classname
                                                        )}
                                                    </p>
                                                </div>
                                                <div className="my-1  mx-1 lg:mx-0  w-6/12">
                                                    <label className="my-0 py-0 font14-res-300"  >Guru</label>
                                                    <p className="my-0 py-0  font16-res-300" >
                                                        {window.innerWidth >= 682 ? (
                                                            props.teacher
                                                        ) : (
                                                            props.teacher.length > 20 ? props.teacher.slice(0, 17) + '...' : props.teacher
                                                        )}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex justify-between">
                                                <div className="my-1 mx-1 lg:mx-0 w-6/12">
                                                    <label className="my-0 py-0 font14-res-300" >Tanggal dibuat</label>
                                                    <p className="my-0 py-0  font16-res-300" >{props.post_time}</p>
                                                </div>
                                                <div className="my-1 mx-1  w-6/12">
                                                    <label className="my-0 py-0 font14-res-300"  >Time</label>
                                                    <p className="my-0 py-0  font16-res-300" >{hours + ':' + minutes + ':' + seconds}</p>
                                                </div>
                                            </div>

                                        </div>
                                        <hr />
                                        <div className=" w-11/12   pt-2 mx-auto pb-3">
                                            <div className="block  mx-1 lg:mx-0 pt-3 gap-4 ">
                                                <h1 className="font18-res-300-res-300" style={{  fontWeight:"450"}}>Ringkasan Pengerjaan Absensi</h1>
                                                <div className="flex my-2">
                                                    <label className="my-0 py-0 font14-res-300"  style={{ color:"#6e6e6e"}}>Status : </label>
                                                    <p className="my-0 py-0 font14-res-300" >{props.status}</p>
                                                </div>
                                            </div>
                                            <div className="flex mx-1 lg:mx-0  my-2">
                                                <label className="my-0 py-0 font14-res-300" style={{ color:"#6e6e6e"}}>Diizinkan melakukan absent : </label>
                                                <p className="my-0 py-0 font14-res-300" >{props.change}</p>
                                            </div>

                                            <div className="my-2 mx-1 lg:mx-0 ">
                                                <label className="my-0 py-0 font14-res-300" style={{ color:"#6e6e6e"}}>Batas Waktu Absent</label>
                                                <p className="my-0 py-0 font14-res-300">{props.start_time} - {props.end_time} / {props.date}</p>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="mx-1 lg:mx-0">
                                            <div className="block pt-3 gap-4 mx-auto w-11/12  ">
                                                <h1 className="font18-res-300" style={{fontWeight:"450"}}>Terms of reference</h1>
                                                <p className="my-2 font14-res-300" style={{ color:"#3e3e3e"}}>Setiap member wajib absen sebelum batas waktu yang ditentukan, Setiap member dipersilakan memilih menggunakan metode absen yang telah disediakan, Absensi ini akan tersimpan secara otomatis, jika berhasil absen
                                                </p>
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