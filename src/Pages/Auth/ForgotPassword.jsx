import {ForgotPasswordCardComponent} from "../../Components/Auth/Card/ForgotPasswordCard.Component";

function ForgotPassword(){


    return(
        <>
            <div className="w-full md:py-6 py-0" style={{ background:"#FAFBFC" , minWidth:"385px"}}>
                <div className="xl:w-6/12 lg:w-7/12 md:w-9/12  mx-auto">
                    <div className="md:w-8/12   w-full mx-auto">
                        <ForgotPasswordCardComponent />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ForgotPassword