import {NavbarComponent} from "../../Components/Body/Nav/Navbar.Component";
import {FeedSearchComponent} from "../../Components/Feed/FeedSearch.Component";
import {useParams} from "react-router-dom";

function ResultSearch ({user , isFetching , isDataFetched}){
    const { query } = useParams();

    return(
        <>
            <div className="w-full mx-auto"  style={{ background: "#FFFFFF" , minWidth:"300px" }}>
                <NavbarComponent user={user} isFetching={isFetching} isDataFetched={isDataFetched}/>
                <div className="w-full mx-0 px-0 h-full " style={{ background:"#FFFFFF"}}>
                    <FeedSearchComponent query={query} />
                </div>
            </div>
        </>
    )
}

export default ResultSearch