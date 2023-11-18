import {NavbarComponent} from "../../Components/Body/Nav/Navbar.Component";
import {FeedComponent} from "../../Components/Feed/Feed.Component";
import {DetailFeedComponent, DetailFeedImageComponent} from "../../Components/Feed/DetailFeed.Component";
import React, {useEffect, useState} from "react";
import api from "../../Config/api";
import {useParams} from "react-router-dom";


function FeedDetail ({ handleCloseFeed , openFeed}) {

    const [feed, setFeed] = useState([]);
    const [isFetchingFeed, setIsFetchingFeed] = useState(true);
    const [isDataFetchedFeed, setIsDataFetchedFeed] = useState(false);
    const [errorFeed, setErrorFeed] = useState(null);

    const {id} = useParams();

    useEffect(() => {
        let isMounted = true;

        let token = localStorage.getItem('token');

        const fetchData = async () => {
            try {
                if (!isDataFetchedFeed) {
                    const response = await api.get(`/feed/${id}` , {
                        "Authorization" : "Bearer " + token,
                    });
                    const data = response.data;

                    if (isMounted) {
                        setFeed(data);
                        setIsDataFetchedFeed(true);
                        setIsFetchingFeed(false);
                    }
                }


            } catch (error) {
                if (isMounted) {
                    setErrorFeed(error);
                    setIsFetchingFeed(false);
                }
            }
        };

        const timeout = setTimeout(() => {
            if (isFetchingFeed) {
                if (isMounted) {
                    setErrorFeed(new Error("Timeout: Could not fetch data."));
                    setIsFetchingFeed(false);
                }
            }
        }, 20000);

        fetchData();

        return () => {
            isMounted = false;
            clearTimeout(timeout);
        };
    }, [isDataFetchedFeed]);

    console.log("isFetchingFeed : " , isFetchingFeed);
    console.log("isDataFetchedFeed : " , isDataFetchedFeed);
    console.log("open feed data detail : " , feed.data);

    // const item = feed.data.feed.content
    // console.log("open feed data item detail : " , item);


    return(
        <>
            <>

                {isFetchingFeed && !isDataFetchedFeed && (
                    <>
                        <div onClick={handleCloseFeed} className="fixed bg-gray-800 opacity-40 w-full h-full" style={{zIndex:43}} ></div>
                        <div className={"fixed w-full h-full left-0 right-0 z-50"}>
                            <div className="flex absolute left-0 right-0 top-0 bottom-0 my-auto w-10/12 md:w-6/12 border-radius-8 mx-auto items-center justify-center  ">
                                {/*md:mt-80 mt-96*/}
                                <div className={"xl:w-2/12 md:w-3/12 sm:w-3/12 w-5/12 bg-white text-center py-3 border-radius-8"}>
                                    <div className="animate-spin rounded-full border-r-gray-50 border-l-gray-50 border-b-gray-50 mx-auto w-8 h-8  md:h-6 md:w-6 border-t-4 border-purple-700"></div>
                                    <p className={"text-purple-700 mt-3 font14-res-300 animate-pulse "}>Loading...</p>
                                </div>
                            </div>
                        </div>
                    </>
                )}
                {!isFetchingFeed && isDataFetchedFeed && (
                    <>
                        <div onClick={handleCloseFeed} className="fixed bg-gray-800 opacity-40 w-full h-full" style={{zIndex:43}} ></div>
                        {/*style={{zIndex:"39"}}*/}
                        <div className="w-full fixed mx-auto z-50"  style={{  minWidth:"300px" }}>
                            <div className="w-full relative z-40 mx-0 px-0 h-full ">
                                {feed.data.feed.content.image === "" ?(
                            <DetailFeedComponent />
                        ):(
                            <DetailFeedImageComponent
                                id={ feed.data.feed.id}
                                user={ feed.data.feed.user}
                                content={ feed.data.feed.content}
                                likes={ feed.data.feed.likes}
                                comments={ feed.data.feed.comments}
                                repost={ feed.data.feed.repost}
                                status={ feed.data.feed.status}
                                time={ feed.data.feed.time}
                                repostChain={ feed.data.feed.repost_chain}  />
                        )}
                            </div>
                        </div>
                    </>
                )}
            </>

        </>
    )
}

// <>
//
// </>


export default FeedDetail;