import React, {useState} from "react";

export const DetailStudentRankTaskCardComponent = (props) => {


    const [dropAction , setDropAction] = useState(false);

    const toggleDropAction = () => {
        setDropAction(!dropAction);
    }

    const handleDropdownItemClick = () => {
        setDropAction(false);
    };


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
                                    {props.assignment_status === "selesai" ? (
                                        <div className="font13-res-300 mt-0.5 ">

                                            <p className="text-green-400 border-radius-4 pt-1 pb-1 mb-0  px-2 bg-green-200">{props.assignment_status }</p>
                                        </div>
                                    ): props.assignment_status  === "melewatkan" ? (
                                        <div className="font13-res-300 mt-0.5 ">
                                            <p className="text-red-400 border-radius-4 pt-1 pb-1 mb-0  px-2 bg-red-200">{props.assignment_status }</p>
                                        </div>
                                    ) : (
                                        <div className="font13-res-300 mt-0.5 ">
                                            <p className="text-yellow-400 border-radius-4 pt-1 pb-1 mb-0  px-2 bg-yellow-200">{props.assignment_status }</p>
                                        </div>
                                    )}

                                </div>
                                <div className="my-3 border-t pt-3">
                                    <div className="block">
                                        <div className={"flex mt-1 gap-2 font15-res-300"}>
                                            <p className="text-gray-700" style={{fontWeight:"500"}} >username : </p>
                                            <p className="text-gray-500">
                                                {props.student.length > 15 ? (
                                                    props.student.slice(0, 15) + '...'
                                                ) : (
                                                    props.student
                                                )}
                                            </p>
                                        </div>
                                        <div className={"flex mb-1 gap-2 font15-res-300"}>
                                            <p  className="text-gray-700" style={{fontWeight:"500"}}>status : </p>
                                            {props.status === "hadir" ? (
                                                <p className=" text-green-400" style={{ fontWeight: "550" }}>{props.status}</p>

                                            ) : props.status === "izin" ? (
                                                <p className=" text-yellow-400" style={{ fontWeight: "550"}}>{props.status}</p>
                                            ) : props.status === null ? (
                                                <p className=" text-gray-400" style={{ fontWeight: "550" }}>Belum selesai</p>
                                            ) : props.status === "melewatkan" ? (
                                                <p className=" text-red-400" style={{ fontWeight: "550" }}>{props.status}</p>
                                            ) :(
                                                <p className="" style={{ fontWeight: "550", color: "#605f5f" }}>{props.status}</p>
                                            )}
                                        </div>
                                        <div className={"flex mb-1 gap-2 font15-res-300"}>
                                            <p  className="text-gray-700" style={{fontWeight:"500"}}>Terkonfirmasi : </p>
                                            {/*{props.absent_confirmation === "terkonfirmasi" ? (*/}
                                            <p className=" text-green-400" style={{ fontWeight: "550" }}>belum terkonfirmas</p>

                                        </div>
                                    </div>
                                    <div className="block my-1 text-left justify-between">
                                        <div className={"flex md:flex gap-2 font15-res-300"}>
                                            <p  className="text-gray-700" style={{fontWeight:"500"}}>Score : </p>
                                            <p className="text-gray-500">{props.score === null ? '-' : props.score}</p>
                                        </div>
                                        <div className={"flex md:flex gap-2 font15-res-300"}>
                                            <p  className="text-gray-700" style={{fontWeight:"500"}}>Waktu Pengerjaan : </p>
                                            <p className="text-gray-500">{props.intime === null ? '-' : props.intime}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="my-3 block md:flex justify-between border-t pt-3">
                                    <div className="flex font14-res-300">
                                        <p  className="text-gray-700" style={{fontWeight:"500"}}>Date Time: </p>
                                        <p  className="text-gray-500"> {props.assignment_date === null ? '-' : props.assignment_date}</p>
                                    </div>
                                    <div className="flex font14-res-300">
                                        <p  className="text-gray-700" style={{fontWeight:"500"}}>Deadline : </p>
                                        <p  className="text-gray-500">{props.assignment_deadline}</p>
                                    </div>
                                </div>
                                <div className="me-auto my-3 block w-full  ">
                                    <div className="w-full mb-2">
                                        <button onClick={handleDropdownItemClick} className="bg-purple-600 w-full border hover:bg-purple-700 hover:text-white border-purple-700 border-radius-4 text-white px-3 py-1 cursor-pointer font15-res-300">
                                            Lihat Pengerjaan
                                        </button>
                                    </div>
                                    <div className="w-full my-1">
                                        <button onClick={handleDropdownItemClick} className="bg-white w-full border hover:bg-purple-600 hover:text-white border-purple-700 border-radius-4 text-purple-600 px-3 py-1 cursor-pointer font15-res-300">
                                            Kembali
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
                        <div className="flex me-2 md:me-5 ">
                            <div className="block mt-1 w-full">
                                <div className="w-full mx-1 mt-0 md:mt-0.5 text-left">
                                    <h3 className="font16-res-300" style={{color:"#646464"}}>
                                        {props.student.length > 24 ? (
                                            props.student.slice(0, 24) + '...'
                                        ) : (
                                            props.student
                                        )}
                                    </h3>
                                </div>
                                <div className=" justify-between gap-2">
                                    <div className="w-full text-left  flex">
                                        <div className="  ms-1 mt-1 md:mt-1 mb-1 ">
                                            <p className=" font13-res-300 text-gray-600" >
                                                Score : {props.score === null ? '-' : props.score}
                                            </p>
                                        </div>
                                        <div className=" mx-2 mt-1 md:mt-1 mb-1 ">
                                            <p className=" font13-res-300 text-gray-600" >
                                                Rank : {props.score === null ? '-' : props.score}
                                            </p>
                                        </div>
                                    </div>

                                </div>

                            </div>

                            <div className=" w-6/12  mb-1 text-right  block">
                                <button onClick={toggleDropAction}   className=" font13-res-300 hover:bg-purple-700 hover:text-white cursor-pointer border-gray-300 text-gray-500 px-2 py-1 rounded-md border">
                                    <p style={{ fontSize:"10px"}}>
                                        Lihat Detail

                                    </p>
                                </button>
                            </div>
                        </div>


                    </div>
                </div>

            </div>


        </>
    )
}