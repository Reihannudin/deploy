import {useEffect, useRef, useState} from "react";
import {Link, useParams} from "react-router-dom";

export const TaskClassCardComponent = (props) => {

    const [isDropdownMenu , setIsDropdownMenu] = useState(true);

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

    const truncatedName = props.name.length > 24 ? `${props.name.slice(0, 23)}...` : props.name;

    const toggleDropdownMenu = () => {
        setIsDropdownMenu((prevHidden) => ! prevHidden);
    }

    const {slug} = useParams();

    const user = JSON.parse(localStorage.getItem('whoLogin'));
    const username = user.username;


    //  Copy Absent
    const urlAbsent = window.location.href;


    const definedUrlAbsent = `https://spaceskool.site/view/${slug}/detail/absent/${props.id}`;

    const inputRefAbsent = useRef(null);

    const copyUrlAbsent = () => {
        if (inputRefAbsent.current) {
            inputRefAbsent.current.value = definedUrlAbsent;
            inputRefAbsent.current.select();
            document.execCommand('copy');
            alert('Copied URL: ' + definedUrlAbsent);
        }
    };

    // Copy Assignment
    const urlAssignment = window.location.href;

    const definedUrlAssignment = `https://spaceskool.site/view/${slug}/detail/assignment/${props.id}`

    const inputRefAssignment = useRef(null);

    const copyUrlAssignment = () => {
        if (inputRefAssignment.current){
            inputRefAssignment.current.value = definedUrlAssignment;
            inputRefAssignment.current.select();
            document.execCommand('copy');
            alert("Copied URL: " + definedUrlAssignment)
        }
    }

    // Copy Resource
    const urlResource = window.location.href;

    const definedUrlResource = `https://spaceskool.site/view/${slug}/detail/resource/${props.id}`

    const inputRefResource = useRef(null);

    const copyUrlResource = () => {
        if (inputRefResource.current){
            inputRefResource.current.value = definedUrlResource;
            inputRefResource.current.select();
            document.execCommand('copy');
            alert("Copied URL: " + definedUrlResource)
        }
    }



    return(
        <>
            <div className="mb-4">
                {props.type  === "absent" ? (
                    <div >
                        <div>
                            <div className="bg-white border py-3 border-b-0 border-radius-4 px-4">
                                <div className="flex relative">
                                    <div className="p-2 border-radius-4 me-2" style={{ background: "#A568E6", height: "40px" , width:"40px" }}>
                                        <div className="my-auto" style={{ height: "24px" ,  width:"40px" }}>
                                            <img className="h-full" src="/assets/absent-sm-icon.svg" alt="" />
                                        </div>
                                    </div>
                                    <div className="w-10/12 text-left mx-3">
                                        <h2 className="font16-res-300">{window.innerWidth >= 768 ? truncatedName : props.name}</h2>
                                        <p className="font14-res-300" style={{ color: "#5d5959" }}>{props.post_time}</p>
                                    </div>
                                    <div className="md:w-1/12 w-2/12 my-auto">
                                        <button onClick={toggleDropdownMenu} className="my-auto">
                                            <div className="px-1 py-2 bg-white hover:px-1 hover:bg-gray-100 rounded-full">
                                                <div className="my-auto mx-1" style={{ height: "24px" }}>
                                                    <img className="h-full w-full" src="/assets/menu-icon.svg" alt="" />
                                                </div>
                                            </div>
                                        </button>
                                    </div>
                                    <div id="dropdown_profile" className={`z-10 ${isDropdownMenu ? 'hidden' : ''} absolute right-0 top-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}>
                                        <ul className="py-2 text-sm text-left font14-res-300 text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                            <li>
                                                <div>
                                                    <input ref={inputRefAbsent} defaultValue={urlAbsent} style={{ position: 'fixed', top: '-9999px' }} />
                                                    <button onClick={copyUrlAbsent} className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-purple-600 dark:hover:text-white">
                                                        Copy Link
                                                    </button>
                                                </div>
                                            </li>
                                            <li>
                                                <div>
                                                    <Link  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-purple-600 dark:hover:text-white">Laporkan</Link>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white border border-radius-4 px-4 py-2">
                                <Link to={`/view/${slug}/detail/absent/${props.id}`}>
                                    <div className="flex justify-between w-11/12 gap-4 ms-auto">
                                       <div>
                                           {props.action.map((item) => {
                                               console.log("item : " , item)
                                               console.log("item student : " , item.student_id)
                                               console.log("user id : " , props.user_id)
                                               console.log("item status : " ,item.status)
                                               console.log("item equals : " , parseInt(item.student_id) === parseInt(props.user_id))
                                                   // item.student_id === props.user_id
                                                   return(
                                                       <div key={item.id}>
                                                           {parseInt(item.student_id) === parseInt(props.user_id) ? (
                                                               <>
                                                                   {item.status === 'selesai' || item.status === 'hadir' ? (
                                                                       <div>
                                                                           <div className="w-full text-green-600 bg-green-200 px-4 border-radius-4">
                                                                               <p className="font14-res-300">{item.status}</p>
                                                                           </div>
                                                                       </div>
                                                                   ) : item.status === 'melewatkan' ? (
                                                                       <div>
                                                                           <div className="w-full text-red-600 bg-red-200 px-2 border-radius-4">
                                                                               <p className="font14-res-300">{item.status}</p>
                                                                           </div>
                                                                       </div>
                                                                   ) : item.status === null ? (
                                                                       <div>
                                                                           <div className="w-full text-yellow-600 bg-yellow-200 px-4 border-radius-4">
                                                                               <p className="font14-res-300">Berjalan</p>
                                                                           </div>
                                                                       </div>
                                                                   ) : (
                                                                       <div>
                                                                           <div className="w-full text-yellow-600 bg-yellow-200 px-4 border-radius-4">
                                                                               <p className="font14-res-300">Berjalan</p>
                                                                           </div>
                                                                       </div>
                                                                   )}
                                                               </>
                                                           ) : (
                                                               <>

                                                               </>
                                                           )}
                                                       </div>
                                                   )
                                               }
                                           )}
                                       </div>
                                        {/*<div className="flex gap-2 mx-0">*/}
                                        {/*    <div className="mt-0.5 font14-res-300">*/}
                                        {/*        <p className="my-auto text-gray-500">{props.end_time} - {props.date}</p>*/}
                                        {/*    </div>*/}
                                        {/*</div>*/}
                                        <div className="flex gap-2 mx-5">
                                            <div className="mt-0.5 font14-res-300">
                                                <div style={{ height:"18px"}}>
                                                    <img src="/assets/arrows-right.svg" className="w-full h-full" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>

                            </div>
                        </div>
                    </div>
                ) : (props.type === "assignment") ? (
                    <div>
                        <div>
                            <div className="bg-white border py-3 border-b-0 border-radius-4 px-4">
                                <div className="flex relative">
                                    <div className="p-2 border-radius-4 me-2" style={{ background: "#A568E6", height: "40px" , width:"40px" }}>
                                        <div className="my-auto" style={{ height: "24px" ,  width:"40px" }}>
                                            <img className="h-full" src="/assets/assigment-sm-icon.svg" alt="" />
                                        </div>
                                    </div>
                                    <div className="w-10/12 text-left mx-3">
                                        <h2 className="font16-res-300">{window.innerWidth >= 768 ? truncatedName : props.name}</h2>
                                        <p className="font14-res-300" style={{ color: "#5d5959" }}>{props.post_time}</p>
                                    </div>
                                    <div className="md:w-1/12 w-2/12 my-auto">
                                        <button onClick={toggleDropdownMenu} className="my-auto">
                                            <div className="px-1 py-2 bg-white hover:px-1 hover:bg-gray-100 rounded-full">
                                                <div className="my-auto mx-1" style={{ height: "24px" }}>
                                                    <img className="h-full w-full" src="/assets/menu-icon.svg" alt="" />
                                                </div>
                                            </div>
                                        </button>
                                    </div>
                                    <div id="dropdown_profile" className={`z-10 ${isDropdownMenu ? 'hidden' : ''} absolute right-0 top-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}>
                                        <ul className="py-2 text-sm text-left font14-res-300 text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                            <li>
                                                <div>
                                                    <input ref={inputRefAbsent} defaultValue={urlAbsent} style={{ position: 'fixed', top: '-9999px' }} />
                                                    <button onClick={copyUrlAbsent} className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-purple-600 dark:hover:text-white">
                                                        Copy Link
                                                    </button>
                                                </div>
                                            </li>
                                            <li>
                                                <div>
                                                    <Link  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-purple-600 dark:hover:text-white">Laporkan</Link>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white border border-radius-4 px-4 py-2">
                                <Link to={`/view/${slug}/detail/assignment/${props.id}`}>
                                    <div className="flex justify-between w-11/12 gap-4 ms-auto">
                                        <div>
                                            {props.action.map((item) => {

                                                console.log("my user id : " , props.user_id);
                                                console.log("action user id : " , item.student_id );
                                                console.log("same user id : " , item.student_id === props.user_id);

                                                    return(
                                                        <div key={item.id}>
                                                            {parseInt(item.student_id) === parseInt(props.user_id) ? (
                                                                <>
                                                                    {item.status === 'selesai' || item.status === 'mengerjakan' ? (
                                                                        <div>
                                                                            <div className="w-full text-green-600 bg-green-200 px-4 border-radius-4">
                                                                                <p className="font14-res-300">{item.status}</p>
                                                                            </div>
                                                                        </div>
                                                                    ) : item.status === 'melewatkan' ? (
                                                                        <div>
                                                                            <div className="w-full text-red-600 bg-red-200 px-2 border-radius-4">
                                                                                <p className="font14-res-300">{item.status}</p>
                                                                            </div>
                                                                        </div>
                                                                    ) : item.status === null ? (
                                                                        <div>
                                                                            <div className="w-full text-yellow-600 bg-yellow-200 px-4 border-radius-4">
                                                                                <p className="font14-res-300">Berjalan</p>
                                                                            </div>
                                                                        </div>
                                                                    ) : (
                                                                        <div>
                                                                            <div className="w-full text-yellow-600 bg-yellow-200 px-4 border-radius-4">
                                                                                <p className="font14-res-300">Berjalan</p>
                                                                            </div>
                                                                        </div>
                                                                    )}
                                                                </>
                                                            ) : (
                                                                <>

                                                                </>
                                                            )}
                                                        </div>
                                                    )
                                                }
                                            )}
                                        </div>
                                        <div className="flex gap-2 mx-5">
                                        <div className="mt-0.5 font14-res-300">
                                            <div style={{ height:"18px"}}>
                                                <img src="/assets/arrows-right.svg" className="w-full h-full" />
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </Link>
                            </div>
                        </div>

                    </div>
                ) : (
                    <div >
                        <div>
                            <div className="bg-white border py-3 border-b-0 border-radius-4 px-4">
                                <div className="flex relative">
                                    <div className="p-2 border-radius-4 me-2" style={{ background: "#A568E6", height: "40px" , width:"40px" }}>
                                        <div className="my-auto" style={{ height: "24px" ,  width:"40px" }}>
                                            <img className="h-full" src="/assets/resource-sm-icon.svg" alt="" />
                                        </div>
                                    </div>
                                    <div className="w-10/12 text-left mx-3">
                                        <h2 className="font16-res-300">{window.innerWidth >= 768 ? truncatedName : props.name}</h2>
                                        <p className="font14-res-300" style={{ color: "#5d5959" }}>{props.post_time}</p>
                                    </div>
                                    <div className="md:w-1/12 w-2/12 my-auto">
                                        <button onClick={toggleDropdownMenu} className="my-auto">
                                            <div className="px-1 py-2 bg-white hover:px-1 hover:bg-gray-100 rounded-full">
                                                <div className="my-auto mx-1" style={{ height: "24px" }}>
                                                    <img className="h-full w-full" src="/assets/menu-icon.svg" alt="" />
                                                </div>
                                            </div>
                                        </button>
                                    </div>
                                    <div id="dropdown_profile" className={`z-10 ${isDropdownMenu ? 'hidden' : ''} absolute right-0 top-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}>
                                        <ul className="py-2 text-sm text-left font14-res-300 text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                            <li>
                                                <div>
                                                    <input ref={inputRefResource} defaultValue={urlResource} style={{ position: 'fixed', top: '-9999px' }} />
                                                    <button onClick={copyUrlResource} className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-purple-600 dark:hover:text-white">
                                                        Copy Link
                                                    </button>
                                                </div>
                                            </li>
                                            <li>
                                                <div>
                                                    <Link  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-purple-600 dark:hover:text-white">Laporkan</Link>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white border border-radius-4 px-4 py-2">
                                <Link to={`/view/${slug}/detail/resource/${props.id}`}>
                                    <div className="flex justify-between w-11/12 gap-4 ms-auto">
                                        {props.status === "selesai" ? (
                                            <div>
                                                <div className="w-full text-green-600 bg-green-200 px-4 border-radius-4">
                                                    <p className="font14-res-300">{props.status}</p>
                                                </div>
                                            </div>
                                        ) : props.status === "melewatkan" ? (
                                            <div>
                                                <div className="w-full text-red-600 bg-red-200 px-2 border-radius-4">
                                                    <p className="font14-res-300">{props.status}</p>
                                                </div>
                                            </div>
                                        ) : (
                                            <div>
                                                <div className="w-full text-yellow-600 bg-yellow-200 px-4 border-radius-4">
                                                    <p className="font14-res-300">{props.status}</p>
                                                </div>
                                            </div>
                                        )}
                                        <div className="flex gap-2 mx-5">
                                            <div className="mt-0.5 font14-res-300">
                                                <div style={{ height:"18px"}}>
                                                    <img src="/assets/arrows-right.svg" className="w-full h-full" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}