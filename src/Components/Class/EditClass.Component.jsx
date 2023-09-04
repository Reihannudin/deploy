import {useNavigate, useParams, useSearchParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";

export const EditClassComponent = (props) => {

    const [name , setName] = useState('');
    useEffect(() => {
        setName(props.name);
    } , [props.name])
    const onChangeName = (event) => {
        const name = event.target.value;
        setName(name);
    };

    const [room , setRoom] = useState('');
    useEffect(() => {
        setRoom(props.room);
    } , [props.room])
    const onChangeRoom = (event) => {
        const room = event.target.value;
        setRoom(room);
    };

    const [subject , setSubject] = useState('');
    useEffect(() => {
        setSubject(props.subject);
    } , [props.subject])
    const onChangeSubjct = (event) => {
        const subject = event.target.value;
        setSubject(subject);
    };

    const [section , setSection] = useState('');

    useEffect(() => {
        setSection(props.section);
    } , [props.section])
    const onChangeSection = (event) => {
        const section = event.target.value;
        setSection(section);
    };

    const [rangeStudent, setRangeStudent] = useState(0);

    useEffect(() => {
        setRangeStudent(props.maxStudent);
    } , [props.maxStudent])
    const handleChangeRangeStudent = (e) => {
        setRangeStudent(e.target.value);
    };

    const [searchParams] = useSearchParams();
    const [errorName , setErrorName] = useState('');
    const [errorRoom , setErrorRoom] = useState('');
    const [errorSection , setErrorSection] = useState('');
    const [errorSubject , setErrorSubject] = useState('');
    const [errorMaxStudent , setErrorMaxStudent] = useState(0);

    const [redirectUrl, setRedirectUrl] = useState('');


    useEffect(() => {
        const error = searchParams.get('error_name');
        setErrorName(error)
    } , [searchParams])


    useEffect(() => {
        const error = searchParams.get('error_room');
        setErrorRoom(error)
    } , [searchParams])

    useEffect(() => {
        const error = searchParams.get('error_section');
        setErrorSection(error)
    } , [searchParams])

    useEffect(() => {
        const error = searchParams.get('error_subject');
        setErrorSubject(error)
    } , [searchParams])

    useEffect(() => {
        const error = searchParams.get('error_max_student');
        setErrorMaxStudent(error)
    } , [searchParams])

    const user = JSON.parse(localStorage.getItem('whoLogin'));
    const username = user.username;

    const navigate = useNavigate();

    const {id , slug} = useParams();

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = {
            name,
            room,
            section,
            subject,
            max_student: rangeStudent,
        };

        axios
            // .put(`https://rest-api.spaceskool.site/public/api/${username}/${slug}/update/classes/${id}` , formData)
            .put(`http://127.0.0.1:8000/api/${username}/${slug}/update/classes/${id}` , formData)
            .then((response) =>{
                console.log(response.data);
                const {redirectUrl} = response.data
                setRedirectUrl(redirectUrl);
            })
            .catch((error) => {
                const {errors} = error.response.data;

                setErrorName(errors?.name?.[0] || '');
                setErrorRoom(errors?.room?.[0] || '');
                setErrorSection(errors?.section?.[0] || '');
                setErrorSubject(errors?.subject?.[0] || '');
                setErrorMaxStudent(errors?.max_student?.[0] || '');
            }
        );
    }

    // console.log(name);
    // console.log(room);
    // console.log(section);
    // console.log(subject);

    useEffect(() => {
        if (redirectUrl) {
            const url = new URL(redirectUrl);
            const errorNameParam = url.searchParams.get('error_name');
            const errorRoomParam = url.searchParams.get('error_room');
            const errorSectionParam = url.searchParams.get('error_section');
            const errorSubjectParam = url.searchParams.get('error_subject');
            const errorMaxStrudentParam = url.searchParams.get('error_max_student');
            const nameParam = url.searchParams.get('name');
            const roomParam = url.searchParams.get('room');
            const sectionParam = url.searchParams.get('section');
            const subjectParam = url.searchParams.get('subject');
            const maxStudentParam = url.searchParams.get('max_student');

            setErrorName(errorNameParam);
            setErrorRoom(errorRoomParam);
            setErrorSection(errorSectionParam);
            setErrorSubject(errorSubjectParam);
            setErrorMaxStudent(errorMaxStrudentParam);

            setName(nameParam);
            setRoom(roomParam);
            setSection(sectionParam);
            setSubject(subjectParam);
            setRangeStudent(maxStudentParam);

            url.searchParams.delete('error_name');
            url.searchParams.delete('name');

            window.history.replaceState({}, '', url.href);

            const statusParam = url.searchParams.get('status');

            if (statusParam === "201"){
                navigate(`/my/class`)
            }


            setRedirectUrl('');
        }
    }, [redirectUrl]);


    return(
        <>
            <div className='h-full mx-auto md:pt-20  pt-16 px-0' style={{ minWidth:"300px"}}>
                <div className="lg:flex md:w-9/12 sm:w-10/12 w-11/12 mx-auto">
                    <div  className="w-full" style={{ background:"#ffffff"}}>
                        <div className=" w-full mx-auto">
                            <div className="my-2">
                                <form onSubmit={handleSubmit}>
                                    <div className="w-full mx-auto   ">
                                        <div className="sm:flex block w-full text-left ">
                                            <div className="sm:flex block  w-full text-left " >
                                                <div className="mt-3 w-full mx-auto">
                                                    <label className="font14-res-300" style={{ color:"#777575" }}>Nama Kelas</label>
                                                    <div className="flex md:w-11/12 w-full">
                                                        <input id="class" required onChange={onChangeName} value={name} type="text"
                                                               className="md:w-11/12 w-full py-1.5 md:py-2.5 font15-res-300 border-b-gray-300"
                                                               style={{ borderBottom:"1px solid #ebebeb"}} placeholder="Nama Kelas"/>
                                                    </div>
                                                    {errorName === '' ? (
                                                        <div className="my-2">
                                                        </div>
                                                    ): (
                                                        <div className="my-2">
                                                            <span  className={"text-red-600 font14-res-300"}>{errorName}</span>
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="mt-3 w-full mx-auto">
                                                    <label className="font14-res-300" style={{ color:"#777575" }}>Ruang</label>
                                                    <div className="flex md:w-11/12 w-full">
                                                        <input id="room" onChange={onChangeRoom} value={room} type="text"  className="md:w-11/12 w-full py-1.5 md:py-2.5 font15-res-300 border-b-gray-300"  style={{ borderBottom:"1px solid #ebebeb"}} placeholder="Nama Ruang"/>
                                                    </div>
                                                    {errorRoom === '' ? (
                                                        <div className="my-2">
                                                        </div>
                                                    ): (
                                                        <div className="my-2">
                                                            <span  className={"text-red-600 font14-res-300"}>{errorRoom}</span>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="sm:flex block w-full text-left ">
                                            <div className="sm:flex block  w-full text-left ">
                                                <div className="mt-3 w-full mx-auto">
                                                    <label className="font14-res-300" style={{ color:"#777575" }}>Jurusan</label>
                                                    <div className="flex  md:w-11/12 w-full">
                                                        <input id="section"  onChange={onChangeSection} value={section} type="text"  className="md:w-11/12 w-full py-1.5 md:py-2.5 font15-res-300  border-b-gray-300"  style={{ borderBottom:"1px solid #ebebeb"}} placeholder="Nama Jurusan"/>
                                                    </div>
                                                    {errorSection === '' ? (
                                                        <div className="my-2">
                                                        </div>
                                                    ): (
                                                        <div className="my-2">
                                                            <span className={"text-red-600 font14-res-300"}>{errorSection}</span>
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="mt-3 w-full mx-auto">
                                                    <label className="font14-res-300" style={{ color:"#777575" }}>Mata Pelajaran</label>
                                                    <div className="flex  md:w-11/12 w-full">
                                                        <input id="subject"  onChange={onChangeSubjct} value={subject} type="text"  className="md:w-11/12 w-full py-1.5 md:py-2.5 font15-res-300  border-b-gray-300"  style={{ borderBottom:"1px solid #ebebeb"}} placeholder="Nama Mata Pelajaran"/>
                                                    </div>
                                                    {errorSubject === '' ? (
                                                        <div className="my-2">
                                                        </div>
                                                    ): (
                                                        <div className="my-2">
                                                            <span className={"text-red-600 font14-res-300"}>{errorSubject}</span>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                        </div>
                                        <div className="mt-3  xl:w-7/12 lg:w-8/12 md:w-9/12 sm:10/12  w-full text-left ">
                                            <label className="font14-res-300" style={{ color:"#777575" }}>Maximal jumlah Siswa</label>
                                            <div className="flex w-full">
                                                <div className="flex w-full my-3 items-center">
                                                    <input
                                                        type="range"
                                                        min="0"
                                                        max="30"
                                                        value={rangeStudent}
                                                        onChange={handleChangeRangeStudent}
                                                        className="w-full h-2 font16-res-300 cursor-pointer appearance-none bg-gray-300 rounded-md outline-none"
                                                    />
                                                    <span className="font16-res-300 ml-4" style={{ color:"#777575" }}>{rangeStudent}</span>
                                                </div>
                                            </div>
                                            {errorMaxStudent === '' ? (
                                                <div className="my-2">
                                                </div>
                                            ): (
                                                <div className="my-2">
                                                    <span className={"text-red-600 font14-res-300"}>{errorMaxStudent}</span>
                                                </div>
                                            )}
                                        </div>
                                        <div className="flex w-full justify-between mt-20 text-right">
                                            <div>

                                            </div>
                                            <button
                                                type="submit"
                                                onClick={handleSubmit}
                                                className="shadow weverse-background-btn py-2 lg:px-4 font15-res-300 md:px-6 px-8 text-white " style={{ borderRadius:"4px"}}>
                                                Edit Kelas
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