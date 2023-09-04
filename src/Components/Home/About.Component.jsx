

export const AboutComponent = () => {
    return(
        <>
            <div className="w-full mx-auto" style={{ minWidth:"300px" ,maxWidth:"1200px"}}>
                <section className="w-full mx-auto">
                    <div className="w-full">
                        <div className="grid lg:grid-cols-2 grid-cols-1 sm:gap-6 md:gap-3 gap-1">
                            <div className="text-left ">
                                <div className="md:w-full w-full" style={{ background:"#8147D7"}}>
                                    <div className="md:w-10/12 sm:w-10/12 w-11/12 md:pt-10 pt-6 pb-2 md:pb-7 text-white md:ms-auto mx-auto  ">
                                        <div className="block gap-6">
                                            <h1 className="my-2 font18-res-300" >Bukan sekedar Learning System Management</h1>
                                            <p className="my-2 font13-res-300">SpaceSkool membantu siswa maupun creater berkomunikasi, menghubungkan orang-orang, berkolaborasi maupun menunjukan karyanya dengan postingan, cuitan, dan sebagian di antaranya.</p>
                                            <button className="font13-res-300 lg:w-6/12 xl:w-5/12 md:w-3/12  px-4 py-2  my-4 lg:my-6  cursor-pointer  text-white" style={{  border:"2px solid #ffffff"  , borderRadius:"4px"}}>
                                                Jelajahi SpaceSkool
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="block lg:w-full w-11/12 md:w-11/12 md:mx-auto" >
                                <div className="lg:ms-7 md:mx-14 sm:mx-8 mx-4" >
                                    <div className="lg:w-full xl:w-11/12 w-full sm:w-11/12  md:me-auto mx-auto border-b md:my-5 my-5">
                                        <div style={{ height:"80px"}}>
                                            <img className="h-full" style={{ objectFit:"cover"}} src="/assets/about-img-1.svg" alt=""/>
                                        </div>
                                        <div className="text-left mt-2 md:mt-4 mb-2 md:mb-4">
                                            <h5 className="font16-res-300" >Perikasa Kehadiran dengan SpaceSkool</h5>
                                        </div>
                                        <div className="text-left my-2">
                                            <p className="font13-res-300" style={{ color:"#626262"}}>
                                                Dengan keaslian laporan kehadiran yang dapat diakses melalui SpaceSkool, pengajar dapat mengecek daftar kehadiran siswa , siswa dapat mengabsent menggunakan dengan foto ataupun password.
                                                </p>
                                        </div>
                                        <div className=" mt-2 md:mt-4 mb-2 md:mb-4 text-left">
                                            <a className=" text-purple-600 cursor-pointer font15-res-300 underline">Pelajari kehadiran</a>
                                        </div>
                                    </div>
                                    <div className="lg:w-full xl:w-11/12 w-full sm:w-11/12 md:me-auto mx-auto border-b md:my-5 my-5">
                                        <div style={{ height:"80px"}}>
                                            <img className="h-full" style={{ objectFit:"cover"}} src="/assets/about-img-2.svg" alt=""/>
                                        </div>
                                        <div className="text-left mt-2 md:mt-4 mb-2 md:mb-4">
                                            <h5 className="font16-res-300" >Penugasan tanpa kecurangan dengan Space School</h5>
                                        </div>
                                        <div className="text-left my-2">
                                            <p className="font13-res-300 md:font14-res-300" style={{ color:"#626262"}}>
                                                Dengan Pengerjaan tanpa internet dan kesempatan pengerjaan yang terbatas meminimalisirkan adanya kecurangan yang dilakukan oleh siswa
                                            </p>
                                        </div>
                                        <div className=" mt-2 md:mt-4 mb-2 md:mb-4 text-left">
                                            <a className=" text-purple-600 cursor-pointer font15-res-300 underline">Pelajari laporan keaslian</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div  className="mx-auto sm:w-10/12 w-full  ">
                <div className=" w-full lg:my-10 my-3 mx-auto">
                    <hr/>
                </div>
            </div>
        </>
    )
}