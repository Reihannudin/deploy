import {useEffect, useState} from "react";
import axios from "axios";
import {NavbarEditProfileComponent} from "../../Components/Body/Nav/NavbarEditProfile.Component";
import {EditProfileComponent} from "../../Components/Profile/EditProfile.Component";

function EditProfile(){

    const user = JSON.parse(localStorage.getItem('whoLogin'));
    const username = user.username;
    const image = user.image;
    const banner = user.banner;

    const [profile , setProfile] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // const response = await axios.get(`https://rest-api.spaceskool.site/public/api/profile/${username}`);
                const response = await axios.get(`http://127.0.0.1:8000/api/profile/${username}`);
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
                        <div className="w-full" key={index} style={{ background:"#fcfcfc"}}>
                            <NavbarEditProfileComponent name={item.username}  />
                            <div className="w-full mx-0 px-0 h-full " style={{ background:"#fcfcfc"}}>
                                <EditProfileComponent photoProfile={image} banner={banner} name={item.name} username={item.username} bio={item.bio} address={item.address} join_date={item.join_date} />
                                {/*<MyProfileComponent name={item.name} username={item.username} bio={item.bio} address={item.address} join_date={item.join_date}/>*/}
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default EditProfile