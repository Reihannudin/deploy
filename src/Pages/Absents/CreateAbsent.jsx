import {NavbarCreateAbsentComponent} from "../../Components/Body/Nav/Task/Absents/NavbarCreateAbsent.Component";
import {CreateAbsentComponent} from "../../Components/Absent/CreateAbsent.Component";

function CreateAbsent(){
    return(
        <>
            <div className="w-full" style={{ background:"#FFFFFF"}}>
                <NavbarCreateAbsentComponent />
                <div className="w-full pb-5 mx-0 px-0 h-full " style={{ background:"#FFFFFF"}}>
                    <div id="absent" className="w-full">
                        <div className="w-full">
                            <CreateAbsentComponent />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateAbsent