
import React from 'react'


type inputType = {
    label : string
    hinttext? : string 
    placeholder : string
    size: "small" | "medium" | "large";
}

export default function Input(prop : inputType) {
    const inputSize =
    prop.size === "small"
    ? "h-medium"
    :prop.size === "medium"
    ? "h-large"
    :prop.size === "large"
    ? "h-xlarge"
    :"null"
  return (
    <div className='flex flex-col'>
        <label className='font-medium text-XS pb-[8px]'>{prop.label}</label>
        <input className={`${inputSize} text-XS font-normal w-[501px] rounded-md bg-neutral-50 border-2 pl-[16px]`} type='text' placeholder={prop.placeholder}></input>
        <p className='text-XS font-normal'>{prop.hinttext}</p>
    </div>
  )
}
