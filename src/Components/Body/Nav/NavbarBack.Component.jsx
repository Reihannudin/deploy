import {useNavigate} from "react-router-dom";

export const NavbarBackComponent = () => {
    const navigate = useNavigate();

    const navigateBack = () => {
        navigate(-1)
    };

    return(
        <>
            <nav className="w-full fixed  bg-white" style={{  zIndex:"44" , minWidth:"360px" ,   borderBottom:"1px solid #E5E3E9"}}>
                <header className="w-10/12  mx-auto">
                    <div className="flex py-1 gap-4">
                        <div className="flex gap-4">
                            <button onClick={navigateBack}>
                                <div style={{ height:"24px"}}>
                                    <img className="h-full" src="/assets/arrow-back.svg"/>
                                </div>
                            </button>
                            <div className="my-2 text-left" >
                                <h4 className="my-2 font18-res-300" style={{  fontWeight:"550"}}>Feed</h4>
                            </div>
                        </div>
                    </div>
                </header>
            </nav>
        </>
    )
}