import RightHero from './RightHero'
import LeftHero from './LeftHero'

const Hero = () => {
  return (
    <div className=' min-h-200 flex justify-center items-center'>
        <div className='flex-1 flex justify-center'><RightHero/></div>
        <div className='flex-1  flex justify-center'><LeftHero/></div>
    </div>
  )
}

export default Hero
