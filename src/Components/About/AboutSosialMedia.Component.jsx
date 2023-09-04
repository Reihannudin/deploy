
export const  AboutSosialMediaComponent = () => {
    return(
        <>
            <div className="w-full border-t mt-12 md:mt-16 " style={{ minWidth:"300px"}}>
                <div className="w-11/12 mx-auto bg-white ">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:w-11/12 lg:w-10/12 mt-20 mx-auto gap-6">
                        <div className="bg-white hover:bg-gray-50 hover:text-purple-700 cursor-pointer shadow mx-auto gap-3 w-full flex py-3 px-4 text-left border-radius-8">
                            <div  style={{ maxHeight:"45px" ,minHeight:"40px"}}>
                                <img className="h-full " style={{ maxHeight:"45px" ,minHeight:"40px"}} src="/assets/ig-icons.svg"/>
                            </div>
                            <div className="w-8/12 text-gray-600 hover:text-purple-700">
                                <p className="font16-res-300 ">@Account_Instagram</p>
                                <p className="font14-res-300 ">Instagram</p>
                            </div>
                        </div>
                        <div className="bg-white hover:bg-gray-50 hover:text-purple-700 cursor-pointer  shadow mx-auto gap-3 w-full flex py-3 px-4 text-left border-radius-8">
                            <div style={{ maxHeight:"45px" ,minHeight:"40px"}}>
                                <img className="h-full " style={{ maxHeight:"45px" ,minHeight:"40px"}} src="/assets/facebook-icons.svg"/>
                            </div>
                            <div className="w-8/12 text-gray-600 hover:text-purple-700">
                                <p className="font16-res-300 ">@Account_Facebook</p>
                                <p className="font14-res-300 ">Facebook</p>
                            </div>
                        </div>
                        <div className="bg-white hover:bg-gray-50 hover:text-purple-700 cursor-pointer  shadow mx-auto gap-3 w-full flex py-3 px-4 text-left border-radius-8">
                            <div style={{ maxHeight:"45px" ,minHeight:"40px"}}>
                                <img className="h-full " style={{ maxHeight:"45px" ,minHeight:"40px"}} src="/assets/x-icons.svg"/>
                            </div>
                            <div className="w-8/12 text-gray-600 hover:text-purple-700">
                                <p className="font16-res-300 text-gray-700">@Account_Twitter</p>
                                <p className="font14-res-300 text-gray-500">Twitter</p>
                            </div>
                        </div>
                        <div className="bg-white hover:bg-gray-50 hover:text-purple-700 cursor-pointer  shadow mx-auto gap-3 w-full flex py-3 px-4 text-left border-radius-8">
                            <div  style={{ maxHeight:"45px" ,minHeight:"40px"}}>
                                <img className="h-full " style={{ maxHeight:"45px" ,minHeight:"40px"}} src="/assets/email-icons.svg"/>
                            </div>
                            <div className="w-8/12 text-gray-600 hover:text-purple-700">
                                <p className="font16-res-300 text-gray-700">@Account_Email</p>
                                <p className="font14-res-300 text-gray-500">Email</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}