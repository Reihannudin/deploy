import React, {useState} from "react";
import CustomAlert from "../../Helper/CustomAlert.Component";
import {OutAlertComponent} from "../../Helper/OutAlert.Component";
import {Link} from "react-router-dom";

export const FeedCardComponent = ({handleOpenFeed }) => {


  const [isDropdown , setIsDropdown ] = useState(true);

  const handleDropdown = () => {
    setIsDropdown((prevHidden) => !prevHidden);
  }

  return (
    <>
      <div className="bg-white pt-3  pb-1 px-0  border-radius-4  border-b border-gray-100">
        <div>
          <div className="flex mx-2 ">
            <div className="radius-100 h-profile-feed">
              <img
                  className="w-full h-full object-cover radius-100"
                  src={"/assets/profile.jpg"}
              />
            </div>
            <div className="block w-10/12  my-auto text-left mx-2">
              <div className="gap-1 w-full justify-between flex">
                <div>
                  <p className="font15-res-300" style={{ fontWeight: "550" }}>
                    {/*{feed.user.name}*/}
                    reihannudin
                  </p>
                </div>
                <div>
                  <p className="font14-res-300" style={{ color: "#797979" }}>
                    {/*@{feed.user.username}*/}
                    2 jam yang lalu

                  </p>
                </div>
                {/*<div className="my-auto mx-0"  style={{ height:"30px"}}>*/}
                {/*    <img className="my-auto h-full" src="/assets/icon-dot.svg"/>*/}
                {/*</div>*/}
              </div>
              <p className="font14-res-300" style={{ color: "#797979" }}>
                {/*{feed.time}*/}
                reireirei

              </p>
            </div>
          </div>
          <button className={"w-full text-left"}  onClick={handleOpenFeed }>
            <div className="w-full py-2 text-left px-2">
              <p className="font15-res-300 text-left w-full text-gray-700">
                Weyyy anjirr, ini gue cuyy
                {/*{feed.content.content}*/}
              </p>
            </div>
          </button>
          {/*=======================*/}
          <div className="flex  mx-2">
            <div className="w-full">
              <div className=" w-full mt-0 justify-between mb-0 pt-1 flex gap-6 text-left">
                <div className="flex gap-7 w-full">
                  <div className="flex mt-1 gap-1">
                      <button>
                        <div className="" style={{ height:"28px"}}>
                          <img
                              className="h-full hover:bg-gray-50 cursor-pointer radius-full py-1 px-1"
                              src="/assets/comment-icon.svg"
                          />
                        </div>
                      </button>
                    <p
                      className="my-auto font16-res-300"
                      style={{ color: "#737373" }}
                    >
                      6
                      {/*{feed.comments.length}*/}
                    </p>
                  </div>
                  <div className="flex mt-1.5 gap-1">
                    <button>
                      <div className="" style={{ height:"28px"}}>
                        <img
                          className="h-full hover:bg-gray-50 cursor-pointer radius-full py-1 px-1"
                          src="/assets/retweet-icon-gray.svg" />
                      </div>
                    </button>
                    <p
                      className="my-auto font16-res-300"
                      style={{ color: "#737373" }}
                    >
                      4
                      {/*{feed.likes.length}*/}
                    </p>
                  </div>
                  <div className="flex mt-1.5 gap-1">
                    <button>
                      <div className="" style={{ height:"28px"}}>
                        <img
                            className="h-full hover:bg-gray-50 cursor-pointer radius-full py-1 px-1"
                            src="/assets/like-icon.svg" />
                      </div>
                    </button>
                    <p
                        className="my-auto font16-res-300"
                        style={{ color: "#737373" }}
                    >
                      34
                      {/*{feed.likes.length}*/}
                    </p>
                  </div>

                </div>
                <button onClick={handleDropdown} className="hover:bg-gray-100 bg-white cursor-pointer radius-full py-1 px-1.5 ">
                  <div className="my-auto " style={{ height:"24px"}}>
                    <img className="h-full" src="/assets/menu-icon.svg" />
                  </div>
                </button>
              </div>
            </div>
            {isDropdown ? null :(
                <div
                    id="dropdown_profile"
                    className="z-10"

                >
                  <div className="bg-white bg-opacity-0 w-full h-full z-40 absolute right-0 bottom-0"
                       onClick={handleDropdown}
                  ></div>
                  <div className="relative">
                    <div className="absolute right-0  z-50 bottom-10 font14-res-300 bg-white divide-y divide-gray-100 rounded-lg shadow w-36 md:w-44 dark:bg-gray-700 dark:divide-gray-600">
                      <div id="dropdown_profile" className={`z-10 ${isDropdown ? 'hidden' : ''} absolute right-10 top-0 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-36 dark:bg-gray-700 dark:divide-gray-600`}>
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
      </div>
    </>
  );
};
