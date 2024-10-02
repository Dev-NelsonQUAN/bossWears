import React from 'react'
import "./LandingPage.css"
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import HomePage from '../HomePage/HomePage'

const LandingPage = () => {
  return (
    <div className='LandPageHolder'>
        <Header/>
        <HomePage/>
        <Footer/>
    </div>
  )
}

export default LandingPage