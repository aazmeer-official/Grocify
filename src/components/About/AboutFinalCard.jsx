import React from 'react'
import AboutHeading from '../utils/AboutHeading'
import ButtonMain from '../utils/ButtonMain'
import GroceryPack from "../../assets/grocerypack.png"
const AboutFinalCard = () => {
  return (
    <div>
        <div className='flex py-12 bg-orange-100 mt-12 justify-around rounded-3xl'>
            <div className='w-1/3 px-10 flex flex-col gap-5 mt-10'>
            <AboutHeading orangePart="Join Us in Building a " blackPart="Healthier Tommorrow"/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat mollitia illo esse.</p>
            <ButtonMain text="Shop Now" to="/shop"/>
            </div>
            <div className='w-2/3'>
            <img src={GroceryPack} alt="" className='justify-self-end'/>
            </div>
        </div>
    </div>
  )
}

export default AboutFinalCard