import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NavbarMyClassComponent } from "../../Components/Body/Nav/Class/NavbarMyClass.Component";
import api from "../../Config/api";
import { NavbarMyClassEmptyComponent } from "../../Components/Body/Nav/Empty/NavbarMyClassEmpty.Component";
import { DetailMyClassEmptyComponent } from "../../Components/Class/Empty/DetailMyClassEmpty.Component";
import { DetailMyClassComponent } from "../../Components/Class/DetailMyClass.Component";

function MyClassDetail() {

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
                const response = await api.get(`/${slug}/my/class`, {
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

    return (
        <>
            {isFetching ? (
                <div key={id}>
                    <div className="w-full" style={{ background: "#FFFFFF" }}>
                        <NavbarMyClassEmptyComponent />
                        <div className="w-full pb-5 mx-0 px-0 h-full " style={{ background: "#FFFFFF" }}>
                            <DetailMyClassEmptyComponent />
                        </div>
                    </div>
                </div>
            ) : (
                <>
                    {classes.map((item) => (
                        <div key={item.id}>
                            <div className="w-full" style={{ background: "#FFFFFF" }}>
                                <NavbarMyClassComponent name={item.name} image={user.image} />
                                <div className="w-full pb-5 mx-0 px-0 h-full " style={{ background: "#FFFFFF" }}>
                                    <DetailMyClassComponent code={item.code} user={user} name={item.name} teacher={item.teacher} students={item.students} subjects={item.subject} section={item.section} room={item.room} />
                                </div>
                            </div>
                        </div>
                    ))}
                </>
            )}
        </>
    );
}

export default MyClassDetail;
