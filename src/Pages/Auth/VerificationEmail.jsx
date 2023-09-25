import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../Config/api";
import {VerificationEmailCardComponent} from "../../Components/Auth/Card/VerificationEmailCard.Component";

function VerificationEmail() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [code, setCode] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorCode, setErrorCode] = useState('');
    const [redirect, setRedirect] = useState("/verification/email");
    const [isLoading, setIsLoading] = useState(false);
    const [redirectPath, setRedirectPath] = useState("/register");

    const getEmail = localStorage.getItem('registrationEmail')

    const handleSuccessResponse = (response) => {
        if (response.data.message === "Sukses verifikasi kode email") {
            let redirectUrl = response.data.redirect_path;
            localStorage.setItem("isVerifyCodeSend", true);
            localStorage.setItem("token", response.data.token);
            setRedirect(redirectUrl); // Set the redirect path in state first
            // Navigate to the new page after setting the state
            navigate(redirectUrl);
        }
    };

    const handleErrorResponse = (response) => {
        if (response.data.status === 406) {
            let redirectUrl = response.data.redirect_path;
            setRedirect(redirectUrl);
            setErrorCode(response.data.errors.code);
            // Navigate to the new page after setting the state
            navigate(redirectUrl);
        }
    };


    const handleGetCode = (event) => {
        event.preventDefault();

        setIsLoading(true); // Start loading indicator

        const formData = {
            email: getEmail,
        }

        api
            .post('/send-verification-code', formData)
            .then((response) => {
                setIsLoading(false); // Stop loading indicator

                if (response.data.status === 200) {
                    if (response.data.message === "Kode verifikasi email telah dikirim, tolong periksa email anda") {
                        localStorage.setItem("isVerifyCodeSend", true);
                        navigate("/verification/email"); // Directly navigate without using the 'redirect' state
                    }
                } else if (response.data.status === 406){
                    if (response.data.errors.code === "Kode verifikasi tidak boleh kosong") {
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
                const { errors } = error.response.data;
                setErrorEmail(errors?.email?.[0] || '');
            });
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        setIsLoading(true); // Start loading indicator

        const formData = {
            email: getEmail,
            code: code,
        }

        api
            .post(`/verify/email`, formData, {
                headers: {
                    'Accept': '*/*',
                    // Other headers if needed
                },
            })
            .then((response) => {
                setIsLoading(false); // Stop loading indicator

                // if (response.data.status === 201) {
                //
                //     if (response.data.message === "Sukses verifikasi kode email") {
                //         let redirectUrl = response.data.redirect_path;
                //         localStorage.setItem("isVerifyCodeSend", true);
                //         localStorage.setItem("token", response.data.token);
                //         setRedirect(redirectUrl);
                //         navigate(redirect);
                //     }
                // }
                // else if (response.data.status === 406){
                //     if (response.data.errors.code === "Kode verifikasi tidak boleh kosong"){
                //         let redirectUrl = response.data.redirect_path;
                //         setRedirect(redirectUrl);
                //         setErrorCode(response.data.errors.code);
                //         navigate(redirect);
                //     } else if (response.data.errors.code === "Kode verifikasi tidak sama"){
                //         let redirectUrl = response.data.redirect_path;
                //         setRedirect(redirectUrl);
                //         setErrorCode(response.data.errors.code);
                //         navigate(redirect);
                //     } else if (response.data.errors.code === "Akun tidak ditemukan"){
                //         let redirectUrl = response.data.redirect_path;
                //         setRedirect(redirectUrl);
                //         setErrorCode(response.data.errors.code);
                //         navigate(redirect);
                //     }
                //     else if (response.data.errors.code === "Email tidak boleh kosong"){
                //         let redirectUrl = response.data.redirect_path;
                //         setRedirect(redirectUrl);
                //         setErrorCode(response.data.errors.code);
                //         navigate(redirect);
                //     }
                // }
                if (response.data.status === 201) {
                    handleSuccessResponse(response);
                } else if (response.data.status === 406) {
                    handleErrorResponse(response);
                }
            })
            .catch((error) => {
                setIsLoading(false); // Stop loading indicator
                const { errors } = error.response.data;
                setErrorCode(errors?.code?.[0] || '');
            });
    }

    console.log(isLoading)

    return (
        <>
            <div className="w-full md:py-6 py-0" style={{ background: "#FAFBFC", minWidth: "280px" }}>
                <div className="xl:w-6/12 lg:w-7/12 md:w-9/12 mx-auto">
                    <div className="md:w-8/12 w-full mx-auto">
                        <VerificationEmailCardComponent
                            handleSubmit={(e) => handleSubmit(e)}
                            handleGetCode={(e) => handleGetCode(e)}
                            email={email}
                            code={code}
                            setEmail={setEmail}
                            setCode={setCode}
                            errorEmail={errorEmail}
                            errorCode={errorCode}
                        />
                    </div>
                </div>
            </div>

            {isLoading && (
                <div className="fixed gap-2 inset-0 flex items-center justify-center bg-white opacity-100">
                    {/*<div className="absolute gap-2 inset-0 flex items-center h-full justify-center bg-white opacity-100">*/}
                    <div
                        className="animate-spin rounded-full border-r-gray-50 border-l-gray-50  border-b-gray-50  w-8 h-8 md:h-10 md:w-10 border-t-4 border-purple-700"></div>


                </div>
            )}
        </>
    );
}

export default VerificationEmail;
