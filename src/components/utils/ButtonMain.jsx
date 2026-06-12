import React from 'react'
import { Link } from 'react-router-dom'

const ButtonMain = ({text,to}) => {
  return (
    <div>
      <Link to={to} className='px-6 bg-orange-400 py-2 text-l text-amber-50 font-bold rounded-sm '>{text}</Link>
    </div>
  )
}

export default ButtonMain