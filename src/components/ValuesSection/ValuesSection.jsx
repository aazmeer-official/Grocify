import React from 'react'
import BasketFullOfVegetables from "../../assets/basket-full-vegetables.png"
import ValuesCardLeft from './ValuesCardLeft'
import ValuesCardRight from './ValuesCardRight'
import ShieldIcon from '@mui/icons-material/Shield';
import CompostIcon from '@mui/icons-material/Compost';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import DoneIcon from '@mui/icons-material/Done';
const ValuesSection = () => {
  return (
    <div>
        <div className='flex md:justify-center mx-4 mt-10 flex-col items-center gap-10 md:flex-row'>
            <div className='md:flex md:flex-col hidden gap-10 mx-5'>
                <ValuesCardLeft  IconProp={ShieldIcon}  heading="Trust" description="We build genuine relationships with customers and farmers."/>
                <ValuesCardLeft  IconProp={CompostIcon}  heading="Always Fresh" description="Freshness delivered daily from farm to your home."/>
            </div>
            <div className='max-w-80 max-h-80 -mt-10 hidden lg:flex'>
                <img src={BasketFullOfVegetables} alt="" />
            </div>
            <div className='flex flex-col gap-10 mx-5'>
                <ValuesCardRight  IconProp={HealthAndSafetyIcon}  heading="Food Safety" description="We ensure healthy and safe produce by strictly following safety standards."/>
                <ValuesCardRight  IconProp={DoneIcon}  heading="100% Organic" description="Chemical-free and naturally grown produce for a healthier you."/>
            </div>
            <div className='flex flex-col gap-10 mx-5 md:hidden'>
                <ValuesCardRight  IconProp={ShieldIcon}  heading="Trust" description="We build genuine relationships with customers and farmers."/>
                <ValuesCardRight  IconProp={CompostIcon}  heading="Always Fresh" description="Freshness delivered daily from farm to your home."/>
            </div>
        </div>
    </div>
  )
}

export default ValuesSection