import { useState } from "react";
import { Link } from "react-router-dom";
import bcrypt from "bcryptjs";
import api from "../../../Config/api";

export const LoginCardComponent = ({
  handleSubmit,
  errorEmail,
  errorPassword,
  email,
  setEmail,
  password,
  setPassword
}) => {

  const onChangeEmail = (event) => {
    const email = event.target.value;
    setEmail(email);
  };

  const onChangePassword = (event) => {
    const password = event.target.value;
    setPassword(password);
  };

  const togglePasswordVisibility = () => {
    const visibility = document.getElementById("password");
    if (visibility.type === "password") {
      visibility.type = "text";
    } else if (visibility.type === "text") {
      visibility.type = "password";
    }
  };

  const salt = bcrypt.genSaltSync(10);

  return (
    <>
      <div
        className="bg-white py-6 mb-10 md:px-10 sm:px-20 px-10"
        style={{ borderRadius: "8px" }}
      >
        <div className="w-full max-w-sm mx-auto">
          <div className="my-8" style={{ height: "40px" }}>
            <img
              className="h-full"
              src="/assets/spaceSkool-logo-account.svg"
              alt=""
            />
          </div>
          <div className="mx-0 text-left">
            <h1 className="font-bold" style={{ fontSize: "26px" }}>
              Log in with your SpaceSkool Account.
            </h1>
          </div>
          <div className="text-left">
              <div>
                <div className="my-8">
                  <label style={{ color: "#777575", fontSize: "14px" }}>
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={onChangeEmail}
                    className="w-full py-3 border-b border-gray-300"
                    // style={{ borderBottom: "1px solid #ebebeb" }}
                    placeholder="your@email.com"
                  />
                  {errorEmail === "" ? (
                    <div className="my-2"></div>
                  ) : (
                    <div className="my-2">
                      <span
                        style={{ fontSize: "14px" }}
                        className={"text-red-600 "}
                      >
                        {errorEmail}
                      </span>
                    </div>
                  )}
                </div>
                <div className="my-8">
                  <label style={{ color: "#777575", fontSize: "14px" }}>
                    Password
                  </label>
                  <div className="flex">
                    <input
                      id="password"
                      type="password"
                      value={password}
                      onChange={onChangePassword}
                      className="w-full py-3 border-b-gray-300"
                      style={{ borderBottom: "1px solid #ebebeb" }}
                      placeholder="your password"
                    />
                    <button onClick={togglePasswordVisibility}>
                      <div
                        className="bg-white px-3 py-2 radius-100 hover:bg-gray-50"
                        style={{ height: "40px" }}
                      >
                        <img
                          className="h-full"
                          src="/assets/visibilty-on.svg"
                          alt=""
                        />
                      </div>
                    </button>
                  </div>
                  {errorPassword === "" ? (
                    <div className="my-2"></div>
                  ) : (
                    <div className="my-2">
                      <span
                        style={{ fontSize: "14px" }}
                        className={"text-red-600 "}
                      >
                        {errorPassword}
                      </span>
                    </div>
                  )}
                </div>
                <form onSubmit={handleSubmit}>
                <button className="w-full" onSubmit={handleSubmit}>
                  <div className="w-full font-medium py-2.5 text-center border border-purple-600 rounded text-white bg-purple-600 hover:bg-purple-700">
                    Login
                  </div>
                </button>
                </form>

              </div>
            <div className="text-center my-4">
              <Link to="/">
                <div>
                  <p style={{ color: "#777575", fontSize: "14px" }}>
                    Forgot password?
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <div className="my-5">
            <div>
              <div className="flex w-full">
                <div
                  className="w-full mx-5 my-auto"
                  style={{ height: "1px", background: "#d0d0d0" }}
                ></div>
                <p className="mx-auto">OR</p>
                <div
                  className="w-full mx-5 my-auto"
                  style={{ height: "1px", background: "#d0d0d0" }}
                ></div>
              </div>

              <div className="flex justify-center my-3">
                <a
                  className="w-full max-w-sm"
                  href={`http://127.0.0.1:8000/api/login/p`}
                >
                  <div className="w-full font-medium flex py-2 text-purple-500 text-center border border-purple-500 rounded">
                    <div className="flex items-center mx-auto">
                      <div className="mr-2 w-6 h-6">
                        <img src="/assets/Google_icon.svg" alt="" />
                      </div>
                      <div>Log In With Google</div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="block" style={{ fontSize: "14px" }}>
                <span>Don't have an account with us yet?</span>
                <Link to="/register">
                  <span style={{ color: "#9C74E1" }}>
                    Create a Spaceskool Account
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
