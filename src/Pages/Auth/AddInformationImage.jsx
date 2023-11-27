import {AddInformationImageCardComponent} from "../../Components/Auth/Card/Information/AddInformationImageCard.Component";
import React, {useEffect, useState} from "react";
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
     const [errorSchool , setErrorSchool] = useState('');
    const [redirectPath, setRedirectPath] = useState("/Register");
    const [isLoading, setIsLoading] = useState(false);

    const [schoolList , setSchoolList] = useState([]);
    const [isFetchingSchool, setIsFetchingSchool] = useState(true);
    const [isSchoolFetched, setIsSchoolFetched] = useState(false);

    const getEmail = localStorage.getItem('registrationEmail');
    const getToken = localStorage.getItem('token');

    useEffect(() => {
        let isMounted = true;
        let token =localStorage.getItem('token');

        const fetchData = async () => {
            try {
                if (!isSchoolFetched) {
                    const response = await api.get(`/school`  ,{
                        "Authorization: " : "Bearer " + token,
                    });
                    const data = response.data;

                    if (isMounted) {
                        setSchoolList(data);
                        setIsSchoolFetched(true);
                        setIsFetchingSchool(false);
                    }
                }

            } catch (error) {
                if (isMounted) {
                    setErrorSchool(error);
                    setIsFetchingSchool(false);
                }
            }
        };

        const timeout = setTimeout(() => {
            if (isFetchingSchool) {
                if (isMounted) {
                    setErrorSchool(new Error("Timeout: Could not fetch data."));
                    setIsFetchingSchool(false);
                }
            }
        }, 20000);

        fetchData();

        return () => {
            isMounted = false;
            clearTimeout(timeout);
        };
    }, [isSchoolFetched]);



    useEffect(() => {
        if (!getEmail && !getToken) {
            navigate("/Register");
        } else {
            setEmail(getEmail);
        }
    }, [navigate]);

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
                      if (response.data.message === "Informasi gambar berhasil diperbarui") {
                        let redirectUrl = response.data.redirect_path;
                        setRedirectPath(redirectUrl);
                        navigate(redirectUrl);
                    }
                }

                else if (response.data.status === 406) {
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
                    }else  if (response.data.message === " mohon maaf saat ini sekolah anda belum terdaftar, Tolong masukan nama sekolah anda!") {
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
              
            });
    };



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
                            schoolsList={schoolList}
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
                    <div
                        className="animate-spin rounded-full border-r-gray-50 border-l-gray-50  border-b-gray-50  w-8 h-8 md:h-10 md:w-10 border-t-4 border-purple-700"></div>


                </div>
            )}
        </>
    )
}

export default AddInformationImage