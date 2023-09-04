


export const  PreRegisterCardComponent = () => {
    return(
        <>
            <div id={"pre-register"} className="w-full" style={{ background:"#7B52F2" , minWidth:"300px" , position:"relative"}}>
                <div className="lg:py-10 md:py-8 mx-auto py-6" style={{maxWidth:"1500px"}}>
                    <div className=" md:w-10/12  sm:w-9/12 w-full mx-auto text-left">
                        <h2 className="sm:mx-8 mx-3 my-2 text-white font15-res-300">Pra-Daftar Sekarang, Dan Coba Fitur Yang Pertama Kali</h2>
                        <div className="w-full lg:w-10/12  my-3 ">
                            <div className="flex md:mx-8 md:w-full mx-auto w-11/12">
                                <input className="px-2 lg:w-8/12 sm:w-10/12 md:w-8/12 w-full h-8 sm:h-11 font14-res-300" placeholder="Enter your E-mail"/>
                                <button className="lg:w-2/12 md:w-3/12 w-4/12 px-4 shadow hover:bg-purple-600 font14-res-300 text-white">Daftar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}