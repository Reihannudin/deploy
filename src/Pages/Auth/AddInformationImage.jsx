import {AddInformationImageCardComponent} from "../../Components/Auth/Card/AddInformationImageCard.Component";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import api from "../../Config/api";

function AddInformationImage (){

    const navigate = useNavigate();
    const [email , setEmail] = useState('');
    const [image , setImage] = useState('');
    const [bio , setBio] = useState('');
    const [school , setSchool] = useState('');
    const [address , setAddress] = useState('');
    const [errorImage , setErrorImage] = useState('');
    const [errorEmail , setErrorEmail] = useState('');
    const [errorBio , setErrorBio] = useState('');
    const [errorAddress , setErrorAddress] = useState('');
    const [errorSchool , setErrorSchool] = useState('');
    const [redirectPath, setRedirectPath] = useState("/register");
    const [isLoading, setIsLoading] = useState(false);
    const [redirectUrl, setRedirectUrl] = useState('');

    localStorage.setItem("isLogin", false);


    console.log(errorSchool)
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior

        setIsLoading(true); // Start loading indicator

        const formData = {
            image: image,
            bio: bio,
            school: school,
            address: address,
        };

        let token =localStorage.getItem('token');

        api
            .post(`/add/information/image`, formData ,{
                "Authorization: " : "Bearer " + token,
            })
            .then((response) => {
                setIsLoading(false); // Stop loading indicator
                if (response.data.status === 201) {
                    console.log(response.data.message);
                    if (response.data.message === "Informasi gambar berhasil diperbarui") {
                        let redirectUrl = response.data.redirect_path;
                        setRedirectPath(redirectUrl);
                        navigate(redirectUrl);
                    }
                }
                else if (response.data.status === 406) {
                    console.log(response.data.message);
                    if (response.data.message === "Tolong isi asal sekolah kamu!") {
                        let redirectUrl = response.data.redirect_path;
                        setErrorSchool(response.data.message);
                        setRedirectPath(redirectUrl);
                        // Navigate after setting the necessary values
                        navigate(redirectUrl);
                    }else  if (response.data.message === "Pengguna tidak ditemukan") {
                        let redirectUrl = response.data.redirect_path;
                        setRedirectPath(redirectUrl);
                        setErrorSchool(response.data.message);
                        // Navigate after setting the necessary values
                        navigate(redirectUrl);
                    }
                }


            })
            .catch((error) => {
                setIsLoading(false);
                // const { errors } = error.response.data;
                // setErrorImage(errors?.image?.[0] || '');
                // setErrorBio(errors?.bio?.[0] || '');
                // setErrorSchool(errors?.school?.[0] || '');
                // setErrorAddress(errors?.address?.[0] || '');

            });
    };

    console.log(isLoading)


    return(
        <>
            <div className="w-full  md:py-6 py-0" style={{ background:"#FAFBFC" , minWidth:"300px"}}>
                <div className="xl:w-6/12 lg:w-7/12 md:w-9/12  mx-auto">
                    <div className="md:w-8/12 w-full mx-auto">
                        <AddInformationImageCardComponent
                            image={image}
                            bio={bio}
                            school={school}
                            address={address}
                            setImage={setImage}
                            setBio={setBio}
                            setSchool={setSchool}
                            setAddress={setAddress}
                            errorSchool={errorSchool}
                            handleSubmit={(e)=> handleSubmit(e)}
                        />
                    </div>
                </div>
            </div>
            {isLoading && (
                <div className="fixed gap-2 inset-0 flex items-center justify-center bg-white opacity-100">
                    {/*<div className="absolute gap-2 inset-0 flex items-center h-full justify-center bg-white opacity-100">*/}
                    <div className="bg-white py-2 ">
                        <div className="spinner">
                            <img src="/assets/planet.svg" style={{ height:"30px"}} alt="Loading..." />
                        </div>
                    </div>
                    <div className="py-3">
                        <p className="text-purple-600 font16-res-400"> Loading...</p>
                    </div>
                </div>
            )}
        </>
    )
}

export default AddInformationImage