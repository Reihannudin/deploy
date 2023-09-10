import {useNavigate, useParams, useSearchParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";
import api from "../../Config/api";

export const CreateAbsentComponent = ({user}) => {

    const { id, slug } = useParams();

    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [faceRecognitionChecked, setFaceRecognitionChecked] = useState(false);
    const [passwordChecked, setPasswordChecked] = useState(false);


    const [searchParams] = useSearchParams();
    const [errorName, setErrorName] = useState('');
    const [errorStartTime, setErrorStartTime] = useState('');
    const [errorEndTime, setErrorEndTime] = useState('');
    const [errorDate, setErrorDate] = useState('');
    const [error, setError] = useState('');

    const [redirectUrl, setRedirectUrl] = useState('');
    const [redirectPath, setRedirectPath] = useState(`/view/my/class/${slug}/${id}`);
    const [isLoading, setIsLoading] = useState(false);

    const handleFaceRecognitionChange = () => {
        setFaceRecognitionChecked(!faceRecognitionChecked);
    };


    const handlePasswordChange = () => {
        setPasswordChecked(!passwordChecked);
    };

    console.log("face recognation : " , faceRecognitionChecked)
    console.log("password : " , passwordChecked)


    useEffect(() => {
        const errorNameParam = searchParams.get('error_name');
        setErrorName(errorNameParam || '');

        const errorStartTimeParam = searchParams.get('error_start_time');
        setErrorStartTime(errorStartTimeParam || '');

        const errorEndTimeParam = searchParams.get('error_end_time');
        setErrorEndTime(errorEndTimeParam || '');

        const errorDateParam = searchParams.get('error_date');
        setErrorDate(errorDateParam || '');
    }, [searchParams]);

    const onChangeName = (event) => {
        const name = event.target.value;
        setName(name);
    };

    const onChangeDate = (event) => {
        const date = event.target.value;
        setDate(date);
    };

    const onChangeStartTime = (event) => {
        const startTime = event.target.value;
        setStartTime(startTime);
    };

    const onChangeEndTime = (event) => {
        const endTimeValue = event.target.value;
        setEndTime(endTimeValue);
    };


    let token = localStorage.getItem('auth_token');

    const navigate = useNavigate();

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
            .post(`/${id}/${slug}/create/absent`, formData , {
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
                       }
                     else if (response.data.errors.message === "Terjadi Kesalahan") {
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


    return (
        <>
            <div className="h-full mx-auto md:pt-20 pt-16 px-0" style={{ minWidth: '300px' }}>
                <div className="lg:flex lg:w-9/12 md:w-10/12 sm:w-10/12 w-11/12 mx-auto">
                    <div className="w-full" style={{ background: '#ffffff' }}>
                        <div className="w-full mx-auto">
                            <div className="my-2">
                                <form onSubmit={handleSubmit}>
                                    <div className="w-full mx-auto   ">
                                        <div className="sm:flex block w-full text-left ">
                                            <div className="md:flex block w-full text-left">
                                                <div className="mt-3 w-full mx-auto">
                                                    <label className="font14-res-300" style={{ color:"#777575" }}>Nama</label>
                                                    <div className="flex w-full">
                                                        <input
                                                            id="name"
                                                            onChange={onChangeName}
                                                            type="text"
                                                            className="md:w-11/12 w-full py-1.5 md:py-2.5 font15-res-300 border-b-gray-300"
                                                            style={{ borderBottom: '1px solid #ebebeb' }}
                                                            placeholder="Your absent name"
                                                        />
                                                    </div>
                                                    {errorName === '' ? (
                                                        <div className="my-1"></div>
                                                    ) : (
                                                        <div className="my-1 text-left">
                                                            <span className="text-red-600 font14-res-300">{errorName}</span>
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="mt-3 w-full mx-auto">
                                                    <label className="font14-res-300" style={{ color:"#777575" }}>Tanggal</label>
                                                    <div className="flex w-full">
                                                        <input
                                                            id="date"
                                                            onChange={onChangeDate}
                                                            type="date"
                                                            className="md:w-11/12 w-full py-1.5 md:py-2.5 font15-res-300 border-b-gray-300"
                                                            style={{ borderBottom: '1px solid #ebebeb' }}
                                                            placeholder="Your room name"
                                                        />
                                                    </div>
                                                    {errorDate === '' ? (
                                                        <div className="my-1"></div>
                                                    ) : (
                                                        <div className="my-1 text-left">
                                                            <span className="text-red-600 font14-res-300">{errorDate}</span>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-left my-6">
                                            <label className="font14-res-300" style={{ color:"#777575" }}>Tenggat waktu</label>
                                            <div className="flex md:w-8/12 w-full mb-6 justify-between">
                                                <div className="mt-0 w-7/12 mx-auto">
                                                    <div className="flex w-full">
                                                        <input
                                                            id="starttime"
                                                            onChange={onChangeStartTime}
                                                            type="time"
                                                            className="md:w-11/12 sm:w-full w-11/12 py-1.5 md:py-2.5 font15-res-300 border-b-gray-300"
                                                            style={{ borderBottom: '1px solid #ebebeb' }}
                                                            placeholder="Your class name"
                                                        />
                                                        <button>
                                                            <i className="fa-solid fa-eye-slash" style={{ color: '#777575' }}></i>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="mt-0 w-7/12 mx-auto">
                                                    <div className="flex w-full">
                                                        <input
                                                            id="endtime"
                                                            onChange={onChangeEndTime}
                                                            type="time"
                                                            className="md:w-11/12 sm:w-full w-11/12 py-1.5 md:py-2.5 font15-res-300 border-b-gray-300"
                                                            style={{ borderBottom: '1px solid #ebebeb' }}
                                                            placeholder="Your class name"
                                                        />
                                                        <button>
                                                            <i className="fa-solid fa-eye-slash" style={{ color: '#777575' }}></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            {errorStartTime === '' ? (
                                                <div className="my-1"></div>
                                            ) : (
                                                <div className="my-1 text-left">
                                                    <span className="text-red-600 font14-res-300">{errorStartTime}</span>
                                                </div>
                                            )}
                                            {errorEndTime === '' ? (
                                                <div className="my-1"></div>
                                            ) : (
                                                <div className="my-1 text-left">
                                                    <span className="text-red-600 font14-res-300">{errorEndTime}</span>
                                                </div>
                                            )}
                                        </div>
                                        <div className="text-left my-6">
                                            <label className="font16-res-300 py-5" style={{ color: "#777575" }}>Pilihan pengerjaan absensi</label>
                                            <div className="flex md:w-8/12 w-full mb-6">
                                                <div className="mt-4 w-full mx-auto">
                                                    <div className="flex gap-3">
                                                        <div>
                                                            <input style={{ height: "20px" }} type="checkbox"
                                                                   checked={faceRecognitionChecked}
                                                                   onChange={handleFaceRecognitionChange} />
                                                        </div>
                                                        <div>
                                                            <p className="font14-res-300">Pengenalan Wajah</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex gap-3">
                                                        <div>
                                                            <input style={{ height: "20px" }} type="checkbox"
                                                                   checked={passwordChecked}
                                                                   onChange={handlePasswordChange} />
                                                        </div>
                                                        <div>
                                                            <p className="font14-res-300">Password Penggguna</p>
                                                        </div>
                                                    </div>
                                                    {error === '' ? (
                                                        <div className="my-1"></div>
                                                    ) : (
                                                        <div className="my-1 text-left">
                                                            <span className="text-red-600 font14-res-300">{error}</span>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex w-full justify-between md:mt-20 mt-36 text-right">
                                            <div>

                                            </div>
                                            <button
                                                type="submit"
                                                onSubmit={handleSubmit}
                                                className="shadow weverse-background-btn py-2 lg:px-4 font15-res-300 md:px-6 px-8 text-white"
                                                style={{ borderRadius: '4px' }}
                                            >
                                                Buat Absent
                                            </button>
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
