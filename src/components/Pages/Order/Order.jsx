import React, { useState } from "react";
import "./Order.css";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router";
import DetailsModal from "../../Modal/DetailsModal/DetailsModal";

const Order = () => {
    const Nav = useNavigate()
    const [animate, setAnimate] = useState(false)

  return (
    <div className="orderHolder">
      {
        animate ? <DetailsModal animate={animate} setAnimate={setAnimate}/>: null
      }
      <div className="orderHeader">
        <div className="orderHeaderInner">
          <IoIosArrowBack
            size="25"
            className="arrowLeft"
            onClick={() => Nav(-1)}
          />

          <h6 className="orderName">Order Selection</h6>
        </div>
      </div>
      <div className="orderbottom">
        <div className="orderTopFill">
          <div className="holdtheFill">
            <h1 className="fillThe">
              {" "}
              FILL THE FORM BELOW TO PLACE YOUR ORDER{" "}
            </h1>
          </div>
          <p className="shipDet"> Shipping Details </p>
        </div>

        <div className="orderInputs">
          <div className="orderInputsInner">
            <div className="nameDiv">
              <p className="name"> Name </p>
              <input
                className="input"
                type="text"
                placeholder="Enter your name"
              />
            </div>

            <div className="addressDiv">
              <p className="name"> Address </p>
              <input
                className="input"
                type="text"
                placeholder="Enter your address"
              />
            </div>

            <div className="phoneNumDiv">
              <p className="name"> Phone Number </p>
              <input
                className="input"
                type="text"
                placeholder="Enter your phone number"
              />
            </div>

            <div className="nearLandmarkDiv">
              <p className="name"> Nearest landmark/Bustop </p>
              <input
                className="input"
                type="text"
                placeholder="Enter your landmark or busstop"
              />
            </div>

            <div className="altLocDiv">
              <p className="name"> Alternative Phone Number </p>
              <input
                className="input"
                type="text"
                placeholder="Enter your name"
              />
            </div>

            <div className="altPhoneNumDiv">
              <p className="name"> Alternative Phone Number (If any) </p>
              <input
                className="input"
                type="text"
                placeholder="Enter your alternative phone number"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="orderFooter">
        <button className="submitBtn" onClick={()=>setAnimate(true)}> Submit </button>
      </div>
    </div>
  );
};

export default Order;
