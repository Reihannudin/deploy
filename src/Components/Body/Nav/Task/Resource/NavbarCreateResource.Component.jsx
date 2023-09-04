
import {Link, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

export const NavbarCreateResourceComponent= () => {
    const navigate = useNavigate();

    const navigateBack = () => {
        navigate(-1)
    };

    const { id, slug } = useParams();

    const classname = slug.replace(/_/g, ' ');


    return(
        <>
            <nav className="w-full fixed  bg-white" style={{  zIndex:"44" , minWidth:"360px" , borderBottom:"1px solid #E5E3E9"}}>
                <header className="sm:w-10/12 w-11/12  mx-auto">
                <div className="flex py-0 justify-between gap-4">
                        <div className="flex gap-4">
                            <Link className="my-auto" to={`/view/my/class/${id}/${slug}`}>
                                <div style={{ height:"24px"}}>
                                    <img className="h-full" src="/assets/arrow-back.svg"/>
                                </div>
                            </Link>
                            <div className="my-2 text-left" >
                                <h4 className="font16-res-400" >Membuat Resource</h4>
                                <p className="font14-res-300" >{classname}</p>
                            </div>
                        </div>
                    </div>
                </header>
            </nav>
        </>
    )
}