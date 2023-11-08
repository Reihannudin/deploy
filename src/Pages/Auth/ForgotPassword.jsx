import {ForgotPasswordCardComponent} from "../../Components/Auth/Card/ForgotPasswordCard.Component";
import {useNavigate, useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import api from "../../Config/api";
import bcrypt from "bcryptjs";
import axios from "axios";

function ForgotPassword(){

    const navigate = useNavigate();

    const [password , setPassword] = useState('')
    const [newPassword , setNewPassword] = useState('')
    const [confirmPassword , setConfirmPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false);
    const [redirectPath, setRedirectPath] = useState("/register");

    const [errorPassword , setErrorPassword] = useState('');
    const [errorNewPassword , setErrorNewPassword] = useState('');
    const [errorConfirmPassword , setErrorConfirmPassword] = useState('');

    const bcrypt = require('bcryptjs');
    const salt = bcrypt.genSaltSync(10);

    const handleSubmit = (event) => {
        event.preventDefault();

        setIsLoading(true); // Start loading indicator

        const formData = {
            old_password : password,
            new_password : newPassword ,
            confirm_password : bcrypt.hashSync(confirmPassword, salt),
        }

        const token = localStorage.getItem('token')

        console.log(bcrypt.hashSync(password, salt));
        console.log(formData);

        api
            .put(`/edit/profile/password`, formData , {
                "Authorization: " : "Bearer " + token,
            })
            .then((response) => {
                console.log(response);
                setIsLoading(false); // Stop loading indicator
                if (response.data.status === 201) {
                    console.log(response.data.message);
                    if (response.data.message === "Berhasil memperbarui password") {
                        let redirectUrl = response.data.redirect_path;
                        setRedirectPath(redirectUrl);
                        navigate(redirectUrl);
                    }
                } else if (response.data.status === 406) {

                    console.log(response.data.status)
                    console.log(response.data.errors)
                    console.log(response.data.errors.password)

                    if (response.data.errors.password === "Password lama tidak boleh kosong") {
                        let redirectUrl = response.data.redirect_path;
                        setErrorPassword(response.data.errors.password);
                        setRedirectPath(redirectUrl);
                        navigate(redirectUrl);
                        // setErrorPassword('');

                    } else if (response.data.errors.password === "Password baru tidak boleh kosong") {
                        let redirectUrl = response.data.redirect_path;
                        setRedirectPath(redirectUrl);
                        setErrorNewPassword(response.data.errors.password);
                        navigate(redirectUrl);
                    } else if (response.data.errors.password === "Password baru harus memiliki setidaknya 8 karakter") {
                        let redirectUrl = response.data.redirect_path;
                        setRedirectPath(redirectUrl);
                        setErrorNewPassword(response.data.errors.password);
                        navigate(redirectUrl);
                    } else if (response.data.errors.password === "Konfirmasi password tidak boleh kosong") {
                        let redirectUrl = response.data.redirect_path;
                        setRedirectPath(redirectUrl);
                        setErrorConfirmPassword(response.data.errors.password);
                        navigate(redirectUrl);
                    }
                    else if (response.data.errors.password === "Password lama tidak cocok") {
                        let redirectUrl = response.data.redirect_path;
                        setRedirectPath(redirectUrl);
                        setErrorPassword(response.data.errors.password);
                        navigate(redirectUrl);
                    }
                    else if (response.data.errors.password === "Password baru harus sesuai dengan konfirmasi password") {
                        let redirectUrl = response.data.redirect_path;
                        setRedirectPath(redirectUrl);
                        setErrorNewPassword(response.data.errors.password);
                        navigate(redirectUrl);
                    }
                }
            })
            .catch((error) => {
                setIsLoading(false); // Stop loading indicator
                const { errors } = error.response.data;
            });
    };

    console.log("error main " , errorPassword)
    console.log("error main " , errorNewPassword)
    console.log("error main " , errorConfirmPassword)


    return(
        <>
            <div className="w-full md:py-6 py-0" style={{ background:"#FAFBFC" , minWidth:"385px"}}>
                <div className="xl:w-6/12 lg:w-7/12 md:w-9/12  mx-auto">
                    <div className="md:w-8/12   w-full mx-auto">
                        <ForgotPasswordCardComponent
                            password={password}
                            newPassword={newPassword}
                            confirmPassword={confirmPassword}
                            setPassword={setPassword}
                            setNewPassword={setNewPassword}
                            setConfirmPassword={setConfirmPassword}
                            errorPassword={errorPassword}
                            errorNewPassword={errorNewPassword}
                            errorConfirmPassword={errorConfirmPassword}
                            handleSubmit={(e)=> handleSubmit(e)}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ForgotPassword