import {NavbarComponent} from "../Component/Body/Nav/Navbar.Component";
import {FeedNotificationComponent} from "../Component/Feed/FeedNotification.Component";

function FeedNotification (){
    return(
        <>
            <div className="w-full" style={{ background:"#FFFFFF"}}>
                <NavbarComponent />
                <div className="w-full mx-0 px-0 h-full " style={{ background:"#FFFFFF"}}>
                    <FeedNotificationComponent />
                </div>
            </div>
        </>
    )
}

export default FeedNotification