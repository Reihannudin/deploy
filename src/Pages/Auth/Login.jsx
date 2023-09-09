import {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import api from "../../Config/api";
import { LoginCardComponent } from "../../Components/Auth/Card/LoginCard.Component";

function Login({ setIsLogged }) {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const checkLogin = async () => {
    const auth_token = localStorage.getItem("token");
    const isLogin = localStorage.getItem("isLogin");

    if (isLogin === "true" && auth_token) {
      try {
        const response = await api.get("/user", {
          method: "POST",
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });

        if (response) {
          setIsLogged(true);
          localStorage.setItem("isLogin", true);
          localStorage.setItem("isLogged", true);
          localStorage.setItem("whoLogin", JSON.stringify(response));
          navigate("/"); // Redirect to "/" after successful login
        } else {
          alert("Something went wrong!");
        }
      } catch (error) {
        alert("Something went wrong!");
      }
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const formData = {
        email: email,
        password: password,
      };

      const response = await api.post(`/login`, formData);
      const responseData = response.data;

      setIsLoading(false);

      if (responseData.status === 201 && responseData.message === "Login berhasil") {
        localStorage.setItem("registrationEmail", email);
        localStorage.setItem("isLogin", true);
        localStorage.setItem("isLogged", true);
        setIsLogged(true);
        localStorage.setItem("auth_token", responseData.data?.auth_token);
        navigate(responseData.data?.redirect_path || "/");
      } else if (responseData.status === 406) {
        if (responseData.errors.email === "Email tidak boleh kosong") {
          setErrorEmail(responseData.errors.email);
        } else if (
            responseData.errors.password === "password tidak boleh kosong" ||
            responseData.errors.password === "Email atau password tidak sama"
        ) {
          setErrorPassword(responseData.errors.password);
        }
      }
    } catch (error) {
      setIsLoading(false);
      const { errors } = error.response.data;
      setErrorEmail(errors?.email?.[0] || "");
      setErrorPassword(errors?.password?.[0] || "");
    }
  };

  useEffect(() => {
    checkLogin();
  }, []);

  return (
      <>
        <div
            className="w-full md:py-6 py-0"
            style={{ background: "#FAFBFC", minWidth: "300px" }}
        >
          <div className="xl:w-6/12 lg:w-7/12 md:w-9/12 mx-auto">
            <div className="md:w-8/12 w-full mx-auto">
              <LoginCardComponent
                  setIsLogged={setIsLogged}
                  handleSubmit={(e) => handleSubmit(e)}
                  errorEmail={errorEmail}
                  errorPassword={errorPassword}
                  setEmail={setEmail}
                  setPassword={setPassword}
                  email={email}
                  password={password}
              />
            </div>
          </div>
        </div>
      </>
  );
}

export default Login;
