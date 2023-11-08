
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import {NavbarDetailAbsentComponent} from "../../Components/Body/Nav/Task/Absents/NavbarDetailAbsent.Component";
import {DetailAbsentComponent} from "../../Components/Absent/DetailAbsent.Component";
import api from "../../Config/api";
import {NavbarMyClassEmptyComponent} from "../../Components/Body/Nav/Empty/NavbarMyClassEmpty.Component";
import {DetailMyClassEmptyComponent} from "../../Components/Class/Empty/DetailMyClassEmpty.Component";
import {
    NavbarMyDetailAbsentComponentEmpty
} from "../../Components/Body/Nav/Task/Absents/Empty/NavbarMyDetailAbsentEmpty.Component";
import {DetailAbsentComponentEmpty} from "../../Components/Absent/Empty/DetailAbsentEmpty.Component";
import {
    NavbarDetailAbsentEmptyComponent
} from "../../Components/Body/Nav/Task/Absents/Empty/NavbarDetailAbsentEmpty.Component";


function DetailAbsent ({}) {

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

    console.log("user detail absent : ", user )

    const { class_id,   id,slug } = useParams();

    console.log("id" , id)
    console.log("slug" , slug)


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
                    const response = await api.get(`${slug}/absent/${id}` , {
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

    console.log(isFetchingAbsent);
    console.log(isDataFetchedAbsent);

    return(
        <>
            {isFetchingAbsent ? (
                <div>
                    <div className="w-full" style={{ background: "#FFFFFF" , maxWidth:"1500px", }}>
                        <NavbarDetailAbsentEmptyComponent />
                        <div className="w-full pb-5 mx-0 px-0 h-full " style={{ background:"#FFFFFF"}}>
                            <DetailAbsentComponentEmpty />
                        </div>
                    </div>
                </div>
            ) : !isDataFetchedAbsent ?(
                <div>
                    <div className="w-full" style={{ background: "#FFFFFF" , maxWidth:"1500px",}}>
                        <NavbarDetailAbsentEmptyComponent />
                        <div className="w-full pb-5 mx-0 px-0 h-full " style={{ background:"#FFFFFF"}}>
                            <DetailAbsentComponentEmpty />
                        </div>
                    </div>

                </div>
            ): (
                <div>
                    {absents.map((item) => {
                        console.log("absent use_password: "  , item.use_password)
                        console.log("absent use_face_recog: "  , item.use_face_recog)
                        let actionLength = item.action.length
                        return(
                            <div className="w-full" style={{ background:"#FFFFFF" , maxWidth:"1500px",}} key={item.id}>
                                <NavbarDetailAbsentComponent id={item.id} slug={slug} name={item.name} />
                                <div className="w-full pb-5 mx-0 px-0 h-full " style={{ background:"#FFFFFF"}}>
                                    <div id="tab-contents" className=" w-full mx-auto">
                                        <div id="absent" className="w-full">
                                            <div className="w-full">
                                                <DetailAbsentComponent use_face_recog={item.use_face_recog} use_password={item.use_password} name={item.name} user={user} teacher={item.teacher} action_length={actionLength} post_time={item.post_time} status={item.status} change={item.change_time} start_time={item.start_time} end_time={item.end_time} date={item.date} />
                                            </div>
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

export default DetailAbsent