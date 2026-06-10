import React from 'react'
import BarIcons from './BarIcons'
import BarMenu from './BarMenu'
import SearchBar from './SearchBar'
import VerticalMenu from './VerticalMenu'

const MainBar = () => {
  return (<div>
    <div className='flex justify-between h-16 p-5 font-bold bg-amber-100'>
        <BarIcons />
        <BarMenu />
        <SearchBar />
    </div>
        <VerticalMenu />
    </div>
  )
}

export default MainBar