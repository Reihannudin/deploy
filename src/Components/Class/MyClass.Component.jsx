import {Link, useNavigate, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {MyClassCardComponent} from "./Card/MyClassCard.Component";
import {MainNavComponent} from "../Body/MainNav/MainNav.Component";
import api from "../../Config/api";


export const MyClassComponent = ({user}) => {

    const [classes, setClasses] = useState([]);
    const [isFetching, setIsFetching] = useState(true);
    const [isDataFetched, setIsDataFetched] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isMounted = true;

        const fetchData = async () => {
            try {
                if (!isDataFetched) {
                    const response = await api.get(`/my/classes`);
                    const data = response.data;

                    if (isMounted) {
                        setClasses(data);
                        setIsDataFetched(true);
                        setIsFetching(false);
                    }
                }

            } catch (error) {
                if (isMounted) {
                    setError(error);
                    setIsFetching(false);
                }
            }
        };

        const timeout = setTimeout(() => {
            if (isFetching) {
                if (isMounted) {
                    setError(new Error("Timeout: Could not fetch data."));
                    setIsFetching(false);
                }
            }
        }, 20000);

        fetchData();

        return () => {
            isMounted = false;
            clearTimeout(timeout);
        };
    }, [isDataFetched]);


    return(
        <>
            <div className=' h-full mx-auto md:pt-16  pt-16 px-0' style={{ minWidth:"280px" , maxWidth:"1500px"}}>
                <div className="block w-full md:hidden">
                    <MainNavComponent user={user} />
                </div>
                <div className="w-bar-class-list md:py-3 py-1  mx-auto  lg:mb-10 md:mb-2 bg-white">
                    <div className="bg-white">
                        <div className="me-auto ms- relative  w-full mx-auto">
                                <div className="bg-white md:mx-5  mx-1 mt-2 md:mt-3 text-left">
                                    <div className="me-auto relative xl:w-10/12 sm:w-11/12 w-full  text-purple-500 mx-auto">
                                        <h2 className="font16-res-400" style={{ fontWeight:"500" }}>Kelas Ku</h2>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div id="tab-contents" className="xl:w-10/12 lg:w-11/12 md:w-11/12 sm:w-11/12 w-full mx-auto">
                        <div id="kelas" className="md:py-0 py-0 md:px-4 ">
                            <div className="w-full py-0">
                                <div className=" mt-3 md:mt-3 border-t border-gray-200">
                                    {classes.length === 0 && !isFetching ? (
                                        // Display empty state
                                        <div className="md:py-8 py-6">
                                            <div className="mb-8 mt-8">
                                                <div>
                                                    <div className="mx-auto wh-stiker-not-class">
                                                        <img className="w-full mx-auto h-full" src="/assets/tidak-ada-kelas.svg" alt="" />
                                                    </div>

                                                    <p className="text-purple-600 my-4">{classes.status}</p>
                                                    <div className="flex xl:w-4/12 gap-4 lg:w-4/12 md:w-6/12 w-full mb-8 mt-0 mx-auto ">
                                                        <div className="mx-auto gap-4 flex" style={{ minWidth: "260px", maxWidth: "400px" }}>
                                                            <div className="my-2 mx-auto" style={{ minWidth: "118px" }}>
                                                                <Link to="/join/class">
                                                                    <div className={"bg-purple-600 px-3 border-purple-600 border  w-full py-2 border-radius-4 text-white cursor-pointer hover:bg-purple-700"}>
                                                                        <p className="font14-res-300">
                                                                            Bergabung Kelas
                                                                        </p>
                                                                    </div>
                                                                </Link>
                                                            </div>

                                                            <div className="my-2 mx-auto" style={{ minWidth: "118px" }}>
                                                                <Link to="/create/class">
                                                                    <div className={"bg-white-600 px-3  text-purple-600 border-purple-600 border w-full py-2 border-radius-4 hover:text-white cursor-pointer hover:bg-purple-600"}>
                                                                        <p className="font14-res-300">
                                                                            Buat Kelas
                                                                        </p>
                                                                    </div>

                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <>
                                            {isFetching && (
                                                // Display loading state with animate pulse
                                                <div className="flex items-center justify-center  h-96 md:mt-6 mt-14 sm:mt-20">
                                                    <div
                                                        className="animate-spin rounded-full border-r-gray-50 border-l-gray-50  border-b-gray-50  w-7 h-7 md:h-10 md:w-10 border-t-4 border-purple-700"></div>
                                                </div>

                                            )}

                                            {!isFetching && (
                                                <ul className="sm:gap-3 pb-14  md:gap-5 lg:gap-3 gap-2 md:my-6 my-4 flex flex-wrap">
                                                    {classes.map((item) => (
                                                        <li key={item.id} className="grid-class-card-flex mb-3  w-class-card-grid " >
                                                            <MyClassCardComponent id={item.id} name={item.name} slug={item.slug} teacher={item.teacher} />
                                                        </li>
                                                    ))}
                                                </ul>

                                            )}
                                        </>
                                    )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

