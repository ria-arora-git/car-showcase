'use client';
import React, { MouseEventHandler } from 'react'

interface CustomButtonProps {
  title: string;
  containerStyle?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}


const CustomButton: React.FC<CustomButtonProps> = ({title,containerStyle,handleClick}: CustomButtonProps) => {
  return (
    <button className={`flex flex-row relative justify-center items-center py-3 px-6 outline-none ${containerStyle}`}  type='button' disabled={false} onClick={()=>{}}>
      <span className='flex-1'>
        {title}
      </span>
    </button>
  )
}

export default CustomButton
