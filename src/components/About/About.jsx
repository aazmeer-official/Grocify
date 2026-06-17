import React from 'react'
import AboutHero from './AboutHero'
import AboutStory from './AboutStory'
import Heading from "../utils/Heading"
import AboutValues from './AboutValues'
import ValuesCardCustomerCompilation from './ValuesCardCustomerCompilation'

const About = () => {
  return (
    <div className='container'>
      <AboutHero />
      <AboutStory />
      <Heading orangePart="Our " blackPart="Va" underlinedPart="lues"/>
      <AboutValues />
      <ValuesCardCustomerCompilation />
      <Heading orangePart="Meet " blackPart="Our " underlinedPart="Team" />
    </div>
  )
}

export default About