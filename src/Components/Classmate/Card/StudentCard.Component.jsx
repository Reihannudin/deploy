import {useState} from "react";

export const StudentCardComponent = (props) => {
    const [isDropdownMenu, setIsDropdownMenu] = useState(false);

    const toggleDropdownMenu = () => {
        setIsDropdownMenu((prevHidden) => !prevHidden);
    };

    return (
        <div className="w-full pt-3 pb-2" style={{ borderBottom: "1px solid #ebebeb" }}>
            <div className="flex justify-between">
                <div className="flex gap-4">
                    <div style={{ height: "40px" }}>
                        <img className="h-full radius-100" src="/assets/profile-dummy.svg" alt="Profile" />
                    </div>
                    <div className="my-auto">
                        <div className="text-left">
                            <h3 className="font16-res-400" style={{ fontWeight: "500", color: "#6b6a6a" }}>{props.name}</h3>
                            <h3 className="font14-res-300" style={{ fontWeight: "500", color: "#868686" }}>{props.username}</h3>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <button className="my-auto" onClick={toggleDropdownMenu}>
                        <div className="px-1 py-2 bg-white hover:px-1 hover:bg-gray-100 radius-100 ">
                            <div className="my-auto mx-1" style={{ height: "24px" }}>
                                <img className="h-full w-full" src="/assets/menu-icon.svg" />
                            </div>
                        </div>
                    </button>
                    {isDropdownMenu && (
                        <div
                            id="dropdown_profile"
                            className={`z-40 absolute right-0 top-10 font-normal text-gray-700 bg-white divide-y divide-gray-100 rounded-lg shadow w-36 dark:bg-gray-700 dark:divide-gray-600`}
                        >
                            <ul className="py-2 text-sm text-left font14-res-300 text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                <li>
                                    <button className="block px-4 py-2 w-full text-left hover:bg-gray-100 text-gray-700 dark:hover:bg-gray-600 hover:text-purple-600 dark:hover:text-white">
                                        Lihat Detail
                                    </button>
                                </li>
                                <li>
                                    <button className="block px-4 py-2 w-full text-left hover:bg-gray-100 text-gray-700 dark:hover:bg-gray-600 hover:text-purple-600 dark:hover:text-white">
                                        Keluarkan
                                    </button>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};