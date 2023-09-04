import {Link, useNavigate} from "react-router-dom";


export const NavbarJoinClassComponent = () => {

    const navigate = useNavigate();

    const navigateBack = () => {
        navigate(-1)
    };

    return(
        <>
            <>
                <nav className="w-full fixed py-0.5 bg-white" style={{  zIndex:"44" , minWidth:"300px" ,   borderBottom:"1px solid #E5E3E9"}}>
                    <header className=" xl:w-9/12 sm:w-10/12 w-11/12    mx-auto">
                        <div className="flex py-0 gap-4">
                            <div className="flex gap-4">
                                <Link className="my-auto" to={'/my/class'}>
                                    <div style={{ height:"24px"}}>
                                        <img className="h-full" src="/assets/arrow-back.svg"/>
                                    </div>
                                </Link>
                                <div className="my-2 text-left" >
                                    <h4 className="my-2 font16-res-400" >bergabung kedalam Kelas</h4>
                                </div>
                            </div>
                        </div>
                    </header>
                </nav>
            </>
        </>
    )
}