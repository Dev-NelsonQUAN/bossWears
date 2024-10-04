import React, { useState } from 'react'
import './DetailsModal.css'
import 'animate.css';


const DetailsModal = ({setAnimate, animate}) => {
  const [go, setGo] = useState(false)
  const exit=()=>{
    setGo(true)
    setTimeout(() => {
      setAnimate(false)
    }, 1000);
  }
  return (
    <div className='ConfirmationModalBody'>
      <div className='modalEmptySideBox' onClick={exit}>
      </div>
      <div className={animate && !go ? 'modalContentBody animate__animated animate__slideInUp animate__faster': 'modalContentBody animate__animated animate__slideOutDown animate__faster'}>
        hello
      </div>
    </div>
  )
}

export default DetailsModal