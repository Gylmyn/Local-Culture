
import React, { ReactNode } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import NavBar from './NavBar';

type Layouts = {
    children : ReactNode;
}

export default function Layout(prop: Layouts) {
  return (
    <div>
      {/* <NavBar /> */}
        <Header />
        {prop.children}
        <Footer />
    </div>
  )
}

