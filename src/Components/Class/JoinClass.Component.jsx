import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";

export const JoinClassComponent = () => {

    const [searchParams] = useSearchParams();
    const [error, setError] = useState("");

    useEffect(() => {
        const error = searchParams.get("error");
        setError(error);
    }, [searchParams]);

    const [classname , setClassname] = useState('');
    const [code, setCode] = useState("");

    const onChangeClassname = (event) => {
        const classname = event.target.value;
        setClassname(classname);
    };

    const onChangeCode = (event) => {
        const code = event.target.value;
        setCode(code);
    };

    const user = JSON.parse(localStorage.getItem('whoLogin'));
    const username = user.username;
    const [redirectUrl, setRedirectUrl] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const error = searchParams.get("error");
        setError(error);
    }, [searchParams]);

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = {
            classname,
            code
        };

        axios
            // .post(`https://rest-api.spaceskool.site/public/api/${username}/join/classes`, formData)
            .post(`http://127.0.0.1:8000/api/${username}/join/classes`, formData)
            .then((response) => {
                const { redirectUrl } = response.data;
                setRedirectUrl(redirectUrl);
            })
            .catch((error) => {
                const { errors } = error.response.data;
                setError(errors?.classname?.[0] || '');
            });
    }

    useEffect(() => {
        if (redirectUrl) {
            const url = new URL(redirectUrl);
            const errorParam = url.searchParams.get('error');
            setError(errorParam);
            url.searchParams.delete('error');
            window.history.replaceState({}, '', url.href);
            setRedirectUrl('');
            if (errorParam) {
                return; // Skip navigation if there's an error
            }
            navigate('/');
        }
    }, [redirectUrl, navigate]);


    return (
        <>
            <div className="h-full mx-auto sm:pt-15  pt-16 px-0" style={{ minWidth: "300px" }}>
                <div className="lg:flex xl:w-9/12 sm:w-10/12 w-11/12 mx-auto">
                    <div className="w-full " style={{ background: "#ffffff" }}>
                        <div className="w-full mx-auto">
                            <div className="my-6">
                                <div className="lg:grid  lg:grid-cols-2 block">
                                    <div className="w-11/12 md:my-2 my-6 mx-auto me-auto">
                                        <div className="w-full text-left">
                                            <h4 className="font16-res-400" style={{ color: "#505050" ,  fontWeight: "550" }}>
                                                Untuk masuk dengan kode kelas
                                            </h4>
                                            <ul  className="font14-res-300" style={{ color: "#6c6c6c" }}>
                                                <li className="my-3 list-disc">Gunakan akun resmi yang terauthentikasi</li>
                                                <li className="my-3 list-disc">
                                                    Gunakan kode kelas dengan 7 huruf atau angka, dan tanpa spasi dan dengan tiga huruf depan Spc
                                                </li>
                                                <li className="my-3 list-disc">
                                                    Gunakan kode kelas dengan 7 huruf atau angka, dan tanpa spasi dan dengan tiga huruf depan Spc
                                                </li>
                                            </ul>
                                            <p className="font13-res-300" style={{ color: "#777676" }}>
                                                Jika Anda kesulitan bergabung dengan kelas, buka artikel Pusat Bantuan
                                            </p>
                                        </div>
                                    </div>
                                    <form onSubmit={handleSubmit}>
                                        <div className="md:border  border-radius-8 border-gray-100 md:px-6 md:pt-6 px-4 ">
                                            <div className="text-left">
                                                <p className="font16-res-400" style={{  color: "#595959", fontWeight: "500" }}>
                                                    Bergabung ke dalam kelas
                                                </p>
                                                <p className="font14-res-300" style={{ color: "#737373" }}>
                                                    Tanyakan kode kelas kepada guru Anda, lalu masukkan di sini.
                                                </p>
                                                <div>
                                                    <div className="flex mt-2">
                                                        <input
                                                            id="classname"
                                                            onChange={onChangeClassname}
                                                            placeholder="Nama kelas"
                                                            className="md:w-10/12 w-full py-2.5 px-4 font15-res-300"
                                                            style={{ border: "1px solid #C9C5C5", borderRadius: "4px 0px 0px 4px" }}
                                                            type="text"
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="flex mt-2">
                                                        <input
                                                            id="code"
                                                            onChange={onChangeCode}
                                                            placeholder="Kode Kelas"
                                                            className="md:w-10/12 w-full py-2.5 px-4 font15-res-300"
                                                            style={{ border: "1px solid #C9C5C5", borderRadius: "4px 0px 0px 4px" }}
                                                            type="text"
                                                        />
                                                    </div>
                                                </div>
                                                {error === "" ? (
                                                    <div className="my-2"></div>
                                                ) : (
                                                    <div className="my-2">
                          <span style={{ fontSize: "14px" }} className={"text-red-600 "}>
                            {error}
                          </span>
                                                    </div>
                                                )}
                                                <div className="flex w-6/12 lg:mt-20 mt-10 md:mb-5 mb-2 text-right">
                                                        <button
                                                            type="submit"
                                                            onClick={handleSubmit}
                                                            className="shadow font15-res-300 weverse-background-btn py-2 lg:px-4 md:px-6 px-8 text-white "
                                                            style={{ borderRadius: "4px"}}
                                                        >
                                                            Bergabung
                                                        </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
