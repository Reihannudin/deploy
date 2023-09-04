
import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import {NavbarEditAbsentComponent} from "../../Components/Body/Nav/Task/Absents/NavbarEditAbsent.Component";
import {EditAbsentComponent} from "../../Components/Absent/EditAbsent.Component";

function EditMyAbsent(){


    const {slug , class_id , id } = useParams()
    const [absents, setAbsents] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // const response = await axios.get(`https://rest-api.spaceskool.site/public/api/${slug}/absent/${id}`);
                const response = await axios.get(`http://127.0.0.1:8000/api/${slug}/absent/${id}`);
                const data = response.data;
                setAbsents(data);
            } catch (error) {
                console.log("Error Fetching class data:", error);
            }
        };
        fetchData();
    }, []);

    console.log(absents);

    return(
        <>
            <div>
                {absents.map((item) => {
                    return(
                        <div className="w-full" key={item.id} style={{ background:"#FFFFFF"}}>
                            <NavbarEditAbsentComponent />
                            <div className="w-full pb-5 mx-0 px-0 h-full " style={{ background:"#FFFFFF"}}>
                                <div id="absent" className="w-full">
                                    <div className="w-full">
                                        <EditAbsentComponent name={item.name} date={item.date} start_time={item.start_time} end_time={item.end_time} />
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

export default EditMyAbsent