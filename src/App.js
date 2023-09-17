import React from "react";
import { useEffect, useState } from "react";
import LoadingComponent from "./Components/Helper/Loading.Component";
import { Route, Routes } from "react-router-dom";

import { Protected } from "./Routes/Protected";

import {Unprotected} from "./Routes/Unprotected";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  // Retrieve login status from localStorage
  const storedToken = localStorage.getItem("auth_token");
  const [isLogged, setIsLogged] = useState(!!storedToken); // Convert token to boolean


  // console.log("is logged?" ,isLogged)

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
