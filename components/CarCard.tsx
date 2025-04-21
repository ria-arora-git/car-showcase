'use client';

import { CarCardProps } from '@/types';
import { calculateCarRent } from '@/utils';
import React from 'react'

interface CarProps{
    car: CarCardProps;
}



const CarCard: React.FC<CarProps> = ({ car }: CarProps) => {
    const { city_mpg, cylinders, displacement, drive, fuel_type, make, model, transmission, year } = car;

    const carRent = calculateCarRent(city_mpg,year)
  return (
    <div className='car-card group'>
      <div className='car-card__content'>
        <h2 className='car-card__content-title'>
            {make} {model} 
        </h2>
      </div>
      <p className='flex mt-6 text-[32px] font-extrabold'> 
        <span className='self-start text-[14px] font-semibold'> 
        </span>
        {carRent} 
        <span className='self-end text-[14px] font-smedium'> /day </span>
      </p>
    </div>
  )
}

export default CarCard
