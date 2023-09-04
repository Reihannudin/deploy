

export const SpacesPromotionComponent = () => {
    return(
        <div className="w-full mx-auto bg-gray-50 py-6 md:py-10" style={{ minWidth:"300px" ,maxWidth:"1500px" ,}}>
            <section className="w-full mx-auto">
                <div className="w-11/12  md:9/12 lg:w-8/12 mx-auto block md:flex">
                    <div className="lg:w-8/12 md:w-7/12  xl:w-6/12 ms-auto  text-left ">
                        <h2 className="font22-res-300 my-2 text-purple-700" style={{ fontWeight:"600"}}>Bergabung spaces untuk menemukan teman baru</h2>
                        <p className="font14-res-300 text-gray-500">Bergabung atau buat spaces, berdasarkan hobby hingga kebutuhan mu Selain, untuk pembelajaran maanfaatkan spaces untuk membuat jaringan anda</p>
                    </div>
                    <div className="me-auto">
                        <div className=" mx-auto" >
                            <img className="mx-auto" src="/assets/spaces-icon.svg" style={{ maxWidth:"220px" , maxHeight:"220px"}}/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}