import {NavbarComponent} from "../../Components/Body/Nav/Navbar.Component";
import {MyClassComponent} from "../../Components/Class/MyClass.Component";

function MyClass (){
    return(
        <>
            <div className="w-full" style={{ background:"#FFFFFF"}}>
                <NavbarComponent />
                <div className="w-full mx-0 px-0 h-full " style={{ background:"#FFFFFF"}}>
                    <MyClassComponent />
                </div>
            </div>
        </>
    )
}


export default MyClass