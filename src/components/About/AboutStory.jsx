import React from 'react'
import AboutHeading from "../utils/AboutHeading"
import MeatAndSeaFood from "../../assets/farmer.jfif"
import ButtonMain from '../utils/ButtonMain'
const AboutStory = () => {
  return (
    <div className='mt-5 flex justify-around gap-30 my-19'>
       <div className='w-100 min-w-1/2 flex justify-end' ><img src={MeatAndSeaFood} alt="" className='max-w-800 min-w-150 rounded-3xl'/></div>
       <div className=' min-w-1/2 flex flex-col'>
        <AboutHeading orangePart="Our " blackPart="Sto" underlinedPart="ry"/>
        <div className='max-w-2/3'><p>We started GrOcify with a simple idea - bring farm-fresh, organic
        produce closer to the communities we live in.</p><p className='my-5 mb-12'>By partnering with local farmers anSd following sustainable practices,we ensure you get the freshest and healthiest products while
        supporting our local economy.</p></div>
        <ButtonMain text="Our Jouney" />
       </div>
       
    </div>
  )
}

export default AboutStory