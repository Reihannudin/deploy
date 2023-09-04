import {NavbarComponent} from "../Component/Body/Nav/Navbar.Component";
import {FeedFormComponent} from "../Component/Feed/FeedForm.Component";
import {FeedLikedComponent} from "../Component/Feed/FeedLiked.Component";


function FeedLiked (){
    return(
        <>
            <div className="w-full" style={{ background:"#FFFFFF"}}>
                <NavbarComponent />
                <div className="w-full mx-0 px-0 h-full " style={{ background:"#FFFFFF"}}>
                    <FeedLikedComponent />
                </div>
            </div>
        </>
    )
}

export default FeedLiked