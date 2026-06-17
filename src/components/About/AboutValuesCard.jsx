import React from 'react'
import ParkIcon from '@mui/icons-material/Park';
const AboutValuesCard = ({icon,title,description}) => {

  return (
    <div>
        <div className='flex flex-col gap-2 items-center px-10 '>
            <div>{icon}</div>
            <div className='text-xl font-extrabold '> <h3>{title}</h3></div>
            <div className='w-60 text-center'>{description}</div>
        </div>
    </div>
  )
}

export default AboutValuesCard