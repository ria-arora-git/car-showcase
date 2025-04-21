'use client';
import { CustomButtonProps } from '@/types';
import React  from 'react'



const CustomButton: React.FC<CustomButtonProps> = ({title,containerStyle,handleClick , btnType}: CustomButtonProps) => {
  return (
    <button className={`flex flex-row relative justify-center items-center py-3 px-6 outline-none ${containerStyle}`}  type={ btnType || 'button'} disabled={false} onClick={()=>{}}>
      <span className='flex-1'>
        {title}
      </span>
    </button>
  )
}

export default CustomButton
