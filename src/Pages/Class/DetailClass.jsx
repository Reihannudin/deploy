
import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import {NavbarClassComponent} from "../../Components/Body/Nav/Class/NavbarClass.Component";
import {DetailClassComponent} from "../../Components/Class/DetailClass.Component";
import api from "../../Config/api";
import {NavbarClassEmptyComponent} from "../../Components/Body/Nav/Empty/NavbarClassEmpty.Component";

function DetailClass (){

    const [user, setUser] = useState([]);
    const [isFetching, setIsFetching] = useState(true);
    const [classes, setClasses] = useState([]);
    const [error, setError] = useState(null);

    const { id, slug } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get(`/user`);
                await new Promise((resolve) => setTimeout(resolve, 1500));
                const data = response.data;
                setUser(data);
                setIsFetching(false);
            } catch (error) {
                setError(error);
                setIsFetching(false);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem("auth_token");
                const response = await api.get(`/${slug}/class`, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                });

                await new Promise((resolve) => setTimeout(resolve, 1500));
                const data = response.data;
                setClasses(data);
                setIsFetching(false);
            } catch (error) {
                setError(error);
                setIsFetching(false);
            }
        };

        fetchData();
    }, []);

    console.log(classes)

    return(
        <>
            {isFetching ? (
                <div>
                    <div className="w-full" style={{ background:"#FFFFFF"}} >
                        <NavbarClassEmptyComponent/>
                        <div className="w-full pb-5 mx-0 px-0 h-full " style={{ background:"#FFFFFF"}}>
                            {/*<DetailClassComponent id={item.id} code={item.code} name={item.name} teacher={item.teacher} students={item.students} subjects={item.subject} section={item.section} room={item.room} />*/}
                        </div>
                    </div>

                </div>
            ) : (
                <div>
                    {classes.map((item) => {
                        return(
                            <div className="w-full" style={{ background:"#FFFFFF"}} key={item.id}>
                                <NavbarClassComponent name={item.name} image={user.image} />
                                <div className="w-full pb-5 mx-0 px-0 h-full " style={{ background:"#FFFFFF"}}>
                                    {/*<DetailClassComponent id={item.id} code={item.code} name={item.name} teacher={item.teacher} students={item.students} subjects={item.subject} section={item.section} room={item.room} />*/}
                                </div>
                            </div>

                        )
                    })}
                </div>
            )}
        </>
    )
}

export default DetailClass