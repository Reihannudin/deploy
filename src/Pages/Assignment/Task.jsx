
import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {NavbarTaskComponent} from "../../Components/Body/Nav/NavbarTask.Component";
import {TaskComponent} from "../../Components/Assigment/Task.Component";

function Task() {

    const navigate = useNavigate();
    const { id, slug } = useParams();

    const user = JSON.parse(localStorage.getItem('whoLogin'));
    const user_id = user.id;

    const [userAction, setUserAction] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                // const response = await axios.get(`https://rest-api.spaceskool.site/public/api/${slug}/assignment/${id}/action/${user_id}`);
                const response = await axios.get(`http://127.0.0.1:8000/api/${slug}/assignment/${id}/action/${user_id}`);
                const data = response.data;
                setUserAction(data);
            } catch (error) {
                console.log("Error Fetching Assignment Data:", error);
            }
        };
        fetchData();
    }, []);

    const [assignment, setAssignment] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const storedData = localStorage.getItem('assignmentData');
                if (storedData) {
                    setAssignment(JSON.parse(storedData));
                }
            } catch (error) {
                console.log("Error Fetching Assignment Data:", error);
            }
        };

        fetchData();
    }, []);

    const [isOnline, setIsOnline] = useState(navigator.onLine);

    useEffect(() => {
        const handleOnlineStatus = () => {
            setIsOnline(true);
        };

        const handleOfflineStatus = () => {
            setIsOnline(false);
        };

        window.addEventListener('online', handleOnlineStatus);
        window.addEventListener('offline', handleOfflineStatus);

        return () => {
            window.removeEventListener('online', handleOnlineStatus);
            window.removeEventListener('offline', handleOfflineStatus);
        };
    }, []);

    const updateData = async () => {
        try {
            console.log(1)
            navigate('/'); // Redirect to "/" after successful deletion when online
            // await axios.put(`https://rest-api.spaceskool.site/public/api/${slug}/assignment/${id}/action/${user_id}/delete`);
            await axios.put(`http://127.0.0.1:8000/api/${slug}/assignment/${id}/action/${user_id}/delete`);
        } catch (error) {
            console.log("Error deleting action:", error);
        }
    };

    useEffect(() => {
        if (isOnline) {
            updateData();
        }
    }, [isOnline, navigate, id, slug, user_id]);

    return (
        <>
            {isOnline ? (
                <p>This page can only be accessed when working offline.</p>
            ) : (
                <div>
                    {assignment.map((item) => {
                        console.log(item.question);
                        return (
                            <div className="w-full" key={item.id} style={{ background: "#FFFFFF" }}>
                                <NavbarTaskComponent name={item.name} />
                                <div className="w-full mx-0 px-0 h-full " style={{ background: "#FFFFFF" }}>
                                    <TaskComponent id={item.id} out_app={userAction.out_app} change={item.change_time} slug={slug} name={item.name} point={item.point} start_time={item.start_time} end_time={item.end_time} date={item.date}  status={item.status} class={item.class} teacher={item.teacher} created_at={item.post_time} question={item.question} />
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </>
    );
}


export default Task