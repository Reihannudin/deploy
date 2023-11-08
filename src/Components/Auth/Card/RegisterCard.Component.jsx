import {useEffect, useState} from "react";
import {Link, useNavigate, useSearchParams} from "react-router-dom";
import bcrypt from "bcryptjs";
import axios from "axios";

export const RegisterCardComponent = ({
   handleSubmit, errorEmail, email, setEmail,
}) => {

    const onChangeEmail = (event) => {
        const email = event.target.value;
        setEmail(email);
    };


    return(
        <>
            <div className="bg-white py-6 mb-10 px-10 " style={{ borderRadius:"8px"}}>
                <div className="w-full max-w-sm mx-auto">
                    <div className="my-8" style={{ height:"40px"}}>
                        <img className="h-full" src="/assets/spaceSkool-logo-account.svg" alt=""/>
                    </div>
                    <div className="mx-0 text-left">
                        <h1 className="font-bold" style={{ fontSize:"26px"}}>Pendaftaran Akun SpaceSkool</h1>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="text-left">
                            <div className="my-8">
                                <label className="font14-res-300" style={{ color:"#777575" }}>Email</label>
                                <input type="email" value={email} className="w-full py-3 border-b-gray-300" onChange={onChangeEmail} style={{ borderBottom:"1px solid #ebebeb"}} placeholder="email_anda@gmail.com"/>
                                {errorEmail === '' ? (
                                    <div className="my-2">
                                    </div>
                                ): (
                                    <div className="my-2">
                                        <span className={"text-red-600 font14-res-300"}>{errorEmail}</span>
                                    </div>
                                )}
                            </div>
                            <div className="py-24">
                            </div>

                            <div className="flex justify-center my-3">
                                <button className="w-full" onSubmit={handleSubmit}>
                                    <div className="w-full font-medium py-2.5 text-center border border-purple-600 rounded text-white bg-purple-600 hover:bg-purple-700">
                                        Daftar
                                    </div>
                                </button>

                            </div>
                        </div>
                    </form>
                    <div className="my-5">
                        <div>
                            <div className="flex w-full">
                                <div className="w-full mx-5 my-auto" style={{ height:"1px",  background:"#d0d0d0"}}></div>
                                <p className="mx-auto">Atau</p>
                                <div className="w-full mx-5 my-auto" style={{ height:"1px",  background:"#d0d0d0"}}></div>
                            </div>

                            <div className="flex justify-center my-3">
                                <a className="w-full max-w-sm"  href={`https://rest-api.spaceskool.site/public/login/p`}>
                                    <div className="w-full font-medium flex py-2 text-purple-600 hover:text-white hover:bg-purple-700 text-center border border-purple-500 rounded">
                                        <div className="flex items-center mx-auto">
                                            <div className="mr-2 w-6 h-6">
                                                <img src="/assets/Google_icon.svg" alt=""/>
                                            </div>
                                            <div>Masuk Dengan Google</div>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div className="block" style={{ fontSize:"14px"}}>
                                <span>Sudah punya akun?</span><br/>
                                <Link to="/login"><span className="hover:underline" style={{ color:"#9C74E1"}}>Masuk ke Spaceskool sekarang</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}