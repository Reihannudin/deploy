import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import {NavbarDetailTaskComponent} from "../../Components/Body/Nav/Task/NavbarDetailTask.Component";
import {DetailTaskAssigmentComponent} from "../../Components/Assigment/DetailTaskAssigment.Component";

function DetailTaskAssigment ()  {

    const { id, slug } = useParams();

    const user = JSON.parse(localStorage.getItem('whoLogin'));
    const username = user.username;
    const user_id = user.id;

    const [assignment , setAssignment] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // const response = await axios.get(`https://rest-api.spaceskool.site/public/api/${slug}/assignment/${id}`);
                const response = await axios.get(`http://127.0.0.1:8000/api/${slug}/assignment/${id}`);
                const data = response.data;
                setAssignment(data);
            } catch (error){
                console.log("Error Fetching Assignment Data:"  , error)
            }
        }
        fetchData()
    } , [])

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
            <div>
                {assignment.map((item) => {
                    return(
                        <div className="w-full" key={item.id} style={{ background:"#FFFFFF"}}>
                            <NavbarDetailTaskComponent  id={item.id} slug={slug} name={item.name} />
                            <div className="w-full pb-5 mx-0 px-0 h-full " style={{ background:"#FFFFFF" , minWidth:"385px"}}>
                                {/* Tab Contents */}
                                <div id="tab-contents" className=" w-full mx-auto">
                                    <div id="task" className="w-full">
                                        <div className="w-full">
                                            <DetailTaskAssigmentComponent  name={item.name} action_id={userAction.id} userStatus={userAction.status} teacher={item.teacher} status={item.status} point={item.point} change={userAction.change_time} out_app={userAction.out_app} statusAction={userAction.status} start_time={item.start_time} end_time={item.end_time} date={item.date} />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default DetailTaskAssigment