import React from "react";
import "./Details.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoHeart } from "react-icons/io5";
import ShoePeru from "../../../assets/shoePeru.svg";

const Details = () => {
  return (
    <div className="detailsHolder">
      <div className="detailsHeader">
        <div className="detailsInner">
          <IoIosArrowBack size="25" className="arrowLeft" />

          <h4 className="pDetails"> Product Details </h4>
        </div>
      </div>

      <div className="detailsMid">
        <div className="dMidTop">
          <img src={ShoePeru} alt="" className="ImgHold" />
        </div>

        <div className="dMidBottom">
          <div className="holdHeadTxt">
            <h2 className="footName"> Orange Sneakers </h2>
            <p className="footiesPrice"> ₦59,000.00 </p>
          </div>

          <div className="holdBottomTxt">
            <p className="descPro"> Description Product </p>
            <p className="desc">
              {" "}
              A pair of orange sneakers is a vibrant and eye-catching choice
              that can instantly elevate any outfit. Whether you're going for a
              sporty, casual, or even trendy look, orange sneakers add a pop of
              color and personality.{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="detailsFooter">
        <div className="detailsFooterInner">
          <button className="addBtn"> Add To Cart </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
