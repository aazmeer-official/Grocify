import React from 'react'


import VerticalMenu from './VerticalMenu';
const MainDashboard = () => {

  return (
    <div >
        
        <div className='flex min-h-lvh'>
        <div className=' w-1/5'>
        <VerticalMenu />
        </div>
        <div className='rightside bg-orange-400 w-full '>Right</div>
        </div>
    </div>
  )
}

export default MainDashboard