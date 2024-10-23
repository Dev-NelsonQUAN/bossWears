import React, { useState } from "react";
import "./ResetPassword.css";
import Header from "../../Pages/Header/Header";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa6";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState()
  const [confirmPassword, setConfirmPassword] = useState()
  const [seeNewPassword, setSeeNewPassword] = useState(false)
  const [seeConfirmPassword, setSeeConfirmPassword] = useState(false)


  const handleChangePassword =async(e) => {
    e.preventDefault();

    // if(!email || !password){
    //   toast.error("Please fill in your enail")
    // }
    
  }

  const showTheNewPassword = () => {
    setSeeNewPassword(true)
  }

  const showTheConfirmPassword = () => {
    setSeeConfirmPassword(true)
  }


  return (
    <div className="resetPassHolder">
      <Header />

      <form className="resetPassDown">
        <div className="resetTxt">
          <label className="resetPassText"> Update Password</label>

          <p className="resetP">
            Enter the email address associated with this <br /> account
          </p>
        </div>

        <div className="resetPBot">
          <div className="resInputs">
            <div className="resetEmailHold">
              <p className="resetEmail"> New Password </p>
              <div className="resNPDiv">
                <input
                  type={seeNewPassword ? "text" : "password"}
                  className="resInputOne"
                  placeholder="Enter New Password"
                />

                {
                  seeNewPassword 
                  ?
                  <FaRegEye onClick={() => {
                    setSeeNewPassword(false)
                  }} />
                  : 
                  <FaRegEyeSlash onClick={showTheNewPassword}/>
                }
              </div>
            </div>

            <div className="resPasswordHold">
              <p className="resPassword"> Confirm New Password </p>
              <div className="resCPDiv">
                <input
                  type={ seeConfirmPassword ? "text" : "password"}
                  className="resInputTwo"
                  placeholder="Confirm Your password"
                />

                {
                  seeConfirmPassword
                  ?
                  <FaRegEye onClick={() => {
                    setSeeConfirmPassword(false)
                  }}/>
                  : 
                  <FaRegEyeSlash onClick={showTheConfirmPassword}/>
                }

              </div>

            </div>
          </div>

          <div className="resPBtnATxt">
            {/* <p className="rPass" onClick={() => Nav("/forgot")}>
              {" "}
              Forgot Password?{" "}
            </p> */}
            <button className="resetB"> Update Password </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ResetPassword;
