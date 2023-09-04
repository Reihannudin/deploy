import {NavigationComponent} from "../../Components/Body/Nav/Navigation.Component";
import {DetailLearningComponent} from "../../Components/Learning/DetailLearning.Component";
import {FooterComponent} from "../../Components/Body/Footer/Footer.Component";

function DetailLearning () {
    return(
        <>
            <NavigationComponent />
            <div className="h-full mb-6" style={{ background:"#FFFFFF"}}>
                <DetailLearningComponent  />
            </div>
            <FooterComponent />
        </>
    )
}

export default DetailLearning