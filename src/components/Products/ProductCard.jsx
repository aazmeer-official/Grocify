import React, { useState } from 'react'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import AddBoxSharpIcon from '@mui/icons-material/AddBoxSharp';
import ButtonMain from '../utils/ButtonMain';
import Butter from "../../assets/butter.png"

const ProductCard = ({title,price,image}) => {
    const [heart, setHeart] = useState(false)
    const toggleHeart = ()=>{
        if(!heart){
            setHeart(true)
        }
        if(heart){
            setHeart(false)
        }
    }


  return (
    <div>
       <div className='flex flex-col  items-center max-w-80 h-70 pt-5 pb-80 bg-gray-200 rounded-lg '>
        <div className='flex flex-row justify-around w-110 '>
            <div onClick={toggleHeart} className='cursor-pointer'>
            {heart ? <FavoriteOutlinedIcon  sx={{
                fontSize:"35px",
                color:"red"
            }}/> : <FavoriteBorderOutlinedIcon sx={{
                fontSize:"35px",
                color:"red"
            }}/> }    
                </div>
            <div className='cursor-pointer'>
            <AddBoxSharpIcon sx={{
                fontSize:"35px",
                color:"#FF6900",
            }} /> </div>
        </div>
        <div className='max-w-50 max-h-30 mb-8 -mt-8 '><img src={image} alt="" /></div>
        <div className='text-3xl font-bold mt-9 mb-1'>{title}</div>
        <div  className='text-xl font-bold mb-5'>{price}</div>
        <ButtonMain text="Add to Cart" to="/cart"/>
       </div>
    </div>
  )
}

export default ProductCard