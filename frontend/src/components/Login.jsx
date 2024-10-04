import React, { useState } from "react";
import { FaEnvelope, FaUser, FaLock } from "react-icons/fa";
import CanvasScene from "./CanvasScene";

function Login() {
  const [action, setAction] = useState("");
  const registrationLink = () => {
    setAction("active");
  };
  const loginLink = () => {
    setAction("");
  };

  return (
    <>
      <CanvasScene />
      {/* Centering wrapper */}
      <div className="flex justify-center items-center h-screen w-screen">
        <div
          className={`wrapper relative w-[420px] h-[450px] bg-transparent border-2 border-white border-opacity-20 backdrop-blur-sm rounded-lg shadow-md text-white flex items-center overflow-hidden transition-all duration-200 ${
            action === "active" ? "h-[520px]" : ""
          }`}
        >
          {/* Login Form */}
          <div
            className={`form-box login w-full p-10 transition-transform duration-200 ease-in-out ${
              action === "active" ? "translate-x-[-400px]" : ""
            }`}
          >
            <form action="">
              <h1 className="text-4xl font-bold text-center">Login</h1>
              <div className="input-box relative w-full h-12 mt-8 mb-4 bg-transparent">
                <input
                  type="text"
                  placeholder="Username"
                  className="w-full h-full bg-transparent border-2 border-white border-opacity-20 rounded-full text-white p-4 pr-12 focus:outline-none"
                  required
                />
                <FaUser className="absolute right-5 top-1/2 transform -translate-y-1/2 text-white text-lg" />
              </div>
              <div className="input-box relative w-full h-12 mt-8 mb-4 bg-transparent">
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full h-full bg-transparent border-2 border-white border-opacity-20 rounded-full text-white p-4 pr-12 focus:outline-none"
                  required
                />
                <FaLock className="absolute right-5 top-1/2 transform -translate-y-1/2 text-white text-lg" />
              </div>
              <div className="flex justify-between text-sm mb-4">
                <label className="flex items-center">
                  <input type="checkbox" className="accent-white mr-2" />
                  Remember Me
                </label>
                <a href="#" className="text-white hover:underline">
                  Forgot Password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full h-12 bg-white text-black font-bold rounded-full shadow hover:bg-opacity-80 transition"
              >
                Login
              </button>
              <p className="flex justify-center font-bold">or</p>
              <button
                type="submit"
                className="w-full h-12 bg-white text-black font-bold rounded-full shadow hover:bg-opacity-80 transition"
              >
                Login with
              </button>
              
              <div className="register-link text-center text-sm mt-4">
                <p>
                  Don't have an account?{" "}
                  <a
                    href="#"
                    onClick={registrationLink}
                    className="text-white font-bold hover:underline"
                  >
                    Register
                  </a>
                </p>
              </div>
            </form>
          </div>

          {/* Registration Form */}
          <div
            className={`form-box register absolute w-full p-10 transition-transform duration-200 ease-in-out ${
              action === "active" ? "translate-x-0" : "translate-x-[400px]"
            }`}
          >
            <form action="">
              <h1 className="text-4xl font-bold text-center">Registration</h1>
              <div className="input-box relative w-full h-12 mt-8 mb-4 bg-transparent">
                <input
                  type="text"
                  placeholder="Username"
                  className="w-full h-full bg-transparent border-2 border-white border-opacity-20 rounded-full text-white p-4 pr-12 focus:outline-none"
                  required
                />
                <FaUser className="absolute right-5 top-1/2 transform -translate-y-1/2 text-white text-lg" />
              </div>
              <div className="input-box relative w-full h-12 mt-8 mb-4 bg-transparent">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full h-full bg-transparent border-2 border-white border-opacity-20 rounded-full text-white p-4 pr-12 focus:outline-none"
                  required
                />
                <FaEnvelope className="absolute right-5 top-1/2 transform -translate-y-1/2 text-white text-lg" />
              </div>
              <div className="input-box relative w-full h-12 mt-8 mb-4 bg-transparent">
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full h-full bg-transparent border-2 border-white border-opacity-20 rounded-full text-white p-4 pr-12 focus:outline-none"
                  required
                />
                <FaLock className="absolute right-5 top-1/2 transform -translate-y-1/2 text-white text-lg" />
              </div>
              <div className="flex justify-between text-sm mb-4">
                <label className="flex items-center">
                  <input type="checkbox" className="accent-white mr-2" />I agree
                  to the terms & conditions
                </label>
              </div>
              <button
                type="submit"
                className="w-full h-12 bg-white text-black font-bold rounded-full shadow hover:bg-opacity-80 transition"
              >
                Register
              </button>
              <div className="register-link text-center text-sm mt-4">
                <p>
                  Already have an account?{" "}
                  <a
                    href="#"
                    onClick={loginLink}
                    className="text-white font-bold hover:underline"
                  >
                    Login
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
