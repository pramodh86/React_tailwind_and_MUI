import React from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import { Outlet } from 'react-router-dom'


const MainLayout = () => {
  return (
    <div className='w-full h-screen'>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default MainLayout