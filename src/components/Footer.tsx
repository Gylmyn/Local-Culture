import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Icons from './Icons';
import Buttons from './Buttons';


export default function Footer() {
    return (
        <footer className='flex flex-col md:flex-row justify-center md:gap-[83px] gap-10 md:px-[100px] px-8 md:h-[286px] pt-[35px]'>
            <div>
                <Image src='/MainLogo.svg' width={196} height={40} alt='tamvan'>
                </Image>
                <p className={`text-M max-w-xs text-neutral-600 pt-[15px] font-normal`}>LocalCulture adalah website yang memberikan
                    informasi terkait keanekaragaman warisan & budaya lokal di pulau Lombok.</p>
            </div>
            <div className={`md:flex md:flex-col hidden md:gap-[15px] gap-5 font-semibold`}>
                <Link href='/'>
                    Beranda
                </Link>
                <Link href='/galeri'>
                    Galery
                </Link>
                <Link href='/mapbudaya'>
                    Map Budaya
                </Link>
                <Link href='/artikel'>
                    Artikel
                </Link>
            </div>
            <div className={`flex flex-col gap-[15px] text-M font-normal`}>
                <span className='flex gap-[15px] items-start'>
                    <Icons href='' size={24} src='/Location.svg' />
                    <p className='max-w-[260px] text-neutral-600'>Jalan Edelweiss No. 5 Banyumulek Kota Mataram, 897000</p>
                </span>
                <span className='flex gap-[15px] items-center'>
                <Icons href='' size={24} src='/Call.svg' />
                    <p className=' text-neutral-600'>081-333-456-909</p>
                </span>
                <span className='flex gap-[15px] items-center'>
                <Icons href='' size={24} src='/Email.svg' />
                    <Buttons text='localculture@gmail.com' type='textonly' href='' />
                </span>
            </div>
            <div>
                <p className={` text-M  font-normal`}>Ikuti Kami</p>
                <div className='flex py-[18px] gap-[15px] items-center'>
                    <Icons href='' src='/FoInstagram.svg' size={31} />
                    <Icons href='' src='/FoFacebook.svg' size={31} />
                    <Icons href='' src='/FoYoutube.svg' size={31} />
                    <Icons href='' src='/FoTwitter.svg' size={31} />
                </div>
            </div>
        </footer>
    )
}
