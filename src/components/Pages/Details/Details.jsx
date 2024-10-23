import React, { useEffect, useState } from "react";
import "./Details.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoHeart } from "react-icons/io5";
import ShoePeru from "../../../assets/shoePeru.svg";
import { useNavigate, useParams } from "react-router";
import { useDispatch } from "react-redux";
import { decreaseQty, increaseQty } from "../../../Global/slice";
import axios from "axios";

const Details = () => {
  const {id} = useParams()
  const dispatch = useDispatch()
  const [data, setData] = useState([])

  useEffect(()=>{
    fetchProduct()
  }, [])

  const fetchProduct = async () =>{
    try {
      const url = 'https://boss-wear-t7uu.onrender.com/api/v1/shoe/feature'
      const res = await axios.get(url)
      console.log(res?.data?.data)
      setData(res?.data?.data)
      console.log(data, "this is it")
      setLoading(false)
    } catch (error) {
      const err = error?.message
      // console.log(err, "this")
      setErrMessage(err)
      console.log(errMessage)
      setLoading(false)
    }
  }

  const filter = data?.filter(e=>e?._id == id)
  const shoe = filter[0]
  console.log(shoe)

  const Nav = useNavigate();
  return (
    <div className="detailsHolder">
      <div className="detailsHeader">
        <div className="detailsInner">
          <IoIosArrowBack
            size="25"
            className="arrowLeft"
            onClick={() => Nav(-1)}
          />

          <h4 className="pDetails" onClick={() => Nav("/admin-login")}> Product Details </h4>
        </div>
      </div>

      <div className="detailsMid">
        <div className="dMidTop">
          {shoe && <img src={shoe.shoeImage} alt="" className="ImgHold" />}
          
        </div>

        <div className="dMidBottom">
          <div className="holdHeadTxt">
            {shoe && 
            <>
              <h2 className="footName">{shoe.shoeName}</h2>
              <p className="footiesPrice"> ₦{shoe.price.toLocaleString()}.00 </p>
            </>
            }
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
              {
                shoe && <>
                  <p className="sub" onClick={()=>dispatch(decreaseQty(shoe))}> - </p>
                  <p className="count"> {shoe.Qty} </p>
                  <p className="add" onClick={()=>dispatch(increaseQty(shoe))}> + </p>
                </>
              }
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
            {shoe && <p className="bottomPri"> ₦{shoe.price.toLocaleString()}.00  </p>}
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
