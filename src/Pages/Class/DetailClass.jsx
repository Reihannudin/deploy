
import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import {NavbarClassComponent} from "../../Components/Body/Nav/Class/NavbarClass.Component";
import {DetailClassComponent} from "../../Components/Class/DetailClass.Component";

function DetailClass (){

    const user = JSON.parse(localStorage.getItem('whoLogin'));
    const username = user.username;

    const [classes , setClasses] =  useState([]);

    const { id, slug } = useParams();


    useEffect(() => {
        const fetchData = async () => {
            try {
                // const response = await axios.get(`https://rest-api.spaceskool.site/public/api/${slug}/class`);
                const response = await axios.get(`http://127.0.0.1:8000/api/${slug}/class`);
                const data = response.data;
                setClasses(data);
            } catch (error){
                console.log("Error Fetching class data:"  , error)
            }
        }
        fetchData()
    } , [])

    console.log(classes)

    return(
        <>
            <div>
                {classes.map((item) => {
                    return(
                        <div className="w-full" style={{ background:"#FFFFFF"}} key={item.id}>
                            <NavbarClassComponent name={item.name} username={username} />
                            <div className="w-full pb-5 mx-0 px-0 h-full " style={{ background:"#FFFFFF"}}>
                                <DetailClassComponent id={item.id} code={item.code} name={item.name} teacher={item.teacher} students={item.students} subjects={item.subject} section={item.section} room={item.room} />
                            </div>
                        </div>

                    )
                })}
            </div>
        </>
    )
}

export default DetailClass