import React from 'react'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import LandingPage from "./components/Pages/LandingPage/LandingPage"
import Details from './components/Pages/Details/Details'
import Order from './components/Pages/Order/Order'
import AdminLogin from './components/auth/AdminLogin/AdminLogin'
import Cart from './components/Pages/Cart/Cart'
import AdminResetPassword from './components/auth/AdminResetPassword/AdminResetPassword'
import AdminUpdatePassword from './components/auth/AdminUpdatePassword/AdminUpdatePassword'
import AdminAdd from './components/Pages/AdminAdd/AdminAdd'

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
  // {
  //   path: "/admin-resetpassword",
  //   element: <AdminResetPassword/>
  // },
  // {
  //   path: "/admin-updatepassword",
  //   element: <AdminUpdatePassword/>
  // },
  {
    path:"/details/:id",
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
  {
    path: "/admin-add",
    element: <AdminAdd/>
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