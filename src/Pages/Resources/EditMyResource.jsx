
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import {NavbarEditResourceComponent} from "../../Components/Body/Nav/Task/Resource/NavbarEditResource.Component";
import {EditResourceComponent} from "../../Components/Resource/EditResource.Component";

function EditMyResource (){

    const [resources , setResources] = useState([]);

    const {id , slug} = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                // const response = await axios.get(`https://rest-api.spaceskool.site/public/api/${slug}/resource/${id}`);
                const response = await axios.get(`http://127.0.0.1:8000/api/${slug}/resource/${id}`);
                const data = response.data;
                setResources(data);
            } catch (error) {
                console.log("Error Fetching Resource Data" , error)
            }
        }
        fetchData()
    } , [])


    return(
        <>
            <div>
                {resources.map((item) => {
                    return(
                         <div className="w-full" key={item.id} style={{ background:"#FFFFFF"}}>
                             <NavbarEditResourceComponent name={item.name} />
                             <div className="w-full pb-5 mx-0 px-0 h-full " style={{ background:"#FFFFFF"}}>
                                 <div id="resource" className="w-full">
                                     <div className="w-full">
                                         <EditResourceComponent id={item.id} name={item.name} description={item.description} url={item.url} />
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

export default EditMyResource