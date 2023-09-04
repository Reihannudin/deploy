
export const AboutSectionComponent = () => {
    return(
        <>
            <div className="w-full   pt-16" style={{ minWidth:"560px" , position:"relative"  }}>
                <section className=" py-8 w-full h-full" style={{ background:"#4d0d7e"}}>
                    <div className="md:flex  grid grid-cols-1 lg:w-10/12 md:w-11/12 mx-auto my-auto md:justify-between">
                        <div className="md:order-1 order-2 lg:w-4/12 md:w-5/12 w-8/12 md:text-left text-center mx-auto text-white my-auto">
                            <h1 className="font-jumbo righteous my-4" style={{ fontWeight:"600" , color:"#d3b5f6" }}>Fessta App</h1>
                            <h3 className="font-medium-little  lg:mb-20 md:mb-12" style={{ fontWeight:"400" ,  color:"#cca3fa" }}>Dapatkan tempat untuk belajar atau mengobrol dengan teman baru, buat ruang Anda</h3>
                            <button className="flex my-6  mx-auto md:mx-0 md:text-left text-center gap-2 text-white underline" style={{ color:"#2DF0C4" }}>
                                <p className="font-semibold">Read all documentation</p>
                                <div className="my-auto">
                                    <img src="https://developer.android.com/static/images/studio/icon-books.svg"/>
                                </div>
                            </button>
                        </div>
                        <div className="md:order-2 order-1 md:w-7/12 w-11/12 md:mx-0 mx-auto my-auto">
                            <div className="mx-auto w-10/12">
                                <img className="w-full" style={{ objectFit:"cover"}} src="https://developer.android.com/static/images/studio/studio-hero_960.png"/>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}