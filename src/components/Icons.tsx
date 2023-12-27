

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


type iconsProp = {
    href? : string
    src : string
    size : number

}

export default function Icons(prop : iconsProp) {
  return (
    <Link
    href={prop.href ? prop.href : "/"}
    >
         <Image
          src={prop.src}
          width={prop.size}
          height={prop.size}
          alt='error'
          className="object-contain text-white"
        />
    </Link>
  )
}
