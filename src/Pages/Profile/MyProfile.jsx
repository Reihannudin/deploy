
import React, {useEffect, useState} from "react";
import {NavbarProfileComponent} from "../../Components/Body/Nav/NavbarProfile.Component";
import {TestProfileComponent} from "../Helper/TestProfile.Component";
import api from "../../Config/api";
import {MyProfileComponent} from "../../Components/Profile/MyProfile.Component";


function MyProfile(){

    const [user , setUser] = useState([]);
    const [isFetching, setIsFetching] = useState(true);
    const [isDataFetched, setIsDataFetched] = useState(false);
    const [error, setError] = useState(null);

    useEffect(()=> {
        let isMounted = true;
        const fetchData = async () => {
            try {
                if (!isDataFetched) {
                    const response = await api.get(`/user`);
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
            <div>
                <div className="w-full bg-white"  >
                    <NavbarProfileComponent name={user.username}  />
                    <div className="w-full mx-0 px-0 h-full " style={{ background:"#e0e0e0"}}>
                        <MyProfileComponent name={user.name} school={user.school} username={user.username} bio={user.bio} address={user.address} join_date={user.join_date}/>
                    </div>
                </div>
            </div>
        </>
    )
};

export default MyProfile
