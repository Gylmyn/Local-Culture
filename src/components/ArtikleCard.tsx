import React from 'react'
import Image from 'next/image'
import Buttons from './Buttons';


type propertis = {
    id : number
    img : string
    date :string
    desc : string
}

export default function ArtikleCard(prop: propertis) {
  
  return (
    <div className='w-full'>
        <div className='md:h-[365px] h-40 relative'>
          <Image src={prop.img} alt='tamvan' fill className='rounded-[5px]'>
          </Image>
        </div>
        <div>
        <p className={`md:pt-[16px] pt-2  text-primary-800 font-semibold md:text-XS text-3XS `}>{prop.date}</p>
        <p className={`md:pt-[8px] pt-1 md:max-w-sm text-black md:text-[22px] text-XS font-bold `}>{prop.desc}</p>
        <div className={`md:pt-[16px] pt-2 md:text-XS text-3XS text-start font-semibold flex`}>
           <Buttons type='textonly' text='Pelajari Selengkapnya' icon='/Arrow.svg' href={`/artikel/${prop.id}`}/>
        </div>
        </div>
    </div>
  )
}
