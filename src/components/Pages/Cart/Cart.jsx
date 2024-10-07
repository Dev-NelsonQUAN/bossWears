import React from 'react'
import './Cart.css'
import { IoIosArrowBack } from 'react-icons/io'
import Footer from '../Footer/Footer'
import { useNavigate } from 'react-router'

const Cart = () => {
  const Nav = useNavigate()
  return (
    <>
      <div className='cartBody'>
        <div className="orderHeader">
          <div className="orderHeaderInner">
            <IoIosArrowBack
              size="25"
              className="arrowLeft"
              onClick={() => Nav(-1)}
            />
            <h6 className="orderName">Cart</h6>
          </div>
        </div>
        <div>hello</div>
        
      </div>
      <Footer/>
    </>
  )
}

export default Cart