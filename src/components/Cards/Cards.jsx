import React from 'react'
import ActionAreaCard from './Card'
import FruitsAndVeggies from "../../assets/fruits-and-veggies.png"
import MeatAndSeaFood from "../../assets/meat-and-seafood.png"
import DairyAndEgg from "../../assets/dairy-and-eggs.png"
const Cards = () => {
  return (
    <div>
        <div className='max-w-8xl flex lg:gap-20 lg:mx-20 my-10 justify-center flex-col lg:flex-row items-center gap-6'>
            <ActionAreaCard heading="Fruits & Veggies" imageLink={FruitsAndVeggies} description="Shop a wide variety of fresh organic
fruits and vegetables sourced from
local farms."/>
            <ActionAreaCard heading="Dairy & Egg" imageLink={DairyAndEgg} description="Get farm-fresh dairy products and eggs
straight from trusted local farms."/>
            <ActionAreaCard heading="Meat & Seafood" imageLink={MeatAndSeaFood} description="High-quality meat and seafood
selected with care for freshness
and taste."/>
        </div>
    </div>
  )
}

export default Cards