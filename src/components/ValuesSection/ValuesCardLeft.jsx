import React from 'react'
import ValuesIcon from './ValuesIcon'
import ValuesContent from './ValuesContent'
const ValuesCardLeft = ({IconProp ,heading, description}) => {
  return (
    <div>
    <div className='flex flex-row-reverse md:my-5'>
    <div className='mt-5'>
        <ValuesIcon Icon={IconProp}/>
    </div>
    <div className='text-right mx-5'>
        <ValuesContent heading={heading} description={description}/>
    </div>
    </div>
    </div>
  )
}

export default ValuesCardLeft