import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {NavbarComponent} from "../../Components/Body/Nav/Navbar.Component";
import {FeedComponent} from "../../Components/Feed/Feed.Component";
import {SpacesDetailComponent} from "../../Components/Feed/SpacesDetail.Component";
import api from "../../Config/api";
import {NavbarFeedBackComponent} from "../../Components/Body/Nav/NavbarFeedBack.Component";
import {NavbarFeedComponent} from "../../Components/Body/Nav/NavbarFeed.Component";
import {NavbarSpacesDetailComponent} from "../../Components/Body/Nav/NavbarSpacesDetail.Component";


function SpacesDetail ({user , isFetching , isDataFetched}){

    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [content, setContent] = useState(null);
    const [isArchive, setIsArchive] = useState(false);


    const storeFeed = async () => {
        setIsLoading(true);
        const response = await api.post("feed/store", {
            content,
            status: isArchive ? "archive" : "public",
        });

        if(response.data.status && response.data.message == "Feed terupload"){
            navigate('/feed')
        }

        setIsLoading(false);
    };

    return(
        <>
            <div className="w-full mx-auto"  style={{ background: "#FFFFFF" , minWidth:"300px" }}>
                <NavbarSpacesDetailComponent user={user} isFetching={isFetching} isDataFetched={isDataFetched} />
                <div className="w-full relative mx-0 px-0 h-full " style={{ background:"#FFFFFF"}}>
                    <SpacesDetailComponent
                        storeFeed={storeFeed}
                        setContent={setContent}
                        isArchive={isArchive}
                        setIsArchive={setIsArchive}
                        isLoading={isLoading}
                    />
                </div>
            </div>
        </>
    )
}

export default SpacesDetail