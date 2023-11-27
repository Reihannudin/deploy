

export const BannerComponent = () => {
    return(
        <>
            <div className=' h-full mx-auto w-full md:pt-14 pb-10 pt-16 px-0' style={{ minWidth:"300px"}}>
                <div className="my-6 md:my-8">
                    <div
                        className="bg-white xl:w-10/12 lg:w-11/12 md:w-11/12 sm:w-11/12 w-full sm:gap-5 gap-2 mx-auto text-left flex md:flex-row flex-col sm:justify-between">
                        <div className="lg:w-10/12 md:order-1 order-2 md:w-7/12 sm:w-11/12  w-full mx-auto">
                            <div className="mx-5 md:mt-8 mt-2 md:mb-8 mb-4 righteous">
                                <h2 className="font-jumbo text-purple-600">Ciptakan study spaces anda yang lebih terstruktur</h2>
                                <p className="font14-res-300" style={{color: "#C0B1C6"}}>
                                    Tempat untuk pengajar, pelajar untuk menciptakan study spaces belajar yan interaktif dan terstruktur,
                                    serta menciptakan lingkungan untuk mempelajari hal yang diminati serta miliki teman baru.
                                 </p>
                            </div>
                            <div className="md:my-3 my-2 mx-5">
                                <button
                                    className="bg-purple-600 font14-res-300 md:font15-res-300 hover:bg-purple-700 py-2 lg:py-2 md:py-2 sm:py-1  md:px-5 px-3 border-radius-4 text-white">
                                    Bergabung dengan kami
                                </button>
                            </div>
                        </div>
                        <div
                            className="border-radius-8 md:order-2 order-1 mx-auto md:me-0 md:ms-auto md:w-8/12 sm:w-11/12   w-11/12 overflow-auto"
                            style={{minHeight: "100px"}}>
                            <img className="w-full h-full border-radius-12" style={{objectFit: "fill"}}
                                 src="/assets/icon-banner.svg"/>
                        </div>
                    </div>

                </div>
                <div className="w-9/12 mx-auto">
                    <div className="bg-gray-200 h-0.5">
                    </div>
                </div>
            </div>
        </>
    )
}