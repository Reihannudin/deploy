import {Route, Routes} from "react-router-dom";
import Home from "../Pages/Home/Home";
import Learning from "../Pages/Learning/Learning";
import About from "../Pages/About/About";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import VerificationEmail from "../Pages/Auth/VerificationEmail";
import AddPassword from "../Pages/Auth/AddPassword";
import AddInformation from "../Pages/Auth/AddInformation";
import AddInformationImage from "../Pages/Auth/AddInformationImage";
import ForgotPassword from "../Pages/Auth/ForgotPassword";
import React from "react";

export const Unprotected = ({setIsLogged , isLogged}) => {

    const isLogin = localStorage.getItem("isLogin");
    console.log(isLogin)

    return(
        <Routes>
            {/*<Route path="/profile" element={<TestProfile />} />*/}
            <Route path="/" element={<Home />} />
            <Route path="/learning" element={<Learning />} />
            <Route path="/about" element={<About />} />
            <Route path="/login/redirect" element={<Login />} />
            <Route path="/login" element={<Login setIsLogged={setIsLogged} isLogged={isLogged} />}/> /
            <Route path="/register" element={<Register />} /> {/*done*/}
            <Route path="/verification/email" element={<VerificationEmail />} /> {/*done*/}
            <Route path="/add/password" element={<AddPassword />} /> {/*done*/}
            <Route path="/add/information" element={<AddInformation />} /> {/*done*/}
            <Route path="/add/information/image" element={<AddInformationImage />} />
            <Route path="/reset/password" element={<ForgotPassword />} />

            {/*<Route path="/profile" element={<TestProfille />} />*/}

        </Routes>

    )
};
