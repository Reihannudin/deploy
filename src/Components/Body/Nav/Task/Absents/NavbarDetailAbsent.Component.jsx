import {Link, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

export const NavbarDetailAbsentComponent = (props) => {

    const navigate = useNavigate();

    const [isMenuHidden , setIsMenuHidden] = useState(true);

    const { id, slug } = useParams();

    const classname = slug.replace(/_/g, ' ');

    const toggleMenu = () => {
        setIsMenuHidden((prevHidden) => !prevHidden);
    }

    const navigateBack = () => {
        navigate(-1);
    };

    return(
        <>
            <nav className="w-full fixed  bg-white" style={{  zIndex:"44" , minWidth:"300px" , borderBottom:"1px solid #E5E3E9"}}>
            <header className="md:w-10/12  w-11/12 mx-auto">
            <div className="flex py-0  justify-between gap-4">
                <div className="flex gap-4">
                    <button onClick={navigateBack} className="my-auto" >
                        <div style={{ height:"24px"}}>
                            <img className="h-full" src="/assets/arrow-back.svg"/>
                        </div>
                    </button>
                    <div className="my-2 text-left" >
                        <h4 className="font16-res-400" >{props.name}</h4>
                        <p className="font14-res-300" >{classname}</p>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="   w-full lg:flex hidden my-auto  lg:items-center lg:w-auto" id="menu">
                        <div className="flex gap-4 my-auto ">
                            <div style={{ fontSize:"16px"}} className="font-medium font16-res-300 mt-1">
                                <ul  className="inline-flex hover:text-purple-600 text-purple-400   w-full mx-auto   px-1 pb-1 ">
                                    <li className=" px-4 cursor-pointer font16-300  hover:text-purple-600 font-normal py-2 -mb-px">
                                        <Link to={`/view/${props.slug}/detail/absent/${props.id}`}>Absent</Link>
                                    </li>
                                    <li className="px-4  cursor-pointer font16-300  hover:text-purple-600  font-normal py-2 ">
                                        <Link to={`/view/${props.slug}/detail/absent/${props.id}/classmate`}>Classmate</Link>
                                    </li>
                                    <li className="px-4  cursor-pointer font16-400 hover:text-purple-600 hidden font-normal py-2 ">
                                        <a href="#fourth">Tab 4</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="flex lg:hidden  ">
                        <button id="menu-button" className="md:mx-4 mx-0" onClick={toggleMenu}>
                            {isMenuHidden === false ? (

                                <div className="h-6 w-6 me-2 cursor-pointer lg:hidden block" style={{ height:"26px"}} >
                                    <img className="h-full w-full" src="/assets/icon-close.svg"/>
                                </div>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    id="menu-button"
                                    className="h-6 w-6 me-2 cursor-pointer lg:hidden block"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path

                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

            </div>
        </header>
                <div  id="menu" className={`h-full menu ${isMenuHidden ? 'hidden' : ''}`} >
                    <div className=" h-full w-full bg-white border-b ">
                        <div className="lg:hidden lg:w-full relative flex items-center w-auto sm:flex sm:items-center sm:w-auto md:flex md:items-center md:w-auto">
                            <ul
                                className="
                                         pt-4
                                          text-base text-gray-700
                                          lg:flex
                                          pb-4
                                       w-full
                                          lg:justify-between
                                          lg:pt-0"
                            >
                                <li className="pt-8 pb-4">
                                    <Link  className="  text-purple-400  cursor-pointer hover:text-purple-600" to={`/view/${props.slug}/detail/absent/${props.id}`}>Absent
                                        <div className="w-1/12 mx-auto h-1 cursor-pointer hover:bg-purple-400  block hover:scale-x-50 transform origin-center  transition-transform duration-300">
                                        </div>
                                    </Link>
                                </li>
                                <li className="py-4">
                                    <Link  className="  text-purple-400  cursor-pointer hover:text-purple-600" to={`/view/${props.slug}/detail/absent/${props.id}/classmate`}>Classmate
                                        <div className="w-1/12 mx-auto h-1 cursor-pointer hover:bg-purple-400  block hover:scale-x-50 transform origin-center  transition-transform duration-300">
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
