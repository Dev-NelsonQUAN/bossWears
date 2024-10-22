import React, { useState } from "react";
import "./AdminLogin.css";
import Header from "../../Pages/Header/Header";
import { useNavigate } from "react-router";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa6";
import toast from "react-hot-toast";
// import axios from "axios";

// https://boss-wear.onrender.com

const AdminLogin = () => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [seePassword, setSeePassword] = useState(false)
  const [checkPassword, setCheckPassword] = useState()
  const [loading, setLoading]  = useState(false)

  // const handleLogin = async(e) =>{
  //   e.preventDefault()

  //   if(!email || !password) {
  //     toast.error("Pls kindly fill all details")
  //   }
  //   else {
  //     const apiData = { email, password}
  //     const url = "https://boss-wear.onrender.com/api/v1"

  //     try{
  //       setLoading(true)
  //       const res = await axios.post(`${url}/login`, apiData)
  //     }

  //   }

  //   // const url = 
  // }

const viewPassword = () => {
  setSeePassword(true)
}


  const Nav = useNavigate()
  return (
    <div className="adminLoginHolder">
      <Header />

      <form className="adLogBottom"
        ty
      >
        <div className="topTxt">
          <label className="welcomeAdminText">
            {" "}
            Welcome to Admin <br /> Control Panel
          </label>

          <p className="loginP"> Login </p>
        </div>

        <div className="botBot">
          <div className="logInputs">
            <div className="logEmailHold">
              <p className="logEmail"> Email </p>
              <input
                className="logInput"
                type="text"
                placeholder="Enter Email Address"
              />
            </div>

            <div className="logPasswordHold">
              <p className="logPassword"> Password </p>
              <div className="innerPassW">
              <input
                type={seePassword ? "text" : "password" }
                className="logInputP"
                placeholder="Enter Your password"
              />

              {
                seePassword
                ? 
                <FaRegEye onClick={() => setSeePassword(false)}/>
                :
                <FaRegEyeSlash onClick={viewPassword}/> 
              }


              </div>
            </div>
          </div>

          <div className="logBtnATxt">
            <p className="fPass" onClick={() => Nav("/forgot")}> Forgot Password? </p>
            <button className="loginB" 
              type="submit"
            > Login </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AdminLogin;
