import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import {NavbarMyDetailAbsentComponent} from "../../Components/Body/Nav/Task/Absents/NavbarMyDetailAbsent.Component";
import {DetailStudentAbsentComponent} from "../../Components/Classmate/DetailStudentAbsent.Component";


function MyDetailAbsentStudents () {

    const user = JSON.parse(localStorage.getItem('whoLogin'));
    const username = user.username;

    const [absents , setAbsents] = useState([]);

    const { id , class_id, slug } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                // const response = await axios.get(`https://rest-api.spaceskool.site/public/api/${slug}/absent/${id}`);
                const response = await axios.get(`http://127.0.0.1:8000/api/${slug}/absent/${id}`);
                const data = response.data;
                setAbsents(data);
            } catch (error){
                console.log("Error Fetching class data:"  , error)
            }
        }
        fetchData()
    } , [])

    //
    return(
        <>
            <div>
                {absents.map((item) => {
                    return(
                        <div className="w-full" key={item.id} style={{ background:"#FFFFFF"}}>
                            <NavbarMyDetailAbsentComponent name={item.name} />
                            <div className="w-full pb-5 mx-0 px-0 h-full " style={{ background:"#FFFFFF"}}>
                        {/* Tab Contents */}
                        <div id="tab-contents" className=" w-full mx-auto">
                            <div id="student" className=" p-4">
                                <div className="xl:w-10/12 lg:w-11/12 md:w-10/12 w-full mx-auto  md:pt-16  pt-16">
                                    <DetailStudentAbsentComponent status={item.status}  post_time={item.post_time}  start_time={item.start_time} end_time={item.end_time}  date={item.date} />
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

export default MyDetailAbsentStudents