import React from 'react'
import UtilityPage from '../utils/UtilityPage'
import ContactForm from "./ContactForm"
const Contact = () => {
  return (
    <div>
        <UtilityPage orangePart="Contact" blackPart=" Us" />
        <ContactForm />
    </div>
  )
}

export default Contact