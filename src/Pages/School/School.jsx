import React, {useEffect} from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import {CategoryScale, LinearScale, LineElement} from "chart.js";

function School() {
    useEffect(() => {
        Chart.register(LinearScale, CategoryScale, LineElement);
    }, []);

    const data = {
        labels: ['senin' , 'selasa' , 'rabu' , 'kamis' , 'jumat'],
        datasets: [
            {
                label: 'Total Absensi Kelas 12 TKJ',
                data: [26, 27, 33, 33, 36],
                backgroundColor: 'rgba(97, 11, 190, 2)',
                borderColor: 'rgba(97, 11, 190, 2)',
                borderWidth: 2,
            },
        ],
    };

    const options = {
        scales: {
            y: {
                type: 'linear',
                beginAtZero: true,
            },
            x: {
                type: 'category',
            },
        },
    };

    return(
        <>
            <div className={"w-full  text-left py-4"}>
                <div className={"w-11/12 mx-auto"}>
                    {/*intro*/}
                    <div className={"w-full "}>
                        <div className="md:flex block ">
                            <div className={"xl:w-6/12 lg:w-7/12 md:w-6/12 sm:w-11/12 w-full relative flex  justify-between bg-purple-600 opacity-100 px-4 lg:py-5 md:py-4 py-3 border-radius-12"}>
                                <div className={"lg:my-6 md:my-5 sm:my-3 my-2 md:mx-4 sm:mx-0 mx-1"}>
                                    <h2 className={"font18-res-300 opacity-100 text-white"} style={{ fontWeight:"500"}}>Welcome back Mrs.Jenni</h2>
                                    <p className={"font14-res-300 my-2 opacity-100 text-gray-50"}>Keleolah kelas anda dan periksa material kelas anda </p>
                                </div>
                                <div className={"relative  xl:w-3/12 lg:w-4/12 md:w-5/12 lg:block hidden  sm:w-6/12 w-7/12 h-full"}>
                                    <div  className={"absolute h-full"} >
                                        <img className={"object-cover h-full"} src={"/assets/banner-img-ui.svg"}/>
                                    </div>
                                </div>
                            </div>
                            <div className={" md:w-6/12 w-full md:mt-0 my-4  flex "}>
                                <div className={"xl:w-4/12 lg:w-5/12 md:w-5/12 w-4/12    lg:mx-3 md:mx-2 me-2 bg-purple-600 px-4 lg:py-6 md:py-4 py-3 border-radius-12"}>
                                    <div className={"my-2  lg:w-10/12 md:w-11/12 font-inter mx-auto "}>
                                        <h1 className={" text-white font30-res-300 "} style={{  fontWeight:"500"}}>13:00</h1>
                                        <p className={"font16-res-300 text-white"} style={{ fontWeight:"400"}}>Senin</p>
                                        <p className={"font16-res-300 text-white"} style={{ fontWeight:"400"}}>11/12/2023</p>
                                    </div>
                                </div>
                                <div className="md:w-6/12 w-8/12  block justify-between">
                                    <div className={" lg:w-10/12 md:w-11/12 w-full  bg-gray-200 px-3 mt-2 opacity-60 md:py-3 py-1 border-radius-12"}>
                                        <div className={"my-2 w-11/12 font-inter justify-between flex mx-auto "}>
                                            <h1 className={" text-purple-600 font16-res-300 "} style={{  fontWeight:"500"}}>Total Kelas : </h1>
                                            <p className={"font16-res-300 text-purple-600 "} style={{ fontWeight:"400"}}>11</p>
                                        </div>
                                    </div>
                                    <div className={" lg:w-10/12 md:w-11/12 w-full bg-gray-200 px-3 mt-5 opacity-60 md:py-3 py-1 border-radius-12"}>
                                        <div className={"my-2 w-11/12 font-inter justify-between flex mx-auto "}>
                                            <h1 className={" text-purple-600 font16-res-300 "} style={{  fontWeight:"500"}}>Total Kejuruan : </h1>
                                            <p className={"font16-res-300 text-purple-600 "} style={{ fontWeight:"400"}}>11</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                {/*  view asent  */}
                    <div className={"w-full mt-5 mb-3"}>
                        <div className={"w-full"}>
                            <div className={"flex w-full my-4 justify-between"}>
                                <div className={"my-auto"}>
                                    <h1 className={"my-auto"}>Grafik Absensi</h1>
                                </div>
                                <div className="bg-white hover:bg-gray-50 border-radius-12 text-gray-600 hover:text-purple-600 cursor-pointer py-4">
                                    <div className={`flex  w-11/12 mx-auto`}>
                                        <div className={`my-auto mx-auto h-icon-back`}>
                                            <img
                                                src="/assets/icon-filter-gray.svg"
                                                className="h-full mx-auto my-auto"
                                                onMouseOver={(e) => e.currentTarget.src = "/assets/icon-filter-purple.svg"}
                                                onMouseOut={(e) => e.currentTarget.src = "/assets/icon-filter-gray.svg"}
                                            />
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div>
                                <div className="flex justify-center items-center">
                                    <Line data={data} options={options} />
                                </div>
                                <div className={"my-3"}>
                                    <div className={"w-full grid-cols-3 grid"}>
                                        <div className={"mx-auto"}>
                                            <p className={"text-gray-500 mx-auto font13-res-300"}>21/11/2023 : 36 </p>
                                        </div>
                                        <div className={"mx-auto"}>
                                            <p className={"text-gray-500 mx-auto font13-res-300"}>21/11/2023 : 36 </p>
                                        </div>
                                        <div className={"mx-auto"}>
                                            <p className={"text-gray-500 mx-auto font13-res-300"}>21/11/2023 : 36 </p>
                                        </div>
                                        <div className={"mx-auto"}>
                                            <p className={"text-gray-500 mx-auto font13-res-300"}>21/11/2023 : 36 </p>
                                        </div>
                                        <div className={"mx-auto"}>
                                            <p className={"text-gray-500 mx-auto font13-res-300"}>21/11/2023 : 36 </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                {/*  view clas  */}
                </div>
            </div>
        </>
    )
}


export default School