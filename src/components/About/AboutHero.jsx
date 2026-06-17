import React from 'react'
import RightHero from '../Hero/RightHero'
import LeftHero from '../Hero/LeftHero'
import MeatAndSeaFood from "../../assets/about.png"
const AboutHero = () => {
  return (
    <div>
      <div className=' min-h-100 flex justify-center mt-5 md:mt-19 md:px-20 px-2'>
        <div className='flex-1 flex ml-5'><RightHero pillText="About Us" blackTextOne="We're On a Mission to" orangeTextOne=" Make"  blackTextTwo=" Healthy " OrangeTextTwo=" Living" BlackTextThree=" Accessible for Everyone" pText="We're a hyper-local startup committed to providing the best organic produce" buttonText="Shop Now" size={5}/></div>
        <div className='flex-1 lg:flex hidden justify-center -mt-10 max-w-130'><LeftHero imageComponent={MeatAndSeaFood}/></div>
      </div>
    </div>
  )
}

export default AboutHero