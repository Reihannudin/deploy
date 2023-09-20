import {FeedBarComponent} from "./FeedBar.Component";

export const FeedSearchComponent = () => {
    return(
        <>
            <div className='h-full mx-auto md:pt-16 pt-16 px-0' style={{ minWidth: "375px" }}>
                <div className="xl:w-10/12 lg:w-full md:w-full w-full mx-auto">
                    <div className="flex justify-between my-6 w-full">
                        <div className="lg:w-4/12 md:w-4/12 relative">
                            <div className="fixed   xl:w-3/12 lg:w-4/12 sm:w-2/12 w-2/12  md:w-4/12 left-auto  top-auto  ">
                                <FeedBarComponent />
                            </div>
                        </div>
                        <div className="lg:w-8/12 md:w-8/12 w-10/12">
                            <div className="lg:w-10/12 md:w-full sm:w-11/12 w-full">
                                <div className="w-full">
                                    <div className="w-11/12 mx-auto">
                                        <input className="w-full text-gray-500 mx-auto bg-gray-50 py-3 px-4 border-radius-20" placeholder="Cari di SpaceSkool"/>
                                    </div>
                                    <div style={{ height:"320px"}}>
                                        <div className="h-full mt-5 mb-2">
                                            <div className={"w-11/12 mx-auto text-left py-3"}>
                                                <h2 className="mx-3" style={{ fontSize:"18px" , fontWeight:"550"}}>Pencarian Terakhir Anda</h2>
                                            </div>
                                            <ul>
                                                <li className="hover:bg-gray-50 cursor-pointer">
                                                    <div className=" flex w-10/12 mx-auto font16-res-300 justify-between py-3 ">
                                                        <div style={{ color:"#727272"}}>
                                                            <a>Fellow</a>
                                                        </div>
                                                        <button>
                                                            <div style={{ height:"24px"}}>
                                                                <img className="h-full" src="/assets/close-icon.svg"/>
                                                            </div>
                                                        </button>
                                                    </div>
                                                </li>

                                            </ul>
                                            <div className="w-full my-6">
                                                <div className="mx-auto">
                                                    <button className="text-purple-700 hover:underline" style={{ fontSize:"14px"}}>
                                                        Lihat pencarian sebelumnya
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


