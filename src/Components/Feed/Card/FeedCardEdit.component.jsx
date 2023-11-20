import React, {useEffect, useState} from "react";


export const  FeedCardEditComponent = ({idData , userData , contentData , likesData , commentsData , repostData , statusData , timeData, repostChainData  ,handleClosePopUpEdit , openPopUpEdit}) => {

    const [repostFeedId, setRepostFeedI] = useState(2);
    const [errorFeed, setErrorFeed] = useState('');
    const [handleFullScreen  , setHandleFullScreen] = useState(false);

    const [content, setContent] = useState('');
    useEffect(() => {
        setContent(contentData.content);
    } , [contentData.content])
    const onChangeContent = (event) => {
        const value = event.target.value;
        setContent(value);
    };


    const [image, setImage] = useState('');

    useEffect(() => {
        setImage(contentData.image || ''); // Ensure that contentData.image is not undefined
    }, [contentData.image]);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setImage(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const [isArchive, setIsArchive] = useState(false);
    useEffect(() => {
        setIsArchive(contentData.is_arcive);
    } , [contentData.is_arcive])
    const onChangeIsArchive = (event) => {
        const value = event.target.value;
        setIsArchive(value);
    };

    console.log(image)



    const toggleDropdownFullScreen = () => {
        setHandleFullScreen((prevHidden) => !prevHidden)
    }

    const handleToggle = () => {
        setIsArchive(!isArchive);
    };

    return(
        <>

            <div className=" overflow-y-auto scrollbar-hide lg:w-7/12  xl:w-6/12 md:w-9/12 w-11/12 mx-auto  my-auto py-4 z-50 " >
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
                                    <h2 className="font16-res-400 " style={{ fontWeight:"500"}}>Edit Postingan</h2>
                                </div>
                                <div>
                                    <button onClick={handleClosePopUpEdit} className="bg-white my-auto ">
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
                 onChange={onChangeContent}
                 value={content}
             ></textarea>
                            </div>
                            {errorFeed === '' ? (
                                <div className="my-2">
                                </div>
                            ): (
                                <div className="my-2 text-left">
                                    <span className={"text-red-600 font14-res-300 "}>{errorFeed}</span>
                                </div>
                            )}
                        </div>

                        <div className={"w-full block md:flex"}>

                            <div className="w-full">
                                <div className="mt-4 text-left w-full mx-auto">
                                    <p className="font14-res-300 text-gray-600">Posting Gambar</p>
                                </div>
                                <div className="border-b block ">
                                    {image ? (
                                        <div className="relative overflow-y-auto" style={{ height: "200px" }}>
                                            <img
                                                src={image.startsWith("http") ? image : `http://127.0.0.1:8000/storage/${image}`}
                                                alt=""
                                                className="w-full h-full my-4 mx-auto border-radius-20"
                                                style={{ objectFit: "cover" }}
                                            />
                                            <button
                                                onClick={toggleDropdownFullScreen}
                                                className="mx-auto absolute z-50 top-0 bottom-0 left-0 right-0 my-auto"
                                                style={{ width: "28", height: "28" }}
                                            >
                                                <img className="mx-auto my-auto" src={"/assets/icon-fullscreen-purple.svg"} style={{ width: "28px", height: "28px" }} />
                                            </button>
                                            <div
                                                className="border-t flex py-3 items-center text-left px-3 hover:bg-red-50 cursor-pointer"
                                                onClick={(e) => setImage('')}
                                            >
                                                <h6 className="text-xs text-red-600">Hapus Gambar</h6>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="flex py-3 items-center text-left px-3 hover:bg-gray-50">
                                            <div className="mr-2">
                                                <img className="h-7" src="/assets/image-icon.svg" />
                                            </div>
                                            <h6 className="text-xs text-gray-600">Tambahkan Gambar</h6>
                                            <input
                                                type="file"
                                                onChange={(e) => handleImageChange(e)}
                                                accept="image/png, image/jpeg"
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

                        <form >
                            <div className="border-t font15-res-300  mt-3 w-full px-0 py-3 left-0">
                                <button className="bg-purple-600 hover:bg-purple-700 text-white w-full rounded py-2">
                                    Update Posting
                                </button>
                            </div>

                        </form>
                    </div>


                </div>
            </div>
        </>
    )
}


