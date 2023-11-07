import {useEffect, useState} from "react";
import {useNavigate, useSearchParams} from "react-router-dom";
import bcrypt from "bcryptjs";
import axios from "axios";

export const AddInformationCardComponent = ({
    handleSubmit,
    email , name , username , contact , birthday,
    errorEmail , errorName , errorUsername , errorContact , errorBirthday,
    setEmail , setName , setUsername , setContact , setBirthday,
                                            }) => {

    const onChangeName = (event) => {
        const name = event.target.value;
        setName(name)
    }

    const onChangeUsername = (event) => {
        const username = event.target.value;
        setUsername(username)
    }

    const onChangeContact = (event) => {
        const contact  = event.target.value;
        setContact(contact)
    }

    const onChangeBirthday = (event) => {
        const birthday = event.target.value;
        setBirthday(birthday)
    }


    return(
        <>
            <div className="bg-white py-6 mb-10 px-10 " style={{ borderRadius:"8px"}}>
                <div className="w-full max-w-sm mx-auto">
                    <div className="my-8" style={{ height:"40px"}}>
                        <img className="h-full" src="/assets/spaceSkool-logo-account.svg" alt=""/>
                    </div>
                    <div className="mx-0 text-left">
                        <h1 className="font-bold" style={{ fontSize:"26px"}}>Tambahkan informasi Anda Akun SpaceSkool.</h1>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="text-left">
                            <div >
                                <div className="mt-8">
                                    <label style={{ color:"#777575" , fontSize:"14px"}}>Nama Lengkap</label>
                                    <input type="text"   onChange={onChangeName} value={name} className="w-full py-3 border-b-gray-300" style={{ borderBottom:"1px solid #ebebeb"}} placeholder="Tambahkan Nama Lengkap"/>
                                    {errorName === '' ? (
                                        <div className="my-2">
                                        </div>
                                    ): (
                                        <div className="my-2">
                                            <span style={{ fontSize:"14px"}} className={"text-red-600 "}>{errorName}</span>
                                        </div>
                                    )}
                                </div>
                                <div className=" mt-4">
                                    <label style={{ color:"#777575" , fontSize:"14px"}}>Username</label>
                                    <input type="text" onChange={onChangeUsername} value={username} className="w-full py-3 border-b-gray-300" style={{ borderBottom:"1px solid #ebebeb"}} placeholder="Tambahkan Username Anda"/>
                                    {errorUsername === '' ? (
                                        <div className="my-2">
                                        </div>
                                    ): (
                                        <div className="my-2">
                                            <span style={{ fontSize:"14px"}} className={"text-red-600 "}>{errorUsername}</span>
                                        </div>
                                    )}
                                </div>
                                <div className="mt-4">
                                    <label style={{ color:"#777575" , fontSize:"14px"}}>Nomor telepon</label>
                                    <input type="text"   onChange={onChangeContact} value={contact} className="w-full py-3 border-b-gray-300" style={{ borderBottom:"1px solid #ebebeb"}} placeholder="Tambahkan Nomor telepon"/>
                                    {errorContact === '' ? (
                                        <div className="my-2">
                                        </div>
                                    ): (
                                        <div className="my-2">
                                            <span style={{ fontSize:"14px"}} className={"text-red-600 "}>{errorContact}</span>
                                        </div>
                                    )}
                                </div>
                                <div className="mt-4">
                                    <label style={{ color:"#777575" , fontSize:"14px"}}>Hari ulang tahun</label>
                                    <input type="date"  onChange={onChangeBirthday} value={birthday} className="w-full py-3 border-b-gray-300" style={{ borderBottom:"1px solid #ebebeb"}} placeholder="Tambahkan Hari ulang tahun"/>
                                    {errorBirthday === '' ? (
                                        <div className="my-2">
                                        </div>
                                    ): (
                                        <div className="my-2">
                                            <span style={{ fontSize:"14px"}} className={"text-red-600 "}>{errorBirthday}</span>
                                        </div>
                                    )}
                                </div>
                                <div className="mb-12 mt-4">
                                </div>
                                <button className="w-full mt-10 md:mt-7" onSubmit={handleSubmit} >
                                    <div className="w-full font-medium py-2.5 text-center border border-purple-600 rounded text-white bg-purple-600 hover:bg-purple-700">
                                        Tambahkan
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