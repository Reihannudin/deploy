import {useState} from "react";
import {Link} from "react-router-dom";

export const MainNavComponent = () => {

    const [dropAction , setDropAction] = useState(false);

    const toggleDropAction = () => {
        setDropAction(!dropAction);
    }

    const handleDropdownItemClick = () => {
        // Close the dropdown when an item is clicked
        setDropAction(false);
    };

    return (
        <>
            {dropAction && (
                <div id="drop-action" className="flex items-center justify-center w-full absolute bottom-20 min-h-screen">
                    {/* This div serves as a backdrop and should cover the entire screen */}
                    <div onClick={handleDropdownItemClick} className="bg-gray-200 bg-opacity-30 w-full h-full z-40 absolute bottom-0"></div>

                    {/* Centered dropdown content */}
                    <div className="bg-white fixed bottom-20 w-6/12 py-4 z-50 border-radius-8">
                        <div className="py-3 hover:bg-gray-100 font16-res-300">
                            <p className="text-gray-500  hover:text-purple-700 cursor-pointer">Buat Kelas</p>
                        </div>
                        <div className="py-3 hover:bg-gray-100 font16-res-300">
                            <p className="text-gray-500 hover:text-purple-700 cursor-pointer">Bergabung Kelas</p>
                        </div>
                    </div>
                </div>
            )}



            <div className="w-full fixed  bottom-0 border-t border-gray-300 bg-white" >
                <div className="mx-auto relative sm:w-10/12 w-full">
                    <div className="absolute left-0 right-0 top-0 bottom-6 flex justify-center items-center">
                        <div className="bg-white p-2 border-b border-l border-r border-gray-300 rounded-full">
                            <button onClick={toggleDropAction} style={{ transform: dropAction ? 'rotate(40deg)' : 'none' ,    transition: 'transform 0.3s ease-in-out' }} className="bg-purple-600 p-2 rounded-full">
                                <img style={{ height: "32px" }} src="/assets/add-icon-white.svg" alt="Add Icon" />
                            </button>
                        </div>
                    </div>
                    <div className="w-full bg-white justify-between flex" style={{ height:"70px"}}>
                        <div className="flex bg-white  justify-between pt-3 pb-2 mx-auto sm:w-4/12 w-4/12">
                            <Link to={"/"} className="text-center bg-white cursor-pointer   " style={{ height: "28px" }}>
                                <div className="cursor-pointer p-1 bg-white hover:bg-gray-100 radius-full" style={{ width:"60px"}}>
                                    <div className="mx-auto cursor-pointer" style={{ height: "28px" }}>
                                        <img className="mx-auto cursor-pointer h-full" src="/assets/icon-home-main-nav.svg" alt="Home Icon" />
                                    </div>
                                    <p className="my-1 text-gray-400 hover:text-purple-700" style={{ fontSize: "11px" }}>Beranda</p>
                                </div>
                            </Link>
                            <Link to={"/feed"} className="text-center bg-white cursor-pointer  radius-full " style={{ height: "28px" }}>
                                <div className="cursor-pointer p-1 bg-white hover:bg-gray-100 radius-full" style={{ width:"60px"}}>
                                    <div className="mx-auto cursor-pointer" style={{ height: "28px" }}>
                                        <img className="mx-auto cursor-pointer h-full" src="/assets/icon-feed-main-nav.svg" alt="Feed Icon" />
                                    </div>
                                    <p className="my-1 text-gray-400 hover:text-purple-700" style={{ fontSize: "11px" }}>Feed</p>
                                </div>
                            </Link>
                        </div>

                        <div className="flex justify-between bg-white mx-auto py-3 sm:w-4/12 w-4/12">
                            <Link to={"/my/class"} className="text-center bg-white cursor-pointer  " style={{ height: "28px" }}>
                                <div className="cursor-pointer p-1 bg-white hover:bg-gray-100 radius-full" style={{ width:"60px"}}>
                                    <div className="mx-auto cursor-pointer" style={{ height: "28px" }}>
                                        <img className="mx-auto cursor-pointer h-full" src="/assets/icon-myclass-main-nav.svg" alt="MyClass Icon" />
                                    </div>
                                    <p className="my-1 text-gray-500 hover:text-purple-700" style={{ fontSize: "11px" }}>Kelasku</p>
                                </div>
                            </Link>
                            <Link to={"/profile"} className="text-center bg-white cursor-pointer  radius-full " style={{ height: "28px" }}>
                                <div className="cursor-pointer p-1 hover:bg-gray-100 radius-full" style={{ width:"60px"}}>
                                    <div className="mx-auto cursor-pointer" style={{ height: "28px" }}>
                                        <img className="mx-auto cursor-pointer h-full" src="/assets/icon-profile-main-nav.svg" alt="Profile Icon" />
                                    </div>
                                    <p className="my-1 text-gray-500 hover:text-purple-700" style={{ fontSize: "11px" }}>Profile</p>

                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}