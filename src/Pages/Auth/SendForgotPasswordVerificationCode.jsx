import React, {useEffect, useRef, useState} from "react";
import { useNavigate } from "react-router-dom";
import api from "../../Config/api";
import {VerificationEmailCardComponent} from "../../Components/Auth/Card/Verification/VerificationEmailCard.Component";
import {
    SendForgotPasswordVerificationCodeComponent
} from "../../Components/Auth/Card/Password/SendForgotPasswordVerificationCodeComponent";

function SendForgotPasswordVerificationCode() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [redirect, setRedirect] = useState("/verification/email");
    const [isLoading, setIsLoading] = useState(false);
    const [redirectPath, setRedirectPath] = useState("/Register");

    const inputRefCode = useRef(null);

    const [showAlert, setShowAlert] = useState(false);



    const handleSubmit= (event) => {

        event.preventDefault();

        setIsLoading(true); // Start loading indicator

        const formData = {
            email: email,
        }

        setShowAlert(true);

        api
            .post('/send/code/change/password', formData , {
                'Accept': '*/*',
            })
            .then((response) => {
                console.log(response)
                localStorage.setItem('requestCodeEmail' , email)
                setIsLoading(false); // Stop loading indicator

                console.log(response.data.message === "Kode verifikasi untuk perubahan password sudah dikirimkan, silahkan cek email anda")
                if (response.data.status === 201) {
                    if (response.data.message === "Kode verifikasi untuk perubahan password sudah dikirimkan, silahkan cek email anda") {
                        navigate(response.data.redirect_path);
                    }
                } else if (response.data.status === 406){
                    if (response.data.errors.code === "Email tidak boleh kosong") {
                        let redirectUrl = response.data.redirect_path;
                        setRedirectPath(redirectUrl);
                        setErrorEmail(response.data.errors.email);
                        // Navigate after setting the necessary values
                        navigate(redirectUrl);
                    } else if (response.data.errors.email === "Terjadi error") {
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
                console.log(errors)
                setErrorEmail(errors?.email?.[0] || '');
            });
    }

    return (
        <>
            <div className="w-full md:py-6 py-0 h-screen" style={{ background: "#FAFBFC", minWidth: "280px" }}>
                <div className="xl:w-6/12 lg:w-7/12 md:w-9/12 mx-auto">
                    <div className="md:w-8/12 w-full mx-auto">
                        <SendForgotPasswordVerificationCodeComponent
                            handleSubmit={(e) => handleSubmit(e)}
                            email={email}
                            setEmail={setEmail}
                            errorEmail={errorEmail}
                            showAlert={showAlert}
                            setShowAlert={setShowAlert}
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

export default SendForgotPasswordVerificationCode