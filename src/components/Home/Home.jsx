
import Cards from '../Cards/Cards'
import Hero from '../Hero/Hero'
import Products from '../Products/Products'

import Heading from "../utils/Heading"
import ValuesSection from '../ValuesSection/ValuesSection'
const Home = () => {
  return (
    <div>

        <Hero />
        <Heading orangePart="Shop " blackPart="by Cat" underlinedPart="agory"/>
        <Cards />
        <Heading orangePart="Our " blackPart="Va" underlinedPart="lues"/>
        <ValuesSection></ValuesSection>
        <Heading orangePart="Our " blackPart="Pr" underlinedPart="oducts"/>
        <Products />

    </div>
  )
}

export default Home
