import React, {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import bcrypt from "bcryptjs";


export const EditProfilePasswordComponent = ({
                                                 handleSubmit,
                                                 password, newPassword, confirmPassword,
                                                 errorPassword, errorNewPassword, errorConfirmPassword,
                                                 setPassword, setNewPassword, setConfirmPassword,

                                             }) => {

    const bcrypt = require('bcryptjs');
    const salt = bcrypt.genSaltSync(10);

    console.log("error component " , errorPassword)
    console.log("error component " , errorNewPassword)
    console.log("error component " , errorConfirmPassword)

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
            <div className=' h-full mx-auto md:pt-20  pt-20 px-0' style={{ minWidth:"300px"}}>
                <div className="lg:flex md:w-9/12 sm:w-10/12 w-11/12 mx-auto">
                    <div  className="w-full" style={{ background:"#ffffff"}}>
                        <div className=" w-full mx-auto">
                            <div className="my-2">
                                    <div className="w-full mx-auto   ">
                                        <div className="sm:flex block w-full text-left ">
                                            <div className="block  w-full text-left " >
                                                <div className="mt-3 w-full mx-auto">
                                                    <label className="font14-res-300" style={{ color:"#777575" }}>Password Anda</label>
                                                    <div className="flex  w-full">
                                                        <input  id="password"   value={password}  onChange={onChangePassword}   type="password" className="md:w-11/12 w-full py-2.5 font16-res-300 border-b-gray-300" style={{ borderBottom:"1px solid #ebebeb"}} placeholder="Isi dengan password anda"/>
                                                        <button onClick={VisibiliyPassword}>
                                                            <div
                                                                className="bg-white px-3 py-2 radius-100 hover:bg-gray-50"
                                                                style={{ height: "40px" }}
                                                            >
                                                                <img
                                                                    className="h-full"
                                                                    src="/assets/visibilty-on.svg"
                                                                    alt=""
                                                                />
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
                                                </div>
                                                <div className="mt-3 w-full mx-auto">
                                                    <label className="font14-res-300" style={{ color:"#777575" }}>Password Baru</label>
                                                    <div className="flex  md:w-11/12 w-full">
                                                        <input id="new_password" value={newPassword} onChange={onChangeNewPassword} type="password" className="md:w-11/12 w-full py-2.5 font16-res-300 border-b-gray-300" style={{ borderBottom:"1px solid #ebebeb"}} placeholder="Buatlah password baru anda"/>
                                                        <button onClick={VisibiltyNewPassword}>
                                                            <div
                                                                className="bg-white px-3 py-2 radius-100 hover:bg-gray-50"
                                                                style={{ height: "40px" }}
                                                            >
                                                                <img
                                                                    className="h-full"
                                                                    src="/assets/visibilty-on.svg"
                                                                    alt=""
                                                                />
                                                            </div>
                                                        </button>
                                                    </div>
                                                    {errorNewPassword === '' ? (
                                                        <div className="my-2">
                                                        </div>
                                                    ): (
                                                        <div className="my-2">
                                                            <span  className={"text-red-600 font14-res-300"}>{errorNewPassword}</span>
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="mt-3 w-full mx-auto">
                                                    <label className="font14-res-300" style={{ color:"#777575" }}>Konfirmasi Password Baru</label>
                                                    <div className="flex  md:w-11/12 w-full">
                                                        <input id="confirm_password"  value={confirmPassword}  onChange={onChangeConfirmPassword} type="password" className="md:w-11/12 w-full py-2.5 font16-res-300 border-b-gray-300" style={{ borderBottom:"1px solid #ebebeb"}} placeholder="Konfirmasi password baru anda"/>
                                                        <button onClick={VisibiltyConfirmPassword}>
                                                            <div
                                                                className="bg-white px-3 py-2 radius-100 hover:bg-gray-50"
                                                                style={{ height: "40px" }}
                                                            >
                                                                <img
                                                                    className="h-full"
                                                                    src="/assets/visibilty-on.svg"
                                                                    alt=""
                                                                />
                                                            </div>
                                                        </button>
                                                    </div>
                                                    {errorConfirmPassword === '' ? (
                                                        <div className="my-2">
                                                        </div>
                                                    ): (
                                                        <div className="my-2">
                                                            <span  className={"text-red-600 font14-res-300"}>{errorConfirmPassword}</span>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex w-6/12 mt-20 text-right">
                                            <form onSubmit={handleSubmit}>
                                                <button  type="submit"
                                                         className="shadow weverse-background-btn py-2 lg:px-4 font16-res-300 md:px-6 px-8 text-white " style={{ borderRadius:"4px"}}>
                                                    Edit Password
                                                </button>
                                            </form>

                                        </div>
                                    </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

// <form onSubmit={handleSubmit}>
//     <div className="text-left ">
//         <div className="">
//             <div className="my-4">
//                 <label style={{ color:"#777575" , fontSize:"14px"}}>Password Anda</label>
//                 <div className="flex">
//                     <input id="password"   value={password} type="password" onChange={onChangePassword} className="w-full font16-res-300 py-3 border-b-gray-300" style={{ borderBottom:"1px solid #ebebeb"}} placeholder="Password anda"/>
//                     <button onClick={VisibiliyPassword}>
//                         <div
//                             className="bg-white px-3 py-2 radius-100 hover:bg-gray-50"
//                             style={{ height: "40px" }}
//                         >
//                             <img
//                                 className="h-full"
//                                 src="/assets/visibilty-on.svg"
//                                 alt=""
//                             />
//                         </div>
//                     </button>
//                 </div>
//                 {errorPassword === '' ? (
//                     <div className="my-2">
//                     </div>
//                 ): (
//                     <div className="my-2">
//                         <span style={{ fontSize:"14px"}} className={"text-red-600 "}>{errorPassword}</span>
//                     </div>
//                 )}
//             </div>
//             <div className="my-8">
//                 <label style={{ color:"#777575" , fontSize:"14px"}}>Password Baru</label>
//                 <div className="flex">
//                     <input id="new_password" value={newPassword} type="password" onChange={onChangeNewPassword} className="w-full py-3 font16-res-300 border-b-gray-300" style={{ borderBottom:"1px solid #ebebeb"}} placeholder="Password baru anda"/>
//
//                     <button onClick={VisibiltyNewPassword}>
//                         <div
//                             className="bg-white px-3 py-2 radius-100 hover:bg-gray-50"
//                             style={{ height: "40px" }}
//                         >
//                             <img
//                                 className="h-full"
//                                 src="/assets/visibilty-on.svg"
//                                 alt=""
//                             />
//                         </div>
//                     </button>
//                 </div>
//                 {errorNewPassword === '' ? (
//                     <div className="my-2">
//                     </div>
//                 ): (
//                     <div className="my-2">
//                         <span style={{ fontSize:"14px"}} className={"text-red-600 "}>{errorNewPassword}</span>
//                     </div>
//                 )}
//             </div>
//             <div className="my-8">
//                 <label style={{ color:"#777575" , fontSize:"14px"}}>Konfirmasi Password</label>
//                 <div className="flex">
//                     <input id="confirm_password"   value={confirmPassword} type="password" onChange={onChangeConfirmPassword} className="w-full py-3 font16-res-300 border-b-gray-300" style={{ borderBottom:"1px solid #ebebeb"}} placeholder="Konfirmasi password"/>
//                     <button onClick={VisibiltyConfirmPassword}>
//                         <div
//                             className="bg-white px-3 py-2 radius-100 hover:bg-gray-50"
//                             style={{ height: "40px" }}
//                         >
//                             <img
//                                 className="h-full"
//                                 src="/assets/visibilty-on.svg"
//                                 alt=""
//                             />
//                         </div>
//                     </button>
//                 </div>
//                 {errorConfirmPassword === '' ? (
//                     <div className="my-2">
//                     </div>
//                 ): (
//                     <div className="my-2">
//                         <span style={{ fontSize:"14px"}} className={"text-red-600 "}>{errorConfirmPassword}</span>
//                     </div>
//                 )}
//             </div>
//             <button className="w-full mt-8" onSubmit={handleSubmit} >
//                 <div className="w-full font15-res-300 py-2.5 text-center border border-purple-600 rounded text-white bg-purple-600 hover:bg-purple-700">
//                     Perbarui password
//                 </div>
//             </button>
//         </div>
//     </div>
// </form>
