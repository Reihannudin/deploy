import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import {ClassCardComponent} from "../Class/Card/ClassCard.Component";
import {TaskCardComponent} from "../Class/Card/TaskCard.Component";
import {MainNavComponent} from "../Body/MainNav/MainNav.Component";
import api from "../../Config/api";
import {TaskCardHelperComponent} from "../Class/Card/TaskCardHelper.Component";

export const MainComponent = ({user}) => {

    const [classes, setClasses] = useState([]);
    const [isFetching, setIsFetching] = useState(true);
    const [isDataFetched, setIsDataFetched] = useState(false);
    const [errorClass, setErrorClass] = useState(null);

    const [liveTask, setLiveTask] = useState([]);
    const [isDataTaskFetched, setIsDataTaskFetched] = useState(false);
    const [isFetchingTask, setIsFetchingTask] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isMounted = true;

        const fetchData = async () => {
            try {
                if (!isDataFetched) {
                    const response = await api.get(`/classes`);
                    const data = response.data;

                    if (isMounted) {
                        setClasses(data);
                        setIsDataFetched(true);
                        setIsFetching(false);
                    }
                }

                if (!isDataTaskFetched) {
                    const response = await api.get(`/live/task`);
                    const data = response.data;

                    if (isMounted) {
                        setLiveTask(data);
                        setIsDataTaskFetched(true);
                        setIsFetchingTask(false);
                    }
                }
            } catch (error) {
                if (isMounted) {
                    setError(error);
                    setIsFetching(false);
                    setIsFetchingTask(false); // Handle error for liveTask separately if needed
                }
            }
        };

        const timeout = setTimeout(() => {
            if (isFetching || isFetchingTask) {
                if (isMounted) {
                    setError(new Error("Timeout: Could not fetch data."));
                    setIsFetching(false);
                    setIsFetchingTask(false);
                }
            }
        }, 20000);

        fetchData();

        return () => {
            isMounted = false;
            clearTimeout(timeout);
        };
    }, [isDataFetched, isDataTaskFetched]);


    const navigate = useNavigate();

    const hashFragment = window.location.hash;
    const hashWithoutHash = hashFragment ? hashFragment.substring(1) : "kelas";

    // console.log(liveTask.length);

    const handleTabClick = (e, tabName) => {
        e.preventDefault();
        navigate(`/#${tabName}`);
    };

    useEffect(() => {
        const tabsContainer = document.querySelector("#tabs");
        const tabTogglers = tabsContainer.querySelectorAll("#tabs a");

        tabTogglers.forEach(function (toggler) {
            toggler.addEventListener("click", function (e) {
                e.preventDefault();

                let tabName = this.getAttribute("href");

                let tabContents = document.querySelector("#tab-contents");

                for (let i = 0; i < tabContents.children.length; i++) {
                    tabTogglers[i].parentElement.classList.remove(
                        "bg-white",
                        "-mb-px",
                        "text-purple-500"
                    );
                    tabContents.children[i].classList.remove("hidden");

                    if ("#" + tabContents.children[i].id === tabName) {
                        continue;
                    }
                    tabContents.children[i].classList.add("hidden");
                }

                e.target.parentElement.classList.add(
                    "bg-white",
                    "-mb-px",
                    "text-purple-500"
                );
            });
        });

        // Set the default tab to "kelas" when the URL is "/"
        if (window.location.pathname === "/") {
            navigate("/#kelas");
        }

        return () => {
            tabTogglers.forEach(function (toggler) {
                toggler.removeEventListener("click", () => {});
            });
        };
    }, []);

    // console.log("lenght" ,liveTask.length)

    return(
        <>
            <div className=' h-full min-h-screen mx-auto md:pt-16  relative  pt-16 px-0' style={{ minWidth:"280px" , maxWidth:"1500px"}}>
                <div className="block w-full md:hidden">
                    <MainNavComponent user={user} />
                </div>
                <div className="w-bar-class-list md:py-3 py-2  mx-auto  lg:mb-10 md:mb-2 bg-white">
                    <div className="bg-white">
                        <div className="me-auto relative xl:w-10/12 lg:w-11/12 md:w-11/12  sm:w-11/12 w-full  mx-auto">
                            <div className="absolute left-0">
                                <ul id="tabs" className="flex mt-1 w-full text-left px-1 pb-1 text-purple-500">
                                    <li className="md:px-4 ps-0 pe-2 w-full font16-res-400 text-gray-400 hover:text-purple-600 md:py-2">
                                        <div>
                                            <a
                                                id="default-tab"
                                                className={`w-full ${hashWithoutHash === 'kelas' ? 'text-purple-500' : ''}`}
                                                href="#kelas"
                                                onClick={(e) => handleTabClick(e, "kelas")}
                                            >
                                                Kelas
                                            </a>
                                        </div>
                                    </li>
                                    <li className="md:px-4 px-2 w-full font16-res-400 text-gray-400 hover:text-purple-600 font-normal md:py-2">
                                        <div>
                                            <a
                                                href="#berlangsung"
                                                className={`w-full ${hashWithoutHash === 'berlangsung' ? 'text-purple-500' : ''}`}
                                                onClick={(e) => handleTabClick(e, "berlangsung")}
                                            >
                                                Berlangsung
                                            </a>
                                        </div>
                                    </li>
                                    <li className="px-4 text-gray-800 hidden font-semibold py-2">
                                        <div>
                                            <a href="#fourth">Tab 4</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div id="tab-contents" className="xl:w-10/12 lg:w-11/12 md:w-11/12  sm:w-11/12 w-full mx-auto">
                        <div id="kelas" className="md:py-2 py-4 md:px-4">
                            <div className="w-full md:py-5 py-2">

                                <div className="md:mt-5 mt-3 border-t border-gray-200">
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
                                                <div className="flex items-center justify-center  h-96 md:mt-6 mt-14 sm:mt-20">
                                                    <div
                                                        className="animate-spin rounded-full border-r-gray-50 border-l-gray-50  border-b-gray-50  w-8 h-8 md:h-10 md:w-10 border-t-4 border-purple-700"></div>
                                                </div>

                                            )}
                                            {!isFetching && (
                                                // Display the list of classes
                                                <ul className="sm:gap-3 pb-14  md:gap-5 lg:gap-3 gap-2 md:my-6 my-4 flex flex-wrap">

                                                {/*<ul className="sm:gap-3  md:gap-6 lg:gap-3 gap-2 md:my-6 my-4 flex flex-wrap">*/}
                                                    {classes.map((item , index) => (
                                                        <li key={item.id} className="grid-class-card-flex mb-3  w-class-card-grid " >

                                                        {/*<li key={index} className="grid-class-card-flex sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/5">*/}
                                                            <ClassCardComponent id={item.id} name={item.name} slug={item.slug} teacher={item.teacher} />
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div id="berlangsung" className="hidden md:py-2 py-4 md:px-4">
                            <div className="w-full md:py-5 py-2">
                                <div className="md:mt-5 mt-3 border-t border-gray-300">
                                    {liveTask.length === 0 && !isFetchingTask ? (
                                        <div className="md:py-8 py-2">
                                            <div className="mb-8 mt-20">
                                                <div className="mx-auto wh-stiker-not-class">
                                                    <img className="w-full mx-auto h-full" src="/assets/tidak-ada-aktivitas.svg" alt="" />
                                                </div>
                                                <p className="text-purple-600 my-4 text-center">No live tasks available.</p>
                                            </div>

                                        </div>
                                    ) : (
                                        <>
                                            {isFetchingTask && !isDataTaskFetched && (
                                                <div className="flex items-center justify-center  h-96 md:mt-6 mt-20">
                                                    <div
                                                        className="animate-spin rounded-full border-r-gray-50 border-l-gray-50  border-b-gray-50  w-8 h-8 md:h-16 md:w-16 border-t-4 border-purple-700"></div>
                                                </div>

                                            )}

                                            {!isFetchingTask && isDataTaskFetched && (
                                                // Render your live task items here
                                                <ul className="sm:gap-3  md:gap-6 lg:gap-3 gap-2 md:my-6 my-4 flex flex-wrap">
                                                    {liveTask.map((item , index) => {
                                                        // console.log("task item " , item)
                                                        return(
                                                            <div key={index}>
                                                                {item.absent.length === 0 && item.assignment.length === 0 ? (
                                                                    <div key={item.id} className="absolute lg:top-2/4 top-1/3  left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                                                        <div className="md:py-8 py-2">
                                                                            <div className="mb-8 mt-20">
                                                                                <div className="mx-auto wh-stiker-not-class">
                                                                                    <img className="w-full mx-auto h-full" src="/assets/tidak-ada-aktivitas.svg" alt="" />
                                                                                </div>
                                                                                <p className="text-purple-600 my-4 text-center">No live tasks available.</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                ):(
                                                                    <li  className="w-full" key={item.id}>
                                                                        <TaskCardHelperComponent
                                                                            absent={item.absent}
                                                                            assignment={item.assignment}
                                                                        />
                                                                        {/* Render each live task item */}


                                                                        {/*<h2>Ada Tugas</h2>*/}
                                                                    </li>
                                                                )
                                                                }

                                                            </div>

                                                        )
                                                    }

                                                    )}
                                                </ul>
                                            )}
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div id="fourth" className="hidden py-2 px-4">
                            Fourth tab
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

