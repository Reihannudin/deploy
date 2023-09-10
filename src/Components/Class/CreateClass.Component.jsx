import React, {useEffect, useState} from "react";
import {useNavigate, useSearchParams} from "react-router-dom";
import axios from "axios";
import api from "../../Config/api";

function CreateActivities({user}){

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [subject, setSubject] = useState('');
    const [section, setSection] = useState('');
    const [rangeStudent, setRangeStudent] = useState(1);

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
        };

        api
            .post(`/create/classes`, formData)
            .then((response) => {
                setIsLoading(false); // Stop loading indicator
                if (response.data.status === 201) {
                    if (response.data.message === "Berhasil membuat kelas!") {
                        let redirectUrl = response.data.redirect_path;
                        setRedirectPath(redirectUrl);
                        navigate(redirectUrl);
                    }
                }
                else if (response.data.status === 406) {
                    console.log(response.data.errors.error_name);
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

    const navigate = useNavigate();


    return(
        <>
            <div className=' h-full mx-auto md:pt-20  pt-16 px-0' style={{ minWidth:"300px"}}>
                <div className="lg:flex lg:w-9/12 sm:w-10/12 w-11/12 mx-auto">
                    <div  className="w-full" style={{ background:"#ffffff"}}>
                        <div className=" sm:w-full w-full ">
                            <div className="my-2">
                                <form onSubmit={handleSubmit}>
                                    <div className="w-full mx-auto">
                                        <div className="sm:flex block w-full text-left">
                                            <div className="sm:flex block w-full text-left">
                                                <div className="mt-3 w-full mx-auto">
                                                    <label className="font14-res-300" style={{ color: "#777575" }} htmlFor="class">
                                                        Nama Kelas
                                                    </label>
                                                    <div className="flex md:w-11/12 w-full">
                                                        <input
                                                            id="class"
                                                            name="class"
                                                            onChange={onChangeName}
                                                            required
                                                            type="text"
                                                            className="md:w-11/12 w-full py-1.5 md:py-2.5 font15-res-300 border-b-gray-300"
                                                            style={{ borderBottom: "1px solid #ebebeb" }}
                                                            placeholder="Nama Kelas"
                                                        />
                                                    </div>
                                                    {errorName === "" ? (
                                                        <div className="my-2"></div>
                                                    ) : (
                                                        <div className="my-2">
                                                            <span className={"text-red-600 font14-res-300"}>{errorName}</span>
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="mt-3 w-full mx-auto">
                                                    <label className="font14-res-300" style={{ color: "#777575" }} htmlFor="room">
                                                        Ruang
                                                    </label>
                                                    <div className="flex md:w-11/12 w-full">
                                                        <input
                                                            id="room"
                                                            name="room"
                                                            onChange={onChangeRoom}
                                                            required
                                                            type="text"
                                                            className="md:w-11/12 w-full py-1.5 md:py-2.5 font15-res-300 border-b-gray-300"
                                                            style={{ borderBottom: "1px solid #ebebeb" }}
                                                            placeholder="Nama Ruang"
                                                        />
                                                    </div>
                                                    {errorRoom === "" ? (
                                                        <div className="my-2"></div>
                                                    ) : (
                                                        <div className="my-2">
                                                            <span className={"text-red-600 font14-res-300"}>{errorRoom}</span>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="sm:flex block w-full text-left">
                                            <div className="sm:flex block w-full text-left">
                                                <div className="mt-3 w-full mx-auto">
                                                    <label className="font14-res-300" style={{ color: "#777575" }} htmlFor="section">
                                                        Jurusan
                                                    </label>
                                                    <div className="flex md:w-11/12 w-full">
                                                        <input
                                                            id="section"
                                                            name="section"
                                                            required
                                                            onChange={onChangeSection}
                                                            type="text"
                                                            className="md:w-11/12 w-full py-1.5 md:py-2.5 font15-res-300 border-b-gray-300"
                                                            style={{ borderBottom: "1px solid #ebebeb" }}
                                                            placeholder="Nama Jurusan"
                                                        />
                                                    </div>
                                                    {errorSection === "" ? (
                                                        <div className="my-2"></div>
                                                    ) : (
                                                        <div className="my-2">
                                                            <span className={"text-red-600 font14-res-300"}>{errorSection}</span>
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="mt-3 w-full mx-auto">
                                                    <label className="font14-res-300" style={{ color: "#777575" }} htmlFor="subject">
                                                        Mata Pelajaran
                                                    </label>
                                                    <div className="flex md:w-11/12 w-full">
                                                        <input
                                                            id="subject"
                                                            name="subject"
                                                            required
                                                            onChange={onChangeSubject}
                                                            type="text"
                                                            className="md:w-11/12 w-full py-1.5 md:py-2.5 font15-res-300 border-b-gray-300"
                                                            style={{ borderBottom: "1px solid #ebebeb" }}
                                                            placeholder="Nama Mata Pelajaran"
                                                        />
                                                    </div>
                                                    {errorSubject === "" ? (
                                                        <div className="my-2"></div>
                                                    ) : (
                                                        <div className="my-2">
                                                            <span className={"text-red-600 font14-res-300"}>{errorSubject}</span>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-3 xl:w-7/12 lg:w-8/12 md:w-9/12 sm:10/12 w-full text-left">
                                            <label className="font14-res-300" style={{ color: "#777575" }} htmlFor="max_students">
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
                                                        className="w-full h-2 font16-res-300 cursor-pointer appearance-none bg-gray-300 rounded-md outline-none"
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
                                                    <span className={"text-red-600 font14-res-300"}>{errorMaxStudent}</span>
                                                </div>
                                            )}
                                        </div>
                                        <div className="flex w-full justify-between mt-20 text-right">
                                            <div></div>
                                            <button
                                                type="submit"
                                                className="shadow weverse-background-btn py-2 lg:px-4 font15-res-300 md:px-6 px-8 text-white"
                                                style={{ borderRadius: "4px" }}
                                            >
                                                Buat Kelas
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

export default CreateActivities