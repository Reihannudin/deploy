import {useEffect, useState} from "react";

export const DetailClassmateAbsentCardComponent = (props) => {

    const [windowWidth , setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize' , handleResize);

        return () => {
            window.removeEventListener('resize' , handleResize);
        }
    } , []);

    const truncatedName = props.classmate.length > 16 ? `${props.classmate.slice(0, 14)}...` : props.classmate;

    const [dropdownDetail , setDropdownDetail] = useState(true);

    const toggleDropdownDetail = () => {
        setDropdownDetail((prevHidden) => ! prevHidden);
    }

    return(
        <>
            <div className="bg-white w-full my-1 border-radius-8 shadow">
                <div className="w-full  flex">
                    <div className="flex w-5/12">
                        <div className="block py-3">
                            <div className="w-full   mx-5 text-left">
                                <h3 className="font16-res-300" style={{color:"#646464"}}>{window.innerWidth <= 415 ? truncatedName : props.classmate}</h3>
                            </div>
                            <div className="w-full   mx-5 text-left">
                                <p className="-res-300" style={{  color:"#807e7e"}}>Absent</p>
                            </div>
                        </div>
                    </div>
                    <div className="py-3 w-7/12 flex justify-between">
                        <div className="block">
                            <div className="w-full flex gap-2 sm:mx-5 mx-2 text-left">
                                <p className="font14-res-300" style={{ color:"#605f5f"}}>Status : </p>
                                {props.status === null ? (
                                    <p className="font14-res-300" style={{  fontWeight:"550" , color:"#605f5f"}}>Belum Absent</p>
                                ) : (
                                    <p className="font14-res-300" style={{  fontWeight:"550" , color:"#605f5f"}}>{props.status}</p>
                                )}
                            </div>
                            <div className="w-full  flex gap-2 sm:mx-5 mx-2 text-left">
                                <p className="font14-res-300" style={{ color:"#605f5f"}}>InTime : </p>
                                <p className="font14-res-300" style={{ fontWeight: "550", color: "#605f5f" }}>
                                    {props.absent_time === null ? "Tidak ada" : props.absent_time}
                                </p>
                            </div>
                        </div>
                        <div className="flex sm:mt-1 mt-0 sm:gap-3 gap-1">
                            <div className="relative ">
                                <button onClick={toggleDropdownDetail} className="md:mx-4 mt-1 mx-2">
                                    <div className="my-auto mx-auto" style={{ height:"24px"}}>
                                        <img className="h-full" src="/assets/menu-icon.svg"/>
                                    </div>
                                </button>
                                <div id="dropdown_profile"
                                     className={`z-10 ${dropdownDetail ? 'hidden' : ''} absolute right-10 top-0 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-32 md:w-36 dark:bg-gray-700 dark:divide-gray-600`}>
                                    <ul className="py-2 text-sm text-left text-gray-700 dark:text-gray-400"
                                        aria-labelledby="dropdownLargeButton">
                                        <li>
                                            <a href={`/`} className="block px-4 py-1 md:py-1.5  font15-res-300 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-purple-600  dark:hover:text-white">Lihat Detail</a>
                                        </li>
                                        <li>
                                            <a href={`/`} className="block px-4 py-1 md:py-1.5  font15-res-300 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-purple-600  dark:hover:text-white">Lihat Profile</a>
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