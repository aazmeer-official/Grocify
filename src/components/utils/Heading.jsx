import React from 'react'

const Heading = ({orangePart,blackPart,underlinedPart}) => {
  return (
    <div className='flex justify-center mt-3'>
        <h2 className='text-5xl font-extrabold'><span className='text-orange-500'>{orangePart} </span>{blackPart}<span className='border-b-2 border-amber-500'>{underlinedPart}</span></h2>
    </div>
  )
}

export default Heading