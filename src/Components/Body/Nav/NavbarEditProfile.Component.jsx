import {useNavigate} from "react-router-dom";
import React from "react";

export const NavbarEditProfileComponent = ({username , isFetching ,isDataFetched}) => {

    const navigate = useNavigate();

    const navigateBack = () => {
        navigate(-1)
    };

    console.log(isFetching)
    console.log(isDataFetched)


    return(
        <>
            <nav className="w-full fixed  bg-white" style={{  zIndex:"44" , minWidth:"360px" , borderBottom:"1px solid #E5E3E9"}}>
                <header className="md:w-10/12 w-11/12 mx-auto">
                    <div className="flex py-1 justify-between gap-4">
                        <div className="flex gap-4">
                            <button onClick={navigateBack}>
                                <div style={{ height:"24px"}}>
                                    <img className="h-full" src="/assets/arrow-back.svg"/>
                                </div>
                            </button>
                            <div className="my-2 text-left" >
                                {isFetching? (
                                    <div className={"my-1"}>
                                        <h4 className="font16-res-400 mb-2   w-44 border-radius-4 bg-gray-200 py-2 animate-pulse"></h4>
                                        <p className="font14-res-300  w-44 border-radius-4 bg-gray-200 py-1 animate-pulse" ></p>
                                    </div>
                                ) : !isDataFetched ? (
                                    <div className={"my-1"}>
                                        <h4 className="font16-res-400 mb-2   w-44 border-radius-4 bg-gray-200 py-2 animate-pulse"></h4>
                                        <p className="font14-res-300  w-44 border-radius-4 bg-gray-200 py-1 animate-pulse" ></p>
                                    </div>
                                ) :(
                                        <div>
                                            <h4 className="font16-res-400">Edit profile</h4>
                                            <p className="font14-res-300 text-purple-700" >{username}</p>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </header>
            </nav>
        </>
    )
}