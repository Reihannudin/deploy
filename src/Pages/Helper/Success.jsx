import {StatusSuccessComponent} from "../../Components/Helper/StatusFailed.Component";

function Success(){
    return(
        <>
            <div className="w-full max-h-full h-full md:py-6 py-0" style={{ background:"#FAFBFC" , minWidth:"385px"}}>
                <div className="xl:w-6/12 lg:w-7/12 md:w-9/12  mx-auto">
                    <div className="md:w-8/12   w-full mx-auto">
                        <StatusSuccessComponent />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Success