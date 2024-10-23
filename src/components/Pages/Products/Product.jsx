import React from 'react'
import './Product.css'
import Header from "../Header/Header";
import { GrAddCircle } from "react-icons/gr";
import { FaRecycle, FaRegImages } from "react-icons/fa6";
import { useNavigate } from 'react-router';


const Product = () => {
  const nav = useNavigate()
  return (
    <div className="addItemsHolder">
      <Header />

      <div className="addItemBottom">
        <h1 className="addItemsText"> Add Item </h1>

        <div className="shoeNameDescDiv">
          <div className="shoeAllProductBox">

            <div className='productCard'>
              <span>H</span>
              <div>hello</div>
              <div>hello</div>
            </div>
            
          </div>

          {/* <button className="shoeAddBtn">Add</button> */}
        </div>
      </div>

      <footer className="footer">
        <div className="footerInner">
          <div className="footAddDiv" onClick={()=>nav('/add-item')}>
            <GrAddCircle />
            <p className="footAddItem"> Add Item </p>
          </div>

          <div className="footDelDiv" onClick={()=>nav('/products')}>
            <FaRecycle/>
            <p className="footDelItem"> Delete Item </p>
          </div>
        </div>
      </footer>

    </div>
  )
}

export default Product