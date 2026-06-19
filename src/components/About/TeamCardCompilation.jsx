import React from 'react'
import TeamCard from './TeamCard'
import Customer1 from "../../assets/customer1.jpg"
import Customer2 from "../../assets/customer2.jpg"
import Customer3 from "../../assets/customer3.jpg"
import Customer4 from "../../assets/customer4.jpg"
const TeamCardCompilation = () => {
  return (
    <div className='flex justify-center gap-20 my-15 py-5 rounded-3xl'>
      <TeamCard image={Customer1} heading="Rohit Sharma" paragraph="Founder & CEO"/>
      <TeamCard image={Customer2} heading="Anjali Mehta" paragraph="Head of Operations"/> 
      <TeamCard image={Customer3} heading="Vikram Singh" paragraph="Supply Chain Manager"/>
      <TeamCard image={Customer4} heading="Neha Verma" paragraph="Marketing Lead"/>
    </div>
  )
}

export default TeamCardCompilation