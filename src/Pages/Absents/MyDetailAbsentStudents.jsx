import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import {NavbarMyDetailAbsentComponent} from "../../Components/Body/Nav/Task/Absents/NavbarMyDetailAbsent.Component";
import {DetailStudentAbsentComponent} from "../../Components/Absent/DetailStudentAbsent.Component";
import api from "../../Config/api";
import {
    NavbarMyDetailAbsentComponentEmpty
} from "../../Components/Body/Nav/Task/Absents/Empty/NavbarMyDetailAbsentEmpty.Component";
import {DetailMyAbsentComponentEmpty} from "../../Components/Absent/Empty/DetailMyAbsentEmpty.Component";
import {DetailMyAbsentComponent} from "../../Components/Absent/DetailMyAbsent.Component";
import {DetailStudentAbsentEmptyComponent} from "../../Components/Absent/Empty/DetailStudentAbsentEmpty.Component";


function MyDetailAbsentStudents () {

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
                            {/* Tab Contents */}
                            <div id="tab-contents" className=" w-full mx-auto">
                                <div id="student" className=" py-4">
                                    <div className="xl:w-10/12 lg:w-11/12 md:w-10/12 w-full mx-auto  md:pt-16  pt-16">
                                        <DetailStudentAbsentEmptyComponent />

                                    </div>
                                </div>

                            </div>
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
                            {/* Tab Contents */}
                            <div id="tab-contents" className=" w-full mx-auto">
                                <div id="student" className=" py-4">
                                    <div className="xl:w-10/12 lg:w-11/12 md:w-10/12 w-full mx-auto  md:pt-16  pt-16">
                                        <DetailStudentAbsentEmptyComponent />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="lg:hidden block mx-0 px-0">
                        {/* FooterComponent */}
                    </div>
                </div>
            ): (
                <div>
                    {absents.map((item) => {
                        return(
                            <div className="w-full" key={item.id} style={{ background:"#FFFFFF"}}>
                                <NavbarMyDetailAbsentComponent name={item.name} />
                                <div className="w-full pb-5 mx-0 px-0 h-full " style={{ background:"#FFFFFF"}}>
                                    {/* Tab Contents */}
                                    <div id="tab-contents" className=" w-full mx-auto">
                                        <div id="student" className="py-4 ">
                                            <div className="xl:w-10/12 lg:w-11/12 md:w-10/12 w-full mx-auto  md:pt-16  pt-16">
                                                <DetailStudentAbsentComponent status={item.status}  post_time={item.post_time}  start_time={item.start_time} end_time={item.end_time}  date={item.date} />
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

export default MyDetailAbsentStudents