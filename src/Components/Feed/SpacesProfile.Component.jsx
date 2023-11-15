import FeedDetail from "../../Pages/Feed/FeedDetail";
import {MainNavSchoolComponent} from "../Body/MainNav/MainNavSchool.Component";
import {FeedMiniBarComponent} from "./FeedMiniBar.Component";
import {FeedCardComponent} from "./Card/FeedCard.Component";
import {FeedSpacesComponent} from "./FeedSpaces.Component";
import {useNavigate} from "react-router-dom";
import React, {useState} from "react";

export const SpacesProfileComponent =  ({storeFeed, setContent, isArchive, setIsArchive, isLoading}) => {


    const navigate = useNavigate();
    const [openPopUpCreate  , setOpenPopUpCreate] = useState(false);
    const [imagePreview, setImagePreview] = useState("");
    const [handleFullScreen  , setHandleFullScreen] = useState(false);


    const id = 3;
    const [openFeed, setOpenFeed] = useState(false);

    const handleOpenFeed = () => {
        setOpenFeed(true);

        navigate(`/feed/d/${id}`);
    };

    const handleCloseFeed = () => {
        setOpenFeed(false);
        navigate(`/feed`);
    };

    console.log("open feed in main : " , openFeed);




    const handlePopUpCreate  = () => {
        setOpenPopUpCreate((prevHidden) => !prevHidden);
        setImagePreview('');
    }

    const toggleDropdownFullScreen = () => {
        setHandleFullScreen((prevHidden) => !prevHidden)
    }

    const handleFullScreenItemClick = () => {
        setHandleFullScreen(false);
    };

    const handleToggle = () => {
        setIsArchive(!isArchive);
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = (e) => {
                setImagePreview(e.target.result);
            };

            reader.readAsDataURL(file);
        }
    };




    return(
        <>
            {openPopUpCreate && (
                <div id="drop-action" className="flex fixed items-center justify-center w-full z-50 min-h-screen">
                    {/* This div serves as a backdrop and should cover the entire screen */}
                    <div onClick={handlePopUpCreate} className="bg-gray-500 bg-opacity-40  w-full h-full z-40 absolute"></div>

                    {/* Centered dropdown content */}
                    <div className=" overflow-y-auto scrollbar-hide lg:w-7/12  xl:w-6/12 md:w-9/12 w-11/12 mx-auto absolute right-0 my-auto left-0 top-0 bottom-0 py-4 z-50 " >
                        <div className="bg-white lg:my-16 my-28 px-4 pb-2 relative border-radius-8">



                            {/*{handleFullScreen && (*/}
                            {/*    <div id="drop-action" className="flex items-center justify-center w-full fixed h-full z-50  min-h-screen">*/}
                            {/*      /!* This div serves as a backdrop and should cover the entire screen *!/*/}
                            {/*      <div onClick={handleFullScreenItemClick} className="bg-gray-400 bg-opacity-40 w-full h-full z-40 absolute bottom-2"></div>*/}

                            {/*      /!* Centered dropdown content *!/*/}
                            {/*      <div className="relative  w-10/12 my-auto mx-auto py-4 z-50 border-radius-8 top-0 bottom-0 left-0 right-0">*/}
                            {/*        <div className="my-auto">*/}
                            {/*          <div className="relative my-auto" >*/}
                            {/*            <img src={imagePreview} alt="" className=" my-auto" style={{ objectFit: "cover" }} />*/}

                            {/*          </div>*/}
                            {/*        </div>*/}
                            {/*      </div>*/}
                            {/*    </div>*/}
                            {/*)}*/}

                            <div className={"sm:w-11/12  lg:w-11/12 xl:w-11/12 w-full mx-auto"}>
                                <div className=" pt-5 pb-1 border-b border-gray-200">
                                    <div className="flex justify-between">
                                        <div className="text-center">
                                            <h2 className="font16-res-400 " style={{ fontWeight:"500"}}>Buat Postingan</h2>
                                        </div>
                                        <div>
                                            <button onClick={handlePopUpCreate} className="bg-white my-auto ">
                                                <img src={"/assets/close-icon.svg"} style={{ width:"28px" ,  height:"24px"}}/>
                                            </button>
                                        </div>
                                    </div>

                                </div>
                                <div className="block">
                                    <div className="mt-3 text-left w-full mx-auto">
                                        <p className="font14-res-300 text-gray-600">Postingan</p>
                                    </div>
                                    <div>
             <textarea
                 className="w-full px-0 pt-2 pb-0 font16-res-400 outline-none border-b -mb-2"
                 rows={4}
                 placeholder="Tulis postingan"
                 onKeyUp={e => setContent(e.target.value)}
             ></textarea>
                                    </div>
                                </div>

                                <div className={"w-full block md:flex"}>

                                    <div className="w-full">
                                        <div className="mt-4 text-left w-full mx-auto">
                                            <p className="font14-res-300 text-gray-600">Posting Gambar</p>
                                        </div>
                                        <div className="border-b block ">

                                            {imagePreview ?  (
                                                <div className="block">
                                                    <div className="relative overflow-y-auto" style={{ height:"200px"}}>
                                                        <img src={imagePreview} alt="" className="w-full h-full my-4 mx-auto border-radius-20 " style={{ objectFit: "cover" }} />
                                                        <button onClick={toggleDropdownFullScreen} className="mx-auto absolute z-50 top-0 bottom-0 left-0 right-0 my-auto" style={{ width:"28" , height:"28"}}>
                                                            <img className="mx-auto my-auto" src={"/assets/icon-fullscreen-purple.svg"} style={{ width:"28px" , height:"28px"}}/>
                                                        </button>
                                                    </div>
                                                    <div
                                                        className="border-t flex py-3 items-center text-left px-3 hover:bg-red-50 cursor-pointer"
                                                        onClick={(e) => setImagePreview(null)}
                                                    >
                                                        <h6 className="text-xs text-red-600">Hapus Gambar</h6>
                                                    </div>
                                                </div>
                                            ): (
                                                <div className="flex py-3 items-center text-left px-3 hover:bg-gray-50">
                                                    <div className="mr-2">
                                                        <img className="h-7" src="/assets/image-icon.svg" />
                                                    </div>
                                                    <h6 className="text-xs text-gray-600">Tambahkan Gambar</h6>
                                                    <input
                                                        type="file"
                                                        onChange={(e) => handleImageChange(e)}
                                                        itemType="png.jpg,jpeg"
                                                        className="absolute w-full left-0 opacity-0 cursor-pointer"
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h5 className="text-left font14-res-300 mt-4">Pengaturan Feed</h5>
                                    <div className="flex justify-between font14-res-300 pt-3 pb-2 items-center">
                                        <p className="font15-res-300">Simpan di arsip</p>
                                        <label className="switch">
                                            <input type="checkbox" className="" checked={isArchive} onChange={handleToggle} />
                                            <span className="slider"></span>
                                        </label>
                                    </div>

                                </div>

                                <div className="border-t font15-res-300  mt-3 w-full px-0 py-3 left-0">
                                    <button className="bg-purple-600 hover:bg-purple-700 text-white w-full rounded py-2" disabled={isLoading} onClick={e => storeFeed()}>
                                        {isLoading ? "Memposting..." : "Posting"}
                                    </button>
                                </div>

                            </div>


                        </div>
                    </div>
                </div>
            )}
            {openFeed === false ? null : (
                <FeedDetail  handleCloseFeed={handleCloseFeed} openFeed={openFeed}/>
            )}
            {/*<Link to={'/feed/write'}>*/}
            {/*  <div className="py-3  px-4 hover:bg-gray-100 font14-res-300">*/}
            {/*    <div className="mx-auto" style={{height:"24px"}}>*/}
            {/*      <img className="w-full h-full mx-auto" src={"/assets/icon-write-purple.svg"}/>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*</Link>*/}
            {/*<Link to={'/feed/write'}>*/}
            {/*  <div className="py-3 px-4  hover:bg-gray-100 font14-res-300">*/}
            {/*    <div className="mx-auto" style={{height:"24px"}}>*/}
            {/*      <img className="w-full h-full mx-auto" src={"/assets/add_photo_purple_icon.svg"}/>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*</Link>*/}

            <div
                className="h-full w-11/12  mx-auto md:pt-16 pt-16 px-0"
                style={{ minWidth: "300px" }}
            >
                <div className="block w-full md:hidden">
                    <MainNavSchoolComponent  />
                </div>
                <div className="xl:w-11/12  relativelg:w-full md:w-full w-full mx-auto">
                    <div className="flex justify-between my-4 md:my-6 w-full">
                        <div className="sm:w-1/12 w-2/12 relative">
                            <div className="    fixed w-3-3   lg:mx-3 xl:mx-4   top-auto   ">
                                {/*<FeedBarComponent />*/}
                                <FeedMiniBarComponent />
                            </div>

                        </div>

                        <div className="lg:w-7/12 md:w-7/12 w-10/12 md:mx-auto">
                          <div className={"w-full"}>
                              <div className={""}>
                                  <div className={"w-full"}>
                                      <div className=" h-60 mb-3 " style={{ width:"100%"}}>
                                          <img className="w-full object-cover h-full border-radius-8"
                                               src={'/assets/bg-absence.svg'}
                                              // src="https://i.pinimg.com/1200x/4e/0b/1e/4e0b1ef35a5eeaec6931d095cf5a4fab.jpg"
                                          />
                                      </div>
                                  </div>
                                  <div className={"w-full mx-auto"}>
                                      <div className={"w-full pb-4 border-b border-gray-300 mx-auto "}>
                                          <div className={"w-11/12 mx-auto justify-between block lg:flex"}>
                                              <div className={"my-3 text-left"}>
                                                  <div className={"w-full"}>
                                                      <h1 className={"font18-res-300"}>Nama Space</h1>
                                                  </div>
                                              </div>
                                              <div className={"flex gap-4 font14-res-300"}>
                                                  <div className={"w-full"}>
                                                      <button className={"px-2 py-1.5  font13-res-300 bg-purple-600 hover:bg-purple-700 cursor-pointer text-white border-radius-4"}>
                                                          Bergabung
                                                      </button>
                                                  </div>
                                                  <div className={"w-full"}>
                                                      <button className={"px-2 py-1.5  font13-res-300 bg-purple-600 hover:bg-purple-700 cursor-pointer text-white border-radius-4"}>
                                                      Bagikan
                                                      </button>
                                                  </div>
                                                  <div className={"w-full"}>

                                                      <button className={"hover:bg-gray-100 p-1 cursor-pointer radius-full"}>
                                                          <div className={"mx-auto"} style={{ width:"24px"}}>
                                                              <img className={"w-full mx-auto"} src={"/assets/menu-icon-horizontal.svg"}/>
                                                          </div>
                                                      </button>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                     <div>
                                         <div className={"w-11/12  mx-auto text-left"}>
                                             <div className={"mt-4 mb-1"}>
                                                 <h1 className={"font16-res-300"}>Tentang</h1>
                                             </div>
                                             <div className={"font-inter"}>
                                                 <div className={"w-full"}>
                                                     <p className={"font13-res-300"}>wertyuioertyui</p>
                                                 </div>
                                             </div>
                                         </div>
                                         <div className={"flex w-11/12 mx-auto justify-between"}>
                                             <div className={"w-11/12  mx-auto text-left"}>
                                                 <div className={"mt-4 mb-1"}>
                                                     <h1 className={"font16-res-300"}>Category</h1>
                                                 </div>
                                                 <div className={"font-inter"}>
                                                     <div className={"w-full"}>
                                                         <p className={"font13-res-300"}>Website</p>
                                                     </div>
                                                 </div>
                                             </div>
                                             <div className={"w-11/12  mx-auto text-left"}>
                                                 <div className={"mt-4 mb-1"}>
                                                     <h1 className={"font16-res-300"}>Anggota</h1>
                                                 </div>
                                                 <div className={"font-inter"}>
                                                     <div className={"w-full"}>
                                                         <p className={"font13-res-300"}>100+ orang</p>
                                                     </div>
                                                 </div>
                                             </div>

                                         </div>
                                     </div>
                                  </div>
                              </div>
                          </div>
                        </div>

                        <div className="lg:w-4/12 md:w-5/12 relative">
                            <div className="fixed   xl:w-3/12 lg:w-4/12 sm:w-2/12 w-2/12  md:w-5/12 left-auto  top-auto  ">
                                {/*<FeedBarComponent />*/}
                                <FeedSpacesComponent />
                            </div>
                        </div>

                        {/*<div className="lg:w-4/12 md:w-4/12 relative">*/}
                        {/*  <div className="fixed   xl:w-3/12 lg:w-4/12 sm:w-2/12 w-2/12  md:w-4/12 left-auto  top-auto  ">*/}
                        {/*    <FeedBarComponent />*/}
                        {/*  </div>*/}
                        {/*</div>*/}
                    </div>
                    {/*<div className="fixed  right-10  bottom-24 z-50  flex justify-center items-center">*/}
                    {/*  <div className="bg-white border-b border-l border-r z-50  border-gray-300 rounded-full">*/}
                    {/*    <button onClick={toggleDropAction} style={{ transform: dropAction ? 'rotate(40deg)' : 'none' ,    transition: 'transform 0.3s ease-in-out' }}  className="bg-purple-600 p-3 rounded-full">*/}
                    {/*      <img className="h-icon-add" src="/assets/add-icon-white.svg" alt="Add Icon" />*/}
                    {/*    </button>*/}
                    {/*  </div>*/}
                    {/*</div>*/}
                </div>
            </div>
        </>

    )
}