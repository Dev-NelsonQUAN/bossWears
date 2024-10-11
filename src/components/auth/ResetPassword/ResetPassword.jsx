import React from "react";
import "./ResetPassword.css";
import Header from "../../Pages/Header/Header";

const ResetPassword = () => {
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
              <input
                className="resInput"
                type="text"
                placeholder="Enter Email Address"
              />
            </div>

            <div className="resPasswordHold">
              <p className="resPassword"> Confirm New Password </p>
              <input
                className="resInput"
                type="text"
                placeholder="Enter Your password"
              />
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
