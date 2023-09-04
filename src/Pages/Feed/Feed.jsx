import {NavbarComponent} from "../../Components/Body/Nav/Navbar.Component";
import {FeedComponent} from "../../Components/Feed/Feed.Component";

function Feed(){
    return(
        <div className="w-full" style={{ background:"#FFFFFF"}}>
            <NavbarComponent />
            <div className="w-full mx-0 px-0 h-full " style={{ background:"#FFFFFF"}}>
                <FeedComponent />
            </div>
        </div>
    )
}

export default Feed