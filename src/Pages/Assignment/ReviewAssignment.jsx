import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {NavbarTaskComponent} from "../../Components/Body/Nav/NavbarTask.Component";
import {ReviewAssignmentComponent} from "../../Components/Assigment/ReviewAssignment.Component";
import api from "../../Config/api";

function ReviewAssignment() {

    const { class_id,   id,slug } = useParams();
    const navigate = useNavigate();
    let token = localStorage.getItem('auth_token');


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

    const [userAction , setUserAction] = useState([]);
    const [isFetchingUserAction, setIsFetchingUserAction] = useState(true);
    const [isDataFetchedUserAction, setIsDataFetchedUserAction] = useState(false);
    const [errorUserAction, setErrorUserAction] = useState(null);

    useEffect(() => {
        let isMounted = true;

        const fetchData = async () => {
            try {
                if (!isDataFetchedUserAction) {
                    const response = await api.get(`/${slug}/assignment/${id}/action/${user.id}` , {
                        "Content-Type" : "multipart/form-data" ,
                        "Authorization" : "Bearer " + token,
                    });
                    const data = response.data;

                    if (isMounted) {
                        setUserAction(data);
                        setIsDataFetchedUserAction(true);
                        setIsFetchingUserAction(false);
                    }
                }

            } catch (error) {
                if (isMounted) {
                    setErrorUserAction(error);
                    setIsFetchingUserAction(false);
                }
            }
        };

        const timeout = setTimeout(() => {
            if (isFetchingUserAction) {
                if (isMounted) {
                    setErrorUserAction(new Error("Timeout: Could not fetch data."));
                    setIsFetchingUserAction(false);
                }
            }
        }, 20000);

        fetchData();

        return () => {
            isMounted = false;
            clearTimeout(timeout);
        };
    }, [userAction]);


    const [assignment, setAssignment] = useState([]);
    // const [isOnline, setIsOnline] = useState(navigator.onLine);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const storedData = localStorage.getItem(`assignmentData_${id}`);
                if (storedData) {
                    setAssignment(JSON.parse(storedData));
                }
            } catch (error) {
                console.log("Error Fetching Assignment Data:", error);
            }
        };

        fetchData();
    }, []);


    const [isOnline, setIsOnline] = useState(navigator.onLine);

    useEffect(() => {
        const handleOnlineStatus = () => {
            setIsOnline(true);
        };

        const handleOfflineStatus = () => {
            setIsOnline(false);
        };

        window.addEventListener('online', handleOnlineStatus);
        window.addEventListener('offline', handleOfflineStatus);

        return () => {
            window.removeEventListener('online', handleOnlineStatus);
            window.removeEventListener('offline', handleOfflineStatus);
        };
    }, []);

    const updateData = async () => {
        try {
            console.log(1)
            navigate(`/error/${slug}/${class_id}/online/assignment/${id}`); // Redirect to "/" after successful deletion when online
            await axios.put(`https://rest-api.spaceskool.site/public/api/${slug}/assignment/${id}/action/${user.id}/delete`);
        } catch (error) {
            console.log("Error deleting action:", error);
        }
    };

    useEffect(() => {
        if (isOnline) {
            updateData();
        }
    }, [isOnline, navigate, id, slug]);



    return(
        <>
            {isOnline ? (
                <p>This page can only be accessed when working offline.</p>
            ) : (
                <div>
                    {assignment.map((item) => {
                        return(
                            <div className="w-full" key={item.id} style={{ background:"#FFFFFF"}}>
                                <NavbarTaskComponent name={item.name} />
                                <div className="w-full mx-0 px-0 h-full " style={{ background:"#FFFFFF"}}>
                                    <ReviewAssignmentComponent id={item.id} user={user} out_app={userAction.out_app}  slug={slug} name={item.name} point={item.point} start_time={item.start_time} end_time={item.end_time} date={item.date} change={item.change_time} status={item.status} class={item.class} teacher={item.teacher} created_at={item.post_time} question={item.question} />
                                </div>
                            </div>
                        )
                    })}
                </div>
            )}
        </>
    )
}

export default ReviewAssignment