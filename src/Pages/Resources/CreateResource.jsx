import {NavbarCreateResourceComponent} from "../../Components/Body/Nav/Task/Resource/NavbarCreateResource.Component";
import React from "react";
import {CreateResourceComponent} from "../../Components/Resource/CreateResource.Component";

function CreateResource (){
    return(
        <>
            <div className="w-full" style={{ background:"#FFFFFF"}}>
                <NavbarCreateResourceComponent />
                <div className="w-full pb-5 mx-0 px-0 h-full " style={{ background:"#FFFFFF"}}>
                    <div id="resource" className="w-full">
                        <div className="w-full">
                            <CreateResourceComponent />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateResource