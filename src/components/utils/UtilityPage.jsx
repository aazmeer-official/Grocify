import React from 'react'
import BackgroundPage from "../../assets/all-banner.jpg"
import Heading from './Heading'

const UtilityPage = ({orangePart,blackPart}) => {
  return (
    <div>
      <div 
        className="relative w-full bg-cover bg-center h-80" 
        style={{ backgroundImage: `url(${BackgroundPage})` }}
      >
        {/* Semi-transparent overlay */}
        <div className="absolute inset-0 bg-black/75"></div>
        
        {/* Added h-full to match the parent's height */}
        <div className="relative z-10 flex justify-center items-center h-full">
        <div className='flex justify-center mt-3'>
            <h2 className='text-4xl lg:text-9xl font-extrabold'><span className='text-orange-500'> {orangePart}</span>{blackPart} <span className='border-b-2 border-amber-500'></span></h2>
        </div>
        </div>
      </div>
    </div>
  )
}

export default UtilityPage