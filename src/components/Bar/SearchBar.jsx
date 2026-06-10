import React from 'react'

const SearchBar = () => {
  return (
    <div className='flex searchbar'>
        <input type="text" name="" id="" className=' pr-4 pt-5 pb-5 pl-3 -mt-2 rounded-3xl border-orange-500  focus:border-pink-600 border-2 hover:shadow-xl hover:shadow-orange-500/50'/>
        <button className='-ml-17 mr-10 mt-0.5 hover:text-orange-500'>Search</button>
    </div>
  )
}

export default SearchBar