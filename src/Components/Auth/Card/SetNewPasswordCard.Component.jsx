import {useState} from "react";
import bcrypt from "bcryptjs";


export const SetNewPasswordCardComponent = () => {

    const [password , setPassword] = useState('')
    const [confirmPassword , setConfirmPassword] = useState('')
    const urlParams = new URLSearchParams(window.location.search);
    const email = urlParams.get("email");

    // console.log(email)

    const bcrypt = require('bcryptjs');
// Generate a salt to use for the hash
    const salt = bcrypt.genSaltSync(10);

    const onChangePassword = (event) => {
        const password = event.target.value;
        setPassword(password)
    }

    const onChangeConfirmPassword = (event) => {
        const confirmPassword = event.target.value;
        setConfirmPassword(confirmPassword)
     }

    const VisibiliyPassword = () => {
        const visibility = document.getElementById('password')
        if (visibility.type === "password"){
            visibility.type = "text"
        } else if (visibility.type === "text"){
            visibility.type = "password"
        }
    }

    const VisibiltyConfirmPassword = () => {
        const visibility = document.getElementById('confirm_password')
        if (visibility.type === "password"){
            visibility.type = "text"
        } else if (visibility.type === "text"){
            visibility.type = "password"
        }
    }

    return(
        <>
            <div className="bg-white my-auto pb-12 pt-8  px-10 " style={{ borderRadius:"8px"}}>
                <div>
                    <div className="my-8" style={{ height:"40px"}}>
                        <img className="h-full" src="/assets/spaceSkool-logo-account.svg" alt=""/>
                    </div>
                    <div className="mx-0 text-left">
                        <h1 className="font-bold" style={{ fontSize:"26px"}}>Set your new password SpaceSkool Account.</h1>
                    </div>
                    <div className="text-left">
                        <div >
                            <div className="my-8">
                                <label style={{ color:"#777575" , fontSize:"14px"}}>New Password</label>
                                <div className="flex">
                                    <input id="password" required  value={password} type="password" onChange={onChangePassword} className="w-full py-3 border-b-gray-300" style={{ borderBottom:"1px solid #ebebeb"}} placeholder="your password"/>
                                    <button onClick={VisibiliyPassword}>
                                        <i className="fa-solid fa-eye-slash" style={{ color:"#777575"}}>
                                        </i>
                                    </button>
                                </div>
                            </div>
                            <div className="my-8">
                                <label style={{ color:"#777575" , fontSize:"14px"}}>Confirm New Password</label>
                                <div className="flex">
                                    <input id="confirm_password" required  value={confirmPassword} type="password" onChange={onChangeConfirmPassword} className="w-full py-3 border-b-gray-300" style={{ borderBottom:"1px solid #ebebeb"}} placeholder="your password"/>
                                    <button onClick={VisibiltyConfirmPassword}>
                                        <i className="fa-solid fa-eye-slash" style={{ color:"#777575"}}>
                                        </i>
                                    </button>
                                </div>
                            </div>
                            <a href={`http://127.0.0.1:8000/signup/add/information/${email}`}>
                                {/*`http://127.0.0.1:8000/login/form?email=${email}&password=${password}`*/}
                                <div  className="w-full font-medium py-2.5 text-center" style={{ color:"#ffffff" , borderRadius:"4px" , fontSize:"16px" , border:"1px solid #7B52F2" , background:"#7B52F2"}}>Save</div>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}