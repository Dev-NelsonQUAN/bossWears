import React, { useState } from 'react'
import { IoCloseOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router'
import check from '../../../assets/email.svg'
import "./ResetPasswordModal.css"
import 'animate.css';

const ResetPasswordModal = ({setAnimate, animate}) => {
  const navigate = useNavigate()
  const [go, setGo] = useState(false)
  const exit=()=>{
    setGo(true)
    setTimeout(() => {
      setAnimate(false)
    }, 800);
  }
  return (
    <div className='ConfirmationModalBody'>
      <div className='modalEmptySideBox' onClick={exit}>
      </div>
      <div className={animate && !go ? 'modalContentBodyReset animate__animated animate__slideInUp animate__faster': 'modalContentBody animate__animated animate__slideOutDown animate__faster'}>
        <div className='modalContentBodyHead'>
          <div>Reset password</div>
          <div onClick={exit}><IoCloseOutline size={25}/></div>
        </div>
        <div className='modalContentCheckImgBox'>
          <img src={check} alt="" />
        </div>
        <h3>
          A reset password link has been sent to your e-mail address.
        </h3>
        <p>
        Click on the link on your mail to reset your password.
        </p>
      </div>
    </div>
  )
}

export default ResetPasswordModal