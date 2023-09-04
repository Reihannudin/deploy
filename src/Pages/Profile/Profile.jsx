import {NavbarProfileComponent} from "../../Components/Body/Nav/NavbarProfile.Component";
import {ProfileComponent} from "../../Components/Profile/Profile.Component";

function Profile () {
    return(
        <>
            <div className="w-full" style={{ background:"#fcfcfc"}}>
                <NavbarProfileComponent />
                <div className="w-full mx-0 px-0 h-full " style={{ background:"#fcfcfc"}}>
                    <ProfileComponent />
                </div>
            </div>
        </>
    )
}

export default Profile