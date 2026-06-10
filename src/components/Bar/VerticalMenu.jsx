import React, { useContext } from 'react'
import { NavLink } from "react-router-dom";
import { MenuContext } from '../../context/context';

const VerticalMenu = () => {
    const {toggle,setToggle} = useContext(MenuContext)
    
  return (
    <div className={` ${toggle ? "flex" : "hidden"} p-10 vertical-menu flex-col gap-10 text-xl bg-orange-200 xl:hidden`}>
    <div className='home'><NavLink to="/">Home</NavLink></div>
    <div className='about'><NavLink to="/about">About</NavLink></div>
    <div className='contact'><NavLink to="/contact">Contact</NavLink></div>
    <div className='products'><NavLink to="/products">Products</NavLink></div>
    </div>
  )
}

export default VerticalMenu