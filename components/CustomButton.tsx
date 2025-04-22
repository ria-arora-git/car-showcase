'use client';
import { CustomButtonProps } from '@/types';
import Image from 'next/image';
import React  from 'react'



const CustomButton = ({title,containerStyle,handleClick , btnType , rightIcon , textstyles }: CustomButtonProps) => {
  return (
    <button className={`flex flex-row relative justify-center items-center py-3 px-6 outline-none ${containerStyle}`}  type={ btnType || 'button'} disabled={false} onClick={()=>{}}>
      <span className={`flex-1 ${textstyles}`}>
        {title}
      </span>
      {rightIcon && (
        <div className='relative w-6 h-6'>
          <Image src={rightIcon} alt="Right Icon" fill className="object-contain"/>
        </div>
      )}
    </button>
  )
}

export default CustomButton
