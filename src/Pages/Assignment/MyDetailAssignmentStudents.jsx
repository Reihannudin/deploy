import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import {
    NavbarMyDetailAssignmentComponent
} from "../../Components/Body/Nav/Task/Assignment/NavbarMyDetailAssignment.Component";
import api from "../../Config/api";
import {
    NavbarMyDetailAssignmentEmptyComponent
} from "../../Components/Body/Nav/Task/Assignment/Empty/NavbarMyDetailAssignmentEmpty.Component";
import {DetailMyAssignmentComponentEmpty} from "../../Components/Assigment/Empty/DetailMyAssignmentEmpty.Component";
import {DetailStudentsTaskEmptyComponent} from "../../Components/Assigment/Empty/DetailStudentsTaskEmpty.Component";
import {DetailStudentsTaskComponent} from "../../Components/Assigment/DetailStudentsTask.Component";

function MyDetailAssignmentStudents() {

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
                    <div className="w-full" style={{ background: "#FFFFFF" , maxWidth:"1500px",}}>
                        <NavbarMyDetailAssignmentEmptyComponent />
                        <div id="tab-contents" className=" w-full mx-auto">
                            <div id="asssignment" className="w-full">
                                <div className="xl:w-10/12 lg:w-11/12 md:w-10/12 w-full mx-auto  md:pt-16  pt-16">
                                    <DetailStudentsTaskEmptyComponent />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : !isDataFetchedAssignment ?(
                <div>
                    <div className="w-full" style={{ background: "#FFFFFF" , maxWidth:"1500px",}}>
                        <NavbarMyDetailAssignmentEmptyComponent />
                        <div id="tab-contents" className=" w-full mx-auto">
                            <div id="asssignment" className="w-full">
                                <div className="xl:w-10/12 lg:w-11/12 md:w-10/12 w-full mx-auto  md:pt-16  pt-16">
                                    <DetailStudentsTaskEmptyComponent />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            ): (
                <div>
                    {assignment.map((item) => {
                        return(
                            <div className="w-full" key={item.id} style={{ background:"#FFFFFF" , maxWidth:"1500px",}}>
                                <NavbarMyDetailAssignmentComponent name={item.name} />
                                <div className="w-full pb-5 mx-0 px-0 h-full " style={{ background:"#FFFFFF"}}>
                                    {/* Tab Contents */}
                                    <div id="tab-contents" className=" w-full mx-auto">
                                        <div id="asssignment" className="w-full">
                                            <div className="xl:w-10/12 lg:w-11/12 md:w-10/12 w-full mx-auto  md:pt-16  pt-16">
                                                {/*<DetailStudentsTaskEmptyComponent status={item.status}/>*/}
                                                <DetailStudentsTaskComponent class_id={class_id} name={item.name} start_time={item.start_time} end_time={item.end_time} date={item.date} status={item.status} post_time={item.post_time} />
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

export default MyDetailAssignmentStudents