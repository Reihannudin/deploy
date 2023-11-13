import React from "react";

export const FeedFormCardComponent = () => {
    return(
        <>
            <div className="bg-white md:pt-3 pt-2 pb-1.5 border-radius-8 border-b cursor-pointer border-gray-100">
                <div className="w-full">
                    <div className="block">
                        <div className={"flex  mx-2"}>
                            <div className="radius-100  h-profile-feed">
                                <img
                                    className="w-full h-full object-cover radius-100"
                                    src={"/assets/profile.jpg"}
                                />
                            </div>
                            <div className="flex w-11/12 mx-auto justify-between">
                                <div className="text-left">
                                    <div>
                                        <h2 className="font15-res-300 text-gray-800" style={{ fontWeight:"550"}}>Judul Pertanyaan</h2>
                                    </div>
                                    <div className="gap-0 flex">
                                        <p className="font13-res-300" style={{color:"#797979"}}>viv1babo</p>
                                        <div className="my-auto mx-0" >
                                            <img className="my-auto" src="/assets/icon-dot.svg"/>
                                        </div>
                                        <p className="font13-res-300" style={{color:"#797979"}}>33 menit lalu</p>
                                    </div>
                                </div>
                                <div className=" " style={{}}>
                                    <p className="font13-res-300 py-0.5 px-2 bg-gray-100"  style={{color:"#797979" , borderRadius:"2px" }}>Matematika</p>
                                </div>

                            </div>
                        </div>

                        <div className="block text-left">
                            <div className="my-2">
                                <p className="font15-res-300 text-gray-600">
                                    Bagaimana seekor kucing bisa bergerak?, menggunakan apa dia bergerak?
                                </p>
                            </div>
                        </div>
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

                            <div className="my-1.5 h-icon-menu" >
                                <img className="h-full" src="/assets/menu-icon.svg"/>
                            </div>
                        </div>

                    </div>
                    {/*<div className="flex  gap-2">*/}
                    {/*    <div className="mx-2">*/}
                    {/*        <div className="radius-100" style={{ height:"40px" , width:"40px"}}>*/}
                    {/*            <img className="w-full h-full object-cover radius-100" src="https://pbs.twimg.com/profile_banners/1322964788180262912/1684231514/600x200"/>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className="w-full">*/}
                    {/*        <div className="flex justify-between w-11/12 roboto gap-1">*/}
                    {/*            <div className="flex">*/}
                    {/*                <div className="gap-2 flex">*/}
                    {/*                    <p style={{ fontSize:"15px " , fontWeight:"550"}}>Nama</p>*/}
                    {/*                    <p style={{ fontSize:"15px" , color:"#797979"}}>@username</p>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <div className=" w-11/12 flex text-left">*/}
                    {/*            <p style={{ fontSize:"15px"  , color:"#484545"}}><b>Membalas Komentar Anda :</b> I saw a deer eating a snake for the first time. Don't deer feed on grass?</p>*/}
                    {/*        </div>*/}
                    {/*        <div className="mb-2 mt-2 text-left">*/}
                    {/*            <p style={{ fontSize:"13px" , color:"#797979"}}>07:00 ~ 13. 06. 2023</p>*/}
                    {/*        </div>*/}

                    {/*    </div>*/}
                    {/*    <div className="my-2">*/}
                    {/*        <div className="my-auto" style={{ height:"70px" , width:"50px"}}>*/}
                    {/*            <img className="w-full h-full object-cover" src="https://pbs.twimg.com/media/Fyfiy9-aQAMmaon?format=jpg&name=small"/>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </div>
        </>
    )
}