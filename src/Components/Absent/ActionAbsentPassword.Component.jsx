import React, { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import axios from "axios";

export const ActionAbsentPasswordComponent = (props) => {
    const [action, setAction] = useState("hadir");
    const [reason, setReason] = useState("");
    const [password, setPassword] = useState("");
    const [searchParams] = useSearchParams();
    const [errorAction, setErrorAction] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const [errorReason, setErrorReason] = useState("");
    const [redirectUrl, setRedirectUrl] = useState("");

    useEffect(() => {
        const errorActionParam = searchParams.get("error_action");
        setErrorAction(errorActionParam || "");

        const errorPasswordParam = searchParams.get("error_password");
        setErrorPassword(errorPasswordParam || "");

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

    const onChangePassword = (event) => {
        const password = event.target.value;
        setPassword(password);
    };

    const { id, slug } = useParams();
    const user = JSON.parse(localStorage.getItem("whoLogin"));
    const username = user.username;

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = {
            action,
            password,
            reason,
        };

        console.log(formData);
        axios
            .post(
                `http://127.0.0.1:8000/api/${username}/${slug}/absent/${id}/action/password`,
                formData
            )
            // .post(
            //     `https://rest-api.spaceskool.site/public/api/${username}/${slug}/absent/${id}/action/password`,
            //     formData
            // )
            .then((response) => {
                console.log(response.data);
                const { redirectUrl } = response.data;
                setRedirectUrl(redirectUrl);
            })
            .catch((error) => {
                console.log(error.response.data)
                const { errors } = error.response.data;

                setErrorAction(errors?.action?.[0] || "");
                setErrorPassword(errors?.password?.[0] || "");
                setErrorReason(errors?.reason?.[0] || "");
            });
    };

    useEffect(() => {
        if (redirectUrl) {
            const url = new URL(redirectUrl);
            const searchParams = new URLSearchParams(url.search);

            setErrorAction(searchParams.get("error_action") || "");
            setErrorPassword(searchParams.get("error_password") || "");
            setErrorReason(searchParams.get("error_reason") || "");

            setAction(searchParams.get("action") || "");
            setReason(searchParams.get("reason") || "");

            searchParams.delete("action");
            searchParams.delete("reason");

            url.search = searchParams.toString();
            window.history.replaceState({}, "", url.href);

            const statusParam = searchParams.get("status");

            if (statusParam === "201") {
                navigate(`/view/class/${id}/${slug}`);
            }

            setRedirectUrl("");
        }
    }, [redirectUrl]);

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
                <div className="flex md:my-4 my-2 w-full">
                    <div className="xl:w-9/12 lg:w-10/12 md:11/12 sm:w-11/12 w-11/12 mx-auto">
                        <form onSubmit={handleSubmit}>
                            <div>
                                <div className="my-3 w-full mx-auto">
                                    <div className="mt-6 border-b pb-3 mb-4 w-11/12  mx-auto">
                                        <div className="w-full text-left">
                                            <div className="my-2">
                                                <div className=" text-gray-600">
                                                    <p className="font14-res-300">Nama Absent : </p>
                                                    <h2
                                                        className="font16-res-300 text-gray-600"
                                                        style={{ fontWeight: "500" }}
                                                    >
                                                        {props.name}
                                                    </h2>
                                                </div>
                                            </div>
                                            <div className="mt-2 mb-3">
                                                <div className=" flex text-gray-600">
                                                    <p className="font14-res-300">Status : </p>
                                                    <h2 className="font14-res-300 text-gray-500 ms-1">
                                                        {props.status}
                                                    </h2>
                                                </div>
                                            </div>
                                            <div className="flex justify-between">
                                                <div className=" text-gray-600">
                                                    <p className="font13-res-300">Time : </p>
                                                    <p className="font15-res-300">
                                                        {hours + ":" + minutes + ":" + seconds}
                                                    </p>
                                                </div>
                                                <div className="font16-res-300 text-gray-600">
                                                    <p className="font13-res-300">Deadline : </p>
                                                    <p className="font15-res-300">
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
                                                    className="w-full font14-res-300 md:w-full my-2"
                                                    style={{ color: "#777575" }}
                                                >
                                                    Anda akan absent menggunakan password dari email ini
                                                </p>
                                                <input
                                                    type="email"
                                                    disabled
                                                    className="w-full py-3 text-gray-400 font16-res-300 font-normal border-b-gray-300```jsx
                          "
                                                    style={{ borderBottom: "1px solid #ebebeb" }}
                                                    value={props.email}
                                                    placeholder="your@email.com"
                                                />
                                            </div>
                                            <div className="my-3">
                                                <label className="font14-res-300" style={{ color: "#777575" }}>
                                                    Confirmm Password
                                                </label>
                                                <div className="flex">
                                                    <input
                                                        id="password"
                                                        value={password}
                                                        onChange={onChangePassword}
                                                        type="password"

                                                        className="w-full font15-res-300 py-1 border-b-gray-300"
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
                                                        <span className="text-red-600 font14-res-300">{errorPassword}</span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="md:w-6/12 w-full">
                                            <div className="my-3">
                                                <div className="my-2">
                                                    <label className="font14-res-300" style={{ color: "#777575" }}>
                                                        Action
                                                    </label>
                                                    <div className="flex">
                                                        <select
                                                            id="action"
                                                            name="action"
                                                            className="w-full font15-res-300 py-1 border-b font16-res-400 cursor-pointer form-select mb-1"
                                                            aria-label="Default select example"
                                                            value={action}
                                                            onChange={onChangeAction}
                                                        >
                                                            <option disabled value="none" className=" font15-res-300">
                                                                Pilih Option Absent
                                                            </option>
                                                            <option value="hadir" className=" font15-res-300">
                                                                Hadir
                                                            </option>
                                                            <option value="izin" className=" font15-res-300">
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
                                                        <label className="font14-res-300" style={{ color: "#777575" }}>
                                                            Alasan
                                                        </label>
                                                        <div className="flex">
                                                            <input
                                                                id="reason"
                                                                value={reason}
                                                                onChange={onChangeReason}
                                                                type="text"
                                                                className="w-full font15-res-300 py-1 border-b font16-res-400 cursor-pointer form-select mb-1"

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
                                                ) : (
                                                    <div></div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        <div className={"md:w-3/12 w-4/12 lg:me-10 me-0 my-12 ms-auto"}>
                                            <button
                                                className="w-full font16-res-400 font-medium py-1.5 weverse-background-btn text-center mt-5"
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
