
import React, {useEffect, useState} from "react";
import axios from "axios";
import {NavbarProfileComponent} from "../../Components/Body/Nav/NavbarProfile.Component";
import {MyProfileComponent} from "../../Components/Profile/MyProfile.Component";
import {MyClassCardComponent} from "../../Components/Class/Card/MyClassCard.Component";


function MyProfile(){

    const user = JSON.parse(localStorage.getItem("whoLogin"));
    const username = user.username;
    const image = user.image;
    const banner = user.banner;

    const [profile, setProfile] = useState(null); // Initialize as null for better handling
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const source = axios.CancelToken.source();

        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `http://127.0.0.1:8000/api/profile/${username}`,
                    {
                        cancelToken: source.token,
                    }
                );

                const data = response.data;
                setProfile(data);
                setIsLoading(false);
            } catch (error) {
                if (!axios.isCancel(error)) {
                    setError(error);
                    setIsLoading(false);
                }
            }
        };

        fetchData();

        return () => {
            source.cancel("Component unmounted");
        };
    }, [username]);

    const usernameJson = user.username;


    if (isLoading) {
        return (
            <div className="w-full bg-white"  >
                <div className="flex items-center  justify-center h-96 xl:mt-52 lg:mt-56 md:mt-52 mt-60">
                    <div className="animate-spin">
                        <img
                            src="/assets/planet_gif-1.gif"
                            className="h-20 w-20"
                            alt="Loading"
                        />
                    </div>
                </div>
            </div>

        );
    }

        return(
            <>
                {profile && (
                    <>
                        {profile.map((item , index) => {
                            return(
                                <div className="w-full bg-white" key={index} >
                                    <NavbarProfileComponent name={item.username}  />
                                        <div className="w-full mx-0 px-0 h-full " style={{ background:"#fcfcfc"}}>
                                            <MyProfileComponent name={item.name} photoProfile={image} banner={banner} username={item.username} bio={item.bio} address={item.address} join_date={item.join_date}/>
                                        </div>
                                </div>
                            )
                        })}
                    </>
                )}
             </>
        )
};

export default MyProfile

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             // const response = await axios.get(`https://rest-api.spaceskool.site/public/api/profile/${username}`);
    //             const response = await axios.get(`http://127.0.0.1:8000/api/profile/${username}`);
    //             const data = response.data;
    //             setProfile(data);
    //         } catch (error){
    //             console.log("Error Fetching profile data:" , error)
    //         }
    //     }
    //     fetchData()
    // }, [])
