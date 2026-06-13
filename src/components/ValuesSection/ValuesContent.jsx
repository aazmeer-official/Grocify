import React from 'react'

const ValuesContent = ({heading,description}) => {
  return (
    <div>
      <h3 className='text-2xl font-bold'>{heading}</h3>
      <p className='w-70 mt-2'>{description}</p>
    </div>
  )
}

export default ValuesContent