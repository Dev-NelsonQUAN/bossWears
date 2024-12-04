import React, { useState } from "react";
import "./AddItem.css";
import Header from "../Header/Header";
import { GrAddCircle } from "react-icons/gr";
import { CgErase } from "react-icons/cg";
import { FaFileImport, FaImage, FaImagePortrait, FaRecycle, FaRegFileImage, FaRegImages } from "react-icons/fa6";
import { FaRegImage } from "react-icons/fa";
import { FcAddImage } from "react-icons/fc";
import toast, { ToastBar } from "react-hot-toast";
import axios from "axios";
import ProductModal from "../../Modal/ProductAddedModal/ProductModal";
import { useNavigate } from "react-router";

const AddItem = ({toggle,setToggle}) => {

  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [size, setSize] = useState('')
  const [price, setPrice] = useState('')
  const [discountPrice, setDiscountPrice] = useState('')
  const [showModal, setShowModal] = useState(true)

  const [loading, setLoading] = useState(false)

  const [post, setPost] = useState(false)
  const [colors, setColors] = useState([""])

  const navigate = useNavigate()

  const data = {
    shoeName: name,
    descriptionProduct: description,
    category: category,
    sizes: size,
    price: price,
    shoeImage: image,
    discountPrice:discountPrice,
    colors:colors
  }

  const showImg = (e) => {
    const file = e.target.files[0];
    console.log(file)
    setImage(file)
    const img = URL.createObjectURL(file);
    setPost(img)
  };

  
  // console.log(data)
  const token = localStorage.getItem('token');
  // console.log(token);
  
  const handleColorChange = (index, value) => {
    const updatedColors = [...colors];
    updatedColors[index] = value;
    setColors(updatedColors);
  };

  // Function to add a new color input field
  const addColorField = () => {
    setColors([...colors, ""]);
  };

  // Function to remove a color field
  const removeColorField = (index) => {
    const updatedColors = colors.filter((_, i) => i !== index);
    setColors(updatedColors);
  };

  const Create = () => {
    if (!name || !description || !category || !size || !price || !image) {
      // Include file in validation
      alert("All details, including the file, are required to create a product.");
      return;
    }

    setLoading(true);
    const url = `https://boss-wear-t7uu.onrender.com/api/v1/shoe/uploadshoe`;

    // Create FormData object
    setLoading(true);
    const formData = new FormData();
    formData.append("shoeName", name);               
    formData.append("descriptionProduct", description); 
    formData.append("category", category);
    formData.append("sizes", size);                  
    formData.append("shoeImage", image);             
    formData.append("price", price);
    formData.append("discount", discountPrice);
    formData.append("colors", colors);
    console.log(formData);

    axios
      .post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        setShowModal(true)
        // setToggle(true)
        // Handle successful response here, e.g., navigating or setting state
        setLoading(false);
        setTimeout(() => {
          navigate("/delete-product")
          setShowModal(false)

        },3000);
      })
      .catch((err) => {
        console.log(err.response.data.message);
        setLoading(false);
      });
  };

  return (
    <>
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
                onChange={(e)=>setName(e.target.value)}
              />
            </div>

            <div className="inputImg">
              <p className="uploadImg"> Upload Image </p>
                <label htmlFor="1">
                  <div className="putImg">
                  {post ? <img src={post} alt="pic" className="postImg" /> : <div className='uploadCircle'><FaRegImages size={40} color="grey" /></div>}
                    {/* <FaRegImages size={40} color="grey" /> */}
                    <input type="file" id="1" hidden onChange={showImg} />
                    {!post && <p className="imgUpload"> Upload Image  </p>}
                    
                  </div>
                </label>
            </div>


            <div className="inputShoeDesc">
              <p className="shoeDesc"> Shoe Description </p>
              <textarea name=""
                placeholder="Enter shoe description"
                id=""
                className="shoeDescInp"
                onChange={(e)=>setDescription(e.target.value)}
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
              <select className="select" onChange={(e)=>setCategory(e.target.value)}>
                <option value=""> Select Category </option>
                <option value="timberland"> Timberland and boots </option>
                <option value="canvas"> Palms </option>
                <option value="sneakers"> Sneakers </option>
                <option value="sandals"> Sandals </option>
                <option value="co-operate shoes"> Coroperate Shoes </option>
                {/* className="shoeNameInp"
                type="text"
                placeholder="Enter the shoe name" */}
              </select>
            </div>
            {/* <div className="input-section">
        <input
          type="text"
          value={inputColor}
          placeholder="Enter color"
          onChange={(e) => setInputColor(e.target.value)}
          className="color-input"
        />
        <button onClick={addColor} className="add-btn" disabled={colors.length >= 3}>
          Add Color
        </button>
      </div> */}
      <div className="card-container">
      {colors.map((color, index) => (
          <div key={index} className="color-holder">
            <label className="sizeP">Color{index + 1}:</label>
           <div>
            
           </div>
            <input
              type="text"
              value={color}
              onChange={(e) => handleColorChange(index, e.target.value)}
              placeholder="Enter color"
              style={{
                height:"40px",
                // margin: "0 10px",
                padding: "5px",
                border: "1px solid #ccc",
                width: "100%",
              }}
            />
            {/* {colors.length > 1 && (
              <button type="button" onClick={() => removeColorField(index)}>
                Remove
              </button>
            )} */}
          </div>
        ))}
      </div>
    
        <button type="button" onClick={addColorField} className="color-addbtn">
          Add Another Color
        </button>

            <div className="holdSize">
              <p className="sizeP"> Size </p>
              <input type="text" className="sizeInp"
                placeholder="Size 42-46"
                onChange={(e)=>setSize(e.target.value)}
              />
            </div>

            <div className="holdPrice">
              <p className="priceP"> Price </p>
              <input type="text" className="priceInp"
                placeholder="₦59,000.00"
                onChange={(e)=>setPrice(e.target.value)}
              />
            </div>
            <div className="holdPrice">
              <p className="priceP">  Discount Price </p>
              <input type="text" className="priceInp"
                placeholder="₦59,000.00"
                onChange={(e)=>setDiscountPrice(e.target.value)}
              />
            </div>

            <button className="shoeAddBtn" onClick={Create}>{!loading? "Add": "loading...."}</button>

          </div>

          {/* <button className="shoeAddBtn">Add</button> */}
        </div>
      </div>

     
      {
      !showModal? <ProductModal/> : null
    }
    </div>
    {/* <ToastBar/> */}
 
    </>
  );
};

export default AddItem;
