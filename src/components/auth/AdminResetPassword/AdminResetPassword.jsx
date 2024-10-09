import React, { useState } from 'react'
import './AdminResetPassword.css'
import Header from '../../Pages/Header/Header'
import DetailsModal from '../../Modal/DetailsModal/DetailsModal'
import ResetPasswordModal from '../../Modal/ResetPasswordModal/ResetPasswordModal'

const AdminResetPassword = () => {
  const [animate, setAnimate] = useState(false)


  return (
    <div className="adminLoginHolder">
      <Header />
      {
        animate ? <ResetPasswordModal animate={animate} setAnimate={setAnimate}/>: null
      }

      <div className="adLogBottom">
        <div className="topTxt">
          <h1 className="welcomeAdminText">
            Reset Password
          </h1>

          <p className="loginP adminResetText">
          enter the email address associated with this account
          </p>
        </div>

        <div className="botBotResetPassword">
          <div className="logEmailHoldReset">
            <p className="logEmail"> Email </p>
            <input
              className="logInputReset"
              type="text"
              placeholder="Enter Email Address"
            />
          </div>

          <div className="logBtnATxtReset">
            <button className="loginB" onClick={()=>setAnimate(true)}> Reset password </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminResetPassword