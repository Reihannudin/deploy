import React, {useEffect, useState} from "react";
import {useNavigate, useParams, useSearchParams} from "react-router-dom";

export const DetailClassmateAssignmentCardComponent = (props) => {

    const {id, class_id , slug} = useParams();

    const [confirmation , setConfirmation] = useState('terkonfirmasi');
    const [action, setAction] = useState("hadir");
    const [reason, setReason] = useState("");


    const [searchParams] = useSearchParams();
    const [errorAction, setErrorAction] = useState("");
    const [errorReason, setErrorReason] = useState("");

    useEffect(() => {
        const errorActionParam = searchParams.get("error_action");
        setErrorAction(errorActionParam || "");

        const errorReasonParam = searchParams.get("error_reason");
        setErrorReason(errorReasonParam || "");
    }, [searchParams]);

    const onChangeAction = (event) => {
        const action = event.target.value;
        setAction(action);
    };

    const onChangeReason = (event) => {
        const reason = event.target.value;
        setReason(reason);
    };

    const [redirectUrl , setRedirectUrl] = useState('');

    const navigate = useNavigate();

    const popUpDenied = () => {
        const popUp = document.getElementById('pop_up_detail');
        if (popUp.style.display === 'none'){
            popUp.style.display = 'block'
        } else if(popUp.style.display === 'block'){
            popUp.style.display = 'none'
        }
    }

    const [dropdownDetail , setDropdownDetail] = useState(true);

    const toggleDropdownDetail = () => {
        setDropdownDetail((prevHidden) => ! prevHidden);
    }

    const handlerDropdownDetail = () => {
        setDropdownDetail(true)
    }


    const [dropAction , setDropAction] = useState(false);

    const toggleDropAction = () => {
        setDropAction(!dropAction);
    }

    const handleDropdownItemClick = () => {
        setDropAction(false);
    };


    const [dropActionConfirm , setDropActionConfirm] = useState(false);

    const toggleDropActionConfirm = () => {
        setDropActionConfirm(!dropActionConfirm);
    }

    const handleDropdownConfirmItemClick = () => {
        setDropActionConfirm(false);
    };


    console.log(props.status === null);

    return(
        <>
            {dropAction && (
                <div id="drop-action" className="fixed inset-0  z-50 flex items-center justify-center">
                    {/* This div serves as a backdrop and should cover the entire screen */}
                    <div onClick={handleDropdownItemClick} className="bg-gray-600 bg-opacity-40 z-50 fixed inset-0"></div>
                    {/* Centered dropdown content */}
                    <div className="bg-white w-10/12 md:w-7/12 lg:w-5/12 xl:w-4/12 pt-4 pb-2 border-radius-8 fixed  z-50 left-1/2 transform -translate-x-1/2">
                        <div className="w-10/12 mx-auto">
                            <div>
                                <div className="flex justify-between">
                                    <div className="pt-1 pb-1  ">
                                        {props.assignment_name.length > 20 ? (
                                            <p className="font16-res-400">{props.assignment_name.slice(0, 15) + '...'}</p>
                                        ) : (
                                            <p className="font16-res-400">{props.assignment_name}</p>
                                        )}
                                    </div>
                                    {props.status === "hadir" ? (
                                        <div className="font13-res-300 mt-0.5 ">

                                            <p className="text-green-400 border-radius-4 pt-1 pb-1 mb-0  px-2 bg-green-200">{props.status}</p>
                                        </div>
                                    ): props.status === "melewatkan" ? (
                                        <div className="font13-res-300 mt-0.5 ">
                                            <p className="text-red-400 border-radius-4 pt-1 pb-1 mb-0  px-2 bg-red-200">{props.status}</p>
                                        </div>
                                    ) : (
                                        <div className="font13-res-300 mt-0.5 ">
                                            <p className="text-yellow-400 border-radius-4 pt-1 pb-1 mb-0  px-2 bg-yellow-200">{props.status}</p>
                                        </div>
                                    )}

                                </div>
                                <div className="my-3 border-t pt-3">
                                    <div className="block">
                                        <div className={"flex mt-1 gap-2 font15-res-300"}>
                                            <p className="text-gray-700" style={{fontWeight:"500"}} >username : </p>
                                            <p className="text-gray-500">
                                                {props.name.length > 15 ? (
                                                    props.name.slice(0, 15) + '...'
                                                ) : (
                                                    props.name
                                                )}
                                            </p>
                                        </div>
                                        <div className={"flex mb-1 gap-2 font15-res-300"}>
                                            <p  className="text-gray-700" style={{fontWeight:"500"}}>status : </p>
                                            {props.status === "hadir" ? (
                                                <p className=" text-green-400" style={{ fontWeight: "550" }}>{props.status}</p>

                                            ) : props.status === "izin" ? (
                                                <p className="text-yellow-400" style={{ fontWeight: "550"}}>{props.status}</p>
                                            ) : props.status === "melewatkan" ? (
                                                <p className=" text-red-400" style={{ fontWeight: "550" }}>{props.status}</p>
                                            ) :(
                                                <p className="" style={{ fontWeight: "550", color: "#605f5f" }}>{props.status}</p>
                                            )}
                                        </div>
                                        <div className={"flex mb-1 gap-2 font15-res-300"}>
                                            <p  className="text-gray-700" style={{fontWeight:"500"}}>Terkonfirmasi : </p>
                                            {props.assignment_confirmation === "terkonfirmasi" ? (
                                                <p className=" text-green-400" style={{ fontWeight: "550" }}>{props.assignment_confirmation}</p>

                                            )  : props.assignment_confirmation === "belum terkonfirmasi" ? (
                                                <p className="" style={{ fontWeight: "550", color: "#605f5f" }}>{props.assignment_confirmation}</p>
                                            ) :(
                                                <p className="" style={{ fontWeight: "550", color: "#605f5f" }}>{props.assignment_confirmation}</p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex my-1 text-left justify-between">
                                        <div className={"block md:flex gap-2 font15-res-300"}>
                                            <p  className="text-gray-700" style={{fontWeight:"500"}}>Score : </p>
                                            <p className="text-gray-500">{props.score === null ? '-' : props.score}</p>
                                        </div>
                                        <div>
                                            <div  className={"flex gap-2 font15-res-300"}>
                                                <p   className="text-gray-700" style={{fontWeight:"500"}}>Correct : </p>
                                                <p className="text-gray-500">{props.correct === null ? '-' : props.correct}</p>
                                            </div>
                                            <div  className={"flex gap-2 font15-res-300"}>
                                                <p   className="text-gray-700" style={{fontWeight:"500"}}>Wrong : </p>
                                                <p className="text-gray-500">{props.wrong === null ? '-' : props.wrong}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="block my-1 text-left justify-between">
                                        <div className={"block md:flex gap-2 font15-res-300"}>
                                            <p  className="text-gray-700" style={{fontWeight:"500"}}>Lama pengerjaan: </p>
                                            <p className="text-gray-500">{props.intime === null ? '-' : props.intime}</p>
                                        </div>
                                    </div>

                                </div>
                                <div className="my-3 block md:flex justify-between border-t pt-3">
                                    <div className="flex font14-res-300">
                                        <p  className="text-gray-700" style={{fontWeight:"500"}}>Date Time: </p>
                                        <p  className="text-gray-500">{props.assignment_time === null ? '-' : props._time}</p>
                                    </div>
                                    <div className="flex font14-res-300">
                                        <p  className="text-gray-700" style={{fontWeight:"500"}}>Deadline : </p>
                                        <p  className="text-gray-500">{props.assignment_deadline}</p>
                                    </div>
                                </div>
                                <div className="me-auto my-3 justify-start text-left">
                                    <button onClick={handleDropdownItemClick} className="bg-white border hover:bg-purple-600 hover:text-white border-purple-700 border-radius-4 text-purple-600 px-3 py-1 cursor-pointer font15-res-300">
                                        Kembali
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {dropActionConfirm && (
                <div id="drop-action" className="fixed inset-0 flex items-center justify-center">
                    {/* This div serves as a backdrop and should cover the entire screen */}
                    <div onClick={handleDropdownConfirmItemClick} className="bg-gray-300 bg-opacity-30 fixed inset-0"></div>
                    {/* Centered dropdown content */}
                    <div className="bg-white w-10/12 md:w-6/12 xl:w-4/12  pt-4 pb-2 border-radius-8 fixed  z-50 left-1/2 transform -translate-x-1/2">
                        <div className="w-10/12 mx-auto">
                            <div>
                                <div className="flex ">
                                    <div className="pt-1 pb-1  ">
                                        <p className="font16-res-400">Konfirmasi absensi</p>
                                    </div>
                                </div>
                                <div className="my-3 border-t pt-3">
                                    <div className="block">
                                        <div className={"flex text-left mt-1 gap-2 font15-res-300"}>
                                            {props.action === null && props.reason === null ? (
                                                <p className="text-gray-700">
                                                    Konfirmasi kiriman absent {props.name} dengan status action melewatkan dan tanpa alasan
                                                </p>
                                            ) : (
                                                <p className="text-gray-700">
                                                    Konfirmasi kiriman absent {props.name} dengan status action {props.action} dan alasan {props.reason}
                                                </p>
                                            )}
                                        </div>

                                    </div>
                                    <div className="my-3 block md:flex justify-between  pt-3">
                                        <div className="flex font14-res-300">
                                            <p  className="text-gray-700" style={{fontWeight:"500"}}>Date Time: </p>
                                            <p  className="text-gray-500">{props.absent_time === null ? '-' : props.absent_time}</p>
                                        </div>
                                        <div className="flex font14-res-300">
                                            <p  className="text-gray-700" style={{fontWeight:"500"}}>Deadline : </p>
                                            <p  className="text-gray-500">{props.absent_deadline} - {props.absent_date}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="my-3 block w-full md:flex border-t pt-3">
                                    <div className=" w-full justify-between gap-3 my-2 flex ">
                                        <button onClick={handleDropdownConfirmItemClick} className="bg-white border hover:bg-purple-600 hover:text-white border-purple-700 border-radius-4 text-purple-600 px-3 py-1 cursor-pointer font15-res-300">
                                            Kembali
                                        </button>
                                        <button className="bg-purple-600 hover:bg-purple-700 border border-purple-700 text-white border-radius-4 cursor-pointer px-3 py-1 font15-res-300">
                                            Konfirmasi
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className="bg-white w-full py-1 my-1 border-radius-8 shadow">
                <div className="w-full flex py-2 justify-between ">
                    <div className="mx-3" style={{ height: "45px" }}>
                        <img className="h-full radius-100" src={`${props.image ? props.image : "/assets/default-profile.svg"}`} alt="Profile" />
                    </div>
                    <div className="block w-11/12">
                        <div className="flex me-2 md:me-5 justify-between">
                            <div className="block">
                                <div className="w-6/12 mx-1 mt-0 md:mt-0.5 text-left">
                                    <h3 className="font16-res-300" style={{color:"#646464"}}>
                                        {props.student.length >20 ? (
                                            props.student.slice(0, 20) + '...'
                                        ) : (
                                            props.student
                                        )}
                                    </h3>
                                </div>
                                <div className="w-full  block mt-1 gap-2  mx-1 text-left">
                                    <div className=" flex gap-2  text-left">
                                        <p className="font13-res-300" style={{ color: "#605f5f" }}>Status : </p>
                                        {props.status === null ? (
                                            <p className="font13-res-300" style={{ fontWeight: "550", color: "#605f5f" }}>Belum Absent</p>
                                        ) : (
                                            <>
                                                {props.status === "hadir" ? (
                                                    <p className="font13-res-300 text-green-400" style={{ fontWeight: "550" }}>{props.status}</p>

                                                ) : props.status === "izin" ? (
                                                    <p className="font13-res-300 text-yellow-400" style={{ fontWeight: "550"}}>{props.status}</p>
                                                ) : props.status === "melewatkan" ? (
                                                    <p className="font13-res-300 text-red-400" style={{ fontWeight: "550" }}>{props.status}</p>
                                                ) :(
                                                    <p className="font13-res-300" style={{ fontWeight: "550", color: "#605f5f" }}>{props.status}</p>
                                                )}
                                            </>
                                        )}
                                    </div>



                                </div>

                            </div>
                            <div className="block gap-2">
                                <div className=" w-full  mb-1 text-right  block">
                                    <button onClick={toggleDropAction}  className=" font13-res-300 hover:bg-purple-700 hover:text-white cursor-pointer border-gray-300 text-gray-500 px-2 py-1 rounded-md border">
                                        Lihat Pengerjaan
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