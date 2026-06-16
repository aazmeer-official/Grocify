import React from 'react'
import { Route, Routes} from "react-router-dom";
import Home from "../src/components/Home/Home"
import About from "../src/components/About/About"
const Router = () => {
  return (
    <div>

    <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/about" element={<About />}/>
    </Routes>

    </div>
  )
}

export default Router