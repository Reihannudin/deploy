import {NavigationComponent} from "../../Components/Body/Nav/Navigation.Component";
import {BannerComponent} from "../../Components/Home/Banner.Component";
import {FeatureComponent} from "../../Components/Home/Feature.Component";
import {AboutComponent} from "../../Components/Home/About.Component";
import {SpacesPromotionComponent} from "../../Components/Home/SpacesPromotion.Component";
import {PreRegisterCardComponent} from "../../Components/Home/PreRegisterCard.Component";
import {FooterComponent} from "../../Components/Body/Footer/Footer.Component";

function Home(){

    localStorage.setItem("isLogin", false);

    return(
        <>
            <div className="w-full" style={{ background:"#FFFFFF"  , minWidth:"300px"}}>
                <NavigationComponent />
                <div className="w-full  lg:mx-auto mx-0 px-0 h-full mb-1 md:mb-1" style={{ background:"#FFFFFF" ,maxWidth:"1500px"}}>
                    <BannerComponent />
                    <FeatureComponent />
                    <AboutComponent />
                    <SpacesPromotionComponent />
                </div>
                <PreRegisterCardComponent />
                <FooterComponent />
            </div>
        </>
    )
}

export default  Home