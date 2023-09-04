import {useEffect, useState} from "react";
import bcrypt from "bcryptjs";
import {useNavigate, useSearchParams} from "react-router-dom";
import axios from "axios";


export const ForgotPasswordCardComponent = () => {

    const [searchParams ] = useSearchParams();
    const [password , setPassword] = useState('')
    const [newPassword , setNewPassword] = useState('')
    const [confirmPassword , setConfirmPassword] = useState('')
    const urlParams = new URLSearchParams(window.location.search);
    const [email , setEmail] = useState('');
    const [error , setError] = useState('');
    const [redirectUrl, setRedirectUrl] = useState('');
    const navigate = useNavigate();

    const bcrypt = require('bcryptjs');
    const salt = bcrypt.genSaltSync(10);

    useEffect(() => {
        const email = searchParams.get("email");
        setEmail(email)
    } , [searchParams])

    useEffect(() => {
        const error = searchParams.get('error');
        setError(error)
    } , [searchParams])


    const onChangePassword = (event) => {
        const password = event.target.value;
        setPassword(password)
    }

    const onChangeNewPassword = (event) => {
        const newPassword = event.target.value;
        setNewPassword(newPassword)
     }

    const onChangeConfirmPassword = (event) => {
        const newPassword = event.target.value;
        setConfirmPassword(newPassword)
    }

    const VisibiliyPassword = () => {
        const visibility = document.getElementById('password')
        if (visibility.type === "password"){
            visibility.type = "text"
        } else if (visibility.type === "text"){
            visibility.type = "password"
        }
    }

    const VisibiltyNewPassword = () => {
        const visibility = document.getElementById('new_password')
        if (visibility.type === "password"){
            visibility.type = "text"
        } else if (visibility.type === "text"){
            visibility.type = "password"
        }
    }

    const VisibiltyConfirmPassword = () => {
        const visibility = document.getElementById('confirm_password')
        if (visibility.type === "password"){
            visibility.type = "text"
        } else if (visibility.type === "text"){
            visibility.type = "password"
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = {
            email : email,
            password : bcrypt.hashSync(password, salt),
            confirm_password : confirmPassword,
            new_password :  bcrypt.hashSync(newPassword, salt),
        }

        axios
            // .post(`https://rest-api.spaceskool.site/public/api/add/password` , formData)
            .post(`http://127.0.0.1:8000/api/add/password` , formData)
            .then((response) => {
                console.log(response.data);
                const {redirectUrl} = response.data;
                setRedirectUrl(redirectUrl);
            })
            .catch((error) => {
                const {errors} = error.response.data;
                setError(errors?.error?.[0] || '');
            }
        );
    }

    useEffect(() => {
        if (redirectUrl){
            const url = new URL(redirectUrl);
            const errorParam = url.searchParams.get('error');
            setError(errorParam);

            window.history.replaceState({}, '', url.href);

            const statusParam = url.searchParams.get('status');

            if (statusParam === "201"){
                navigate(`/login`)
            }

            url.searchParams.delete('error');
            url.searchParams.delete('status');

            setRedirectUrl('');
        }
    } , [redirectUrl])


    return(
        <>
            <div className="bg-white py-6 mb-10 px-10 " style={{ borderRadius:"8px"}}>
                <div className="w-full max-w-sm mx-auto">

                <div className="my-8" style={{ height:"40px"}}>
                        <img className="h-full" src="/assets/spaceSkool-logo-account.svg" alt=""/>
                    </div>
                    <div className="mx-0 text-left">
                        <h1 className="font-bold" style={{ fontSize:"26px"}}>Reset your password SpaceSkool Account.</h1>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="text-left">
                            <div >
                                <div className="my-8">
                                    <label style={{ color:"#777575" , fontSize:"14px"}}>Password</label>
                                    <div className="flex">
                                        <input id="password" required  value={password} type="password" onChange={onChangePassword} className="w-full py-3 border-b-gray-300" style={{ borderBottom:"1px solid #ebebeb"}} placeholder="Password anda"/>
                                        <button onClick={VisibiliyPassword}>
                                            <i className="fa-solid fa-eye-slash" style={{ color:"#777575"}}>
                                            </i>
                                        </button>
                                    </div>
                                </div>
                                <div className="my-8">
                                    <label style={{ color:"#777575" , fontSize:"14px"}}>New Password</label>
                                    <div className="flex">
                                        <input id="new_password" required  value={newPassword} type="password" onChange={onChangeNewPassword} className="w-full py-3 border-b-gray-300" style={{ borderBottom:"1px solid #ebebeb"}} placeholder="Password baru anda"/>
                                        <button onClick={VisibiltyNewPassword}>
                                            <i className="fa-solid fa-eye-slash" style={{ color:"#777575"}}>
                                            </i>
                                        </button>
                                    </div>
                                </div>
                                <div className="my-8">
                                    <label style={{ color:"#777575" , fontSize:"14px"}}>Confirm Password</label>
                                    <div className="flex">
                                        <input id="confirm_password" required  value={confirmPassword} type="password" onChange={onChangeConfirmPassword} className="w-full py-3 border-b-gray-300" style={{ borderBottom:"1px solid #ebebeb"}} placeholder="Konfirmasi password"/>
                                        <button onClick={VisibiltyConfirmPassword}>
                                            <i className="fa-solid fa-eye-slash" style={{ color:"#777575"}}>
                                            </i>
                                        </button>
                                    </div>
                                </div>
                                <a href={`http://127.0.0.1:8000/signup/add/information/${email}`}>
                                    {/*`http://127.0.0.1:8000/login/form?email=${email}&password=${password}`*/}
                                    <div  className="w-full font-medium py-2.5 text-center" style={{ color:"#ffffff" , borderRadius:"4px" , fontSize:"16px" , border:"1px solid #7B52F2" , background:"#7B52F2"}}>Save</div>
                                </a>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}