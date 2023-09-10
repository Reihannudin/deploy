
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {NavbarMyClassComponent} from "../../Components/Body/Nav/Class/NavbarMyClass.Component";
import api from "../../Config/api";
import {NavbarMyClassEmptyComponent} from "../../Components/Body/Nav/Empty/NavbarMyClassEmpty.Component";
import {DetailMyClassEmptyComponent} from "../../Components/Class/Empty/DetailMyClassEmpty.Component";
import {DetailMyClassComponent} from "../../Components/Class/DetailMyClass.Component";

function MyClassDetail (){

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


    const [classes, setClasses] = useState([]);
    const [isFetchingClass, setIsFetchingClass] = useState(true);
    const [isDataFetchedClass, setIsDataFetchedClass] = useState(false);
    const [errorClass, setErrorClass] = useState(null);

    const {  id ,  slug } = useParams();

    console.log("slug" , slug)
    console.log("id" , id)

    useEffect(() => {
        let isMounted = true;
        const fetchData = async () => {
            try {
                if (!isDataFetchedClass) {
                    const token = localStorage.getItem('auth_token');
                    const response = await api.get(`/${slug}/my/class`, {
                        headers: {
                            "Content-Type": "application/json", // Use application/json content type
                            "Authorization": `Bearer ${token}`, // Use template literal to concatenate token
                        },
                    });

                    // Simulate a delay (1.5 seconds)
                    await new Promise((resolve) => setTimeout(resolve, 1500));

                    console.log(response.data)
                    const data = response.data;
                    if (isMounted) {
                        setClasses(data);
                        setIsDataFetchedClass(true);
                    }
                }
                setIsFetchingClass(false);
            } catch (error) {
                if (isMounted) {
                    setErrorClass(error); // Set the error to errorClass
                    setIsFetchingClass(false);
                }
            }
        };

        const timeout = setTimeout(() => {
            if (isFetchingClass) {
                if (isMounted) {
                    setErrorClass(new Error("Timeout: Could not fetch data.")); // Set the error to errorClass
                    setIsFetchingClass(false);
                }
            }
        }, 20000);

        fetchData();

        return () => {
            isMounted = false;
            clearTimeout(timeout);
        };
    }, [slug, isDataFetchedClass]); // Include slug and isDataFetchedClass in the dependencies array


    // console.log("isFetchingClass" , isFetchingClass)
    // console.log("isDataFetchingClass" , isDataFetchedClass)
    console.log("Class" , classes)

    return(
        <>
            {isFetchingClass ? (
                <div>
                    <div className="w-full" style={{ background: "#FFFFFF" }}>
                        <NavbarMyClassEmptyComponent />
                        <div className="w-full pb-5 mx-0 px-0 h-full " style={{ background:"#FFFFFF"}}>
                            <DetailMyClassEmptyComponent />
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
                            <DetailMyClassEmptyComponent />
                            {/*<DetailMyClassEmptyComponent code={item.code} user={user} name={item.name} teacher={item.teacher} students={item.students} subjects={item.subject} section={item.section} room={item.room} />*/}
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
                                    <DetailMyClassComponent code={item.code} user={user} name={item.name} teacher={item.teacher} students={item.students} subjects={item.subject} section={item.section} room={item.room} />
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


export default MyClassDetail