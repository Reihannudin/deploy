import {
    NavbarCreateAssigmentComponent
} from "../../Components/Body/Nav/Task/Assignment/NavbarCreateAssigment.Component";
import {CreateAssigmentComponent} from "../../Components/Assigment/CreateAssigment.Component";

function CreateAssigment (){
    return(
        <>
            <div className="w-full" style={{ background:"#FFFFFF"}}>
                <NavbarCreateAssigmentComponent />
                <div className="w-full pb-5 mx-0 px-0 h-full " style={{ background:"#FFFFFF"}}>
                    <div id="assigment" className="w-full">
                        <div className="w-full">
                            <CreateAssigmentComponent />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateAssigment