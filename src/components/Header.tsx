import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import Buttons from './Buttons';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={`fixed top-0 w-full bg-white z-[999] font-semibold`}>
            <div className='h-[80px] w-full flex justify-between px-[20px] md:px-[102px]'>
                <div className='flex items-center'>
                    <Link href='/'>
                    <Image
                        alt='sad'
                        src='/MainLogo.svg'
                        height={37}
                        width={195}
                    />
                    </Link>
                </div>

                <div className='hidden md:flex flex-col md:items-center md:flex-row gap-[30px] text-M'>
                    <Link href='/' className='focus:text-primary-800'>
                        Beranda
                    </Link>
                    <Link href='/galeri' className='focus:text-primary-800'>
                        Galeri
                    </Link>
                    <Link href='/mapbudaya' className='focus:text-primary-800'>
                        Map Budaya
                    </Link>
                    <Link href='/artikel' className='focus:text-primary-800'>
                        Artikel
                    </Link>
                </div>

                <div className='sm:flex items-center gap-[10px] hidden'>
                    <Buttons text='Sign Up' href='/' type='borderprimary' size='small' />
                    <Buttons text='Sign In' href='/' type='primary' size='small' icon='/Login.svg' />
                </div>

                <div className='md:hidden cursor-pointer flex items-center' onClick={toggleMenu}>
                    <svg
                        className='w-6 h-6'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M4 6h16M4 12h16m-7 6h7'
                        ></path>
                    </svg>
                </div>
            </div>

            {/* Hamburger Menu */}
            {isMenuOpen && (
                <div className='relative'>
                <div className='absolute top-4 right-4 bg-white md:hidden flex flex-col items-start py-4 px-8  shadow-lg'>
                    <Link href='/' className='my-2 focus:text-primary-800'>
                        Beranda
                    </Link>
                    <Link href='/galeri' className='my-2 focus:text-primary-800'>
                        Galeri
                    </Link>
                    <Link href='/mapbudaya' className='my-2 focus:text-primary-800'>
                        Map Budaya
                    </Link>
                    <Link href='/artikel' className='my-2 focus:text-primary-800'>
                        Artikel
                    </Link>
                    {/* <Buttons text='Sign Up' href='/signup' type='borderprimary' size='small' />
                    <Buttons text='Sign In' href='/signin' type='primary' size='small' icon='/Login.svg' /> */}
                </div>
                </div>
            )}
        </nav>
    );
}
