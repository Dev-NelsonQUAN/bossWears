import React, { useState } from "react";
import "./Footer.css";
import { GoHome } from "react-icons/go";
import { RiHeartAddLine } from "react-icons/ri";
import { BsHandbag } from "react-icons/bs";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import ProductModal from "../../Modal/ProductAddedModal/ProductModal";

const Footer = () => {
  const [toggle,setToggle] = useState(false)

    const Nav = useNavigate()
    const cart = useSelector((state)=>state.shoes.cart.length)

  return (
    <div className="footHolder">
      <div className="footInner">

        <NavLink to='/' className={({ isActive }) =>isActive ? "HeaderActive" : "HeaderNotActive"}>
          <div className="holdHome">
            <GoHome size={26} />
            <p className="home"> Home </p>
          </div>
        </NavLink>
{/*  */}
        {/* <NavLink to='/admin-login' className={({ isActive }) =>isActive ? "HeaderActive" : "HeaderNotActive"}> */}
          <div className="holdHeart">
            <RiHeartAddLine size={26} />
            <p className="wishList"> Wishlist </p>
          </div>
        {/* </NavLink> */}
       
        {/* <NavLink to='/cart' className={({ isActive }) =>isActive ? "HeaderActive" : "HeaderNotActive"}> */}
          <div className="holdOrders">
            <BsHandbag size={26} />
            {
              cart === 0 ? null :
              <span style={{color: 'white'}}>{cart}</span>
            }
            <p className="orders"> Orders </p>
          </div>
        {/* </NavLink> */}

      </div>
    </div>
  );
};

export default Footer;
