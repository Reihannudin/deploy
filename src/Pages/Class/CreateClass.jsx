import {NavbarCreateClassComponent} from "../../Components/Body/Nav/Class/NavbarCreateClass.Component";
import CreateClassComponent from "../../Components/Class/CreateClass.Component";

function CreateClass (){
    return(
        <>
            <div className="w-full" style={{ background:"#FFFFFF"}}>
                <NavbarCreateClassComponent />
                <div className="w-full pb-5 mx-0 px-0 h-full " style={{ background:"#FFFFFF"}}>
                    <div  className="w-full">
                        <div className="w-full">
                            <CreateClassComponent />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateClass