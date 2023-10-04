import React, { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import axios from "axios";

export const ActionAbsentPasswordEmptyComponent = (props) => {

    return (
        <>
            <div className="h-full mx-auto sm:pt-10  pt-12 px-0" style={{ minWidth: "300px" }}>
                <div className="flex md:my-4 my-2  sm:w-11/12  mx-auto w-full">
                    <div className="xl:w-10/12 lg:w-full md:11/12 w-full md:mx-auto">
                        <form >
                            <div>
                                <div className="my-3 w-full mx-auto">
                                    <div className="mt-6 border-b pb-3 mb-4 w-11/12  mx-auto">
                                        <div className="w-full text-left">
                                            <div className="my-2">
                                                <div className=" text-gray-600">
                                                    <p className="font14-label-res-300">Nama Absent : </p>
                                                    <h2
                                                        className="font16-label-res-400 py-1.5  animate-pulse w-32 bg-gray-100 text-gray-600"
                                                        style={{ fontWeight: "500" }}
                                                    >

                                                    </h2>
                                                </div>
                                            </div>
                                            <div className="mt-2 mb-3">
                                                <div className=" flex text-gray-600">
                                                    <p className="font14-label-res-300">Methode : </p>
                                                    <h2 className="font14-label-res-300 py-1 animate-pulse w-32 bg-gray-100 text-gray-500 ms-1">

                                                    </h2>
                                                </div>
                                            </div>
                                            <div className="mt-2 mb-3">
                                                <div className=" flex text-gray-600">
                                                    <p className="font14-label-res-300">Status : </p>
                                                    <h2 className="font14-label-res-300 py-1 animate-pulse w-32 bg-gray-100 text-gray-500 ms-1">
                                                    </h2>
                                                </div>
                                            </div>
                                            <div className="flex justify-between">
                                                <div className=" text-gray-600">
                                                    <p className="font14-label-res-300">Time : </p>
                                                    <p className="font14-label-res-300 py-1 animate-pulse w-32 bg-gray-100">
                                                    </p>
                                                </div>
                                                <div className="font16-res-300 text-gray-600">
                                                    <p className="font14-label-res-300">Deadline : </p>
                                                    <p className="font14-label-res-300 py-1 animate-pulse w-32 bg-gray-100">
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-11/12 mb-4 block md:flex md:justify-between text-left mx-auto">
                                        <div className="md:w-5/12 w-full">
                                            <div className="my-6">
                                                <p
                                                    className="w-full font14-label-res-300 md:w-full my-2"
                                                    style={{ color: "#777575" }}
                                                >
                                                    Anda akan absent menggunakan password dari email ini
                                                </p>
                                                <input
                                                    type="email"
                                                    disabled
                                                    className="w-full px-2 py-2 md:py-3 text-gray-400  animate-pulse bg-gray-100 font15-input-res-300 border-b-gray-300```jsx
                          "
                                                    style={{ borderBottom: "1px solid #ebebeb" }}
                                                    value={props.email}
                                                    placeholder="your@email.com"
                                                />
                                            </div>
                                            <div className="my-3">
                                                <label className="font14-label-res-300" style={{ color: "#777575" }}>
                                                    Confirmm Password
                                                </label>
                                                <div className="flex">
                                                    <input
                                                        id="password"
                                                        type="password"

                                                        className="w-full font15-input-res-300  animate-pulse bg-gray-100  px-2 py-2 md:py-3  border-b-gray-300"
                                                        style={{ borderBottom: "1px solid #ebebeb" }}
                                                        placeholder="your password"
                                                    />
                                                    <button>
                                                        <i className="fa-solid fa-eye-slash" style={{ color: "#777575" }}></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="md:w-6/12 w-full">
                                            <div className="my-3">
                                                <div className="my-2">
                                                    <label className="font14-label-res-300" style={{ color: "#777575" }}>
                                                        Action
                                                    </label>
                                                    <div className="flex">
                                                        <select
                                                            id="action"
                                                            name="action"
                                                            className="w-full font15-input-res-300  animate-pulse bg-gray-100 py-2 md:py-3  border-b font16-res-400 cursor-pointer form-select mb-1"
                                                            aria-label="Default select example"
                                                        >
                                                            <option disabled value="none" className=" font15-input-res-300">
                                                                Pilih Option Absent
                                                            </option>
                                                            <option value="hadir" className=" font15-input-res-300">
                                                                Hadir
                                                            </option>
                                                            <option value="izin" className=" font15-input-res-300">
                                                                Izin
                                                            </option>
                                                        </select>
                                                        <button>
                                                            <i className="fa-solid fa-eye-slash" style={{ color: "#777575" }}></i>
                                                        </button>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-11/12 mx-auto pt-8 md:pt-6 justify-between flex">
                                        <div>

                                        </div>
                                        <div className="w-4/12 md:w-3/12 xl:w-2/12 lg:w-2/12 ms-auto ">
                                            <button
                                                disabled
                                                className="w-11/12 font15-input-res-300   py-1.5 bg-gray-100 text-purple-700 text-center mt-5"
                                                type="submit"
                                                style={{  borderRadius: "4px", border: "1px solid #A373E9" }}
                                            >
                                                <p>Absent</p>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};
