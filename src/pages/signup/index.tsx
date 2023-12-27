
import {Checkbox} from "@nextui-org/react";
import Buttons from '@/components/Buttons'
import Input from '@/components/Input'
import Image from 'next/image'
import React from 'react'

export default function SignUp() {
    return (
        <div >
            <Image
                className='ml-[99px] mt-[33px] pb-[10px]'
                alt='sad'
                src='/MainLogo.svg'
                height={37}
                width={195}
            >

            </Image>
            <div className='flex justify-center items-center h-screen gap-[210px]'>
                <div>
                    <Image
                        alt='behh'
                        src='/SignUpLogo.svg'
                        width={525}
                        height={543}
                    >

                    </Image>
                </div>
                <form action="">
                    <p className='text-center text-3XL font-semibold'>Sign Up</p>
                    <div >
                        <Input label='Username' size='medium' placeholder='enter your username' />
                    </div>
                    <div className='mt-[20px]'>
                        <Input label='Email' size='medium' placeholder='enter your email' />
                    </div>
                    <div className='mt-[20px]'>
                        <Input label='Password' size='medium' placeholder='enter your password' />
                    </div>
                    <div className='mt-[20px]'>
                        <Input label='Confirm Password' size='medium' placeholder='confirm your password' />
                    </div>
                    
                    <div className='flex flex-row w-full gap-2 text-XS pt-[40px]'>
                    <Checkbox></Checkbox>
                    <p>I agree to all the</p>
                    <Buttons text="Terms" type="textonly" /> 
                    <p>and</p>
                    <Buttons text="Privacy policy" type="textonly" /> 
                    </div>
                    <div className='pt-[40px] text-white'>
                            <Buttons text='Sign Up' type='primary' size='large' />
                        </div>
                    <div className='pt-[40px] px-[29px] flex justify-center items-center gap-[6px]'>
                        <hr className='w-[143px] bg-black' />
                        <p className='text-XS font-normal text-neutral-400'>Or Continue With</p>
                        <hr className='w-[143px] bg-black' />
                    </div>
                    <div className='pt-[40px] text-white'>
                        <Buttons text='Sign In With Google' type='Dark'size='large' icon='/GoogleLogo.svg' />
                    </div>
                    <div className='pt-[5px] text-white'>
                        <Buttons text='Sign In With Facebook' type='Dark'size='large' icon='/FacebookLogo.svg' />
                    </div>
                    <div className='pt-[40px] flex justify-center gap-2'>
                        <p>Already have an account?  </p>
                        <Buttons text='Sign In' type='textonly' href="/signin" />
                    </div>
                </form>
            </div>

        </div>
    )
}
