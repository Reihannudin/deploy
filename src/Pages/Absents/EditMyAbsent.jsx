
import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import {NavbarEditAbsentComponent} from "../../Components/Body/Nav/Task/Absents/NavbarEditAbsent.Component";
import {EditAbsentComponent} from "../../Components/Absent/EditAbsent.Component";
import api from "../../Config/api";
import {
    NavbarMyDetailAbsentComponentEmpty
} from "../../Components/Body/Nav/Task/Absents/Empty/NavbarMyDetailAbsentEmpty.Component";
import {DetailMyAbsentComponentEmpty} from "../../Components/Absent/Empty/DetailMyAbsentEmpty.Component";
import {NavbarMyDetailAbsentComponent} from "../../Components/Body/Nav/Task/Absents/NavbarMyDetailAbsent.Component";
import {DetailMyAbsentComponent} from "../../Components/Absent/DetailMyAbsent.Component";
import {
    NavbarEditAbsentEmptyComponent
} from "../../Components/Body/Nav/Task/Absents/Empty/NavbarEditAbsentEmpty.Component";
import {EditEmptyComponent} from "../../Components/Absent/Empty/EditEmpty.Component";

function EditMyAbsent(){

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
                <div className="w-full"  style={{ background:"#FFFFFF"}}>
                    <NavbarEditAbsentEmptyComponent />
                    <div className="w-full pb-5 mx-0 px-0 h-full " style={{ background:"#FFFFFF"}}>
                        <div id="absent" className="w-full">
                            <div className="w-full">
                                <EditEmptyComponent />
                            </div>
                        </div>
                    </div>
                </div>
            ) : !isDataFetchedAbsent ?(
                <div className="w-full" style={{ background:"#FFFFFF"}}>
                    <NavbarEditAbsentEmptyComponent />
                    <div className="w-full pb-5 mx-0 px-0 h-full " style={{ background:"#FFFFFF"}}>
                        <div id="absent" className="w-full">
                            <div className="w-full">
                                <EditEmptyComponent />

                                {/*<EditAbsentComponent name={item.name} date={item.date} start_time={item.start_time} end_time={item.end_time} />*/}
                            </div>
                        </div>
                    </div>
                </div>
            ): (
                <div>
                    {absents.map((item) => {
                        return(
                            <div className="w-full" key={item.id} style={{ background:"#FFFFFF"}}>
                                <NavbarEditAbsentComponent user={user} />
                                <div className="w-full pb-5 mx-0 px-0 h-full " style={{ background:"#FFFFFF"}}>
                                    <div id="absent" className="w-full">
                                        <div className="w-full">
                                            <EditAbsentComponent name={item.name} use_face_recog={item.use_face_recog} use_password={item.use_password} date={item.date} start_time={item.start_time} end_time={item.end_time} />
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

export default EditMyAbsent