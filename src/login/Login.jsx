import React, { useState } from "react";
// import "../App.css";
import ENHR from "../Images/ENHR.png";
import logo from "../Images/screen.png";
import { VscEye } from "react-icons/vsc";
import { VscEyeClosed } from "react-icons/vsc";
import { CiLock } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import ProtectedRoute from "../Components/ProtectedRoutes";

const Login = ({ value }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showpassword, setShowPassword] = useState(true);
  const [error, setError] = useState("");
  const [isAuth, setIsAuth] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);

    if (!email || !password) {
      setError("Please fill the credential");
      return;
    }
    if (email == "admin@gmail.com" && password == "admin"){
      navigate('/home')
    }
    else{
      setError("please fill the credential")
    }
    // navigate('/home')
  };

  const visiblePassword = (e) => {
    e.preventDefault();

    setShowPassword(!showpassword);
  };
  return (
    <>
      <div>
        <div className="flex flex-col-reverse lg:flex-row overflow-hidden">
          <div className=" px-10 lg:px-36 pb-20 pt-10 w-screen lg:w-1/2 h-full lg:h-screen bg-white relative">
            <div className="flex flex-col justify-center gap-6">
              <img src={ENHR} alt="ENHR logo" className="mx-auto mt-5" width={80} />
              <h4 className="text-2xl mt-5">
                Welcome to
                <br />
                <span className="text-3xl font-bold text-nowrap">ENCompliance HR</span><br/>
              </h4>
            </div> 

            <form onSubmit={handleSubmit} className="mt-7">
              <h3 className="text-xl font-semibold pb-2 mt-3 mb-3">Login</h3>
              <label htmlFor="email" className="block pb-1">
                Email ID
              </label>
              <div className="relative flex items-center pb-2">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full ps-10 pt-2 pb-2 rounded border border-gray-400 "
                  placeholder="Enter Your Email ID"
                  required
                />
                <AiOutlineMail className="absolute ms-1 text-xl left-2" />
              </div>
              <label htmlFor="password" className="block p-1">
                Password
              </label>
              <div className="relative flex items-center pb-2">
                <input
                  type={showpassword ? "password" : "text"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full ps-10 pt-2 pb-2 rounded border border-gray-400"
                  placeholder="Enter Your Password "
                  required
                />
                <CiLock className="absolute text-2xl left-2" />
                <div className="absolute text-xl right-2 px-1">
                  <button onClick={visiblePassword}>
                    {showpassword ? (
                      <VscEye className="text-black" />
                    ) : (
                      <VscEyeClosed className="text-black" />
                    )}
                  </button>
                </div>
              </div>
              <div></div>
              <input
                type="submit"
                id="submit"
                value="Login"
                className="w-full bg-primary text-md py-1.5 rounded cursor-pointer mt-3"
                required
              />
              <div>
              {error && <p style={{ color: "red" }} className="text-center font-pop">{error}</p>}
              <p className="text-center mb-10 cursor-pointer font-pop">
                Forget Password ?
              </p>
              </div>
            </form>
            <div
              className="h-96 w-96 rounded-full absolute -left-36 -bottom-60"
              style={{
                background: "rgb(255,252,0)",
                background:
                  "linear-gradient(192deg, rgba(255,252,0,0.7399159492898721) 0%, rgba(255,255,255,0.4878151089537377) 100%)",
              }}
            ></div>
          </div>
          <div className="flex flex-col justify-center items-center relative px-28 w-full lg:w-1/2 h-screen bg-primary">
            <div className="flex flex-col justify-center items-start">
              <img
                src={logo}
                alt="Login logo"
                className="mx-auto"
                width={340}
              />
              <div className="text-center mt-3">
                <p className="text-xl font-semibold">
                  Compliance simplified, Result Amplified
                  <br />
                  <span className="text-base font-medium">
                    Your trusted partners for seamless business compliance and
                    success
                  </span>
                </p>
              </div>
            </div>
            <div
              className="h-96 w-96 rounded-full absolute -right-32 -top-60"
              style={{
                background: "rgb(87,87,81)",
                background:
                  "linear-gradient(80deg, rgba(87,87,81,0.6698879380853904) 0%, rgba(255,255,255,0.4878151089537377) 100%)",
                opacity: "0.7",
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
