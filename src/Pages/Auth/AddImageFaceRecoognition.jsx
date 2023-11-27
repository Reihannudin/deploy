import {useLocation, useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {AddInformationImageCardComponent} from "../../Components/Auth/Card/Information/AddInformationImageCard.Component";
import {AddImageFaceRecognitionComponent} from "../../Components/Auth/Card/Information/AddImageFaceRecognition.Component";
import api from "../../Config/api";

function AddImageFaceRecoognition(){

    const navigate = useNavigate();
    const [email, setEmail] = useState();
    const [isLoading, setIsLoading] = useState(false);

    const getEmail = localStorage.getItem('registrationEmail');
    const getToken = localStorage.getItem('token');

    useEffect(() => {
        if (!getEmail && !getToken) {
            navigate("/Register");
        } else {
            setEmail(getEmail);
        }
    }, [navigate, getEmail, getToken]);

    const location = useLocation();

    const searchParams = new URLSearchParams(location.search);

    const photoParam = searchParams.get("photo");

    if (photoParam) {
        // Only set the 'photo' in localStorage if it's not null or undefined
        localStorage.setItem("photo", photoParam);
    }


    const photoToken = localStorage.getItem('photo');
    const authToken = localStorage.getItem('auth_token');

    useEffect(() => {
        if (authToken){
            if (photoToken) {
                navigate("/");
            }
        }else {
            if (photoToken) {
                navigate("/lLogin");
            }
        }
    }, [photoToken, navigate]);

    const handleSubmit = (event) => {
        event.preventDefault();

        const baseUrl = "http://127.0.0.1:5000/add/ml/verfy/image/face-recognition/redirect";
        const queryString = `?email=${email}&token=${getToken}`;
        const redirectUrl = baseUrl + queryString;

        navigate(redirectUrl);
    };


    return(
        <>
            <div className="w-full  md:py-6 py-0 h-screen" style={{ background:"#FAFBFC" , minWidth:"300px"}}>
                <div className="xl:w-6/12 lg:w-7/12 md:w-9/12  mx-auto">
                    <div className="md:w-8/12 w-full mx-auto">
                        <AddImageFaceRecognitionComponent  handleSubmit={(e)=> handleSubmit(e)} email={email}  token={getToken} />
                    </div>
                </div>
            </div>
            {isLoading && (
                <div className="fixed gap-2 inset-0 flex items-center justify-center bg-white opacity-100">
                    <div
                        className="animate-spin rounded-full border-r-gray-50 border-l-gray-50  border-b-gray-50  w-8 h-8 md:h-10 md:w-10 border-t-4 border-purple-700"></div>
                </div>
            )}
        </>
    )
}

export default AddImageFaceRecoognition