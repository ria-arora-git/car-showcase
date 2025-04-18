'use client'; 
import React from 'react'
import CustomButton from './CustomButton';

const Hero = () => {
  const handleScroll = ()=>{}

  return (
    <div className='flex xl:flex-row flex-col gap-5 relative z-0 max-w-[1440px] mx-auto'>
      <div className='flex-1 pt-36 padding-x '>
        <h1 className='2xl:text-[72px] sm:text-[64px] text-[50px] font-extrabold'>
          Find, Book or Rent a Car - Quickly and Easily!
        </h1>
        <p className='text-[27px] text-black-100 font-light mt-5'>
          Streamline your car rental experince  with our effortless booking process. 
        </p>
        <CustomButton title={'Explore cars'} containerStyle="bg-primary-blue text-white rounded-full mt-10" handleClick={handleScroll}/>
      </div>
    </div>
  )
}

export default Hero
