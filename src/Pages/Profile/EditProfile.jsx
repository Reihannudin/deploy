import React, {useEffect, useState} from "react";
import axios from "axios";
import {NavbarEditProfileComponent} from "../../Components/Body/Nav/NavbarEditProfile.Component";
import {EditProfileComponent} from "../../Components/Profile/EditProfile.Component";
import api from "../../Config/api";

function EditProfile(){

    const [user , setUser] = useState([]);
    const [isFetching, setIsFetching] = useState(true);
    const [isDataFetched, setIsDataFetched] = useState(false);
    const [error, setError] = useState(null);


    useEffect(()=> {
        let isMounted = true;
        const token = localStorage.getItem("auth_token");

        const fetchData = async () => {
            try {
                if (!isDataFetched) {
                    const response = await api.get(`/myprofile` , {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                        },
                    });
                    await new Promise((resolve) => setTimeout(resolve, 1500));

                    const data = response.data;
                    if (isMounted) {
                        setUser(data);
                        setIsDataFetched(true);
                    }
                }
                setIsFetching(false);
            } catch (error) {
                if (isMounted) {
                    setError(error);
                    setIsFetching(false);
                }
            }
        }

        const timeout = setTimeout(() => {
            if (isFetching) {
                if (isMounted) {
                    setError(new Error("Timeout: Could not fetch data."));
                    setIsFetching(false);
                }
            }
        }, 20000);

        fetchData();

        return () => {
            isMounted = false;
            clearTimeout(timeout);
        };
    } , [user])


    console.log(user)

    return(
        <>
            {isFetching ? (
                <>
                            <div >
                                <div className="w-full"  style={{ background:"#fcfcfc"}}>
                                    <NavbarEditProfileComponent  isFetching={isFetching} isDataFetched={isDataFetched}  />
                                    <div className="w-full mx-0 px-0 h-full relative " style={{ background:"#fcfcfc"}}>
                                        <div className="flex items-center justify-center h-96 absolute top-36 bottom-0 right-0 left-0">
                                            <div
                                                className="animate-spin rounded-full border-r-gray-50 border-l-gray-50  border-b-gray-50  w-7 h-7 md:h-10 md:w-10 border-t-4 border-purple-700"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                </>
            ): !isDataFetched ? (
                <>
                    {user.map((item , index) => {
                        return(
                            <div key={index}>
                                <div className="w-full"  style={{ background:"#fcfcfc"}}>
                                    <NavbarEditProfileComponent  isFetching={isFetching} isDataFetched={isDataFetched}  />
                                    <div className="w-full mx-0 px-0 h-full relative " style={{ background:"#fcfcfc"}}>
                                        <div className="flex items-center justify-center h-96 absolute top-36 bottom-0 right-0 left-0">

                                            <div
                                                className="animate-spin rounded-full border-r-gray-50 border-l-gray-50  border-b-gray-50  w-7 h-7 md:h-10 md:w-10 border-t-4 border-purple-700"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </>
            ): (
                <>
                    {user.map((item , index) => {
                        return(
                            <div key={index}>
                                <div className="w-full"  style={{ background:"#fcfcfc"}}>
                                    <NavbarEditProfileComponent username={item.username} isFetching={isFetching} isDataFetched={isDataFetched}  />
                                    <div className="w-full mx-0 px-0 h-full " style={{ background:"#fcfcfc"}}>
                                        <EditProfileComponent photoProfile={item.photo} banner={item.banner} name={item.name} username={item.username} bio={item.bio} address={item.address} join_date={item.join_date} />
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </>
            )}
        </>
    )
}

export default EditProfile