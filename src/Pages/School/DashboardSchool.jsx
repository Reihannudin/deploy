import {Link} from "react-router-dom";
import {NavbarSchoolComponent} from "../../Components/Body/Nav/School/NavbarSchool.Component";
import {SidebarSchoolComponent} from "../../Components/Body/Nav/School/SidebarSchool.Component";
import School from "./School";
import {useState} from "react";


function DashboardSchool({user , isFetching , isDataFetched}){

    const [isMenuHidden , setIsMenuHidden] = useState(true);
    const toggleMenu = () => {
        setIsMenuHidden((prevHidden) => !prevHidden);
    }

    return(
        <>
            <div className={"w-full mx-auto"} style={{ minWidth:"300px" , maxWidth:"1500px"}}>
                <div className={"w-full mx-auto"}>
                    <div className={"w-full flex "}>
                        {isMenuHidden === false ? (
                            <div className={"relative w-sidebar-lg"} >
                                {/*xl:w-3/12 lg:w-3/12 md:w-3/12 sm:w-4/12 w-5/12 */}
                                <div className={"w-full absolute"} >
                                    <SidebarSchoolComponent isMenuHidden={isMenuHidden} setIsMenuHidden={setIsMenuHidden} toggleMenu={toggleMenu} />
                                </div>
                            </div>
                        ) : (
                            <div className={"relative w-sidebar-sm"}>
                                <div className={"w-full absolute"}>
                                    <SidebarSchoolComponent isMenuHidden={isMenuHidden} setIsMenuHidden={setIsMenuHidden} toggleMenu={toggleMenu} />
                                </div>
                            </div>
                        )}
                        <div  className={"w-full"}>
                            <div  className={"w-full relative"}>
                                <div  className={"w-full fixed top-0"}>
                                  <NavbarSchoolComponent user={user} isFetching={isFetching} isDataFetched={isDataFetched}/>
                                </div>
                                <div  className={"w-full  pt-24 relative"}>
                                    <div  className={"w-full relative"}>
                                        <School />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default DashboardSchool