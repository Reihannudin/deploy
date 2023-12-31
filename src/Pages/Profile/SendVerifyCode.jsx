import {NavbarEditProfileComponent} from "../../Components/Body/Nav/NavbarEditProfile.Component";
import {EditProfilePasswordComponent} from "../../Components/Profile/EditProfilePassword.Component";
import {useNavigate} from "react-router-dom";
import {useRef, useState} from "react";
import api from "../../Config/api";
import {SendVerfyCodeComponent} from "../../Components/Profile/SendVerfyCode.Component";

function SendVerifyCode({user , isFetching , isDataFetched}){

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [code, setCode] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorCode, setErrorCode] = useState('');
    const [redirect, setRedirect] = useState("send/verify/code");
    const [isLoading, setIsLoading] = useState(false);
    const [redirectPath, setRedirectPath] = useState("/edit/profile");

    const inputRefCode = useRef(null);

    const [showAlert, setShowAlert] = useState(false);



    const handleSuccessResponse = (response) => {
        if (response.data.message === "Sukses verifikasi kode email") {
            let redirectUrl = response.data.redirect_path;
            localStorage.setItem("isVerifyCodeSend", true);
            localStorage.setItem("token", response.data.token);
            setRedirect(redirectUrl); // Set the redirect path in state first
            navigate(redirectUrl);
        }
    };

    const handleErrorResponse = (response) => {
        if (response.data.status === 406) {
            let redirectUrl = response.data.redirect_path;
            setRedirect(redirectUrl);
            setErrorCode(response.data.errors.code);
            navigate(redirectUrl);
        }
    };


    const handleGetCode = (event) => {
        event.preventDefault();

        setIsLoading(true); // Start loading indicator

        const formData = {
            email: user.email,
        }

        setShowAlert(true);

        api
            .post('/send-verification-code/f/password', formData)
            .then((response) => {

                setIsLoading(false); // Stop loading indicator

                if (response.data.status === 200) {
                    if (response.data.message === "Kode verifikasi email telah dikirim, tolong periksa email anda") {
                        localStorage.setItem("isVerifyCodeSend", true);

                        navigate("/verification/code/change/password"); // Directly navigate without using the 'redirect' state

                    }
                } else if (response.data.status === 406){
                    if (response.data.errors.code === "Kode verifikasi tidak boleh kosong") {
                        let redirectUrl = response.data.redirect_path;
                        setRedirectPath(redirectUrl);
                        setErrorEmail(response.data.errors.email);
                        // Navigate after setting the necessary values
                        navigate(redirectUrl);
                    } else if (response.data.errors.email === "Format email tidak valid") {
                        let redirectUrl = response.data.redirect_path;
                        setErrorEmail(response.data.errors.email);
                        setRedirectPath(redirectUrl);
                        // Navigate after setting the necessary values
                        navigate(redirectUrl);
                    }
                }
            })
            .catch((error) => {
                const { errors } = error.response.data;
                setErrorEmail(errors?.email?.[0] || '');
            });
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        setIsLoading(true); // Start loading indicator

        const formData = {
            email: user.email,
            code: code,
        }

        api
            .post(`/verify/email/f/password`, formData, {
                headers: {
                    'Accept': '*/*',
                    // Other headers if needed
                },
            })
            .then((response) => {
                setIsLoading(false); // Stop loading indicator

                if (response.data.status === 201) {
                    handleSuccessResponse(response);
                } else if (response.data.status === 406) {
                    handleErrorResponse(response);
                }
            })
            .catch((error) => {
                setIsLoading(false); // Stop loading indicator
                const { errors } = error.response.data;
                setErrorCode(errors?.code?.[0] || '');
            });
    }
    return(
        <>
            <div className="w-full"  style={{ background:"#ffffff"}}>
                <NavbarEditProfileComponent username={user.username}  isFetching={isFetching}  isDataFetched={isDataFetched} />
                <div className="w-full mx-0 px-0 h-full " style={{ background:"#ffffff"}}>
                    <SendVerfyCodeComponent />
                </div>
            </div>
        </>
    )
}


export default SendVerifyCode