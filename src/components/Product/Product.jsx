import React from 'react'
import UtilityPage from '../utils/UtilityPage'
import Products from "../Products/Products"

const Product = () => {
  return (
    <div>
        <UtilityPage orangePart="Shop " blackPart="All"/>
        <Products />
    </div>
  )
}

export default Product