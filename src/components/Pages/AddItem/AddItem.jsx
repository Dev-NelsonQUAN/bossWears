import React from "react";
import "./AddItem.css";
import Header from "../Header/Header";
import { GrAddCircle } from "react-icons/gr";
import { CgErase } from "react-icons/cg";
import { FaFileImport, FaImage, FaImagePortrait, FaRecycle, FaRegFileImage, FaRegImages } from "react-icons/fa6";
import { FaRegImage } from "react-icons/fa";
import { FcAddImage } from "react-icons/fc";

const AddItem = () => {
  return (
    <div className="addItemsHolder">
      <Header />

      <div className="addItemBottom">
        <h1 className="addItemsText"> Add Item </h1>

        <div className="shoeNameDescDiv">
          <div className="shoeTopInputs">
            <div className="inputShoeNameDiv">
              <p className="shoeName"> Shoe Name </p>
              <input
                className="shoeNameInp"
                type="text"
                placeholder="Enter the shoe name"
              />
            </div>

            <div className="inputImg">
              <p className="uploadImg"> Upload Image </p>
              <div className="putImg">
                <FaRegImages size={40} color="grey" />
                <p className="imgUpload"> Upload Image  </p>
              </div>
            </div>


            <div className="inputShoeDesc">
              <p className="shoeDesc"> Shoe Description </p>
              <textarea name=""
                placeholder="Enter shoe description"
                id=""
                className="shoeDescInp"
              >

              </textarea>
              {/* <input
                className="shoeDescInp"
                type="text"
                placeholder="Enter the shoe name"
              /> */}
            </div>

            <div className="selectShoeCat">
              <p className="category"> Category </p>
              <select className="select">
                <option value=""> Select Category </option>
                <option value=""> Timberland </option>
                <option value=""> Canvas </option>
                <option value=""> Sneakers </option>
                <option value=""> Sandals </option>
                <option value=""> Co-operate Shoes </option>
                {/* className="shoeNameInp"
                type="text"
                placeholder="Enter the shoe name" */}
              </select>
            </div>

            <div className="holdSize">
              <p className="sizeP"> Size </p>
              <input type="text" className="sizeInp"
                placeholder="Size 42-46"
              />
            </div>

            <div className="holdPrice">
              <p className="priceP"> Price </p>
              <input type="text" className="priceInp"
                placeholder="₦59,000.00"
              />
            </div>

            <button className="shoeAddBtn">Add</button>

          </div>

          {/* <button className="shoeAddBtn">Add</button> */}
        </div>
      </div>

      <footer className="footer">
        <div className="footerInner">
          <div className="footAddDiv">
            <GrAddCircle />
            <p className="footAddItem"> Add Item </p>
          </div>

          <div className="footDelDiv">
            <FaRecycle/>
            <p className="footDelItem"> Delete Item </p>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default AddItem;
