
export const FeedCardComponent = ()=> {
    return(
        <>
            <div className="bg-white pt-3  pb-1 px-2  border-radius-4 border-l border-t border-b border-gray-50">
                <div>
                    <div className="flex mx-2">
                        <div className="radius-100 h-profile-feed" >
                            <img className="w-full h-full object-cover radius-100" src="/assets/profile.jpg"/>
                        </div>
                        <div className="block my-auto text-left mx-2">
                            <div className="gap-1 flex">
                                <p className="font16-res-300" style={{ fontWeight:"550"}}>Nama</p>
                                {/*<div className="my-auto mx-0"  style={{ height:"30px"}}>*/}
                                {/*    <img className="my-auto h-full" src="/assets/icon-dot.svg"/>*/}
                                {/*</div>*/}
                                <p className="font16-res-300" style={{ color:"#797979"}}>@username</p>
                            </div>
                            <p className="font14-res-300" style={{  color:"#797979"}}>33 menit lalu</p>
                        </div>
                    </div>
                    <div className="flex  gap-2">
                       <div className="w-full">
                           <div className=" w-full my-2 text-left">
                               <p className="font16-res-300 text-gray-700">  I saw a deer eating a snake for the first time. Don't deer feed on grass?</p>
                           </div>
                           <div className=" w-full mt-0 justify-between mb-0 pt-1 flex gap-6 text-left">
                               <div className="flex gap-7 w-full">
                                   <div className="flex mt-1 gap-1">
                                       <button>
                                           <div className="h-icon-menu" >
                                               <img className="h-full" src="/assets/comment-icon.svg"/>
                                           </div>
                                       </button>
                                       <p className="md:mt-1.5 sm:mt-2 mt-2.5 font16-res-300" style={{color:"#737373"}}>123</p>
                                   </div>
                                   <div className="flex mt-1.5 gap-1">
                                       <button>
                                           <div className="h-icon-menu" >
                                               <img className="h-full" src="/assets/like-icon.svg"/>
                                           </div>
                                       </button>
                                       <p className="md:mt-1 sm:mt-1.5 mt-2 font16-res-300"  style={{ color:"#737373"}}>123</p>
                                   </div>
                               </div>

                               <div className="my-1.5 h-icon-menu" >
                                   <img className="h-full" src="/assets/menu-icon.svg"/>
                               </div>
                           </div>
                       </div>
                    </div>
                </div>
            </div>
        </>
    )
}