import {NavbarComponent} from "../Component/Body/Nav/Navbar.Component";
import {FeedNotificationComponent} from "../Component/Feed/FeedNotification.Component";
import {FeedFormComponent} from "../Component/Feed/FeedForm.Component";

function FeedForm (){
    return(
        <>
            <div className="w-full" style={{ background:"#FFFFFF"}}>
                <NavbarComponent />
                <div className="w-full mx-0 px-0 h-full " style={{ background:"#FFFFFF"}}>
                    <FeedFormComponent />
                </div>
            </div>
        </>
    )
}

export default FeedForm