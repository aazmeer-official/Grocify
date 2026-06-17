import RightHero from './RightHero'
import LeftHero from './LeftHero'
import GroceryImage from "../../assets/grocery.png"
const Hero = () => {
  return (
    <div className=' min-h-100 flex justify-center mt-5 md:mt-19 md:px-20 px-2'>
        <div className='flex-1 flex ml-5'><RightHero pillText="Fresh from Organic" blackTextOne="Tasty Organic " orangeTextOne="Fruits "  blackTextTwo="& " OrangeTextTwo="Veggies" BlackTextThree=" In Your City" pText="We're a hyper-local startup committed to providing the best organic produce" buttonText="Shop Now" size={7}/></div>
        <div className='flex-1 lg:flex hidden justify-center max-w-140'><LeftHero imageComponent={GroceryImage}/></div>
    </div>
  )
}

export default Hero
