import React, { useEffect, useState } from "react";
import "./Order.css";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate, useParams } from "react-router";
import DetailsModal from "../../Modal/DetailsModal/DetailsModal";
import axios from "axios";

const Order = ({ formData, setFormData }) => {
  const Nav = useNavigate()
  console.log("formData in Order:", formData);




  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  console.log(formData)

  return (
    <div className="orderHolder">
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
                name="name"
                value={formData?.name}
                onChange={handleChange}
              />
            </div>

            <div className="addressDiv">
              <p className="name"> Address </p>
              <input
                className="input"
                type="text"
                placeholder="Enter your address"
                name="address"
                value={formData?.address}
                onChange={handleChange}
              />
            </div>

            <div className="phoneNumDiv">
              <p className="name"> Phone Number </p>
              <input
                className="input"
                type="text"
                placeholder="Enter your phone number"
                name="phoneNumber"
                value={formData?.phoneNumber}
                onChange={handleChange}
              />
            </div>

            <div className="nearLandmarkDiv">
              <p className="name"> Nearest landmark/Bustop </p>
              <input
                className="input"
                type="text"
                placeholder="Enter your landmark or busstop"
                name="bustop"
                value={formData?.bustop}
                onChange={handleChange}
              />
            </div>
            <div className="altPhoneNumDiv">
              <p className="name"> Alternative Phone Number (If any) </p>
              <input
                className="input"
                type="text"
                placeholder="Enter your alternative phone number"
                name="alternativePhoneNumber"
                value={formData?.alternativePhoneNumber}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="orderFooter">
        <button className="submitBtn" onClick={() => console.log(formData)}> Submit </button>
      </div>
    </div>
  );
};

export default Order;
