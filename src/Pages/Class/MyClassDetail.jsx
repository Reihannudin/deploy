
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import {NavbarMyClassComponent} from "../../Components/Body/Nav/Class/NavbarMyClass.Component";
import {DetailMyClassComponent} from "../../Components/Class/DetailMyClass.Component";

function MyClassDetail (){

    const user = JSON.parse(localStorage.getItem('whoLogin'));
    const username = user.username;

    const [classes , setClasses] =  useState([]);

    const { id, slug } = useParams();


    useEffect(() => {
        const fetchData = async () => {
            try {
                // const response = await axios.get(`https://rest-api.spaceskool.site/public/api/${username}/${slug}/my/class`);
                const response = await axios.get(`http://127.0.0.1:8000/api/${username}/${slug}/my/class`);
                const data = response.data;
                setClasses(data);
            } catch (error){
                console.log("Error Fetching class data:"  , error)
            }
        }
        fetchData()
    } , [])

    return(
        <>
            {classes.map((item) => {
                return(
                    <div key={item.id}>
                        <div className="w-full" style={{ background:"#FFFFFF"}}>
                            <NavbarMyClassComponent name={item.name} username={username}  />
                            <div className="w-full pb-5 mx-0 px-0 h-full " style={{ background:"#FFFFFF"}}>
                                <DetailMyClassComponent code={item.code} name={item.name} teacher={item.teacher} students={item.students} subjects={item.subject} section={item.section} room={item.room} />
                            </div>
                        </div>
                        <div className="lg:hidden block mx-0 px-0">
                            {/*<FooterComponent  />*/}
                        </div>
                    </div>
                )
            })}

        </>
    )
}


export default MyClassDetail