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

const HomePage = () => {
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
      price: "59,000",
    },
    {
      img: "src/assets/orange.svg",
      name: "white snaekers",
      price: "44,000",
    },
    {
      img: "src/assets/orange.svg",
      name: "orange snaekers",
      price: "30,000",
    },
  ];

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    // Simulate a data fetching
    setTimeout(() => {
      setData({ name: "John Doe", age: 30 });
      setLoading(false);
    }, 2000); // 2 seconds loading time
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 3000); // Change card every 3000ms (3 seconds)

    return () => clearInterval(interval); // Cleanup on unmount
  }, [cards.length]);

  const nav = useNavigate()

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
          <div className="homePageCategoryMainBox">
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
          </div>
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
            product.map((e, i) => (
              <div className="ProductCardMain" key={i}>
                <div className="productCardImgSec" onClick={()=>nav('/details')}>
                  <img src={e.img} alt="" />
                </div>
                <div className="productCardTextSec">
                  <div className="productCardProductName">{e.name}</div>
                  <div className="productCardProductAmount">₦{e.price}.00</div>
                  <button className="addToCartBtn">Add to cart</button>
                </div>
              </div>
            ))
          )}
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
            product.map((e, i) => (
              <div className="ProductCardMain" key={i}>
                <div className="productCardImgSec" onClick={()=>nav('/details')}>
                  <img src={e.img} alt="" />
                </div>
                <div className="productCardTextSec">
                  <div className="productCardProductName">{e.name}</div>
                  <div className="productCardProductAmount">₦{e.price}.00</div>
                  <button className="addToCartBtn">Add to cart</button>
                </div>
              </div>
            ))
          )}
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

        <div className="categoryBoxhead">
          <div>Top Rated Product</div>
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
            product.map((e, i) => (
              <div className="ProductCardMain" key={i}>
                <div className="productCardImgSec" onClick={()=>nav('/details')}>
                  <img src={e.img} alt="" />
                </div>
                <div className="productCardTextSec">
                  <div className="productCardProductName">{e.name}</div>
                  <div className="productCardProductAmount">₦{e.price}.00</div>
                  <button className="addToCartBtn">Add to cart</button>
                </div>
              </div>
            ))
          )}
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
            product.map((e, i) => (
              <div className="ProductCardMain" key={i}>
                <div className="productCardImgSec" onClick={()=>nav('/details')}>
                  <img src={e.img} alt="" />
                </div>
                <div className="productCardTextSec">
                  <div className="productCardProductName">{e.name}</div>
                  <div className="productCardProductAmount">₦{e.price}.00</div>
                  <button className="addToCartBtn">Add to cart</button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
