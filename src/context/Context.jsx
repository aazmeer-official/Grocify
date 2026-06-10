import React, { useState } from 'react'
import { createContext } from 'react'
export const MenuContext = createContext()
const Context = (props) => {
const [toggle, setToggle] = useState(false)
  return (
    <div>
    <MenuContext.Provider value={{toggle,setToggle}}>
        {props.children}
    </MenuContext.Provider>
    </div>
  )
}

export default Context