import React from "react";
import "./Details.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoHeart } from "react-icons/io5";
import ShoePeru from "../../../assets/shoePeru.svg";
import { useNavigate } from "react-router";

const Details = () => {
  const Nav = useNavigate();
  return (
    <div className="detailsHolder">
      <div className="detailsHeader">
        <div className="detailsInner">
          <IoIosArrowBack
            size="25"
            className="arrowLeft"
            onClick={() => Nav("/")}
          />

          <h4 className="pDetails" onClick={() => Nav("/admin-login")}> Product Details </h4>
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

        <div className="detailsMidBot">
          <div className="brandHold">
            <p className="brand"> Brand:</p>
            <p className="theB">Nike</p>
          </div>
          <div className="quantity">
            <p className="rQuant"> Quantity </p>
            <div className="holdCount">
                <p className="sub"> - </p>
                <p className="count"> 1 </p>
                <p className="add"> + </p>
            </div>
          </div>
          <div className="colorHold">
            <p className="colColor"> Color</p>
            <div className="holdColorBtn">
                <button className="orangeBtn"> Orange </button>
                <button className="whiteBtn"> White </button>
                <button className="blackBtn"> Black </button>
            </div>
          </div>
          <div className="totalP">
            <p className="bottomTot"> Total </p>
            <p className="bottomPri"> ₦59,000.00  </p>
          </div>
        </div>
      </div>

      <div className="detailsFooter">
        <div className="detailsFooterInner">
          <button className="addBtn" 
          onClick={() => Nav("/order")}
          > Order now </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
