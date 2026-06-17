import React from 'react'
import AboutValuesCard from './AboutValuesCard'
import AcUnitIcon from '@mui/icons-material/AcUnit';
import GppGoodIcon from '@mui/icons-material/GppGood';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import ParkIcon from '@mui/icons-material/Park';
const AboutValues = () => {
    const styleObj = {
            fontSize: "100px",
            color: "#FC6201",
            backgroundColor: "#FEEDDB",
            padding: "20px",
            borderRadius: "50%"
    };
  return (
    <div>
        <div className='flex gap-5 my-10 justify-center items-center'>
            <AboutValuesCard icon={<ParkIcon sx={styleObj}/>} description="We ensure healthy and safe
produce by strict standards." title="100% Organic"/>
            <div className= 'border-x-2 border-gray-200'>
            <AboutValuesCard  icon={<AcUnitIcon sx={styleObj}/>} description="Freshness delivered daily
from farm to your homeWe ensure healthy and safe
produce by strict standards.." title="Freshness"/>
            </div>
            <div className='border-r-2 border-gray-200'>
            <AboutValuesCard icon={<GppGoodIcon sx={styleObj}/>} description="We build genuine relationships
with our customers and farmers." title="Trust"/>
            </div>
            <AboutValuesCard icon={<HealthAndSafetyIcon sx={styleObj}/>} description="We ensure healthy and safe
produce by strict standards." title="Food Safety"/>
        </div>
    </div>
  )
}

export default AboutValues