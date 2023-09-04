
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import {NavbarEditClassComponent} from "../../Components/Body/Nav/Class/NavbarEditClass.Component";
import {EditClassComponent} from "../../Components/Class/EditClass.Component";

function EditMyClass (){


    const user = JSON.parse(localStorage.getItem('whoLogin'));
    const username = user.username;

    const [classes , setClasses] = useState([]);

    const { id, slug } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                // const response = await axios.get(`https://rest-api.spaceskool.site/public/api/${username}/${slug}/my/class`);
                const response = await axios.get(`http://127.0.0.1:8000/api/${username}/${slug}/my/class`);
                const data = response.data;
                setClasses(data);
            } catch (error){
                console.log("Error Fetching Absent Data:"  , error)
            }
        }
        fetchData()
    } , [])


    return(
        <>
            <div>
                {classes.map((item) => {
                    return (
                        <div className="w-full" style={{ background:"#FFFFFF"}}>
                            <NavbarEditClassComponent name={item.name} />
                            <div className="w-full pb-5 mx-0 px-0 h-full " style={{ background:"#FFFFFF"}}>
                                <div id="class" className="w-full">
                                    <div className="w-full">
                                        <EditClassComponent id={id} slug={slug} username={username} name={item.name} room={item.room} section={item.section} subject={item.subject} maxStudent={item.max_student} />
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

export default EditMyClass