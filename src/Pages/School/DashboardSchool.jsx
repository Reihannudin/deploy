import {Link} from "react-router-dom";
import {NavbarSchoolComponent} from "../../Components/Body/Nav/School/NavbarSchool.Component";
import {SidebarSchoolComponent} from "../../Components/Body/Nav/School/SidebarSchool.Component";
import School from "./School";
import {useState} from "react";


function DashboardSchool(){

    const [isMenuHidden , setIsMenuHidden] = useState(true);
    const toggleMenu = () => {
        setIsMenuHidden((prevHidden) => !prevHidden);
    }

    return(
        <>
            <div className={"w-full "}>
                <div className={"w-full mx-auto"}>
                    <div className={"w-full flex justify-between "}>
                        {isMenuHidden === false ? (
                            <div className={"relative"} style={{ width:"20%"}}>
                                {/*xl:w-3/12 lg:w-3/12 md:w-3/12 sm:w-4/12 w-5/12 */}
                                <div className={"w-full absolute"} >
                                    <SidebarSchoolComponent isMenuHidden={isMenuHidden} setIsMenuHidden={setIsMenuHidden} toggleMenu={toggleMenu} />
                                </div>
                            </div>
                        ) : (
                            <div className={"relative"} style={{ width:"6%"}}>
                                <div className={"w-full absolute"}>
                                    <SidebarSchoolComponent isMenuHidden={isMenuHidden} setIsMenuHidden={setIsMenuHidden} toggleMenu={toggleMenu} />
                                </div>
                            </div>
                        )}
                        <div  className={"w-9/12"}>
                            <div  className={""}>
                                <div  className={""}>
                                  <NavbarSchoolComponent />
                                </div>
                                <div  className={""}>
                                    <div  className={""}>
                                        <div  className={""}>
                                            <School />
                                        </div>
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