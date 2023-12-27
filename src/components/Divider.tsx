import React from 'react'
type texts = {
    title: string
    desc: string
}

export default function Divider(prop: texts) {
    return (
        <div className='flex flex-col justify-center items-center text-center'>
            <p className={`text-XL font-bold text-[#323539]`}>{prop.title}</p>
            <p className={`text-neutral-600 md:max-w-[48%] mx-6 font-normal text-M pt-[16px]`}>
                {prop.desc}
            </p>
        </div>
    )
}
