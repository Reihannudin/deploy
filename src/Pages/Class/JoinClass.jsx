import {NavbarJoinClassComponent} from "../../Components/Body/Nav/Class/NavbarJoinClass.Component";
import {JoinClassComponent} from "../../Components/Class/JoinClass.Component";

function JoinClass(){
    return (
        <>
            <div className="w-full" style={{ background:"#FFFFFF"}}>
                <NavbarJoinClassComponent />
                <div className="w-full pb-5 mx-0 px-0 h-full " style={{ background:"#FFFFFF"}}>
                    <div  className="w-full">
                        <div className="w-full">
                            <JoinClassComponent />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default JoinClass