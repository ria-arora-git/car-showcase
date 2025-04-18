'use client';
import React, { MouseEventHandler } from 'react'

interface CustomButtonProps {
  title: string;
  containerStyle?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: 'button' | 'submit' | 'reset' | undefined;
}


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
