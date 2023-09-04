import {Link} from "react-router-dom";


export const FeedBarComponent = () => {
    return(
        <>
            <nav className="lg:w-full md:block hidden md:mx-auto lg:mx-0 w-10/12">
                <header className="border mx-auto bg-white xl:w-10/12 lg:w-9/12  border-radius-8">
                    <div className="w-full">
                        <div className="relative mb-4">
                            <div style={{ height:"86px" ,  width:"100%"}}>
                                <img className="w-full object-cover h-full" style={{ borderRadius:"8px 8px 0px 0px"}}   src="https://pbs.twimg.com/profile_banners/1322964788180262912/1684231514/600x200"/>
                            </div>
                            <div className="absolute top-10 left-6">
                                <div className="radius-100 bg-white p-1 " style={{ height:"70px" , width:"70px"}}>
                                    <img className="w-full h-full radius-100" style={{ objectFit:"cover"}} src="https://pbs.twimg.com/profile_banners/1322964788180262912/1684231514/600x200"/>
                                </div>
                            </div>
                        </div>
                        <div className="pb-0 border-b">
                            <div className="mb-5 mt-8 w-10/12 mx-auto  text-left  ">
                                <h2 style={{ fontWeight:"550"}}>Andrian Raihannudin</h2>
                                <p style={{ fontSize:"14px"  , color:"#8c8c8c"}}>I'm just software developer</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <ul>
                            <div className="my-2">
                                <li className="">
                                    <a>
                                        <div className='flex gap-2 text-gray-500 py-3 cursor-pointer hover:bg-gray-50 hover:text-purple-600'>
                                            <Link className="w-9/12 mx-auto">
                                                <div className="flex gap-2 w-full">
                                                    <div style={{ height:"24px" }}>
                                                        <img className="h-full" src="/assets/global-icon.svg"/>
                                                    </div>
                                                    <h3 style={{ fontSize:"17px" , fontWeight:"500"}}>World</h3>
                                                </div>
                                            </Link>
                                        </div>
                                    </a>
                                </li>
                                <li className="">
                                    <a>
                                        <div className='flex gap-2 text-gray-500 py-3 cursor-pointer hover:bg-gray-50 hover:text-purple-600'>
                                            <Link className="w-9/12 mx-auto">
                                                <div className="flex gap-2 w-full">
                                                    <div style={{ height:"24px" }}>
                                                        <img className="h-full" src="/assets/search-icon.svg"/>
                                                    </div>
                                                    <h3 style={{ fontSize:"17px" , fontWeight:"500"}}>Search</h3>
                                                </div>
                                            </Link>
                                        </div>
                                    </a>
                                </li>
                                <li className="">
                                    <a>
                                        <div className='flex gap-2 text-gray-500 py-3 cursor-pointer hover:bg-gray-50 hover:text-purple-600'>
                                            <Link className="w-9/12 mx-auto">
                                                <div className="flex gap-2 w-full">
                                                    <div style={{ height:"24px" }}>
                                                        <img className="h-full" src="/assets/form-icon.svg"/>
                                                    </div>
                                                    <h3 style={{ fontSize:"17px" , fontWeight:"500"}}>Form Ask</h3>
                                                </div>
                                            </Link>
                                        </div>
                                    </a>
                                </li>
                                <li className="">
                                    <a>
                                        <div className='flex gap-2 text-gray-500 py-3 cursor-pointer hover:bg-gray-50 hover:text-purple-600'>
                                            <Link className="w-9/12 mx-auto">
                                                <div className="flex gap-2 w-full">
                                                    <div style={{ height:"24px" }}>
                                                        <img className="h-full" src="/assets/notifikasi-icon.svg"/>
                                                    </div>
                                                    <h3 style={{ fontSize:"17px" , fontWeight:"500"}}>Notifikasi</h3>
                                                </div>
                                            </Link>
                                        </div>
                                    </a>
                                </li>
                            </div>
                            <li className="mb-2 pt-1 border-t">
                                <a>
                                    <div className='flex gap-2 text-gray-500 py-3 cursor-pointer hover:bg-gray-50 hover:text-purple-600'>
                                        <Link className="w-9/12 mx-auto">
                                            <div className="flex gap-2 w-full">
                                                <div style={{ height:"24px" }}>
                                                    <img className="h-full" src="/assets/like-icon.svg"/>
                                                </div>
                                                <h3 style={{ fontSize:"17px" , fontWeight:"500"}}>Liked</h3>
                                            </div>
                                        </Link>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </header>
                <div className="my-4 mx-auto xl:w-10/12 lg:w-10/12">
                    <div>
                        <ul className="flex text-left gap-3">
                            <li className="hover:underline" style={{ fontSize:"12px" , color:"#838383"}}><Link>
                                Terms of use
                            </Link></li>
                            <li className="hover:underline" style={{ fontSize:"12px" , color:"#838383"}}><Link>
                                Terms of use
                            </Link></li>
                        </ul>
                    </div>
                    <div>
                        <ul className="flex text-left gap-3">
                            <li className="hover:underline" style={{ fontSize:"12px" , color:"#838383"}}><Link>
                                Privacy policy
                            </Link></li>
                            <li className="hover:underline" style={{ fontSize:"12px" , color:"#838383"}}><Link>
                                Cookie policy
                            </Link></li>
                        </ul>
                    </div>
                    <div className="flex my-2 justify-between">
                        <p  style={{ fontSize:"12px" , color:"#838383"}}>© SpaceSkool.</p>
                        <p  style={{ fontSize:"12px" , color:"#838383"}}>Ver 1.0.0</p>
                    </div>
                </div>
            </nav>
            <nav className="w-full md:hidden block">
                <header className=" bg-white pt-2 px-1  w-full border-radius-4">
                    <div className="w-full">
                        <div className="radius-100 bg-white p-1 mx-auto " style={{ height:"40px" , width:"40px"}}>
                            <img className="w-full h-full radius-100" style={{ objectFit:"cover"}} src="https://pbs.twimg.com/profile_banners/1322964788180262912/1684231514/600x200"/>
                        </div>
                    </div>
                    <div>
                        <ul>
                            <div className="my-2 mx-auto">
                                <li className="mx-auto">
                                    <a>
                                        <div className='flex gap-2 text-gray-500 py-3 cursor-pointer hover:bg-gray-50 hover:text-purple-600'>
                                            <Link className="w-9/12 mx-auto">
                                                <div className="flex gap-2 w-full">
                                                    <div className="mx-auto" style={{ height:"24px" }}>
                                                        <img className="h-full" src="/assets/global-icon.svg"/>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </a>
                                </li>
                                <li className="">
                                    <a>
                                        <div className='flex gap-2 text-gray-500 py-3 cursor-pointer hover:bg-gray-50 hover:text-purple-600'>
                                            <Link className="w-9/12 mx-auto">
                                                <div className="flex gap-2 w-full">
                                                    <div className="mx-auto" style={{ height:"24px" }}>
                                                        <img className="h-full" src="/assets/search-icon.svg"/>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </a>
                                </li>
                                <li className="">
                                    <a>
                                        <div className='flex gap-2 text-gray-500 py-3 cursor-pointer hover:bg-gray-50 hover:text-purple-600'>
                                            <Link className="w-9/12 mx-auto">
                                                <div className="flex gap-2 w-full">
                                                    <div className="mx-auto" style={{ height:"24px" }}>
                                                        <img className="h-full" src="/assets/form-icon.svg"/>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </a>
                                </li>
                                <li className="">
                                    <a>
                                        <div className='flex gap-2 text-gray-500 py-3 cursor-pointer hover:bg-gray-50 hover:text-purple-600'>
                                            <Link className="w-9/12 mx-auto">
                                                <div className="flex gap-2 w-full">
                                                    <div className="mx-auto" style={{ height:"24px" }}>
                                                        <img className="h-full" src="/assets/notifikasi-icon.svg"/>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </a>
                                </li>
                            </div>
                            <li className="mb-2 pt-1 border-t">
                                <a>
                                    <div className='flex gap-2 text-gray-500 py-3 cursor-pointer hover:bg-gray-50 hover:text-purple-600'>
                                        <Link className="w-9/12 mx-auto">
                                            <div className="flex gap-2 w-full">
                                                <div className="mx-auto" style={{ height:"24px" }}>
                                                    <img className="h-full" src="/assets/like-icon.svg"/>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </header>
                <div className="my-4 lg:hidden block mx-3">
                    {/*<div>*/}
                    {/*    <ul className="flex text-left gap-3">*/}
                    {/*        <li className="hover:underline" style={{ fontSize:"12px" , color:"#838383"}}><Link>*/}
                    {/*            Terms of use*/}
                    {/*        </Link></li>*/}
                    {/*        <li className="hover:underline" style={{ fontSize:"12px" , color:"#838383"}}><Link>*/}
                    {/*            Terms of use*/}
                    {/*        </Link></li>*/}
                    {/*    </ul>*/}
                    {/*</div>*/}
                    {/*<div>*/}
                    {/*    <ul className="flex text-left gap-3">*/}
                    {/*        <li className="hover:underline" style={{ fontSize:"12px" , color:"#838383"}}><Link>*/}
                    {/*            Privacy policy*/}
                    {/*        </Link></li>*/}
                    {/*        <li className="hover:underline" style={{ fontSize:"12px" , color:"#838383"}}><Link>*/}
                    {/*            Cookie policy*/}
                    {/*        </Link></li>*/}
                    {/*    </ul>*/}
                    {/*</div>*/}
                    {/*<div className="flex my-2 justify-between">*/}
                    {/*    <p  style={{ fontSize:"12px" , color:"#838383"}}>© SpaceSkool.</p>*/}
                    {/*    <p  style={{ fontSize:"12px" , color:"#838383"}}>Ver 1.0.0</p>*/}
                    {/*</div>*/}
                </div>
            </nav>
        </>
    )
}