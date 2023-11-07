import {AddPasswordCardComponent} from "../../Components/Auth/Card/AddPasswordCard.Component";
import {useNavigate, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import bcrypt from "bcryptjs";
import api from "../../Config/api";

function AddPassword(){

    const navigate = useNavigate();

    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('')
    const [confirmPassword , setConfirmPassword] = useState('');
    const [errorEmail , setErrorEmail] = useState('');
    const [errorPassword , setErrorPassword] = useState('');
    const [errorConfirmPassword , setErrorConfirmPassword] = useState('');
    const [redirect, setRedirect] = useState("/add/password");
    const [isLoading, setIsLoading] = useState(false);
    const [redirectPath, setRedirectPath] = useState("/register");

    const params = new URLSearchParams(window.location.search);
    const token = params.get('token');

    const urlEmail = params.get('token');
    if (!email) {
        setEmail(urlEmail)
        localStorage.setItem('registrationEmail', email);
    }

// Check if the 'token' parameter is present in the URL
    if (token) {
        // Store the 'token' in localStorage
        localStorage.setItem('token', token);
    }

    const getEmail = localStorage.getItem('registrationEmail');
    const getToken = localStorage.getItem('token');

    useEffect(() => {
        if (!getEmail && !getToken) {
            navigate("/register");
        } else {
            setEmail(getEmail);
        }
    }, [navigate]);

    const bcrypt = require('bcryptjs');
    const salt = bcrypt.genSaltSync(10);

    const handleSubmit = async (event) => {
        event.preventDefault();

        setIsLoading(true); // Start loading indicator

        const formData = {
            password: await bcrypt.hash(password, salt), // Hash the password
            confirm_password: confirmPassword
        }

        let token = localStorage.getItem('token');

        api
            .post(`/add/password`, formData , {
                "Content-Type" : "multipart/form-data" ,
                "Authorization" : "Bearer " + token,
            })
            .then((response) => {
                setIsLoading(false); // Stop loading indicator
                if (response.data.status === 201) {
                    if (response.data.message === "Berhasil menambahkan password!") {
                        let redirectUrl = response.data.redirect_path;
                        localStorage.setItem("isVerifyCodeSend", false);
                        setRedirect(redirectUrl);
                        navigate(redirectUrl);
                    } else if (response.data.message === "Sepertinya anda belum terauthentikasi") {
                        let redirectUrl = response.data.redirect_path;
                        localStorage.setItem("isVerifyCodeSend", false);
                        setRedirect(redirectUrl);
                        navigate(redirectUrl);
                    } else if (response.data.message === "Akun sudah terdaftar, silahkan login") {
                        let redirectUrl = response.data.redirect_path;
                        localStorage.setItem("registrationEmail", email);
                        setRedirect(redirectUrl);
                        navigate(redirectUrl);
                    }
                } else if (response.data.status === 406) {

                    setIsLoading(false);
                    if (response.data.errors.password === "Sepertinya anda belum terauthentikasi") {
                        let redirectUrl = response.data.redirect_path;
                        setRedirect(redirectUrl);
                        setErrorEmail(response.data.errors.password);
                        navigate(redirect);
                    } else if (response.data.errors.password === "Password tidak boleh kosong") {
                        let redirectUrl = response.data.redirect_path;
                        setErrorConfirmPassword(response.data.errors.password);
                        setRedirect(redirectUrl);
                        navigate(redirect);
                    }  else if (response.data.errors.password === "Password harus memiliki setidaknya 8 karakter") {
                        let redirectUrl = response.data.redirect_path;
                        setErrorConfirmPassword(response.data.errors.password);
                        setRedirect(redirectUrl);
                        navigate(redirect);
                    }  else if (response.data.errors.password === "Konfirmasi password tidak boleh kosong") {
                        let redirectUrl = response.data.redirect_path;
                        setErrorConfirmPassword(response.data.errors.password);
                        setRedirect(redirectUrl);
                        navigate(redirect);
                    }  else if (response.data.errors.password === "Format password tidak valid") {
                        let redirectUrl = response.data.redirect_path;
                        setErrorConfirmPassword(response.data.errors.password);
                        setRedirect(redirectUrl);
                        navigate(redirect);
                    } else if (response.data.errors.password === "Pastikan password anda sama saat tahap konfirmasi") {
                        let redirectUrl = response.data.redirect_path;
                        setErrorConfirmPassword(response.data.errors.password);
                        setRedirect(redirectUrl);
                        navigate(redirect);
                    }
                }
            })
            .catch((error) => {
                setIsLoading(false); // Stop loading indicator
                const {errors} = error.response.data;
                setErrorPassword(errors?.password?.[0] || '');
                setErrorConfirmPassword(errors?.confirm_password?.[0] || '');
            });
    }

    return(
        <>
            <div className="w-full md:py-6 py-0 h-screen" style={{ background:"#FAFBFC" , minWidth:"280px"}}>
                <div className="xl:w-6/12 lg:w-7/12 md:w-9/12  mx-auto">
                    <div className="md:w-8/12   w-full mx-auto">
                        <AddPasswordCardComponent
                            handleSubmit={(e) => handleSubmit(e)}
                            password={password}
                            setPassword={setPassword}
                            confirmPassword={confirmPassword}
                            setConfirmPassword={setConfirmPassword}
                            errorEmail={errorEmail}
                            errorPassword={errorPassword}
                            errorConfirmPassword={errorConfirmPassword}
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
    )
}

export default AddPassword