import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {NavbarTaskComponent} from "../../Components/Body/Nav/NavbarTask.Component";
import {PreAssignmentComponent} from "../../Components/Assigment/PreAssignment.Component";
import api from "../../Config/api";
import {
    NavbarDetailAssignmentEmptyComponent
} from "../../Components/Body/Nav/Task/Assignment/Empty/NavbarDetailAssignmentEmpty.Component";
import {DetailAssignmentComponentEmpty} from "../../Components/Assigment/Empty/DetailAssignmentEmpty.Component";
import {
    NavbarDetailAssignmentComponent
} from "../../Components/Body/Nav/Task/Assignment/NavbarDetailAssignment.Component";
import {DetailTaskAssigmentComponent} from "../../Components/Assigment/DetailTaskAssigment.Component";
import {PreAssignmentEmptyComponent} from "../../Components/Assigment/Empty/PreAssignmentEmpty.Component";
import {
    NavbarPreAssignmentEmptyComponent
} from "../../Components/Body/Nav/Task/Assignment/Empty/NavbarPrelAssignmentEmpty.Component";
import {NavbarPreAssignmentComponent} from "../../Components/Body/Nav/Task/Assignment/NavbarPreAssignment.Component";
function PreAssignment ()  {

    const { class_id,   id,slug } = useParams();
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


    const [assignment, setAssignment] = useState([]);
    const [isFetchingAssignment, setIsFetchingAssignment] = useState(true);
    const [isDataFetchedAssignment, setIsDataFetchedAssignment] = useState(false);
    const [errorAssignment, setErrorAssignment] = useState(null);

    const [isOnline, setIsOnline] = useState(navigator.onLine);

    useEffect(() => {
        let isMounted = true;

        // Function to fetch assignment data
        const fetchData = async () => {
            try {
                const response = await api.get(`${slug}/assignment/${id}`, {
                    "Content-Type": "multipart/form-data",
                    "Authorization": "Bearer " + token,
                });
                const data = response.data;

                if (isMounted) {
                    setAssignment(data);
                    setIsDataFetchedAssignment(true);
                    setIsFetchingAssignment(false);

                    // Store data in local storage
                    localStorage.setItem(`assignmentData_${id}`, JSON.stringify(data));
                }
            } catch (error) {
                if (isMounted) {
                    setErrorAssignment(error);
                    setIsFetchingAssignment(false);
                }
            }
        };

        // Check if data exists in localStorage
        const storedData = localStorage.getItem(`assignmentData_${id}`);
        if (storedData) {
            setAssignment(JSON.parse(storedData));
            setIsDataFetchedAssignment(true);
            setIsFetchingAssignment(false);
        } else {
            fetchData();
        }

        const handleOnlineStatus = () => {
            setIsOnline(true);
        };

        const handleOfflineStatus = () => {
            setIsOnline(false);
        };

        window.addEventListener('online', handleOnlineStatus);
        window.addEventListener('offline', handleOfflineStatus);

        const timeout = setTimeout(() => {
            if (isFetchingAssignment) {
                if (isMounted) {
                    setErrorAssignment(new Error("Timeout: Could not fetch data."));
                    setIsFetchingAssignment(false);
                }
            }
        }, 20000);

        return () => {
            window.removeEventListener('online', handleOnlineStatus);
            window.removeEventListener('offline', handleOfflineStatus);
            isMounted = false;
            clearTimeout(timeout);
        };
    }, [id]); // Listen for changes in 'id', not 'assignment'

    const [userAction , setUserAction] = useState([]);
    const [isFetchingUserAction, setIsFetchingUserAction] = useState(true);
    const [isDataFetchedUserAction, setIsDataFetchedUserAction] = useState(false);
    const [errorUserAction, setErrorUserAction] = useState(null);


    useEffect(() => {
        let isMounted = true;

        const fetchData = async () => {
            try {
                if (!isDataFetchedUserAction) {
                    const response = await api.get(`${slug}/assignment/${id}/action/${user.id}` , {
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



    return(
        <>
            {isFetchingAssignment ? (
                <div>
                    <div className="w-full" style={{ background: "#FFFFFF" }}>
                        <NavbarPreAssignmentEmptyComponent/>
                        <div className="w-full pb-5 mx-0 px-0 h-full " style={{ background:"#FFFFFF"}}>
                            <PreAssignmentEmptyComponent />
                        </div>
                    </div>
                </div>
            ) : !isDataFetchedAssignment ?(
                <div>
                    <div className="w-full" style={{ background: "#FFFFFF" }}>
                        <NavbarPreAssignmentEmptyComponent/>
                        <div className="w-full pb-5 mx-0 px-0 h-full " style={{ background:"#FFFFFF"}}>
                            <PreAssignmentEmptyComponent />
                        </div>
                    </div>
                </div>
            ): (

                <div>
                    {assignment.map((item) => {
                        return(
                            <div className="w-full" key={item.id} style={{ background:"#FFFFFF"}}>
                                <NavbarPreAssignmentComponent  id={item.id} slug={slug} name={item.name} />
                                <div className="w-full mx-0 px-0 h-full " style={{ background:"#FFFFFF"}}>
                                    {/*<PreAssignmentEmptyComponent />*/}

                                    <PreAssignmentComponent id={item.id} out_app={userAction.out_app}  slug={slug} name={item.name} point={item.point} start_time={item.start_time} end_time={item.end_time} date={item.date} change={item.change_time} status={item.status} class={item.class} teacher={item.teacher} created_at={item.post_time} question={item.question} isOnline={isOnline}/>
                                </div>
                            </div>
                        )
                    })}
                    {/*{assignment.map((item) => {*/}
                    {/*    return(*/}
                    {/*        <div className="w-full h-full" key={item.id} style={{ background:"#FFFFFF"}}>*/}
                    {/*            <NavbarDetailAssignmentComponent  id={item.id} slug={slug} name={item.name} />*/}
                    {/*            <div className="w-full pb-5 mx-0 px-0 h-full " style={{ background:"#FFFFFF" }}>*/}
                    {/*                /!* Tab Contents *!/*/}
                    {/*                <div id="tab-contents" className=" w-full h-full  mx-auto">*/}
                    {/*                    <div id="task" className="w-full h-full ">*/}
                    {/*                        <div className="w-full  ">*/}
                    {/*                            <DetailTaskAssigmentComponent  user={user} name={item.name} action_id={userAction.id} userStatus={userAction.status} teacher={item.teacher} status={item.status} point={item.point} change={userAction.change_time} out_app={userAction.out_app} statusAction={userAction.status} start_time={item.start_time} end_time={item.end_time} date={item.date} />*/}
                    {/*                        </div>*/}
                    {/*                    </div>*/}

                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    )*/}
                    {/*})}*/}
                </div>

            )}

        </>
    )
}

export default PreAssignment

