import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import {NavbarMyDetailAbsentComponent} from "../../Components/Body/Nav/Task/Absents/NavbarMyDetailAbsent.Component";
import {DetailMyAbsentComponent} from "../../Components/Absent/DetailMyAbsent.Component";
import api from "../../Config/api";
import {
    NavbarMyDetailAbsentComponentEmpty
} from "../../Components/Body/Nav/Task/Absents/Empty/NavbarMyDetailAbsentEmpty.Component";
import {NavbarDetailAbsentComponent} from "../../Components/Body/Nav/Task/Absents/NavbarDetailAbsent.Component";
import {DetailAbsentComponent} from "../../Components/Absent/DetailAbsent.Component";
import {DetailMyClassEmptyComponent} from "../../Components/Class/Empty/DetailMyClassEmpty.Component";
import {DetailMyAbsentComponentEmpty} from "../../Components/Absent/Empty/DetailMyAbsentEmpty.Component";

function MyDetailAbsent () {

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

    return(
        <>
            {isFetchingAbsent ? (
                <div>
                    <div className="w-full" style={{ background: "#FFFFFF" }}>
                        <NavbarMyDetailAbsentComponentEmpty />
                        <div className="w-full pb-5 mx-0 px-0 h-full " style={{ background:"#FFFFFF"}}>
                            <DetailMyAbsentComponentEmpty />

                            {/*<DetailMyClassEmptyComponent code={item.code} user={user} name={item.name} teacher={item.teacher} students={item.students} subjects={item.subject} section={item.section} room={item.room} />*/}
                        </div>
                    </div>
                    <div className="lg:hidden block mx-0 px-0">
                        {/* FooterComponent */}
                    </div>
                </div>
            ) : !isDataFetchedAbsent ?(
                <div>
                    <div className="w-full" style={{ background: "#FFFFFF" }}>
                        <NavbarMyDetailAbsentComponentEmpty />
                        <div className="w-full pb-5 mx-0 px-0 h-full " style={{ background:"#FFFFFF"}}>
                            <DetailMyAbsentComponentEmpty />
                        </div>
                    </div>
                    <div className="lg:hidden block mx-0 px-0">
                    </div>
                </div>
            ): (
                <div>
                    {absents.map((item) => {
                        return(
                            <div className="w-full" key={item.id} style={{ background:"#FFFFFF"}}>
                                <NavbarMyDetailAbsentComponent name={item.name} />
                                <div className="w-full pb-5 mx-0 px-0 h-full " style={{ background:"#FFFFFF"}}>
                                    <div id="tab-contents" className=" w-full mx-auto">
                                        <div id="absent" className="w-full">
                                            <div className="w-full">
                                                <DetailMyAbsentComponent username={user.username}  name={item.name} teacher={item.teacher} post_time={item.post_time} status={item.status} change={item.change_time} start_time={item.start_time} end_time={item.end_time}  date={item.date} />
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

export default MyDetailAbsent