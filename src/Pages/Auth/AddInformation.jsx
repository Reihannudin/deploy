import {AddInformationCardComponent} from "../../Components/Auth/Card/Information/AddInformationCard.Component";
import {useNavigate, useSearchParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import bcrypt from "bcryptjs";
import api from "../../Config/api";


function AddInformation(){

    const navigate = useNavigate();
    const [email , setEmail] = useState('');
    const [name , setName] = useState('');
    const [username , setUsername] = useState('');
    const [contact , setContact] = useState('');
    const [birthday , setBirthday] = useState('');
    const [redirect, setRedirect] = useState("/add/information");
    const [redirectPath, setRedirectPath] = useState("/Register");
    const [isLoading, setIsLoading] = useState(false);

    const [errorEmail, setErrorEmail] = useState('');
    const [errorName, setErrorName] = useState('');
    const [errorUsername, setErrorUsername] = useState('');
    const [errorContact, setErrorContact] = useState('');
    const [errorBirthday, setErrorBirthday] = useState('');

    const getEmail = localStorage.getItem('registrationEmail');
    const getToken = localStorage.getItem('token');

    useEffect(() => {
        if (!getEmail && !getToken) {
            navigate("/Register");
        } else {
            setEmail(getEmail);
        }
    }, [navigate]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        setIsLoading(true); // Start loading indicator

        const formData = {
            name: name,
            username: username,
            contact: contact,
            birthday: birthday
        }

        let token =localStorage.getItem('token');

        api
            .post(`/add/information`, formData , {
                "Authorization: " : "Bearer " + token,
            })
            .then((response) => {
                setIsLoading(false); // Stop loading indicator

                if (response.data.status === 201) {
                    if (response.data.message === "Informasi berhasil diperbarui") {
                        let redirectUrl = response.data.redirect_path;
                        setRedirect(redirectUrl);
                        navigate(redirectUrl);
                    }
                } else if (response.data.status === 406) {

                    if (response.data.message === "Nama pengguna tidak boleh kosong") {
                        let redirectUrl = response.data.redirect_path;
                        setRedirect(redirectUrl);
                        setErrorName(response.data.message);
                        navigate(redirectUrl);
                    } else if (response.data.message === "Username pengguna tidak boleh kosong") {
                        let redirectUrl = response.data.redirect_path;
                        setRedirect(redirectUrl);
                        setErrorUsername(response.data.message);
                        navigate(redirectUrl);
                    }  else if (response.data.message === "Nomor Telepon tidak boleh kosong") {
                        let redirectUrl = response.data.redirect_path;
                        setErrorContact(response.data.message);
                        setRedirect(redirectUrl);
                        navigate(redirect);
                    } else if (response.data.message === "Tanggal lahir tidak boleh kosong") {
                        let redirectUrl = response.data.redirect_path;
                        setErrorBirthday(response.data.message);
                        setRedirect(redirectUrl);
                        navigate(redirect);
                    }
                    else if (response.data.message === "Pengguna tidak ditemukan") {
                        let redirectUrl = response.data.redirect_path;
                        setErrorBirthday(response.data.message);
                        setRedirect(redirectUrl);
                        navigate(redirect);
                    }

                }
            })
            .catch((error) => {
                const {errors} = error.response.data;
                setErrorEmail(errors?.email?.[0] || '');
                setErrorUsername(errors?.username?.[0] || '');
                setErrorName(errors?.name?.[0] || '');
                setErrorBirthday(errors?.birthday?.[0] || '');
            });
    }


    return(
        <>
            <div className="w-full  md:py-6 py-0 h-screen" style={{ background:"#FAFBFC" , minWidth:"300px"}}>
                <div className="xl:w-6/12 lg:w-7/12 md:w-9/12  mx-auto">
                    <div className="md:w-8/12 w-full mx-auto">
                        <AddInformationCardComponent
                            handleSubmit={(e) => handleSubmit(e)}
                            email={email}
                            username={username}
                            name={name}
                            contact={contact}
                            birthday={birthday}
                            setEmail={setEmail}
                            setName={setName}
                            setUsername={setUsername}
                            setContact={setContact}
                            setBirthday={setBirthday}
                            erroremail={errorEmail}
                            errorName={errorName}
                            errorContact={errorContact}
                            errorUsername={errorUsername}
                            errorBirthday={errorBirthday}
                            setErrorEmail={setErrorEmail}
                            setErrorName={setErrorName}
                            setErrorUsername={setErrorUsername}
                            setErrorContact={setErrorContact}
                            setErrorBirthday={setErrorBirthday}
                        />
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

export default AddInformation