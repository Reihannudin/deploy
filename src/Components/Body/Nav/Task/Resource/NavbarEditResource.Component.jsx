import {Link, useNavigate, useParams} from "react-router-dom";

export const NavbarEditResourceComponent = (props) => {

    const navigate = useNavigate();

    const navigateBack = () => {
        navigate(-1)
    };

    const { id, class_id, slug } = useParams();

    const classname = slug.replace(/_/g, ' ').toUpperCase();


    return(
        <>
            <nav className="w-full fixed  bg-white" style={{  zIndex:"44" , minWidth:"360px" , borderBottom:"1px solid #E5E3E9"}}>
                    <header className="sm:w-10/12 w-11/12  mx-auto">
                    <div className="flex justify-between gap-4">
                        <div className="flex gap-4">
                            <Link className="my-auto" to={`http://localhost:3000/view/my/class/${class_id}/${slug}`}>
                                <div style={{ height:"24px"}}>
                                    <img className="h-full" src="/assets/arrow-back.svg"/>
                                </div>
                            </Link>
                            <div className="my-2 text-left" >
                                <h4 className="font16-res-400">Mengedit Resource</h4>
                                <p className="font14-res-300">{props.name}</p>
                            </div>
                        </div>
                    </div>
                </header>
            </nav>
        </>
    )
}