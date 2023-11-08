import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import {
    NavbarMyDetailResourceComponent
} from "../../Components/Body/Nav/Task/Resource/NavbarMyDetailResource.Component";
import {MyDetailResourceComponent} from "../../Components/Resource/MyDetailResource.Component";
import api from "../../Config/api";
import {
    NavbarMyDetailAbsentComponentEmpty
} from "../../Components/Body/Nav/Task/Absents/Empty/NavbarMyDetailAbsentEmpty.Component";
import {DetailMyAbsentComponentEmpty} from "../../Components/Absent/Empty/DetailMyAbsentEmpty.Component";
import {NavbarMyDetailAbsentComponent} from "../../Components/Body/Nav/Task/Absents/NavbarMyDetailAbsent.Component";
import {DetailMyAbsentComponent} from "../../Components/Absent/DetailMyAbsent.Component";
import {DetailMyResourceComponentEmpty} from "../../Components/Absent/Empty/DetailMyResourceEmpty.Component";
import {
    NavbarMyDetailResourceEmptyComponentEmpty
} from "../../Components/Body/Nav/Task/Resource/Empty/NavbarMyDetailResourceEmpty.Component";

function MyDetailResource (){

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

    const [resources , setResources] = useState([]);
    const [isFetchingResources, setIsFetchingResources] = useState(true);
    const [isDataFetchedResources, setIsDataFetchedResources] = useState(false);
    const [errorResources, setErrorResources] = useState(null);

    let token = localStorage.getItem('auth_token');

    useEffect(() => {
        let isMounted = true;

        const fetchData = async () => {
            try {
                if (!isDataFetchedResources) {
                    const response = await api.get(`${slug}/resource/${id}}` , {
                        "Content-Type" : "multipart/form-data" ,
                        "Authorization" : "Bearer " + token,
                    });
                    const data = response.data;

                    if (isMounted) {
                        setResources(data);
                        setIsDataFetchedResources(true);
                        setIsFetchingResources(false);
                    }
                }

            } catch (error) {
                if (isMounted) {
                    setErrorResources(error);
                    setIsFetchingResources(false);
                }
            }
        };

        const timeout = setTimeout(() => {
            if (isFetchingResources) {
                if (isMounted) {
                    setErrorResources(new Error("Timeout: Could not fetch data."));
                    setIsFetchingResources(false);
                }
            }
        }, 20000);

        fetchData();

        return () => {
            isMounted = false;
            clearTimeout(timeout);
        };
    }, [resources]);

    return(
        <>
            {isFetchingResources ? (
                <div>
                    <div className="w-full" style={{ background: "#FFFFFF" }}>
                        <NavbarMyDetailResourceEmptyComponentEmpty />
                        <div className="w-full pb-5 mx-0 px-0 h-full " style={{ background:"#FFFFFF"}}>
                            <DetailMyResourceComponentEmpty/>
                        </div>
                    </div>
                </div>
            ) : !isDataFetchedResources ?(
                <div>
                    <div className="w-full" style={{ background: "#FFFFFF" }}>
                        <NavbarMyDetailResourceEmptyComponentEmpty />
                        <div className="w-full pb-5 mx-0 px-0 h-full " style={{ background:"#FFFFFF"}}>
                            <DetailMyResourceComponentEmpty/>
                        </div>
                    </div>
                </div>
            ): (
                <div>
                    {resources.map((item) => {
                        return(
                            <div className="w-full" key={item.id} style={{ background:"#FFFFFF"}}>
                                <NavbarMyDetailResourceComponent name={item.name} />
                                <div className="w-full pb-5 mx-0 px-0 h-full " style={{ background:"#FFFFFF"}}>
                                    <div id="resource" className="w-full">
                                        <div className="w-full">
                                            <MyDetailResourceComponent id={item.id} name={item.name} description={item.description} url={item.url} post_time={item.post_time}  />
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

export default MyDetailResource