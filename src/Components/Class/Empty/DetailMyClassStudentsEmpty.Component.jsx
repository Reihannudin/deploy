import {Link, useLocation, useNavigate, useParams, useSearchParams} from "react-router-dom";
import React, {useEffect, useRef, useState} from "react";
import {MyDetailClassNavComponent} from "../../Body/MainNav/MyDetailClassNav.Component";
import {StudentCardComponent} from "../../Classmate/Card/StudentCard.Component";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const DetailMyClassStudentsEmptyComponent = (props) => {

    const navigate = useNavigate();

    const inputRef = useRef(null);


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

    console.log("current day : " , currentDay)

    useEffect(() => {
        if (startDay && month && year) {
            const selectedDay = new Date(`${year}-${month}-${startDay}`);
            const selectedDayIndex = selectedDay.getDay();
            setActiveIndex(selectedDayIndex);
        } else {
            setActiveIndex(currentDay);
        }
    }, [queryParams]);

    console.log(activeIndex)

    const handleDayClick = (clickedDay, index) => {
        setSelectedDate(clickedDay);
        setActiveIndex(index); // Set the active index

        // Update URL parameters
        const clickedYear = clickedDay.getFullYear();
        const clickedMonth = clickedDay.getMonth() + 1; // Months are 0-based
        const clickedDayOfMonth = clickedDay.getDate();

        const newSearchParams = new URLSearchParams({
            start_day: clickedDayOfMonth.toString(),
            month: clickedMonth.toString(),
            year: clickedYear.toString(),
        });

        // Use the navigate function to update the URL
        newSearchParams.set('start_day', clickedDayOfMonth.toString());
        newSearchParams.set('month', clickedMonth.toString());
        newSearchParams.set('year', clickedYear.toString());

        // Navigate to the updated URL
        navigate({
            search: newSearchParams.toString(),
        });
    };


    const [selectedDay, setSelectedDay] = useState('');
    const [selectedMonth, setSelectedMonth] = useState('');
    const [selectedYear, setSelectedYear] = useState('');

    const handleMonthChange = (event) => {
        const newSelectMonth = event.target.value;
        setSelectedMonth(newSelectMonth)

        const url = new URL(window.location);
        url.searchParams.set('month' , newSelectMonth);
        window.history.pushState({} , '' ,url)
    };

    // const currentMonth = today.toLocaleString('default', { month: 'short' }) // Index of the current day (0 - 6)
    const currentDays = today.getDate() // Index of the current day (0 - 6)
    const currentMonth = today.getMonth() + 1 // Index of the current day (0 - 6)
    const currentYears = today.getFullYear(); // Index of the current day (0 - 6)
    console.log( "current month : " ,currentMonth)
    console.log( "current years : " ,currentYears)
    //
    // useEffect(() => {
    //     setSelectedMonth(currentMonth);
    // } , [currentMonth])

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


    return(
        <>
            <div className='h-full mx-auto lg:pt-16 md:pt-7  sm:pt-7 pt-7 px-0' style={{ minWidth:"300px"}} key={props.id}>
                <div className="block w-full md:hidden">
                    <MyDetailClassNavComponent />
                </div>
                <div className="lg:flex lg:py-0 md:py-8 py-5 md:block xl:w-10/12 lg:w-11/12 w-full mx-auto lg:justify-between">
                    <div className=" w-full md:w-11/12 mx-auto lg:my-0 my-5 lg:w-9/12">
                        <div className="w-full lg:py-6 py-3 text-left  lg:mb-10 md:mb-5 bg-white">
                            <h2 className="font30-res-300 mx-5 mb-5 bg-gray-200 py-4 animate-pulse"></h2>
                            <div className="text-left flex border-b border-gray-200  pb-5  justify-between mx-5">
                                <div className="block">
                                    <h2 className="font14-res-300 text-gray-700 my-2  w-32 bg-gray-100 py-1 animate-pulse" ></h2>
                                    <h2 className="font14-res-300 text-gray-700 my-2   w-32 bg-gray-100 py-1 animate-pulse"></h2>
                                </div>
                                <div className="block">
                                    <h2 className="font14-res-300 text-gray-700 my-2  w-32 bg-gray-100 py-1 animate-pulse" ></h2>
                                    <h2 className="font14-res-300 text-gray-700 my-2  w-32 bg-gray-100 py-1  animate-pulse "></h2>
                                </div>
                            </div></div>
                        <div className="md:w-10/12 w-11/12 lg:hidden block  mx-auto my-6">
                            <div className="my-2 text-center py-1 border-none md:border-t">
                                <p className="my-2 font16-res-400">Code class</p>
                                <div className="lg:w-10/12 md:w-8/12 w-10/12  bg-white flex  mx-auto border-radius-4" >
                                    <input ref={inputRef}  className=" font16-res-400 py-2 px-3 bg-gray-100 w-10/12" value={props.code}  onChange={() => {}} />
                                    <button className="w-2/12 bg-purple-500" >
                                        <img className="my-auto w-full " style={{ height:"20px"}} src="/assets/copy-icon.svg" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="  md:w-full  w-11/12 h-full  mx-auto">
                            <div className="flex  md:mx-5 justify-between" style={{ borderBottom:"2px solid#A568E6"}}>
                                {/*<h2 className="my-3 font18-res-300" style={{  color:"#8D2EF4"}} >Siswa</h2>*/}
                                <p className=" my-3 font16-res-300" style={{  color:"#8D2EF4"}} >Jumlah siswa</p>
                                <p className=" my-3 font16-res-300 bg-gray-100 border-radius-8 w-24 py-1 animate-pulse" ></p>
                            </div>
                            <ul  className="my-2 h-full scrollbar-hide" >

                                <div className="md:py-8 sm:py-6 py-4">
                                    <div className="flex items-center justify-center mb-2 mt-16 ">
                                        <div className="animate-spin">
                                            <img src="/assets/planet_gif-1.gif" className="h-20 w-20" alt="Loading" />
                                        </div>
                                    </div>

                                </div>

                            </ul>
                        </div>
                    </div>
                    <div className="xl:w-4/12 lg:w-5/12 mx-auto lg:mx-0 sm:w-full w-full md:w-full">
                        <div className="md:w-10/12 hidden lg:block w-11/12 mx-auto my-6">
                            <div className="my-2 pt-3 border-t">
                                <p className="my-2 font16-res-400">Code class</p>
                                <div className="lg:w-10/12 md:w-8/12 w-10/12  bg-white flex  mx-auto border-radius-4" >
                                    <input ref={inputRef}  className=" font16-res-400 py-2 px-3 bg-gray-100 w-10/12"   onChange={() => {}} value={props.code}  />
                                    <button className="w-2/12 bg-purple-500" >
                                        <img className="my-auto w-full " style={{ height:"20px"}} src="/assets/copy-icon.svg" />
                                    </button>
                                    <Link   className="w-2/12 bg-white border border-purple-600" >
                                        <img className="my-2 w-full " style={{ height:"20px"}} src="/assets/change-code.svg" />
                                    </Link>
                                </div>
                            </div>
                            {/*<p className="my-2 font16-res-400">Code class</p>*/}
                            {/*<div className="lg:w-10/12 md:w-8/12 w-10/12  bg-white flex  mx-auto border-radius-4" >*/}
                            {/*    <input ref={inputRef}  className=" font16-res-400 py-2 px-3 bg-gray-100 w-10/12" value={props.code}  onChange={() => {}} />*/}
                            {/*    <button className="w-2/12 bg-purple-500" onClick={copyText}>*/}
                            {/*        <img className="my-auto w-full " style={{ height:"20px"}} src="/assets/copy-icon.svg" />*/}
                            {/*    </button>*/}
                            {/*</div>*/}
                        </div>
                        {/*<div className="md:w-10/12 hidden lg:block w-11/12 shadow mx-auto lg:my-6 my-2">*/}
                        {/*    <div className="md:pt-5 pt-1 font16-res-400 text-left mx-5">*/}
                        {/*        <h4 className="font16-res-400 ">Keleolah History anda</h4>*/}
                        {/*    </div>*/}
                        {/*    <div className="font14-res-300">*/}
                        {/*        <div className="flex gap-5 justify-between  px-6 pt-6">*/}
                        {/*            <label htmlFor="day">Pilih Hari : </label>*/}
                        {/*            <select id="day"  className="w-2/5" onChange={handleDayChange} value={selectedDay}>*/}
                        {/*                <option value="" className="bg-white px-4 py-3  border-none hover:bg-gray-50 cursor-pointer text-gray-600 hover:text-purple-700" >Select</option>*/}
                        {/*                {generateDaysOptions()}*/}
                        {/*            </select>*/}
                        {/*        </div>*/}
                        {/*        <div className="flex gap-5  justify-between px-6 py-5">*/}
                        {/*            <label htmlFor="month">Pilih Bulan : </label>*/}
                        {/*            <select id="month" className="w-2/5" onChange={handleMonthChange} value={selectedMonth}>*/}
                        {/*                <option className="bg-white px-4 py-3  border-none hover:bg-gray-50 cursor-pointer text-gray-600 hover:text-purple-700"  value="">Select</option>*/}
                        {/*                <option className="bg-white px-4 py-3  border-none hover:bg-gray-50 cursor-pointer text-gray-600 hover:text-purple-700"  value="1">January</option>*/}
                        {/*                <option className="bg-white px-4 py-3  border-none hover:bg-gray-50 cursor-pointer text-gray-600 hover:text-purple-700"  value="2">February</option>*/}
                        {/*                <option className="bg-white px-4 py-3  border-none hover:bg-gray-50 cursor-pointer text-gray-600 hover:text-purple-700"  value="3">March</option>*/}
                        {/*                <option className="bg-white px-4 py-3  border-none hover:bg-gray-50 cursor-pointer text-gray-600 hover:text-purple-700"  value="4">April</option>*/}
                        {/*                <option className="bg-white px-4 py-3  border-none hover:bg-gray-50 cursor-pointer text-gray-600 hover:text-purple-700"  value="5">May</option>*/}
                        {/*                <option className="bg-white px-4 py-3  border-none hover:bg-gray-50 cursor-pointer text-gray-600 hover:text-purple-700"  value="6">June</option>*/}
                        {/*                <option className="bg-white px-4 py-3  border-none hover:bg-gray-50 cursor-pointer text-gray-600 hover:text-purple-700"  value="7">July</option>*/}
                        {/*                <option className="bg-white px-4 py-3  border-none hover:bg-gray-50 cursor-pointer text-gray-600 hover:text-purple-700"  value="8">August</option>*/}
                        {/*                <option className="bg-white px-4 py-3  border-none hover:bg-gray-50 cursor-pointer text-gray-600 hover:text-purple-700"  value="9">September</option>*/}
                        {/*                <option className="bg-white px-4 py-3  border-none hover:bg-gray-50 cursor-pointer text-gray-600 hover:text-purple-700"  value="10">October</option>*/}
                        {/*                <option className="bg-white px-4 py-3  border-none hover:bg-gray-50 cursor-pointer text-gray-600 hover:text-purple-700"  value="11">November</option>*/}
                        {/*                <option className="bg-white px-4 py-3  border-none hover:bg-gray-50 cursor-pointer text-gray-600 hover:text-purple-700"  value="12">December</option>*/}
                        {/*            </select>*/}
                        {/*        </div>*/}
                        {/*        <div className="flex gap-5 justify-between  px-6 pb-6">*/}
                        {/*            <label htmlFor="year">Pilih Tahun:</label>*/}
                        {/*            <select id="year" className="w-2/5 border-none" onChange={handleYearChange} value={selectedYear}>*/}
                        {/*                <option className="bg-white px-4 py-3  border-none hover:bg-gray-50 cursor-pointer text-gray-600 hover:text-purple-700" value="">Select</option>*/}
                        {/*                <option className="bg-white px-4 py-3  border-none hover:bg-gray-50 cursor-pointer text-gray-600 hover:text-purple-700" value="2021">2021</option>*/}
                        {/*                <option className="bg-white px-4 py-3  border-none hover:bg-gray-50 cursor-pointer text-gray-600 hover:text-purple-700" value="2022">2022</option>*/}
                        {/*                <option className="bg-white px-4 py-3  border-none hover:bg-gray-50 cursor-pointer text-gray-600 hover:text-purple-700" value="2023">2023</option>*/}
                        {/*                /!* Add more year options *!/*/}
                        {/*            </select>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*    <div className="w-full pb-4">*/}
                        {/*        <button*/}
                        {/*            onClick={() => window.location.reload()}*/}
                        {/*            className="w-10/12 py-1.5 bg-purple-600 hover:bg-purple-700 cursor-pointer border-radius-4 text-white hover:text-gray-50  font14-res-300 mx-auto ">*/}
                        {/*            Save*/}
                        {/*        </button>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        </>
    )
}
