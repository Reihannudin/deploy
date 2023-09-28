import {TaskMyClassCardComponent} from "../Card/TaskMyClassCard.Component";
import React, {useEffect, useState} from "react";
import api from "../../../Config/api";
import {useLocation, useNavigate} from "react-router-dom";

export const AssignmentDetailClassHelper = ({ slug, username, userId , start_day , month , year}) => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    const currentDate = new Date();

// Get the values of the query parameters
    const day = searchParams.get("start_day");
    const queryMonth = searchParams.get("month");
    const queryYear = searchParams.get("year");
// Use the query parameters if they exist and are not empty, otherwise use the current date components
    const currentDay = (day === null || isNaN(day) || day === "" || start_day === "") ? currentDate.getDate() : parseInt(day);
    const currentMonth = (queryMonth === null || isNaN(queryMonth) || queryMonth === "" ||  month === "") ? (currentDate.getMonth() + 1) : parseInt(queryMonth); // Months are 0-based
    const currentYear = (queryYear === null || isNaN(queryYear) || queryYear === "" || year === "") ? currentDate.getFullYear() : parseInt(queryYear);

    const navigate = useNavigate()
    const [assignments, setAssignments] = useState([]);
    const [filterAssignment, setFilterAssignment] = useState('');
    const [isFetchingAssignment, setIsFetchingAssignment] = useState(true);
    const [isDataFetchedAssignment, setIsDataFetchedAssignment] = useState(false);
    const [errorAssignment, setErrorAssignment] = useState(null);

    let token = localStorage.getItem("auth_token");


    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem("auth_token");
                setIsFetchingAssignment(true); // Set isFetchingAbsent to true before fetching data
                const response = await api.get(`${slug}/assignment?filter=${filterAssignment}&start_day=${currentDay}&month=${currentMonth}&year=${currentYear}`, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                });

                await new Promise((resolve) => setTimeout(resolve, 1500));
                const data = response.data;
                setAssignments(data);
                setIsDataFetchedAssignment(true);
                setIsFetchingAssignment(false); // Set isFetchingAbsent to false after data is fetched
            } catch (error) {
                setErrorAssignment(error);
                setIsFetchingAssignment(false); // Set isFetchingAbsent to false in case of an error
            }
        };

        fetchData();
    }, [ slug, filterAssignment, currentDay, currentMonth, currentYear]);


    const handleFilterAssignmentsClick = (filterValue) => {
        setFilterAssignment(filterValue);
        const url = `?filter=${filterValue}`;
        navigate(url); // Replace navigate with your navigation function
    };

    const [isDropdownFilterTugas , setIsDropdownFilterTugas] = useState(true);

    const toggleDropdowFilterTugas = () => {
        setIsDropdownFilterTugas((prevHidden) => ! prevHidden);
    }
    const  handleFilterTugas = () => {
        setIsDropdownFilterTugas(true)
    }

    return(
        <>
            <div className="w-full pb-5">
                <div className="mt-2">
                    <div className="flex sm:mx-6  md:mx-0 w-full pb-0 mb-2">
                        <div className="flex w-full justify-between">
                            <div className="my-auto roboto font16-res-400" style={{ color:"#4f4f4f"}}>
                                <h2 className="" style={{ fontWeight:"500"}}>List Tugas</h2>
                            </div>

                                <button className="my-auto ms-auto"  onClick={toggleDropdowFilterTugas}>
                                    <div  className="px-1 py-2 bg-white hover:px-1 hover:bg-gray-100 radius-100 ">
                                        <div className="my-auto  mx-1 " style={{ height:"20px"}}>
                                            <img className="h-full w-full" src="/assets/filter-icon.svg"/>
                                        </div>
                                    </div>
                                </button>
                            <div className="relative">

                                {isDropdownFilterTugas ? null : (
                                    <div> <div className="relative ">
                                        <div className="absolute right-0    z-40 top-7  font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-36 md:w-44 dark:bg-gray-700 dark:divide-gray-600">
                                            <ul className="py-2 text-sm text-left text-gray-700 font14-res-300 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                                <li className={"sm:py-1"}>
                                                    <button className="block px-4 py-2 w-full text-left hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-purple-600 dark:hover:text-white"  onClick={() => handleFilterAssignmentsClick('terbaru')}>Terbaru</button>
                                                </li>
                                                <li className={"sm:py-1"}>
                                                    <button className="block px-4 py-1.5 lg:py-2   w-full text-left hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-purple-600 dark:hover:text-white" onClick={() => handleFilterAssignmentsClick('berlangsung')}>Berlangsung</button>
                                                </li>
                                                <li className={"sm:py-1"}>
                                                    <button className="block px-4 py-2  w-full text-left hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-purple-600 dark:hover:text-white" onClick={() => handleFilterAssignmentsClick('selesai')}>Selesai</button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                        <div
                                            id="dropdown_profile"
                                            className="z-10 fixed inset-0"
                                            onClick={handleFilterTugas}
                                        >
                                            <div className="bg-gray-50 bg-opacity-10 w-full h-full z-40 absolute right-0 bottom-0"></div>

                                        </div>
                                    </div>
                                )}

                            </div>
                        </div>
                    </div>
                    {isFetchingAssignment &&  (
                        <div className="md:py-8 sm:py-6 py-4">
                            <div className="flex items-center justify-center h-32 mb-2 mt-6 ">

                                <div
                                    className="animate-spin rounded-full border-r-gray-50 border-l-gray-50  border-b-gray-50  w-8 h-8 md:h-10 md:w-10 border-t-4 border-purple-700"></div>

                            </div>
                        </div>
                    )}
                    { !isFetchingAssignment && (
                        <>
                            {assignments.length === 0 ? (
                                <div className="md:py-8 sm:py-6 py-6 text-center">
                                    <div className="mb-0 mt-2">
                                        <div className="mx-auto my-5" style={{ height:"30px"}}>
                                            <img className="h-full mx-auto" src="/assets/icon-tidak-ada.svg" />
                                        </div>
                                        <h2 className="font16-res-300 my-3 text-gray-500">Tidak ada tugas</h2>

                                    </div>
                                </div>
                            ):(
                                <ul>
                                    {!assignments ? (
                                        <div className="flex items-center justify-center h-96 md:mt-6 mt-20">

                                            <div
                                                className="animate-spin rounded-full border-r-gray-50 border-l-gray-50  border-b-gray-50  w-8 h-8 md:h-10 md:w-10 border-t-4 border-purple-700"></div>

                                        </div>
                                    ): (
                                        <>
                                            {assignments.map((item) => {
                                                return(
                                                    <div key={item.id}>
                                                        <li  key={item.id}>
                                                            <TaskMyClassCardComponent username={username} id={item.id} user_id={userId} name={item.name} type={item.type} action={item.action} status={item.status} end_time={item.end_time}  date={item.date} post_time={item.post_time}/>
                                                        </li>
                                                    </div>
                                                )
                                            })}
                                        </>
                                    )}

                                </ul>
                            )}
                        </>
                    )}
                    {/*{assignments.length === 0 ? (*/}
                    {/*    <div className="md:py-8 sm:py-6 py-4">*/}
                    {/*        <div className="mb-0 mt-2">*/}
                    {/*            <div>*/}
                    {/*                <div className="mx-auto" style={{ height: "150px", width: "270px" }}>*/}
                    {/*                    <img className="w-full mx-auto h-full" src="/assets/icon-not-assignment.svg" />*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*):(*/}
                    {/*    <ul>*/}
                    {/*        {assignments.map((item) => {*/}
                    {/*            return(*/}
                    {/*                <div key={item.id}>*/}
                    {/*                    <li  key={item.id}>*/}
                    {/*                        <TaskMyClassCardComponent   username={username} id={item.id} user_id={userId} name={item.name} status={item.status} action={item.action} type={item.type} end_time={item.end_time}  date={item.date}  deadline_date={item.deadline_date} post_time={item.post_time}/>*/}
                    {/*                    </li>*/}
                    {/*                </div>*/}
                    {/*            )*/}
                    {/*        })}*/}
                    {/*    </ul>*/}
                    {/*)}*/}
                </div>
            </div>

        </>
    )
}