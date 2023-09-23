import {Link, useNavigate, useParams} from "react-router-dom";

export const NavbarEditResourceEmptyComponent = () => {

    const navigate = useNavigate();

    const navigateBack = () => {
        navigate(-1)
    };

    const { id, class_id, slug } = useParams();

    const classname = slug.replace(/_/g, ' ');

    return(
        <>
            <nav className="w-full fixed  bg-white" style={{  zIndex:"44" , minWidth:"360px" , borderBottom:"1px solid #E5E3E9"}}>
                <header className="sm:w-10/12 w-11/12 py-1  mx-auto">
                    <div className="flex justify-between gap-4">
                        <div className="flex gap-4">
                            <button className="my-auto" onClick={navigateBack}>
                                <div style={{ height:"24px"}}>
                                    <img className="h-full" src="/assets/arrow-back.svg"/>
                                </div>
                            </button>
                            <div className="my-2 text-left" >
                                <h4 className="font16-res-400 bg-gray-200 py-2 mb-2 w-40 animate-pulse"></h4>
                                <p className="font14-res-300 text-purple-700 bg-gray-200 w-36 py-1 mt-3 mb-1 animate-pulse" ></p>
                            </div>
                        </div>
                    </div>
                </header>
            </nav>
        </>
    )
}