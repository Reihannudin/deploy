import {TaskMyClassCardComponent} from "../Card/TaskMyClassCard.Component";
import React, {useEffect, useState} from "react";
import api from "../../../Config/api";
import {useNavigate} from "react-router-dom";

const AbsentDetailMyClassHelper = ({slug , username , userId , start_day , month , year}) => {
    //
    // console.log(start_day)
    // console.log(month)
    // console.log(year)

    const navigate = useNavigate()
    const [absents, setAbsents] = useState([]);
    const [filterAbsent, setFilterAbsent] = useState('');
    const [isFetchingAbsent, setIsFetchingAbsent] = useState(true);
    const [isDataFetchedAbsent, setIsDataFetchedAbsent] = useState(false);
    const [errorAbsent, setErrorAbsent] = useState(null);

    let token = localStorage.getItem('auth_token');

    useEffect(() => {
        let isMounted = true;

        const fetchData = async () => {
            try {
                if (!isDataFetchedAbsent) {
                    const response = await api.get(`${slug}/absents?filter=${filterAbsent}&start_day=${start_day}&month=${month}&year=${year}` , {
                        "Content-Type" : "multipart/form-data" ,
                        "Authorization" : "Bearer " + token,
                    });
                    const data = response.data;

                    if (isMounted) {
                        setAbsents(data);
                        setIsDataFetchedAbsent(true);
                        setIsFetchingAbsent(false);

                    }
                }

            } catch (error) {
                if (isMounted) {
                    setErrorAbsent(error);
                    setIsFetchingAbsent(false);
                }
            }
        };

        const timeout = setTimeout(() => {
            if (isFetchingAbsent) {
                if (isMounted) {
                    setErrorAbsent(new Error("Timeout: Could not fetch data."));
                    setIsFetchingAbsent(false);
                }
            }
        }, 20000);

        fetchData();

        return () => {
            isMounted = false;
            clearTimeout(timeout);
        };
    }, []);

    const handleFilterAbsentClick = (filterValue) => {
        setFilterAbsent(filterValue);
        const url = `?filter=${filterValue}`;
        navigate(url); // Replace navigate with your navigation function
    };

    const [isDropdownFilterAbsent , setIsDropdownFilterAbsent] = useState(true);

    const toggleDropdowFilterAbsent = () => {
        setIsDropdownFilterAbsent((prevHidden) => !prevHidden);
    };


    const  handleFilterAbsent = () => {
        setIsDropdownFilterAbsent(true)
    }

    console.log(isDropdownFilterAbsent)

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
                            {absents.map((item) => {
                                return(
                                    <div key={item.id}>
                                        <li  key={item.id}>
                                            <TaskMyClassCardComponent username={username} id={item.id} user_id={userId} name={item.name} type={item.type} action={item.action} status={item.status} end_time={item.end_time}  date={item.date} post_time={item.post_time}/>
                                        </li>
                                    </div>
                                )
                            })}
                        </ul>
                    )}
                </div>
            </div>

        </>
    )
}

export default React.memo(AbsentDetailMyClassHelper);