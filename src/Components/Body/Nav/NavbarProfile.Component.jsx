import {useNavigate} from "react-router-dom";

export const NavbarProfileComponent = (props) => {

    const navigate = useNavigate();

    const navigateBack = () => {
        navigate(-1)
    };

    return(
        <>
            <nav className="w-full fixed  bg-white" style={{  zIndex:"44" , minWidth:"360px" , borderBottom:"1px solid #E5E3E9"}}>
                <header className="xl:w-10/12 lg:w-11/12 md:w-10/12 w-11/12 mx-auto">
                    <div className="flex py-1 justify-between gap-4">
                        <div className="flex gap-4">
                            <button onClick={navigateBack}>
                                <div style={{ height:"24px"}}>
                                    <img className="h-full" src="/assets/arrow-back.svg"/>
                                </div>
                            </button>
                            <div className="my-2 text-left" >
                                <h4 className="font15-res-300">{props.name}</h4>
                                <p className="font14-res-300">Jumlah Tweet</p>
                            </div>
                        </div>
                    </div>
                </header>
            </nav>
        </>
    )
}