
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import {NavbarEditAssigmentComponent} from "../../Components/Body/Nav/Task/Assignment/NavbarEditAssigment.Component";
import {EditAssignmentComponent} from "../../Components/Assigment/EditAssignment.Component";

function EditAssigment (){

    const [assigment  , setAssigment] = useState([]);

    const {id , slug} = useParams();

    const user = JSON.parse(localStorage.getItem('whoLogin'));
    const username = user.username;

    useEffect(() => {
        const fetchData = async () => {
            try {
                // const response = await axios.get(`https://rest-api.spaceskool.site/public/api/${username}/${slug}/my/assignment/${id}`);
                const response = await axios.get(`http://127.0.0.1:8000/api/${username}/${slug}/my/assignment/${id}`);
                const data = response.data;
                setAssigment(data)
            } catch (error) {
                console.log("Error Fetching Resource Data" , error)
            }
        }
        fetchData()
    } , [])

    return(
        <>
            <div>
                {assigment.map((item) => {
                    return(
                        <div className="w-full" key={item.id} style={{ background:"#FFFFFF"}}>
                            <NavbarEditAssigmentComponent name={item.name}/>
                            <div className="w-full pb-5 mx-0 px-0 h-full " style={{ background:"#FFFFFF"}}>
                                <div id="assigment" className="w-full">
                                    <div className="w-full">
                                        <EditAssignmentComponent name={item.name} change={item.change_time} questions={item.question} start_time={item.start_time} end_time={item.end_time} date={item.date} />
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

export default EditAssigment