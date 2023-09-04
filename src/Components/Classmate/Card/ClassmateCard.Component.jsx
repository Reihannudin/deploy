
export const ClassmateCardComponent = (props) => {
    return(
        <>
            <div className="w-full py-3" style={{ borderBottom:"1px solid #ebebeb"}}>
                <div className="flex gap-4">
                    <div style={{ height:"40px"}}>
                        <img className="h-full radius-100" src="/assets/profile-dummy.svg"/>
                    </div>
                    <div className="my-auto">
                        <div className="text-left">
                            <h3 className="font16-res-400" style={{ fontWeight:"500" , color:"#6b6a6a"}}>{props.name}</h3>
                            <h3 className="font14-res-300" style={{ fontWeight:"500" , color:"#868686"}}>{props.username}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}