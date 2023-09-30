import React, {useState} from "react";
import api from "../../../Config/api";
import {useNavigate} from "react-router-dom";
import {OutAlertComponent} from "../../Helper/OutAlert.Component";

export const StudentCardComponent = (props) => {
    const [isDropdownMenu, setIsDropdownMenu] = useState(false);

    const toggleDropdownMenu = () => {
        setIsDropdownMenu((prevHidden) => !prevHidden);
    };

    const navigate = useNavigate();
    const [deleteClasses, setDeleteClasses] = useState([]);
    const [isDataDeleteClass, setIsDataDeleteClass] = useState(false);
    const [isDeleteClass, setIsDeleteClass] = useState(true);
    const [redirectPath, setRedirectPath] = useState("/create/class");
    const [isLoading, setIsLoading] = useState(false);
    const [error , setError ] = useState('')
    const [showAlertDelete  , setShowAlertDelete] = useState(false);

    const handleOutPeopleClass = async (event) => {
        event.preventDefault();

        api
            .delete(`/out/class/${props.slug}/user/${props.id}`)
            .then((response) => {
                setIsLoading(false); // Stop loading indicator
                if (response.data.status === 201 && response.data.message === "Berhasil mengeluarkan peserta") {
                    let redirectUrl = response.data.redirect_path;
                    setRedirectPath(redirectUrl);
                    navigate(redirectUrl);
                    window.location.reload(); // Refresh the page
                }

                else if (response.data.status === 406) {
                    if (response.data.errors === "Seperti nya user atau kelas ini tidak ada") {
                        let redirectUrl = response.data.redirect_path;
                        setRedirectPath(redirectUrl);
                        setError(response.data.errors);
                        navigate(redirectUrl);
                    }  else if (response.data.errors === "Kelas tidak ditemukan") {
                        let redirectUrl = response.data.redirect_path;
                        setRedirectPath(redirectUrl);
                        setError(response.data.errors);
                        navigate(redirectUrl);
                    }
                }


            })
            .catch((error) => {
                const { errors } = error.response.data;
                setError(errors?.errors?.[0] || '');
            });

    };


    return (
        <div className="w-full md:w-11/12  md:ms-5 pt-3 pb-2" style={{ borderBottom: "1px solid #ebebeb" }}>
            <div className="flex justify-between">
                <div className="flex gap-4">
                    <div style={{ height: "40px" }}>
                        <img className="h-full radius-100" src={`${props.image ? props.image : "/assets/default-profile.svg"}`} alt="Profile" />
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
                                    <button
                                        onClick={() => setShowAlertDelete(true)}
                                        className="block px-4 py-2 w-full text-left hover:bg-gray-100 text-gray-700 dark:hover:bg-gray-600 hover:text-purple-600 dark:hover:text-white">
                                        Keluarkan
                                    </button>
                                    {showAlertDelete && (
                                        <div id="drop-action" className="fixed inset-0 flex items-center justify-center">
                                            <button
                                                onClick={() => setShowAlertDelete(false)} // Close the alert when clicking the backdrop
                                                className="bg-gray-500 bg-opacity-30 w-full h-full absolute top-0 left-0"
                                                style={{ zIndex: "300" }}
                                            ></button>

                                            <OutAlertComponent
                                                type={"mengeluarkan Peserta"}
                                                name={props.name}
                                                message={"Apakah anda yakin akan ingin mengeluarkan"}
                                                onClose={() => setShowAlertDelete(false)} // Close the alert when using the custom alert's close button
                                                onSubmit={(event) => handleOutPeopleClass(event)}
                                            />

                                        </div>
                                    )}
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};