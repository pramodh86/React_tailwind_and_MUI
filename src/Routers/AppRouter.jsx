import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from '../Layouts/MainLayout'
import { ImageSharp } from '@mui/icons-material'
import Home from '../Pages/Home/Home'
import User from '../Pages/User/User'



function AppRouter() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<MainLayout></MainLayout>}>
               <Route index element={<Home></Home >}></Route>
               <Route path='user' element={<User></User>}></Route>  
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter