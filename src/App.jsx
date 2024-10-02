import React from 'react'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import LandingPage from "./components/Pages/LandingPage/LandingPage"

const router = createHashRouter([
  {
    path: "/",
    element: <LandingPage/>
  },
  // {
  //   path:"/order",
  //   element: </>
  // }
])

const App = () => {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App