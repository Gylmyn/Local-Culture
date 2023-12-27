import React from 'react'
import { Poppins } from 'next/font/google'

const primary = Poppins({
  weight: "700",
  subsets: ["latin"]
})

type Buttons = {
  normal?: boolean
  outlined?: boolean
  normalSm?: boolean
  outlinedSm?: boolean
  textonly?: boolean
  text: string
  icon?: React.ReactNode;
}

export const Button = (prop: Buttons) => {
  return (
    <div className={`${primary.className} text-white`}>
      {prop.normal === true ? (
        <button className='py-[12px] rounded-[6px] bg-primary-800 border justify-center flex items-center gap-[16px] px-[20px]'>
          {prop.text}
          {prop.icon}
        </button>
      ) : prop.outlined === true ? (
        <button className='py-[12px] px-[20px]  gap-[16px] rounded-[6px] border-2 border-[#E5E5E7] text-black bg-white flex justify-center items-center'>
          {prop.text}
          {prop.icon}
        </button>
      ) : prop.normalSm === true ? (
        <button className='py-[8px]  rounded-[4px] text-2XS font-semibold bg-primary-800 border justify-center flex items-center gap-[16px] px-[12px]'>
          {prop.text}
          {prop.icon}
        </button>
      ) : prop.outlinedSm === true ? (
        <button className='py-[8px] px-[12px] text-2XS font-semibold  gap-[16px] rounded-[4px] border-2 border-primary-800 text-primary-800 flex justify-center items-center'>
          {prop.text}
          {prop.icon}
        </button>
      ): prop.textonly === true ? (
        <button className='text-2XS font-semibold  gap-[16px]  text-primary-800 flex justify-center items-center'>
          {prop.text}
          {prop.icon}
        </button>
      ): <p></p> }
    </div>
  )
}
