import {TaskMyClassCardComponent} from "../Card/TaskMyClassCard.Component";
import React, {useEffect, useState} from "react";
import api from "../../../Config/api";
import {useLocation, useNavigate, useParams} from "react-router-dom";


const AbsentDetailMyClassHelper = ({ slug, username, userId , start_day , month , year}) => {
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

    const navigate = useNavigate();
    const [absents, setAbsents] = useState([]);
    const [filterAbsent, setFilterAbsent] = useState("");
    const [isFetchingAbsent, setIsFetchingAbsent] = useState(true);
    const [isDataFetchedAbsent, setIsDataFetchedAbsent] = useState(false);
    const [errorAbsent, setErrorAbsent] = useState(null);

    let token = localStorage.getItem("auth_token");

    // console.log(`${slug}/absents?filter=${filterAbsent}&start_day=${currentDay}&month=${currentMonth}&year=${currentYear}`);
    // console.log(`${slug}/absents?filter=${filterAbsent}&start_day=${start_day}&month=${month}&year=${year}`);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const token = localStorage.getItem("auth_token");
    //             const response = await api.get( `${slug}/absents?filter=${filterAbsent}&start_day=${currentDay}&month=${currentMonth}&year=${currentYear}`, {
    //                 headers: {
    //                     "Content-Type": "application/json",
    //                     Authorization: `Bearer ${token}`,
    //                 },
    //             });
    //
    //             await new Promise((resolve) => setTimeout(resolve, 1500));
    //             const data = response.data;
    //             // setClasses(data);
    //             // setIsFetching(false);
    //             setAbsents(data);
    //             setIsDataFetchedAbsent(true);
    //             setIsFetchingAbsent(false);
    //         } catch (error) {
    //             setErrorAbsent(error);
    //             setIsFetchingAbsent(false);
    //         }
    //     };
    //
    //     fetchData();
    // }, [absents]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem("auth_token");
                setIsFetchingAbsent(true); // Set isFetchingAbsent to true before fetching data
                const response = await api.get(`${slug}/absents?filter=${filterAbsent}&start_day=${currentDay}&month=${currentMonth}&year=${currentYear}`, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                });

                await new Promise((resolve) => setTimeout(resolve, 1500));
                const data = response.data;
                setAbsents(data);
                setIsDataFetchedAbsent(true);
                setIsFetchingAbsent(false); // Set isFetchingAbsent to false after data is fetched
            } catch (error) {
                setErrorAbsent(error);
                setIsFetchingAbsent(false); // Set isFetchingAbsent to false in case of an error
            }
        };

        fetchData();
    }, [ slug, filterAbsent, currentDay, currentMonth, currentYear]);

    // console.log("isFetchingAbsent" , isFetchingAbsent)
    // console.log("isDataFetchedAbsent" , isDataFetchedAbsent)

    const handleFilterAbsentClick = (filterValue) => {
        setFilterAbsent(filterValue);
        const url = `?filter=${filterValue}&start_day=${currentDay}&month=${currentMonth}&year=${currentYear}`;
        navigate(url); // Replace navigate with your navigation function
    };

    const [isDropdownFilterAbsent, setIsDropdownFilterAbsent] = useState(true);

    const toggleDropdowFilterAbsent = () => {
        setIsDropdownFilterAbsent((prevHidden) => !prevHidden);
    };

    const handleFilterAbsent = () => {
        setIsDropdownFilterAbsent(true);
    };

    // console.log("Get from url request")
    // console.log(day)
    // console.log(queryMonth)
    // console.log(queryYear)
    //
    // console.log("Get from detail class")
    // console.log(start_day)
    // console.log(month)
    // console.log(year)
    //
    // console.log("Get from current day")
    // console.log(currentDate.getDate())
    // console.log(currentDate.getMonth() + 1)
    // console.log(currentDate.getFullYear())
    //
    // console.log("day validate"  ,(day === null || isNaN(day) || day === "" || start_day === "") ? currentDate.getDate() : parseInt(day))
    // console.log("month validate"  ,(queryMonth === null || isNaN(queryMonth) || queryMonth === "" ||  month === "") ? (currentDate.getMonth() + 1) : parseInt(queryMonth));
    // console.log("years validate"  ,(queryYear === null || isNaN(queryYear) || queryYear === "" || year === "") ? currentDate.getFullYear() : parseInt(queryYear));

    if (absents.length === 0){
        console.log("Absent tidak ada")
    } else {
        console.log(absents)
    }


    return(
        <>
            <div className="w-full pb-5">
                <div className="mt-2">
                    <div className="flex w-full  sm:mx-6  md:mx-0 pb-0  mb-2">
                        <div className="flex w-full justify-between">
                            <div className="my-auto roboto font16-res-400" style={{  color:"#4f4f4f"}}>
                                <h2 className="" style={{ fontWeight:"500"}}>Absent List</h2>
                            </div>
                            <button className="my-auto ms-auto"  onClick={toggleDropdowFilterAbsent}>
                                <div  className="px-1 py-2 bg-white hover:px-1 hover:bg-gray-100 radius-100 ">
                                    <div className="my-auto  mx-1 " style={{ height:"20px"}}>
                                        <img className="h-full w-full" src="/assets/filter-icon.svg"/>
                                    </div>
                                </div>
                            </button>
                            <div className="relative">

                                {isDropdownFilterAbsent ? null : (
                                    <div> <div className="relative ">
                                        <div className="absolute right-0  z-40 top-7 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-36 md:w-44 dark:bg-gray-700 dark:divide-gray-600">
                                            <ul className="py-2 text-sm text-left text-gray-700 font14-res-300 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                                <li className={"sm:py-1"}>
                                                    <button className="block px-4 py-2 w-full text-left hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-purple-600 dark:hover:text-white" onClick={() => handleFilterAbsentClick('terbaru')}>Terbaru</button>
                                                </li>
                                                <li className={"sm:py-1"}>
                                                    <button className="block px-4 py-1.5 lg:py-2  w-full text-left hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-purple-600 dark:hover:text-white" onClick={() => handleFilterAbsentClick('berjalan')}>Berjalan</button>
                                                </li>
                                                <li className={"sm:py-1"}>
                                                    <button className="block px-4 py-2  w-full text-left hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-purple-600 dark:hover:text-white" onClick={() => handleFilterAbsentClick('selesai')}>Selesai</button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                        <div
                                            id="dropdown_filter_absent"
                                            className="z-10 fixed inset-0"
                                            onClick={handleFilterAbsent}
                                        >
                                            <div className="bg-gray-50 bg-opacity-10 w-full h-full z-40 absolute right-0 bottom-0"></div>

                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    {isFetchingAbsent &&  (
                        <div className="md:py-8 sm:py-6 py-4">
                            <div className="flex items-center justify-center h-32 mb-2 mt-6 "><div className="animate-spin">
                                <img src="/assets/planet_gif-1.gif" className="h-20 w-20" alt="Loading" />
                            </div>
                            </div>
                        </div>
                    )}
                    { !isFetchingAbsent && (
                      <>
                          {absents.length === 0 ? (
                              <div className="md:py-8 sm:py-6 py-4">
                                  <div className="mb-0 mt-2">
                                      <div>
                                          <div className="mx-auto" style={{ height: "150px", width: "270px" }}>
                                              <img className="w-full mx-auto h-full" src="/assets/icon-no-absent.svg" />
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          ):(
                              <ul>
                                  {!absents ? (
                                      <div className="flex items-center justify-center h-96 md:mt-6 mt-20">
                                          <div className="animate-spin">
                                              <img src="/assets/planet_gif-1.gif" className="h-20 w-20" alt="Loading" />
                                          </div>
                                      </div>
                                  ): (
                                      <>
                                          {absents.map((item) => {
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
                </div>
            </div>

        </>
    )
};

export default React.memo(AbsentDetailMyClassHelper);
