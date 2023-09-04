import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import {NavbarMyDetailAbsentComponent} from "../../Components/Body/Nav/Task/Absents/NavbarMyDetailAbsent.Component";
import {DetailMyAbsentComponent} from "../../Components/Absent/DetailMyAbsent.Component";

function MyDetailAbsent () {

    const user = JSON.parse(localStorage.getItem('whoLogin'));
    const username = user.username;

    const [absents , setAbsents] = useState([]);

    const { id , class_id , slug } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                // const response = await axios.get(`https://rest-api.spaceskool.site/public/api/${slug}/absent/${id}`);
                const response = await axios.get(`http://127.0.0.1:8000/api/${slug}/absent/${id}`);
                const data = response.data;
                setAbsents(data);
            } catch (error){
                console.log("Error Fetching Absent Data:"  , error)
            }
        }
        fetchData()
    } , [])

    return(
        <>
            <div>
                {absents.map((item) => {
                    return(
                        <div className="w-full" key={item.id} style={{ background:"#FFFFFF"}}>
                            <NavbarMyDetailAbsentComponent name={item.name} />
                            <div className="w-full pb-5 mx-0 px-0 h-full " style={{ background:"#FFFFFF"}}>
                        <div id="tab-contents" className=" w-full mx-auto">
                            <div id="absent" className="w-full">
                                <div className="w-full">
                                    <DetailMyAbsentComponent  name={item.name} teacher={item.teacher} post_time={item.post_time} status={item.status} change={item.change_time} start_time={item.start_time} end_time={item.end_time}  date={item.date} />
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

export default MyDetailAbsent