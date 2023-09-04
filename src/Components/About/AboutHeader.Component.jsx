

export  const AboutHeaderComponent = () => {
    return(
        <>
            <div className="w-full py-10" style={{ minWidth:"300px"}}>
                <div className="w-full py-10 sm:py-20 " style={{ background:"#F7F9FA"}}>
                    <div className="w-11/12 md:w-10/12 mx-auto">
                        <article className="w-full text-left sm:text-center">
                            <div className="w-full lg:w-10/12 mx-auto">
                                <h1 className="w-full righteous md:pt-6 pt-5 pb-4 text-purple-700 font30-res-300" >Lebih dari Learning System Management Biasa</h1>
                            </div>
                            <div className="w-full lg:w-10/12 mx-auto">
                                <p className="poppins text-gray-500 font16-res-300" >Apakah Anda ingin belajar atau berbagi apa yang Anda ketahui, dan ataukah anda ingin membuat absensi, Anda telah datang ke tempat yang tepat. Sebagai tujuan global untuk Manajemen Sistem Pembelajaran online, kami memberdayakan  fitur-fitur yang menarik serta berfungsi secara fleksibel dan efektif.</p>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="w-full bg-white border-b pt-12 pb-8 md:pt-16 md:pb-12">
                    <article className="w-11/12 md:w-10/12 mx-auto text-left sm:text-center">
                        <div className="lg:w-8/12 md:w-10/12 w-full mx-auto">
                            <p className="poppins text-gray-600 font15-res-300" >
                                Kami membantu organisasi pendidikan dari semua jenis bersiap untuk jalan ke depan — ke arah digitalisasi. tidak hanya Sitsem pembelajaran kami juga akan menyediakan Kumpulan kursus akademi dan teknis kami yang dikuratori membantu siswa maupun umum untuk melangkah lebih jauh dengan menempatkan pembelajaran sebagai pusat strategi mereka.
                            </p>
                            <div className="my-6">
                                <button className="bg-purple-700 hover:bg-purple-800 py-2 px-8 text-white font15-res-300 ">
                                    Pelajari
                                </button>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </>
    )
}

// <>
//     <div className="w-full pt-16" style={{ minWidth:"300px"}}>
//         <div className="w-full bg-white ">
//             <div className="md:w-10/12 w-11/12 mx-auto">
//                 <div className="block text-center w-full mx-auto">
//                     <h3 className="w-full righteous md:pt-6 pt-5 pb-4 text-purple-700 font22-res-300">Tentang Kami</h3>
//                     {/*<div style={{ height:"40px"}}>*/}
//                     {/*    <img className="h-full" src="/assets/spaceskool-logo-bg.png"/>*/}
//                     {/*</div>*/}
//                     <div className="md:w-10/12 w-full mx-auto">
//                         <article>
//                             <p className="font14-res-300 md:text-center text-left poppins text-gray-500 ">Spaceskool, berawal dari ketidak sukaan saya tehadap siswa yang tidak jujur dan tidak disiplin, saya sangat tertarik untuk menciptakan sebuah platform pembelajaran yang mengkedepankan nilai kejujuran, kedisplinan serta tanggung jawab. <br/> <br/>
//                                 awal mulanya Spaceskool didirikan karena untuk mengikuti lomba tahunan FIKSI pada 2023 akan tetapi terjadinya sebuah masalah yang mengakibatkan kami tidak dapat mengikuti lomba tersebut, tetapi saya sangat menginginkan platform seperti itu, alhasil saya buat sendiri platform tersebut yang saya beri nama Spaceskool. <br/> <br/>
//                                 kami berdedikasi untuk menyediakan produk absensi , assignment agar mengingkatkan tingkat kedisplin, dan kejujuran para siswa serta limasa pengerjaan yang memudahkan untuk membuat laporan.
//                                 <br/> <br/>
//                             </p>
//                         </article>
//                     </div>
//
//
//                 </div>
//             </div>
//             <div className="md:w-10/12 w-11/12 mx-auto">
//                 <div className="block text-center w-full mx-auto">
//                     <h3 className="w-full righteous md:pt-6 pt-5 pb-4 text-purple-700 font22-res-300">Apa yang kita tawarkan:</h3>
//                     {/*<div style={{ height:"40px"}}>*/}
//                     {/*    <img className="h-full" src="/assets/spaceskool-logo-bg.png"/>*/}
//                     {/*</div>*/}
//                     <div className="md:w-10/12 w-full mx-auto">
//                         <article>
//                             <p className="font14-res-300 md:text-center text-left poppins text-gray-500">
//                                 Sebagai pembelajarn yang mengutamakan nilai kedisplinan dan kejujuran Spaceskool menawarkan berbagai macam layanan seperti
//                                 <br/> <br/>
//                                 Absensi : melakukan absensi secara online yang ditentukan waktu pengabsenan ditentukan serta pengidentifikasikan member absen oleh identitas diri.
//                                 <br/> <br/>
//                                 Penugasan : anda bisa membuat murid anda untuk mengerjakan secara offline secara digital sehingga siswa anda tidak bisa melakukan kecurangan, setiap siswa akan diberikan 3 kesempatan apabila melakukan kecurangan point kesempatan akan dikurangi dan apabila point kesempatan sama dengan 0 maka siswa tidak diperbolehkan untuk mengerjakan tugas lagi.
//                                 <br/> <br/>
//                                 Riwayat Tugas : anda bisa melihat maupun membuat laporan dari semua tugas tugas yang telah diselesaikan oleh murid yang terorganisir dengan tanggal.
//                                 <br/> <br/>
//                             </p>
//                         </article>
//                     </div>
//
//
//                 </div>
//             </div>
//             <div className="md:w-10/12 w-11/12 mx-auto">
//                 <div className="block text-center w-full mx-auto">
//                     <h3 className="w-full righteous md:pt-6 pt-5 pb-4 text-purple-700 font22-res-300">Bergabung dengan kami</h3>
//                     {/*<div style={{ height:"40px"}}>*/}
//                     {/*    <img className="h-full" src="/assets/spaceskool-logo-bg.png"/>*/}
//                     {/*</div>*/}
//                     <div className="md:w-10/12 w-full mx-auto">
//                         <article>
//                             <p className="font14-res-300 md:font15-res-300 md:text-center text-left poppins text-gray-500 ">
//                                 Apakah Anda seorang programmer, designer, pelajar kalian tertarik begabung dengan tim kami? , kami dengan senantiasa menyambut Anda untuk bergabung dengan kami dalam mengembangkan Spaceskool. Bersama-sama, mari kita ciptakan dampak positif bagi dunia di sekitar kita.
//                                 <br/> <br/>
//                                 Terima kasih telah memilih Spaceskool sebagai learning system management. Kami berharap dapat melayani Anda dan melebihi harapan Anda.
//                                 <br/> <br/>
//                                 Hubungi kami untuk mempelajari lebih lanjut tentang bagaimana kami dapat membantu Anda dengan menghubungi instagram ini
//                                 <br/> <br/>
//                                 <br/> <br/>
//                             </p>
//                         </article>
//                     </div>
//
//
//                 </div>
//             </div>
//
//             {/*<div style={containerStyle}>*/}
//             {/*    <div style={imageContainerStyle}>*/}
//             {/*        /!* The image itself should be added as a background-image *!/*/}
//             {/*    </div>*/}
//             {/*</div>*/}
//         </div>
{/*    </div>*/}
{/*</>*/}
