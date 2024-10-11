import React from "react";
import "./ForgotPassword.css";
import Header from "../../Pages/Header/Header";
import { useNavigate } from "react-router";

const ForgotPassword = () => {
  const Nav = useNavigate();

  return (
    <div className="ForgotPHolder">
      <Header />

      <form className="forgotDown">
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
              />
            </div>
          </div>

          <div className="fPBtnATxt">
            <button className="resetPBtn" onClick={() => Nav("/reset")}>
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
