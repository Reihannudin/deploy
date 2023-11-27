import {NavbarEditProfileComponent} from "../../Components/Body/Nav/NavbarEditProfile.Component";
import {EditProfilePasswordComponent} from "../../Components/Profile/EditProfilePassword.Component";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import bcrypt from "bcryptjs";
import api from "../../Config/api";

function EditProfilePassword({user , isFetching , isDataFetched}){

    const navigate = useNavigate();

    const [password , setPassword] = useState('')
    const [newPassword , setNewPassword] = useState('')
    const [confirmPassword , setConfirmPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false);
    const [redirectPath, setRedirectPath] = useState("/Register");

    const [errorPassword , setErrorPassword] = useState('');
    const [errorNewPassword , setErrorNewPassword] = useState('');
    const [errorConfirmPassword , setErrorConfirmPassword] = useState('');

    const bcrypt = require('bcryptjs');
    const salt = bcrypt.genSaltSync(10);

    const handleSubmit = (event) => {
        event.preventDefault();

        setIsLoading(true); // Start loading indicator

        const formData = {
            old_password : password,
            new_password : newPassword ,
            confirm_password : bcrypt.hashSync(confirmPassword, salt),
        }

        const token = localStorage.getItem('token')

        console.log(bcrypt.hashSync(password, salt));
        console.log(formData);

        api
            .put(`/edit/password`, formData , {
                "Authorization: " : "Bearer " + token,
            })
            .then((response) => {
                console.log(response);
                setIsLoading(false); // Stop loading indicator
                if (response.data.status === 201) {
                    console.log(response.data.message);
                    if (response.data.message === "Berhasil memperbarui password") {
                        let redirectUrl = response.data.redirect_path;
                        setRedirectPath(redirectUrl);
                        navigate(redirectUrl);
                    }
                } else if (response.data.status === 406) {

                    console.log(response.data.status)
                    console.log(response.data.errors)
                    console.log(response.data.errors.password)

                    if (response.data.errors.password === "Password lama tidak boleh kosong") {
                        let redirectUrl = response.data.redirect_path;
                        setErrorPassword(response.data.errors.password);
                        setRedirectPath(redirectUrl);
                        navigate(redirectUrl);
                        // setErrorPassword('');

                    } else if (response.data.errors.password === "Password baru tidak boleh kosong") {
                        let redirectUrl = response.data.redirect_path;
                        setRedirectPath(redirectUrl);
                        setErrorNewPassword(response.data.errors.password);
                        navigate(redirectUrl);
                    } else if (response.data.errors.password === "Password baru harus memiliki setidaknya 8 karakter") {
                        let redirectUrl = response.data.redirect_path;
                        setRedirectPath(redirectUrl);
                        setErrorNewPassword(response.data.errors.password);
                        navigate(redirectUrl);
                    } else if (response.data.errors.password === "Konfirmasi password tidak boleh kosong") {
                        let redirectUrl = response.data.redirect_path;
                        setRedirectPath(redirectUrl);
                        setErrorConfirmPassword(response.data.errors.password);
                        navigate(redirectUrl);
                    }
                    else if (response.data.errors.password === "Password lama tidak cocok") {
                        let redirectUrl = response.data.redirect_path;
                        setRedirectPath(redirectUrl);
                        setErrorPassword(response.data.errors.password);
                        navigate(redirectUrl);
                    }
                    else if (response.data.errors.password === "Password baru harus sesuai dengan konfirmasi password") {
                        let redirectUrl = response.data.redirect_path;
                        setRedirectPath(redirectUrl);
                        setErrorNewPassword(response.data.errors.password);
                        navigate(redirectUrl);
                    }
                }
            })
            .catch((error) => {
                setIsLoading(false); // Stop loading indicator
                const { errors } = error.response.data;
            });
    };


    return(
        <>
            <div className="w-full"  style={{ background:"#ffffff"}}>
                <NavbarEditProfileComponent username={user.username}  isFetching={isFetching}  isDataFetched={isDataFetched} />
                <div className="w-full mx-0 px-0 h-full " style={{ background:"#ffffff"}}>
                    <EditProfilePasswordComponent     password={password}
                                                      newPassword={newPassword}
                                                      confirmPassword={confirmPassword}
                                                      setPassword={setPassword}
                                                      setNewPassword={setNewPassword}
                                                      setConfirmPassword={setConfirmPassword}
                                                      errorPassword={errorPassword}
                                                      errorNewPassword={errorNewPassword}
                                                      errorConfirmPassword={errorConfirmPassword}
                                                      handleSubmit={(e)=> handleSubmit(e)}/>
                </div>
            </div>
        </>
    )
}

export default EditProfilePassword