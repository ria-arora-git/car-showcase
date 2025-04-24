'use client';

import {  CarProps } from '@/types';
import { calculateCarRent } from '@/utils';
import Image from 'next/image';
import React, { useState } from 'react'
import CustomButton from './CustomButton';
import CardDetails from './CarDetails';

interface CarCardProps {
    car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
    const { city_mpg , drive,  make , model , transmission , year } = car;
    const carRent = calculateCarRent(city_mpg,year);
    const [isOpen, setIsOpen] = useState(false);

    function closeModal() {
      setIsOpen(false);
    }
    function openModal() {
      setIsOpen(true);
    }

  return (
    <div className='car-card group'>
      <div className='car-card__content'>
        <h2 className='car-card__content-title'>
            {make} {model} 
        </h2>
      </div>
      <p className='car-card__price'> 
        <span className='car-card__price-dollar'> $ </span>
        {carRent} 
        <span className='car-card__price-day'> /day </span>
      </p>

      <div className='car-card__image'>
        <Image  src={`https://cdn.imagin.studio/getimage?customer=${imaginApiKey}&make=${make}&modelFamily=${model.split(" ")[0]}&=fullscreen&modelYear=${year}`} alt='car model' fill priority className='object-contain' />
      </div>
      <div className='relative flex w-full mt-2'>
        <div className='car-card__icon-container'>
            <div className='car-card__icon'>
                <Image src={'/steering-wheel.svg'} width={20} height={20} alt=''/>
                <p className='car-card__icon-text'>
                    {transmission === 'a' ? 'Automatic' : 'Manual'}
                </p>
            </div>
            <div className='car-card__icon'>
                <Image src={'/tire.svg'} width={20} height={20} alt=''/>
                <p className='car-card__icon-text'>
                    {drive.toLocaleUpperCase()}
                </p>
            </div>
            <div className='car-card__icon'>
                <Image src={'/gas.svg'} width={20} height={20} alt=''/>
                <p className='car-card__icon-text'>
                    {year} 
                </p>
            </div>
        </div>
        <div className='car-card__btn-container '>
            <CustomButton title={"View more"} containerStyle='w-full py-[16px] rounded-full bg-primary-blue' textstyles="text-white text-[14px] leading-[17px] fony-bold" rightIcon='/right-arrow.svg' handleClick={openModal} />
        </div>
      </div>

      <CardDetails isOpen={isOpen} closeModel={closeModal} car={car}/>
    </div>
  )
}

export default CarCard
