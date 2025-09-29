import { arrowDown, linkIcon, message, phone } from '@/public/Icon'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ContactSidebar = () => {
  return (
    <div className='w-[120px] font-fira-code flex flex-col gap-4 md:w-[311px] border-r-2 border-l-2 border-[#90A1B9] min-h-screen'>
        <div className='p-2 flex items-center gap-3 border-b-2 border-[#90A1B9] h-[48px] md:p-6'>
            <Image src={arrowDown} alt='arrow down'/>
            <h1>contacts</h1>
        </div>
        <div className='hidden pl-2 text-[12px] md:text-base md:flex flex-col gap-2 md:pl-2 h-[80px] border-b-2 border-[#90A1B9]'>
            <div className='flex flex-col md:flex-row items-center gap-3'>
                <Image src={message} alt='email Icon' />
                <span>princesamuel636@gmail.com</span>
            </div>
            <div className='flex items-center gap-3'>
                <Image src={phone} alt='phone Icon' />
                <span>+234 708 538 6788</span>
            </div>
        </div>
        <div className='hidden md:flex items-center gap-3 border-b-2 border-[#90A1B9] h-[48px] p-6'>
            <Image src={arrowDown} alt='arrow down'/>
            <h1>find-me-also-in</h1>
        </div>
        <div className='p-2 flex flex-col gap-3 md:p-6 h-[80px]'>
            <div>
                <Link href="https://github.com/PAMMY100" className='flex gap-1 md:gap-2 cursor-pointer'>
                    <Image src={linkIcon} alt='link Icon' />
                    <span>Github</span>
                </Link>
            </div>
            <div>
                <Link href="https://www.linkedin.com/in/samuel-adebayo-57aaa618a/" className='flex gap-1 md:gap-2 cursor-pointer'>
                    <Image src={linkIcon} alt='link Icon' />
                    <span>LinkedIn</span>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default ContactSidebar