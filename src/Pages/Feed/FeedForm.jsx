import {NavbarComponent} from "../../Components/Body/Nav/Navbar.Component";
import {FeedForumComponent} from "../../Components/Feed/FeedForum.Component";

function FeedForm ({user , isFetching , isDataFetched}){


    return(
        <>
            <div className="w-full" style={{ background:"#FFFFFF"}}>
                <NavbarComponent user={user}/>
                <div className="w-full mx-0 px-0 h-full " style={{ background:"#FFFFFF"}}>
                    <FeedForumComponent/>
                </div>
            </div>
        </>
    )
}

export default FeedForm