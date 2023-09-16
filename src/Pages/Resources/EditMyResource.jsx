
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import {NavbarEditResourceComponent} from "../../Components/Body/Nav/Task/Resource/NavbarEditResource.Component";
import {EditResourceComponent} from "../../Components/Resource/EditResource.Component";
import api from "../../Config/api";
import {
    NavbarEditAbsentEmptyComponent
} from "../../Components/Body/Nav/Task/Absents/Empty/NavbarEditAbsentEmpty.Component";
import {EditEmptyComponent} from "../../Components/Absent/Empty/EditEmpty.Component";
import {NavbarEditAbsentComponent} from "../../Components/Body/Nav/Task/Absents/NavbarEditAbsent.Component";
import {EditAbsentComponent} from "../../Components/Absent/EditAbsent.Component";
import {
    NavbarEditResourceEmptyComponent
} from "../../Components/Body/Nav/Task/Resource/Empty/NavbarEditResourceEmpty.Component";

function EditMyResource (){


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

    const {slug , class_id , id } = useParams()

    const [resources , setResources] = useState([]);
    const [isFetchingResource, setIsFetchingResource] = useState(true);
    const [isDataFetchedResource, setIsDataFetchedResource] = useState(false);
    const [errorResource, setErrorResource] = useState(null);

    let token = localStorage.getItem('auth_token');

    useEffect(() => {
        let isMounted = true;

        const fetchData = async () => {
            try {
                if (!isDataFetchedResource) {
                    const response = await api.get(`/${slug}/resource/${id}` , {
                        "Content-Type" : "multipart/form-data" ,
                        "Authorization" : "Bearer " + token,
                    });
                    const data = response.data;

                    if (isMounted) {
                        setResources(data);
                        setIsDataFetchedResource(true);
                        setIsFetchingResource(false);
                    }
                }

            } catch (error) {
                if (isMounted) {
                    setErrorResource(error);
                    setIsFetchingResource(false);
                }
            }
        };

        const timeout = setTimeout(() => {
            if (isFetchingResource) {
                if (isMounted) {
                    setErrorResource(new Error("Timeout: Could not fetch data."));
                    setIsFetchingResource(false);
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
            {isFetchingResource ? (
                <div className="w-full"  style={{ background:"#FFFFFF"}}>
                    <NavbarEditResourceEmptyComponent />
                    <div className="w-full pb-5 mx-0 px-0 h-full " style={{ background:"#FFFFFF"}}>
                        <div id="resource_empty_1" className="w-full">
                            <div className="w-full">
                                <EditEmptyComponent />
                            </div>
                        </div>
                    </div>
                </div>
            ) : !isDataFetchedResource ?(
                <div className="w-full" style={{ background:"#FFFFFF"}}>
                    <NavbarEditResourceEmptyComponent />
                    <div className="w-full pb-5 mx-0 px-0 h-full " style={{ background:"#FFFFFF"}}>
                        <div id="resource_empty_2" className="w-full">
                            <div className="w-full">
                                <EditEmptyComponent />
                                {/*<EditAbsentComponent name={item.name} date={item.date} start_time={item.start_time} end_time={item.end_time} />*/}
                            </div>
                        </div>
                    </div>
                </div>
            ): (
                <div>
                    {resources.map((item) => {
                        return(
                            <div className="w-full" key={item.id} style={{ background:"#FFFFFF"}}>
                                <NavbarEditResourceComponent name={item.name} />
                                <div className="w-full pb-5 mx-0 px-0 h-full " style={{ background:"#FFFFFF"}}>
                                    <div id="resource" className="w-full">
                                        <div className="w-full">
                                            <EditResourceComponent id={item.id} username={user.username} name={item.name} description={item.description} url={item.url} />
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

export default EditMyResource