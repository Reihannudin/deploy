import {NavigationComponent} from "../../Components/Body/Nav/Navigation.Component";
import {LearningListComponent} from "../../Components/Learning/LearningList.Component";
import {PreRegisterCardComponent} from "../../Components/Home/PreRegisterCard.Component";
import {FooterComponent} from "../../Components/Body/Footer/Footer.Component";

function Learning () {
    localStorage.setItem("isLogin", false);

    return(
        <>
            <NavigationComponent />
            <div className="h-full mb-6" style={{ background:"#FFFFFF"}}>
                <LearningListComponent />
            </div>
            <PreRegisterCardComponent />
            <FooterComponent />
        </>
    )
}

export default  Learning