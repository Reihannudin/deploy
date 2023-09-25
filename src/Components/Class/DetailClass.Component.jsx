import {useLocation, useNavigate, useParams, useSearchParams} from "react-router-dom";
import React, {useEffect, useRef, useState} from "react";
import axios from "axios";
import {TaskClassCardComponent} from "./Card/TaskClassCard.Component";
import {ClassmateCardComponent} from "../Classmate/Card/ClassmateCard.Component";
import {MyDetailClassNavComponent} from "../Body/MainNav/MyDetailClassNav.Component";
import AbsentDetailMyClassHelper from "./Comps/AbsentDetailMyClass.Helper";
import {AssignmentDetailMyClassHelper} from "./Comps/AssignmentDetailMyClass.Helper";
import {ResourceDetailMyClassHelper} from "./Comps/ResourceDetailMyClass.Helper";
import CustomAlert from "../Helper/CustomAlert.Component";
import {DetailClassNavComponent} from "../Body/MainNav/DetailClassNav.Component";
import {AssignmentDetailClassHelper} from "./Comps/AssignmentDetailClass.Helper";
import {ResourceDetailClassHelper} from "./Comps/ResourceDetailClass.Helper";
import AbsentDetailClassHelper from "./Comps/AbsentDetailClass.Helper";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];


export const DetailClassComponent = (props) => {

    const navigate = useNavigate();
    const { id, slug } = useParams();
    const location = useLocation();

    const [selectedDay, setSelectedDay] = useState('');
    const [selectedMonth, setSelectedMonth] = useState('');
    const [selectedYear, setSelectedYear] = useState('');


    const [searchParams] = useSearchParams();
    const params = useParams();
    // const navigate = useNavigate();
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const username = props.user.username;
    const userId = props.user.id;


    let students = props.students;
    let classmateLength =  props.students.length;


    const today = new Date();
    const currentDay = today.getDay();
    const currentDate = today.getDate();
    const currentDateMin7 = currentDate  / 2;

    useEffect(() => {
        // Check if selectedDay is empty or undefined
        if (!selectedDay) {

            // Format the currentDate as needed
            setSelectedDay(currentDate);
        }
    }, [selectedDay]); //

    const queryParams = new URLSearchParams(location.search);
    const startDay = queryParams.get('start_day');
    const month = queryParams.get('month');
    const year = queryParams.get('year');

    const startDate = startDay ? new Date(`${year}-${month}-${startDay}`) : today;
    const startOfWeek = new Date(startDate);
    startOfWeek.setDate(startDate.getDate() - startDate.getDay() + (startDate.getDay() === 0 ? 7 : 0));

    // Assuming startOfWeek is a Date object representing the desired start date
    const weekDays = [];
    for (let i = 0; i < 7; i++) {
        const day = new Date(startOfWeek);
        day.setDate(startOfWeek.getDate() + i);
        if (selectedDay >= startOfWeek.getDate()) {
            day.setDate(day.getDate());

        }else if (selectedDay <= startOfWeek.getDate()){
            day.setDate(day.getDate() - 7);

        }

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

    const handleDayClick = (clickedDay, index) => {
        setSelectedDate(clickedDay);
        setActiveIndex(index); // Set the active index

        const startOfWeekContainingClickedDay = new Date(clickedDay);
        startOfWeekContainingClickedDay.setDate(
            clickedDay.getDate() - clickedDay.getDay() + (clickedDay.getDay() === 0 ? 7 : 0)
        );

        const clickedDayOfMonth = clickedDay.getDate();
        const clickedMonth = clickedDay.getMonth() + 1; // Months are 0-based
        const clickedYear = clickedDay.getFullYear();

        const newSearchParams = new URLSearchParams({
            start_day: clickedDayOfMonth.toString(),
            month: clickedMonth,
            year: clickedYear,
        });

        setSelectedDay(clickedDayOfMonth);
        setSelectedMonth(clickedMonth);
        setSelectedYear(clickedYear)

        newSearchParams.set('start_day', clickedDayOfMonth.toString());
        newSearchParams.set('month', clickedMonth.toString());
        newSearchParams.set('year', clickedYear.toString());

        navigate({
            search: newSearchParams.toString(),
        });
    };

    const handleSaveButtonClick = () => {
        const newSearchParams = new URLSearchParams({
            start_day: selectedDay,
            month: selectedMonth,
            year: selectedYear,
        });


        newSearchParams.set('start_day', selectedDay.toString());
        newSearchParams.set('month', selectedMonth.toString());
        newSearchParams.set('year', selectedYear.toString());

        navigate({
            search: newSearchParams.toString(),
        });
    }


    const handleMonthChange = (event) => {
        const newSelectMonth = event.target.value;
        setSelectedMonth(newSelectMonth)

        const url = new URL(window.location);
        url.searchParams.set('month' , newSelectMonth);
        window.history.pushState({} , '' ,url)
    };

    const currentDays = today.getDate()
    const currentMonth = today.getMonth() + 1
    const currentYears = today.getFullYear();

    const handleYearChange = (event) => {
        const newSelectYear = event.target.value;
        setSelectedYear(newSelectYear)

        const url = new URL(window.location);
        url.searchParams.set('year' , newSelectYear);
        window.history.pushState({} , '' ,url)
    };

    const handleDayChange = (event) => {
        const newSelectDay = event.target.value;
        setSelectedDay(newSelectDay)

        const url = new URL(window.location);
        url.searchParams.set('start_day' , newSelectDay);
        window.history.pushState({} , '' ,url)
    };

    const generateDaysOptions = () => {
        const daysOptions = [];
        for (let day = 1; day <= 31; day++) {
            daysOptions.push(<option key={day} value={day}>{day}</option>);
        }
        return daysOptions;
    };


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

    const handleTabClick = (tabName) => {
        // Check if tabName is undefined or an empty string, and set it to "absent" as the default value
        if (!tabName) {
            tabName = "absent";
        }
        navigate(`/view/class/${id}/${slug}#${tabName}`)
    };

    useEffect(() => {
        const tabsContainer = document.querySelector("#tabs");
        const tabTogglers = tabsContainer.querySelectorAll("a");

        tabTogglers.forEach(function (toggler) {
            toggler.addEventListener("click", function (e) {
                e.preventDefault();
                const tabName = this.getAttribute("href").substring(1); // Remove the '#' symbol

                let tabContents = document.querySelector("#tab-contents");

                for (let i = 0; i < tabContents.children.length; i++) {
                    const tabContent = tabContents.children[i];
                    const tabId = tabContent.id;

                    if (tabId === tabName) {
                        tabContent.style.display = "block"; // Display the selected tab content
                        tabTogglers[i].classList.add("text-purple-600");
                    } else {
                        tabContent.style.display = "none"; // Hide other tab contents
                        tabTogglers[i].classList.remove("text-purple-600");
                    }
                }

                // Rest of your code...

                // Update the URL hash without triggering a full page reload
                window.history.replaceState(null, null, `#${tabName}`);
            });
        });

        // Set the active tab based on the URL hash
        const hash = location.hash.substring(1);
        if (hash) {
            handleTabClick(hash);
        } else {
            // If no hash exists in the URL, set "absent" tab as active and display its content
            tabTogglers[0].classList.add("text-purple-600");
            document.getElementById("absent").style.display = "block";
        }

        return () => {
            tabTogglers.forEach(function (toggler) {
                toggler.removeEventListener("click", () => {});
            });
        };
    }, []);


    //  ==========================================================

    return(
            <>
                <div className='h-full mx-auto lg:pt-16 md:pt-7  sm:pt-7 pt-7 px-0' style={{ minWidth:"333px"}} key={props.id}>
                    <div className="block w-full md:hidden">
                        <DetailClassNavComponent />
                    </div>
                    <div className="lg:flex lg:py-0 md:py-8 py-5 md:block xl:w-10/12 lg:w-11/12 w-full mx-auto lg:justify-between">
                        <div className="xl:w-10/12 w-full sm:w-11/12 mx-auto lg:my-0 my-5 lg:w-9/12">
                            <div className="w-full lg:py-6 py-3 text-left  lg:mb-10 md:mb-5 bg-white">
                                <h2 className="font30-res-300 mx-5">{props.name}</h2>
                                <div className="text-left flex border-b mb-4 border-gray-200 pb-5 justify-between mx-5">
                                    <div className="block">
                                        <h2 className="font14-res-300 text-gray-700" >Guru : {props.teacher}</h2>
                                        <h2 className="font14-res-300 text-gray-700">Ruang : {props.room}</h2>
                                    </div>
                                    <div className="block">
                                        <h2 className="font14-res-300 text-gray-700" >Kejuruan : {props.subjects}</h2>
                                        <h2 className="font14-res-300 text-gray-700" >Pelajaran : {props.section}</h2>
                                    </div>
                                </div>
                                <div className="lg:w-10/12 md:w-8/12 lg:hidden w-10/12 bg-white flex mx-auto border-radius-4">
                                    <input
                                        ref={inputRefCode}
                                        className="font16-res-400 py-2 px-3 bg-gray-100 w-10/12"
                                        value={props.code}
                                        readOnly
                                    />
                                    <button className="w-2/12 bg-purple-500 hover:bg-purple-700 cursor-pointer" onClick={copyText}>
                                        <img className="my-auto w-full" style={{ height: "20px" }} src="/assets/copy-icon.svg" alt="Copy" />
                                    </button>
                                </div>
                                <div className="lg:w-10/12 w-11/12 lg:hidden block lg:shadow border-t border-b mx-auto my-6">
                                    <div className="pt-5  font16-res-400 text-left mx-5">
                                        <h4 className="font16-res-400 ">Keleolah History anda</h4>
                                    </div>
                                    <div className="font14-res-300">
                                        <div className="flex gap-5 justify-between  px-6 pt-6">
                                            <label htmlFor="day_l">Pilih Hari : </label>
                                            <select id="day_l"  className="w-2/5" onChange={handleDayChange} value={selectedDay}>
                                                <option value="" className="bg-white px-4 py-3  border-none hover:bg-gray-50 cursor-pointer text-gray-600 hover:text-purple-700" >Select</option>
                                                {generateDaysOptions()}
                                            </select>
                                        </div>
                                        <div className="flex gap-5  justify-between px-6 py-5">
                                            <label htmlFor="month_l">Pilih Bulan : </label>
                                            <select id="month_l" className="w-2/5" onChange={handleMonthChange} value={selectedMonth}>
                                                <option className="bg-white px-4 py-3  border-none hover:bg-gray-50 cursor-pointer text-gray-600 hover:text-purple-700"  value="">Select</option>
                                                <option className="bg-white px-4 py-3  border-none hover:bg-gray-50 cursor-pointer text-gray-600 hover:text-purple-700"  value="1">January</option>
                                                <option className="bg-white px-4 py-3  border-none hover:bg-gray-50 cursor-pointer text-gray-600 hover:text-purple-700"  value="2">February</option>
                                                <option className="bg-white px-4 py-3  border-none hover:bg-gray-50 cursor-pointer text-gray-600 hover:text-purple-700"  value="3">March</option>
                                                <option className="bg-white px-4 py-3  border-none hover:bg-gray-50 cursor-pointer text-gray-600 hover:text-purple-700"  value="4">April</option>
                                                <option className="bg-white px-4 py-3  border-none hover:bg-gray-50 cursor-pointer text-gray-600 hover:text-purple-700"  value="5">May</option>
                                                <option className="bg-white px-4 py-3  border-none hover:bg-gray-50 cursor-pointer text-gray-600 hover:text-purple-700"  value="6">June</option>
                                                <option className="bg-white px-4 py-3  border-none hover:bg-gray-50 cursor-pointer text-gray-600 hover:text-purple-700"  value="7">July</option>
                                                <option className="bg-white px-4 py-3  border-none hover:bg-gray-50 cursor-pointer text-gray-600 hover:text-purple-700"  value="8">August</option>
                                                <option className="bg-white px-4 py-3  border-none hover:bg-gray-50 cursor-pointer text-gray-600 hover:text-purple-700"  value="9">September</option>
                                                <option className="bg-white px-4 py-3  border-none hover:bg-gray-50 cursor-pointer text-gray-600 hover:text-purple-700"  value="10">October</option>
                                                <option className="bg-white px-4 py-3  border-none hover:bg-gray-50 cursor-pointer text-gray-600 hover:text-purple-700"  value="11">November</option>
                                                <option className="bg-white px-4 py-3  border-none hover:bg-gray-50 cursor-pointer text-gray-600 hover:text-purple-700"  value="12">December</option>
                                            </select>
                                        </div>
                                        <div className="flex gap-5 justify-between  px-6 pb-6">
                                            <label htmlFor="year_l">Pilih Tahun:</label>
                                            <select id="year_l" className="w-2/5 border-none" onChange={handleYearChange} value={selectedYear}>
                                                <option className="bg-white px-4 py-3  border-none hover:bg-gray-50 cursor-pointer text-gray-600 hover:text-purple-700" value="">Select</option>
                                                <option className="bg-white px-4 py-3  border-none hover:bg-gray-50 cursor-pointer text-gray-600 hover:text-purple-700" value="2021">2021</option>
                                                <option className="bg-white px-4 py-3  border-none hover:bg-gray-50 cursor-pointer text-gray-600 hover:text-purple-700" value="2022">2022</option>
                                                <option className="bg-white px-4 py-3  border-none hover:bg-gray-50 cursor-pointer text-gray-600 hover:text-purple-700" value="2023">2023</option>
                                                {/* Add more year options */}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="w-full mx-auto pb-4">
                                        <div className="w-11/12 mx-auto">
                                            <button
                                                onClick={handleSaveButtonClick}
                                                type="button" // Add this line to specify the button type
                                                className="w-full py-1.5 bg-purple-600 hover:bg-purple-700 cursor-pointer border-radius-4 text-white hover:text-gray-50 font14-res-300 mx-auto"
                                            >
                                                Save
                                            </button>

                                        </div>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <div className="text-right mb-3">
                                        <h2 className="font15-res-300">{!month ? monthNames[currentMonth - 1] : monthNames[month - 1]} {!year ? currentYears : year}</h2>

                                    </div>
                                    <div className="grid grid-cols-7 gap-2">
                                        {weekDays.map((day , index) => {

                                            return(
                                                <div
                                                    key={index}
                                                    className={`text-center cursor-pointer ${
                                                        index === activeIndex ? "bg-purple-600 text-white" : "bg-gray-200 hover:bg-purple-600 hover:text-white"
                                                    } py-2 px-1.5 rounded`}
                                                    onClick={() => handleDayClick(day, index)}
                                                >
                                                    <div className=" font15-res-300" style={{ fontWeight:"550"}}>{daysOfWeek[index]}</div>
                                                    <div className="font14-res-300">{day.getDate()}</div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>

                                <div className="bg-white">

                                    <div className="me-auto sm:mx-6 md:w-11/12 border-b lg:w-full w-11/12 mx-auto">
                                        <div className="w-11/12 ">
                                            <ul id="tabs" className="flex mt-1  font18-res-300 w-8/12 px-1 text-purple-500">
                                                <li className="pe-6 w-full text-gray-500 hover:text-purple-600 text-left font16-res-400 py-2">
                                                    <a id="default-tab" href="#absent" className="w-full" onClick={() => handleTabClick('absent')}>
                                                        Absent
                                                    </a>
                                                </li>
                                                <li className="px-6 w-full text-gray-500 hover:text-purple-600 text-left mx-4 font16-res-400 py-2">
                                                    <a href="#assignment" className="w-full" onClick={() => handleTabClick('assignment')}>
                                                        Tugas
                                                    </a>
                                                </li>
                                                <li className="px-6 w-full text-gray-500 hover:text-purple-600 text-left font16-res-400 py-2">
                                                    <a href="#resource" className="w-full" onClick={() => handleTabClick('resource')}>
                                                        Resource
                                                    </a>
                                                </li>
                                                <li className="px-4 text-gray-800 hidden font-semibold py-2">
                                                    <a href="#fourth">Tab 4</a>
                                                </li>
                                            </ul>

                                        </div>
                                    </div>
                                </div>

                                <div id="tab-contents" className="w-11/12 lg:w-full lg:mx-3 mx-auto">
                                    <div id="absent" className="py-2 lg:px-4">
                                        <AbsentDetailClassHelper slug={slug} username={username} start_day={selectedDay} month={selectedMonth} year={selectedYear} userId={userId} />
                                    </div>
                                    <div id="assignment" className="py-2 lg:px-4" style={{ display: 'none' }}>
                                        <AssignmentDetailClassHelper slug={slug} username={username} start_day={selectedDay} month={selectedMonth} year={selectedYear} userId={userId} />
                                    </div>
                                    <div id="resource" className="py-2 lg:px-4" style={{ display: 'none' }}>
                                        <ResourceDetailClassHelper slug={slug} username={username} start_day={selectedDay} month={selectedMonth} year={selectedYear} userId={userId} />
                                    </div>
                                    <div id="fourth" className="py-2 md:px-4" style={{ display: 'none' }}>
                                    </div>
                                </div>
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
                                        <button className="w-2/12 bg-purple-500 hover:bg-purple-700 " onClick={copyText}>
                                            <img className="my-auto w-full" style={{ height: "20px" }} src="/assets/copy-icon.svg" alt="Copy" />
                                        </button>

                                    </div>
                                </div>

                            </div>
                            <div className="md:w-10/12 hidden lg:block w-11/12 shadow mx-auto lg:my-6 my-2">
                                <div className="md:pt-5 pt-1 font16-res-400 text-left mx-5">
                                    <h4 className="font16-res-400 ">Keleolah History anda</h4>
                                </div>
                                <div className="font14-res-300">
                                    <div className="flex gap-5 justify-between  px-6 pt-6">
                                        <label htmlFor="day">Pilih Hari : </label>
                                        <select id="day"  className="w-2/5" onChange={handleDayChange} value={selectedDay}>
                                            <option value="" className="bg-white px-4 py-3  border-none hover:bg-gray-50 cursor-pointer text-gray-600 hover:text-purple-700" >Select</option>
                                            {generateDaysOptions()}
                                        </select>
                                    </div>
                                    <div className="flex gap-5  justify-between px-6 py-5">
                                        <label htmlFor="month">Pilih Bulan : </label>
                                        <select id="month" className="w-2/5" onChange={handleMonthChange} value={selectedMonth}>
                                            <option className="bg-white px-4 py-3  border-none hover:bg-gray-50 cursor-pointer text-gray-600 hover:text-purple-700"  value="">Select</option>
                                            <option className="bg-white px-4 py-3  border-none hover:bg-gray-50 cursor-pointer text-gray-600 hover:text-purple-700"  value="1">January</option>
                                            <option className="bg-white px-4 py-3  border-none hover:bg-gray-50 cursor-pointer text-gray-600 hover:text-purple-700"  value="2">February</option>
                                            <option className="bg-white px-4 py-3  border-none hover:bg-gray-50 cursor-pointer text-gray-600 hover:text-purple-700"  value="3">March</option>
                                            <option className="bg-white px-4 py-3  border-none hover:bg-gray-50 cursor-pointer text-gray-600 hover:text-purple-700"  value="4">April</option>
                                            <option className="bg-white px-4 py-3  border-none hover:bg-gray-50 cursor-pointer text-gray-600 hover:text-purple-700"  value="5">May</option>
                                            <option className="bg-white px-4 py-3  border-none hover:bg-gray-50 cursor-pointer text-gray-600 hover:text-purple-700"  value="6">June</option>
                                            <option className="bg-white px-4 py-3  border-none hover:bg-gray-50 cursor-pointer text-gray-600 hover:text-purple-700"  value="7">July</option>
                                            <option className="bg-white px-4 py-3  border-none hover:bg-gray-50 cursor-pointer text-gray-600 hover:text-purple-700"  value="8">August</option>
                                            <option className="bg-white px-4 py-3  border-none hover:bg-gray-50 cursor-pointer text-gray-600 hover:text-purple-700"  value="9">September</option>
                                            <option className="bg-white px-4 py-3  border-none hover:bg-gray-50 cursor-pointer text-gray-600 hover:text-purple-700"  value="10">October</option>
                                            <option className="bg-white px-4 py-3  border-none hover:bg-gray-50 cursor-pointer text-gray-600 hover:text-purple-700"  value="11">November</option>
                                            <option className="bg-white px-4 py-3  border-none hover:bg-gray-50 cursor-pointer text-gray-600 hover:text-purple-700"  value="12">December</option>
                                        </select>
                                    </div>
                                    <div className="flex gap-5 justify-between  px-6 pb-6">
                                        <label htmlFor="year">Pilih Tahun:</label>
                                        <select id="year" className="w-2/5 border-none" onChange={handleYearChange} value={selectedYear}>
                                            <option className="bg-white px-4 py-3  border-none hover:bg-gray-50 cursor-pointer text-gray-600 hover:text-purple-700" value="">Select</option>
                                            <option className="bg-white px-4 py-3  border-none hover:bg-gray-50 cursor-pointer text-gray-600 hover:text-purple-700" value="2021">2021</option>
                                            <option className="bg-white px-4 py-3  border-none hover:bg-gray-50 cursor-pointer text-gray-600 hover:text-purple-700" value="2022">2022</option>
                                            <option className="bg-white px-4 py-3  border-none hover:bg-gray-50 cursor-pointer text-gray-600 hover:text-purple-700" value="2023">2023</option>
                                            {/* Add more year options */}
                                        </select>
                                    </div>
                                </div>
                                <div className="w-full pb-4">
                                    <button
                                        onClick={handleSaveButtonClick}
                                        className="w-10/12 py-1.5 bg-purple-600 hover:bg-purple-700 cursor-pointer border-radius-4 text-white hover:text-gray-50  font14-res-300 mx-auto ">
                                        Save
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                    {showAlert && (
                        <div id="drop-action" className="fixed inset-0 flex items-center justify-center"  style={{ zIndex: "10000" }}>
                            <button
                                onClick={() => setShowAlert(false)} // Close the alert when clicking the backdrop
                                className="bg-gray-500 bg-opacity-30 w-full h-full fixed top-0 left-0"
                                style={{ zIndex: "10000" }}
                            ></button>

                            <CustomAlert
                                message={`{props.code}`}
                                onClose={() => setShowAlert(false)} // Close the alert when using the custom alert's close button
                            />
                        </div>
                    )}
                </div>
            </>
        )
}


