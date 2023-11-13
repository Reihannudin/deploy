import React, {useState} from "react";

export  const CommentFeedComponent = () => {

    const [isDropdownOpen , setIsDropdownOpen] = useState(true);

    const handleDropdownOpen = () => {
        setIsDropdownOpen((prevHidden) => !prevHidden);
    }

    return(
        <div>
            <div className="flex  gap-2">
                <div className="mx-2">
                    <div className="radius-100" style={{ height:"40px" , width:"40px"}}>
                        <img className="w-full h-full object-cover radius-100" src="https://pbs.twimg.com/profile_banners/1322964788180262912/1684231514/600x200"/>
                    </div>
                </div>
                <div className="w-full">
                    <div className="flex justify-between w-11/12 roboto gap-1">
                        <div className="text-left gap-2">
                            <p className={"font15-res-300"} style={{  fontWeight:"550" , color:"#575757"}}>@name</p>
                            <p className="my- font14-res-300" style={{  color:"#797979"}}>06. 13. 2023 13:43</p>
                        </div>
                        <div>
                            <button onClick={handleDropdownOpen} className="my-1" style={{ height:"20px"}}>
                                <img className="h-full" src="/assets/menu-icon.svg"/>
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
                    <div className="w-full text-left">
                        <p className="font14-res-300" style={{  color:"#595858"}}>
                            army see my post and if you know her please send my message to her
                        </p>
                    </div>
                    <div className=" w-11/12 mt-2 mb-0 pt-1 flex gap-6 text-left">
                        <div className="flex gap-1">
                            <button>
                                <div style={{ height:"20px"}}>
                                    <img className="h-full" src="/assets/like-icon.svg"/>
                                </div>
                            </button>
                            <p className="my-1 font13-res-300"  style={{  color:"#737373"}}>13</p>
                        </div>
                        <div className="flex gap-1">
                            <button>
                                <div style={{ height:"20px"}}>
                                    <img className="h-full" src="/assets/comment-icon.svg"/>
                                </div>
                            </button>
                            <p className="my-1  font13-res-300" style={{  color:"#737373"}}>6</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}