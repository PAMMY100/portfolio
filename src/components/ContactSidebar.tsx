import { arrowDown, linkIcon, message, phone } from '@/public/Icon'
import Image from 'next/image'
import React from 'react'

const ContactSidebar = () => {
  return (
    <div className='font-fira-code flex flex-col gap-4 w-[311px] border-r-2 border-l-2 border-[#90A1B9] min-h-screen'>
        <div className='flex items-center gap-3 border-b-2 border-[#90A1B9] h-[48px] p-6'>
            <Image src={arrowDown} alt='arrow down'/>
            <h1>contacts</h1>
        </div>
        <div className='flex flex-col gap-2 pl-6 h-[80px] border-b-2 border-[#90A1B9]'>
            <div className='flex items-center gap-3'>
                <Image src={message} alt='email Icon' />
                <span>princesamuel636@gmail.com</span>
            </div>
            <div className='flex items-center gap-3'>
                <Image src={phone} alt='phone Icon' />
                <span>+234 708 538 6788</span>
            </div>
        </div>
        <div className='flex items-center gap-3 border-b-2 border-[#90A1B9] h-[48px] p-6'>
            <Image src={arrowDown} alt='arrow down'/>
            <h1>find-me-also-in</h1>
        </div>
        <div className='flex flex-col gap-2 p-6 h-[80px]'>
            <div className='flex gap-2'>
                <Image src={linkIcon} alt='link Icon' />
                <span>Github</span>
            </div>
            <div className='flex gap-2'>
                <Image src={linkIcon} alt='link Icon' />
                <span>LinkedIn</span>
            </div>
        </div>
    </div>
  )
}

export default ContactSidebar