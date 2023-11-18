import {CommentFeedComponent} from "./Card/CommentFeed.Component";
import React, {useState} from "react";

export const DetailFeedComponent = () => {

    const [isDropdownOpen , setIsDropdownOpen] = useState(true);

    const handleDropdownOpen = () => {
        setIsDropdownOpen((prevHidden) => !prevHidden);
    }

    return(
        <>
            <div className=' h-full mx-auto md:pt-16  pt-10 px-0' style={{ minWidth:"300px"}}>
                <div className="lg:w-10/12 md:w-11/12 mx-auto">
                    <div className="
                    xl:w-7/12  lg:w-8/12 md:w-9/12 mx-auto sm:w-10/12 w-11/12   mb-8 md:flex block border-radius-8  py-2 px-4 bg-white md:border border-none
                    " style={{ height:"500px"}}>
                        <div className=" w-full relative h-full ">
                            <div className="w-full justify-between  flex bg-white ">
                                <div className="flex">
                                    <div className="flex w-10/12 ">
                                        <div className="w-3/12">
                                            <div className="radius-100 p-1 wh-d-feed" style={{  objectFit:"cover"}}>
                                                <img className="h-full w-full radius-100" src="https://phinf.wevpstatic.net/MjAyMzA2MTJfMTIw/MDAxNjg2NTI2NTI3MDA0.tnGOoNdTSU06Btq1AkMjhC0hj0W0-_t9bUEE-IpjQcIg.peUK5tbjk3Zbbn5_0o99rufk399yYougxz5uwIUa8ZQg.JPEG/Weverse_7a68f.jpg?type=s68"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-left mx-2 my-auto">
                                        <div className="gap-2 flex">
                                            <p className="font15-res-300" style={{  fontWeight:"550"}}>Nama</p>
                                        </div>

                                        <p className="font13-res-300" style={{ color:"#797979"}}>33mnt</p>
                                    </div>
                                </div>
                                <div className="my-2.5 mx-5">
                                    <button onClick={handleDropdownOpen} className="relative" style={{ height:"24px"}}>
                                        <img className="h-full" src="/assets/menu-icon-horizontal.svg"/>

                                    </button>
                                    {isDropdownOpen ? null :(
                                        <div
                                            id="dropdown_profile"
                                            className="z-10"

                                        >
                                            <div className="bg-white bg-opacity-0 w-full h-full z-40 absolute right-0 bottom-0"
                                                 onClick={handleDropdownOpen}
                                            ></div>
                                            <div className="relative">
                                                <div className="absolute right-0  z-50 bottom-10 font14-res-300 bg-white divide-y divide-gray-100 rounded-lg shadow w-36 md:w-44 dark:bg-gray-700 dark:divide-gray-600">
                                                    <div id="dropdown_profile" className={`z-10 ${isDropdownOpen ? 'hidden' : ''} absolute right-0 top-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-36 dark:bg-gray-700 dark:divide-gray-600`}>
                                                        <ul className="py-2 font13-res-300 text-left text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                                            <li>

                                                                <div  >
                                                                    <input
                                                                        id="copyCode"
                                                                        // ref={inputRefClass}
                                                                        // defaultValue={urlClass}
                                                                        style={{ position: 'fixed', top: '-9999px' }}
                                                                    />
                                                                    <button
                                                                        // onClick={copyUrlClass}
                                                                        className="block px-4 py-2  w-full  text-left hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-purple-600 dark:hover:text-white"

                                                                    >
                                                                        Laporkan
                                                                    </button>
                                                                    {/*{showAlert && (*/}
                                                                    {/*    <div id="drop-action" className="fixed inset-0 flex items-center justify-center">*/}
                                                                    {/*      /!* This div serves as a backdrop and should cover the entire screen *!/*/}
                                                                    {/*      <button*/}
                                                                    {/*          onClick={() => setShowAlert(false)} // Close the alert when clicking the backdrop*/}
                                                                    {/*          className="bg-gray-500 bg-opacity-30 w-full h-full absolute top-0 left-0"*/}
                                                                    {/*          style={{ zIndex: "300" }}*/}
                                                                    {/*      ></button>*/}

                                                                    {/*      <CustomAlert*/}
                                                                    {/*          message={`${definedUrlClass}`}*/}
                                                                    {/*          onClose={() => setShowAlert(false)} // Close the alert when using the custom alert's close button*/}
                                                                    {/*      />*/}
                                                                    {/*    </div>*/}
                                                                    {/*)}*/}


                                                                </div>
                                                            </li>

                                                            <li>

                                                                <div  >
                                                                    <input
                                                                        id="copyCode"
                                                                        // ref={inputRefClass}
                                                                        // defaultValue={urlClass}
                                                                        style={{ position: 'fixed', top: '-9999px' }}
                                                                    />
                                                                    <button
                                                                        // onClick={copyUrlClass}
                                                                        className="block px-4 py-2  w-full  text-left hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-purple-600 dark:hover:text-white"

                                                                    >
                                                                        Edit
                                                                    </button>
                                                                    {/*{showAlert && (*/}
                                                                    {/*    <div id="drop-action" className="fixed inset-0 flex items-center justify-center">*/}
                                                                    {/*      /!* This div serves as a backdrop and should cover the entire screen *!/*/}
                                                                    {/*      <button*/}
                                                                    {/*          onClick={() => setShowAlert(false)} // Close the alert when clicking the backdrop*/}
                                                                    {/*          className="bg-gray-500 bg-opacity-30 w-full h-full absolute top-0 left-0"*/}
                                                                    {/*          style={{ zIndex: "300" }}*/}
                                                                    {/*      ></button>*/}

                                                                    {/*      <CustomAlert*/}
                                                                    {/*          message={`${definedUrlClass}`}*/}
                                                                    {/*          onClose={() => setShowAlert(false)} // Close the alert when using the custom alert's close button*/}
                                                                    {/*      />*/}
                                                                    {/*    </div>*/}
                                                                    {/*)}*/}


                                                                </div>
                                                            </li>


                                                            <li>
                                                                <div>
                                                                    <button
                                                                        className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-red-600 hover:text-red-600 dark:hover:text-white"
                                                                    >
                                                                        Hapus
                                                                    </button>



                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="w-full my-4 mx-auto" >
                                <div className="overflow-y-auto scrollbar-hide h-full" >
                                    <div className="text-left sm:mx-3 mx-0 sm:w-11/12 w-11/12">
                                        <p className={"font15-res-300"} style={{  color: "#4f4f4f" }}>
                                            Thank you BTS💜...
                                            Happy 10th anniversary for the 7 people who make me smile every day 💜...
                                        </p>
                                    </div>

                                </div>
                            </div>
                            <div className="w-full mx-auto" >
                                <div className="relative border-t w-full">
                                    <div className="bg-white  w-full ">
                                        <div className="flex gap-2 w-full mx-3 py-3">
                                            <h2 className="font16-res-400" style={{ fontWeight:"550" }}>1</h2>
                                            <h2 className="font16-res-400" style={{ fontWeight:"550" }}>comment</h2>
                                        </div>
                                    </div>
                                    <div className="relative">
                                        <div className="w-full">
                                            <ul className="overflow-y-auto scrollbar-hide" style={{ maxHeight: "400px" }}>
                                                <li className="mb-4">
                                                    <CommentFeedComponent />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute z-50 bg-white w-full bottom-0">
                                <div className=" bg-white w-full">
                                    <div className="border-t  px-0 md:px-4 md:py-3 py-1.5 w-full">
                                        <div className="flex gap-2">
                                            <div className="w-10/12">
                                                <input className="py-2 border border-gray-300 w-full px-4  border-radius-20 bg-gray-50 font15-res-300"  type="text" placeholder="Tulis komentar"/>
                                            </div>
                                            <div className="flex  w-2/12 gap-1">
                                                <button className="bg-purple-500 shadow px-2.5 radius-100 ">
                                                    <div className="h-icon-menu">
                                                        <img className="h-full" src="/assets/arrow-white-upload.svg"/>
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className=" flex justify-between pt-2 md:pt-4 pb-2 px-4 w-full">
                                    <div className="flex gap-6">
                                        <div className="flex gap-1 ">
                                            <button>
                                                <div className="h-icon">
                                                    <img className="h-full" src="/assets/like-icon.svg"/>
                                                </div>
                                            </button>
                                            <p className="my-1  font16-res-300"  style={{ color:"#737373"}}>1</p>
                                        </div>
                                        <div className="flex gap-1 ">
                                            <button>
                                                <div className="h-icon">
                                                    <img className="h-full" src="/assets/retweet-icon-gray.svg"/>
                                                </div>
                                            </button>
                                            <p className="my-1 font16-res-300"  style={{ color:"#737373"}}>6</p>
                                        </div>
                                        <div className="flex gap-1 ">
                                            <button>
                                                <div className="h-icon">
                                                    <img className="h-full" src="/assets/bookmark-icon.svg"/>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="flex gap-1">
                                        <button>
                                            <div className="h-icon">
                                                <img className="h-full" src="/assets/share-icon.svg"/>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export const DetailFeedImageComponent = ({id , user , content , likes , comments , repost , status , time, repostChain  }) => {

    const [isDropdownOpen , setIsDropdownOpen] = useState(false);

    const handleDropdownOpen = () => {
        setIsDropdownOpen((prevHidden) => !prevHidden);
    }

    function timeView(originalTime) {
        const currentTime = new Date();
        const timeDifference = currentTime - new Date(time);
        const minutesDifference = Math.floor(timeDifference / (1000 * 60));

        if (minutesDifference < 60) {
            return `${minutesDifference} ${minutesDifference === 1 ? 'minute' : 'minutes'} ago`;
        } else if (minutesDifference < 24 * 60) {
            const hoursDifference = Math.floor(minutesDifference / 60);
            return `${hoursDifference} ${hoursDifference === 1 ? 'hour' : 'hours'} ago`;
        } else if (minutesDifference >= 24 * 60 && minutesDifference < 48 * 60) {
            return 'yesterday';
        } else {
            const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
            return new Date(time).toLocaleDateString(undefined, options);
        }
    }

    function truncateName(name, maxLength) {
        if (name.length > maxLength) {
            return name.substring(0, maxLength - 2) + "..";
        }
        return name;
    }


    const formattedTime = timeView(time);


    return(
        <>
            <div className=' h-full mx-auto md:pt-16  pt-10 px-0' style={{ minWidth:"300px"}}>
                <div className="xl:w-9/12 lg:w-10/12 sm:w-10/12 w-11/12 mx-auto">
                    <div className="w-full  mb-8 md:flex block border-radius-8  py-2 px-4 bg-white md:border border-none h-500 " >
                        <div className="

                        xl:w-8/12 lg:w-7/12 md:w-6/12 mx-auto  w-full relative  md:border-r ">
                            <div className="w-full justify-between  flex bg-white ">
                                <div className="flex">
                                    <div className="flex  ">
                                        <div className="">
                                            <div className="radius-100 p-1 wh-d-feed" style={{  objectFit:"cover"}}>
                                                <img className="h-full w-full radius-100"
                                                     src={user.image}
                                                     />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-left mx-2 my-auto">
                                        <div className="gap-2 flex">
                                            <p className="font15-res-300" style={{  fontWeight:"550"}}>
                                                <div className={"sm:hidden "}>
                                                    {truncateName(user.name, 15)}
                                                </div>
                                                <div className={"hidden sm:block "}>
                                                    {truncateName(user.name, 22)}
                                                </div>
                                            </p>
                                        </div>

                                        <p className="font13-res-300" style={{ color:"#797979"}}>  {formattedTime}</p>
                                    </div>
                                </div>
                                <div className="my-2.5 mx-5">
                                    <button onClick={handleDropdownOpen} className="relative" style={{ height:"24px"}}>
                                        <img className="h-full" src="/assets/menu-icon-horizontal.svg"/>

                                    </button>
                                    {isDropdownOpen ? null :(
                                        <div
                                            id="dropdown_profile"
                                            className="z-10"

                                        >
                                            <div className="bg-white bg-opacity-0 w-full h-full z-40 absolute right-0 bottom-0"
                                                 onClick={handleDropdownOpen}
                                            ></div>
                                            <div className="relative">
                                                <div className="absolute right-0  z-50 bottom-10 font14-res-300 bg-white divide-y divide-gray-100 rounded-lg shadow w-36 md:w-44 dark:bg-gray-700 dark:divide-gray-600">
                                                    <div id="dropdown_profile" className={`z-10 ${isDropdownOpen ? 'hidden' : ''} absolute right-0 top-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-36 dark:bg-gray-700 dark:divide-gray-600`}>
                                                        <ul className="py-2 font13-res-300 text-left text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                                            <li>

                                                                <div  >
                                                                    <input
                                                                        id="copyCode"
                                                                        // ref={inputRefClass}
                                                                        // defaultValue={urlClass}
                                                                        style={{ position: 'fixed', top: '-9999px' }}
                                                                    />
                                                                    <button
                                                                        // onClick={copyUrlClass}
                                                                        className="block px-4 py-2  w-full  text-left hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-purple-600 dark:hover:text-white"

                                                                    >
                                                                        Laporkan
                                                                    </button>
                                                                    {/*{showAlert && (*/}
                                                                    {/*    <div id="drop-action" className="fixed inset-0 flex items-center justify-center">*/}
                                                                    {/*      /!* This div serves as a backdrop and should cover the entire screen *!/*/}
                                                                    {/*      <button*/}
                                                                    {/*          onClick={() => setShowAlert(false)} // Close the alert when clicking the backdrop*/}
                                                                    {/*          className="bg-gray-500 bg-opacity-30 w-full h-full absolute top-0 left-0"*/}
                                                                    {/*          style={{ zIndex: "300" }}*/}
                                                                    {/*      ></button>*/}

                                                                    {/*      <CustomAlert*/}
                                                                    {/*          message={`${definedUrlClass}`}*/}
                                                                    {/*          onClose={() => setShowAlert(false)} // Close the alert when using the custom alert's close button*/}
                                                                    {/*      />*/}
                                                                    {/*    </div>*/}
                                                                    {/*)}*/}


                                                                </div>
                                                            </li>

                                                            <li>

                                                                <div  >
                                                                    <input
                                                                        id="copyCode"
                                                                        // ref={inputRefClass}
                                                                        // defaultValue={urlClass}
                                                                        style={{ position: 'fixed', top: '-9999px' }}
                                                                    />
                                                                    <button
                                                                        // onClick={copyUrlClass}
                                                                        className="block px-4 py-2  w-full  text-left hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-purple-600 dark:hover:text-white"

                                                                    >
                                                                        Edit
                                                                    </button>
                                                                    {/*{showAlert && (*/}
                                                                    {/*    <div id="drop-action" className="fixed inset-0 flex items-center justify-center">*/}
                                                                    {/*      /!* This div serves as a backdrop and should cover the entire screen *!/*/}
                                                                    {/*      <button*/}
                                                                    {/*          onClick={() => setShowAlert(false)} // Close the alert when clicking the backdrop*/}
                                                                    {/*          className="bg-gray-500 bg-opacity-30 w-full h-full absolute top-0 left-0"*/}
                                                                    {/*          style={{ zIndex: "300" }}*/}
                                                                    {/*      ></button>*/}

                                                                    {/*      <CustomAlert*/}
                                                                    {/*          message={`${definedUrlClass}`}*/}
                                                                    {/*          onClose={() => setShowAlert(false)} // Close the alert when using the custom alert's close button*/}
                                                                    {/*      />*/}
                                                                    {/*    </div>*/}
                                                                    {/*)}*/}


                                                                </div>
                                                            </li>


                                                            <li>
                                                                <div>
                                                                    <button
                                                                        className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-red-600 hover:text-red-600 dark:hover:text-white"
                                                                    >
                                                                        Hapus
                                                                    </button>



                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>

                            </div>
                            <div className="w-full my-4 mx-auto h-content-feed" >
                                <div className="overflow-y-auto scrollbar-hide h-full" >
                                    <div className="text-left sm:mx-3 mx-0 sm:w-11/12 w-11/12">
                                        <p className={"font15-res-300 w-full"} style={{  color: "#4f4f4f" }}>
                                            {content.content}
                                        </p>
                                    </div>
                                    <ul className="md::my-4 my-2 sm:mx-3.5 mx-0 w-11/12">
                                        <li className="md:my-8 sm:my-4 my-2">
                                            <div className="border-radius-8" style={{ maxWidth: "600px" , minWidth:"325px" ,  maxHeight: "300px" , minHeight:"200px"  }}>
                                                <img  src={`http://127.0.0.1:8000/storage/${content.image}`} className="border-radius-8 w-full h-full" alt="Image 1" />
                                            </div>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                            <div className="absolute z-50 bg-white w-full bottom-0  mb-[-1px]">
                                <div className="border-t flex justify-between pt-4 pb-2 px-4 w-full">
                                    <div className="flex gap-6">
                                        <div className="flex gap-1 ">
                                            <button>
                                                <div className="h-icon">
                                                    <img className="h-full" src="/assets/like-icon.svg"/>
                                                </div>
                                            </button>
                                            <p className="my-1  font16-res-300"  style={{ color:"#737373"}}>{likes.length}</p>
                                        </div>
                                        <div className="flex gap-1 ">
                                            <button>
                                                <div className="h-icon">
                                                    <img className="h-full" src="/assets/retweet-icon-gray.svg"/>
                                                </div>
                                            </button>
                                            <p className="my-1 font16-res-300"  style={{ color:"#737373"}}>{repost.length}</p>
                                        </div>
                                        {/*<div className="flex gap-1 ">*/}
                                        {/*    <button>*/}
                                        {/*        <div className="h-icon">*/}
                                        {/*            <img className="h-full" src="/assets/bookmark-icon.svg"/>*/}
                                        {/*        </div>*/}
                                        {/*    </button>*/}
                                        {/*</div>*/}
                                    </div>
                                    <div className="flex gap-1">
                                        <button>
                                            <div className="h-icon">
                                                <img className="h-full" src="/assets/share-icon.svg"/>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xl:w-4/12 lg:w-5/12 md:w-6/12 mx-auto sm:w-10/12 w-full">
                            <div className="md:w-11/12 w-full mx-auto h-comment-feed">
                                <div className="relative h-full">
                                    <div className="bg-white w-full ">
                                        <div className="flex gap-2 w-full mx-3 py-3">
                                            <h2 className="font16-res-400" style={{ fontWeight:"550" }}>{comments.length}</h2>
                                            <h2 className="font16-res-400" style={{ fontWeight:"550" }}>comment</h2>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="w-full">
                                            {comments.length === 0? (
                                                <div  className="overflow-y-auto  scrollbar-hide h-comment-v-feed">
                                                    <h2 className={"my-10 text-gray-600 font15-res-300"}>Tidak ada komentar</h2>
                                                </div>
                                            ):(
                                                <ul className="overflow-y-auto scrollbar-hide h-comment-v-feed">
                                                    <li className="mb-4">
                                                        <CommentFeedComponent />
                                                    </li>
                                                    <li className="mb-4">
                                                        <CommentFeedComponent />
                                                    </li>
                                                    <li className="mb-4">
                                                        <CommentFeedComponent />
                                                    </li>
                                                    <li className="mb-4">
                                                        <CommentFeedComponent />
                                                    </li>
                                                    <li className="mb-4">
                                                        <CommentFeedComponent />
                                                    </li>
                                                </ul>
                                            )}
                                        </div>
                                    </div>
                                    <div className="absolute z-50 bg-white w-full bottom-0">
                                        <div className="border-t  px-4 py-1.5 md:py-3 w-full">
                                            <div className="flex gap-2">
                                                <div className="w-10/12">
                                                    <input className="py-2 border border-gray-300 w-full px-4  border-radius-20 bg-gray-50 font15-res-300"  type="text" placeholder="Tulis komentar"/>
                                                </div>
                                                <div className="flex  w-2/12 gap-1">
                                                    <button className="bg-purple-500 shadow px-2.5  md:px-3.5 lg:px-2.5 radius-100 ">
                                                        <div className="h-icon-menu">
                                                            <img className="h-full" src="/assets/arrow-white-upload.svg"/>
                                                        </div>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}