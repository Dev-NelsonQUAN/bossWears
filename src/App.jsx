import React from 'react'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import LandingPage from "./components/Pages/LandingPage/LandingPage"
import Details from './components/Pages/Details/Details'
import Order from './components/Pages/Order/Order'

const router = createHashRouter([

  {
    path: "/",
    element: <LandingPage/>,
    // children: 
  },
  {
    path:"/details",
    element: <Details/>
  },
  {
    path: "/order",
    element: <Order/>
    
  }
])

const App = () => {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App