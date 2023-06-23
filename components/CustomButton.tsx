'use client';
import React from 'react'
import Image from 'next/image'
import { CustomButtonProps } from '@/types';


const CustomButton = ({title,containerStyle,handleClick,btnType,textStyles,rightIcon,isDisabled}:CustomButtonProps) => {
  return (
    <button disabled={false} type={btnType || "button"} className={`custom-btn ${containerStyle}`} onClick={handleClick}>
         <span className={`flex-1 ${textStyles}`}>{title}</span>
         {rightIcon && <div className="relative w-6 h-6"> <Image src={rightIcon} fill className="object-contain" alt="right arrow" /> </div>}
    </button>
  )
}

export default CustomButton