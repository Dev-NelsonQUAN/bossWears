import React, { useState } from "react";
import "./ForgotPassword.css";
import Header from "../../Pages/Header/Header";
import { useNavigate } from "react-router";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";


const ForgotPassword = () => {
  const Nav = useNavigate();

  const [email, setEmail] = useState()
  const [loading, setLoading] = useState()
  const nav = useNavigate()

  const handleForgotPassword = async (e) => {
    e.preventDefault()

    if (!email) {
      toast.error("Pls kindly enter your email")
    } else {
      const apiData = { email }
      const url = "https://boss-wear-t7uu.onrender.com/api/v1"

      try {
        setLoading(true)
        const res = await axios.post(`${url}/forgetPassword`, apiData)
        console.log(res.data)
        Swal.fire({
          title: "Email Sent!",
          text: "A password reset link has been sent to your email address.",
          icon: "success",
          confirmButtonText: "OK",
        });
        setTimeout(() => {
          nav('/reset-password')
          
        },3000);
      }
      catch (err) {
        console.log(err.response.data)
        Swal.fire({
          title: "Error!",
          text: err.response.data,
          icon: "Error",
          confirmButtonText: "OK",
        });
      }
    }


  }

  return (
    <div className="ForgotPHolder">
      <Header />
      <Toaster/>

      <form className="forgotDown"
        onSubmit={handleForgotPassword}
      >
        <div className="fDownTxt">
          <label className="fResetText"> Reset Password</label>

          <p className="forgotP">
            {" "}
            Enter the email address <br /> associated with this account{" "}
          </p>
        </div>

        <div className="forgotPBot">
          <div className="fPInputOne">
            <div className="fPHold">
              <p className="fPEmail"> Email </p>
              <input
                className="fPInput"
                type="text"
                placeholder="Enter Email Address"
                onChange={((e)=>setEmail(e.target.value))}
              />
            </div>
          </div>

          <div className="fPBtnATxt">
            <button className="resetPBtn" 
            type="submit"
            >
              {" "}
              Reset Password{" "}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
