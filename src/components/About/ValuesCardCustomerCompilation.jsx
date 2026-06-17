import React from 'react'
import ValuesCardCustomers from './ValuesCardCustomers'
import GroupsIcon from '@mui/icons-material/Groups';
import Person3Icon from '@mui/icons-material/Person3';
import CasesIcon from '@mui/icons-material/Cases';
import MapIcon from '@mui/icons-material/Map';
const ValuesCardCustomerCompilation = () => {
const styling = {
                    fontSize:"75px",
                    color:"#FD6E05"
                }
  return (
    <div>
        <div className='flex justify-center gap-2 my-10 bg-orange-100 rounded-3xl'>
            <ValuesCardCustomers icon={<GroupsIcon sx={styling}/>} heading="500+" paragraph="Happy Customers"/>
            <div className= 'border-x-2 border-gray-200'>
            <ValuesCardCustomers  icon={<Person3Icon sx={styling}/>} heading="50+" paragraph="Local Farmers"/>
            </div>
            <div className='border-r-2 border-gray-200'>
            <ValuesCardCustomers  icon={<CasesIcon sx={styling}/>} heading="999+" paragraph="Products Delievered"/>
            </div>
            <ValuesCardCustomers  icon={<MapIcon sx={styling}/>} heading="15+" paragraph="Areas Served"/>
        </div>
    </div>
  )
}

export default ValuesCardCustomerCompilation