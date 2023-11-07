import React from "react";
import {Link} from "react-router-dom";

export const AddImageFaceRecognitionComponent = ({handleSubmit , email , token}) => {
    return(
        <>
            <div className="bg-white py-6 mb-10 px-10" style={{ borderRadius:"8px"}}>
                <div className="w-full max-w-sm mx-auto">
                    <div className="my-8" style={{ height:"40px"}}>
                        <img className="h-full" src="/assets/spaceSkool-logo-account.svg" alt=""/>
                    </div>
                    <div className="mx-0 text-left">
                        <h1 className="font-bold" style={{ fontSize:"26px"}}>Tambahkan Image Verifikasi Wajah anda</h1>
                    </div>
                    {/*http://127.0.0.1:5000/add/ml/verfy/image/face-recognition?email=${email}&token=${token}*/}

                    <div className="text-left">
                        <div >
                            <div className="mt-8 mb-16">
                                <label style={{ color:"#777575" }} className="font16-res-300">Ambil gambar wajah Anda, harap lepaskan semua benda yang ada di wajah Anda, seperti kacamata dan masker.</label>
                                <form onSubmit={handleSubmit}>

                                    <div className="mt-16">
                                        {/**/}
                                        <Link to={`http://127.0.0.1:5000/add/ml/verfy/image/face-recognition/redirect?email=${email}&token=${token}`} className="w-full " >
                                            <div className="w-full font-medium py-2.5 text-center border border-purple-600 rounded text-white bg-purple-600 hover:bg-purple-700">
                                                Ambil Gambar
                                            </div>
                                        </Link>
                                    </div>

                                    {/*<button className="w-full mt-16" onSubmit={handleSubmit}>*/}
                                    {/*    <div className="w-full font-medium py-2.5 text-center border border-purple-600 rounded text-white bg-purple-600 hover:bg-purple-700">*/}
                                    {/*        Ambil Gambar*/}
                                    {/*    </div>*/}
                                    {/*</button>*/}
                                </form>

                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}