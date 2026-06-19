import React from 'react'
import AboutHero from './AboutHero'
import AboutStory from './AboutStory'
import Heading from "../utils/Heading"
import AboutValues from './AboutValues'
import ValuesCardCustomerCompilation from './ValuesCardCustomerCompilation'
import TeamCardCompilation from './TeamCardCompilation'
import AboutFinalCard from './AboutFinalCard'

const About = () => {
  return (
    <div className='container'>
      <AboutHero />
      <AboutStory />
      <Heading orangePart="Our " blackPart="Va" underlinedPart="lues"/>
      <AboutValues />
      <ValuesCardCustomerCompilation />
      <Heading orangePart="Meet " blackPart="Our " underlinedPart="Team" />
      <TeamCardCompilation />
      <AboutFinalCard />
    </div>
  )
}

export default About