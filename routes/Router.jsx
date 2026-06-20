import React from 'react'
import { Route, Routes} from "react-router-dom";
import Home from "../src/components/Home/Home"
import About from "../src/components/About/About"
import Product from "../src/components/Product/Product"
import Contact from '../src/components/Contact/Contact';
import Login from '../src/components/Login/Login';
import SignUp from '../src/components/SignUp/SignUp';
import Cart from '../src/components/Cart/Cart';
const Router = () => {
  return (
    <div>

    <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/about" element={<About />}/>
    <Route path="/products" element={<Product />}/>
    <Route path="/contact" element={<Contact />}/>
    <Route path="/login" element={<Login />}/>
    <Route path="/signup" element={<SignUp />}/>
    <Route path="/cart" element={<Cart />}/>
    </Routes>

    </div>
  )
}

export default Router