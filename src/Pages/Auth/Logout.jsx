import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../Config/api";

function Logout() {
    const navigate = useNavigate();

    useEffect(() => {
        // const urlParams = new URLSearchParams(window.location.search);
        // const auth_token = urlParams.get("auth_token");
        const token = localStorage.getItem("token");

        console.log(token)

        if (token) {
            api
                .delete("http://127.0.0.1:8000/api/logout", {
                    headers: {
                        Authorization: "Bearer " + token,
                    },
                })
                .then((res) => {
                    if (res.status === 200) {
                        console.log("Logout successful");
                        localStorage.removeItem("isLogin");
                        localStorage.removeItem("auth_token");
                        localStorage.removeItem("whoLogin");
                        localStorage.removeItem("token");
                        navigate("/");
                    } else {
                        console.error("Logout failed");
                        alert("Something went wrong during logout.");
                    }
                })
                .catch((error) => {
                    console.error("Logout error:", error);
                    alert("An error occurred while trying to log out.");
                });
        }
    }, [navigate]);

    return null; // Or you can return some UI here if needed
}

export default Logout;
