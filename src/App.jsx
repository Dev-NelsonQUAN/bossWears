import React from 'react'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import LandingPage from "./components/Pages/LandingPage/LandingPage"
import Details from './components/Pages/Details/Details'
import Order from './components/Pages/Order/Order'
import AdminLogin from './components/auth/AdminLogin/AdminLogin'
import Cart from './components/Pages/Cart/Cart'

const router = createHashRouter([

  {
    path: "/",
    element: <LandingPage/>,
    // children: 
  },
  {
    path: "/admin-login",
    element: <AdminLogin/>
  },
  {
    path:"/details",
    element: <Details/>
  },
  {
    path: "/order",
    element: <Order/>
  },
  {
    path: "/cart",
    element: <Cart/>
  },
])

const App = () => {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App