import {Link, useNavigate, useParams} from "react-router-dom";


export const NavbarDetailResourceComponent = (props) => {
    const {id , slug} = useParams();

    const classname = slug.replace(/_/g, ' ').toUpperCase();

    const navigate = useNavigate();

    const navigateBack = () => {
        navigate(-1);
    };

    return(
        <>
            <>
                <nav className="w-full fixed  bg-white" style={{  zIndex:"44" , minWidth:"300px" , borderBottom:"1px solid #E5E3E9"}}>
                    <header className="md:w-10/12 w-11/12  mx-auto">
                        <div className="flex  gap-4">
                            <div className="flex gap-4">
                                <button className="my-auto" onClick={navigateBack()}>
                                    <div style={{ height:"24px"}}>
                                        <img className="h-full" src="/assets/arrow-back.svg"/>
                                    </div>
                                </button>
                                <div className="my-2 text-left" >
                                    <h4 className="font16-res-400">{props.name}</h4>
                                    <p className="font14-res-300">{classname}</p>
                                </div>
                            </div>
                        </div>
                    </header>
                </nav>
            </>
        </>
    )
}