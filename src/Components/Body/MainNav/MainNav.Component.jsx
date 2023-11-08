import {useState} from "react";
import {Link, useLocation} from "react-router-dom";

export const MainNavComponent = ({user}) => {

    const location = useLocation();

    // Determine which navigation item is active based on the location.pathname
    const isHomeActive = location.pathname === '/';
    const isFeedActive = location.pathname === '/feed';
    const isMyClassActive = location.pathname === '/my/class';
    const isProfileActive = location.pathname === '/profile';


    const [dropAction , setDropAction] = useState(false);

    const toggleDropAction = () => {
        setDropAction(!dropAction);
    }

    const handleDropdownItemClick = () => {
        setDropAction(false);
    };

    // console.log(user.image)

        return (
            <>
                {dropAction && (
                    <div id="drop-action" className="flex items-center justify-center w-full absolute bottom-16 min-h-screen">
                        {/* This div serves as a backdrop and should cover the entire screen */}
                        <div onClick={handleDropdownItemClick} className="bg-gray-400 bg-opacity-40 w-full h-full z-40 absolute bottom-2"></div>

                        {/* Centered dropdown content */}
                        <div className="bg-white fixed  w-6/12 py-4 z-50 border-radius-8" style={{bottom :"72px"}}>
                            <Link to={'/create/class'}>
                                <div className="py-3 hover:bg-gray-100 font14-res-300">
                                    <p className="text-gray-500  hover:text-purple-700 cursor-pointer">Buat Kelas</p>
                                </div>
                            </Link>
                            <Link to={'/join/class'}>
                                <div className="py-3 hover:bg-gray-100 font14-res-300">
                                    <p className="text-gray-500 hover:text-purple-700 cursor-pointer">Bergabung Kelas</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                )}



                <div className="w-full fixed z-40  bottom-0 border-t border-gray-300 bg-white" >
                    <div className="mx-auto relative sm:w-10/12 w-full">
                        <div className="absolute left-0 right-0 top-0 bottom-6 z-50  flex justify-center items-center">
                            <div className="bg-white p-2-c border-b border-l border-r z-50  border-gray-300 rounded-full">
                                <button onClick={toggleDropAction} style={{ transform: dropAction ? 'rotate(40deg)' : 'none' ,    transition: 'transform 0.3s ease-in-out' }} className="bg-purple-600 p-2 rounded-full">
                                    <img className="h-icon-add" src="/assets/add-icon-white.svg" alt="Add Icon" />
                                </button>
                            </div>
                        </div>
                        <div className="w-full bg-white justify-between flex h-bar-main-nav">
                            <div className="flex bg-white  justify-between pt-3-c pb-2-c mx-auto sm:w-4/12 w-4/12">
                                <Link to={"/"} className="text-center bg-white cursor-pointer   h-icon-main-nav" >
                                    <div className="cursor-pointer p-1 bg-white hover:bg-gray-100 radius-full w-60px" >
                                        <div className="mx-auto cursor-pointer h-icon-main-nav" >
                                            <img className="mx-auto cursor-pointer h-full" src={`${isHomeActive ? '/assets/icon-home-main-nav.svg' : '/assets/icon-home-main-nav-gray.svg'} `} alt="Home Icon" />
                                        </div>
                                        <p className={`my-1 ${isHomeActive ? 'text-purple-600' : 'text-gray-400'} font11-res-300 hover:text-purple-700`}>Beranda</p>
                                    </div>
                                </Link>
                                <Link to={"/feed"} className="text-center bg-white cursor-pointer  radius-full  h-icon-main-nav" >
                                    <div className="cursor-pointer p-1 bg-white hover:bg-gray-100 radius-full  w-60px">
                                        <div className="mx-auto cursor-pointer h-icon-main-nav" >
                                            <img className="mx-auto cursor-pointer h-full" src={`${isFeedActive ? '/assets/icon-feed-main-nav.svg' : '/assets/icon-feed-main-nav-gray.svg'} `} alt="Feed Icon" />
                                        </div>
                                        <p className={`my-1 ${isFeedActive ? 'text-purple-600' : 'text-gray-400'} font11-res-300 hover:text-purple-700`} >Feed</p>
                                    </div>
                                </Link>
                            </div>

                            <div className="flex justify-between bg-white mx-auto pt-3-c pb-2-c  sm:w-4/12 w-4/12">
                                <Link to={"/my/class"} className="text-center bg-white cursor-pointer   h-icon-main-nav" >
                                    <div className="cursor-pointer p-1 bg-white hover:bg-gray-100 radius-full  w-60px" >
                                        <div className="mx-auto cursor-pointer h-icon-main-nav" >
                                            <img className="mx-auto cursor-pointer h-full" src={`${isMyClassActive ? '/assets/icon-myclass-main-nav.svg' : '/assets/icon-myclass-main-nav-gray.svg'} `}   alt="MyClass Icon" />
                                        </div>
                                        <p className={`my-1 ${isMyClassActive ? 'text-purple-600' : 'text-gray-400'} font11-res-300 hover:text-purple-700`}>Kelasku</p>
                                    </div>
                                </Link>
                                <Link to={"/profile"} className="text-center bg-white cursor-pointer  radius-full  h-icon-main-nav" >
                                    <div className="cursor-pointer p-1 hover:bg-gray-100 radius-full  w-60px" >
                                        <div className="mx-auto cursor-pointer h-icon-main-nav" >
                                            <img className="mx-auto cursor-pointer h-full" src={`${isProfileActive ? '/assets/icon-profile-main-nav.svg' : '/assets/icon-profile-main-nav-gray.svg'} `}  alt="Profile Icon" />
                                        </div>
                                        <p className={`my-1 ${isProfileActive ? 'text-purple-600' : 'text-gray-400'} font11-res-300 hover:text-purple-700`} >Profile</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        );
}