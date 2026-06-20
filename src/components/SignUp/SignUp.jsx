import React from 'react'
import UtilityPage from '../utils/UtilityPage'
import ButtonMain from '../utils/ButtonMain'
const SignUp = () => {
  return (
    <div>
        <UtilityPage orangePart="Sign " blackPart="Up" />
            <div className="container mx-auto px-4">
      <div className="p-4 flex justify-center items-center mt-10 flex-col gap-6">

        {/* Name Row */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-10 w-full max-w-3xl">
          
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="fName" className="text-orange-600 font-bold">
              Full Name
            </label>
            <input
              id="fName"
              type="text"
              name="fName"
              className="py-3 px-4 rounded-xl border-2 border-orange-500 w-full"
              placeholder='Full Name'
            />
          </div>

            <div className="flex flex-col gap-2 w-full">
                <label htmlFor="lName" className="text-orange-600 font-bold">
                Last Name
                </label>
                <input
                id="lName"
                type="text"
                name="lName"
                className="py-3 px-4 rounded-xl border-2 border-orange-500 w-full"
                placeholder='Last Name'
                />
            </div>
        </div>
    
<div className="flex flex-col md:flex-row gap-4 md:gap-10 w-full max-w-3xl">
          
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="email" className="text-orange-600 font-bold">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="py-3 px-4 rounded-xl border-2 border-orange-500 w-full"
              placeholder='abc@gmail.com'
            />
          </div>

            <div className="flex flex-col gap-2 w-full">
                <label htmlFor="password" className="text-orange-600 font-bold">
                Password
                </label>
                <input
                id="password"
                type="password"
                name="password"
                className="py-3 px-4 rounded-xl border-2 border-orange-500 w-full"
                placeholder='Enter Password'
                />
            </div>
        </div>
        <div className='mt-'></div>
        <ButtonMain text="Register Now" to="/" />
      </div>
    </div>
</div>
  )
}

export default SignUp