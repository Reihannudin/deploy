import {Link, useNavigate} from "react-router-dom";
import {TaskCardComponent} from "../Class/Card/TaskCard.Component";
import {MainNavComponent} from "../Body/MainNav/MainNav.Component";
import React from "react";


export const MyProfileComponent = (props) => {

    const navigate = useNavigate();

    const livetask = [
        { id: 1, name: 'Assigment Harian WEB 2023-06-24'  , task_type : "assigment", status :"berjalan" , subjects: "WEB" , classname:"11 TKJ 3" , teacher:"echo" , deadline_date : "2023-06-24 08:00" , post_time :"2023-06-24 06:00" },
        { id: 2, name: 'Absent Harian WEB 2023-06-24'  , task_type : "absent", status :"berjalan" , subjects: "WEB" , classname:"11 TKJ 3" , teacher:"echo" , deadline_date : "2023-06-24 08:00" , post_time :"2023-06-24 06:00"},
        { id: 3, name: 'Absent Harian WEB 2023-06-23' , task_type : "absent" , status :"melewatkan" , subjects: "WEB", classname:"11 TKJ 3" , teacher:"echo" , deadline_date : "2023-06-23 08:00" , post_time :"2023-06-23 06:00"},
        { id: 4, name: 'Resource Harian WEB 2023-06-22' , task_type : "resource" , status :"selesai" , subjects: "WEB" , classname:"11 TKJ 3" , teacher:"echo" , deadline_date : "" , post_time :"2023-06-22 06:00" },
        { id: 5, name: 'Absent Harian WEB 2023-06-22'  , task_type : "absent", status :"selesai" , subjects: "WEB" , classname:"11 TKJ 3" , teacher:"echo" , deadline_date : "2023-06-22 08:00" , post_time :"2023-06-22 06:00" },
    ];

    return(
        <>

            <div className=' h-full mx-auto md:pt-16  pt-16 px-0' style={{ minWidth:"300px" , background:"#f5f5f5"}}>

                <div className=" lg:w-full mx-auto  gap-4">
                    <div className="lg:w-full md:w-full  w-full lg:mx-0 mx-auto">
                        <div className="bg-white md:shadow border-b border-gray-200 pb-0.5 md:border-radius-12">
                            <div className="w-full">
                                <div className="relative  my-0">
                                    <div className="h-profile-banner-new mb-3" style={{ width:"100%"}}>
                                        <img className="w-full object-cover h-full md:border-radius-8 border-none h-profile-banner-new"  src="https://i.pinimg.com/1200x/4e/0b/1e/4e0b1ef35a5eeaec6931d095cf5a4fab.jpg"/>
                                    </div>
                                    <div className="absolute xl:left-28 lg:left-20 lg:top-48 md:top-40 sm:top-36 top-24 md:left-12 sm:left-10 left-3">
                                        <div className="radius-100 bg-white p-1 h-profile-round-new" >
                                            <img className="w-full h-full radius-100" style={{ objectFit:"cover"}} src="https://64.media.tumblr.com/c4261c6b86206032f5000e9ac0169402/a1d478c0246b8aed-ea/s1280x1920/6906370fc985067d21fd57b6df97d42c000c547d.jpg"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="ms-auto ms:me-4 me-0 sm:w-3/12 w-5/12 " >
                                    <div className="lg:my-2 md:my-1 sm:my-4 my-1">
                                        <button  onClick={() => window.location.href='/edit/profile'} className="font14-res-300 border py-1.5 text-gray-500 bg-white px-4 border-gray-400 hover:bg-gray-100 hover:text-gray-600 border-radius-20" style={{ fontWeight:"500"}}>
                                            Edit profile
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="text-left lg:mx-6 md:mx-7 mx-4 lg:mt-0 md:mt-0 mt-0 md:mb-4 mb-2">
                            </div>
                        </div>

                    </div>
                    <div className="lg:w-11/12 sm:w-11/12 w-full md:flex block xl:gap-10 lg:gap-5 gap-0 mx-auto">
                        <div className="xl:w-3/12 lg:w-3/12 md:w-4/12 sm:w-11/12  w-full  lg:mx-0 md:my-0 my-0 lg:me-0 xl:me-auto me-auto  lg:ms-auto md:ms-0 ms-auto md:me-0">
                            <div className="lg:w-11/12 lg:my-8 sm:my-3 my-0 py-4 w-full mx-auto lg:bg-transparent bg-white ">
                                <div className="text-left  xl:ms-6 xl:me-6 lg:ms-auto lg:me-0 md:ms-7 md:me-7  ms-4 me-4 lg:mt-0 md:mt-0 mt-0 md:mb-4 mb-2">
                                    <h1 className="font16-res-400" style={{ fontWeight:"550"}}>{props.name}</h1>
                                    <p className="font14-res-300 " style={{ color:"#7a7a7a" , fontWeight:"450"}}>@{props.username}</p>
                                    <div className="my-2">
                                        <p className="font16-res-300 md:font18-res-300" style={{  color:"#595959"}}>{props.bio}</p>
                                    </div>
                                    <div className="mt-1 border-t pt-3 mb-2">
                                        <div className="block ">
                                            <div className="flex  py-1 gap-1">
                                                <div style={{ height: "17px" }}>
                                                    <img className="h-full my-auto" src="/assets/location_icon.svg" alt="Location Icon" />
                                                </div>
                                                <p className="font14-res-300  text-gray-500">{props.school}</p>
                                            </div>
                                            {props.address === null? (
                                                <>
                                                </>
                                            ): (
                                                <div className="flex  py-1 gap-1">
                                                    <div style={{ height: "17px" }}>
                                                        <img className="h-full my-auto" src="/assets/location_icon.svg" alt="Location Icon" />
                                                    </div>
                                                    <p className="font13-res-300  text-gray-500">{props.address}</p>
                                                </div>
                                            )}

                                            <div className="flex  py-1   gap-1">
                                                <div style={{ height: "17px"  }}>
                                                    <img className="h-full my-auto" src="/assets/calendar-icon.svg" alt="Calendar Icon" />
                                                </div>
                                                <p className="font13-res-300  text-gray-500">Bergabung Pada {props.join_date}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/*<div className="mt-2 flex gap-4">*/}
                                    {/*    <div className="font16-res-400">*/}
                                    {/*        <button>*/}
                                    {/*            <div className="flex gap-1">*/}
                                    {/*                <p style={{ fontWeight:"550", color:"#4f4e4e"}}>488</p>*/}
                                    {/*                <p style={{ fontWeight:"400" , color:"#9a9999"}}>Mengikuti</p>*/}
                                    {/*            </div>*/}
                                    {/*        </button>*/}
                                    {/*    </div>*/}
                                    {/*    <div className="font16-res-400">*/}
                                    {/*        <button>*/}
                                    {/*            <div className="flex gap-1">*/}
                                    {/*                <p style={{ fontWeight:"550" , color:"#4f4e4e"}}>488</p>*/}
                                    {/*                <p style={{ fontWeight:"400" , color:"#9a9999"}}>Pengikut</p>*/}
                                    {/*            </div>*/}
                                    {/*        </button>*/}
                                    {/*    </div>*/}
                                    {/*</div>*/}
                                </div>
                            </div>
                        </div>
                        <div className="xl:w-8/12 md:w-8/12 sm:w-11/12 bg-white lg:ps-0 ps-0 w-full border-radius-4 lg:mx-0 md:my-3 my-0  lg:me-auto md:me-0 me-auto  ms-auto md:ms-3">
                            <div className=" w-full mx-auto bg-white">
                                <div className=" z-50 w-full ms-auto ">
                                    <div className=" bg-white w-full  border-radius-4 pt-1.5  ">
                                        <ul id="tabs" className="flex  w-full px-1  text-purple-500">
                                            <li className=" px-0 w-11/12 font16-res-400 text-left border-b text-purple-600  mx-4 py-2 " style={{ fontWeight:"450"}}>
                                                <a id="default-tab" className="w-full"  >Activitas</a>
                                            </li>
                                            {/*<li className=" px-0 w-11/12 font16-res-400 border-b text-gray-500 hover:text-purple-600  mx-4 py-2 " style={{ fontWeight:"500"}}>*/}
                                            {/*    <a id="default-tab" className="w-full" href="#interaksi" onClick={(e) => handleTabCLick(e , 'interaksi')}>Interaksi</a>*/}
                                            {/*</li>*/}
                                            {/*<li className="px-0 w-11/12  font16-res-400 text-gray-500 hover:text-purple-600  py-2 "  style={{ fontWeight:"500"}}>*/}
                                            {/*    <a href="#aktivitas" className="w-full" onClick={(e) => handleTabCLick(e , 'aktivitas')}>Activitas</a>*/}
                                            {/*</li>*/}
                                            {/*<li className="px-4 text-gray-800 hidden font-semibold py-2 ">*/}
                                            {/*    <a href="#fourth">Tab 4</a>*/}
                                            {/*</li>*/}
                                        </ul>
                                    </div>
                                </div>
                                <div id="tab-contents" className=" w-full mt-0 mx-auto">
                                    <div id="aktivitas" >
                                        <div className="w-full mx-auto bg-white border-radius-4 py-0 border-radius-8 overflow-y-auto scrollbar-hide" style={{ height:"650px"}}>
                                            <div className="my-0">
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
                                                    <ul className="grid  md:mx-0 mx-auto grid-cols-1">
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
                        {/*<div className="lg:w-3/12 md:w-8/12 sm:w-10/12  w-full lg:mx-0 md:my-3 my-0 mx-auto   ms-auto">*/}
                        {/*    <div className="lg:w-11/12 my-8 py-4 w-full mx-auto ">*/}
                        {/*        <div className="text-left lg:mx-6 md:mx-7 mx-4 lg:mt-0 md:mt-0 mt-0 md:mb-4 mb-2">*/}
                        {/*            <h1 className="font22-res-300" style={{ fontWeight:"550"}}>{props.name}</h1>*/}
                        {/*            <p className="font16-res-400" style={{ color:"#7a7a7a" , fontWeight:"450"}}>@{props.username}</p>*/}
                        {/*            <div className="my-2">*/}
                        {/*                <p className="font18-res-300" style={{  color:"#595959"}}>{props.bio}</p>*/}
                        {/*            </div>*/}
                        {/*            <div className="mt-1 mb-2">*/}
                        {/*                <div className="block ">*/}
                        {/*                    <div className="flex py-1  gap-1">*/}
                        {/*                        <div style={{ height: "18px" }}>*/}
                        {/*                            <img className="h-full my-auto" src="/assets/location_icon.svg" alt="Location Icon" />*/}
                        {/*                        </div>*/}
                        {/*                        <p className="font16-res-300 text-gray-500">Link</p>*/}
                        {/*                    </div>*/}
                        {/*                    <div className="flex  py-1 gap-1">*/}
                        {/*                        <div style={{ height: "18px" }}>*/}
                        {/*                            <img className="h-full my-auto" src="/assets/location_icon.svg" alt="Location Icon" />*/}
                        {/*                        </div>*/}
                        {/*                        <p className="font16-res-300 text-gray-500">{props.address}</p>*/}
                        {/*                    </div>*/}
                        {/*                    <div className="flex  py-1 mt-2 md:mt-0 gap-1">*/}
                        {/*                        <div style={{ height: "18px" }}>*/}
                        {/*                            <img className="h-full my-auto" src="/assets/calendar-icon.svg" alt="Calendar Icon" />*/}
                        {/*                        </div>*/}
                        {/*                        <p className="font16-res-300 text-gray-500">Bergabung Pada {props.join_date}</p>*/}
                        {/*                    </div>*/}
                        {/*                </div>*/}
                        {/*            </div>*/}

                        {/*            /!*<div className="mt-2 flex gap-4">*!/*/}
                        {/*            /!*    <div className="font16-res-400">*!/*/}
                        {/*            /!*        <button>*!/*/}
                        {/*            /!*            <div className="flex gap-1">*!/*/}
                        {/*            /!*                <p style={{ fontWeight:"550", color:"#4f4e4e"}}>488</p>*!/*/}
                        {/*            /!*                <p style={{ fontWeight:"400" , color:"#9a9999"}}>Mengikuti</p>*!/*/}
                        {/*            /!*            </div>*!/*/}
                        {/*            /!*        </button>*!/*/}
                        {/*            /!*    </div>*!/*/}
                        {/*            /!*    <div className="font16-res-400">*!/*/}
                        {/*            /!*        <button>*!/*/}
                        {/*            /!*            <div className="flex gap-1">*!/*/}
                        {/*            /!*                <p style={{ fontWeight:"550" , color:"#4f4e4e"}}>488</p>*!/*/}
                        {/*            /!*                <p style={{ fontWeight:"400" , color:"#9a9999"}}>Pengikut</p>*!/*/}
                        {/*            /!*            </div>*!/*/}
                        {/*            /!*        </button>*!/*/}
                        {/*            /!*    </div>*!/*/}
                        {/*            /!*</div>*!/*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                </div>

            </div>
        </>
    )
}


// export const MyProfileComponent = (props) => {
//     const navigate = useNavigate();
//
//     const livetask = [
//         { id: 1, name: 'Assigment Harian WEB 2023-06-24'  , task_type : "assigment", status :"berjalan" , subjects: "WEB" , classname:"11 TKJ 3" , teacher:"echo" , deadline_date : "2023-06-24 08:00" , post_time :"2023-06-24 06:00" },
//         { id: 2, name: 'Absent Harian WEB 2023-06-24'  , task_type : "absent", status :"berjalan" , subjects: "WEB" , classname:"11 TKJ 3" , teacher:"echo" , deadline_date : "2023-06-24 08:00" , post_time :"2023-06-24 06:00"},
//         { id: 3, name: 'Absent Harian WEB 2023-06-23' , task_type : "absent" , status :"melewatkan" , subjects: "WEB", classname:"11 TKJ 3" , teacher:"echo" , deadline_date : "2023-06-23 08:00" , post_time :"2023-06-23 06:00"},
//         { id: 4, name: 'Resource Harian WEB 2023-06-22' , task_type : "resource" , status :"selesai" , subjects: "WEB" , classname:"11 TKJ 3" , teacher:"echo" , deadline_date : "" , post_time :"2023-06-22 06:00" },
//         { id: 5, name: 'Absent Harian WEB 2023-06-22'  , task_type : "absent", status :"selesai" , subjects: "WEB" , classname:"11 TKJ 3" , teacher:"echo" , deadline_date : "2023-06-22 08:00" , post_time :"2023-06-22 06:00" },
//     ];
//
//     return(
//         <>
//
//             <div className=' h-full mx-auto md:pt-16  pt-16 px-0' style={{ minWidth:"300px" , background:"#f5f5f5"}}>
//                 <div className="block w-full md:hidden">
//                     <MainNavComponent />
//                 </div>
//                 <div className=" lg:w-full mx-auto  gap-4">
//                     <div className="lg:w-full md:w-full  w-full lg:mx-0 mx-auto">
//                         <div className="bg-white md:shadow border-b border-gray-200 pb-0.5 md:border-radius-12">
//                             <div className="w-full">
//                                 <div className="relative  my-0">
//                                     <div className="h-profile-banner-new mb-3" style={{ width:"100%"}}>
//                                         {props.banner === null ? (
//                                             <img className="w-full object-cover h-full md:border-radius-8 border-none h-profile-banner-new"  src="/assets/bg-absence.svg"/>
//                                         ): (
//                                             <img className="w-full object-cover h-full md:border-radius-8 border-none h-profile-banner-new"  src={props.banner}/>
//                                         )}
//                                     </div>
//                                     <div className="absolute lg:left-20 lg:top-52 md:top-40 sm:top-32 top-24 md:left-6 left-3">
//                                         <div className="radius-100 bg-white p-1 h-profile-round-new" >
//                                             {props.photoProfile === null ? (
//                                                 <img className="w-full h-full radius-100" style={{ objectFit:"cover"}} src="/assets/default-profile.svg" />
//                                             ):(
//                                                 <img className="w-full h-full radius-100" style={{ objectFit:"cover"}} src={props.photoProfile} />
//
//                                             )}
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="ms-auto me-4 sm:w-3/12 w-5/12 " >
//                                     <div className="lg:my-2 md:my-1 sm:my-4 my-1">
//                                         <button  onClick={() => window.location.href='/edit/profile'} className="font14-res-300 md:font15-res-300 border py-1.5 text-gray-500 bg-white px-4 border-gray-400 hover:bg-gray-100 hover:text-gray-600 border-radius-20" style={{ fontWeight:"500"}}>
//                                             Edit profile
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="text-left lg:mx-6 md:mx-7 mx-4 lg:mt-0 md:mt-0 mt-0 md:mb-4 mb-2">
//                             </div>
//                         </div>
//
//                     </div>
//                     <div className="lg:w-11/12 sm:w-11/12 w-full md:flex block xl:gap-10 lg:gap-5 gap-0 mx-auto">
//                         <div className="xl:w-3/12 lg:w-4/12 md:w-4/12 sm:w-11/12  w-full  lg:mx-0 md:my-0 my-0 me-auto  ms-auto md:me-0">
//                             <div className="lg:w-11/12 lg:my-8 sm:my-3 my-0 py-4 w-full mx-auto lg:bg-transparent bg-white ">
//                                 <div className="text-left lg:mx-6 md:mx-7 mx-4 lg:mt-0 md:mt-0 mt-0 md:mb-4 mb-2">
//                                     <h1 className="font18-res-300 md:font22-res-300" style={{ fontWeight:"550"}}>{props.name}</h1>
//                                     <p className="font15-res-300 md:font16-res-400" style={{ color:"#7a7a7a" , fontWeight:"450"}}>@{props.username}</p>
//                                     <div className="my-2">
//                                         <p className="font16-res-300 md:font18-res-300" style={{  color:"#595959"}}>{props.bio}</p>
//                                     </div>
//                                     <div className="mt-1 border-t pt-3 mb-2">
//                                         <div className="block ">
//
//                                             <div className="flex  py-1 gap-1">
//                                                 <div style={{ height: "17px" }}>
//                                                     <img className="h-full my-auto" src="/assets/location_icon.svg" alt="Location Icon" />
//                                                 </div>
//                                                 <p className="font14-res-300 lg:font16-res-300 text-gray-500">{props.address}</p>
//                                             </div>
//                                             <div className="flex  py-1   gap-1">
//                                                 <div style={{ height: "17px"  }}>
//                                                     <img className="h-full my-auto" src="/assets/calendar-icon.svg" alt="Calendar Icon" />
//                                                 </div>
//                                                 <p className="font14-res-300 lg:font16-res-300  text-gray-500">Bergabung Pada {props.join_date}</p>
//                                             </div>
//                                         </div>
//                                     </div>
//
//                                     {/*<div className="mt-2 flex gap-4">*/}
//                                     {/*    <div className="font16-res-400">*/}
//                                     {/*        <button>*/}
//                                     {/*            <div className="flex gap-1">*/}
//                                     {/*                <p style={{ fontWeight:"550", color:"#4f4e4e"}}>488</p>*/}
//                                     {/*                <p style={{ fontWeight:"400" , color:"#9a9999"}}>Mengikuti</p>*/}
//                                     {/*            </div>*/}
//                                     {/*        </button>*/}
//                                     {/*    </div>*/}
//                                     {/*    <div className="font16-res-400">*/}
//                                     {/*        <button>*/}
//                                     {/*            <div className="flex gap-1">*/}
//                                     {/*                <p style={{ fontWeight:"550" , color:"#4f4e4e"}}>488</p>*/}
//                                     {/*                <p style={{ fontWeight:"400" , color:"#9a9999"}}>Pengikut</p>*/}
//                                     {/*            </div>*/}
//                                     {/*        </button>*/}
//                                     {/*    </div>*/}
//                                     {/*</div>*/}
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="xl:w-8/12 md:w-7/12 sm:w-11/12 bg-white lg:ps-0 ps-0 w-full border-radius-4 lg:mx-0 md:my-3 my-0  me-auto  ms-auto md:ms-3">
//                             <div className=" w-full mx-auto bg-white">
//                                 <div className=" z-50 w-full ms-auto ">
//                                     <div className=" bg-white w-full  border-radius-4 pt-1.5  ">
//                                         <ul id="tabs" className="flex  w-full px-1  text-purple-500">
//                                             <li className=" px-0 w-11/12 font16-res-400 text-left border-b text-purple-600  mx-4 py-2 " style={{ fontWeight:"450"}}>
//                                                 <a id="default-tab" className="w-full"  >Activitas</a>
//                                             </li>
//                                             {/*<li className=" px-0 w-11/12 font16-res-400 border-b text-gray-500 hover:text-purple-600  mx-4 py-2 " style={{ fontWeight:"500"}}>*/}
//                                             {/*    <a id="default-tab" className="w-full" href="#interaksi" onClick={(e) => handleTabCLick(e , 'interaksi')}>Interaksi</a>*/}
//                                             {/*</li>*/}
//                                             {/*<li className="px-0 w-11/12  font16-res-400 text-gray-500 hover:text-purple-600  py-2 "  style={{ fontWeight:"500"}}>*/}
//                                             {/*    <a href="#aktivitas" className="w-full" onClick={(e) => handleTabCLick(e , 'aktivitas')}>Activitas</a>*/}
//                                             {/*</li>*/}
//                                             {/*<li className="px-4 text-gray-800 hidden font-semibold py-2 ">*/}
//                                             {/*    <a href="#fourth">Tab 4</a>*/}
//                                             {/*</li>*/}
//                                         </ul>
//                                     </div>
//                                 </div>
//                                 <div id="tab-contents" className=" w-full mt-0 mx-auto">
//                                     <div id="aktivitas" >
//                                         <div className="w-full mx-auto bg-white border-radius-4 py-0 border-radius-8 overflow-y-auto scrollbar-hide" style={{ height:"650px"}}>
//                                             <div className="my-0">
//                                                 {livetask.length === 0 ? (
//                                                     <div className="py-8">
//                                                         <div className="mb-8 mt-2">
//                                                             <div>
//                                                                 <div className="mx-auto" style={{ height:"160px" , width:"280px"}}>
//                                                                     <img className="w-full mx-auto h-full" src="/assets/icon-no-class.svg"/>
//                                                                 </div>
//                                                                 <p className="text-purple-600 my-4">Tidak ada Class yang kamu ikuti</p>
//                                                                 <div className="flex w-7/12 mb-8 mt-0 mx-auto " style={{ fontSize:"15px"}}>
//                                                                     <div className="mx-auto">
//                                                                         <Link to="/">
//                                                                             <div className={"bg-purple-600 px-3 w-full py-2 border-radius-4 text-white cursor-pointer hover:bg-purple-700"}>
//                                                                                 <p>
//                                                                                     Bergabung Kelas
//                                                                                 </p>
//                                                                             </div>
//                                                                         </Link>
//                                                                     </div>
//                                                                     <div className="mx-auto">
//                                                                         <Link to="/">
//                                                                             <div className={"bg-white-600 px-3 border-purple-700  border w-full py-2 border-radius-4 text-purple-600 cursor-pointer "}>
//                                                                                 <p>
//                                                                                     Buat Kelas
//                                                                                 </p>
//                                                                             </div>
//                                                                         </Link>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 ) : (
//                                                     <ul className="grid  md:mx-0 mx-auto grid-cols-1">
//                                                         {livetask.map((item) => {
//                                                             return(
//                                                                 <div  key={item.id}>
//                                                                     <li>
//                                                                         <TaskCardComponent name={item.name} status={item.status} subject={item.subjects} taskType={item.task_type} classname={item.classname} teacher={item.teacher} deadline_date={item.deadline_date} post_time={item.post_time}/>
//                                                                     </li>
//                                                                 </div>
//                                                             )
//                                                         })}
//                                                     </ul>
//                                                 )}
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div id="fourth" className="hidden py-2 px-4">
//                                         Fourth tab
//                                     </div>
//                                     {/*<div className="lg:w-10/12 md:w-11/12  w-10/12 mx-auto">*/}
//                                     {/*    <div className="flex mx-6 justify-between">*/}
//                                     {/*        <div>*/}
//                                     {/*            <h3 className="font-medium-little">Activity Recently</h3>*/}
//                                     {/*        </div>*/}
//                                     {/*        <div>*/}
//                                     {/*            <Link to={`/`}>*/}
//                                     {/*                <p className="font-medium-littlet" >See All</p>*/}
//                                     {/*            </Link>*/}
//                                     {/*        </div>*/}
//                                     {/*    </div>*/}
//                                     {/*    <div className="w-full my-4 mx-auto">*/}
//                                     {/*            <div className="flex gap-4 overscroll-x-auto mx-6" style={{ overflowX: "auto" }}>*/}
//
//                                     {/*            </div>*/}
//                                     {/*    </div>*/}
//                                     {/*</div>*/}
//                                 </div>
//                             </div>
//                         </div>
//                         {/*<div className="lg:w-3/12 md:w-8/12 sm:w-10/12  w-full lg:mx-0 md:my-3 my-0 mx-auto   ms-auto">*/}
//                         {/*    <div className="lg:w-11/12 my-8 py-4 w-full mx-auto ">*/}
//                         {/*        <div className="text-left lg:mx-6 md:mx-7 mx-4 lg:mt-0 md:mt-0 mt-0 md:mb-4 mb-2">*/}
//                         {/*            <h1 className="font22-res-300" style={{ fontWeight:"550"}}>{props.name}</h1>*/}
//                         {/*            <p className="font16-res-400" style={{ color:"#7a7a7a" , fontWeight:"450"}}>@{props.username}</p>*/}
//                         {/*            <div className="my-2">*/}
//                         {/*                <p className="font18-res-300" style={{  color:"#595959"}}>{props.bio}</p>*/}
//                         {/*            </div>*/}
//                         {/*            <div className="mt-1 mb-2">*/}
//                         {/*                <div className="block ">*/}
//                         {/*                    <div className="flex py-1  gap-1">*/}
//                         {/*                        <div style={{ height: "18px" }}>*/}
//                         {/*                            <img className="h-full my-auto" src="/assets/location_icon.svg" alt="Location Icon" />*/}
//                         {/*                        </div>*/}
//                         {/*                        <p className="font16-res-300 text-gray-500">Link</p>*/}
//                         {/*                    </div>*/}
//                         {/*                    <div className="flex  py-1 gap-1">*/}
//                         {/*                        <div style={{ height: "18px" }}>*/}
//                         {/*                            <img className="h-full my-auto" src="/assets/location_icon.svg" alt="Location Icon" />*/}
//                         {/*                        </div>*/}
//                         {/*                        <p className="font16-res-300 text-gray-500">{props.address}</p>*/}
//                         {/*                    </div>*/}
//                         {/*                    <div className="flex  py-1 mt-2 md:mt-0 gap-1">*/}
//                         {/*                        <div style={{ height: "18px" }}>*/}
//                         {/*                            <img className="h-full my-auto" src="/assets/calendar-icon.svg" alt="Calendar Icon" />*/}
//                         {/*                        </div>*/}
//                         {/*                        <p className="font16-res-300 text-gray-500">Bergabung Pada {props.join_date}</p>*/}
//                         {/*                    </div>*/}
//                         {/*                </div>*/}
//                         {/*            </div>*/}
//
//                         {/*            /!*<div className="mt-2 flex gap-4">*!/*/}
//                         {/*            /!*    <div className="font16-res-400">*!/*/}
//                         {/*            /!*        <button>*!/*/}
//                         {/*            /!*            <div className="flex gap-1">*!/*/}
//                         {/*            /!*                <p style={{ fontWeight:"550", color:"#4f4e4e"}}>488</p>*!/*/}
//                         {/*            /!*                <p style={{ fontWeight:"400" , color:"#9a9999"}}>Mengikuti</p>*!/*/}
//                         {/*            /!*            </div>*!/*/}
//                         {/*            /!*        </button>*!/*/}
//                         {/*            /!*    </div>*!/*/}
//                         {/*            /!*    <div className="font16-res-400">*!/*/}
//                         {/*            /!*        <button>*!/*/}
//                         {/*            /!*            <div className="flex gap-1">*!/*/}
//                         {/*            /!*                <p style={{ fontWeight:"550" , color:"#4f4e4e"}}>488</p>*!/*/}
//                         {/*            /!*                <p style={{ fontWeight:"400" , color:"#9a9999"}}>Pengikut</p>*!/*/}
//                         {/*            /!*            </div>*!/*/}
//                         {/*            /!*        </button>*!/*/}
//                         {/*            /!*    </div>*!/*/}
//                         {/*            /!*</div>*!/*/}
//                         {/*        </div>*/}
//                         {/*    </div>*/}
//                         {/*</div>*/}
//                     </div>
//                 </div>
//
//             </div>
//         </>
//     )
// }