import React from 'react'
import { aboutImage } from '../../../assets'
import { Play } from 'lucide-react'

const About = () => {
  return (
    <div className=' bg-aboutBgColor flex flex-row justify-center'>
     
    <div>
      <img className='pl-40'  src={aboutImage} alt="" />
    </div>
    <div className='pt-40' >
     <span className=' text-ash '>ABOUT FURNISH</span>
     <h2 className='text-5xl py-4'>  Quality Makes the Belief for Customers</h2>
     <p className='text-base py-8	'>
     Far far away, behind the word mountains, 
     far from the countries <br /> Vokalia and Consonantia, 
     there live the blind texts. Separated they <br /> live
      in Bookmarksgrove right at the coast of the Semantics, a large <br /> language ocean.      
    </p> 
    
    <span className=" flex h-3 w-3">
    <span className="animate-ping absolute inline-flex h-40 w-40 rounded-full bg-white opacity-75"></span>
    <button className="inline-flex items-center justify-center rounded-full h-[10px] w-[10px]	p-[50px] bg-white">
    <div className='absolute '>
    <Play className="text-wine h-[20px] w-20" />
    </div>

    </button>
    </span>

    </div>
   
    {/* <p className='inline-block mt-4'>Watch Video</p> */}

      

  
  </div>
  )
}

export default About