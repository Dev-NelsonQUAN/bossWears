import React from "react";
import "./AdminLogin.css";
import Header from "../../Pages/Header/Header";

const AdminLogin = () => {
  return (
    <div className="adminLoginHolder">
      <Header />

      <div className="adLogBottom">
        <div className="topTxt">
          <h1 className="welcomeAdminText">
            {" "}
            Welcome to Admin <br /> Control Panel
          </h1>

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
              <input
                className="logInput"
                type="text"
                placeholder="Enter Your password"
              />
            </div>
          </div>

          <div className="logBtnATxt">
            <p className="fPass"> Forgot Password? </p>
            <button className="loginB"> Login </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
