import {Link} from "react-router-dom";
import React, {useState} from "react";


export const FeedSpacesBarComponent = () => {

    const [isHovered, setIsHovered] = useState(false);

    const [isMenuHidden , setIsMenuHidden] = useState(true);
    const toggleMenu = () => {
        setIsMenuHidden((prevHidden) => !prevHidden);
    }


    return(
        <>
            <div className="w-full ">
                <div  className="w-full">
                    <div  className="w-10/12 md:ms-0 lg:ms-auto me-auto md:w-11/12 lg::w-full">
                        {/*bar for name and button back*/}
                        {/*<div  className="w-full">*/}
                        {/*    <div  className="w-full pt-4 pb-3 mx-3">*/}
                        {/*        <div className="w-full  flex">*/}
                        {/*            <div >*/}
                        {/*                <button className={"w-full"}>*/}
                        {/*                    <div className="w-full" style={{ height:"24px"}}>*/}
                        {/*                        <img className="h-full" src="/assets/arrow-back.svg"/>*/}
                        {/*                    </div>*/}
                        {/*                </button>*/}
                        {/*            </div>*/}
                        {/*            <div className={"mx-2 text-left "}>*/}
                        {/*                <h2 className={"font16-res-300 text-gray-700"}>Dicoding</h2>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*List of navigate of friend or subject*/}
                        <div className={"w-full h-screen overflow-y-auto"}>
                            <div  className={"w-full my-2"}>
                                <div className={"w-full "}>
                                    <div className={"w-11/12 text-left"}>
                                        <h2 className={"font16-res-300 hidden md:block font-inter"}>Pemerograman</h2>
                                        <div className={"mx-auto mb-4"}>
                                            <button id="menu-button" className="  md:hidden block mx-auto  mx-0" onClick={toggleMenu} style={{  transform: isMenuHidden ? 'rotate(-40deg)' : 'none' ,    transition: 'transform 0.3s ease-in-out'}}>
                                                {isMenuHidden === false ? (
                                                    <div className="h-6 w-6 me-2 cursor-pointer lg:hidden block" style={{ height:"26px"}} >
                                                        <img className="h-full w-full" src="/assets/icon-close.svg"/>
                                                    </div>
                                                ) : (
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        id="menu-button"
                                                        style={{transform: isMenuHidden ? 'rotate(40deg)' : 'none'}}
                                                        className="h-6 w-6 mx-auto cursor-pointer lg:hidden block"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                    >
                                                        <path

                                                            d="M4 6h16M4 12h16M4 18h16"
                                                        />
                                                    </svg>
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <ul  className={"w-full my-3"}>
                                    <li className={"w-full my-3"}>
                                        <div
                                            className={"w-full border-none cursor-pointer border-radius-8 px-3 text-gray-500 hover:text-purple-700 py-3 hover:bg-gray-50"}
                                            onMouseOver={() => setIsHovered(true)}
                                            onMouseOut={() => setIsHovered(false)}
                                        >
                                            <Link to={"#"}>
                                                <div className={"w-full"}>
                                                    <div className={"w-full font-inter text-left flex"}>
                                                        <div className={"mx-auto md:mx-0 h-icon-space-bar"} >
                                                            <img
                                                                src={isHovered ? "/assets/icon-space-purple.svg" : "/assets/icon-space-gray.svg"}
                                                                className={"h-full"}
                                                            />
                                                        </div>
                                                        <p className={"mx-3 hidden md:block font-inter font13-res-300"} style={{ fontWeight: "450" }}>HTML</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </li>
                                    <li className={"w-full my-3"}>
                                        <div
                                            className={"w-full border-none cursor-pointer border-radius-8 px-3 text-gray-500 hover:text-purple-700 py-3 hover:bg-gray-50"}
                                            onMouseOver={() => setIsHovered(true)}
                                            onMouseOut={() => setIsHovered(false)}
                                        >
                                            <Link to={"#"}>
                                                <div className={"w-full"}>
                                                    <div className={"w-full font-inter text-left flex"}>
                                                        <div className={"mx-auto md:mx-0 h-icon-space-bar"} >
                                                            <img
                                                                src={isHovered ? "/assets/icon-space-purple.svg" : "/assets/icon-space-gray.svg"}
                                                                className={"h-full"}
                                                            />
                                                        </div>
                                                        <p className={"mx-3 hidden md:block font-inter font13-res-300"} style={{ fontWeight: "450" }}>HTML</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </li>
                                    <li className={"w-full my-3"}>
                                        <div
                                            className={"w-full border-none cursor-pointer border-radius-8 px-3 text-gray-500 hover:text-purple-700 py-3 hover:bg-gray-50"}
                                            onMouseOver={() => setIsHovered(true)}
                                            onMouseOut={() => setIsHovered(false)}
                                        >
                                            <Link to={"#"}>
                                                <div className={"w-full"}>
                                                    <div className={"w-full font-inter text-left flex"}>
                                                        <div className={"mx-auto md:mx-0 h-icon-space-bar"} >
                                                            <img
                                                                src={isHovered ? "/assets/icon-space-purple.svg" : "/assets/icon-space-gray.svg"}
                                                                className={"h-full"}
                                                            />
                                                        </div>
                                                        <p className={"mx-3 hidden md:block font-inter font13-res-300"} style={{ fontWeight: "450" }}>HTML</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </li>
                                    <li className={"w-full my-3"}>
                                        <div
                                            className={"w-full border-none cursor-pointer border-radius-8 px-3 text-gray-500 hover:text-purple-700 py-3 hover:bg-gray-50"}
                                            onMouseOver={() => setIsHovered(true)}
                                            onMouseOut={() => setIsHovered(false)}
                                        >
                                            <Link to={"#"}>
                                                <div className={"w-full"}>
                                                    <div className={"w-full font-inter text-left flex"}>
                                                        <div className={"mx-auto md:mx-0 h-icon-space-bar"} >
                                                            <img
                                                                src={isHovered ? "/assets/icon-space-purple.svg" : "/assets/icon-space-gray.svg"}
                                                                className={"h-full"}
                                                            />
                                                        </div>
                                                        <p className={"mx-3 hidden md:block font-inter font13-res-300"} style={{ fontWeight: "450" }}>HTML</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </li>
                                    <li className={"w-full my-3"}>
                                        <div
                                            className={"w-full border-none cursor-pointer border-radius-8 px-3 text-gray-500 hover:text-purple-700 py-3 hover:bg-gray-50"}
                                            onMouseOver={() => setIsHovered(true)}
                                            onMouseOut={() => setIsHovered(false)}
                                        >
                                            <Link to={"#"}>
                                                <div className={"w-full"}>
                                                    <div className={"w-full font-inter text-left flex"}>
                                                        <div className={"mx-auto md:mx-0 h-icon-space-bar"} >
                                                            <img
                                                                src={isHovered ? "/assets/icon-space-purple.svg" : "/assets/icon-space-gray.svg"}
                                                                className={"h-full"}
                                                            />
                                                        </div>
                                                        <p className={"mx-3 hidden md:block font-inter font13-res-300"} style={{ fontWeight: "450" }}>HTML</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </li>

                                </ul>
                            </div>
                            <div id="menu" className={`h-full w-full left-14 fixed menu ${isMenuHidden ? 'hidden' : 'block'}`} style={{ top:"7.3rem"}}>
                                <div className={`w-full z-50 bg-white border-b md:hidden lg:w-full  relative flex items-center  sm:flex sm:items-center sm:w-auto md:flex md:items-center md:w-auto ${isMenuHidden ? 'opacity-0 translate-y-[-10px] pointer-events-none' : 'opacity-100 translate-y-0 pointer-events-auto'} transition-opacity duration-300 transition-transform duration-300`}>
                                    <ul  className={"w-full mt-2  "}>
                                        <li className={"w-full py-2 mt-0.5 "}>
                                            <div
                                                className={"w-full border-none cursor-pointer border-radius-8 px-3 text-gray-500 hover:text-purple-700 py-3 hover:bg-gray-50"}
                                                onMouseOver={() => setIsHovered(true)}
                                                onMouseOut={() => setIsHovered(false)}
                                            >
                                                <Link to={"#"}>
                                                    <div className={"w-full"}>
                                                        <div className={"w-full font-inter text-left flex"}>

                                                            <p className={"mx-3 w-full font-inter "} style={{ fontSize:"14px" , fontWeight: "450" }}>HTML</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </li>
                                        <li className={"w-full py-2 mt-0.5 "}>
                                            <div
                                                className={"w-full border-none cursor-pointer border-radius-8 px-3 text-gray-500 hover:text-purple-700 py-3 hover:bg-gray-50"}
                                                onMouseOver={() => setIsHovered(true)}
                                                onMouseOut={() => setIsHovered(false)}
                                            >
                                                <Link to={"#"}>
                                                    <div className={"w-full"}>
                                                        <div className={"w-full font-inter text-left flex"}>

                                                            <p className={"mx-3 w-full font-inter "} style={{ fontSize:"14px" , fontWeight: "450" }}>HTML</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </li>
                                        <li className={"w-full py-2 mt-0.5"}>
                                            <div
                                                className={"w-full border-none cursor-pointer border-radius-8 px-3 text-gray-500 hover:text-purple-700 py-3 hover:bg-gray-50"}
                                                onMouseOver={() => setIsHovered(true)}
                                                onMouseOut={() => setIsHovered(false)}
                                            >
                                                <Link to={"#"}>
                                                    <div className={"w-full"}>
                                                        <div className={"w-full font-inter text-left flex"}>

                                                            <p className={"mx-3 w-full font-inter "} style={{ fontSize:"14px" , fontWeight: "450" }}>HTML</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </li>
                                        <li className={"w-full py-2 mt-0.5 "}>
                                            <div
                                                className={"w-full border-none cursor-pointer border-radius-8 px-3 text-gray-500 hover:text-purple-700 py-3 hover:bg-gray-50"}
                                                onMouseOver={() => setIsHovered(true)}
                                                onMouseOut={() => setIsHovered(false)}
                                            >
                                                <Link to={"#"}>
                                                    <div className={"w-full"}>
                                                        <div className={"w-full font-inter text-left flex"}>

                                                            <p className={"mx-3 w-full font-inter "} style={{ fontSize:"14px" , fontWeight: "450" }}>HTML</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </li>

                                    </ul>
                                </div>
                            </div>


                        </div>
                        {/*List of friend or subject*/}
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}