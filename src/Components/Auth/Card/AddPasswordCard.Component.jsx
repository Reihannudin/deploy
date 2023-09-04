import React, {useEffect, useState} from "react";
import {useLocation, useNavigate, useParams, useSearchParams} from "react-router-dom";
import axios from "axios";
import bcrypt from "bcryptjs";
import api from "../../../Config/api";


export const AddPasswordCardComponent = ({
    handleSubmit ,  password , confirmPassword ,
     setPassword , setConfirmPassword ,  errorPassword ,
    errorConfirmPassword , errorEmail
                                         }) => {

    const onChangePassword = (event) => {
        const password = event.target.value;
        setPassword(password)
    }

    const onChangeConfirmPassword = (event) => {
        const confirmpassword = event.target.value;
        setConfirmPassword(confirmpassword)
    }

    console.log(errorConfirmPassword);

    const VisibiliyPassword = () => {
        const visibility = document.getElementById('password')
        if (visibility.type === "password"){
            visibility.type = "text"
        } else if (visibility.type === "text"){
            visibility.type = "password"
        }
    }

    const VisibiliyConfirmPassword = () => {
        const visibility = document.getElementById('confirm_password')
        if (visibility.type === "password"){
            visibility.type = "text"
        } else if (visibility.type === "text"){
            visibility.type = "password"
        }
    }

    return(
        <>
            <div className="bg-white py-6 mb-10 px-10" style={{ borderRadius:"8px"}}>
                <div className="w-full max-w-sm mx-auto">
                    <div className="my-8" style={{ height:"40px"}}>
                        <img className="h-full" src="/assets/spaceSkool-logo-account.svg" alt=""/>
                    </div>
                    <div className="mx-0 text-left">
                        <h1 className="font-bold" style={{ fontSize:"26px"}}>Add Your Password.</h1>
                    </div>

                        <div className="text-left">
                            <div >
                                <div className="mt-8 mb-4">
                                    <label style={{ color:"#777575" , fontSize:"14px"}}>Password</label>
                                    <div className="flex">
                                        <input id="password" required  value={password} type="password" onChange={onChangePassword} className="w-full py-3 border-b-gray-300" style={{ borderBottom:"1px solid #ebebeb"}} placeholder="your password"/>
                                        <button onClick={VisibiliyPassword}>
                                            <div className="bg-white px-3 py-2 radius-100 hover:bg-gray-50 " style={{ height:"40px"}}>
                                                <img className="h-full" src="/assets/visibilty-on.svg" />
                                            </div>
                                        </button>
                                    </div>

                                </div>

                                <div className="mt-0 mb-24">
                                    <label style={{ color:"#777575" , fontSize:"14px"}}>Confirm Password</label>
                                    <div className="flex">
                                        <input id="confirm_password" required  value={confirmPassword} type="password" onChange={onChangeConfirmPassword} className="w-full py-3 border-b-gray-300" style={{ borderBottom:"1px solid #ebebeb"}} placeholder="your confirm password"/>
                                        <button onClick={VisibiliyConfirmPassword}>
                                            <div className="bg-white px-3 py-2 radius-100 hover:bg-gray-50 " style={{ height:"40px"}}>
                                                <img className="h-full" src="/assets/visibilty-on.svg" />
                                            </div>
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
                                    {errorConfirmPassword === '' ? (
                                        <div className="my-2">
                                        </div>
                                    ): (
                                        <div className="my-2">
                                            <span style={{ fontSize:"14px"}} className={"text-red-600 "}>{errorConfirmPassword}</span>
                                        </div>
                                    )}
                                </div>
                                <form onSubmit={handleSubmit}>

                                <button className="w-full mt-16" onSubmit={handleSubmit}>
                                    <div className="w-full font-medium py-2.5 text-center border border-purple-600 rounded text-white bg-purple-600 hover:bg-purple-700">
                                        Add Password
                                    </div>
                                </button>
                                </form>

                            </div>

                        </div>
                </div>
            </div>
        </>
    )
}