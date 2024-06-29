import React from 'react'
import {heroImage} from '../../../assets';
const Hero = () => {
  return (
    <div className='flex justify-evenly'>
       <div className='bg-cyan-300 w-1/2 flex'>
       <div className='place-content-center mx-auto w-fit flex flex-col gap-y-5'>
        <div className='flex flex-col text-5xl '>
        <span className='font-thin' >Best Design of </span>
        <span className='font-bold'>Furniture Collections</span>
        </div>
       <p> A small river named Duden flows by their
         place <br/>and supplies it with the necessary 
         regelialia.</p>
         <button class="rounded-full bg-white w-[100px] h-50 p-[10px] drop-shadow-lg text-wine font-bold uppercase">Discover</button>
         </div>
        </div>
      <div className='bg-cyan-200	  w-1/2	'>
        <img src={heroImage} alt="Hero Bg Image" className='object-cover w-full' />
      </div>
     
      
    </div>
   
    
  )
}

export default Hero;