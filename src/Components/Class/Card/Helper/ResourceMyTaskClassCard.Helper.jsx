import React, {useRef, useState} from "react";
import api from "../../../../Config/api";
import {Link} from "react-router-dom";

export const ResourceMyTaskClassCardHelper = ({
       id , slug ,  navigate,
       resourceId , resourceStatus , resourceEndTime , resourceDate , resourceName , resourcePostTime,
       isDropdownMenu ,setIsDropdownMenu  , copyUrlResource , inputRefResource , urlResource
}) => {

    let token = localStorage.getItem('auth_token');
    const [error, setError] = useState("");
    const truncatedName =  resourceName.length > 24 ? `${resourceName.slice(0, 23)}...` : resourceName;

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

    const handleDeleteResource = async (event) => {
        event.preventDefault();

        api
            .delete(`/${slug}/${id}/delete/resource/${resourceId}` , {
                "Content-Type" : "multipart/form-data" ,
                "Authorization" : "Bearer " + token,
            })
            .then((response) => {
                setIsLoading(false);
                if (response.data.status === 201) {
                    navigate(`/view/my/class/${id}/${slug}`);
                    window.location.reload(); // Refresh the page
                }
                else if (response.data.status === 406) {
                    if (response.data.errors.message === "Resource tidak ditemukan") {
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

    const handleAlertResource = () => {
        setShowAlertDelete(true)
        setIsDropdownMenu(false)
        inputRefClassDelete.current.select();
        document.execCommand('delete');
    };


    return(
      <>
          <div>
              <div className="bg-white border py-3 border-b-0 border-radius-4 px-4">
                  <div className="flex relative">
                      <div className="p-2 border-radius-4 me-2" style={{ background: "#A568E6", height: "40px" , width:"40px" }}>
                          <div className="my-auto" style={{ height: "24px" ,  width:"40px" }}>
                              <img className="h-full" src="/assets/resource-sm-icon.svg" alt="" />
                          </div>
                      </div>
                      <div className="w-10/12 text-left mx-3">
                          <h2 className="font16-res-300">{window.innerWidth >= 768 ? truncatedName : resourceName}</h2>
                          <p className="font14-res-300" style={{ color: "#5d5959" }}>{resourcePostTime}</p>
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
                      <div id="dropdown_menu_resource" className={`z-10 ${isDropdownMenu ? 'hidden' : ''} absolute right-0 top-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}>
                          <ul className="py-2 font16-res-300 text-sm text-left text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                              <li>
                                  <div>
                                      <input ref={inputRefResource} defaultValue={urlResource} style={{ position: 'fixed', top: '-9999px' }} />
                                      <button onClick={copyUrlResource} className="block w-full text-left px-4 py-2 font16-res-300 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-purple-600 dark:hover:text-white">
                                          Copy Link
                                      </button>
                                  </div>
                              </li>
                              <li>
                                  <div>
                                      <Link to={`/class/${slug}/${id}/edit/resource/${resourceId}`} className="block px-4 py-2 font16-res-300 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-purple-600 dark:hover:text-white">Edit Resource</Link>
                                  </div>
                              </li>
                              <li>
                                  <div>
                                      <button onClick={handleDeleteResource} className="block px-4 w-full text-left py-2 font16-res-300 hover:bg-gray-100 dark:hover:bg-red-600 hover:text-red-600 dark:hover:text-white">Hapus</button>
                                  </div>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
              <div className="bg-white border border-radius-4 px-4 py-2">
                  <Link to={`/view/${slug}/${id}/my/resource/${resourceId}`}>
                      <div className="flex justify-between w-11/12 gap-4 ms-auto">
                          {resourceStatus === "selesai" ? (
                              <div>
                                  <div className="w-full text-green-600 bg-green-200 px-4 border-radius-4">
                                      <p className="font14-res-300">{resourceStatus}</p>
                                  </div>
                              </div>
                          ) : resourceStatus === "melewatkan" ? (
                              <div>
                                  <div className="w-full text-red-600 bg-red-200 px-2 border-radius-4">
                                      <p className="font14-res-300">{resourceStatus}</p>
                                  </div>
                              </div>
                          ) : (
                              <div>
                                  <div className="w-full text-yellow-600 bg-yellow-200 px-4 border-radius-4">
                                      <p className="font14-res-300">{resourceStatus}</p>
                                  </div>
                              </div>
                          )}
                          <div className="flex gap-2 mx-5">
                              <div className="mt-0.5 font14-res-300">
                                  <div style={{ height:"18px"}}>
                                      <img src="/assets/arrows-right.svg" className="w-full h-full" />
                                  </div>
                              </div>
                          </div>
                      </div>
                  </Link>
              </div>
          </div>

      </>
    );
}