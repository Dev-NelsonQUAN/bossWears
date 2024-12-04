import React from 'react'
import { Navigate, Outlet } from 'react-router';

const UserPrivate = () => {
  const token = localStorage.getItem('token');
  console.log(token);
  

  return (
   <>
   {
    token? <Outlet/>: <Navigate to ="/admin-login"/>
   }
   </>
  )
}

export default UserPrivate