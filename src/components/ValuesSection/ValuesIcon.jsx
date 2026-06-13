import React from 'react'
import ShieldIcon from '@mui/icons-material/Shield';
const ValuesIcon = ({Icon}) => {
  return (
    <div> 
        <div className='w-12 h-12 rounded-full bg-orange-500 flex justify-center items-center'>
          <Icon fontSize="large" sx={{
            color:"white",
            marginTop:"1px"
          }}/>
        </div>
    </div>
  )
}

export default ValuesIcon