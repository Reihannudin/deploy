import {Link} from "react-router-dom";


export const FeedMiniBarComponent = () => {
    return(
        <>
            <nav className="w-full block">
                <header className="  pt-2 px-1  w-full border-radius-4">
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
                            </div>
                            <li>
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
                            <li className="mb-2 pt-1 border-t">
                                <a>
                                    <div className='flex gap-2 text-gray-500 py-3 cursor-pointer hover:bg-gray-50 hover:text-purple-600'>
                                        <Link className="w-9/12 mx-auto">
                                            <div className="flex gap-2 w-full">
                                                <div className="mx-auto" style={{ height:"24px" }}>
                                                    <img className="h-full" src="/assets/icon-write-gray.svg"/>
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