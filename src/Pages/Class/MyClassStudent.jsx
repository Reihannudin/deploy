
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {DetailMyClassStudentsComponent} from "../../Components/Class/DetailMyClassStudents.Component";
import {NavbarMyClassComponent} from "../../Components/Body/Nav/Class/NavbarMyClass.Component";
import api from "../../Config/api";
import {NavbarMyClassEmptyComponent} from "../../Components/Body/Nav/Empty/NavbarMyClassEmpty.Component";
import {DetailMyClassStudentsEmptyComponent} from "../../Components/Class/Empty/DetailMyClassStudentsEmpty.Component";

function MyClassStudent(){

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

    const [classes , setClasses] =  useState([]);
    const [isFetchingClass, setIsFetchingClass] = useState(true);
    const [isDataFetchedClass, setIsDataFetchedClass] = useState(false);
    const [errorClass, setErrorClass] = useState(null);

    const { id, slug } = useParams();

    useEffect(()=> {
        let isMounted = true;
        const fetchData = async () => {
            try {
                if (!isDataFetchedClass) {
                    const response = await api.get(`/${slug}/my/class`);
                    await new Promise((resolve) => setTimeout(resolve, 1500));

                    const data = response.data;
                    if (isMounted) {
                        setClasses(data);
                        setIsDataFetchedClass(true);
                    }
                }
                setIsFetchingClass(false);
            } catch (error) {
                if (isMounted) {
                    setError(error);
                    setIsFetchingClass(false);
                }
            }
        }

        const timeout = setTimeout(() => {
            if (isFetchingClass) {
                if (isMounted) {
                    setError(new Error("Timeout: Could not fetch data."));
                    setIsFetchingClass(false);
                }
            }
        }, 20000);

        fetchData();

        return () => {
            isMounted = false;
            clearTimeout(timeout);
        };
    } , [user])

    return(
        <>
            {isFetchingClass ? (
                <div>
                    <div className="w-full" style={{ background: "#FFFFFF" }}>
                        <NavbarMyClassEmptyComponent />
                        <div className="w-full pb-5 mx-0 px-0 h-full " style={{ background:"#FFFFFF"}}>
                            <DetailMyClassStudentsEmptyComponent />
                        </div>
                    </div>
                    <div className="lg:hidden block mx-0 px-0">
                        {/* FooterComponent */}
                    </div>
                </div>
            ) : !isDataFetchedClass ? (
                <div>
                    <div className="w-full" style={{ background: "#FFFFFF" }}>
                        <NavbarMyClassEmptyComponent />
                        <div className="w-full pb-5 mx-0 px-0 h-full " style={{ background:"#FFFFFF"}}>
                            <DetailMyClassStudentsEmptyComponent />
                        </div>
                    </div>
                    <div className="lg:hidden block mx-0 px-0">
                        {/* FooterComponent */}
                    </div>
                </div>
            ) : (
                <>
                    {classes.map((item) => (
                        <div key={item.id}>
                            <div className="w-full" style={{ background: "#FFFFFF" }}>
                                <NavbarMyClassComponent name={item.name} image={user.image} />
                                <div className="w-full pb-5 mx-0 px-0 h-full " style={{ background:"#FFFFFF"}}>
                                    <DetailMyClassStudentsComponent code={item.code} name={item.name} username={user.username} teacher={item.teacher} students={item.students} subjects={item.subject} section={item.section} room={item.room} />
                                </div>
                            </div>
                            <div className="lg:hidden block mx-0 px-0">
                                {/* FooterComponent */}
                            </div>
                        </div>
                    ))}
                </>
            )}
        </>

    )
}


export default MyClassStudent