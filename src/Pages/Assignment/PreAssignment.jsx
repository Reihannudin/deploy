import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {NavbarTaskComponent} from "../../Components/Body/Nav/NavbarTask.Component";
import {PreAssignmentComponent} from "../../Components/Assigment/PreAssignment.Component";
function PreAssignment ()  {

    const { id , action, slug } = useParams();

    const user = JSON.parse(localStorage.getItem('whoLogin'));
    const user_id = user.id;

    const [assignment, setAssignment] = useState([]);
    const [isOnline, setIsOnline] = useState(navigator.onLine);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // const response = await axios.get(`https://rest-api.spaceskool.site/public/api/${slug}/assignment/${id}`);
                const response = await axios.get(`http://127.0.0.1:8000/api/${slug}/assignment/${id}`);
                const data = response.data;
                setAssignment(data);
                // Save data to localStorage
                localStorage.setItem('assignmentData', JSON.stringify(data));
            } catch (error) {
                console.log("Error Fetching Assignment Data:", error);
            }
        };

        // Check if data exists in localStorage
        const storedData = localStorage.getItem('assignmentData');
        if (storedData) {
            setAssignment(JSON.parse(storedData));
        } else {
            fetchData();
        }

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


    const [userAction , setUserAction] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                // const response = await axios.get(`https://rest-api.spaceskool.site/public/api/${slug}/assignment/${id}/action/${user_id}`);
                const response = await axios.get(`http://127.0.0.1:8000/api/${slug}/assignment/${id}/action/${user_id}`);
                const data = response.data;
                setUserAction(data);
            } catch (error){
                console.log("Error Fetching Assignment Data:"  , error)
            }
        }
        fetchData()
    } , []);


    return(
        <>
            {assignment.map((item) => {
                return(
                    <div className="w-full" key={item.id} style={{ background:"#FFFFFF"}}>
                        <NavbarTaskComponent name={item.name} />
                        <div className="w-full mx-0 px-0 h-full " style={{ background:"#FFFFFF"}}>
                            <PreAssignmentComponent id={item.id} out_app={userAction.out_app} action={action} slug={slug} name={item.name} point={item.point} start_time={item.start_time} end_time={item.end_time} date={item.date} change={item.change_time} status={item.status} class={item.class} teacher={item.teacher} created_at={item.post_time} question={item.question} isOnline={isOnline}/>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default PreAssignment