import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import {
    NavbarMyDetailAssignmentComponent
} from "../../Components/Body/Nav/Task/Assignment/NavbarMyDetailAssignment.Component";
import {DetailMyAssignmentComponent} from "../../Components/Assigment/DetailMyAssignment.Component";
import api from "../../Config/api";
import {
    NavbarMyDetailAbsentComponentEmpty
} from "../../Components/Body/Nav/Task/Absents/Empty/NavbarMyDetailAbsentEmpty.Component";
import {DetailMyAbsentComponentEmpty} from "../../Components/Absent/Empty/DetailMyAbsentEmpty.Component";
import {
    NavbarMyDetailAssignmentEmptyComponent
} from "../../Components/Body/Nav/Task/Assignment/Empty/NavbarMyDetailAssignmentEmpty.Component";

function MyDetailTaskAssignment(){

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

    const [assignment , setAssignment] = useState([]);
    const [isFetchingAssignmentt, setIsFetchingAssignment] = useState(true);
    const [isDataFetchedAssignment, setIsDataFetchedAssignment] = useState(false);
    const [errorAssignment, setErrorAssignment] = useState(null);

    let token = localStorage.getItem('auth_token');

    useEffect(() => {
        let isMounted = true;

        const fetchData = async () => {
            try {
                if (!isDataFetchedAssignment) {
                    const response = await api.get(`${slug}/assignment/${id}` , {
                        "Content-Type" : "multipart/form-data" ,
                        "Authorization" : "Bearer " + token,
                    });
                    const data = response.data;

                    if (isMounted) {
                        setAssignment(data);
                        setIsDataFetchedAssignment(true);
                        setIsFetchingAssignment(false);
                    }
                }

            } catch (error) {
                if (isMounted) {
                    setErrorAssignment(error);
                    setIsFetchingAssignment(false);
                }
            }
        };

        const timeout = setTimeout(() => {
            if (isFetchingAssignmentt) {
                if (isMounted) {
                    setErrorAssignment(new Error("Timeout: Could not fetch data."));
                    setIsFetchingAssignment(false);
                }
            }
        }, 20000);

        fetchData();

        return () => {
            isMounted = false;
            clearTimeout(timeout);
        };
    }, [assignment]);



    return(
        <>
            {isFetchingAssignmentt ? (
                <div>
                    <div className="w-full" style={{ background: "#FFFFFF" }}>
                        <NavbarMyDetailAssignmentEmptyComponent />
                        <div className="w-full pb-5 mx-0 px-0 h-full " style={{ background:"#FFFFFF"}}>
                            <DetailMyAbsentComponentEmpty />

                        </div>
                    </div>
                </div>
            ) : !isDataFetchedAssignment ?(
                <div>
                    <div className="w-full" style={{ background: "#FFFFFF" }}>
                        <NavbarMyDetailAssignmentEmptyComponent />
                        <div className="w-full pb-5 mx-0 px-0 h-full " style={{ background:"#FFFFFF"}}>
                            <DetailMyAbsentComponentEmpty />
                        </div>
                    </div>
                </div>
            ): (
                <div>
                {assignment.map((item) => {
                    return(
                        <div className="w-full" key={item.id} style={{ background:"#FFFFFF"}}>
                            <NavbarMyDetailAssignmentComponent name={item.name} />
                            <div className="w-full pb-5 mx-0 px-0 h-full " style={{ background:"#FFFFFF"}}>
                                {/* Tab Contents */}
                                <div id="tab-contents" className=" w-full mx-auto">
                                    <div id="absent" className="w-full">
                                        <div className="w-full">
                                            <DetailMyAssignmentComponent class_id={class_id} name={item.name} point={item.point} teacher={item.teacher} post_time={item.post_time} status={item.status} change={item.change_time} start_time={item.start_time} end_time={item.end_time}  date={item.date} />
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

export default MyDetailTaskAssignment