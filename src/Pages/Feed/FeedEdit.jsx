import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import api from "../../Config/api";
import {DetailFeedComponent, DetailFeedImageComponent} from "../../Components/Feed/DetailFeed.Component";
import {FeedCardEditComponent} from "../../Components/Feed/Card/FeedCardEdit.component";

function FeedEdit({handleClosePopUpEdit , openPopUpEdit}){

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


    return(
        <>
            <>

                {isFetchingFeed && !isDataFetchedFeed && (
                    <>
                        <div onClick={handleClosePopUpEdit} className="fixed bg-gray-800 opacity-40 w-full h-full" style={{zIndex:43}} ></div>
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
                        <div onClick={handleClosePopUpEdit} className="fixed bg-gray-800 opacity-40 w-full h-full" style={{zIndex:43}} ></div>
                        {/*style={{zIndex:"39"}}*/}
                        <div className="w-full fixed mx-auto z-50"  style={{  minWidth:"300px" }}>
                            <div className="w-full relative  z-40 mx-0 px-0 h-full ">
                                    <FeedCardEditComponent    idData={ feed.data.feed.id}
                                                              contentImageData={feed.data.feed.content.image}
                                                            userData={ feed.data.feed.user}
                                                            contentData={ feed.data.feed.content}
                                                            likesData={ feed.data.feed.likes}
                                                            commentsData={ feed.data.feed.comments}
                                                            repostData={ feed.data.feed.repost}
                                                            statusData={ feed.data.feed.status}
                                                            timeData={ feed.data.feed.time}
                                                            repostChainData={ feed.data.feed.repost_chain}
                                                              handleClosePopUpEdit={handleClosePopUpEdit}
                                                              openPopUpEdit={openPopUpEdit}
                                    />

                            </div>
                        </div>
                    </>
                )}
            </>

        </>
    )
}

export default FeedEdit