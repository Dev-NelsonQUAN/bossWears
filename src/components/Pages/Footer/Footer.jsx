import React from "react";
import "./Footer.css";
import { GoHome } from "react-icons/go";
import { RiHeartAddLine } from "react-icons/ri";
import { BsHandbag } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footHolder">
      <div className="footInner">
        <div className="holdHome">
          <GoHome size={26} />
          <p className="home"> Home </p>
        </div>

        <div className="holdHeart">
          <RiHeartAddLine size={26} />
          <p className="wishList"> Wishlist </p>
        </div>

        <div className="holdOrders">
          <BsHandbag size={26} />
          <p className="orders"> Orders </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
