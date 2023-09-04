import {useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import {ClassCardComponent} from "../Card/ClassCard.Component";
import {TaskCardComponent} from "../Card/Task/TaskCard.Component";
import {FeedCardComponent} from "../Card/FeedCard.Component";
import {ClassmateCardComponent} from "../Card/ClassmateCard.Component";
import {TaskClassCardComponent} from "../Card/Task/TaskClassCard.Component";

export const ProfileComponent = () => {

    const navigate = useNavigate();

    const handleTabCLick = (e , tabName) => {
        e.preventDefault();
        navigate(`/profile#${tabName}`)
    }

    useEffect(() => {
        const tabsContainer = document.querySelector("#tabs");
        const tabTogglers = tabsContainer.querySelectorAll("#tabs a");

        tabTogglers.forEach(function (toggler) {
            toggler.addEventListener("click" , function (e){
                e.preventDefault();

                let tabName = this.getAttribute("href");

                let tabContents = document.querySelector("#tab-contents");

                for (let i = 0; i < tabContents.children.length; i++){
                    tabTogglers[i].parentElement.classList.remove("border-b" , "bg-white" , "py-1" , "-mb-px", "text-purple-500" );
                    tabContents.children[i].classList.remove("hidden");

                    if("#" + tabContents.children[i].id === tabName){
                        continue;
                    }
                    tabContents.children[i].classList.add("hidden");

                    e.target.parentElement.classList.add("border-b" , "bg-white" , "py-1" , "-mb-px", "text-purple-500" , )
                }
            });
        });
        return () => {
            tabTogglers.forEach(function(toggler) {
                toggler.removeEventListener("click", () => {});
            });
        };
    }, [])

    const livetask = [
        { id: 1, name: 'Assigment Harian WEB 2023-06-24'  , task_type : "assigment", status :"berjalan" , subjects: "WEB" , classname:"11 TKJ 3" , teacher:"echo" , deadline_date : "2023-06-24 08:00" , post_time :"2023-06-24 06:00" },
        { id: 2, name: 'Absent Harian WEB 2023-06-24'  , task_type : "absent", status :"berjalan" , subjects: "WEB" , classname:"11 TKJ 3" , teacher:"echo" , deadline_date : "2023-06-24 08:00" , post_time :"2023-06-24 06:00"},
        { id: 3, name: 'Absent Harian WEB 2023-06-23' , task_type : "absent" , status :"melewatkan" , subjects: "WEB", classname:"11 TKJ 3" , teacher:"echo" , deadline_date : "2023-06-23 08:00" , post_time :"2023-06-23 06:00"},
        { id: 4, name: 'Resource Harian WEB 2023-06-22' , task_type : "resource" , status :"selesai" , subjects: "WEB" , classname:"11 TKJ 3" , teacher:"echo" , deadline_date : "" , post_time :"2023-06-22 06:00" },
        { id: 5, name: 'Absent Harian WEB 2023-06-22'  , task_type : "absent", status :"selesai" , subjects: "WEB" , classname:"11 TKJ 3" , teacher:"echo" , deadline_date : "2023-06-22 08:00" , post_time :"2023-06-22 06:00" },
    ];

    return(
        <>

            <div className=' h-full mx-auto md:pt-16  pt-16 px-0' style={{ minWidth:"385px"}}>

                <div className="xl:w-10/12 lg:w-11/12 mx-auto lg:flex lg:justify-between gap-4">
                    <div className="lg:w-6/12 md:w-8/12 sm:w-10/12 w-full lg:mx-0 mx-auto">
                        <div className="bg-white shadow pb-0.5 border-radius-12">
                            <div className="w-full">
                                <div className="relative md:my-4 my-0">
                                    <div className="h-profile-banner" style={{ width:"100%"}}>
                                        <img className="w-full object-cover h-full md:border-radius-8 border-none" style={{ maxHeight:"220px" , minHeight:"180px" ,  width:"100%"}}  src="/assets/profile.jpg"/>
                                    </div>
                                    <div className="absolute lg:top-36 md:top-32 sm:top-32 top-32 md:left-6 left-3">
                                        <div className="radius-100 bg-white p-1 h-profile-round" >
                                            <img className="w-full h-full radius-100" style={{ objectFit:"cover"}} src="/assets/profile.jpg"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="ms-auto me-4 sm:w-3/12 w-4/12 " >
                                    <div className="my-4">
                                        <button className="font16-res-300 border py-2 px-4 border-gray-400 border-radius-20">
                                            Edit profile
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="text-left md:mx-7 mx-4 lg:mt-6 md:mt-4 mt-2 mb-4">
                                <h1 className="font-semibold font22-res-300">Min-Suga</h1>
                                <p className="font16-res-400" style={{ color:"#7a7a7a"}}>@udcincknnk</p>
                                <div className="my-2">
                                    <p className="font16-res-400" style={{  color:"#595959"}}>I'm just software developer</p>
                                </div>
                                <div className="my-2">
                                    <div className="flex justify-between">
                                        <div className="flex gap-2">
                                            <div style={{ height:"17px"}}>
                                                <img className="h-full my-auto" src="/assets/location_icon.svg"/>
                                            </div>
                                            <p className="font16-res-300" style={{  color:"#626161"}}>Citra Raya, Tangerang, Indonesia</p>
                                        </div>
                                        <div className="flex gap-2">
                                            <div style={{ height:"17px"}}>
                                                <img className="h-full my-auto" src="/assets/calendar-icon.svg"/>
                                            </div>
                                            <p className="font16-res-300" style={{ color:"#7a7a7a"}}>Bergabung November 2020</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-2 flex gap-4">
                                    <div className="font16-res-400">
                                        <button>
                                            <div className="flex gap-1">
                                                <p style={{ fontWeight:"550", color:"#4f4e4e"}}>488</p>
                                                <p style={{ fontWeight:"400" , color:"#9a9999"}}>Mengikuti</p>
                                            </div>
                                        </button>
                                    </div>
                                    <div className="font16-res-400">
                                        <button>
                                            <div className="flex gap-1">
                                                <p style={{ fontWeight:"550" , color:"#4f4e4e"}}>488</p>
                                                <p style={{ fontWeight:"400" , color:"#9a9999"}}>Pengikut</p>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white shadow mb-8 py-5 mt-6 pb-1 border-radius-12">
                            <div className="w-full">
                                <div className="flex w-11/12  my-auto mx-auto justify-between">
                                    <h2 style={{ fontSize:'20px'}}>Keahlian</h2>
                                    <button className="my-auto">
                                        <div  className="px-1 py-2 bg-white hover:px-1 hover:bg-gray-100 radius-100 ">
                                            <div className="my-auto mx-1 " style={{ height:"20px"}}>
                                                <img className="h-full w-full" src="/assets/edit-icon.svg"/>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                                <div className="w-11/12 my-4 mx-auto">
                                    <div className=" gap-4  grid grid-cols-2 text-left">
                                        <div className="shadow border-radius-8 border-purple-400  lg:py-4 md:py-3 py-3 px-2 border w-full">
                                            <div className="flex justify-between ">
                                                <h2 className="text-purple-500  font16-res-300" style={{  fontWeight:"500"}}>Front-End</h2>
                                                <h2 className="text-purple-700  font16-res-300" style={{  fontWeight:"600"}}>96%</h2>
                                            </div>
                                        </div>
                                        <div className="shadow border-radius-8 border-purple-400  lg:py-4 md:py-3 py-3 px-2 border w-full">
                                            <div className="flex justify-between">
                                                <h2 className="text-purple-500 font16-res-300" style={{  fontWeight:"500"}}>Back-End</h2>
                                                <h2 className="text-purple-700 font16-res-300" style={{  fontWeight:"600"}}>80%</h2>
                                            </div>
                                        </div>
                                        <div className="shadow border-radius-8 border-purple-400  lg:py-4 md:py-3 py-3 px-2 border w-full">
                                            <div className="flex justify-between">
                                                <h2 className="text-purple-500 font16-res-300" style={{  fontWeight:"500"}}>Database Administator</h2>
                                                <h2 className="text-purple-700 font16-res-300" style={{  fontWeight:"600"}}>90%</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-6/12 md:w-8/12 sm:w-10/12 bg-white w-full lg:mx-0 my-3 mx-auto   ms-auto">
                        <div className="lg:w-10/12 w-full mx-auto bg-white">
                            <div className=" z-50 mt-1.5 w-full ms-auto ">
                                <div className=" bg-white w-full   pb-1  py-2">
                                    <ul id="tabs" className="flex mt-1 w-full px-1 pb-1 text-purple-500">
                                        <li className=" px-0 w-11/12 border-b text-gray-500 hover:text-purple-600  mx-4 font-normal  py-2 ">
                                            <a id="default-tab" className="w-full" href="#interaksi" onClick={(e) => handleTabCLick(e , 'interaksi')}>Interaksi</a>
                                        </li>
                                        <li className="px-0 w-11/12 text-gray-500 hover:text-purple-600 font-normal py-2 ">
                                            <a href="#aktivitas" className="w-full" onClick={(e) => handleTabCLick(e , 'aktivitas')}>Activitas</a>
                                        </li>
                                        <li className="px-4 text-gray-800 hidden font-semibold py-2 ">
                                            <a href="#fourth">Tab 4</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div id="tab-contents" className=" w-full mt-0 mx-auto">
                                <div id="interaksi" className="">
                                    <div className="w-full mx-auto bg-white py-0 border-radius-8 overflow-y-auto scrollbar-hide" style={{ height:"650px"}}>
                                        <div className="my-4">
                                            <ul className="mx-auto">
                                                <li className="">
                                                    <div>
                                                        <FeedCardComponent />
                                                    </div>
                                                </li>
                                                <li className="">
                                                    <div>
                                                        <FeedCardComponent />
                                                    </div>
                                                </li>
                                                <li className="">
                                                    <div>
                                                        <FeedCardComponent />
                                                    </div>
                                                </li>
                                                <li className="">
                                                    <div>
                                                        <FeedCardComponent />
                                                    </div>
                                                </li>
                                                <li className="">
                                                    <div>
                                                        <FeedCardComponent />
                                                    </div>
                                                </li>
                                                <li className="">
                                                    <div>
                                                        <FeedCardComponent />
                                                    </div>
                                                </li>
                                                <li className="">
                                                    <div>
                                                        <FeedCardComponent />
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                                <div id="aktivitas" className="hidden ">
                                    <div className="w-full mx-auto bg-white py-0 border-radius-8 overflow-y-auto scrollbar-hide" style={{ height:"650px"}}>
                                        <div className="my-4">
                                            {livetask.length === 0 ? (
                                                <div className="py-8">
                                                    <div className="mb-8 mt-2">
                                                        <div>
                                                            <div className="mx-auto" style={{ height:"160px" , width:"280px"}}>
                                                                <img className="w-full mx-auto h-full" src="/assets/icon-no-class.svg"/>
                                                            </div>
                                                            <p className="text-purple-600 my-4">Tidak ada Class yang kamu ikuti</p>
                                                            <div className="flex w-7/12 mb-8 mt-0 mx-auto " style={{ fontSize:"15px"}}>
                                                                <div className="mx-auto">
                                                                    <Link to="/">
                                                                        <div className={"bg-purple-600 px-3 w-full py-2 border-radius-4 text-white cursor-pointer hover:bg-purple-700"}>
                                                                            <p>
                                                                                Bergabung Kelas
                                                                            </p>
                                                                        </div>
                                                                    </Link>
                                                                </div>
                                                                <div className="mx-auto">
                                                                    <Link to="/">
                                                                        <div className={"bg-white-600 px-3 border-purple-700  border w-full py-2 border-radius-4 text-purple-600 cursor-pointer "}>
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
                                            ) : (
                                                <ul className="grid gap-6   md:mx-0 mx-auto grid-cols-1">
                                                    {livetask.map((item) => {
                                                        return(
                                                            <div  key={item.id}>
                                                                <li>
                                                                    <TaskCardComponent name={item.name} status={item.status} subject={item.subjects} taskType={item.task_type} classname={item.classname} teacher={item.teacher} deadline_date={item.deadline_date} post_time={item.post_time}/>
                                                                </li>
                                                            </div>
                                                        )
                                                    })}
                                                </ul>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div id="fourth" className="hidden py-2 px-4">
                                    Fourth tab
                                </div>
                                {/*<div className="lg:w-10/12 md:w-11/12  w-10/12 mx-auto">*/}
                                {/*    <div className="flex mx-6 justify-between">*/}
                                {/*        <div>*/}
                                {/*            <h3 className="font-medium-little">Activity Recently</h3>*/}
                                {/*        </div>*/}
                                {/*        <div>*/}
                                {/*            <Link to={`/`}>*/}
                                {/*                <p className="font-medium-littlet" >See All</p>*/}
                                {/*            </Link>*/}
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*    <div className="w-full my-4 mx-auto">*/}
                                {/*            <div className="flex gap-4 overscroll-x-auto mx-6" style={{ overflowX: "auto" }}>*/}

                                {/*            </div>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}