import {useNavigate, useSearchParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import bcrypt from "bcryptjs";
import axios from "axios";
import CustomAlert from "../../Helper/CustomAlert.Component";

export const SendForgotPasswordVerificationCodeComponent = ({
                                                   handleSubmit , showAlert , setShowAlert , email , setEmail, errorEmail ,
                                               }) => {
    const onChangeEmail = (event) => {
        const email = event.target.value;
        setEmail(email)
    }

    console.log(showAlert)


    return(
        <>
            <div className="bg-white py-6 mb-10 px-10" style={{ borderRadius:"8px"}}>
                <div className="w-full max-w-sm mx-auto">
                    <div className="my-8" style={{ height:"40px"}}>
                        <img className="h-full" src="/assets/spaceSkool-logo-account.svg" alt=""/>
                    </div>
                    <div className="mx-0 text-left">
                        <h1 className="font-bold" style={{ fontSize:"26px"}}>Verifikasi akun anda, untuk mengubah password.</h1>
                    </div>
                    <div className="text-left">
                        <div >
                            <div className="mt-8 mb-4">
                                <label style={{ color:"#777575" , fontSize:"14px"}}>Email Anda</label>
                                <div className="flex">
                                    <input id="email"  value={email} type="email" onChange={onChangeEmail} className="w-full py-3 border-b-gray-300" style={{ borderBottom:"1px solid #ebebeb"}} placeholder="Masukan Email Anda"/>
                                </div>
                                {errorEmail === '' ? (
                                    <div className="my-2">
                                    </div>
                                ): (
                                    <div className="my-2">
                                        <span className={"text-red-600 font14-res-300"}>{errorEmail}</span>
                                    </div>
                                )}
                                {errorEmail === '' ? (
                                    <div className="my-2">
                                    </div>
                                ): (
                                    <div className="my-2">
                                        <span className={"text-red-600 font14-res-300"}>{errorEmail}</span>
                                    </div>
                                )}
                            </div>
                            <form onSubmit={handleSubmit}>
                                <button className="w-full mt-32 md:mt-36" onSubmit={handleSubmit}>
                                    <div className="w-full font-medium py-2.5 text-center border border-purple-600 rounded text-white bg-purple-600 hover:bg-purple-700">
                                        Kirim Kode Verifikasi
                                    </div>
                                </button>
                            </form>
                            <div className="flex mt-4 w-full">
                                <div className="w-full mx-5 my-auto" style={{ height: "1px", }}></div>
                                 </div>



                        </div>

                    </div>
                </div>
            </div>
            {showAlert && (
                <div id="drop-action" className="fixed inset-0 flex items-center justify-center"  style={{ zIndex: "10000" }}>
                    <button
                        onClick={() => setShowAlert(false)} // Close the alert when clicking the backdrop
                        className="bg-gray-500 bg-opacity-30 w-full h-full fixed top-0 left-0"
                        style={{ zIndex: "10000" }}
                    ></button>

                    <CustomAlert
                        message={`Code verifikasi email telah terkirim silahkan cek email anda!`}
                        onClose={() => setShowAlert(false)} // Close the alert when using the custom alert's close button
                    />
                </div>
            )}
        </>
    )
}