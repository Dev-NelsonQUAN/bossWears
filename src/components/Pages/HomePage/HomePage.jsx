import React, { useEffect, useState } from "react";  
import "./HomePage.css";  
import shoe from "../../../assets/cardshoe.svg";  
import sneakers from "../../../assets/sneakers.svg";  
import Slippers from "../../../assets/Slippers.svg";  
import sandals from "../../../assets/sandals.svg";  
import coporate from "../../../assets/coporate.svg";  
import timberland from "../../../assets/timberland.svg";  
import { GrLinkNext } from "react-icons/gr";

const HomePage = () => {  
  const cards = [  
    {  
      title: "Explore Casual Comfort",  
      description: "Explore Casual Comfort",  
      text: "For your casual outfits",  
      img: "path_to_your_image.jpg",  
    },  
    {  
      title: "Another Card",  
      description: "Explore Stylish Options",  
      text: "For your trendy looks",  
      img: "path_to_your_image2.jpg",  
    },  
    {  
      title: "More Choices",  
      description: "Discover New Styles",  
      text: "For every occasion",  
      img: "path_to_your_image3.jpg",  
    },  
  ];  

  const [currentIndex, setCurrentIndex] = useState(0);  

  useEffect(() => {  
    const interval = setInterval(() => {  
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);  
    }, 3000); // Change card every 3000ms (3 seconds)  

    return () => clearInterval(interval); // Cleanup on unmount  
  }, [cards.length]);  

  return (  
    <div className="homeHold">  
      <div className="carocelWrapperBox">  
        {cards.map((e, i) => (  
          <div className="homePageCard" key={i} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>  
            <div className="homePageCardTextSec">  
              <h3>{e.title}</h3>  
              <p>{e.text}</p>  
            </div>  
            <div className="homePageCardPicSec">  
              <img src={shoe} alt="" />  
            </div>  
          </div>  
        ))}  
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
            <span>
              Sneakers
            </span>
          </div>
          <div className="homePageCategoryMainBox">
            <div className="homePageCategoryLittleBox">
              <img src={Slippers} alt="" />
            </div>
            <span>
              Palms
            </span>
          </div>
          <div className="homePageCategoryMainBox">
            <div className="homePageCategoryLittleBox">
              <img src={sandals} alt="" />
            </div>
            <span>
              Sandals
            </span>
          </div>
          <div className="homePageCategoryMainBox">
            <div className="homePageCategoryLittleBox">
              <img src={coporate} alt="" />
            </div>
            <span>
              Corporate Shoe
            </span>
          </div>
          <div className="homePageCategoryMainBox">
            <div className="homePageCategoryLittleBox">
              <img src={timberland} alt="" />
            </div>
            <span>
              Timberland
            </span>
          </div>
        </div>
        <div className="heroMainShowCard">
          <div className="heroMainCardTextBox card">
            <h3>Airforce 1 Nike shoe</h3>
            <p>Shop now  <GrLinkNext color="white"/></p>
          </div>
          <div className="heroMainCardTextBox">
            <img src={shoe} alt="" />
          </div>
        </div>
      </div>
    </div>  
  );  
};  

export default HomePage;