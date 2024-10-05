import React, { useEffect, useState } from 'react'
import "./LandingPage.css"
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import HomePage from '../HomePage/HomePage'
// import Skeleton from "react-loading-skeleton"
// import 'react-loading-skeleton/dist/skeleton.css';  



const LandingPage = () => {
    // const [loading, setLoading] = useState(true);  
    // const [data, setData] = useState(null);  
    
    // useEffect(() => {  
    //   // Simulate a data fetching  
    //   setTimeout(() => {  
    //     setData({ name: 'John Doe', age: 30 });  
    //     setLoading(false);  
    //   }, 2000); // 2 seconds loading time  
    // }, []);  
    
    // if (loading) {  
    //   return (  
    //     <div>  
    //       <Skeleton height={30} width={200} />  
    //       <Skeleton height={20} width={100} />  

    //         <div>
    //             <Skeleton height={50} width={500}/>
    //         </div>
    //     </div>  
    //   );  
    // }  
    
    // return (  
    //   <div>  
    //     <h1>{data.name}</h1>  
    //     <p>Age: {data.age}</p>  
    //   </div>  
    // );  
    return (
        <div className='LandPageHolder'>
        <Header/>
        <HomePage/>
        <Footer/>
    </div>
  )
}

export default LandingPage