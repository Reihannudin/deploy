import React, {useEffect, useRef, useState} from "react";

export const ActionAbsentPhotoComponent = () => {
    //
    // const webcamRef = useRef(null);
    // const [photo, setPhoto] = useState(null);
    //
    // const handleCapture = () => {
    //     const photoSrc = webcamRef.current.getScreenshot();
    //     setPhoto(photoSrc);
    // };
    //
    // const handleRetake = () => {
    //     setPhoto(null);
    // };
    //
    // const [currentTime , setCurrentTime] = useState(new Date());
    //
    // useEffect(() => {
    //     const intervalId = setInterval(() => {
    //         setCurrentTime(new Date());
    //     } , 1000);
    //
    //     return () => {
    //         clearInterval(intervalId)
    //     }
    // }, []);
    //
    // const hours = currentTime.getHours();
    // const minutes = currentTime.getMinutes();
    // const seconds = currentTime.getSeconds();
    //
    // const [action , setAction] = useState('');
    //
    // const onChangeAction = (event) => {
    //     const action = event.target.value;
    //     setAction(action)
    // }
    //
    // const [reason , setReason] = useState('');
    //
    // const onChangeReason = (event) => {
    //     const reason = event.target.value;
    //     setReason(reason)
    // }
    return(
        <>
            <div className="w-full " style={{ minWidth:"385px"}}>
                {/*<div className="flex my-4 w-full">*/}
                {/*    <div className="xl:w-9/12 lg:w-10/12 md:10/12 w-full mx-auto">*/}
                {/*        <div className="flex items-start justify-end  pt-0 pb-3 px-4 border-b rounded-t dark:border-gray-600">*/}
                {/*            <button type="button"  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5  inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">*/}
                {/*                <div style={{ height:"26px"}}>*/}
                {/*                    <img className="h-full" src="/assets/arrow-back.svg" />*/}
                {/*                </div>*/}
                {/*            </button>*/}
                {/*            <h3 className="text-lg my-1 w-full font18-res-300 font-normal text-center text-gray-900 dark:text-white">*/}
                {/*                Absent your attendance With Photo*/}
                {/*            </h3>*/}
                {/*        </div>*/}
                {/*        <div className="my-3 ">*/}
                {/*            <div className="md:w-11/12 w-full  block md:flex md:justify-between text-left mx-auto" >*/}
                {/*                <div className="flex md:my-4 my-2 lg:w-full md:w-10/12 w-full mx-auto flex-col radius-100 items-center">*/}
                {/*                    {photo ? (*/}
                {/*                        <>*/}
                {/*                            <div className="relative md:w-full lg:shadow-none shadow box-content md:py-6 py-0 px-4 sm:px-0 border-radius-12 w-11/12  h-8/12  md:h-10/12 ">*/}
                {/*                                <div className="lg:flex block  gap-8">*/}
                {/*                                    <div className="w-full mt-6">*/}
                {/*                                        <div className="border-radius-8 w-full overflow-hidden border-1 border-gray-200">*/}
                {/*                                            <img src={photo} alt="Selfie"*/}
                {/*                                                 className="lg:w-full md:w-full md:mx-auto lg:mx-0 lg:h-ful md:h-96 h-full object-cover"*/}

                {/*                                            />*/}
                {/*                                        </div>*/}
                {/*                                    </div>*/}
                {/*                                    <div>*/}
                {/*                                        <div className=" w-full border lg:py-2 py-1 mt-6 mb-6 md:mb-0 px-5 border-radius-8 text-left">*/}
                {/*                                            <div className="my-2">*/}
                {/*                                                <label className="font16-res-300" style={{ color:"#777575"  }}>Action</label>*/}
                {/*                                                <div className="flex">*/}
                {/*                                                    <select*/}
                {/*                                                        id="action"*/}
                {/*                                                        name="action"*/}
                {/*                                                        className="w-full py-2 cursor-pointer form-select mb-1"*/}
                {/*                                                        aria-label="Default select example"*/}
                {/*                                                        value={action}*/}
                {/*                                                        onChange={onChangeAction}*/}
                {/*                                                    >*/}
                {/*                                                        <option disabled value="none">Pilih Option Absent</option>*/}
                {/*                                                        <option value="hadir" className="font16-res-300">Hadir</option>*/}
                {/*                                                        <option value="izin" className="font16-res-300">Izin</option>*/}
                {/*                                                    </select>*/}
                {/*                                                    <button>*/}
                {/*                                                        <i className="fa-solid fa-eye-slash" style={{ color:"#777575" }}></i>*/}
                {/*                                                    </button>*/}
                {/*                                                </div>*/}
                {/*                                            </div>*/}
                {/*                                            {action === "izin" ? (*/}
                {/*                                                <div className="my-6">*/}
                {/*                                                    <label style={{ color:"#777575" , fontSize:"14px"}}>Alasan</label>*/}
                {/*                                                    <div className="flex">*/}
                {/*                                                        <input id="reason" required value={reason} onChange={onChangeReason}   type="text" className="w-full py-2 border-b-gray-300" style={{ borderBottom:"1px solid #ebebeb"}} placeholder="your Reason"/>*/}
                {/*                                                        <button >*/}
                {/*                                                            <i className="fa-solid fa-eye-slash" style={{ color:"#777575"}}>*/}
                {/*                                                            </i>*/}
                {/*                                                        </button>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                            ) :(*/}
                {/*                                                <div></div>*/}
                {/*                                            )}*/}
                {/*                                        </div>*/}
                {/*                                        <div className="w-11/12  mx-auto lg:px-6 py-4 md:px-4  border-radius-8 lg:shadow lg:box-content h-full " style={{ maxHeight:"300px"}} >*/}
                {/*                                            <div className="h-full relative">*/}
                {/*                                                <div className="lg:mb-0 lg:mt-4  mt-0 mb-5 relative ">*/}
                {/*                                                    <h2 className="roboto my-2 font22-res-300" style={{ fontWeight:"500" , color:"#343434" }}>Absent Name</h2>*/}
                {/*                                                    <p className="my-2 font16-res-300" style={{  color:"#3e3e3e"}}>Bergegaslah untuk absent jangan sampai telambat!! melewati deadline, apabila terlambat anda akan dianggap alpha.</p>*/}

                {/*                                                    <div className="block ">*/}
                {/*                                                        <div className="flex lg:my-0 my-3 gap-2">*/}
                {/*                                                            <p style={{ fontSize:"15px" , color:"#545353" , fontWeight:"550"}} className=" roboto  my-0">Action :</p>*/}
                {/*                                                            <p style={{ fontSize:"15px" , color:"#727171" ,  fontWeight:"450"}} className=" my-0">{action}</p>*/}
                {/*                                                        </div>*/}
                {/*                                                        <div className="flex lg:my-0 my-3  gap-2">*/}
                {/*                                                            <p style={{ fontSize:"15px" , color:"#545353" , fontWeight:"550"}} className=" roboto  my-0">Reason :</p>*/}
                {/*                                                            <p style={{ fontSize:"15px" , color:"#727171" ,  fontWeight:"450"}} className=" my-0">{reason}</p>*/}
                {/*                                                        </div>*/}
                {/*                                                    </div>*/}
                {/*                                                    <div className="block ">*/}
                {/*                                                        <div className="flex lg:my-0 my-3 gap-2">*/}
                {/*                                                            <p style={{ fontSize:"15px" , color:"#545353" , fontWeight:"550"}} className=" roboto  my-0">Time :</p>*/}
                {/*                                                            <p style={{ fontSize:"15px" , color:"#727171" ,  fontWeight:"450"}} className=" my-0">{hours + ':' + minutes + ':' + seconds}</p>*/}
                {/*                                                        </div>*/}
                {/*                                                        <div className="flex lg:my-0 my-3 gap-2">*/}
                {/*                                                            <p style={{ fontSize:"15px" , color:"#545353" , fontWeight:"550"}} className=" roboto  my-0">Deadline :</p>*/}
                {/*                                                            <p style={{ fontSize:"15px" , color:"#727171" ,  fontWeight:"450"}} className=" my-0">07:00 - 10/06/2023</p>*/}
                {/*                                                        </div>*/}
                {/*                                                    </div>*/}

                {/*                                                    <div className="block ">*/}

                {/*                                                        /!*<div className="flex my-0 gap-2">*!/*/}
                {/*                                                        /!*    <p style={{ fontSize:"15px" , color:"#545353" , fontWeight:"550"}} className=" roboto  my-0">Lat &lan :</p>*!/*/}
                {/*                                                        /!*    <p style={{ fontSize:"15px" , color:"#727171" ,  fontWeight:"450"}} className=" my-0">{latitude + 'm' + longitude}</p>*!/*/}
                {/*                                                        /!*</div>*!/*/}
                {/*                                                        /!*<div className="flex my-0 gap-2">*!/*/}
                {/*                                                        /!*    <p style={{ fontSize:"15px" , color:"#545353" , fontWeight:"550"}} className=" roboto  my-0">Address</p>*!/*/}
                {/*                                                        /!*    <p style={{ fontSize:"15px" , color:"#727171" ,  fontWeight:"450"}} className=" my-0">{address}</p>*!/*/}
                {/*                                                        /!*</div>*!/*/}

                {/*                                                    </div>*/}

                {/*                                                </div>*/}
                {/*                                                <div className="w-full lg:py-5 lg:my-0 mt-2 py-0 lg:bottom-0" >*/}
                {/*                                                    <div className="flex gap-4 justify-between">*/}
                {/*                                                        <button*/}
                {/*                                                            onClick={handleRetake}*/}
                {/*                                                            className=" w-10/12 mx-auto   border-b-purple-600 text-purple-600  font-bold py-2 px-4 rounded"*/}
                {/*                                                            style={{  borderRadius:"4px" , fontSize:"15px" , border:"1px solid #A373E9" }}*/}
                {/*                                                        >*/}
                {/*                                                            Ambil ulang*/}
                {/*                                                        </button>*/}
                {/*                                                        <button*/}
                {/*                                                            className="w-10/12  mx-auto   weverse-background-btn  hover:bg-purple-500 text-white font-bold py-2 px-4 rounded"*/}
                {/*                                                            style={{ color:"#ffffff" , borderRadius:"4px" , fontSize:"15px" , border:"1px solid #A373E9" }}*/}
                {/*                                                        >*/}
                {/*                                                            Kirimkan*/}
                {/*                                                        </button>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                            </div>*/}
                {/*                                        </div>*/}
                {/*                                    </div>*/}
                {/*                                </div>*/}
                {/*                            </div>*/}
                {/*                        </>*/}
                {/*                    ) : (*/}
                {/*                        <>*/}
                {/*                            <div className="relative lg:w-full md:w-10/12 lg:shadow-none sm:shadow box-content py-6 px-4 sm:px-0 border-radius-12 w-10/12 h-8/12  md:h-10/12 ">*/}
                {/*                                <div className="lg:flex block w-full gap-8">*/}
                {/*                                    <div className="w-full mt-6">*/}
                {/*                                        <div className="border-radius-8 w-full overflow-hidden border-1 border-gray-200">*/}
                {/*                                            <Webcam*/}
                {/*                                                audio={false}*/}
                {/*                                                mirrored={true} // Using mirror view for selfie*/}
                {/*                                                ref={webcamRef}*/}
                {/*                                                screenshotFormat="image/jpeg"*/}
                {/*                                                className="lg:w-full md:w-full md:mx-auto lg:mx-0 lg:h-ful md:h-96 h-full object-cover"*/}
                {/*                                            />*/}
                {/*                                        </div>*/}
                {/*                                    </div>*/}
                {/*                                    <div>*/}
                {/*                                        <div className=" w-full border lg:py-2 py-1 mt-6 mb-6 md:mb-0 px-5 border-radius-8 text-left">*/}
                {/*                                            <div className="my-2">*/}
                {/*                                                <label className="font16-res-300" style={{ color:"#777575"  }}>Action</label>*/}
                {/*                                                <div className="flex">*/}
                {/*                                                    <select*/}
                {/*                                                        id="action"*/}
                {/*                                                        name="action"*/}
                {/*                                                        className="w-full py-2 cursor-pointer form-select mb-1"*/}
                {/*                                                        aria-label="Default select example"*/}
                {/*                                                        value={action}*/}
                {/*                                                        onChange={onChangeAction}*/}
                {/*                                                    >*/}
                {/*                                                        <option disabled value="none">Pilih Option Absent</option>*/}
                {/*                                                        <option value="hadir" className="font16-res-300">Hadir</option>*/}
                {/*                                                        <option value="izin" className="font16-res-300">Izin</option>*/}
                {/*                                                    </select>*/}
                {/*                                                    <button>*/}
                {/*                                                        <i className="fa-solid fa-eye-slash" style={{ color:"#777575" }}></i>*/}
                {/*                                                    </button>*/}
                {/*                                                </div>*/}
                {/*                                            </div>*/}
                {/*                                            {action === "izin" ? (*/}
                {/*                                                <div className="my-6">*/}
                {/*                                                    <label style={{ color:"#777575" , fontSize:"14px"}}>Alasan</label>*/}
                {/*                                                    <div className="flex">*/}
                {/*                                                        <input id="reason" required value={reason} onChange={onChangeReason}   type="text" className="w-full py-2 border-b-gray-300" style={{ borderBottom:"1px solid #ebebeb"}} placeholder="your Reason"/>*/}
                {/*                                                        <button >*/}
                {/*                                                            <i className="fa-solid fa-eye-slash" style={{ color:"#777575"}}>*/}
                {/*                                                            </i>*/}
                {/*                                                        </button>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                            ) :(*/}
                {/*                                                <div></div>*/}
                {/*                                            )}*/}
                {/*                                        </div>*/}
                {/*                                        <div className="w-11/12  mx-auto lg:px-6 py-4 md:px-4  border-radius-8 lg:shadow lg:box-content h-full " style={{ maxHeight:"300px"}} >*/}
                {/*                                            <div className="h-full relative">*/}
                {/*                                                <div className="lg:mb-0 lg:mt-4  mt-0 mb-5 relative ">*/}
                {/*                                                    <h2 className="roboto my-2 font22-res-300" style={{ fontWeight:"500" , color:"#343434" }}>Absent Name</h2>*/}
                {/*                                                    <p className="my-2 font16-res-300" style={{  color:"#3e3e3e"}}>Bergegaslah untuk absent jangan sampai telambat!! melewati deadline, apabila terlambat anda akan dianggap alpha.</p>*/}

                {/*                                                    <div className="block ">*/}
                {/*                                                        <div className="flex lg:my-0 my-3 gap-2">*/}
                {/*                                                            <p style={{ fontSize:"15px" , color:"#545353" , fontWeight:"550"}} className=" roboto  my-0">Action :</p>*/}
                {/*                                                            <p style={{ fontSize:"15px" , color:"#727171" ,  fontWeight:"450"}} className=" my-0">{action}</p>*/}
                {/*                                                        </div>*/}
                {/*                                                        <div className="flex lg:my-0 my-3  gap-2">*/}
                {/*                                                            <p style={{ fontSize:"15px" , color:"#545353" , fontWeight:"550"}} className=" roboto  my-0">Reason :</p>*/}
                {/*                                                            <p style={{ fontSize:"15px" , color:"#727171" ,  fontWeight:"450"}} className=" my-0">{reason}</p>*/}
                {/*                                                        </div>*/}
                {/*                                                    </div>*/}
                {/*                                                    <div className="block ">*/}
                {/*                                                        <div className="flex lg:my-0 my-3 gap-2">*/}
                {/*                                                            <p style={{ fontSize:"15px" , color:"#545353" , fontWeight:"550"}} className=" roboto  my-0">Time :</p>*/}
                {/*                                                            <p style={{ fontSize:"15px" , color:"#727171" ,  fontWeight:"450"}} className=" my-0">{hours + ':' + minutes + ':' + seconds}</p>*/}
                {/*                                                        </div>*/}
                {/*                                                        <div className="flex lg:my-0 my-3 gap-2">*/}
                {/*                                                            <p style={{ fontSize:"15px" , color:"#545353" , fontWeight:"550"}} className=" roboto  my-0">Deadline :</p>*/}
                {/*                                                            <p style={{ fontSize:"15px" , color:"#727171" ,  fontWeight:"450"}} className=" my-0">07:00 - 10/06/2023</p>*/}
                {/*                                                        </div>*/}
                {/*                                                    </div>*/}

                {/*                                                    <div className="block ">*/}

                {/*                                                        /!*<div className="flex my-0 gap-2">*!/*/}
                {/*                                                        /!*    <p style={{ fontSize:"15px" , color:"#545353" , fontWeight:"550"}} className=" roboto  my-0">Lat &lan :</p>*!/*/}
                {/*                                                        /!*    <p style={{ fontSize:"15px" , color:"#727171" ,  fontWeight:"450"}} className=" my-0">{latitude + 'm' + longitude}</p>*!/*/}
                {/*                                                        /!*</div>*!/*/}
                {/*                                                        /!*<div className="flex my-0 gap-2">*!/*/}
                {/*                                                        /!*    <p style={{ fontSize:"15px" , color:"#545353" , fontWeight:"550"}} className=" roboto  my-0">Address</p>*!/*/}
                {/*                                                        /!*    <p style={{ fontSize:"15px" , color:"#727171" ,  fontWeight:"450"}} className=" my-0">{address}</p>*!/*/}
                {/*                                                        /!*</div>*!/*/}

                {/*                                                    </div>*/}

                {/*                                                </div>*/}

                {/*                                                <div className="w-full lg:py-5 lg:my-0 mt-2 py-0 lg:bottom-0" >*/}
                {/*                                                    <button*/}
                {/*                                                        onClick={handleCapture}*/}
                {/*                                                        className=" w-full mx-auto   weverse-background-btn  hover:bg-purple-500 text-white font-bold py-2 px-4 rounded"*/}
                {/*                                                        style={{ color:"#ffffff" , borderRadius:"4px" , fontSize:"15px" , border:"1px solid #A373E9" }}*/}
                {/*                                                    >*/}
                {/*                                                        Take Selfie*/}
                {/*                                                    </button>*/}
                {/*                                                </div>*/}
                {/*                                            </div>*/}
                {/*                                        </div>*/}
                {/*                                    </div>*/}
                {/*                                </div>*/}
                {/*                            </div>*/}
                {/*                        </>*/}
                {/*                    )}*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}


                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </>
    )
}
