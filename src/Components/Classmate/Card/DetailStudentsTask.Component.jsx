import {useState} from "react";

export const DetailStudentTaskCardComponent = (props) => {

    const [dropdownDetail , setDropdownDetail] = useState(true);

    const toggleDropdownDetail = () => {
        setDropdownDetail((prevHidden) => ! prevHidden);
    }

    return(
        <>
            <div className="bg-white w-full my-1 border-radius-8 shadow">
                <div className="w-full  flex justify-between ">
                    <div className="flex sm:w-4/12 w-full">
                        <div className="block py-3">
                            <div className="w-full   mx-5 text-left">
                                <h3 className="font16-res-300" style={{color:"#646464"}}>{props.student}</h3>
                            </div>
                            <div className="w-full flex gap-2  mx-5 text-left">
                                <p className="font14-res-300" style={{ color:"#605f5f"}}>Status : </p>
                                {props.status ? (
                                    <p className="font14-res-300" style={{  fontWeight:"550" , color:"#605f5f"}}>{props.status}</p>
                                ) : (
                                    <p className="font14-res-300" style={{  fontWeight:"550" , color:"#605f5f"}}>-</p>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="py-3  flex lg:w-full md:w-11/12 sm:w-9/12 w-full justify-end sm:justify-between">
                        <div className=" hidden sm:block">
                            <div className="w-full flex gap-2 md:mx-5 mx-2 text-left">
                                <p className="font14-res-300" style={{ color:"#605f5f"}}>Time : </p>
                                {props.long_time ? (
                                    <p className="font14-res-300" style={{  fontWeight:"550" , color:"#605f5f"}}>{props.long_time} Minute</p>
                                ) : (
                                    <p className="font14-res-300" style={{  fontWeight:"550" , color:"#605f5f"}}>-</p>
                                )}
                            </div>
                            <div className="w-full  flex gap-2 mt-0.5 md:mx-5 mx-2  text-left">
                                <p className="font14-res-300" style={{ color:"#605f5f"}}>InTime : </p>
                                {props.assignment_time ? (
                                    <p className="font14-res-300" style={{ fontWeight:"550" , color:"#605f5f"}}>{props.assignment_time}</p>
                                ): (
                                    <p className="font14-res-300" style={{  fontWeight:"550" , color:"#605f5f"}}>-</p>
                                )}
                            </div>
                        </div>
                            <div className="flex sm:mt-1 mt-0 sm:gap-3 gap-1">
                                <div className={"mt-1"}>
                                    <button className="border border-purple-500 font14-res-300 py-1 px-2 text-purple-700 border-radius-4">
                                        Nilai Pengerjaan
                                    </button>
                                </div>
                                <div className="relative ">
                                    <button onClick={toggleDropdownDetail} className="md:mx-4 mt-1 mx-2">
                                        <div className="my-auto mx-auto" style={{ height:"24px"}}>
                                            <img className="h-full" src="/assets/menu-icon.svg"/>
                                        </div>
                                    </button>
                                    <div id="dropdown_profile"
                                         className={`z-10 ${dropdownDetail ? 'hidden' : ''} absolute right-10 top-0 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}>
                                        <ul className="py-2 text-sm text-left text-gray-700 dark:text-gray-400"
                                            aria-labelledby="dropdownLargeButton">
                                            <li>
                                                <a href={`/`} className="block px-4 py-2 font14-res-300 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-purple-600  dark:hover:text-white">Lihat Detail</a>
                                            </li>
                                            <li>
                                                <a href={`/`} className="block px-4 py-2 font14-res-300 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-purple-600  dark:hover:text-white">Lihat Profile</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
}