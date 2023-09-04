import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import {
    NavbarMyDetailAssignmentComponent
} from "../../Components/Body/Nav/Task/Assignment/NavbarMyDetailAssignment.Component";
import {DetailStudentsTaskComponent} from "../../Components/Assigment/DetailStudentsTask.Component";

function MyDetailAssignmentStudents() {

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
                                    <div id="asssignment" className="w-full">
                                        <div className="xl:w-10/12 lg:w-11/12 md:w-10/12 w-full mx-auto  md:pt-16  pt-16">
                                            <DetailStudentsTaskComponent class_id={class_id} name={item.name} start_time={item.start_time} end_time={item.end_time} date={item.date} status={item.status} post_time={item.post_time} />
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

export default MyDetailAssignmentStudents