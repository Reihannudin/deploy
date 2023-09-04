import { useEffect, useState } from "react";
import LoadingComponent from "./Components/Helper/Loading.Component";
import { Route, Routes } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Learning from "./Pages/Learning/Learning";
import About from "./Pages/About/About";
import Login from "./Pages/Auth/Login";
import React from "react";
import VerificationEmail from "./Pages/Auth/VerificationEmail";
import Register from "./Pages/Auth/Register";
import ForgotPassword from "./Pages/Auth/ForgotPassword";

import { Protected } from "./Routes/Protected";

import AddPassword from "./Pages/Auth/AddPassword";
import AddInformation from "./Pages/Auth/AddInformation";
import AddInformationImage from "./Pages/Auth/AddInformationImage";
import TestProfille from "./Pages/Helper/TestProfille";
import {Unprotected} from "./Routes/Unprotected";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const [isLogged, setIsLogged] = useState(false);


  const token = localStorage.getItem('token')

  return (
    <div className="App">
      {isLoading ? (
        <LoadingComponent />
      ) : (
          <>
            {isLogged === true ? (
                <Protected />
            ) : (
                <Unprotected setIsLogged={setIsLogged} isLogged={isLogged} />
            )}
          </>

      )}
    </div>
  );
}

export default App;
