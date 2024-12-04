import React, { useEffect, useState } from "react";
import "./HomePage.css";
import shoe from "../../../assets/cardshoe.svg";
import sneakers from "../../../assets/sneakers.svg";
import Slippers from "../../../assets/Slippers.svg";
import sandals from "../../../assets/sandals.svg";
import coporate from "../../../assets/coporate.svg";
import timberland from "../../../assets/timberland.svg";
import orange from "../../../assets/orange.svg";
import { GrLinkNext } from "react-icons/gr";
import LongerCardLoading from "../../Extra/LongerCardLoading";
import CardLoading from "../../Extra/CardLoading";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../Global/slice";
import axios from "axios";
import CategoryCard from "../../Extra/CategoryCard";

const HomePage = () => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true);
  const [errMessage, setErrMessage] = useState()
  const[ arrival,setArrival] = useState([])
  const[ allCategory,setAllCategory] = useState([])
  const [offer,setOffer] = useState([])
const navigate = useNavigate()
  const cards = [
    {
      title: "Explore Casual Comfort",
      description: "Explore Casual Comfort",
      text: "For your casual outfits",
      img: "path_to_your_image.jpg",
      color: "#FFE8E7",
    },
    {
      title: "Another Card",
      description: "Explore Stylish Options",
      text: "For your trendy looks",
      img: "path_to_your_image2.jpg",
      color: "#E5FFF5",
    },
    {
      title: "More Choices",
      description: "Discover New Styles",
      text: "For every occasion",
      img: "path_to_your_image3.jpg",
      color: "#b4ffe2",
    },
  ];

  const product = [
    {
      img: "src/assets/orange.svg",
      name: "orange snaekers",
      price: 59000,
      id: 1,
      Qty: 0
    },
    {
      img: "src/assets/cardshoe.svg",
      name: "white snaekers",
      price: 44000,
      id: 2,
      Qty: 0
    },
    {
      img: "src/assets/orange.svg",
      name: "orange snaekers",
      price: 30000,
      id: 3,
      Qty: 0
    },
    {
      img: "src/assets/cardshoe.svg",
      name: "white snaekers",
      price: 44000,
      id: 4,
      Qty: 0
    }
  ];
  const [data, setData] = useState([])

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 3000); // Change card every 3000ms (3 seconds)

    return () => clearInterval(interval); // Cleanup on unmount
  }, [cards.length]);
  

  const nav = useNavigate()


const url = 'https://boss-wear-t7uu.onrender.com/api/v1/shoe'
  const fetchProduct = async () =>{
    try {
      const url = 'https://boss-wear-t7uu.onrender.com/api/v1/shoe/feature'
      const res = await axios.get(url)
      // console.log(res?.data?.data)
      setData(res?.data?.data)
      console.log(res?.data?.data)
      // console.log(data, "this is it")
      setLoading(false)
    } catch (error) {
      const err = error?.message
      // console.log(err, "this")
      setErrMessage(err)
      // console.log(errMessage)
      setLoading(false)
    }
  }
  const newArrival = async () => {
    try {
      const url = 'https://boss-wear-t7uu.onrender.com/api/v1/shoe/newArrival'

      const response = await axios.get(url)
      // console.log(response);
     setArrival(response.data.data);
     console.log(response.data.data);
      
      
    } catch (error) {
      // console.log(error);
      const err = error?.message
      setErrMessage(err)

      
    }
  }
  const getAllCategory = async ()=> {
    const url = 'https://boss-wear-t7uu.onrender.com/api/v1/category/getallcategory'

    try {
      const res = await axios.get(url)
      console.log(res)
      setAllCategory(res.data.category);
      
      
    } catch (error) {
      // console.log(error);
      const err = error?.message
      setErrMessage(err)
      
    }
  }
  const getSpecialOffer = async () => {
    const url = 'https://boss-wear-t7uu.onrender.com/api/v1/shoe/offer' 
    try {
    const res = await axios.get(url)
      setOffer(res.data.data);
      
    } catch (error) {
      // console.log(error)
      const err = error?.message
      setErrMessage(err)
    }
  }
  useEffect(()=>{
    fetchProduct()
    newArrival()
    getAllCategory()
    getSpecialOffer()
  }, [])
  return (
    <div className="homeHold">
      <div className="carocelWrapperBox">
        {loading ? (
          <LongerCardLoading />
        ) : (
          cards.map((e, i) => (
            <div
              className="homePageCard"
              key={i}
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              <div
                className="homePageCardTextSec"
                style={{ backgroundColor: e.color }}
              >
                <h3>{e.title}</h3>
                <p>{e.text}</p>
              </div>
              <div className="homePageCardPicSec">
                <img src={shoe} alt="" />
              </div>
            </div>
          ))
        )}
      </div>
      <div className="categoryBoxWrapper">
        <div className="categoryBoxhead">
          <div>Categories</div>
          <span>See All</span>
        </div>
        <div className="categorySecBoxBody">
          {
           loading?
          <>
         <CategoryCard/>
         <CategoryCard/>
         <CategoryCard/>
         <CategoryCard/>
          </>
          
            :
           (
            allCategory.map((e, i)=>
              <div className="homePageCategoryMainBox" onClick={(()=> navigate(`category/${e._id}`))}>
            <div className="homePageCategoryLittleBox">
              <img src={e.categoryImage} alt="" />
            </div>
            <span>{e.categoryName}</span>
          </div>
            )
           )
          
          }
          {errMessage && <div>{errMessage}</div>}

          
          {/* <div className="homePageCategoryMainBox">
            <div className="homePageCategoryLittleBox">
              <img src={sneakers} alt="" />
            </div>
            <span>Sneakers</span>
          </div>
          <div className="homePageCategoryMainBox">
            <div className="homePageCategoryLittleBox">
              <img src={Slippers} alt="" />
            </div>
            <span>Palms</span>
          </div>
          <div className="homePageCategoryMainBox">
            <div className="homePageCategoryLittleBox">
              <img src={sandals} alt="" />
            </div>
            <span>Sandals</span>
          </div>
          <div className="homePageCategoryMainBox">
            <div className="homePageCategoryLittleBox">
              <img src={coporate} alt="" />
            </div>
            <span>Corporate Shoe</span>
          </div>
          <div className="homePageCategoryMainBox">
            <div className="homePageCategoryLittleBox">
              <img src={timberland} alt="" />
            </div>
            <span>Timberland</span>
          </div> */}
        </div>

        {loading ? (
          <LongerCardLoading />
        ) : (
          <div className="heroMainShowCard">
            <div className="heroMainCardTextBox card">
              <h3>Airforce 1 Nike shoe</h3>
              <p>
                Shop now <GrLinkNext color="white" />
              </p>
            </div>
            <div className="heroMainCardTextBox">
              <img src={shoe} alt="" />
            </div>
          </div>
        )}

        <div className="categoryBoxhead">
          <div>Featured Footwears</div>
          <span>See All</span>
        </div>

        <div className="heroPageProductCardWrapper">
          {loading ? (
            <>
              <CardLoading />
              <CardLoading />
              <CardLoading />
            </>
          ) : (
            data.map((e, i) => (
              <div className="ProductCardMain" key={i}>
                <div className="productCardImgSec" onClick={()=>nav(`/details/${e._id}`)}>
                  <img src={e.shoeImage} alt="" />
                </div>
                <div className="productCardTextSec">
                  <div className="productCardProductName">{e.shoeName}</div>
                  <div className="productCardProductAmount">₦{e.price.toLocaleString()}.00</div>
                  <button className="addToCartBtn" onClick={()=>dispatch(addToCart(e))}>Add to cart</button>
                </div>
              </div>
            ))
          )}
          {errMessage && <div>{errMessage}</div>}
        </div>

        <div className="categoryBoxhead">
          <div>New Arrivals</div>
          <span>See All</span>
        </div>
        <div className="heroPageProductCardWrapper">
          {loading ? (
            <>
              <CardLoading />
              <CardLoading />
              <CardLoading />
            </>
          ) : (
            arrival.map((e, i) => (
              <div className="ProductCardMain" key={i}>
                <div className="productCardImgSec" onClick={()=>nav(`/details/${e._id}`)}>
                  <img src={e.shoeImage} alt="" />
                </div>
                <div className="productCardTextSec">
                  <div className="productCardProductName">{e.shoeName}</div>
                  <div className="productCardProductAmount">₦{e.price.toLocaleString()}.00</div>
                  <button className="addToCartBtn" onClick={()=>dispatch(addToCart(e))}>Add to cart</button>
                </div>
              </div>
            ))
          )}
          {errMessage && <div>{errMessage}</div>}
        </div>

        {loading ? (
          <LongerCardLoading />
        ) : (
          <div
            style={{ backgroundColor: "#EC3328" }}
            className="heroMainShowCard"
          >
            <div className="heroMainCardTextBox card">
              <h3>Airforce 1 Nike shoe</h3>
              <p>
                Shop now <GrLinkNext color="white" />
              </p>
            </div>
            <div className="heroMainCardTextBox">
              <img src={shoe} alt="" />
            </div>
          </div>
        )}

        {/* <div className="categoryBoxhead">
          <div>Top Rated Product</div>
          <span>See All</span>
        </div> */}
        <div className="heroPageProductCardWrapper">
          {loading ? (
            <>
              <CardLoading />
              <CardLoading />
              <CardLoading />
            </>
          ) : (
            data.map((e, i) => (
              <div className="ProductCardMain" key={i}>
                <div className="productCardImgSec" onClick={()=>nav(`/details/${e._id}`)}>
                  <img src={e.shoeImage} alt="" />
                </div>
                <div className="productCardTextSec">
                  <div className="productCardProductName">{e.shoeName}</div>
                  <div className="productCardProductAmount">₦{e.price.toLocaleString()}.00</div>
                  <button className="addToCartBtn" onClick={()=>dispatch(addToCart(e))}>Add to cart</button>
                </div>
              </div>
            ))
          )}
          {errMessage && <div>{errMessage}</div>}
        </div>
        <div className="categoryBoxhead">
          <div>Special Offers</div>
          <span>See All</span>
        </div>
        <div className="heroPageProductCardWrapper">
          {loading ? (
            <>
              <CardLoading />
              <CardLoading />
              <CardLoading />
            </>
          ) : (
            offer.map((e, i) => (
              <div className="ProductCardMain" key={i}>
                <div className="productCardImgSec" onClick={()=>nav(`/details/${e._id}`)}>
                  <img src={e.shoeImage} alt="" />
                </div>
                <div className="productCardTextSec">
                  <div className="productCardProductName">{e.shoeName}</div>
                  <div className="productCardProductAmount">₦{e.discount.toLocaleString()}.00</div>
                  <button className="addToCartBtn" onClick={()=>dispatch(addToCart(e))}>Add to cart</button>
                </div>
              </div>
            ))
          )}
          {errMessage && <div>{errMessage}</div>}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
