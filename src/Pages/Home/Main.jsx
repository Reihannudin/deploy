import {NavbarComponent} from "../../Components/Body/Nav/Navbar.Component";
import {MainComponent} from "../../Components/Home/Main.Component";
import {MainNavComponent} from "../../Components/Body/MainNav/MainNav.Component";

function Main(){
    return(
        <>
            <div className="w-full mx-auto" style={{ background:"#FFFFFF"}}>
                <NavbarComponent />
                <div className="w-full relative mx-0 px-0 h-full " style={{ background:"#FFFFFF"}}>
                    <MainComponent />
                </div>
            </div>
        </>
    )
}

export default Main