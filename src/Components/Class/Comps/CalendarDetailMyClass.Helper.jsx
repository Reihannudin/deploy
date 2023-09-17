import React, {useEffect, useState} from "react";

export const CalendarDetailMyClassHelper = () => {

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
        </>
    )
}