import React from 'react'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import OfflineBoltRoundedIcon from '@mui/icons-material/OfflineBoltRounded';
const TeamCard = ({image,heading,paragraph}) => {
  const color = {
    color:"gray",
    cursor:"pointer"
  }
  return (
    <div>
        <div className='flex flex-col justify-center  bg-white items-center px-12 pt-5 pb-5 rounded-3xl shadow-xl'>
        <div className='rounded-4xl'><img src={image} alt="" className='rounded-full max-w-35'/></div>
        <div className='font-bold text-lg mt-5'>{heading}</div>
        <div className='text-orange-500 text-sm mt-1 mb-5'>{paragraph}</div>
        <div className='flex gap-4'>
            <div><FacebookRoundedIcon sx={color}/></div>
            <div><ShareRoundedIcon sx={color}/></div>
            <div><OfflineBoltRoundedIcon sx={color}/></div>
        </div>
        </div>
    </div>
  )
}

export default TeamCard