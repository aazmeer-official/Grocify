import React from 'react'

const AboutHeading = ({orangePart,blackPart,underlinedPart}) => {
  return (
    <div className='flex justify-start'>
        <h2 className='text-4xl lg:text-4xl font-extrabold'><span className='text-orange-500'>{orangePart} </span>{blackPart}<span className='border-b-2 border-amber-500'>{underlinedPart}</span></h2>
    </div>
  )
}

export default AboutHeading