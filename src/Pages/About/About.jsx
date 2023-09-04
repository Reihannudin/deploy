import {NavigationComponent} from "../../Components/Body/Nav/Navigation.Component";
import {AboutHeaderComponent} from "../../Components/About/AboutHeader.Component";
import {AboutPageComponent} from "../../Components/About/AboutPage.Component";
import {AboutSosialMediaComponent} from "../../Components/About/AboutSosialMedia.Component";
import {PreRegisterCardComponent} from "../../Components/Home/PreRegisterCard.Component";
import {FooterComponent} from "../../Components/Body/Footer/Footer.Component";

function About(){
    return(
        <>
            <NavigationComponent />
            <div className="w-full mx-0 px-0 h-full mb-10 pb-10 lg:pb-20 md:mb-4" style={{ background:"#FFFFFF"}}>
                <AboutHeaderComponent />
                <AboutPageComponent />
                <AboutSosialMediaComponent />
            </div>
            <PreRegisterCardComponent />
            <FooterComponent />
        </>
    )
}

export default About