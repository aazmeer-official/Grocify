import React from 'react'
import ValuesIcon from './ValuesIcon'
import ValuesContent from './ValuesContent'

const ValuesCardRight = ({IconProp, heading , description}) => {
  return (
    <div className='flex md:my-5'>
    <div className='mt-5 mx-5'>
        <ValuesIcon Icon={IconProp}/>
    </div>
    <div className=''>
        <ValuesContent heading={heading} description={description}/>
    </div>
    </div>
  )
}

export default ValuesCardRight