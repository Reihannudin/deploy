import {useNavigate, useParams, useSearchParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";

export const CreateAbsentComponent = () => {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');

    const [searchParams] = useSearchParams();
    const [errorName, setErrorName] = useState('');
    const [errorStartTime, setErrorStartTime] = useState('');
    const [errorEndTime, setErrorEndTime] = useState('');
    const [errorDate, setErrorDate] = useState('');

    const [faceRecognitionChecked, setFaceRecognitionChecked] = useState(false);
    const [passwordChecked, setPasswordChecked] = useState(false);

    const handleFaceRecognitionChange = () => {
        setFaceRecognitionChecked(!faceRecognitionChecked);
    };


    const handlePasswordChange = () => {
        setPasswordChecked(!passwordChecked);
    };

    console.log("face recognation : " , faceRecognitionChecked)
    console.log("password : " , passwordChecked)

    const [redirectUrl, setRedirectUrl] = useState('');

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

    const { id, slug } = useParams();
    const user = JSON.parse(localStorage.getItem('whoLogin'));
    const username = user.username;

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = {
            name,
            date,
            start_time: startTime,
            end_time: endTime
        };

        axios
            // .post(`https://rest-api.spaceskool.site/public/api/${username}/${slug}/${id}/create/absent`, formData)
            .post(`http://127.0.0.1:8000/api/${username}/${slug}/${id}/create/absent`, formData)
            .then((response) => {
                console.log(response.data)
                const { redirectUrl } = response.data;
                setRedirectUrl(redirectUrl);
            })
            .catch((error) => {
                console.log(error.response.data);
                const { errors } = error.response.data;

                setErrorName(errors?.name?.[0] || '');
                setErrorDate(errors?.date?.[0] || '');
                setErrorStartTime(errors?.start_time?.[0] || '');
                setErrorEndTime(errors?.end_time?.[0] || '');
            });
    };

    useEffect(() => {
        if (redirectUrl) {
            const url = new URL(redirectUrl);
            const searchParams = new URLSearchParams(url.search);

            setErrorName(searchParams.get('error_name') || '');
            setErrorDate(searchParams.get('error_date') || '');
            setErrorStartTime(searchParams.get('error_start_time') || '');
            setErrorEndTime(searchParams.get('error_end_time') || '');

            setName(searchParams.get('name') || '');
            setDate(searchParams.get('date') || '');
            setStartTime(searchParams.get('start_time') || '');
            setEndTime(searchParams.get('end_time') || '');

            searchParams.delete('error_name');
            searchParams.delete('name');
            searchParams.delete('error_date');
            searchParams.delete('date');
            searchParams.delete('error_start_time');
            searchParams.delete('start_time');

            url.search = searchParams.toString();
            window.history.replaceState({}, '', url.href);

            const statusParam = searchParams.get('status');

            if (statusParam === '201') {
                navigate(`/view/my/class/${id}/${slug}`);
            }

            setRedirectUrl('');
        }
    }, [redirectUrl]);

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
