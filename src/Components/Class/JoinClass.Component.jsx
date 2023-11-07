import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import api from "../../Config/api";

export const JoinClassComponent = () => {

    const navigate = useNavigate();

    const [classname , setClassname] = useState('');
    const [code, setCode] = useState("");
    const [errorClassname, setErrorClassname] = useState('');
    const [errorCode, setErrorCode] = useState('');

    const [redirectUrl, setRedirectUrl] = useState('');
    const [redirectPath, setRedirectPath] = useState("/create/class");
    const [isLoading, setIsLoading] = useState(false);

    const [searchParams] = useSearchParams();

    const [error, setError] = useState("");

    useEffect(() => {
        const error = searchParams.get("error");
        setError(error);
    }, [searchParams]);


    const onChangeClassname = (event) => {
        const classname = event.target.value;
        setClassname(classname);
    };

    const onChangeCode = (event) => {
        const code = event.target.value;
        setCode(code);
    };

    useEffect(() => {
        const error = searchParams.get("error");
        setError(error);
    }, [searchParams]);


    const handleSubmit = (event) => {
        event.preventDefault();

        setIsLoading(true); // Start loading indicator

        const formData = {
            classname,
            code
        };

        api
            .post(`/join/classes`, formData)
            .then((response) => {
                setIsLoading(false); // Stop loading indicator
                if (response.data.status === 201) {
                    if (response.data.message === "Berhasil bergabung kedalam kelas!") {
                        let redirectUrl = response.data.redirect_path;
                        setRedirectPath(redirectUrl);
                        navigate(redirectUrl);
                    }
                }
                else if (response.data.status === 406) {
                    if (response.data.errors === "Nama kelas dan kode kelas tidak boleh kosong") {
                        let redirectUrl = response.data.redirect_path;
                        setRedirectPath(redirectUrl);
                        setErrorClassname('');
                        setErrorCode('');
                        setErrorClassname(response.data.errors);
                        setErrorCode(response.data.errors);
                        navigate(redirectUrl);
                    } else if (response.data.errors === "Nama kelas tidak boleh kosong") {
                        let redirectUrl = response.data.redirect_path;
                        setRedirectPath(redirectUrl);
                        setErrorClassname('');
                        setErrorCode('');
                        setErrorClassname(response.data.errors);
                        // setErrorCode(response.data.errors);
                        navigate(redirectUrl);
                    }
                    else if (response.data.errors === "Kode kelas tidak boleh kosong") {
                        let redirectUrl = response.data.redirect_path;
                        setRedirectPath(redirectUrl);
                        setErrorClassname('');
                        setErrorCode('');
                        // setErrorClassname(response.data.errors);
                        setErrorCode(response.data.errors);
                        navigate(redirectUrl);
                    }
                    else if (response.data.errors === "Mungkin Tidak ada kelas yang menggunakan Nama dan Kode ini") {
                        let redirectUrl = response.data.redirect_path;
                        setRedirectPath(redirectUrl);
                        setErrorClassname('');
                        setErrorCode('');
                        // setErrorClassname(response.data.errors);
                        setErrorCode(response.data.errors);
                        navigate(redirectUrl);
                    }
                    else if (response.data.errors === "Anda merupakan pemilik kelas.") {
                        let redirectUrl = response.data.redirect_path;
                        setRedirectPath(redirectUrl);
                        setErrorClassname('');
                        setErrorCode('');
                        // setErrorClassname(response.data.errors);
                        setErrorCode(response.data.errors);
                        navigate(redirectUrl);
                    } else if (response.data.errors === "Siswa telah berada dalam kelas tersebut") {
                        let redirectUrl = response.data.redirect_path;
                        setRedirectPath(redirectUrl);
                        setErrorClassname('');
                        setErrorCode('');
                        // setErrorClassname(response.data.errors);
                        setErrorCode(response.data.errors);
                        navigate(redirectUrl);
                    }
                }


            })
            .catch((error) => {
                setIsLoading(false); // Stop loading indicator
                const { errors } = error.response.data;
                setErrorClassname(errors?.classname?.[0] || '');
                setErrorCode(errors?.code?.[0] || '');
            });
    };



    return (
        <>
            <div className="h-full mx-auto p-nav-content-crud px-0" style={{ minWidth: "280px" }}>
                <div className="lg:flex xl:w-10/12 sm:w-10/12 w-11/12 mx-auto">
                    <div className="w-full " style={{ background: "#ffffff" }}>
                        <div className="w-full mx-auto">
                            <div className="my-6">
                                <div className="lg:grid  lg:grid-cols-2 block">
                                    <div className="w-11/12 md:my-2 my-6 mx-auto me-auto">
                                        <div className="w-full text-left">
                                            <h4 className="font16-res-400" style={{ color: "#505050" ,  fontWeight: "550" }}>
                                                Untuk masuk dengan kode kelas
                                            </h4>
                                            <ul  className="font13-label-res-300" style={{ color: "#6c6c6c" }}>
                                                <li className="my-3 list-disc">Gunakan akun resmi yang terauthentikasi</li>
                                                <li className="my-3 list-disc">
                                                    Gunakan kode kelas dengan 7 huruf atau angka, dan tanpa spasi dan dengan tiga huruf depan Spc
                                                </li>
                                                <li className="my-3 list-disc">
                                                    Pastikan Anda Perhatikan tanda baca, seperti spasi, koma dan titik dalam kelas anda!
                                                </li>
                                            </ul>
                                            <p className="font13-label-res-300" style={{ color: "#777676" }}>
                                                Jika Anda kesulitan bergabung dengan kelas, buka artikel Pusat Bantuan
                                            </p>
                                        </div>
                                    </div>
                                    <form onSubmit={handleSubmit}>
                                        <div className="md:border  border-radius-8 border-gray-100 md:px-6 md:pt-6 px-4 ">
                                            <div className="text-left">
                                                <p className="font16-label-res-400" style={{  color: "#595959", fontWeight: "500" }}>
                                                    Bergabung ke dalam kelas
                                                </p>
                                                <p className="font14-label-res-300" style={{ color: "#737373" }}>
                                                    Tanyakan kode kelas kepada guru Anda, lalu masukkan di sini.
                                                </p>
                                                <div>
                                                    <div className="flex mt-2">
                                                        <input
                                                            id="classname"
                                                            onChange={onChangeClassname}
                                                            placeholder="Nama kelas"
                                                            className="md:w-10/12 w-full py-2 sm:py-2.5  px-4 font15-input-res-300"
                                                            style={{ border: "1px solid #C9C5C5", borderRadius: "4px 0px 0px 4px" }}
                                                            type="text"
                                                        />
                                                    </div>
                                                </div>
                                                {errorClassname === "" ? (
                                                    <div className="my-2"></div>
                                                ) : (
                                                    <div className="my-2">
                          <span  className={"text-red-600 font14-label-res-300 "}>
                            {errorClassname}
                          </span>
                                                    </div>
                                                )}
                                                <div>
                                                    <div className="flex mt-2">
                                                        <input
                                                            id="code"
                                                            onChange={onChangeCode}
                                                            placeholder="Kode Kelas"
                                                            className="md:w-10/12 w-full py-2 sm:py-2.5 px-4 font15-input-res-300"
                                                            style={{ border: "1px solid #C9C5C5", borderRadius: "4px 0px 0px 4px" }}
                                                            type="text"
                                                        />
                                                    </div>
                                                </div>
                                                {errorCode === "" ? (
                                                    <div className="my-2"></div>
                                                ) : (
                                                    <div className="my-2">
                          <span className={"text-red-600 font14-label-res-300"}>
                            {errorCode}
                          </span>
                                                    </div>
                                                )}
                                                <div className="flex w-6/12 lg:mt-20 mt-10 md:mb-5 mb-2 text-right">
                                                        <button
                                                            type="submit"
                                                            onClick={handleSubmit}
                                                            className="shadow font15-input-res-300 weverse-background-btn py-2-c lg:px-4 md:px-6 px-6 text-white "
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
