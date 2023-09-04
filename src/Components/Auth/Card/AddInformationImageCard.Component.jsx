import React, {useEffect, useState} from "react";
import {useNavigate, useSearchParams} from "react-router-dom";
import bcrypt from "bcryptjs";
import axios from "axios";

export const AddInformationImageCardComponent = ({
    handleSubmit ,
    image , bio , address , school,
    setImage , setBio  , setAddress , setSchool,
    errorSchool
                                                 }) => {

    const onChangeImage = (event) => {
        const image = event.target.value;
        setImage(image)
    }

    const onChangeBio = (event) => {
        const bio = event.target.value;
        setBio(bio)
    }
    const onChangeAddress = (event) => {
        const address = event.target.value;
        setAddress(address)
    }

    const onChangeSchool = (event) => {
        const school = event.target.value;
        setSchool(school)
    }

    const handleImageChange = (event) => {
        const selectedFile = event.target.files[0];
        setImage(URL.createObjectURL(selectedFile));
    };

    const handleDefaultImageClick = (event) => {
        const selectedImageUrl = event.target.src;
        setImage(selectedImageUrl);
    };

    console.log(image)


    return(
        <>
            <div className="bg-white py-6 mb-10 sm:px-10 px-6" style={{ borderRadius:"8px"}}>
                <div className="w-full max-w-sm mx-auto">
                    <div className="my-8" style={{ height:"40px"}}>
                        <img className="h-full" src="/assets/spaceSkool-logo-account.svg" alt=""/>
                    </div>
                    <div className="mx-0 text-left">
                        {/*<h1 className="font-bold font22-res-300">Add your information SpaceSkool Account.</h1>*/}
                    </div>
                        <div className="text-left">
                            <div >
                                <div className="mt-8  border-b pb-5">
                                    <div className="mb-6 pb-4 border-b">
                                        <div className="radius-full mx-auto" style={{ minHeight: "80px", minWidth: "80px", maxWidth: "90px", maxHeight: "90px", objectFit: "cover" }}>
                                            <img
                                                className="radius-full mx-auto"
                                                style={{ minHeight: "80px", minWidth: "80px", maxWidth: "90px", maxHeight: "90px", objectFit: "cover" }}
                                                src={image || '/assets/default-profile.svg'}
                                                alt="Profile Image"
                                            />
                                        </div>

                                    </div>
                                    <div>
                                        <div className="grid grid-cols-5">
                                            <div className="radius-full" onClick={handleDefaultImageClick}>
                                                <div style={{ maxHeight: "60px", maxWidth: "60px"  , minWidth:"55px" , minHeight:"55px"}}>
                                                    <img className="radius-full mx-auto" style={{  maxHeight: "60px", maxWidth: "60px"  , minWidth:"55px" , minHeight:"55px", objectFit: "cover" }} src="/assets/default-profile-1.svg" alt="Profile 1" />
                                                </div>
                                            </div>
                                            <div className="radius-full" onClick={handleDefaultImageClick}>
                                                <div style={{ maxHeight: "60px", maxWidth: "60px"  , minWidth:"55px" , minHeight:"55px"}}>
                                                    <img className="radius-full mx-auto" style={{  maxHeight: "60px", maxWidth: "60px"  , minWidth:"55px" , minHeight:"55px", objectFit: "cover" }} src="/assets/default-profile-2.svg" alt="Profile 2" />
                                                </div>
                                            </div>
                                            <div className="radius-full" onClick={handleDefaultImageClick}>
                                                <div style={{ maxHeight: "60px", maxWidth: "60px"  , minWidth:"55px" , minHeight:"55px"}}>
                                                    <img className="radius-full mx-auto" style={{  maxHeight: "60px", maxWidth: "60px"  , minWidth:"55px" , minHeight:"55px", objectFit: "cover" }} src="/assets/default-profile-3.svg" alt="Profile 3" />
                                                </div>
                                            </div>
                                            <div className="radius-full" onClick={handleDefaultImageClick}>
                                                <div style={{ maxHeight: "60px", maxWidth: "60px"  , minWidth:"55px" , minHeight:"55px"}}>
                                                    <img className="radius-full mx-auto" style={{  maxHeight: "60px", maxWidth: "60px"  , minWidth:"55px" , minHeight:"55px", objectFit: "cover" }} src="/assets/default-profile-4.svg" alt="Profile 4" />
                                                </div>
                                            </div>
                                            <div className="radius-full" onClick={handleDefaultImageClick}>
                                                <div style={{ maxHeight: "60px", maxWidth: "60px"  , minWidth:"55px" , minHeight:"55px"}}>
                                                    <img className="radius-full mx-auto" style={{  maxHeight: "60px", maxWidth: "60px"  , minWidth:"55px" , minHeight:"55px", objectFit: "cover" }} src="/assets/default-profile-5.svg" alt="Profile 5" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-8">
                                    <label style={{ color:"#777575" , fontSize:"14px"}}>Bio</label>
                                    <input type="text"  onChange={onChangeBio} value={bio} className="w-full py-3 border-b-gray-300" style={{ borderBottom:"1px solid #ebebeb"}} placeholder="Tambahkan bio kamu"/>

                                </div>
                                <div className=" mt-4">
                                    <label style={{ color:"#777575" , fontSize:"14px"}}>Asal Sekolah</label>
                                    <input type="text" onChange={onChangeSchool} value={school} className="w-full py-3 border-b-gray-300" style={{ borderBottom:"1px solid #ebebeb"}} placeholder="Tambahkan sekolah asal kamu"/>
                                    {errorSchool === '' ? (
                                        <div className="my-2">
                                        </div>
                                    ): (
                                        <div className="my-2">
                                            <span style={{ fontSize:"14px"}} className={"text-red-600 "}>{errorSchool}</span>
                                        </div>
                                    )}
                                </div>
                                <div className=" mt-4">
                                    <label style={{ color:"#777575" , fontSize:"14px"}}>Alamat</label>
                                    <input type="text" onChange={onChangeAddress} value={address} className="w-full py-3 border-b-gray-300" style={{ borderBottom:"1px solid #ebebeb"}} placeholder="Tambahkan alamat kamu"/>
                                </div>

                                <div className="mb-12 mt-4">
                                </div>
                                <form onSubmit={handleSubmit}>

                                <button className="w-full mt-8" onSubmit={handleSubmit} >
                                    <div className="w-full font-medium py-2.5 text-center border border-purple-600 rounded text-white bg-purple-600 hover:bg-purple-700">
                                        Save
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