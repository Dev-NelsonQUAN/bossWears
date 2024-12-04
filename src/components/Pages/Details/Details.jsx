import React, { useEffect, useState } from "react";
import "./Details.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoHeart } from "react-icons/io5";
import ShoePeru from "../../../assets/shoePeru.svg";
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { decreaseQty, increaseQty } from "../../../Global/slice";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const Details = ({ formData, setFormData, setToggle }) => {
  const { shoeId, orderId } = useParams()
  const dispatch = useDispatch()
  const [data, setData] = useState([])
  const [size, setSize] = useState("")
  const [color, setcolor] = useState("")
  const [qty, setQty] = useState(0)
  const [loading, setLoading] = useState(false)



  const cart = useSelector((state) => state.cart || []);
  const itemInCart = cart.find((item) => item._id === shoeId);
  const Qty = itemInCart ? itemInCart.Qty : 0;


  useEffect(() => {
    fetchProduct()
  }, [])


  const fetchProduct = async () => {
    try {
      const url = `https://boss-wear-t7uu.onrender.com/api/v1/shoe/detail/${shoeId}`
      const res = await axios.get(url)
      localStorage.setItem('shoeId', res?.data?.data._id)

      // console.log(res?.data?.data._id)
      setData(res?.data?.data)
      // console.log(data, "this is it")
      // setLoading(false)
    } catch (error) {
      const err = error?.message
      // console.log(err, "this")
      // setErrMessage(err)
      // console.log(errMessage)
      // setLoading(false)
    }
  }


  // const placeOrder = [size,qty,color]
  // console.log(placeOrder);
  // const formData = new FormData();
  // formData.append("size", size);               
  // formData.append("qty", qty); 
  // formData.append("color", color);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: (e.target.value),
    });
  }
  const NextComponent = () => {

    if (!formData.size.trim() || !formData.color.trim() || formData.qty <= 0) {
      alert("All details are required to order");
      return;
    }
    setToggle(1)

  }


  // const filter = data?.filter(e=>e?._id == id)
  // const shoe = filter[0]
  // console.log(shoe)

  const Nav = useNavigate();
  return (
    <div className="detailsHolder">
      <Toaster />
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
          {data && <img src={data.shoeImage} alt="" className="ImgHold" />}

        </div>

        <div className="dMidBottom">
          <div className="holdHeadTxt">
            {data &&
              <>
                <h2 className="footName">{data.shoeName}</h2>
                <p className="footiesPrice"> ₦{data.price}.00 </p>
              </>
            }
          </div>

          <div className="holdBottomTxt">
            <p className="descPro"> Description Product </p>
            <p className="desc">
              {data?.descriptionProduct}
              {/* {" "}
              A pair of orange sneakers is a vibrant and eye-catching choice
              that can instantly elevate any outfit. Whether you're going for a
              sporty, casual, or even trendy look, orange sneakers add a pop of
              color and personality.{" "} */}
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
            <input type="number" name="qty" value={formData.qty} onChange={handleChange} />
            <div className="holdCount">
              {
                data && <>
                  <p className="sub" onClick={() => dispatch(decreaseQty(data))}> - </p>
                  <p className="count"> {Qty} </p>
                  <p className="add" onClick={() => dispatch(increaseQty(data))}> + </p>
                </>
              }
            </div>
          </div>
          <div className="quantity">
            <p className="rQuant"> size </p>
            <input type="text" placeholder="43-45" className="detail-size-input" value={formData.size} name="size" onChange={handleChange} />

          </div>
          <div className="colorHold">
            <p className="colColor"> Color</p>
            <div className="holdColorBtn">
              {data && data.colors && data.colors.length > 0 ? (
                <select className="color-dropdown" value={formData.color} name="color" onChange={handleChange}>
                  <option value="">Select Color</option>
                  {data.colors[0].split(',').map((color, index) => (
                    <option key={index} value={color.trim()}>
                      {color.trim()}
                    </option>
                  ))}
                </select>
              ) : (
                <p>No color options available</p>
              )}
              {/* <button className="orangeBtn"> Orange </button>
                <button className="whiteBtn"> White </button>
                <button className="blackBtn"> Black </button> */}
            </div>
          </div>
          <div className="totalP">
            <p className="bottomTot"> Total </p>
            {data && <p className="bottomPri"> ₦{data.price}.00  </p>}
          </div>
        </div>
      </div>

      <div className="detailsFooter">
        <div className="detailsFooterInner">
          <button className="addBtn"
            onClick={NextComponent}
          >{loading ? "loading..." : " Order now "}</button>
        </div>
      </div>
    </div>
  );
};

export default Details;
