import React from "react";
import { useEffect, useState } from "react";
import {Route, Routes, useNavigate} from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  // Retrieve Login status from localStorage
  const storedToken = localStorage.getItem("auth_token");
  const [isLogged, setIsLogged] = useState(!!storedToken); // Convert token to boolean


  // console.log("is logged?" ,isLogged)

  return (
    <div className="App mx-auto" style={{ maxWidth:"1500px" }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path={"*"} element={<Test />} />
      </Routes>
    </div>
  );
}

export const Test = () => {

  const navigate = useNavigate();
  navigate("/")
  return(
      <>
      </>
  )
}

export default App;
