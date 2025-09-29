'use client'
import { git, linkedIn, x } from '@/public/Icon'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full h-[56px] dark:bg-[#0F172B] text-[#F8FAFC] font-medium border-2 border-[#90A1B9] flex items-center justify-between font-fira-code'>
        <div className='flex items-center w-[80%] h-[56px]'>
            <p className='w-[200px] md:w-[183px] h-full p-5 border-[#90A1B9]'>Find me in: </p>
            <p className='p-5 w-[56px] h-full border-[#90A1B9] border-l-2 border-r-2 cursor-pointer'>
                <Link href="https://x.com/breezy_op1"><Image src={x} alt='x Icon' /></Link>
            </p>
            <p className='p-5 w-[56px] h-full border-[#90A1B9] border-l-2 border-r-2 cursor-pointer'>
                <Link href="https://www.linkedin.com/in/samuel-adebayo-57aaa618a/"><Image src={linkedIn} alt='linkedIn Icon' /></Link>
            </p>
        </div>
        <div className='hidden md:w-[10%]'></div>
        <div className='w-[100px] flex justify-end md:w-[200px] h-[full]'>
            <Link href="https://github.com/PAMMY100" className='p-4 h-full text-center border-[#90A1B9] border-l-2 cursor-pointer'>
                <Image src={git} alt='github Icon' />
            </Link>
        </div>
    </footer>
  )
}

export default Footer