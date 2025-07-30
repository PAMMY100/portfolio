import React from 'react'

const Header = () => {
  return (
    <div className='w-full h-[56px] dark:text-[#90A1B9] font-medium border-2 border-[#90A1B9] flex items-center justify-between font-fira-code'>
        <div className='flex items-center w-[735px] h-[56px]'>
            <p className='w-[183px] h-full p-5 border-[#90A1B9]'>Samuel_Adebayo</p>
            <div className='flex items-center w-[424px] h-full justify-between'>
                <p className='p-5 w-[33.3%] h-full border-[#90A1B9] border-l-2 border-r-2 cursor-pointer'>_hello</p>
                <p className='p-5 w-[33.3%] h-full border-[#90A1B9] border-r-2 cursor-pointer'>_about-me</p>
                <p className='p-5 w-[33.3%] h-full text-center border-[#90A1B9] border-r-2 cursor-pointer'>_projects</p>
            </div>
        </div>
        <div className='w-[10%]'></div>
        <div className='flex justify-end w-[200px] h-[full]'>
            <p className='p-4 w-full h-full text-center border-[#90A1B9] border-l-2 cursor-pointer'>_contact-me</p>
        </div>
    </div>
  )
}

export default Header