import {SetNewPasswordCardComponent} from "../../Components/Auth/Card/SetNewPasswordCard.Component";

function SetNewPassword(){

    return(
        <>
            <div className="w-full py-6" style={{ background:"#FAFBFC" , minWidth:"550px"}}>
                <div className="xl:w-6/12 lg:w-7/12 md:w-9/12  mx-auto">
                    <div className="md:w-8/12 w-9/12 mx-auto">
                        <SetNewPasswordCardComponent />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SetNewPassword