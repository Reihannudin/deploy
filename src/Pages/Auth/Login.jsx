import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../Config/api";
import { LoginCardComponent } from "../../Components/Auth/Card/LoginCard.Component";

function Login({ setIsLogged }) {
  const navigate = useNavigate();
  localStorage.setItem("isLogin", false);

  const [redirect, setRedirect] = useState("/");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [redirectPath, setRedirectPath] = useState("/register");
  const [isLoading, setIsLoading] = useState(false);

  const checkLogin = async () => {
    const auth_token = localStorage.getItem("token");
    const isLogin = localStorage.getItem("isLogin");

    if (isLogin === "true" && auth_token) {
      api
          .get("/user", {
            method: "POST",
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
              // "X-CSRF-TOKEN": document.querySelector('meta[name="csrf-token"]').content, // Get the CSRF token content
            },
          })
          .then((res) => {
            if (res) {
              setIsLogged(true);
              localStorage.setItem("whoLogin", JSON.stringify(res));
              navigate(redirect); // Move the navigate() call here
            } else {
              alert("Something wrong!");
            }
          });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true); // Start loading indicator

    try {
      const formData = {
        email: email,
        password: password,
      };

      const response = await api.post(`/login`, formData);
      const responseData = response.data;

      console.log(responseData);

      setIsLoading(false); // Stop loading indicator

      if (responseData.status === 201 && responseData.message === "Login berhasil") {
        localStorage.setItem("registrationEmail", email);
        localStorage.setItem("isLogin", true);
        localStorage.setItem("auth_token", responseData.data?.auth_token);
        setRedirect(responseData.data?.redirect_path || "/");
        checkLogin();
      } else if (responseData.status === 406) {
        console.log(responseData.errors.email);

        if (responseData.errors.email === "Email tidak boleh kosong") {
          const redirectUrl = responseData.redirect_path;
          setRedirectPath(redirectUrl);
          setErrorEmail(responseData.errors.email);
          navigate(redirectUrl);
        } else if (responseData.errors.password === "password tidak boleh kosong" || responseData.errors.password === "Email atau password tidak sama") {
          const redirectUrl = responseData.redirect_path;
          setErrorPassword(responseData.errors.password);
          setRedirectPath(redirectUrl);
          navigate(redirectUrl);
        }

      }
    } catch (error) {
      setIsLoading(false); // Stop loading indicator
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
        <div className="xl:w-6/12 lg:w-7/12 md:w-9/12  mx-auto">
          <div className="md:w-8/12   w-full mx-auto">
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
