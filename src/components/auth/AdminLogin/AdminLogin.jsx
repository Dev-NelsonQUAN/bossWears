import React from "react";
import "./AdminLogin.css";
import Header from "../../Pages/Header/Header";
import { useNavigate } from "react-router";

const AdminLogin = () => {
  const Nav = useNavigate()
  return (
    <div className="adminLoginHolder">
      <Header />

      <form className="adLogBottom"
        
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
              <input
                className="logInput"
                type="text"
                placeholder="Enter Your password"
              />
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
