import React from "react";

export const FeedRepliedNotificationComponent = () => {
    return(
        <>
                <div className="bg-white pt-3 pb-1.5 border-radius-8 border-b cursor-pointer border-gray-100">
                    <div className="w-full">
                        <div className="block">
                            <div className="flex">
                                <div className="radius-100 h-profile-feed" >
                                    <img className="w-full h-full object-cover radius-100" src="https://phinf.wevpstatic.net/MjAyMjA2MTZfMTgg/MDAxNjU1MzU5MzI5MDI1.CPT4KScalDFCEzSOJ-NowH7WMo950Ye3LBNixzyj2rUg.HYBeomV6AVjjVUDn_GEPHrKJSS8X7Z-N-Nr9ZBjgurkg.JPEG/6cf09915b6524b9d810a5b2835db7115534.jpg?type=s88"/>
                                </div>
                                <div className="block mx-2 mt-1">
                                    <div className="gap-2 font-inter flex">
                                        <p className="font15-res-300 my-0 py-0 font-semibold text-gray-700" >
                                            {/*{feed.user.name}*/}
                                            VBTS
                                        </p>
                                        <p className="font15-res-300 my-0 py-0  text-gray-600">

                                            {/*{feed.time}*/}
                                            @thv

                                        </p>
                                    </div>
                                    <div className="gap-2 font-inter flex">
                                        <p className="font13-res-300" style={{color:"#797979"}}>33 menit lalu</p>
                                    </div>
                                </div>
                            </div>
                            <div className="block text-left">
                                <div className="my-2 py-2">
                                    <p className="font14-res-300 text-gray-600">
                                        Replied you : 선물은 잘 받으셨는지요~
                                        오늘도 좋은 하루 보내요🙋🏻‍♂️😉
                                    </p>
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