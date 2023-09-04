import {NavbarBackComponent} from "../Component/Body/Nav/NavbarBack.Component";
import {DetailFeedComponent} from "../Component/Feed/DetailFeed.Component";
import {NavbarComponent} from "../Component/Body/Nav/Navbar.Component";
import {FeedComponent} from "../Component/Feed/Feed.Component";
import {FeedSearchComponent} from "../Component/Feed/FeedSearch.Component";

function FeedSearch (){
    return(
        <>
            <div className="w-full" style={{ background:"#FFFFFF"}}>
                <NavbarComponent />
                <div className="w-full mx-0 px-0 h-full " style={{ background:"#FFFFFF"}}>
                    <FeedSearchComponent />
                </div>
            </div>
        </>
    )
}

export default FeedSearch