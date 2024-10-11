import React from 'react'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import LandingPage from "./components/Pages/LandingPage/LandingPage"
import Details from './components/Pages/Details/Details'
import Order from './components/Pages/Order/Order'
import AdminLogin from './components/auth/AdminLogin/AdminLogin'
import Cart from './components/Pages/Cart/Cart'
import ForgotPassword from './components/auth/ForgotPassword/ForgotPassword'
import ResetPassword from './components/auth/ResetPassword/ResetPassword'
import AddItem from './components/Pages/AddItem/AddItem'

const router = createHashRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/forgot",
    element: <ForgotPassword />
  },
  {
    path: "/reset",
    element: <ResetPassword />
  },
  {
    path: "/admin-login",
    element: <AdminLogin />
  },
  {
    path: "/add-item",
    element: <AddItem />
  },
  {
    path: "/details/:id",
    element: <Details />
  },
  {
    path: "/order",
    element: <Order />
  },
  {
    path: "/cart",
    element: <Cart />
  }
])

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
