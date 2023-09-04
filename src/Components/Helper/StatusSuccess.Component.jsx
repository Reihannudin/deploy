import {Link} from "react-router-dom";

export const StatusSuccessComponent = () => {
    return(
        <>
            <div className="bg-white py-6 mb-10 md:mb-32 md:pt-16 md:mt-20 md:px-10 sm:px-20 px-10" style={{ borderRadius: "8px" }}>
                <div className="w-full max-w-sm mx-auto">
                    <div>
                        <div className="mx-auto">
                            <img className="mx-auto" src="/assets/success-icon.svg" />
                        </div>
                        <div className="my-5">
                            <h2 className={"font22-res-300"}>Success Mengubah password</h2>
                            <p className="font16-res-400">Ubah Password anda saat anda lupa password authenticate </p>
                        </div>
                        <div className="text-center my-4">
                            <Link to="/login">
                                <div>
                                    <p className="text-gray-600 hover:text-purple-600" style={{ fontSize: "14px" }}>Pergi ke halaman login!</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}