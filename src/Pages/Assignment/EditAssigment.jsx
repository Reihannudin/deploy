
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import {NavbarEditAssigmentComponent} from "../../Components/Body/Nav/Task/Assignment/NavbarEditAssigment.Component";
import {EditAssignmentComponent} from "../../Components/Assigment/EditAssignment.Component";
import api from "../../Config/api";
import {
    NavbarEditAbsentEmptyComponent
} from "../../Components/Body/Nav/Task/Absents/Empty/NavbarEditAbsentEmpty.Component";
import {EditEmptyComponent} from "../../Components/Absent/Empty/EditEmpty.Component";
import {NavbarEditAbsentComponent} from "../../Components/Body/Nav/Task/Absents/NavbarEditAbsent.Component";
import {EditAbsentComponent} from "../../Components/Absent/EditAbsent.Component";
import {
    NavbarEditAssignmentEmptyComponent
} from "../../Components/Body/Nav/Task/Assignment/Empty/NavbarEditAssignmentEmpty.Component";

function EditAssigment (){

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

    const [assignments, setAssignments] = useState([]);
    const [isFetchingAssignments, setIsFetchingAssignments] = useState(true);
    const [isDataFetchedAssignments, setIsDataFetchedAssignments] = useState(false);
    const [errorAssignments, setErrorAssignments] = useState(null);

    let token = localStorage.getItem('auth_token');

    useEffect(() => {
        let isMounted = true;

        const fetchData = async () => {
            try {
                if (!isDataFetchedAssignments) {
                    const response = await api.get(`/${slug}/assignment/${id}` , {
                        "Content-Type" : "multipart/form-data" ,
                        "Authorization" : "Bearer " + token,
                    });
                    const data = response.data;

                    if (isMounted) {
                        setAssignments(data);
                        setIsDataFetchedAssignments(true);
                        setIsFetchingAssignments(false);
                    }
                }

            } catch (error) {
                if (isMounted) {
                    setErrorAssignments(error);
                    setIsFetchingAssignments(false);
                }
            }
        };

        const timeout = setTimeout(() => {
            if (isFetchingAssignments) {
                if (isMounted) {
                    setErrorAssignments(new Error("Timeout: Could not fetch data."));
                    setIsFetchingAssignments(false);
                }
            }
        }, 20000);

        fetchData();

        return () => {
            isMounted = false;
            clearTimeout(timeout);
        };
    }, [assignments]);

    console.log(isFetchingAssignments);
    console.log(isDataFetchedAssignments);
    return(
        <>
            {isFetchingAssignments ? (
                <div className="w-full"  style={{ background:"#FFFFFF"}}>
                    <NavbarEditAssignmentEmptyComponent />
                    <div className="w-full pb-5 mx-0 px-0 h-full " style={{ background:"#FFFFFF"}}>
                        <div id="absent" className="w-full">
                            <div className="w-full">
                                <EditEmptyComponent />
                            </div>
                        </div>
                    </div>
                </div>
            ) : !isDataFetchedAssignments ?(
                <div className="w-full" style={{ background:"#FFFFFF"}}>
                    <NavbarEditAssignmentEmptyComponent />
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
                    {assignments.map((item) => {
                        return(
                            <div className="w-full" key={item.id} style={{ background:"#FFFFFF"}}>
                                <NavbarEditAssigmentComponent name={item.name}/>
                                <div className="w-full pb-5 mx-0 px-0 h-full " style={{ background:"#FFFFFF"}}>
                                    <div id="assigment" className="w-full">
                                        <div className="w-full">
                                            <EditAssignmentComponent name={item.name} change={item.change_time} out_app={item.out_app} questions={item.question} start_time={item.start_time} end_time={item.end_time} date={item.date} />
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

export default EditAssigment