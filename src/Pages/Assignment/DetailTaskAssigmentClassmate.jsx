import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import {NavbarDetailTaskComponent} from "../../Components/Body/Nav/Task/NavbarDetailTask.Component";
import {DetailClassmateTaskComponent} from "../../Components/Assigment/DetailClassmateTask.Component";

function DetailTaskAssigmentClassmate(){

    const user = JSON.parse(localStorage.getItem('whoLogin'));
    const username = user.username;

    const { id, slug } = useParams();

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


    return(
        <>
            <div>
                {assignment.map((item) => {
                    return(
                        <div className="w-full" style={{ background:"#FFFFFF"}} key={item.id}>
                            <NavbarDetailTaskComponent  id={item.id} slug={slug} name={item.name} />
                            <div className="w-full pb-5 mx-0 px-0 h-full " style={{ background:"#FFFFFF"}}>
                                <div id="tab-contents" className=" w-full mx-auto">
                                    <div id="classmate" className="w-full">
                                        <div className="xl:w-10/12 lg:w-10/12 md:w-11/12 sm:w-11/12  w-full mx-auto  md:pt-16  pt-16">
                                            <DetailClassmateTaskComponent name={item.name} point={item.point}  teacher={item.teacher} start_time={item.start_time} end_time={item.end_time} date={item.date} status={item.status}  />
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

export default DetailTaskAssigmentClassmate