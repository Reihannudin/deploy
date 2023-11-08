import {NavbarComponent} from "../../Components/Body/Nav/Navbar.Component";
import {MainSchoolComponent} from "../../Components/School/MainSchool.Component";

function MainSchool ({user , isFetching , isDataFetched}){

    return(
        <>
            <div className="w-full mx-auto" style={{ background:"#FFFFFF" , minWidth:"280px"}}>
                <NavbarComponent user={user} isFetching={isFetching} isDataFetched={isDataFetched} />
                <div className="w-full relative mx-0 px-0 h-full " style={{ background:"#FFFFFF"}}>
                    <MainSchoolComponent user={user} />
                </div>
            </div>
        </>
    )
}

export default MainSchool