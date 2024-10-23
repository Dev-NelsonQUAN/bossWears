import React, { useState } from "react";
import "./AddItem.css";
import Header from "../Header/Header";
import { GrAddCircle } from "react-icons/gr";
import { CgErase } from "react-icons/cg";
import { FaFileImport, FaImage, FaImagePortrait, FaRecycle, FaRegFileImage, FaRegImages } from "react-icons/fa6";
import { FaRegImage } from "react-icons/fa";
import { FcAddImage } from "react-icons/fc";
import toast, { ToastBar } from "react-hot-toast";

const AddItem = () => {

  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [size, setSize] = useState('')
  const [price, setPrice] = useState('')

  const [loading, setLoading] = useState(false)

  const [post, setPost] = useState(false)

  const data = {
    name: name,
    description: description,
    category: category,
    size: size,
    price: price,
    image: image,
  }

  const showImg = (e) => {
    const file = e.target.files[0];
    console.log(file)
    setImage(file)
    const img = URL.createObjectURL(file);
    setPost(img)
  };
  // console.log(data)

  const Create = () => {
    if (!name || !description || !category || !size || !price || !image) {
      // Include file in validation
      alert("All details, including the file, are required to create a product.");
      return;
    }

    setLoading(true);
    const url = `https://boss-wear-t7uu.onrender.com/api/v1/shoe/uploadshoe`;

    // Create FormData object
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("size", size);
    formData.append("image", image); // Append the file
    formData.append("price", price);
    console.log(formData);

    axios
      .post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        },
      })
      .then((res) => {
        console.log(res);
        // Handle successful response here, e.g., navigating or setting state
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
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
                <option value="timberland"> Timberland </option>
                <option value="canvas"> Canvas </option>
                <option value="sneakers"> Sneakers </option>
                <option value="sandals"> Sandals </option>
                <option value="co-operate shoes"> Co-operate Shoes </option>
                {/* className="shoeNameInp"
                type="text"
                placeholder="Enter the shoe name" */}
              </select>
            </div>

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

            <button className="shoeAddBtn" onClick={Create}>Add</button>

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
    {/* <ToastBar/> */}
    </>
  );
};

export default AddItem;
