import React from 'react'
import './Cart.css'
import { IoIosArrowBack } from 'react-icons/io'
import Footer from '../Footer/Footer'
import { useNavigate } from 'react-router'
import { MdCancel } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseQty, increaseQty, removeCart } from '../../../Global/slice'

const Cart = () => {
  const Nav = useNavigate()
  const cart = useSelector((state)=>state.shoes.cart)
  const dispatch = useDispatch()
  const total = useSelector((state) =>state.shoes.cart.reduce((p, e) => p + e.Qty * e.price, 0));
  const all = (total.toLocaleString())
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
        <div className='cartBodyWrapper'>
          <div className='cartCardBodyWrapper'>
            {
              cart.map((e, i)=>
                {
                  const now = e.Qty * e.price
                  return  (
                    <div className="cartCard">
                      <div className='cartCardDetailsWrapper'>
                        <div className='cartCardImgBox'>
                          <img src={e.shoeImage} alt="" />
                        </div>
                        <div className='cartcardDetailsBox'>
                          <h2>₦{now.toLocaleString()}</h2>
                          <h3>{e.shoeName}</h3>
                        </div>
                      </div>

                      <div><MdCancel size={20} color='tomato' onClick={()=>dispatch(removeCart(e))}/></div>
                      <div className="holdCount">
                        <p className="sub" onClick={()=>dispatch(decreaseQty(e))}> - </p>
                        <p className="count">{e.Qty}</p>
                        <p className="add" onClick={()=>dispatch(increaseQty(e))}> + </p>
                      </div>
                    </div>
                  )})
            }
            
            
          </div>
          <div className='cartPayBoxBottom'>
            <div className='cartPayDetailsBox'>Total : {all}</div>
            <div className='cartPayBtnBox'>
              <button onClick={()=>Nav('/order')}>Order Now</button>
            </div>
          </div>
        </div> 
        <Footer/>
      </div>
    </>
  )
}

export default Cart