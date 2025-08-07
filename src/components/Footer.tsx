import { git, linkedIn, x } from '@/public/Icon'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full h-[56px] dark:bg-[#0F172B] text-[#F8FAFC] font-medium border-2 border-[#90A1B9] flex items-center justify-between font-fira-code'>
        <div className='flex items-center w-[735px] h-[56px]'>
            <p className='w-[183px] h-full p-5 border-[#90A1B9]'>Find me in: </p>
            <p className='p-5 w-[56px] h-full border-[#90A1B9] border-l-2 border-r-2 cursor-pointer'>
                <Image src={x} alt='x Icon' />
            </p>
            <p className='p-5 w-[56px] h-full border-[#90A1B9] border-l-2 border-r-2 cursor-pointer'>
                <Image src={linkedIn} alt='linkedIn Icon' />
            </p>
        </div>
        <div className='w-[10%]'></div>
        <div className='flex justify-end w-[200px] h-[full]'>
            <p className='p-4 w-full flex gap-2 h-full text-center border-[#90A1B9] border-l-2 cursor-pointer'>
                <span>@PAMMY100</span>
                <Image src={git} alt='github Icon' />
            </p>
        </div>
    </footer>
  )
}

export default Footer