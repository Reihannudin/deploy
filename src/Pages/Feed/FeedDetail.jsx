import {NavbarComponent} from "../../Components/Body/Nav/Navbar.Component";
import {FeedComponent} from "../../Components/Feed/Feed.Component";
import {DetailFeedComponent, DetailFeedImageComponent} from "../../Components/Feed/DetailFeed.Component";


function FeedDetail ({ handleCloseFeed , openFeed}) {

    console.log("open feed in detail : " , openFeed);

    return(
        <>
                <div onClick={handleCloseFeed} className="fixed bg-gray-800 opacity-40 z-40 w-full h-full" ></div>
            {/*style={{zIndex:"39"}}*/}
                <div className="w-full fixed mx-auto z-50"  style={{  minWidth:"300px" }}>
                    <div className="w-full relative z-40 mx-0 px-0 h-full ">
                        {/*<DetailFeedComponent />*/}
                        <DetailFeedImageComponent />
                    </div>
                </div>
        </>
    )
}

export default FeedDetail;