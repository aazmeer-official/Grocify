import React from 'react'
import ButtonMain from '../utils/ButtonMain'
import ProductCard from './ProductCard'
import Tilapia from "../../assets/tilapia.png"
import Shrimp from "../../assets/shrimp.png"
import Salmon from "../../assets/salmon.png"
import Milk from "../../assets/milk.png"
import Lettuce from "../../assets/lettuce.png"
import Kiwi from "../../assets/kiwi.png"
import Strawberry from "../../assets/strawberry.png"
import Tofu from  "../../assets/tofu.png"
const Products = () => {
  return (<div>
    <div className='flex flex-wrap gap-10 justify-center mt-10 lg:flex-row px-7 lg:px-10 flex-col'>
        <div className='w-100 lg:w-1/5'><ProductCard image={Strawberry} title="Strawberry" price="$3.44"/></div>
        <div className='w-100 lg:w-1/5'><ProductCard image={Milk} title="Milk" price="$5.99"/></div>
        <div className='w-100 lg:w-1/5'><ProductCard image={Shrimp}  title="Shrimp" price="$5.99"/></div>
        <div className='w-100 lg:w-1/5'><ProductCard image={Lettuce} title="Lettuce" price="$2.99"/></div>
        <div className='w-100 lg:w-1/5'><ProductCard image={Kiwi} title="Kiwi" price="$1.99"/></div>
        <div className='w-100 lg:w-1/5'><ProductCard image={Tofu} title="Tofu" price="$4.99"/></div>
        <div className='w-100 lg:w-1/5'><ProductCard image={Salmon} title="Salmon" price="$7.99"/></div>
        <div className='w-100 lg:w-1/5'><ProductCard image={Tilapia} title="Tilapia" price="$8.99"/></div>
    </div>
        <div className='mt-5 flex justify-center mb-5'>
        <ButtonMain text="View All Products" to="/products"/>
        </div>
    </div>
  )
}

export default Products