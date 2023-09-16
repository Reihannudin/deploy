import React, {useRef, useState} from "react";
import {Link} from "react-router-dom";
import {DeleteAlertComponent} from "../../../Helper/DeleteAlert.Component";
import api from "../../../../Config/api";


export const AbsentMyTaskClassCardHelper = ({
      id , slug ,  navigate,
      absentId , absentStatus , absentEndTime , absentDate , absentName , absentPostTime,
      isDropdownMenu ,setIsDropdownMenu  , copyUrlAbsent , inputRefAbsent , urlAbsent}) => {

    let token = localStorage.getItem('auth_token');
    const [error, setError] = useState("");
    const truncatedName = absentName.length > 24 ? `${absentName.slice(0, 23)}...` : absentName;

    const [redirectPath, setRedirectPath] = useState("/");
    const [isLoading, setIsLoading] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    const handleDropdownMenu = () => {
        setIsDropdownMenu(true)
    }

    const toggleDropdownMenu = () => {
        setIsDropdownMenu((prevHidden) => ! prevHidden);
    }

    const [showAlertDelete  , setShowAlertDelete] = useState(false);
    const inputRefClassDelete = useRef(null);

    const handleDeleteAbsent = async (event) => {
        event.preventDefault();

        api
            .delete(`/${slug}/${id}/delete/absent/${absentId}` , {
                "Content-Type" : "multipart/form-data" ,
                "Authorization" : "Bearer " + token,
            })
            .then((response) => {
                setIsLoading(false);
                if (response.data.status === 201) {
                    // let redirectUrl = response.data.redirect_path;
                    // setRedirectPath(redirectUrl);
                    navigate(`/view/my/class/${id}/${slug}`);
                    window.location.reload(); // Refresh the page
                }
                else if (response.data.status === 406) {
                    if (response.data.errors.message === "Absent tidak ditemukan") {
                        let redirectUrl = response.data.redirect_path;
                        setRedirectPath(redirectUrl);
                        setError(response.data.errors.message);
                        navigate(redirectUrl);
                    } else  if (response.data.errors.message === "Anda Bukan Pengajar di kelas ini") {
                        let redirectUrl = response.data.redirect_path;
                        setRedirectPath(redirectUrl);
                        setError(response.data.errors.message);
                        navigate(redirectUrl);
                    } else  if (response.data.errors.message === "Pengguna tidak ditemukan") {
                        let redirectUrl = response.data.redirect_path;
                        setRedirectPath(redirectUrl);
                        setError(response.data.errors.message);
                        navigate(redirectUrl);
                    }
                }

            })
            .catch((error) => {
                const { errors } = error.response.data;
                setError(errors?.errors?.[0] || '');
            });

    };

    const handleAlertClass = () => {
        setShowAlertDelete(true)
        setIsDropdownMenu(false)
        inputRefClassDelete.current.select();
        document.execCommand('delete');
    };

    return(
        <>
            <div>
                <div className="bg-white border py-3 border-b-0 border-radius-4 px-4">
                    <div className="flex ">
                        <div className="p-2 border-radius-4 me-2" style={{ background: "#A568E6", height: "40px" , width:"40px" }}>
                            <div className="my-auto" style={{ height: "24px" ,  width:"40px" }}>
                                <img className="h-full" src="/assets/absent-sm-icon.svg" alt="" />
                            </div>
                        </div>
                        <div className="w-10/12 text-left mx-3">
                            <h2 className="font16-res-300">{window.innerWidth >= 768 ? truncatedName : absentName}</h2>
                            <p className="font14-res-300" style={{ color: "#5d5959" }}>{absentPostTime}</p>
                        </div>
                        <div className="md:w-1/12 w-2/12 my-auto">
                            <button onClick={toggleDropdownMenu} className="my-auto">
                                <div className="px-1 py-2 bg-white hover:px-1 hover:bg-gray-100 rounded-full">
                                    <div className="my-auto mx-1" style={{ height: "24px" }}>
                                        <img className="h-full w-full" src="/assets/menu-icon.svg" alt="" />
                                    </div>
                                </div>
                            </button>
                        </div>
                        {isDropdownMenu ? null : (
                            <div className="relative">
                                <div
                                    id="dropdown_menu_absent"
                                    className="z-10 fixed inset-0"
                                    // onClick={() => setShowAlertDelete(true)}
                                    onClick={handleDropdownMenu}
                                >
                                    <div className="bg-white bg-opacity-0 w-full h-full z-30 absolute right-0 bottom-0"></div>
                                </div>
                                <div className="absolute right-0 md:right-16 xl:right-28 z-40 top-12 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-36 md:w-44 dark:bg-gray-700 dark:divide-gray-600">
                                    <ul className="py-2 text-sm text-left text-gray-700 dark:text-gray-400">
                                        <li className={"sm:py-1"}>
                                            <input ref={inputRefAbsent} defaultValue={urlAbsent} style={{ position: 'fixed', top: '-9999px' }} />
                                            <button onClick={copyUrlAbsent} className="block w-full font14-res-300 text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-purple-600 dark:hover:text-white">
                                                Copy Link
                                            </button>
                                        </li>
                                        <li className={"sm:py-1"}>
                                            <Link to={`/class/${slug}/${id}/edit/absent/${absentId}`} className="block px-4 py-1.5 lg:py-2  font14-res-300 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-purple-600  dark:hover:text-white">Edit Absent</Link>
                                        </li>
                                        <li className={"sm:py-1"}>
                                            <button
                                                onClick={() => setShowAlertDelete(true)}
                                                className="block w-full text-left px-4 py-1.5 lg:py-2  font14-res-300 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-purple-600  dark:hover:text-white">Hapus
                                            </button>
                                            {/*<button onClick={handleDeleteAbsent} */}
                                            {/*        className="block px-4 py-1.5 lg:py-2  font14-res-300 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-purple-600  dark:hover:text-white">Hapus*/}
                                            {/*</button>*/}

                                        </li>
                                        {showAlertDelete && (
                                            <div id="drop-action_absent" className="fixed inset-0 flex items-center justify-center">
                                                <button
                                                    onClick={() => setShowAlertDelete(false)} // Close the alert when clicking the backdrop
                                                    className="bg-gray-500 bg-opacity-30 w-full h-full absolute top-0 left-0"
                                                    style={{ zIndex: "300" }}
                                                ></button>

                                                <DeleteAlertComponent
                                                    type={"Absensi"}
                                                    name={absentName}
                                                    onClose={() => setShowAlertDelete(false)} // Close the alert when using the custom alert's close button
                                                    onSubmit={(event) => handleDeleteAbsent(event)}
                                                />

                                            </div>
                                        )}
                                    </ul>
                                </div>

                            </div>
                        )}
                    </div>
                </div>
                <div className="bg-white border border-radius-4 px-4 py-2">
                    <Link to={`/view/${slug}/${id}/my/absent/${absentId}`}>
                        <div className="flex justify-between w-11/12 gap-4 ms-auto">
                            {absentStatus === "selesai" || absentStatus === "hadir" ? (
                                <div>
                                    <div className="w-full text-green-600 bg-green-200 px-4 border-radius-4">
                                        <p className="font14-res-300">{absentStatus}</p>
                                    </div>
                                </div>
                            ) : absentStatus === "melewatkan" ? (
                                <div>
                                    <div className="w-full text-red-600 bg-red-200 px-2 border-radius-4">
                                        <p className="font14-res-300">{absentStatus}</p>
                                    </div>
                                </div>
                            ) : (
                                <div>
                                    <div className="w-full text-yellow-600 bg-yellow-200 px-4 border-radius-4">
                                        <p className="font14-res-300">{absentStatus}</p>
                                    </div>
                                </div>
                            )}
                            <div className="flex gap-2 mx-6">
                                <div className="mt-0.5 font14-res-300">
                                    <p className="my-auto text-gray-500">{absentEndTime} - {absentDate}</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>

        </>
    )
}