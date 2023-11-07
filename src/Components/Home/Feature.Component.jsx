

export const FeatureComponent = () => {
    return(
        <>
            <div className="w-full mx-auto lg:mt-8  md:mb-7 mb-6 md:mt-4 mt-0 lg:mb-8" style={{ minWidth:"300px" ,maxWidth:"1500px"}}>
                <section className="xl:w-10/12 sm:w-11/12 w-full   mx-auto">
                    <div className="text-center w-11/12 md:w-full mx-auto">
                        <h1 className="md:pb-8 pb-4 pt-0 mb-0 text-purple-600 font22-res-300" style={{ fontWeight:"500"}}>Fitur kami</h1>

                        <div className="grid xl:gap-5 md:mx-auto w-11/12 md:w-10/12  lg:w-full mx-auto lg:gap-4  gap-2 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1">
                            <div className="box-content lg:w-full sm:w-10/12  w-9/12 px-3 lg:px-1  md:mx-auto  mx-auto bg-white shadow my-3 pt-5  pb-1 border-radius-8">
                                <div className="mx-auto" style={{height:"90px" }}>
                                    <img className="h-full mx-auto " src="/assets/absent-icon.svg" />
                                </div>
                                <div className="my-2 w-full">
                                    <h2 className="my-0 py-0 font18-res-300 " style={{color:"#584e5d"}}>Absensi</h2>
                                    <div className="w-full my-2 mx-auto">
                                        <p className="my-0 text-center py-0 font-normal  font14-res-300"  style={{color:"#7c7a7e"}} >Keleolah Absensi secara online dan meningkatkan kedispilinan dengan fitur authentication.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="box-content lg:w-full sm:w-10/12  w-9/12 px-3 lg:px-1  md:mx-auto  mx-auto bg-white shadow my-3 pt-5  pb-1 border-radius-8">
                                <div className="mx-auto" style={{height:"90px" }}>
                                    <img className="h-full mx-auto radius-full" src="/assets/assigment-icon.svg" />
                                </div>
                                <div className="my-2 w-full">
                                    <h2 className="my-0 py-0 font18-res-300 " style={{color:"#584e5d"}}>Tugas</h2>
                                    <div className="w-full mb-2 mt-1 mx-auto">
                                        <p className="my-0 text-center py-0 font-normal  font14-res-300"  style={{color:"#7c7a7e"}} >Buatlah tugas baik ulangan maupun harian, dengan cara pengerjaan yang meminimalisirkan kecuangan.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="box-content lg:w-full sm:w-10/12  w-9/12 px-3 lg:px-1  md:mx-auto  mx-auto bg-white shadow my-3 pt-5  pb-1 border-radius-8">
                                <div className="mx-auto" style={{height:"90px" }}>
                                    <img className="h-full mx-auto radius-full" src="/assets/resource-icon.svg" />
                                </div>
                                <div className="my-2 w-full">
                                    <h2 className="my-0 py-0 font18-res-300 " style={{color:"#584e5d"}}>Bahan Belajar</h2>
                                    <div className="w-full my-2 mx-auto">
                                        <p className="my-0 text-center py-0 font-normal  font14-res-300"  style={{color:"#7c7a7e"}} >Buat Bahan belajar terstruktur baik untuk pengajar maupun pelajar.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="box-content lg:w-full sm:w-10/12  w-9/12 px-3 lg:px-1  md:mx-auto  mx-auto bg-white shadow my-3 pt-5 pb-1 border-radius-8">
                                <div className="mx-auto" style={{height:"90px" }}>
                                    <img className="h-full mx-auto radius-full" src="/assets/icon-history.svg" />
                                </div>
                                <div className="my-2 w-full">
                                    <h2 className="my-0 py-0 font18-res-300 " style={{color:"#584e5d"}}>History</h2>
                                    <div className="w-full my-2 mx-auto">
                                        <p className="my-0 text-center py-0 font-normal  font14-res-300"  style={{color:"#7c7a7e"}} >Semua aktivitas dapat diakses selamanya dan dirangkum berdasarkan bulan</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="w-9/12 my-16 mx-auto">
                    {/*<div className="bg-gray-200 h-0.5">*/}
                    {/*</div>*/}
                </div>
            </div>
        </>
    )
}