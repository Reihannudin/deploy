import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {AssignmentNavComponent} from "../Body/MainNav/AssignmentNav.Component";


export const  DetailMyAssignmentComponent = (props) => {

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

    const { id, slug } = useParams();

    const classname = slug.replace(/_/g, ' ')


    return(
        <>
            <div className=' h-full mx-auto md:pt-16  pt-14 px-0' style={{ minWidth:"333px"}} key={props.id} >
                <div className="block w-full md:hidden">
                    <AssignmentNavComponent />
                </div>
                <div className="lg:flex md:block lg:w-10/12 md:w-11/12 w-full mx-auto ">
                    <div className="lg:w-10/12 w-full">
                        <div className="my-7">
                            <div className="lg:w-full flex justify-between md:w-11/12 w-full bg-white  pb-1 mx-auto border-radius-8" >
                                <div className="flex w-9/12 mx-auto gap-2">
                                    <div className="p-2 border-radius-4 ms-1.5 me-2" style={{ background:"#A568E6" , height:"45px" }} >
                                        <div className="my-auto" style={{ height:"30px"}}>
                                            <img className="h-full" src="/assets/assigment-sm-icon.svg" />
                                        </div>
                                    </div>
                                    <div className="text-left my-auto">
                                        <p className="font14-res-300" style={{ color:"#5d5c5c"}}>Assignment</p>
                                        <h1 className="font18-res-300">{props.name}</h1>
                                    </div>
                                </div>
                                <div className="w-2/12  me-auto">
                                    <div className="mt-2 ms-auto" style={{ width:"40px" , height:"40px"}}>
                                        <Link to={`/class/${slug}/${props.class_id}/edit/assignment/${id}`} className="my-auto">
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
                                    <div className="flex mx-1 md:mx-0 justify-between">
                                        <div className="my-1 w-6/12">
                                            <label className="my-0 py-0 font14-res-300"  >Kelas</label>
                                            <p className="my-0 py-0 font16-res-300" >{classname}</p>
                                        </div>
                                        <div className="my-1 w-6/12">
                                            <label className="my-0 py-0 font14-res-300" >Tanggal dibuat</label>
                                            <p className="my-0 py-0  font16-res-300" >{props.post_time}</p>
                                        </div>
                                    </div>
                                    <div className="flex mx-1 md:mx-0 justify-between">
                                        <div className="my-1 w-6/12">
                                            <label className="my-0 py-0 font14-res-300" >Point</label>
                                            <p className="my-0 py-0  font16-res-300" >{props.point} pts</p>
                                        </div>
                                        <div className="my-1 w-6/12">
                                            <label className="my-0 py-0 font14-res-300"  >Time</label>
                                            <p className="my-0 py-0  font16-res-300" >{hours + ':' + minutes + ':' + seconds}</p>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className=" w-11/12   pt-2 mx-auto pb-3">
                                    <div className="block mx-1 lg:mx-0 pt-3 gap-4 ">
                                        <h1 className="font18-res-300-res-300" style={{  fontWeight:"450"}}>Ringkasan Pengerjaan Tugas</h1>
                                        <div className="flex my-2">
                                            <label className="my-0 py-0 font14-res-300"  style={{ color:"#6e6e6e"}}>Status : </label>
                                            <p className="my-0 py-0 font14-res-300" >{props.status}</p>

                                        </div>
                                    </div>
                                    <div className="flex mx-1 lg:mx-0 my-2">
                                        <label className="my-0 py-0 font14-res-300" style={{ color:"#6e6e6e"}}>Kesempatan keluar dari aplikasi : </label>
                                        <p className="my-0  font14-res-300 mx-2 " >{props.out_app}</p>
                                    </div>
                                    <div className="flex mx-1 lg:mx-0 my-2">
                                        <label className="my-0 py-0 font14-res-300" style={{ color:"#6e6e6e"}}>Diizinkan melakukan pengerjaan : </label>
                                        <p className="my-0  font14-res-300 mx-2 " >{props.change}</p>
                                    </div>

                                    <div className="my-2 mx-1 lg:mx-0">
                                        <label className="my-0 py-0 font14-res-300" style={{ color:"#6e6e6e"}}>Batas waktu pengerjaan</label>
                                        <p className="my-0  font16-res-300 py-0 " >{props.start_time} - {props.end_time} / {props.date}</p>

                                    </div>
                                </div>
                                <hr />
                                <div className="mx-1 lg:mx-0">
                                    <div className="block pt-3 gap-4 mx-auto w-11/12  ">
                                        <h1 className="font18-res-300" style={{fontWeight:"450"}}>Terms of reference</h1>
                                        <p className="my-2 font14-res-300" style={{ color:"#3e3e3e"}}>
                                            Setiap anggota wajib menyelesaikan tugas sebelum batas waktu yang ditentukan, setiap anggota diharapkan tidak menyalin jawaban dari internet, jika setiap keluar dari aplikasi maka waktu mengerjakan tugas akan berkurang 2 menit secara otomatis.
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