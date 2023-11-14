import React, {useState} from "react";


export const FeedProfileCardComponent = ({handleOpenFeed}) => {


    const [isDropdown , setIsDropdown ] = useState(true);

    const handleDropdown = () => {
        setIsDropdown((prevHidden) => !prevHidden);
    }


    return(
        <>
            <div className="bg-white pt-3  pb-1 px-0 hover:bg-gray-50 cursor-pointer border-radius-4  border-b border-gray-100">
                <div>
                    <div className="flex mx-2 ">
                        <div className="radius-100 h-profile-feed">
                            <img
                                className="w-full h-full object-cover radius-100"
                                src={"https://asset.kompas.com/crops/LP8kuYVBnpTxPa8Viz7aGV9fLUU=/0x0:900x600/750x500/data/photo/2021/09/03/6131a9d80a953.jpeg"}
                            />
                        </div>
                        <div className="block w-10/12  my-auto text-left mx-2">
                            <div className="gap-1 font-inter w-full justify-between flex">
                                <div>
                                    <p className="font15-res-300 my-0 py-0 font-semibold text-gray-700" >
                                        {/*{feed.user.name}*/}
                                        HYBE MERCH
                                    </p>
                                    <p className="font14-res-300 my-0 py-0  text-gray-600">
                                        {/*{feed.time}*/}
                                        @HYBEMERCH
                                    </p>
                                    <p className="font14-res-300 my-1 py-0" style={{ color: "#444444" }}>
                                        {/*{feed.time}*/}
                                        Haii Saya Reihan

                                    </p>
                                </div>
                                <div>
                                    <button className={"text-gray-500 border cursor-pointer py-1.5 px-3 font13-res-300 border-gray-100 border-radius-8 text-black  hover:bg-gray-100 hover:text-purple-600"} style={{ fontWeight:"500"}}>
                                        Berteman
                                    </button>
                                </div>

                                {/*<div className="my-auto mx-0"  style={{ height:"30px"}}>*/}
                                {/*    <img className="my-auto h-full" src="/assets/icon-dot.svg"/>*/}
                                {/*</div>*/}
                            </div>



                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}


export const FeedSpacesCardComponent = ({handleOpenFeed}) => {


    const [isDropdown , setIsDropdown ] = useState(true);

    const handleDropdown = () => {
        setIsDropdown((prevHidden) => !prevHidden);
    }


    return(
        <>
            <div className="bg-white pt-3 cursor-pointer hover:bg-gray-50  pb-3 px-0  border-radius-4  border-gray-100">
                <div className="py-0">
                    <div className="flex mx-2 ">
                        <div className="w-2/12 radius-100 h-profile-feed">
                            <img
                                className="w-full h-full object-cover radius-100"
                                src={"https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/jobs/dos:lowongan_dicoding_dicoding_indonesia_020322123218.png"}
                            />
                        </div>
                        <div className="block w-9/12 sm:w-10/12  my-auto text-left mx-2">
                            <div className="gap-1 w-full justify-between flex">
                                <div className="block font-inter">
                                    <p className="font15-res-300" style={{ fontWeight: "500" }}>
                                        {/*{feed.user.name}*/}
                                        Dicoding
                                    </p>
                                        <div className="w-full py-0 text-left ">
                                            <p   className="font13-res-300 text-left w-full text-gray-700">
                                                Tempat Belajar koding terbaik
                                                {/*{feed.content.content}*/}
                                            </p>
                                        </div>


                                </div>
                                <div>
                                    <button onClick={handleDropdown} className="hover:bg-gray-100 bg-white cursor-pointer radius-full py-1 px-1.5 ">
                                        <div className="my-auto " style={{ height:"24px"}}>
                                            <img className="h-full" src="/assets/menu-icon-horizontal.svg" />
                                        </div>
                                    </button>
                                </div>
                                {/*<div className="my-auto mx-0"  style={{ height:"30px"}}>*/}
                                {/*    <img className="my-auto h-full" src="/assets/icon-dot.svg"/>*/}
                                {/*</div>*/}

                            </div>
                            {isDropdown ? null :(
                                <div
                                    id="dropdown_profile"
                                    className="z-10"

                                >
                                    <div className="bg-white bg-opacity-0 w-full h-full z-40 absolute right-0 bottom-10"
                                         onClick={handleDropdown}
                                    ></div>
                                    <div className="relative">
                                        <div className="absolute right-0  z-50 bottom-0 font14-res-300 bg-white divide-y divide-gray-100 rounded-lg shadow w-36 md:w-44 dark:bg-gray-700 dark:divide-gray-600">
                                            <div id="dropdown_profile" className={`z-10 ${isDropdown ? 'hidden' : ''} absolute right-10 top-0 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-36 dark:bg-gray-700 dark:divide-gray-600`}>
                                                <ul className="py-2 font13-res-300 text-left text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                                    <li>

                                                        <div  >

                                                            <button
                                                                // onClick={copyUrlClass}
                                                                className="block px-4 py-2  w-full  text-left hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-purple-600 dark:hover:text-white"

                                                            >
                                                                Laporkan
                                                            </button>
                                                        </div>
                                                    </li>
                                                    <li>

                                                        <div  >

                                                            <button
                                                                // onClick={copyUrlClass}
                                                                className="block px-4 py-2  w-full  text-left hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-purple-600 dark:hover:text-white"

                                                            >
                                                                Tidak tertarik
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
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>

                    {/*=======================*/}
                </div>
            </div>
        </>
    )
}