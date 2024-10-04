import React from 'react'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import LandingPage from "./components/Pages/LandingPage/LandingPage"
import Details from './components/Pages/Details/Details'

const router = createHashRouter([

  {
    path: "/",
    element: <LandingPage/>,
    // children: 
  },
  {
    path:"/details",
    element: <Details/>
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