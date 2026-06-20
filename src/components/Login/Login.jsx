import React from 'react'
import UtilityPage from '../utils/UtilityPage'
import ButtonMain from '../utils/ButtonMain'

const Login = () => {
  return (
    <div>
        <UtilityPage orangePart="Welcome " blackPart="Back"/>
        <div className='container mx-auto px-4'>
            <div className='p-4 flex justify-center items-center mt-10 flex-col gap-6'>
            <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-orange-600 font-bold">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="py-3 pl-5 pr-35 rounded-xl border-2 border-orange-500 w-full"
              placeholder='abc@gmail.com'
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-orange-600 font-bold">
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              className="py-3 pl-5 pr-35 rounded-xl border-2 border-orange-500 w-full"
              placeholder='Enter Password'
            />
          </div>
          <ButtonMain text="Login" to="/" />
            </div>
        </div>
    </div>
  )
}

export default Login