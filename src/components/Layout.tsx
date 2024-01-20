
import React, { ReactNode, useRef } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import NavBar from './NavBar';

type Layouts = {
    children : ReactNode;
}

export default function Layout(prop: Layouts) {
  const linkRef = useRef(null);

  const backTop = (ref: any) =>{
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }
  return (
    <div>
      <button className='fixed right-4 bottom-4 p-4 z-50  bg-primary-800 rounded-full' onClick={() => backTop(linkRef.current)}>
      <svg
      viewBox="0 0 24 24"
     
      fill='#ffffff'
      height="1em"
      width="1em"
     
    >
      <path d="M13 15l2.5 2.5 1.42-1.42L12 11.16l-4.92 4.92L8.5 17.5 11 15v6h2v-6M3 3h18v2H3V3m0 4h10v2H3V7z" />
    </svg>
      </button>
      <div ref={linkRef}>
        <Header />
      </div>
        {prop.children}
      
        <Footer />
    </div>
  )
}

