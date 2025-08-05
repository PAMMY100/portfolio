import PersonalInfo from '@/components/PersonalInfo'
import React from 'react'

const AboutLayout = ({children}: { children: React.ReactNode}) => {
  return (
    <div className='w-full h-full flex'>
        {/*Sidebar*/}
        <aside className='max-w-[311px] lg:h-[837px] border-b-2 border-[#90A1B9]'>
            <PersonalInfo />
        </aside>
        {/*Main content*/}
        <main>{children}</main>
    </div>
  )
}

export default AboutLayout