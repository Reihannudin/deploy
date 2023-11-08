import React, {useEffect, useState} from "react";
import bcrypt from "bcryptjs";
import {useNavigate, useSearchParams} from "react-router-dom";
import axios from "axios";


export const ForgotPasswordCardComponent = ({
                                                handleSubmit,
                                                password, newPassword, confirmPassword,
                                                errorPassword, errorNewPassword, errorConfirmPassword,
                                                setPassword, setNewPassword, setConfirmPassword,
                                            }) => {

    const bcrypt = require('bcryptjs');
    const salt = bcrypt.genSaltSync(10);

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


    return(
        <>
            <div className="bg-white py-6 mb-10 px-10 " style={{ borderRadius:"8px"}}>
                <div className="w-full max-w-sm mx-auto">

                <div className="my-8" style={{ height:"40px"}}>
                        <img className="h-full" src="/assets/spaceSkool-logo-account.svg" alt=""/>
                    </div>
                    <div className="mx-0 text-left">
                        <h1 className="font-bold" style={{ fontSize:"26px"}}>Setel ulang kata sandi Anda Akun SpaceSkool.</h1>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="text-left">
                            <div >
                                <div className="my-8">
                                    <label style={{ color:"#777575" , fontSize:"14px"}}>Password Anda</label>
                                    <div className="flex">
                                        <input id="password"   value={password} type="password" onChange={onChangePassword} className="w-full py-3 border-b-gray-300" style={{ borderBottom:"1px solid #ebebeb"}} placeholder="Password anda"/>
                                        <button onClick={VisibiliyPassword}>
                                            <i className="fa-solid fa-eye-slash" style={{ color:"#777575"}}>
                                            </i>
                                        </button>
                                    </div>
                                    {errorPassword === '' ? (
                                        <div className="my-2">
                                        </div>
                                    ): (
                                        <div className="my-2">
                                            <span style={{ fontSize:"14px"}} className={"text-red-600 "}>{errorPassword}</span>
                                        </div>
                                    )}
                                </div>
                                <div className="my-8">
                                    <label style={{ color:"#777575" , fontSize:"14px"}}>Password Baru</label>
                                    <div className="flex">
                                        <input id="new_password" value={newPassword} type="password" onChange={onChangeNewPassword} className="w-full py-3 border-b-gray-300" style={{ borderBottom:"1px solid #ebebeb"}} placeholder="Password baru anda"/>
                                        <button onClick={VisibiltyNewPassword}>
                                            <i className="fa-solid fa-eye-slash" style={{ color:"#777575"}}>
                                            </i>
                                        </button>
                                    </div>
                                    {errorNewPassword === '' ? (
                                        <div className="my-2">
                                        </div>
                                    ): (
                                        <div className="my-2">
                                            <span style={{ fontSize:"14px"}} className={"text-red-600 "}>{errorNewPassword}</span>
                                        </div>
                                    )}
                                </div>
                                <div className="my-8">
                                    <label style={{ color:"#777575" , fontSize:"14px"}}>Konfirmasi Password</label>
                                    <div className="flex">
                                        <input id="confirm_password"   value={confirmPassword} type="password" onChange={onChangeConfirmPassword} className="w-full py-3 border-b-gray-300" style={{ borderBottom:"1px solid #ebebeb"}} placeholder="Konfirmasi password"/>
                                        <button onClick={VisibiltyConfirmPassword}>
                                            <i className="fa-solid fa-eye-slash" style={{ color:"#777575"}}>
                                            </i>
                                        </button>
                                    </div>
                                    {errorConfirmPassword === '' ? (
                                        <div className="my-2">
                                        </div>
                                    ): (
                                        <div className="my-2">
                                            <span style={{ fontSize:"14px"}} className={"text-red-600 "}>{errorConfirmPassword}</span>
                                        </div>
                                    )}
                                </div>
                                    <button className="w-full mt-8" onSubmit={handleSubmit} >
                                        <div className="w-full font-medium py-2.5 text-center border border-purple-600 rounded text-white bg-purple-600 hover:bg-purple-700">
                                            Perbarui password
                                        </div>
                                    </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}