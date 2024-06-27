import React from 'react'
import heroImage from '../../../assets';
const Hero = () => {
  return (
    <div className='flex justify-evenly  '>
       <div className='bg-yellow-300 w-1/2	'>
        <h1>Best Design of
        Furniture Collections</h1>
        </div>
      <div className='bg-yellow-400  w-1/2	'>
        <img src={heroImage} alt="Hero Bg Image" />
      </div>
     
      
    </div>
   
    
  )
}

export default Hero;