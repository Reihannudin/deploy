import {useNavigate, useParams, useSearchParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";
import api from "../../Config/api";

export const EditAbsentComponent = (props) => {

    const { id, slug , class_id } = useParams();

    const [searchParams ] = useSearchParams();
    const [name, setName] = useState('');
    const [date, setDate] = useState( "");
    const [startTime, setStartTime] = useState( "");
    const [endTime, setEndTime] = useState("");
    const [faceRecognitionChecked, setFaceRecognitionChecked] = useState(!!props.use_face_recog); // Convert 1 & 0 to true & false
    const [passwordChecked, setPasswordChecked] = useState(!!props.use_password); // Convert 1 & 0 to true & false


    const [errorName , setErrorName] = useState('');
    const [errorStartTime , setErrorStartTime] = useState('');
    const [errorEndTime , setErrorEndTime] = useState('');
    const [errorDate , setErrorDate] = useState('');
    const [error, setError] = useState('');


    useEffect(() => {
        setName(props.name);
    } , [props.name])
    const onChangeName = (event) => {
        const name = event.target.value;
        setName(name);
    };

    useEffect(() => {
        setDate(props.date);
    } , [props.date])
    const onChangeDate = (event) => {
        const date = event.target.value;
        setDate(date);
    };

    useEffect(() => {
        setStartTime(props.start_time);
    } , [props.start_time])
    const onChangeStartTime = (event) => {
        const startTime = event.target.value;
        setStartTime(startTime);
    };

    useEffect(() => {
        setEndTime(props.end_time);
    } , [props.end_time])
    const onChangeEndTime = (event) => {
        const endTimeValue = event.target.value;
        setEndTime(endTimeValue);
    };


    useEffect(() => {
        setFaceRecognitionChecked(!!props.use_face_recog); // Convert 1 & 0 to true & false
    }, [props.use_face_recog]);

    const handleFaceRecognitionChange = () => {
        setFaceRecognitionChecked(!faceRecognitionChecked);
    };

    useEffect(() => {
        setPasswordChecked(!!props.use_password); // Convert 1 & 0 to true & false
    }, [props.use_password]);

    const handlePasswordChange = () => {
        setPasswordChecked(!passwordChecked);
    };

    // console.log("face recognation : " , faceRecognitionChecked)
    // console.log("password : " , passwordChecked)
    // console.log("face recognation props : " , props.use_face_recog )
    // console.log("password props : " ,props.use_password)



    const navigate = useNavigate();
    const [redirectUrl, setRedirectUrl] = useState('');
    const [redirectPath, setRedirectPath] = useState(`/view/my/class/${slug}/${id}`);
    const [isLoading, setIsLoading] = useState(false);


    let token = localStorage.getItem('auth_token');

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsLoading(true);

        const formData = {
            name : name,
            date : date,
            start_time: startTime,
            end_time: endTime,
            use_password : passwordChecked,
            use_face_recog : faceRecognitionChecked,

        };

        api
            .put(`${slug}/${class_id}/update/absent/${id}`, formData , {
                "Content-Type" : "multipart/form-data" ,
                "Authorization" : "Bearer " + token,
            })
            .then((response) => {
                console.log("response data" , response)
                console.log(response.data);
                console.log("its 201 :"  ,response.data.status === 201);
                console.log("response redirect"  ,response.data.redirect_path)
                setIsLoading(false); // Stop loading indicator
                if (response.data.status === 201) {
                    let redirectUrl = response.data.redirect_path;
                    setErrorName('');
                    setErrorDate('');
                    setErrorStartTime('');
                    setErrorEndTime('');
                    setError(''); // Clear any general error message

                    setRedirectPath(redirectUrl);
                    navigate(redirectUrl);
                    // navigate(`/view/my/class/${slug}/${id}`);

                }
                else if (response.data.status === 406) {
                    if (response.data.errors.message === "Nama Absent tidak boleh kosong") {
                        let redirectUrl = response.data.redirect_path;
                        setErrorName('');
                        setErrorDate('');
                        setErrorStartTime('');
                        setErrorEndTime('');
                        setError(''); // Clear any general error message
                        setRedirectPath(redirectUrl);
                        setErrorName(response.data.errors.message);
                        navigate(redirectUrl);
                    } else if (response.data.errors.message === "Isi dengan tanggal yang kamu tentukan") {
                        let redirectUrl = response.data.redirect_path;
                        setErrorName('');
                        setErrorDate('');
                        setErrorStartTime('');
                        setErrorEndTime('');
                        setError(''); // Clear any general error message
                        setErrorDate(response.data.errors.message);
                        setRedirectPath(redirectUrl);
                        navigate(redirectUrl);
                    }
                    else if (response.data.errors.message === "Tolong isi waktu dimulainya Absent") {
                        let redirectUrl = response.data.redirect_path;
                        setErrorName('');
                        setErrorDate('');
                        setErrorStartTime('');
                        setErrorEndTime('');
                        setError(''); // Clear any general error message

                        setErrorStartTime(response.data.errors.message);
                        setRedirectPath(redirectUrl);
                        navigate(redirectUrl);
                    }
                    else if (response.data.errors.message === "Tolong isi waktu tenggatnya Absent") {
                        let redirectUrl = response.data.redirect_path;
                        setErrorName('');
                        setErrorDate('');
                        setErrorStartTime('');
                        setErrorEndTime('');
                        setError(''); // Clear any general error message
                        setErrorEndTime(response.data.errors.message);
                        setRedirectPath(redirectUrl);
                        navigate(redirectUrl);
                    }
                    else if (response.data.errors.message === "Pilih salah satu metode absent!") {
                        let redirectUrl = response.data.redirect_path;
                        setErrorName('');
                        setErrorDate('');
                        setErrorStartTime('');
                        setErrorEndTime('');
                        setError(''); // Clear any general error message
                        setError(response.data.errors.message);
                        setRedirectPath(redirectUrl);
                        navigate(redirectUrl);
                    } else if (response.data.errors.message === "maaf tetapi absent ini tidak bisa dirubah, dikarenakan telah habisnya waktu absent") {
                        let redirectUrl = response.data.redirect_path;
                        setErrorName('');
                        setErrorDate('');
                        setErrorStartTime('');
                        setErrorEndTime('');
                        setError(''); // Clear any general error message
                        setError(response.data.errors.message);
                        setRedirectPath(redirectUrl);
                        navigate(redirectUrl);
                    }
                    else if (response.data.errors.message === "maaf tetapi absent ini tidak bisa dirubah, dikarenakan amsa absent sudah selesai") {
                        let redirectUrl = response.data.redirect_path;
                        setErrorName('');
                        setErrorDate('');
                        setErrorStartTime('');
                        setErrorEndTime('');
                        setError(''); // Clear any general error message
                        setError(response.data.errors.message);
                        setRedirectPath(redirectUrl);
                        navigate(redirectUrl);
                    }
                }


            })
            .catch((error) => {
                console.log("error" , error)
                setIsLoading(false); // Stop loading indicator
                const { errors } = error.response.data;
                setErrorName(errors?.name?.[0] || '');
                setErrorDate(errors?.date?.[0] || '');
                setErrorStartTime(errors?.start_time?.[0] || '');
                setErrorEndTime(errors?.end_time?.[0] || '');
            });
    };


    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //
    //     const formData = {
    //         name,
    //         date,
    //         start_time: startTime,
    //         end_time: endTime
    //     };
    //
    //     // axios.put(`https://rest-api.spaceskool.site/public/api/${username}/${slug}/${class_id}/update/absent/${id}`, formData)
    //     axios.put(`http://127.0.0.1:8000/api/`, formData)
    //         .then((response) => {
    //             console.log(response.data)
    //             const { redirectUrl } = response.data;
    //             setRedirectUrl(redirectUrl);
    //         })
    //         .catch((error) => {
    //             const { errors } = error.response.data;
    //
    //             setErrorName(errors?.name?.[0] || '');
    //             setErrorDate(errors?.date?.[0] || '');
    //             setErrorStartTime(errors?.start_time?.[0] || '');
    //             setErrorEndTime(errors?.end_time?.[0] || '');
    //         });
    // };



    // useEffect(() => {
    //     if (redirectUrl) {
    //         const url = new URL(redirectUrl);
    //         const searchParams = new URLSearchParams(url.search);
    //
    //         setErrorName(searchParams.get('error_name') || '');
    //         setErrorDate(searchParams.get('error_date') || '');
    //         setErrorStartTime(searchParams.get('error_start_time') || '');
    //         setErrorEndTime(searchParams.get('error_end_time') || '');
    //
    //         setName(searchParams.get('name') || '');
    //         setDate(searchParams.get('date') || '');
    //         setStartTime(searchParams.get('start_time') || '');
    //         setEndTime(searchParams.get('end_time') || '');
    //
    //         searchParams.delete('error_name');
    //         searchParams.delete('name');
    //         searchParams.delete('error_date');
    //         searchParams.delete('date');
    //         searchParams.delete('error_start_time');
    //         searchParams.delete('start_time');
    //
    //         url.search = searchParams.toString();
    //         window.history.replaceState({}, '', url.href);
    //
    //         const statusParam = searchParams.get('status');
    //
    //         if (statusParam === '201') {
    //             navigate(`/view/my/class/${id}/${slug}`);
    //         }
    //
    //         setRedirectUrl('');
    //     }
    // }, [redirectUrl]);



    return (
        <>
            <div className="h-full mx-auto md:pt-20 pt-16 px-0" style={{ minWidth: "300px" }}>
                <div className="w-full py-2 bg-gray-50" >
                    <div className="md:w-9/12 w-10/12 text-left mx-auto" style={{ color: "#575757" }}>
                        <h1 className="font16-res-300" style={{ fontWeight: "500" }}>Perhatian</h1>
                        <p className="font14-res-300">Anda hanya bisa mengedit absent jikalau absent belum dimulai</p>
                    </div>
                </div>
                <div className="lg:flex lg:w-9/12 md:w-10/12 sm:w-10/12 w-11/12 mx-auto">
                    <div className="w-full" style={{ background: "#ffffff" }}>
                        <div className="w-full mx-auto">
                            <div className="my-2">
                                <form onSubmit={handleSubmit}>
                                    <div className="w-full mx-auto   ">
                                        <div className="sm:flex block w-full text-left ">
                                            <div className="md:flex block w-full text-left " >
                                                <div className="mt-3 w-full mx-auto">
                                                    <label className="font14-res-300" style={{ color:"#777575" }}>Nama Absensi</label>
                                                    <div className="flex  w-full">
                                                        <input id="name"  value={name} onChange={onChangeName} type="text"
                                                               className="md:w-11/12 w-full py-1.5 md:py-2.5 font15-res-300 border-b-gray-300"
                                                               style={{ borderBottom:"1px solid #ebebeb"}} placeholder={props.name}/>
                                                    </div>
                                                    {errorName === '' ? (
                                                        <div className="my-1">
                                                        </div>
                                                    ): (
                                                        <div className="my-1 text-left">
                                                            <span  className={"text-red-600  font14-res-300"}>{errorName}</span>
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="mt-3 w-full mx-auto">
                                                    <label className={"font16-res-300"} style={{ color:"#606060" }}>Date</label>
                                                    <div className="flex w-full">
                                                        <input id="date" onChange={onChangeDate} value={date} type="date"
                                                               className="md:w-11/12 w-full py-1.5 md:py-2.5 font15-res-300 border-b-gray-300"
                                                               style={{ borderBottom:"1px solid #ebebeb"}} placeholder={props.date}/>
                                                    </div>
                                                    {errorDate === '' ? (
                                                        <div className="my-1">
                                                        </div>
                                                    ): (
                                                        <div className="my-1 text-left">
                                                            <span  className={"text-red-600  font14-res-300"}>{errorDate}</span>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-left my-6">
                                            <label className={"font16-res-300"} style={{ color:"#606060" }}>Range Time</label>
                                            <div className="flex md:w-8/12 w-full mb-6  justify-between">
                                                <div className="mt-0 w-7/12 mx-auto">
                                                    {/*<label  style={{ fontSize:"14px"}}>Start Time</label>*/}
                                                    <div className="flex w-full">
                                                        <input id="starttime" onChange={onChangeStartTime} value={startTime} type="time"
                                                               className="md:w-11/12 w-full py-1.5 md:py-2.5 font15-res-300 border-b-gray-300"
                                                               style={{ borderBottom:"1px solid #ebebeb"}}  placeholder={props.start_time}/>
                                                        <button >
                                                            <i className="fa-solid fa-eye-slash" style={{ color:"#777575"}}>
                                                            </i>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="mt-0 w-7/12 mx-auto">
                                                    {/*<label style={{ fontSize:"14px"}}>End Time</label>*/}
                                                    <div className="flex w-full">
                                                        <input id="endtime" onChange={onChangeEndTime} value={endTime} type="time"
                                                               className="md:w-11/12 w-full py-1.5 md:py-2.5 font15-res-300 border-b-gray-300"
                                                               style={{ borderBottom:"1px solid #ebebeb"}}  placeholder={props.end_time} />
                                                        <button >
                                                            <i className="fa-solid fa-eye-slash" style={{ color:"#777575"}}>
                                                            </i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            {errorStartTime === '' ? (
                                                <div className="my-1">
                                                </div>
                                            ): (
                                                <div className="my-1 text-left">
                                                    <span  className={"text-red-600  font14-res-300"}>{errorStartTime}</span>
                                                </div>
                                            )}
                                            {errorEndTime === '' ? (
                                                <div className="my-1">
                                                </div>
                                            ): (
                                                <div className="my-1 text-left">
                                                    <span  className={"text-red-600  font14-res-300"}>{errorEndTime}</span>
                                                </div>
                                            )}
                                        </div>

                                        <div className="text-left my-6">
                                            <label className="font16-res-300 py-5" style={{ color: "#777575" }}>Pilihan pengerjaan absensi</label>
                                            <div className="flex md:w-8/12 w-full mb-6">
                                                <div className="mt-4 w-full mx-auto">
                                                    <div className="flex gap-3">
                                                        <div>
                                                            <input
                                                                style={{ height: "16px" }}
                                                                type="checkbox"
                                                                checked={faceRecognitionChecked} // Make sure this is set correctly
                                                                onChange={handleFaceRecognitionChange}
                                                            />
                                                        </div>
                                                        <div>
                                                            <p className="font14-res-300">Pengenalan Wajah</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex gap-3">
                                                        <div>
                                                            <input
                                                                style={{ height: "16px" }}
                                                                type="checkbox"
                                                                checked={passwordChecked} // Make sure this is set correctly
                                                                onChange={handlePasswordChange}
                                                            />
                                                        </div>
                                                        <div>
                                                            <p className="font14-res-300">Password Penggguna</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {error === '' ? (
                                                <div className="my-1">
                                                </div>
                                            ): (
                                                <div className="my-1 text-left">
                                                    <span  className={"text-red-600  font14-res-300"}>{error}</span>
                                                </div>
                                            )}
                                        </div>

                                        <div className="flex w-full justify-between md:mt-20 mt-36 text-right">
                                            <div>

                                            </div>
                                            {error ? (
                                                <button
                                                    type="submit"
                                                    disabled
                                                    onSubmit={handleSubmit}
                                                    className="shadow bg-gray-400 py-2 cursor-no-drop lg:px-4 font16-res-300 md:px-6 px-8 text-white"
                                                    style={{ borderRadius: '4px' }}
                                                >
                                                    Update Absent
                                                </button>
                                            ): (
                                                <button
                                                    type="submit"
                                                    onSubmit={handleSubmit}
                                                    className="shadow weverse-background-btn py-2 lg:px-4 font16-res-300 md:px-6 px-8 text-white"
                                                    style={{ borderRadius: '4px' }}
                                                >
                                                    Update Absent
                                                </button>
                                            )}

                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};



//
// useEffect(() => {
//     const error = searchParams.get('error_name');
//     setErrorName(error)
// } , [searchParams])
//
// useEffect(() => {
//     const error = searchParams.get('error_start_time');
//     setErrorStartTime(error)
// } , [searchParams])
//
// useEffect(() => {
//     const error = searchParams.get('error_end_time');
//     setErrorEndTime(error)
// } , [searchParams])
//
// useEffect(() => {
//     const error = searchParams.get('error_date');
//     setErrorDate(error)
// } , [searchParams])
