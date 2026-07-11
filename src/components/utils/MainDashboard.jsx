import React from 'react'


import VerticalMenu from './VerticalMenu';
const MainDashboard = () => {

  return (
    <div >
        
        <div className='flex min-h-lvh'>
        <div className=' w-1/5 border-solid border-gray-200 border-r-5'>
        <VerticalMenu />
        </div>
        <div className='rightside w-full '>Right</div>
        </div>
    </div>
  )
}

export default MainDashboard