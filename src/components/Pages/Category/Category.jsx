import axios from 'axios'
import "./category.css"
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import CardLoading from '../../Extra/CardLoading'
import LongerCardLoading from '../../Extra/LongerCardLoading'
import CategoryCard from '../../Extra/CategoryCard'

const Category = () => {
    const [loading,setLoading]= useState(true)
    const [data,setData] = useState([])
    const [message,setMessage] = useState({})
    const [allCategory,setAllCategory] = useState([])
    const [otherCategories, setOtherCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null)
    // const [data,setData] = useState([])
    const [errMessage,setErrMessage] = useState('')
    const {categoryId}= useParams()
    const nav = useNavigate()
    const Categories = async() => {
try {
    const response = await axios.get (`
https://boss-wear-t7uu.onrender.com/api/v1/shoe/categoryShoe/${categoryId }`)
    setData(response.data.data);
    setMessage(response.data)
    
    
} catch (error) {
    const err = error?.message
    setErrMessage(err)
//    console.log(error);
    
}
    }
    const getAllCategory = async ()=> {
        const url = 'https://boss-wear-t7uu.onrender.com/api/v1/category/getallcategory'
    
        try {
          const res = await axios.get(url)
        //   console.log(res)
          setAllCategory(res.data.category);
          
          
        } catch (error) {
          // console.log(error);
          const err = error?.message
          setErrMessage(err)
          
        }
      }
      // console.log(allCategory);
      
    //   const handleCategoryClick = (categoryId) => {
    //     const selectedCategory = allCategory.find((cat) => cat._id === categoryId);
    //     const otherCategories = allCategory.filter((cat) => cat._id !== categoryId);
    // console.log("this it is")
    // // console.log(allCategory)
    //     setSelectedCategory(selectedCategory);
    //     setOtherCategories(otherCategories);
    //     nav(`/category/${categoryId}`);
    //   };
      const otherCatego = allCategory.filter((cat) => cat._id !== categoryId);


      const handleCategoryClick = (categoryId) => {
        nav(`/category/${categoryId}`); // Navigate to the clicked category
        setSelectedCategory(categoryId); // Update the selected category
      };
      
    useEffect(()=>{
        Categories()
        getAllCategory()
    },[categoryId])
  return (
    <div className='category'>
        <div className='category-header'>
            <div className='back'>  </div>
            <h6>Shoe Categories</h6>
        </div>
        {
            !loading? <>
             <LongerCardLoading/>
            </>
               :(
                    <div className='categories-head'>
                    <section className='categories-head-section1'>
                        <h6>Bosswears</h6>
                        <h4>{message.categoryName}</h4>
                        <button>Shop Now</button>
                    </section>
                    <section className='categories-head-section2'>
                        <img src={message.categoryImage} alt="" />
                    </section>
                </div>
                )
            
        }
     
        <div className='Category-holder'>
            {
                !loading? (
                    <CardLoading/>
                ):(
                    data.map((e,i)=>
                        <div className='Eachcategory' key={i}>
                    <div className='Eachcategory-img-holder' onClick={(()=>nav(`/details/${e._id}`))}>
                        <img src={e.shoeImage} alt="" />
                    </div>
                    <div className='Eachcategory-text-holder'>
     
                    <h6>{e.shoeName}</h6>
                    <p>#{e.price}</p>
                    <button>
                     <div className='cart-div'></div>
                     Add to cart</button>
                    </div>
                 </div>)

                )
            }
          {errMessage && <div>{errMessage}</div>}

           
           
        </div>
        <div className="categoryBoxWrapper">
        <div className="categoryBoxhead">
          <div> Other Categories</div>
          <span>See All</span>
        </div>
        <div className="categorySecBoxBody">
        {
           !loading?
          <>
         <CategoryCard/>
         <CategoryCard/>
         <CategoryCard/>
         <CategoryCard/>
          </>
          
            :
           (
            otherCatego.map((e, i)=>
              <div className="homePageCategoryMainBox" onClick={() => handleCategoryClick(e._id)}>
            <div className="homePageCategoryLittleBox">
              <img src={e.categoryImage} alt="" />
            </div>
            <span>{e.categoryName}</span>
          </div>
            )
           )
          
          }
            </div>
            </div>
    </div>
  )
}

export default Category