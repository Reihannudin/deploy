import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import {NavbarJoinClassComponent} from "../../Components/Body/Nav/Class/NavbarJoinClass.Component";
import {ActionAbsentPasswordComponent} from "../../Components/Absent/ActionAbsentPassword.Component";

function ActionAbsentPassword (){

    const user = JSON.parse(localStorage.getItem('whoLogin'));
    const username = user.username;

    const [absents , setAbsents] = useState([]);

    const { id, slug } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                // const response = await axios.get(`https://rest-api.spaceskool.site/public/api/${username}/${slug}/absent/${id}/user`);
                const response = await axios.get(`http://127.0.0.1:8000/api/api/${username}/${slug}/absent/${id}/user`);
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
                        <div className="h-full" key={item.id} style={{ background:"#FFFFFF"}}>
                            <NavbarJoinClassComponent />
                            <div className="w-full pb-5 mx-0 px-0 h-full " style={{ background:"#FFFFFF"}}>
                                <div  className="w-full">
                                    <div className="w-full">
                                        <ActionAbsentPasswordComponent  username={username} status={item.absent_status} absent_id={id} slug={slug} name={item.absent_name} email={item.email} end_time={item.absent_deadline} date={item.absent_date} />
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

export default ActionAbsentPassword