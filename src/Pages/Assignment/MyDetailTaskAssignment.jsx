import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import {
    NavbarMyDetailAssignmentComponent
} from "../../Components/Body/Nav/Task/Assignment/NavbarMyDetailAssignment.Component";
import {DetailMyAssignmentComponent} from "../../Components/Assigment/DetailMyAssignment.Component";

function MyDetailTaskAssignment(){

    const user = JSON.parse(localStorage.getItem('whoLogin'));
    const username = user.username;

    const [assignment , setAssignment] = useState([]);

    const { id, class_id, slug } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                // const response = await axios.get(`https://rest-api.spaceskool.site/public/api/${slug}/assignment/${id}`);
                const response = await axios.get(`http://127.0.0.1:8000/api/${slug}/assignment/${id}`);
                const data = response.data;
                setAssignment(data);
            } catch (error){
                console.log("Error Fetching Absent Data:"  , error)
            }
        }
        fetchData()
    } , [])

    return(
        <>
            <div>
                {assignment.map((item) => {
                    return(
                        <div className="w-full" key={item.id} style={{ background:"#FFFFFF"}}>
                            <NavbarMyDetailAssignmentComponent name={item.name} />
                            <div className="w-full pb-5 mx-0 px-0 h-full " style={{ background:"#FFFFFF"}}>
                                {/* Tab Contents */}
                                <div id="tab-contents" className=" w-full mx-auto">
                                    <div id="absent" className="w-full">
                                        <div className="w-full">
                                            <DetailMyAssignmentComponent class_id={class_id} name={item.name} point={item.point} teacher={item.teacher} post_time={item.post_time} status={item.status} change={item.change_time} start_time={item.start_time} end_time={item.end_time}  date={item.date} />
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

export default MyDetailTaskAssignment