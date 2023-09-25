import {Link, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

export const NavbarEditClassComponent = (props) => {

    const navigate = useNavigate();

    const navigateBack = () => {
        navigate(-1)
    };

    const { id, slug } = useParams();


    const classname = slug.replace(/_/g, ' ');


    return(
        <>
            <nav className="w-full fixed  bg-white" style={{  zIndex:"44" , minWidth: "280px", borderBottom:"1px solid #E5E3E9"}}>
                <header className="sm:w-10/12 lg:w-9/12 xl:w-10/12 w-11/12 py-1  mx-auto">
                    <div className="flex py-0 justify-between gap-4">
                        <div className="flex gap-4">
                            <button onClick={navigateBack}>
                                <div className="h-icon-back">
                                    <img className="h-full" src="/assets/arrow-back.svg"/>
                                </div>
                            </button>
                            <div className="my-2-cus-back text-left">
                                <h4 className="font16-label-res-400">Mengedit class</h4>
                                <p  className=" font14-res-300 text-purple-600">{classname}</p>
                            </div>
                        </div>
                    </div>
                </header>
            </nav>
        </>
    )
}