import { RegisterCardComponent } from "../../Components/Auth/Card/RegisterCard.Component";
import React, { useEffect, useState } from "react";
import { redirect, useNavigate, useSearchParams } from "react-router-dom";
import api from "../../Config/api";

function Register() {
    const navigate = useNavigate();
    localStorage.setItem("isLogin", false);

    const [email, setEmail] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [redirectPath, setRedirectPath] = useState("/register");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        setIsLoading(true); // Start loading indicator

        const formData = {
            email: email,
        };

        api
            .post(`/register`, formData)
            .then((response) => {
                setIsLoading(false); // Stop loading indicator
                if (response.data.status === 201) {
                    if (response.data.message === "Berhasil membuat akun dan Kode verifikasi email telah dikirim, tolong periksa inbox email anda!") {
                        let redirectUrl = response.data.redirect_path;
                        localStorage.setItem("registrationEmail", email);
                        localStorage.setItem("isVerifyCodeSend", true);
                        setRedirectPath(redirectUrl);
                        navigate(redirectUrl);
                    } else if (response.data.message === "Silahkan verifikasi email anda terlebih dahulu") {
                        let redirectUrl = response.data.redirect_path;
                        localStorage.setItem("registrationEmail", email);
                        setRedirectPath(redirectUrl);
                        // Navigate after setting the necessary values
                        navigate(redirectUrl);
                    } else if (response.data.message === "Akun sudah terdaftar, silahkan login") {
                        let redirectUrl = response.data.redirect_path;
                        localStorage.setItem("registrationEmail", email);
                        setRedirectPath(redirectUrl);
                        // Navigate after setting the necessary values
                        navigate(redirectUrl);
                    }
                }
                else if (response.data.status === 406) {
                    console.log(response.data.errors.email);
                    if (response.data.errors.email === "Email tidak boleh kosong") {
                        let redirectUrl = response.data.redirect_path;
                        setRedirectPath(redirectUrl);
                        setErrorEmail(response.data.errors.email);
                        // Navigate after setting the necessary values
                        navigate(redirectUrl);
                    } else if (response.data.errors.email === "Format email tidak valid") {
                        let redirectUrl = response.data.redirect_path;
                        setErrorEmail(response.data.errors.email);
                        setRedirectPath(redirectUrl);
                        // Navigate after setting the necessary values
                        navigate(redirectUrl);
                    }
                }


            })
            .catch((error) => {
                setIsLoading(false); // Stop loading indicator
                const { errors } = error.response.data;
                setErrorEmail(errors?.email?.[0] || "");
            });
    };

    return (
        <>
            <div
                className="w-full md:py-6 py-0"
                style={{ background: "#FAFBFC", minWidth: "300px" }}
            >
                <div className="xl:w-6/12 lg:w-7/12 md:w-9/12  mx-auto">
                    <div className="lg:w-8/12 md:w-9/12 sm:w-10/12   w-full mx-auto">
                        <RegisterCardComponent
                            handleSubmit={(e) => handleSubmit(e)}
                            errorEmail={errorEmail}
                            setEmail={setEmail}
                            email={email}
                        />
                    </div>
                </div>
            </div>
            {isLoading && (
                <div className="fixed gap-2 inset-0 flex items-center justify-center bg-white opacity-100">
                {/*<div className="absolute gap-2 inset-0 flex items-center h-full justify-center bg-white opacity-100">*/}
                    <div className="bg-white py-2 ">
                        <div className="spinner">
                            <img src="/assets/planet.svg" style={{ height:"30px"}} alt="Loading..." />
                        </div>
                    </div>
                    <div className="py-3">
                        <p className="text-purple-600 font16-res-400"> Loading...</p>
                    </div>
                </div>
            )}

        </>
    );
}

export default Register;
