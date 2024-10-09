import React from 'react'
import Header from '../../Pages/Header/Header'
import './AdminUpdatePassword.css'

const AdminUpdatePassword = () => {
  return (
    <div className="adminLoginHolder">
      <Header />

      <div className="adLogBottom">
        <div className="topTxt">
          <h1 className="welcomeAdminText">
            {" "}
            Welcome to Admin <br /> Control Panel
          </h1>

          <p className="adminUpdateText"> enter the email address associated with this account </p>
        </div>

        <div className="botBotResetPassword">
          <div className="logInputsUpdate">
            <div className="logEmailHoldReset">
              <p className="logEmail"> New password </p>
              <input
                className="logInput"
                type="text"
                placeholder="Enter Email Address"
              />
            </div>

            <div className="logEmailHoldReset">
              <p className="logPassword"> Confirm new password </p>
              <input
                className="logInput"
                type="text"
                placeholder="Enter Your password"
              />
            </div>
          </div>

          <div className="logBtnATxt">
            <button className="loginB">Update password</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminUpdatePassword