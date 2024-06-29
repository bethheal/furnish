import React from 'react'
import { aboutImage } from '../../../assets'
import { Play } from 'lucide-react'

const About = () => {
  return (
    <div className='bg-teal-50 flex flex-row justify-center'>
     
    <div>
      <img src={aboutImage} alt="" />
    </div>
    <div className='p-40 ' >
     <span className=' text-ash '>ABOUT FURNISH</span>
     <h2 className='text-4xl py-4'>  Quality Makes the Belief for <br /> Customers</h2>
     <p className='text-base py-8	'>
     Far far away, behind the word mountains, 
     far from the countries <br /> Vokalia and Consonantia, 
     there live the blind texts. Separated they <br /> live
      in Bookmarksgrove right at the coast of the Semantics, a large <br /> language ocean.      
    </p> 
    <div>
      <Play/>
      <span>Watch Video</span>
    </div>
  
  </div>
    </div>
  )
}

export default About