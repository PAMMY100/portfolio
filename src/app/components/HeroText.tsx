import Link from 'next/link'
import React from 'react'

const HeroText = () => {
  return (
    
        <div className='max-w-xl'>
            <p className='dark:text-[#90A1B9] text-[20px] mb-2'>Hi all, I am</p>
            <h1 className='dark:text-white text-[70px] font-bold mb-2'>Samuel Adebayo</h1>
            <h2 className='text-[#615FFF] text-[32px] mb-6'> {'>'} QA engineer and Front-end developer</h2>
        
            <div className='flex flex-col gap-2 mt-4'>
                <p className='text-[16px]'>{'//'} find my profile on Github:</p>
                <p className='text-[16px]'>
                    <span className='text-[#615FFF]'>const</span>
                    <span className='text-[#00D5BE]'>{' '}githubLink{' '}</span>
                    <span className='dark:text-white'> = {' '}</span>
                    <Link href="https://github.com/PAMMY100"><span className='text-[#FFA1AD]'>"https://github.com/PAMMY100"</span></Link>
                </p>
            </div>
        </div>
  )
}

export default HeroText