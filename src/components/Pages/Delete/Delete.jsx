import React, { useState } from 'react'
import './delete.css'
import Header from '../Header/Header'
import sneakers from '../../../assets/sneakers.svg'
import { useEffect } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
// import swal from 'sweetalert2'

const Delete = () => {
  const token = localStorage.getItem('token');
  const [data,setData] = useState([])
  const [loading,setLoading] = useState(false)
  const [errMessage, setErrMessage] = useState()


  
const url = "https://boss-wear-t7uu.onrender.com/api/v1"



const getAllProduct = async() => {
  try {
    const res = await axios .get(`${url}/shoe/shoes`,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${token}`,
        },
      }
    )
    setData(res.data.data);
    console.log(res);
    
    
  } catch (error) {
    console.log(error);
    const err = error?.message
    setErrMessage(err)
    
    
  }
}
useEffect(()=>{
  getAllProduct()
},[])

const handleDeleteClick = (shoeId) => {
  Swal.fire({
    title: "Are you sure?",
    text: "Once deleted, you will not be able to recover this item!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes, delete it!",
    cancelButtonText: "No, cancel!",
    dangerMode: true,
    customClass: {
      popup: "custom-swal-popup",
      title: "custom-swal-title",
      confirmButton: "custom-swal-confirm",
      cancelButton: "custom-swal-cancel",
    },
  }).then((result) => {
    if (result.isConfirmed) {
      deleteProduct(shoeId); // Call delete function if confirmed
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire("Cancelled", "Your product is safe!", "info");
    }
  });
};

  const deleteProduct = async({shoeId})=>{
    try {
      console.log(shoeId);
      
      const response = await axios.delete(`${url}/shoe/deleteshoe/${shoeId}`, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${token}`, // Use template literals to properly insert the token
        },
      });
  console.log(response);
  Swal.fire("Deleted!", "The product has been deleted successfully.", "success")
  

  getAllProduct()
      
    } catch (error) {
      console.log(error);
      
    }
  }
  return (
    <div className='delete'>
      <Header/>
      <div className='delete-container'>Delete Items</div>
      <div className='Delete-wrapper'>
      {
        loading ? 
       ( <div> Loading ......</div>)
        : (
          data.map((e,i)=>
            <div className='delete-product' onClick={() => handleDeleteClick({ shoeId: e._id })}>
          <div className='delete-product-left'>
            <div className='delete-product-img'>
              <img src={e.shoeImage} alt="" />
            </div>
            <div className='delete-text-holder'>
              <h5>{e.shoeName}</h5>
              <h6>{e.price}</h6>
              <p>Quantity</p>
            </div>
          </div>
          <div className='delete-product-right'>
            <p>-</p>
            <p>1</p>
            <p>+</p>
          </div>
        </div>
          )
        )
      }
      <p>{errMessage}</p>
       
      </div>
    </div>
  )
}

export default Delete