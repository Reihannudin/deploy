import React, { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import axios from "axios";
import api from "../../Config/api";

export const ActionAbsentPasswordComponent = (props) => {
    const [action, setAction] = useState("hadir");
    const [reason, setReason] = useState("");
    const [password, setPassword] = useState("");
    const [searchParams] = useSearchParams();
    const [errorAction, setErrorAction] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const [errorReason, setErrorReason] = useState("");
    const [error, setError] = useState("");
    const [redirectUrl, setRedirectUrl] = useState("");

    const onChangeAction = (event) => {
        const action = event.target.value;
        setAction(action);
    };

    const onChangeReason = (event) => {
        const reason = event.target.value;
        setReason(reason);
    };

    const onChangePassword = (event) => {
        const password = event.target.value;
        setPassword(password);
    };

    const { id, slug } = useParams();
    const user = props.user;
    const username = user.username;

    const navigate = useNavigate();
    const [redirectPath, setRedirectPath] = useState("/register");
    const [isLoading, setIsLoading] = useState(false);


    const handleSubmit = (event) => {
        event.preventDefault();

        setIsLoading(true); // Start loading indicator

        const formData = {
            action,
            password,
            reason,
        };

        api
            .post(`/${slug}/absent/${id}/action/password`, formData)
            .then((response) => {
                setIsLoading(false); // Stop loading indicator
                if (response.data.status === 201) {
                        let redirectUrl = response.data.redirect_path;
                        console.log(redirectUrl)
                        setRedirectPath(redirectUrl);
                        navigate(redirectUrl);
                }
                else if (response.data.status === 406) {
                    if (response.data.errors.message === "Absent Action tidak boleh kosong") {
                        let redirectUrl = response.data.redirect_path;
                        // setErrorAction("")
                        setErrorAction(response.data.errors.message);
                        setRedirectPath(redirectUrl);
                        navigate(redirectUrl);

                    } else if (response.data.errors.message === "Konfirmasi Password tidak boleh kosong") {
                        let redirectUrl = response.data.redirect_path;
                        // setErrorPassword("")

                        setErrorPassword(response.data.errors.message);
                        setRedirectPath(redirectUrl);
                        navigate(redirectUrl);
                    }
                    else if (response.data.errors.message === "Alasan tidak boleh kosong jika melakukan izin") {
                        let redirectUrl = response.data.redirect_path;
                        // setErrorReason("")
                        setErrorReason(response.data.errors.message);
                        setRedirectPath(redirectUrl);
                        navigate(redirectUrl);

                    } else if (response.data.errors.message === "Anda sudah tidak bisa melakukan absent") {
                        let redirectUrl = response.data.redirect_path;
                        // setError("")
                        console.log(redirectUrl)
                        setError(response.data.errors.message);
                        setRedirectPath(redirectUrl);
                        navigate(redirectUrl);

                    }
                    else if (response.data.errors.message === "Anda sudah tidak bisa melakukan absent, Kesempatan Absent telah selesai") {
                        let redirectUrl = response.data.redirect_path;
                        console.log(redirectUrl)
                        setError(response.data.errors.message);
                        setRedirectPath(redirectUrl);
                        navigate(redirectUrl);
                    }
                    else if (response.data.errors.message === "Password anda tidak sama") {
                        let redirectUrl = response.data.redirect_path;
                        setErrorPassword(response.data.errors.message);
                        // setErrorPassword("")
                        setRedirectPath(redirectUrl);
                        navigate(redirectUrl);
                    }
                    else if (response.data.errors.message === "Anda sudah tidak bisa melakukan absent, Masa Absent telah selesai") {
                        let redirectUrl = response.data.redirect_path;
                        // setError("")
                        setError(response.data.errors.message);
                        setRedirectPath(redirectUrl);
                        navigate(redirectUrl);
                    }
                    else if (response.data.errors.message === "Anda sudah tidak bisa melakukan absent, Masa Absent telah selesai") {
                        let redirectUrl = response.data.redirect_path;
                        // setError("")
                        setError(response.data.errors.message);
                        setRedirectPath(redirectUrl);
                        navigate(redirectUrl);

                    }
                }


            })
            .catch((error) => {
                setIsLoading(false); // Stop loading indicator
                const { errors } = error.response.data;
                setErrorAction(errors?.action?.[0] || "");
                setErrorPassword(errors?.password?.[0] || "");
                setErrorReason(errors?.reason?.[0] || "");
                setError(errors?.message?.[0] || "");
            });
    };



    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    return (
        <>
            <div className="h-full mx-auto sm:pt-10  pt-12 px-0" style={{ minWidth: "300px" }}>
                <div className="flex md:my-4 my-2  sm:w-11/12  mx-auto w-full">
                    <div className="xl:w-10/12 lg:w-full md:11/12 w-full md:mx-auto">
                        <form onSubmit={handleSubmit}>
                            <div>
                                <div className="my-3 w-full mx-auto">
                                    <div className="mt-6 border-b pb-3 mb-4 w-11/12  mx-auto">
                                        <div className="w-full text-left">
                                            <div className="my-2">
                                                <div className=" text-gray-600">
                                                    <p className="font14-label-res-300">Nama Absent : </p>
                                                    <h2
                                                        className="font16-label-res-400 text-gray-600"
                                                        style={{ fontWeight: "500" }}
                                                    >
                                                        {props.name}
                                                    </h2>
                                                </div>
                                            </div>
                                            <div className="mt-2 mb-3">
                                                <div className=" flex text-gray-600">
                                                    <p className="font14-label-res-300">Methode : </p>
                                                    <h2 className="font14-label-res-300 text-gray-500 ms-1">
                                                        Menggunakan Password
                                                    </h2>
                                                </div>
                                            </div>
                                            <div className="mt-2 mb-3">
                                                <div className=" flex text-gray-600">
                                                    <p className="font14-label-res-300">Status : </p>
                                                    <h2 className="font14-label-res-300 text-gray-500 ms-1">
                                                        {props.status}
                                                    </h2>
                                                </div>
                                            </div>
                                            <div className="flex justify-between">
                                                <div className=" text-gray-600">
                                                    <p className="font14-label-res-300">Time : </p>
                                                    <p className="font14-label-res-300">
                                                        {hours + ":" + minutes + ":" + seconds}
                                                    </p>
                                                </div>
                                                <div className="font16-res-300 text-gray-600">
                                                    <p className="font14-label-res-300">Deadline : </p>
                                                    <p className="font14-label-res-300">
                                                        {props.end_time} - {props.date}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-11/12 mb-4 block md:flex md:justify-between text-left mx-auto">
                                        <div className="md:w-5/12 w-full">
                                            <div className="my-6">
                                                <p
                                                    className="w-full font14-label-res-300 md:w-full my-2"
                                                    style={{ color: "#777575" }}
                                                >
                                                    Anda akan absent menggunakan password dari email ini
                                                </p>
                                                <input
                                                    type="email"
                                                    disabled
                                                    className="w-full px-2 py-2 md:py-3 text-gray-400 font15-input-res-300 border-b-gray-300```jsx
                          "
                                                    style={{ borderBottom: "1px solid #ebebeb" }}
                                                    value={props.email}
                                                    placeholder="your@email.com"
                                                />
                                            </div>
                                            <div className="my-3">
                                                <label className="font14-label-res-300" style={{ color: "#777575" }}>
                                                    Confirmm Password
                                                </label>
                                                <div className="flex">
                                                    <input
                                                        id="password"
                                                        value={password}
                                                        onChange={onChangePassword}
                                                        type="password"

                                                        className="w-full font15-input-res-300   px-2 py-2 md:py-3  border-b-gray-300"
                                                        style={{ borderBottom: "1px solid #ebebeb" }}
                                                        placeholder="your password"
                                                    />
                                                    <button>
                                                        <i className="fa-solid fa-eye-slash" style={{ color: "#777575" }}></i>
                                                    </button>
                                                </div>
                                                {errorPassword === '' ? (
                                                    <div className="my-1"></div>
                                                ) : (
                                                    <div className="my-1 text-left">
                                                        <span className="text-red-600 font14-label-res-300">{errorPassword}</span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="md:w-6/12 w-full">
                                            <div className="my-3">
                                                <div className="my-2">
                                                    <label className="font14-label-res-300" style={{ color: "#777575" }}>
                                                        Action
                                                    </label>
                                                    <div className="flex">
                                                        <select
                                                            id="action"
                                                            name="action"
                                                            className="w-full font15-input-res-300  py-2 md:py-3  border-b font16-res-400 cursor-pointer form-select mb-1"
                                                            aria-label="Default select example"
                                                            value={action}
                                                            onChange={onChangeAction}
                                                        >
                                                            <option disabled value="none" className=" font15-input-res-300">
                                                                Pilih Option Absent
                                                            </option>
                                                            <option value="hadir" className=" font15-input-res-300">
                                                                Hadir
                                                            </option>
                                                            <option value="izin" className=" font15-input-res-300">
                                                                Izin
                                                            </option>
                                                        </select>
                                                        <button>
                                                            <i className="fa-solid fa-eye-slash" style={{ color: "#777575" }}></i>
                                                        </button>
                                                    </div>
                                                </div>
                                                {action === "izin" ? (
                                                    <div className="my-2">
                                                        <label className="font14-label-res-300" style={{ color: "#777575" }}>
                                                            Alasan
                                                        </label>
                                                        <div className="flex">
                                                            <input
                                                                id="reason"
                                                                value={reason}
                                                                onChange={onChangeReason}
                                                                type="text"
                                                                className="w-full font15-input-res-300 py-2 md:py-3 border-b font16-res-400 cursor-pointer form-select mb-1"

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
                                                                <span className="text-red-600 font14-label-res-300">{errorReason}</span>
                                                            </div>
                                                        )}
                                                    </div>
                                                ) : (
                                                    <div></div>
                                                )}
                                            </div>
                                            {errorAction === '' ? (
                                                <div className="my-1"></div>
                                            ) : (
                                                <div className="my-1 text-left">
                                                    <span className="text-red-600 font14-label-res-300">{errorAction}</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    {error === '' ? (
                                        <div className="my-1"></div>
                                    ) : (
                                        <div className="my-1 text-left">
                                            <span className="text-red-600 font14-label-res-300">{error}</span>
                                        </div>
                                    )}
                                    <div className="w-11/12 mx-auto pt-8 md:pt-6 justify-between flex">
                                        <div>

                                        </div>
                                        <div className="w-4/12 md:w-3/12 xl:w-2/12 lg:w-2/12 ms-auto ">
                                            <button
                                                className="w-11/12 font15-input-res-300   py-1.5 bg-purple-600 hover:bg-purple-700 cursor-pointer text-center mt-5"
                                                type="submit"
                                                style={{ color: "#ffffff", borderRadius: "4px", border: "1px solid #A373E9" }}
                                            >
                                                <p>Absent</p>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};
