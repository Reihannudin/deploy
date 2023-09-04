import React, {useEffect, useState} from "react";
import {useNavigate, useParams, useSearchParams} from "react-router-dom";
import axios from "axios";

export const DetailStudentAbsentCardComponent = (props) => {

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

    const user = JSON.parse(localStorage.getItem("whoLogin"));
    const username = user.username;
    const [redirectUrl , setRedirectUrl] = useState('');

    const navigate = useNavigate();

    const handlerSubmitAccept = (event) => {
        event.preventDefault();

        const formData = {
            confirmation,
            action,
            reason,
        };

        console.log(formData);

        axios
            .post(
                `http://127.0.0.1:8000/api/${username}/${slug}/confirmation/accept/${id}/absent/${props.id}`,
                formData
            )
            .then((response) => {
                console.log(response.data);
                const { redirectUrl } = response.data;
                setRedirectUrl(redirectUrl);
            })
            .catch((error) => {
                console.log(error.response.data)
                const { errors } = error.response.data;

                setErrorAction(errors?.action?.[0] || "");
                setErrorReason(errors?.reason?.[0] || "");
            });
    }

    const handlerSubmitDenied = (event) => {
        event.preventDefault();

        const formData = {
            confirmation,
            action,
            reason,
        };

        console.log(formData);

        axios
            .post(
                `http://127.0.0.1:8000/api/${username}/${slug}/confirmation/denied/${id}/absent/${props.id}`,
                formData
            )
            .then((response) => {
                console.log(response.data);
                const { redirectUrl } = response.data;
                setRedirectUrl(redirectUrl);
            })
            .catch((error) => {
                console.log(error.response.data)
                const { errors } = error.response.data;

                setErrorAction(errors?.action?.[0] || "");
                setErrorReason(errors?.reason?.[0] || "");
            });
    }




    useEffect(() => {
        if (redirectUrl) {
            const url = new URL(redirectUrl);
            const searchParams = new URLSearchParams(url.search);

            setErrorAction(searchParams.get("error_action") || "");
            setErrorReason(searchParams.get("error_reason") || "");

            setAction(searchParams.get("action") || "");
            setReason(searchParams.get("reason") || "");

            searchParams.delete("action");

            searchParams.delete("reason");

            url.search = searchParams.toString();
            window.history.replaceState({}, "", url.href);

            const statusParam = searchParams.get("status");

            if (statusParam === "201") {
                navigate(`/view/${slug}/${class_id}/my/absent/${id}/students`);
            }

            setRedirectUrl("");
        }
    }, [redirectUrl]);

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

    console.log(action);
    console.log(reason);

    // const [windowWidth , setWindowWidth] = useState(window.innerWidth);
    //
    // useEffect(() => {
    //     const handleResize = () => {
    //         setWindowWidth(window.innerWidth);
    //     };
    //
    //     window.addEventListener('resize' , handleResize);
    //
    //     return () => {
    //         window.removeEventListener('resize' , handleResize);
    //     }
    // } , []);
    //
    // const truncatedName = props.name.length > 24 ? `${props.name.slice(0, 23)}...` : props.name;
    // {window.innerWidth >= 768 ? truncatedName : props.name}


    console.log(props.status === null);

    return(
        <>
            <div className="bg-white w-full my-1 border-radius-8 shadow">
                <div className="w-full flex justify-between ">
                    <div className="flex sm:w-4/12 w-full">
                        <div className="block py-3">
                            <div className="w-full   mx-5 text-left">
                                <h3 className="font16-res-300" style={{color:"#646464"}}>{props.student}</h3>
                            </div>
                            <div className="w-full hidden sm:block  mx-5 text-left">
                                <p className="font14-res-300" style={{  color:"#807e7e"}}>Absent</p>
                            </div>
                            <div className="w-full sm:hidden flex gap-2 mx-5 text-left">
                                <p className="font14-res-300" style={{ color:"#605f5f"}}>Status : </p>
                                <p className="font14-res-300" style={{  fontWeight:"550" , color:"#605f5f"}}>{props.status}</p>
                            </div>
                        </div>
                    </div>
                    <div className="py-3 flex mx-3 sm:mx-3 w-full justify-end sm:justify-between ">
                        <div className="hidden sm:block">
                            <div className="w-full flex gap-2 mx-5 text-left">
                                <p className="font14-res-300" style={{ color: "#605f5f" }}>Status : </p>
                                {props.status === null ? (
                                    <p className="font14-res-300" style={{ fontWeight: "550", color: "#605f5f" }}>Belum Absent</p>
                                ) : (
                                    <p className="font14-res-300" style={{ fontWeight: "550", color: "#605f5f" }}>{props.status}</p>
                                )}
                            </div>
                            <div className="w-full  flex gap-2 mx-5 text-left">
                                <p className="font14-res-300" style={{ color:"#605f5f"}}>InTime : </p>
                                <p className="font14-res-300" style={{ fontWeight: "550", color: "#605f5f" }}>
                                    {props.absent_time === null ? "Tidak ada" : props.absent_time}
                                </p>
                            </div>
                        </div>
                        <div className="flex sm:mt-1 mt-0 sm:gap-3 gap-2">
                            {props.status === null ? (
                                <div className="mt-1.5">
                                    <div className="w-full text-gray-600  px-2 pt-0.5  border-radius-4">
                                        <p className="font14-res-300" style={{ fontWeight:"500"}}>Belum Absen</p>
                                    </div>
                                </div>
                            ) : (
                               <>
                                   {props.confirmation_status === "terkonfirmasi" ? (
                                       <div className="mt-1.5">
                                           <div className="w-full text-green-600 bg-green-200 px-4 border-radius-4">
                                               <p className="font14-res-300">{props.confirmation_status}</p>
                                           </div>
                                       </div>
                                   ):(
                                       <div className="flex gap-2">
                                           <div className={"mt-0.5"}>
                                               <form onSubmit={handlerSubmitAccept}>
                                                   <button onSubmit={handlerSubmitAccept} className="border  border-purple-500 font14-res-300 py-1.5 px-2 text-purple-700 border-radius-4">
                                                       <div style={{ height:"18px"}}>
                                                           <img className="h-full" src="/assets/check-absent.svg"/>
                                                       </div>
                                                   </button>
                                               </form>
                                           </div>
                                           <div className={"mt-0.5"}>
                                               <button onClick={popUpDenied} className="border  border-red-500 font14-res-300 py-1.5 px-2 text-purple-700 border-radius-4">
                                                   <div style={{ height:"18px"}}>
                                                       <img className="h-full" src="/assets/check-absent-x.svg"/>
                                                   </div>
                                               </button>
                                           </div>
                                       </div>
                                   )}
                               </>
                            )}
                            <div className="relative ">
                                <button onClick={toggleDropdownDetail} className="md:mx-4 mt-1 mx-2">
                                    <div className="my-auto mx-auto" style={{ height:"24px"}}>
                                        <img className="h-full" src="/assets/menu-icon.svg"/>
                                    </div>
                                </button>
                                {dropdownDetail ? null : (
                                    <div>
                                        <div className="relative">

                                            <div
                                                id="dropdown_profile"
                                                className="z-10 fixed inset-0"
                                                onClick={handlerDropdownDetail}
                                            >
                                                <div className="bg-whie bg-opacity-0 w-full h-full z-40 absolute right-0 bottom-0"></div>
                                            </div>
                                            <div className="absolute right-0 md:right-16 xl:right-28 z-50 top-0 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-36 md:w-44 dark:bg-gray-700 dark:divide-gray-600">
                                                <ul className="py-2 text-sm text-left text-gray-700 dark:text-gray-400">
                                                    <li>
                                                        <a href={`/`} className="block px-4 py-2 font14-res-300 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-purple-600  dark:hover:text-white">Lihat Detail</a>
                                                    </li>
                                                    <li>
                                                        <a href={`/`} className="block px-4 py-2 font14-res-300 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-purple-600  dark:hover:text-white">Lihat Profile</a>
                                                    </li>

                                                </ul>
                                            </div>

                                        </div>

                                    </div>

                                )}

                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div id="pop_up_detail" tabIndex="-1" onClose={popUpDenied}  style={{ display:"none" , background:"rgba(75,75,75,0.67)" }} className="fixed z-50 w-full p-0 overflow-x-hidden overflow-y-auto inset-0 h-[calc(100%)] ">
                <div className="absolute lg:w-6/12 md:w-7/12 sm:w-8/12 w-9/12 mx-auto h-full max-w-2xl position-pop-up md:h-auto" >
                    <div className="relative bg-white xl:w-8/12 lg:w-9/12 md:w-10/12 w-full top-24 rounded-lg shadow dark:bg-gray-700" style={{ minHeight:"320px" , maxHeight:"360px"}} >
                        <div className="flex items-start justify-end md:pt-4 md:pb-4 pt-4 pb-3 px-4 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-lg my-1 w-full ms-5 font-normal font18-res-300 text-center text-gray-900 dark:text-white">
                                Denied Absent
                            </h3>
                            <button type="button"  onClick={popUpDenied} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path></svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <div className="my-3">
                            <div className="w-10/12 pb-4 my-4 text-left mx-auto" >
                                <form onSubmit={handlerSubmitDenied}>
                                    <div className="my-2">
                                        <p className="font16-res-300" style={{ color:"#656565"}}>Apakah siswa ini memiliki masalah dengan absensi? </p>
                                        <div className="mt-3">
                                            <div className="my-2">
                                                <label className="font14-res-300" style={{ color: "#777575" }}>
                                                    Action
                                                </label>
                                                <div className="flex">
                                                    <select
                                                        id="action"
                                                        name="action"
                                                        className="w-full font16-res-300 py-1 border-b font16-res-400 cursor-pointer form-select mb-1"
                                                        aria-label="Default select example"
                                                        value={action}
                                                        onChange={onChangeAction}
                                                    >
                                                        <option disabled value="none" className=" font16-res-400">
                                                            Pilih Option Absent
                                                        </option>
                                                        <option value="hadir" className=" font16-res-400">
                                                            Hadir
                                                        </option>
                                                        <option value="izin" className=" font16-res-400">
                                                            Tidak Hadir
                                                        </option>
                                                    </select>
                                                    <button>
                                                        <i className="fa-solid fa-eye-slash" style={{ color: "#777575" }}></i>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="my-2">
                                                <label className="font14-res-300" style={{ color: "#777575" }}>
                                                    Alasan
                                                </label>
                                                <div className="flex">
                                                    <input
                                                        id="reason"
                                                        value={reason}
                                                        onChange={onChangeReason}
                                                        type="text"
                                                        className="w-full py-1 font16-res-300 border-b-gray-300"
                                                        style={{ borderBottom: "1px solid #ebebeb" }}
                                                        placeholder="your Reason"
                                                    />
                                                    <button>
                                                        <i className="fa-solid fa-eye-slash" style={{ color: "#777575" }}></i>
                                                    </button>
                                                </div>
                                                {errorReason === '' ? (
                                                    <div className="my-1"></div>
                                                ) : (
                                                    <div className="my-1 text-left">
                                                        <span className="text-red-600 font14-res-300">{errorReason}</span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <div >
                                            <button
                                                onSubmit={handlerSubmitDenied}
                                                className="w-full font16-res-300 font-medium py-2 bg-white border-purple-400 text-purple-600 border hover:text-white hover:bg-purple-700 cursor-pointer text-center mt-4"
                                                type="submit"
                                                style={{ borderRadius: "4px" }}
                                            >
                                                <p>Konfirmasi</p>
                                            </button>
                                        </div >
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}