import {Link, useLocation, useNavigate, useParams, useSearchParams} from "react-router-dom";
import React, {useEffect, useRef, useState} from "react";
import {StudentCardComponent} from "../Classmate/Card/StudentCard.Component";
import {TaskClassCardComponent} from "./Card/TaskClassCard.Component";
import {MyDetailClassNavComponent} from "../Body/MainNav/MyDetailClassNav.Component";
import CustomAlert from "../Helper/CustomAlert.Component";
import api from "../../Config/api";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const DetailMyClassStudentsComponent = (props) => {

    const navigate = useNavigate();


    const inputRefCode = useRef(null);
    const [showAlert, setShowAlert] = useState(false);

    const copyText = () => {
        if (inputRefCode.current) {
            setShowAlert(true);
            inputRefCode.current.select();
            inputRefCode.current.setSelectionRange(0 , 999999);
            document.execCommand('copy'); // Attempt to copy
        }
    };

    const {id , slug} = useParams()

    const username = props.username;

    let studentLength = props.students.length;

    let students = props.students;
    let classmateLength =  props.students.length;

    const location = useLocation(); // React Router's location object
    const [searchParams] = useSearchParams();
    const params = useParams();
    // const navigate = useNavigate();
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const today = new Date();
    const currentDay = today.getDay(); // Index of the current day (0 - 6)

    const queryParams = new URLSearchParams(location.search);
    const startDay = queryParams.get('start_day');
    const month = queryParams.get('month');
    const year = queryParams.get('year');

    const startDate = startDay ? new Date(`${year}-${month}-${startDay}`) : today;
    const startOfWeek = new Date(startDate);
    startOfWeek.setDate(startDate.getDate() - startDate.getDay() + (startDate.getDay() === 0 ? 7 : 0));

    const weekDays = [];
    for (let i = 0; i < 7; i++) {
        const day = new Date(startOfWeek);
        day.setDate(startOfWeek.getDate() + i);
        weekDays.push(day);
    }

    const [selectedDate, setSelectedDate] = useState(startDate);
    const [activeIndex, setActiveIndex] = useState(0);


    useEffect(() => {
        if (startDay && month && year) {
            const selectedDay = new Date(`${year}-${month}-${startDay}`);
            const selectedDayIndex = selectedDay.getDay();
            setActiveIndex(selectedDayIndex);
        } else {
            setActiveIndex(currentDay);
        }
    }, [queryParams]);



    let token = localStorage.getItem('auth_token');
    const [redirectPath, setRedirectPath] = useState("/");
    const [isLoading, setIsLoading] = useState(false);
    const [error , setError] = useState('');

    const handleUpdateClassCode = async (event) => {
        event.preventDefault();

        api
            .post(`${slug}/update/classes/code/${id}` , {
                "Content-Type" : "multipart/form-data" ,
                "Authorization" : "Bearer " + token,
            })
            .then((response) => {
                setIsLoading(false);
                if (response.data.status === 201) {
                    let redirectUrl = response.data.redirect_path;
                    setRedirectPath(redirectUrl);
                    navigate(`/view/my/class/${id}/${slug}`);
                    window.location.reload(); // Refresh the page
                }

            })
            .catch((error) => {
                const { errors } = error.response.data;
                setError(errors?.errors?.[0] || '');
            });

    };


    return(
        <>
            <div className='h-full mx-auto lg:pt-16 md:pt-7  sm:pt-7 pt-7 px-0' style={{ minWidth:"300px"}} key={props.id}>
                <div className="block w-full md:hidden">
                    <MyDetailClassNavComponent />
                </div>
                <div className="lg:flex lg:py-0 md:py-8 py-5 md:block xl:w-10/12 lg:w-11/12 w-full mx-auto lg:justify-between">
                    <div className=" w-full md:w-11/12 mx-auto lg:my-0 my-5 lg:w-9/12">
                        <div className="w-full  lg:py-6 py-3  text-left  lg:mb-0 md:mb-5  bg-white"> <
                            h2 className="font30-res-300 mx-5">{props.name}</h2>
                            <div className="text-left flex border-b border-gray-200  pb-5  justify-between mx-5">
                                <div className="block">
                                    <h2 className="font14-res-300 text-gray-700" >Guru : {props.teacher}</h2>
                                    <h2 className="font14-res-300 text-gray-700">Ruang : {props.room}</h2>
                                </div>
                                <div className="block">
                                    <h2 className="font14-res-300 text-gray-700" >Kejuruan : {props.subjects}</h2>
                                    <h2 className="font14-res-300 text-gray-700" >Pelajaran : {props.section}</h2>
                                </div>
                            </div></div>
                        <div className="md:w-10/12 w-11/12 lg:hidden block  mx-auto my-0">
                            <div className="my-2 text-center py-1 border-none md:border-t">
                                <p className="my-2 font16-res-400">Code class</p>
                                <div className="lg:w-10/12 md:w-8/12 w-10/12  bg-white flex  mx-auto border-radius-4" >
                                    <input
                                        ref={inputRefCode}
                                        className="font16-res-400 py-2 px-3 bg-gray-100 w-10/12"
                                        value={props.code}
                                        readOnly
                                    />
                                    <button className="w-2/12 bg-purple-500" onClick={copyText}>
                                        <img className="my-auto w-full" style={{ height: "20px" }} src="/assets/copy-icon.svg" alt="Copy" />
                                    </button>
                                    <button onClick={handleUpdateClassCode} className="w-2/12 bg-white hover:bg-gray-50 cursor-pointer border border-purple-600">
                                        <img className="my-2 w-full" style={{ height: "20px" }} src="/assets/change-code.svg" alt="Change Code" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="  md:w-full  w-11/12 h-full  mx-auto">
                            <div className="flex  md:mx-5 justify-between" style={{ borderBottom:"2px solid#A568E6"}}>
                                <h2 className="my-3 font16-res-300" style={{  color:"#8D2EF4"}} >Jumlah siswa</h2>
                                <p className="my-auto font16-res-300" style={{  color:"#8D2EF4"}} >{studentLength} Siswa</p>
                            </div>
                            <ul  className="my-2 scrollbar-hide" >
                                {props.students.length === 0 ? (
                                    <div className="mt-40 mb-8">
                                        <div className="mx-auto my-5" style={{ height:"30px"}}>
                                            <img className="h-full mx-auto" src="/assets/icon-tidak-ada.svg" />
                                        </div>
                                        <h2 className="font16-res-300 my-3 text-gray-500">Belum ada murid di kelas ini</h2>

                                        {/*<h2 className="font16-res-300 my-3 text-gray-500">Anda tidak memiliki siswa</h2>*/}
                                    </div>
                                ): (
                                    <div className="">
                                        {props.students.map((item) => {
                                            console.log(students)
                                            return(
                                                <li className="my-2" key={item.id}>
                                                    <StudentCardComponent name={item.name} image={item.image} username={item.username} />
                                                </li>
                                            )
                                        })}
                                    </div>
                                )}
                            </ul>
                        </div>
                    </div>
                    <div className="xl:w-4/12 lg:w-5/12 mx-auto lg:mx-0 sm:w-full w-full md:w-full">
                        <div className="md:w-10/12 hidden lg:block w-11/12 mx-auto my-6">
                            <div className="my-2 pt-3 border-t">
                                <p className="my-2 font16-res-400">Code class</p>
                                <div className="lg:w-10/12 md:w-8/12 w-10/12  bg-white flex  mx-auto border-radius-4" >
                                    <input
                                        ref={inputRefCode}
                                        className="font16-res-400 py-2 px-3 bg-gray-100 w-10/12"
                                        value={props.code}
                                        readOnly
                                    />
                                    <button className="w-2/12 bg-purple-500" onClick={copyText}>
                                        <img className="my-auto w-full" style={{ height: "20px" }} src="/assets/copy-icon.svg" alt="Copy" />
                                    </button>
                                    <button onClick={handleUpdateClassCode} className="w-2/12 bg-white hover:bg-gray-50 border border-purple-600">
                                        <img className="my-2 w-full" style={{ height: "20px" }} src="/assets/change-code.svg" alt="Change Code" />
                                    </button>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
                {showAlert && (
                    <div id="drop-action" className="fixed inset-0 flex items-center justify-center"  style={{ zIndex: "10000" }}>
                        {/* This div serves as a backdrop and should cover the entire screen */}
                        <button
                            onClick={() => setShowAlert(false)} // Close the alert when clicking the backdrop
                            className="bg-gray-500 bg-opacity-30 w-full h-full fixed top-0 left-0"
                            style={{ zIndex: "10000" }}
                        ></button>

                        <CustomAlert
                            message={`Copied Code: ${props.code}`}
                            onClose={() => setShowAlert(false)} // Close the alert when using the custom alert's close button
                        />
                    </div>
                )}
            </div>
        </>
    )
}
