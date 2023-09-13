import {TaskMyClassCardComponent} from "../Card/TaskMyClassCard.Component";
import React, {useEffect, useState} from "react";
import api from "../../../Config/api";
import {useNavigate} from "react-router-dom";

export const AssignmentDetailMyClassHelper = ({slug , username , userId}) => {

    const navigate = useNavigate()
    const [assignments, setAssignments] = useState([]);
    const [filterAssignment, setFilterAssignment] = useState('');
    const [isFetchingAssignment, setIsFetchingAssignment] = useState(true);
    const [isDataFetchedAssignment, setIsDataFetchedAssignment] = useState(false);
    const [errorAssignment, setErrorAssignment] = useState(null);

    useEffect(() => {
        let isMounted = true;

        const fetchData = async () => {
            try {
                if (!isDataFetchedAssignment) {
                    const response = await api.get(`${slug}/assignment?filter=${filterAssignment}`);
                    const data = response.data;

                    if (isMounted) {
                        setAssignments(data);
                        setIsDataFetchedAssignment(true);
                        setIsFetchingAssignment(false);
                    }
                }

            } catch (error) {
                if (isMounted) {
                    isFetchingAssignment(error);
                    setIsFetchingAssignment(false);
                }
            }
        };

        const timeout = setTimeout(() => {
            if (isFetchingAssignment) {
                if (isMounted) {
                    setErrorAssignment(new Error("Timeout: Could not fetch data."));
                    setIsFetchingAssignment(false);
                }
            }
        }, 20000);

        fetchData();

        return () => {
            isMounted = false;
            clearTimeout(timeout);
        };
    }, [isDataFetchedAssignment]);

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
            <div className="w-full py-5">
                <div className="mt-8">
                    <div className="flex sm:mx-6  md:mx-0 w-full pb-0 mb-2">
                        <div className="flex w-full justify-between">
                            <div className="my-auto roboto font16-res-400" style={{ color:"#4f4f4f"}}>
                                <h2 className="" style={{ fontWeight:"500"}}>List Tugas</h2>
                            </div>

                            <div className="relative">
                                <button className="my-auto"  onClick={toggleDropdowFilterTugas}>
                                    <div  className="px-1 py-2 bg-white hover:px-1 hover:bg-gray-100 radius-100 ">
                                        <div className="my-auto  mx-1 " style={{ height:"20px"}}>
                                            <img className="h-full w-full" src="/assets/filter-icon.svg"/>
                                        </div>
                                    </div>
                                </button>
                                {isDropdownFilterTugas ? null : (
                                    <div> <div className="relative ">
                                        <div className="absolute right-0  z-50 top-0 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-36 md:w-44 dark:bg-gray-700 dark:divide-gray-600">
                                            <ul className="py-2 text-sm text-left text-gray-700 font14-res-300 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                                <li>
                                                    <button className="block px-4 py-2 w-full text-left hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-purple-600 dark:hover:text-white"  onClick={() => handleFilterAssignmentsClick('terbaru')}>Terbaru</button>
                                                </li>
                                                <li>
                                                    <button className="block px-4 py-2  w-full text-left hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-purple-600 dark:hover:text-white" onClick={() => handleFilterAssignmentsClick('berlangsung')}>Berlangsung</button>
                                                </li>
                                                <li>
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
                    {assignments.length === 0 ? (
                        <div className="md:py-8 sm:py-6 py-4">
                            <div className="mb-0 mt-2">
                                <div>
                                    <div className="mx-auto" style={{ height: "150px", width: "270px" }}>
                                        <img className="w-full mx-auto h-full" src="/assets/icon-not-assignment.svg" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ):(
                        <ul>
                            {assignments.map((item) => {
                                return(
                                    <div key={item.id}>
                                        <li  key={item.id}>
                                            <TaskMyClassCardComponent   username={username} id={item.id} user_id={userId} name={item.name} status={item.status} action={item.action} type={item.type} end_time={item.end_time}  date={item.date}  deadline_date={item.deadline_date} post_time={item.post_time}/>
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