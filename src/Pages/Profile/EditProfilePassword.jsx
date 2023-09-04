import {NavbarEditProfileComponent} from "../../Components/Body/Nav/NavbarEditProfile.Component";
import {EditProfilePasswordComponent} from "../../Components/Profile/EditProfilePassword.Component";

function EditProfilePassword(){

    const user = JSON.parse(localStorage.getItem('whoLogin'));
    const username = user.username;

    return(
        <>
            <div className="w-full"  style={{ background:"#ffffff"}}>
                <NavbarEditProfileComponent name={username}  />
                <div className="w-full mx-0 px-0 h-full " style={{ background:"#ffffff"}}>
                    <EditProfilePasswordComponent />
                </div>
            </div>
        </>
    )
}

export default EditProfilePassword