import React, { useState } from 'react'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import LandingPage from "./components/Pages/LandingPage/LandingPage"
import Details from './components/Pages/Details/Details'
import Order from './components/Pages/Order/Order'
import AdminLogin from './components/auth/AdminLogin/AdminLogin'
import Cart from './components/Pages/Cart/Cart'
import ForgotPassword from './components/auth/ForgotPassword/ForgotPassword'
import ResetPassword from './components/auth/ResetPassword/ResetPassword'
import AddItem from './components/Pages/AddItem/AddItem'
import AdminResetPassword from './components/auth/AdminResetPassword/AdminResetPassword'
import Product from './components/Pages/Products/Product'
import Category from './components/Pages/Category/Category'
import Delete from './components/Pages/Delete/Delete'
import UserPrivate from './components/Pages/UserPrivate'
import Layout from './components/Pages/Layout'
import ToggleComponent from './components/useState'



const App = () => {

  const router = createHashRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/forgot-password",
      element: <ForgotPassword />
    },
    {
      path: "/reset-password",
      element: <ResetPassword />
    },
  
    {
     
      element: <UserPrivate/>,
      children: [
        {
       
          element: <Layout/>,
          children: [
            {
              path: "/delete-product",
              element: <Delete />
            },
            {
              path: "/add-item",
              element: <AddItem />
            },
          ]
        },
            
          ]
        },
        
    {
      path: "/admin-login",
      element: <AdminLogin />
    },
   
    {
      path: "/details/:shoeId",
      element: <ToggleComponent/>
    },
    {
      path: "/order",
      element: <ToggleComponent/>
    },
    {
      path: "/cart",
      element: <Cart />
    },
    {
      path: "/products",
      element: <Product />
    },
    {
      path: "/category/:categoryId",
      element: <Category />
    },
  
   
   
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
