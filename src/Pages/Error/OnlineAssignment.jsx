import React from "react";
import {Link, useParams} from "react-router-dom";

function OnlineAssignment() {

    const { class_id,   id,slug } = useParams();

    return (
        <div className="h-screen flex justify-center items-center">
            <div id="content">
                <div className="my-5">
                    <img className="h-full mx-auto my-auto" style={{ height: "70px" }} src="/assets/wifi-icon-purple.svg" />
                </div>
                <div className="w-10/12 md:w-8/12 mx-auto">
                    <p className="text-gray-600 font15-res-300 mb-8">Hmm, Sepertinya anda telah menghubungkan internet saat mengerjakan tugas, harap nonaktifkan internet saat pengerjaan tugas!!</p>
                    <Link to={`/view/${slug}/${class_id}/detail/assignment/${id}`} className="bg-purple-600 mx-auto text-white hover:bg-purple-700 py-2 px-4 font14-res-300 cursor-pointer my-4 border-radius-4">Kembali mengerjakan</Link>
                </div>
            </div>
        </div>
    );
}

export default OnlineAssignment;
