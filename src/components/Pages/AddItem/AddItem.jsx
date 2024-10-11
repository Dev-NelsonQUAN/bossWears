import React from "react";
import "./AddItem.css";
import Header from "../Header/Header";
import { GrAddCircle } from "react-icons/gr";
import { CgErase } from "react-icons/cg";

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

            <div className="inputShoeDesc">
              <p className="shoeDesc"> Shoe Description </p>
              <input
                className="shoeDescInp"
                type="text"
                placeholder="Enter the shoe name"
              />
            </div>

            <div className="selectShoeCat">
              <p className="shoeName"> Shoe Name </p>
              <select className="select">
                <option value=""> Select Your Categories </option>
                <option value=""> Timberland </option>
                <option value=""> Shoes </option>
                <option value=""> Canvas </option>
                <option value=""> Sneakers </option>
                <option value=""> Sandals </option>
                <option value=""> Co-operate Shoes </option>
                {/* className="shoeNameInp"
                type="text"
                placeholder="Enter the shoe name" */}
              </select>
            </div>
          </div>

          <button className="shoeAddBtn">Add</button>
        </div>
      </div>

      <footer className="footer">
        <div className="footerInner">
          <GrAddCircle/>
          <CgErase/>
        </div>
      </footer>

    </div>
  );
};

export default AddItem;
