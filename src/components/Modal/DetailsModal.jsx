import React, { useState } from 'react'
import './DetailsModal.css'
import 'animate.css';
import { IoCloseOutline } from 'react-icons/io5';
import check from '../../assets/checkmark.svg'
import { useNavigate } from 'react-router';


const DetailsModal = ({setAnimate, animate}) => {
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
      <div className={animate && !go ? 'modalContentBody animate__animated animate__slideInUp animate__faster': 'modalContentBody animate__animated animate__slideOutDown animate__faster'}>
        <div className='modalContentBodyHead'>
          <div>Successful.</div>
          <div onClick={exit}><IoCloseOutline size={25}/></div>
        </div>
        <div className='modalContentCheckImgBox'>
          <img src={check} alt="" />
        </div>
        <h3>
        Your Order has been made successfully.
        </h3>
        <p>
          You will be contacted by our customer care representative shortly <br /> @07025532405
        </p>
        <button className='modalBackToPageBtn' onClick={()=>navigate('/')}>Back to shopping</button>
      </div>
    </div>
  )
}

export default DetailsModal