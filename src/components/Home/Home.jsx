import MainBar from '../Bar/MainBar'
import Cards from '../Cards/Cards'
import Hero from '../Hero/Hero'
import Heading from "../utils/Heading"
import ValuesSection from '../ValuesSection/ValuesSection'
const Home = () => {
  return (
    <div>
        <MainBar />
        <Hero />
        <Heading orangePart="Shop " blackPart="by Cat" underlinedPart="agory"/>
        <Cards />
        <Heading orangePart="Our " blackPart="Va" underlinedPart="lues"/>
        <ValuesSection></ValuesSection>
        <div className='h-100'></div>
    </div>
  )
}

export default Home
