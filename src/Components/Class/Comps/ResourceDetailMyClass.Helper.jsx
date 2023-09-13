import {TaskMyClassCardComponent} from "../Card/TaskMyClassCard.Component";
import React, {useEffect, useState} from "react";
import api from "../../../Config/api";
import {useNavigate} from "react-router-dom";

export const ResourceDetailMyClassHelper = ({slug , username , userId}) => {

    const navigate = useNavigate()
    const [resources , setResources] = useState([]);
    const [filterResource, setFilterResource] = useState('');
    const [isFetchingResource, setIsFetchingResource] = useState(true);
    const [isDataFetchedResource, setIsDataFetchedResource] = useState(false);
    const [errorResource, setErrorResource] = useState(null);

    useEffect(() => {
        let isMounted = true;

        const fetchData = async () => {
            try {
                if (!isDataFetchedResource) {
                    const response = await api.get(`${slug}/resources?filter=${filterResource}`);
                    const data = response.data;

                    if (isMounted) {
                        setResources(data);
                        setIsDataFetchedResource(true);
                        setIsFetchingResource(false);
                    }
                }

            } catch (error) {
                if (isMounted) {
                    setErrorResource(error);
                    setIsFetchingResource(false);
                }
            }
        };

        const timeout = setTimeout(() => {
            if (isFetchingResource) {
                if (isMounted) {
                    setErrorResource(new Error("Timeout: Could not fetch data."));
                    setIsFetchingResource(false);
                }
            }
        }, 20000);

        fetchData();

        return () => {
            isMounted = false;
            clearTimeout(timeout);
        };
    }, [isDataFetchedResource]);

    const handleFilterClickResource = (filterValue) => {
        setFilterResource(filterValue);
        const url = `?filter=${filterValue}`;
        navigate(url); // Replace navigate with your navigation function
    };

    const [isDropdownFilterResource , setIsDropdownFilterResource] = useState(true);

    const toggleDropdowFilterResource = () => {
        setIsDropdownFilterResource((prevHidden) => ! prevHidden);
    }
    const  handleFilterResource = () => {
        setIsDropdownFilterResource(true)
    }


    return(
        <>
            <div className="w-full py-5">
                <div className="mt-8">
                    <div className="flex sm:mx-6 md:mx-0 w-full pb-0  mb-2">
                        <div className="flex w-full justify-between">
                            <div className="my-auto roboto font16-res-400" style={{ color:"#4f4f4f"}}>
                                <h2 className="" style={{ fontWeight:"500"}}>Resources List</h2>
                            </div>
                            <div className="relative">
                                <button className="my-auto"  onClick={toggleDropdowFilterResource}>
                                    <div  className="px-1 py-2 bg-white hover:px-1 hover:bg-gray-100 radius-100 ">
                                        <div className="my-auto  mx-1 " style={{ height:"20px"}}>
                                            <img className="h-full w-full" src="/assets/filter-icon.svg"/>
                                        </div>
                                    </div>
                                </button>
                                {isDropdownFilterResource ? null : (
                                    <div> <div className="relative ">
                                        <div className="absolute right-0  z-50 top-0 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-36 md:w-44 dark:bg-gray-700 dark:divide-gray-600">
                                            <ul className="py-2 text-sm text-left text-gray-700 font14-res-300 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                                <li>
                                                    <button className="block px-4 py-2 w-full text-left hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-purple-600 dark:hover:text-white"  onClick={() => handleFilterClickResource('terbaru')}>Terbaru</button>
                                                </li>
                                                <li>
                                                    <button className="block px-4 py-2  w-full text-left hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-purple-600 dark:hover:text-white" onClick={() => handleFilterClickResource('terlama')}>Terlama</button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                        <div
                                            id="dropdown_profile"
                                            className="z-10 fixed inset-0"
                                            onClick={handleFilterResource}
                                        >
                                            <div className="bg-gray-50 bg-opacity-10 w-full h-full z-40 absolute right-0 bottom-0"></div>

                                        </div>
                                    </div>
                                )}

                            </div>
                        </div>
                    </div>
                    {resources.length === 0 ? (
                        <div className="md:py-8 sm:py-6 py-4">
                            <div className="mb-0 mt-2">
                                <div>
                                    <div className="mx-auto" style={{ height: "150px", width: "270px" }}>
                                        <img className="w-full mx-auto h-full" src="/assets/icon-not-resource.svg" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ):(
                        <ul>
                            {resources.map((item) => {
                                return(
                                    <div key={item.id}>
                                        <li  key={item.id}>
                                            <TaskMyClassCardComponent   username={username} id={item.id} name={item.name} status={item.status} deadline_date={item.deadline_date} type={item.task_type} post_time={item.post_time} end_time={item.end_time}  date={item.date}/>
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