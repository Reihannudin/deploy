import {NavbarComponent} from "../../Components/Body/Nav/Navbar.Component";
import {MainComponent} from "../../Components/Home/Main.Component";
import {MainNavComponent} from "../../Components/Body/MainNav/MainNav.Component";
import {useEffect, useState} from "react";
import api from "../../Config/api";

function Main(){

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

    console.log(user)
    return(
        <>
            <div className="w-full mx-auto" style={{ background:"#FFFFFF"}}>
                <NavbarComponent user={user} />
                <div className="w-full relative mx-0 px-0 h-full " style={{ background:"#FFFFFF"}}>
                    <MainComponent user={user} />
                </div>
            </div>
        </>
    )
}

export default Main