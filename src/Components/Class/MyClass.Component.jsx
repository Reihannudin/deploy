import {Link, useNavigate, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {MyClassCardComponent} from "./Card/MyClassCard.Component";
import {MainNavComponent} from "../Body/MainNav/MainNav.Component";


export const MyClassComponent = () => {


    const user = JSON.parse(localStorage.getItem('whoLogin'));
    const username = user.username;
    const [classes, setClasses] = useState([]);
    const [isFetching, setIsFetching] = useState(true);
    const [isDataFetched, setIsDataFetched] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const source = axios.CancelToken.source();

        const fetchData = async () => {
            try {
                if (!isDataFetched) {
                    // const response = await axios.get(`https://rest-api.spaceskool.site/public/api/${username}/my/classes`, {
                    const response = await axios.get(`http://127.0.0.1:8000/api/${username}/my/classes`, {
                        cancelToken: source.token
                    });

                    await new Promise((resolve) => setTimeout(resolve, 1500));

                    const data = response.data;
                    setClasses(data);
                    setIsDataFetched(true);
                }
                setIsFetching(false);
            } catch (error) {
                if (!axios.isCancel(error)) {
                    setError(error);
                    setIsFetching(false);
                }
            }
        };

        const timeout = setTimeout(() => {
            if (isFetching) {
                setError(new Error("Timeout: Could not fetch data."));
                setIsFetching(false);
                source.cancel("Timeout");
            }
        }, 20000);

        fetchData();

        return () => {
            clearTimeout(timeout);
            source.cancel("Component unmounted");
        };
    }, [username]);

    const {id} = useParams();


    return(
        <>
            <div className=' h-full mx-auto md:pt-16  pt-16 px-0' style={{ minWidth:"300px"}}>
                <div className="block w-full md:hidden">
                    <MainNavComponent />
                </div>
                <div className="md:w-full w-11/12 py-3  mx-auto  lg:mb-10 md:mb-2 bg-white">
                    <div className="bg-white">
                        <div className="me-auto ms- relative  w-full mx-auto">
                                <div className="bg-white md:mx-5  mx-0 mt-3 text-left">
                                    <div className="me-auto relative xl:w-10/12 sm:w-11/12 w-11/12 roboto  text-purple-700 mx-auto">
                                        <h2 className="font22-res-300" style={{ fontWeight:"500" }}>Kelas Ku</h2>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div id="tab-contents" className="xl:w-10/12 lg:w-11/12 md:w-11/12 sm:w-11/12 w-11/12 mx-auto">
                        <div id="kelas" className="md:py-0 py-0 md:px-4 px-0">
                            <div className="w-full py-0">
                                <div className="mt-0">
                                    {classes.length === 0 && !isFetching ? (
                                        <div className="md:py-8 py-6">
                                            <div className="mb-8 mt-12">
                                                <div>
                                                    <div className="mx-auto" style={{ height: "180px", width: "320px" }}>
                                                        <img className="w-full mx-auto h-full" src="/assets/tidak-ada-kelas.svg" alt="" />
                                                    </div>
                                                    <p className="text-purple-600 my-4">{classes.status}</p>
                                                    <div className="flex xl:w-4/12 gap-4 lg:w-4/12 md:w-6/12 w-full mb-8 mt-0 mx-auto font14-res-300">
                                                        <div className="mx-auto gap-4 flex" style={{ minWidth: "300px", maxWidth: "400px" }}>
                                                            <div className="my-2" style={{ minWidth: "140px" }}>
                                                                <Link to="/">
                                                                    <div className={"bg-purple-600 px-3 w-full py-2 border-radius-4 text-white cursor-pointer hover:bg-purple-700"}>
                                                                        <p>
                                                                            Bergabung Kelas
                                                                        </p>
                                                                    </div>
                                                                </Link>
                                                            </div>
                                                            <div className="my-2" style={{ minWidth: "140px" }}>
                                                                <Link to="/">
                                                                    <div className={"bg-white-600 px-3 border-purple-700 border w-full py-2 border-radius-4 text-purple-600 cursor-pointer "}>
                                                                        <p>
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
                                                <div className="flex items-center justify-center h-96 md:mt-6 mt-20">
                                                    <div className="animate-spin">
                                                        <img src="/assets/planet_gif-1.gif" className="h-20 w-20" alt="Loading" />
                                                    </div>
                                                </div>
                                            )}

                                            {!isFetching && (
                                                <ul className="sm:gap-3  md:gap-6 lg:gap-3 gap-2 md:my-6 my-4 flex flex-wrap">
                                                    {classes.map((item) => (
                                                        <li key={item.id} className="grid-class-card-flex sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/5">
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

