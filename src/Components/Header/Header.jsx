import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IconButton } from '@mui/material';


function Header() {
  return (
    <header className='fixed top-0 left-0 z-[100] w-full p-5 bg-rose-700 flex items-center justify-between
    shadow-lg'>
    <div className="flex items-center ">
        <IconButton sx={{color:"white"}}>
            <MenuIcon sx={{
            color:"black"
            }}></MenuIcon>
        </IconButton>
       
        <h1  className="text-sm font-bold ml-1">PRAMODH
        <span className=" text-red-500 ml-2 " >
        DEV</span>
        </h1>
        <div className="flex items-center rounded-full bg-red-400 ml-2 overflow-hidden   ">
            <input type='text' 
            placeholder='Search' 
            className="outline-none p-2 font-semibold text-sm w-[200px] bg-inherit ml-1 ">

            </input>
            <IconButton>
            <SearchIcon className=' text-gray-200'></SearchIcon>
            </IconButton>
        </div>
    </div>
    <IconButton>
    <ShoppingCartIcon></ShoppingCartIcon>
    </IconButton>
    </header>
  )
}

export default Header