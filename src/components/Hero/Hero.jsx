import RightHero from './RightHero'
import LeftHero from './LeftHero'

const Hero = () => {
  return (
    <div className=' min-h-100 flex justify-center mt-5 md:mt-19 md:px-20 px-2'>
        <div className='flex-1 flex ml-5'><RightHero/></div>
        <div className='flex-1 lg:flex hidden justify-center -mt-10'><LeftHero/></div>
    </div>
  )
}

export default Hero
