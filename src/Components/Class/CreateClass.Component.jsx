import React, {useEffect, useState} from "react";
import {useNavigate, useSearchParams} from "react-router-dom";
import axios from "axios";
import api from "../../Config/api";
import {data} from "@tensorflow/tfjs";

function CreateActivities({user}){

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [subject, setSubject] = useState('');
    const [section, setSection] = useState('');
    const [rangeStudent, setRangeStudent] = useState(1);
    const [isPrivate , setIsPrivate ] = useState(false);

    const [error , setError] = useState('');
    const [errorName, setErrorName] = useState('');
    const [errorRoom, setErrorRoom] = useState('');
    const [errorSection, setErrorSection] = useState('');
    const [errorSubject, setErrorSubject] = useState('');
    const [errorMaxStudent, setErrorMaxStudent] = useState('');

    const [redirectUrl, setRedirectUrl] = useState('');
    const [redirectPath, setRedirectPath] = useState("/create/class");
    const [isLoading, setIsLoading] = useState(false);

    const [searchParams] = useSearchParams();

    const handleSubmit = (event) => {
        event.preventDefault();

        setIsLoading(true); // Start loading indicator

        const formData = {
            name,
            room,
            section,
            subject,
            max_student: rangeStudent,
            is_private : isPrivate
        };

        api
            .post(`/create/classes`, formData)
            .then((response) => {
                console.log(response)
                setIsLoading(false); // Stop loading indicator
                if (response.data.status === 201) {
                    console.log(data)
                    if (response.data.message === "Berhasil membuat kelas!") {
                        let redirectUrl = response.data.redirect_path;
                        setRedirectPath(redirectUrl);
                        navigate(redirectUrl);
                    }
                }
                else if (response.data.status === 406) {
                    if (response.data.errors.error_name === "Nama kelas tidak boleh kosong") {
                        let redirectUrl = response.data.redirect_path;
                        setRedirectPath(redirectUrl);
                        setErrorName(response.data.errors.error_name);
                        navigate(redirectUrl);
                    } else if (response.data.errors.error_room === "Ruang kelas tidak boleh kosong") {
                        let redirectUrl = response.data.redirect_path;
                        setErrorRoom(response.data.errors.error_room);
                        setRedirectPath(redirectUrl);
                        navigate(redirectUrl);
                    }
                    else if (response.data.errors.error_section === "Kejuruan kelas tidak boleh kosong") {
                        let redirectUrl = response.data.redirect_path;
                        setErrorSection(response.data.errors.error_section);
                        setRedirectPath(redirectUrl);
                        navigate(redirectUrl);
                    }
                    else if (response.data.errors.error_subject === "Mata pelajaran tidak boleh kosong") {
                        let redirectUrl = response.data.redirect_path;
                        setErrorSubject(response.data.errors.error_subject);
                        setRedirectPath(redirectUrl);
                        navigate(redirectUrl);
                    }
                    else if (response.data.errors.error_max_student === "Minimal anda memiliki 1 jumlah maximal siswa") {
                        let redirectUrl = response.data.redirect_path;
                        setErrorMaxStudent(response.data.errors.error_max_student);
                        setRedirectPath(redirectUrl);
                        navigate(redirectUrl);
                    } else if (response.data.errors.error_max_student === "Anda harus menjadi pengguna premium terlebih dahulu") {
                        let redirectUrl = response.data.redirect_path;
                        setErrorMaxStudent(response.data.errors.error_max_student);
                        setRedirectPath(redirectUrl);
                        navigate(redirectUrl);
                    }
                }


            })
            .catch((error) => {
                setIsLoading(false); // Stop loading indicator
                const { errors } = error.response.data;
                setErrorName(errors?.name?.[0] || '');
                setErrorRoom(errors?.room?.[0] || '');
                setErrorSection(errors?.section?.[0] || '');
                setErrorSubject(errors?.subject?.[0] || '');
                setErrorMaxStudent(errors?.max_student?.[0] || '');
            });
    };

    const onChangeName = (event) => {
        const name = event.target.value;
        setName(name);
    };

    const onChangeRoom = (event) => {
        const room = event.target.value;
        setRoom(room);
    };

    const onChangeSubject = (event) => {
        const subject = event.target.value;
        setSubject(subject);
    };

    const onChangeSection = (event) => {
        const section = event.target.value;
        setSection(section);
    };

    const handleChangeRangeStudent = (event) => {
        const range = parseInt(event.target.value, 10);
        setRangeStudent(range);
    };

    const handleIsPrivateChange = () => {
        setIsPrivate(!isPrivate);
    };


    const navigate = useNavigate();


    return(
        <>
            <div className=' h-full mx-auto p-nav-content-crud px-0' style={{ minWidth:"280px"}}>
                <div className="lg:flex lg:w-10/12 sm:w-10/12 w-11/12 mx-auto">
                    <div  className="w-full" style={{ background:"#ffffff"}}>
                        <div className=" sm:w-full w-full ">
                            <div className="my-2">
                                <form onSubmit={handleSubmit}>
                                    <div className="w-full mx-auto">
                                        <div className="sm:flex block w-full text-left">
                                            <div className="sm:flex block w-full text-left">
                                                <div className="mt-3 w-full mx-auto">
                                                    <label className="font14-label-res-300 text-gray-700" htmlFor="class">
                                                        Nama Kelas
                                                    </label>
                                                    <div className="flex md:w-11/12 w-full">
                                                        <input
                                                            id="class"
                                                            name="class"
                                                            onChange={onChangeName}
                                                            type="text"
                                                            className="md:w-11/12  text-gray-600 w-full py-1.5 md:py-2.5 font15-input-res-300 border-b-gray-300"
                                                            style={{ borderBottom: "1px solid #ebebeb" }}
                                                            placeholder="Nama Kelas"
                                                        />
                                                    </div>
                                                    {errorName === "" ? (
                                                        <div className="my-2"></div>
                                                    ) : (
                                                        <div className="my-2">
                                                            <span className={"text-red-600 font14-label-res-300"}>{errorName}</span>
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="mt-3 w-full mx-auto">
                                                    <label className="font14-label-res-300 text-gray-700" htmlFor="room">
                                                        Ruang
                                                    </label>
                                                    <div className="flex md:w-11/12 w-full">
                                                        <input
                                                            id="room"
                                                            name="room"
                                                            onChange={onChangeRoom}
                                                            type="text"
                                                            className="md:w-11/12 text-gray-600 w-full py-1.5 md:py-2.5 font15-input-res-300 border-b-gray-300"
                                                            style={{ borderBottom: "1px solid #ebebeb" }}
                                                            placeholder="Nama Ruang"
                                                        />
                                                    </div>
                                                    {errorRoom === "" ? (
                                                        <div className="my-2"></div>
                                                    ) : (
                                                        <div className="my-2">
                                                            <span className={"text-red-600 font14-label-res-300"}>{errorRoom}</span>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="sm:flex block w-full text-left">
                                            <div className="sm:flex block w-full text-left">
                                                <div className="mt-3 w-full mx-auto">
                                                    <label className="font14-label-res-300 text-gray-700"  htmlFor="section">
                                                        Jurusan
                                                    </label>
                                                    <div className="flex md:w-11/12 w-full">
                                                        <input
                                                            id="section"
                                                            name="section"
                                                            onChange={onChangeSection}
                                                            type="text"
                                                            className="md:w-11/12 w-full text-gray-600 py-1.5 md:py-2.5 font15-input-res-300 border-b-gray-300"
                                                            style={{ borderBottom: "1px solid #ebebeb" }}
                                                            placeholder="Nama Jurusan"
                                                        />
                                                    </div>
                                                    {errorSection === "" ? (
                                                        <div className="my-2"></div>
                                                    ) : (
                                                        <div className="my-2">
                                                            <span className={"text-red-600 font14-label-res-300"}>{errorSection}</span>
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="mt-3 w-full mx-auto">
                                                    <label className="font14-label-res-300 text-gray-700" htmlFor="subject">
                                                        Mata Pelajaran
                                                    </label>
                                                    <div className="flex md:w-11/12 w-full">
                                                        <input
                                                            id="subject"
                                                            name="subject"
                                                            onChange={onChangeSubject}
                                                            type="text"
                                                            className="md:w-11/12 w-full py-1.5 text-gray-600 md:py-2.5 font15-input-res-300 border-b-gray-300"
                                                            style={{ borderBottom: "1px solid #ebebeb" }}
                                                            placeholder="Nama Mata Pelajaran"
                                                        />
                                                    </div>
                                                    {errorSubject === "" ? (
                                                        <div className="my-2"></div>
                                                    ) : (
                                                        <div className="my-2">
                                                            <span className={"text-red-600 font14-label-res-300"}>{errorSubject}</span>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-3 xl:w-7/12 lg:w-8/12 md:w-9/12 sm:10/12 w-full text-left">
                                            <label className="font14-label-res-300" style={{ color: "#777575" }} htmlFor="max_students">
                                                Maximal jumlah Siswa
                                            </label>
                                            <div className="flex w-full">
                                                <div className="flex w-full my-3 items-center">
                                                    <input
                                                        id="max_students"
                                                        name="max_students"
                                                        type="range"
                                                        min="0"
                                                        max="30"
                                                        value={rangeStudent}
                                                        onChange={handleChangeRangeStudent}
                                                        className="w-full h-2 font16-input-res-300 cursor-pointer appearance-none bg-gray-300 rounded-md outline-none"
                                                    />
                                                    <span className="font15-res-300 ml-4" style={{ color: "#777575" }}>
            {rangeStudent}
          </span>
                                                </div>
                                            </div>
                                            {errorMaxStudent === "" ? (
                                                <div className="my-2"></div>
                                            ) : (
                                                <div className="my-2">
                                                    <span className={"text-red-600 font14-label-res-300"}>{errorMaxStudent}</span>
                                                </div>
                                            )}
                                        </div>
                                        <div className="text-left mb-6">
                                            <label className="font14-res-300 py-5" style={{ color: "#777575" }}>Pilihan pengerjaan absensi</label>
                                            <div className="flex md:w-8/12 w-full mb-6">
                                                <div className="mt-4 w-full mx-auto">
                                                    <div className="flex cursor-pointer gap-3">
                                                        <div

                                                            className="cursor-pointer "
                                                        >
                                                            <input style={{ height: "20px" }} type="checkbox"
                                                                   className="cursor-pointer "
                                                                   checked={isPrivate}
                                                                   onChange={handleIsPrivateChange} />
                                                        </div>
                                                        <div>
                                                            <p className="font14-res-300 text-gray-600">Kelas Private?</p>
                                                        </div>
                                                    </div>

                                                    {error === '' ? (
                                                        <div className="my-1"></div>
                                                    ) : (
                                                        <div className="my-1 text-left">
                                                            <span className="text-red-600 font14-res-300">{error}</span>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="relative w-full">
                                            <div className="fixed w-full bottom-16">
                                                <div className="flex w-full mx-auto  text-right">
                                                    <button
                                                        type="submit"
                                                        className="shadow  items-end bg-purple-600 hover:bg-purple-700 text-white py-2 md:px-6 px-6 lg:px-4 font15-input-res-300 "
                                                        style={{ borderRadius: "4px" }}
                                                    >
                                                        Buat Kelas
                                                    </button>
                                                </div>
                                            </div>
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

export default CreateActivities