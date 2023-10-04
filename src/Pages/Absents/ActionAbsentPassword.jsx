import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import {NavbarJoinClassComponent} from "../../Components/Body/Nav/Class/NavbarJoinClass.Component";
import {ActionAbsentPasswordComponent} from "../../Components/Absent/ActionAbsentPassword.Component";
import api from "../../Config/api";
import {NavbarAbsentActionClassComponent} from "../../Components/Body/Nav/NavbarAbsentActionClassComponent";
import {
    NavbarMyDetailAbsentComponentEmpty
} from "../../Components/Body/Nav/Task/Absents/Empty/NavbarMyDetailAbsentEmpty.Component";
import {DetailMyAbsentComponentEmpty} from "../../Components/Absent/Empty/DetailMyAbsentEmpty.Component";
import {ActionAbsentPasswordEmptyComponent} from "../../Components/Absent/Empty/ActionAbsentPasswordEmpty.Component";

function ActionAbsentPassword (){


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

    // console.log("user detail absent : ", user )

    const { class_id,   id,slug } = useParams();

    // console.log("id" , id)
    // console.log("slug" , slug)


    const [absents, setAbsents] = useState([]);
    const [isFetchingAbsent, setIsFetchingAbsent] = useState(true);
    const [isDataFetchedAbsent, setIsDataFetchedAbsent] = useState(false);
    const [errorAbsent, setErrorAbsent] = useState(null);

    let token = localStorage.getItem('auth_token');

    useEffect(() => {
        let isMounted = true;

        const fetchData = async () => {
            try {
                if (!isDataFetchedAbsent) {
                    const response = await api.get(`/${slug}/absent/${id}/user` , {
                        "Content-Type" : "multipart/form-data" ,
                        "Authorization" : "Bearer " + token,
                    });
                    const data = response.data;

                    if (isMounted) {
                        setAbsents(data);
                        setIsDataFetchedAbsent(true);
                        setIsFetchingAbsent(false);
                    }
                }

            } catch (error) {
                if (isMounted) {
                    setErrorAbsent(error);
                    setIsFetchingAbsent(false);
                }
            }
        };

        const timeout = setTimeout(() => {
            if (isFetchingAbsent) {
                if (isMounted) {
                    setErrorAbsent(new Error("Timeout: Could not fetch data."));
                    setIsFetchingAbsent(false);
                }
            }
        }, 20000);

        fetchData();

        return () => {
            isMounted = false;
            clearTimeout(timeout);
        };
    }, [absents]);

    // console.log(isFetchingAbsent);
    // console.log(isDataFetchedAbsent);

    return(
    <>
        {isFetchingAbsent ? (
            <div>
                <div className="w-full" style={{ background: "#FFFFFF" }}>
                    <NavbarAbsentActionClassComponent />
                    <div className="w-full pb-5 mx-0 px-0 h-full " style={{ background:"#FFFFFF"}}>
                        <ActionAbsentPasswordEmptyComponent />

                    </div>
                </div>
            </div>
        ) : !isDataFetchedAbsent ?(
            <div>
                <div className="w-full" style={{ background: "#FFFFFF" }}>
                    <NavbarAbsentActionClassComponent />
                    <div className="w-full pb-5 mx-0 px-0 h-full " style={{ background:"#FFFFFF"}}>
                        <ActionAbsentPasswordEmptyComponent />
                    </div>
                </div>
            </div>
        ):(
            <div>
                {absents.map((item) => {
                    return(
                        <div className="h-full" key={item.id} style={{ background:"#FFFFFF"}}>
                            <NavbarAbsentActionClassComponent title={"Absensi kehadiran"} />
                            <div className="w-full pb-5 mx-0 px-0 h-full " style={{ background:"#FFFFFF"}}>
                                <div  className="w-full">
                                    <div className="w-full">
                                        <ActionAbsentPasswordComponent  user={user} status={item.absent_status} absent_id={id} slug={slug} name={item.absent_name} email={item.email} end_time={item.absent_deadline} date={item.absent_date} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        )}
    </>
    )
}

export default ActionAbsentPassword