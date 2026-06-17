import React from 'react'

const ValuesCardCustomers = ({icon,heading,paragraph}) => {

  return (
    <div>
        <div className='flex gap-7 p-10'>
            <div>
                <div>{icon}</div>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <div className='text-3xl font-extrabold'><h2>{heading}</h2></div>
                <div>{paragraph}</div>
            </div>
        </div>
    </div>
  )
}

export default ValuesCardCustomers