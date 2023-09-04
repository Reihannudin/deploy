import React, {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";


export const EditProfilePasswordComponent = () => {

    const [oldPassword , setOldPassword] = useState('');
    const [newPassword , setNewPassword] = useState('');
    const [confirmPassword , setConfirmPassword] = useState('');

    const [errorOldPassword, setErrorOldPassword] = useState('');
    const [errorNewPassword, setErrorNewPassword] = useState('');
    const [errorConfirmPassword, setErrorConfirmPassword] = useState('');

    const [redirectUrl, setRedirectUrl] = useState('');

    const [searchParams] = useSearchParams();


    const onChangeOldPassword = (event) => {
        const password = event.target.value;
        setOldPassword(password);
    };

    const onChangeNewPassword = (event) => {
        const password = event.target.value;
        setNewPassword(password);
    };

    const onChangeConfirmPassword = (event) => {
        const password = event.target.value;
        setOldPassword(password);
    };

    useEffect(() => {
        const error = searchParams.get('error_old_password');
        setErrorOldPassword(error);
    }, [searchParams]);

    useEffect(() => {
        const error = searchParams.get('error_new_password');
        setErrorNewPassword(error);
    }, [searchParams]);

    useEffect(() => {
        const error = searchParams.get('error_confirm_password');
        setErrorConfirmPassword(error);
    }, [searchParams]);

    return(
        <>
            <div className=' h-full mx-auto md:pt-20  pt-20 px-0' style={{ minWidth:"300px"}}>
                <div className="lg:flex md:w-9/12 sm:w-10/12 w-11/12 mx-auto">
                    <div  className="w-full" style={{ background:"#ffffff"}}>
                        <div className=" w-full mx-auto">
                            <div className="my-2">
                                <form >
                                    <div className="w-full mx-auto   ">
                                        <div className="sm:flex block w-full text-left ">
                                            <div className="block  w-full text-left " >
                                                <div className="mt-3 w-full mx-auto">
                                                    <label className="font14-res-300" style={{ color:"#777575" }}>Password Anda</label>
                                                    <div className="flex  w-full">
                                                        <input id="old_password"  required onChange={onChangeOldPassword}  type="password" className="md:w-11/12 w-full py-2.5 font16-res-300 border-b-gray-300" style={{ borderBottom:"1px solid #ebebeb"}} placeholder="Isi dengan password anda"/>
                                                    </div>
                                                    {errorOldPassword === '' ? (
                                                        <div className="my-2">
                                                        </div>
                                                    ): (
                                                        <div className="my-2">
                                                            <span  className={"text-red-600 font14-res-300"}>{errorOldPassword}</span>
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="mt-3 w-full mx-auto">
                                                    <label className="font14-res-300" style={{ color:"#777575" }}>Password Baru</label>
                                                    <div className="flex  md:w-11/12 w-full">
                                                        <input id="new_password"  required  onChange={onChangeNewPassword} type="password" className="md:w-11/12 w-full py-2.5 font16-res-300 border-b-gray-300" style={{ borderBottom:"1px solid #ebebeb"}} placeholder="Buatlah password baru anda"/>
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
                                                        <input id="password_confirmasi"  required  onChange={onChangeConfirmPassword} type="password" className="md:w-11/12 w-full py-2.5 font16-res-300 border-b-gray-300" style={{ borderBottom:"1px solid #ebebeb"}} placeholder="Konfirmasi password baru anda"/>
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
                                            <button  type="submit"
                                                     className="shadow weverse-background-btn py-2 lg:px-4 font16-res-300 md:px-6 px-8 text-white " style={{ borderRadius:"4px"}}>
                                                Edit Password
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}