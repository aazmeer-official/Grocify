import React from 'react'
import ButtonMain from '../utils/ButtonMain'

const ContactForm = () => {
  return (
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
            />
          </div>

        </div>

        {/* Email + Message */}
        <div className="flex flex-col gap-4 w-full max-w-3xl">
          
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-orange-600 font-bold">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="py-3 px-4 rounded-xl border-2 border-orange-500 w-full"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-orange-600 font-bold">
              Write for Help
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              className="py-3 px-4 rounded-xl border-2 border-orange-500 w-full"
            />
          </div>
        <div className='flex justify-end mt-5'>
        <ButtonMain text="Submit" to="/" />
        </div>
        </div>

      </div>
    </div>
  )
}

export default ContactForm