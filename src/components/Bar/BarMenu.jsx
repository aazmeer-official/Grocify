import React, { useContext, useState } from 'react'
import { NavLink } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import { MenuContext } from '../../context/context';

const BarMenu = () => {
    const {toggle,setToggle} = useContext(MenuContext)
    const toggleButton = ()=>{
        if(!toggle){
            setToggle(true)
            console.log("It was FALSE")
        }
        if(toggle){setToggle(false)}
    }
  return (<div>
  <div>
    <div className=' gap-20 flex text-xl menu-bar mt-1'>    
    <div className='home hover:text-orange-500'><NavLink to="/">Home</NavLink></div>
    <div className='about hover:text-orange-500'><NavLink to="/about">About</NavLink></div>
    <div className='contact hover:text-orange-500'><NavLink to="/contact">Contact</NavLink></div>
    <div className='products hover:text-orange-500'><NavLink to="/products">Products</NavLink></div>
    </div>
    <div className='icon-menu hidden' onClick={toggleButton}><MenuIcon  fontSize="large"/></div>
    
    </div>

    </div>
  )
}

export default BarMenu