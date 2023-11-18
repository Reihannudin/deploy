import { NavbarComponent } from "../../Components/Body/Nav/Navbar.Component";
import { FeedComponent } from "../../Components/Feed/Feed.Component";
import { useEffect, useState } from "react";
import api from "../../Config/api";
import {NavbarFeedComponent} from "../../Components/Body/Nav/NavbarFeed.Component";
import {useNavigate} from "react-router-dom";
import FeedDetail from "./FeedDetail";
import bcrypt from "bcryptjs";

function Feed({user , isFetching , isDataFetched}) {

    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [content, setContent] = useState('');
    const [image, setImage] = useState('');
    const [repostFeedId, setRepostFeedI] = useState(2);
    const [isArchive, setIsArchive] = useState(false);
    const [openPopUpCreate  , setOpenPopUpCreate] = useState(false);

    const [popUpNotif, setPopUpNotif] = useState(false);
    const [messageNotif, setMessageNotif] = useState('');
    const [errorNotif, setErrorNotif] = useState(null);
    const [errorFeed, setErrorFeed] = useState('');

    function generateUniqueId() {
        const randomNum = Math.floor(Math.random() * 100000000); // Random number between 0 and 999999999999

        const uniqueId = parseInt(randomNum, 10);

        return uniqueId;
    }

    const uniqueId = generateUniqueId();

    const storeFeed = async (event) => {

        event.preventDefault();

        setIsLoading(true); // Start loading indicator

        const formData = {
            content : content,
            image  : image,
            status: isArchive ? "archive" : "public",
            repost_feed_id : uniqueId
        }

        let token = localStorage.getItem('token');

        api
            .post(`/feed/store`, formData , {
                "Content-Type" : "multipart/form-data" ,
                "Authorization" : "Bearer " + token,
            })
            .then((response) => {
                setIsLoading(false); // Stop loading indicator
                if (response.data.status === 1) {
                    let redirectUrl = response.data.rediret_path;
                    setPopUpNotif(true)
                    setMessageNotif(response.data.message)
                    setOpenPopUpCreate(false)
                    navigate(redirectUrl);
                }
            })
            .catch((error) => {
                setIsLoading(false); // Stop loading indicator
                const {errors} = error.response.data;
                if (error.response.status === 422){
                    setErrorFeed(error.response.data.message);
                } else if (error.response.status === 500){
                    setErrorFeed(error.response.data.message);
                }
            });

    }

    useEffect(() => {
        if (popUpNotif) {
            // Set a timeout to automatically set popUpNotif to false after 3 seconds
            const timeoutId = setTimeout(() => {
                setPopUpNotif(false);
            }, 3000);

            // Cleanup the timeout to avoid memory leaks
            return () => clearTimeout(timeoutId);
        }
    }, [popUpNotif]);

    const notificationStyle = {
        top: popUpNotif ? "20px" : "-95px",
        zIndex :80,
        transition: "top 0.5s ease-in-out", // Adjust the duration and easing as needed
    };



    return (
    <div className="w-full mx-auto"  style={{ background: "#FFFFFF" , minWidth:"300px" }}>

            <div className={"w-full fixed "}  style={notificationStyle}>
                <div className={"w-11/12 mx-auto  bg-gray-50 py-4 border-radius-8 "}>
                    <div  className={"w-11/12 mx-auto py-1 text-left"}>
                        <p  className={"w-full text-purple-600 font12-res-300"}>Notifikasi</p>
                        <p  className={"w-full text-green-600 font14-res-300"}>{messageNotif}</p>
                    </div>
                </div>
            </div>
      <NavbarComponent user={user} isFetching={isFetching} isDataFetched={isDataFetched} />
        <div className="w-full relative mx-0 px-0 h-full " style={{ background:"#FFFFFF"}}>
            <FeedComponent
                popUpNotif={popUpNotif}
                setPopUpNotif={setPopUpNotif}
                errorNotif={errorNotif}
                openPopUpCreate={openPopUpCreate}
                setOpenPopUpCreate={setOpenPopUpCreate}
                error={error}
                errorFeed={errorFeed}
                storeFeed={storeFeed}
                image={image}
                content={content}
                setImage={setImage}
                setContent={setContent}
                isArchive={isArchive}
                setIsArchive={setIsArchive}
                isLoading={isLoading}
            />
        </div>
    </div>
  );
}

export default Feed;
