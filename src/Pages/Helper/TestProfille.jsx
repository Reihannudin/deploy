import {useEffect, useState} from "react";
import axios from "axios";
import {TestProfileComponent} from "./TestProfile.Component";
import {NavbarProfileComponent} from "../../Components/Body/Nav/NavbarProfile.Component";


function TestProfile(){

    const user = JSON.parse(localStorage.getItem('whoLogin'));
    const username = "reihannudin";

    const [profile , setProfile] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://rest-api.spaceskool.site/public/api/profile/${username}`);
                const data = response.data;
                setProfile(data);
            } catch (error){
                console.log("Error Fetching profile data:" , error)
            }
        }
        fetchData()
    }, [])

    console.log(profile)

    return(
        <>
            <div>
                {profile.map((item , index) => {
                    return(
                        <div className="w-full bg-white" key={index} >
                            <NavbarProfileComponent name={item.username}  />
                            <div className="w-full mx-0 px-0 h-full " style={{ background:"#e0e0e0"}}>
                                <TestProfileComponent name={item.name} username={item.username} bio={item.bio} address={item.address} join_date={item.join_date}/>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default TestProfile