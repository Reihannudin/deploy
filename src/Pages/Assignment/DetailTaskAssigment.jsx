import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import api from "../../Config/api";
import {
    NavbarDetailAssignmentEmptyComponent
} from "../../Components/Body/Nav/Task/Assignment/Empty/NavbarDetailAssignmentEmpty.Component";
import {DetailAssignmentComponentEmpty} from "../../Components/Assigment/Empty/DetailAssignmentEmpty.Component";
import {
    NavbarDetailAssignmentComponent
} from "../../Components/Body/Nav/Task/Assignment/NavbarDetailAssignment.Component";
import {DetailTaskAssigmentComponent} from "../../Components/Assigment/DetailTaskAssigment.Component";

function DetailTaskAssigment ()  {

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

    const [assignment , setAssignment] = useState([]);
    const [isFetchingAssignmentt, setIsFetchingAssignment] = useState(true);
    const [isDataFetchedAssignment, setIsDataFetchedAssignment] = useState(false);
    const [errorAssignment, setErrorAssignment] = useState(null);


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
            {isFetchingAssignmentt ? (
                <div>
                    <div className="w-full" style={{ background: "#FFFFFF" }}>
                        <NavbarDetailAssignmentEmptyComponent />
                        <div className="w-full pb-5 mx-0 px-0 h-full " style={{ background:"#FFFFFF"}}>
                            <DetailAssignmentComponentEmpty />
                        </div>
                    </div>
                </div>
            ) : !isDataFetchedAssignment ?(
                <div>
                    <div className="w-full" style={{ background: "#FFFFFF" }}>
                        <NavbarDetailAssignmentEmptyComponent />
                        <div className="w-full pb-5 mx-0 px-0 h-full " style={{ background:"#FFFFFF"}}>
                            {/*<DetailMyAssignmentComponentEmpty />*/}
                            <DetailAssignmentComponentEmpty />
                        </div>
                    </div>
                </div>
            ): (
                <div>
                    {assignment.map((item) => {
                        return(
                            <div className="w-full h-full" key={item.id} style={{ background:"#FFFFFF"}}>
                                <NavbarDetailAssignmentComponent  id={item.id} slug={slug} name={item.name} />
                                <div className="w-full pb-5 mx-0 px-0 h-full " style={{ background:"#FFFFFF" }}>
                                    {/* Tab Contents */}
                                    <div id="tab-contents" className=" w-full h-full  mx-auto">
                                        <div id="task" className="w-full h-full ">
                                            <div className="w-full  ">
                                                <DetailTaskAssigmentComponent  user={user} name={item.name} action_id={userAction.id} userStatus={userAction.status} teacher={item.teacher} status={item.status} point={item.point} change={userAction.change_time} out_app={userAction.out_app} statusAction={userAction.status} start_time={item.start_time} end_time={item.end_time} date={item.date} />
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

export default DetailTaskAssigment