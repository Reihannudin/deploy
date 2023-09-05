import {AddInformationCardComponent} from "../../Components/Auth/Card/AddInformationCard.Component";
import {useNavigate, useSearchParams} from "react-router-dom";
import React, {useState} from "react";
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
    const [redirectPath, setRedirectPath] = useState("/register");
    const [isLoading, setIsLoading] = useState(false);
    localStorage.setItem("isLogin", false);

    const [errorEmail, setErrorEmail] = useState('');
    const [errorName, setErrorName] = useState('');
    const [errorUsername, setErrorUsername] = useState('');
    const [errorContact, setErrorContact] = useState('');
    const [errorBirthday, setErrorBirthday] = useState('');


    const handleSubmit = async (event) => {
        event.preventDefault();

        setIsLoading(true); // Start loading indicator

        const formData = {
            name: name,
            username: username,
            contact: contact,
            birthday: birthday
        }

        console.log(formData)

        console.log(localStorage.getItem('token'))
        let token =localStorage.getItem('token');

        api
            .post(`/add/information`, formData , {
                "Authorization: " : "Bearer " + token,
            })
            .then((response) => {
                setIsLoading(false); // Stop loading indicator

                console.log(response.data.status)

                if (response.data.status === 201) {
                    console.log(response.data.message)
                    if (response.data.message === "Informasi berhasil diperbarui") {
                        let redirectUrl = response.data.redirect_path;
                        setRedirect(redirectUrl);
                        navigate(redirectUrl);
                    }
                } else if (response.data.status === 406) {
                    console.log(response.data.message)
                    console.log(response.data.message)

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
                        console.log(redirectUrl)
                        setErrorContact(response.data.message);
                        setRedirect(redirectUrl);
                        navigate(redirect);
                    } else if (response.data.message === "Tanggal lahir tidak boleh kosong") {
                        let redirectUrl = response.data.redirect_path;
                        console.log(redirectUrl)
                        setErrorBirthday(response.data.message);
                        setRedirect(redirectUrl);
                        navigate(redirect);
                    }
                    else if (response.data.message === "Pengguna tidak ditemukan") {
                        let redirectUrl = response.data.redirect_path;
                        console.log(redirectUrl)
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


    console.log(isLoading)
    return(
        <>
            <div className="w-full  md:py-6 py-0" style={{ background:"#FAFBFC" , minWidth:"300px"}}>
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

export default AddInformation