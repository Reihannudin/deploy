import {NavbarJoinClassComponent} from "../../Components/Body/Nav/Class/NavbarJoinClass.Component";
import {JoinClassComponent} from "../../Components/Class/JoinClass.Component";
import {useEffect, useState} from "react";
import api from "../../Config/api";

function JoinClass(){

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

    return (
        <>
            <div className="w-full" style={{ background:"#FFFFFF"}}>
                <NavbarJoinClassComponent />
                <div className="w-full pb-5 mx-0 px-0 h-full " style={{ background:"#FFFFFF"}}>
                    <div  className="w-full">
                        <div className="w-full">
                            <JoinClassComponent />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default JoinClass