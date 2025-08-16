'use client'
import { projectcode, projecttesting } from '@/public/Icon'
import Image from 'next/image'
import React from 'react'

const ProjectSide = () => {
  return (
    <aside className='font-fira-code flex flex-col gap-4 w-[311px] border-r-2 border-l-2 border-[#90A1B9]'>
        <div className='flex flex-col gap-2 pl-6 h-[80px] border-b-2 border-[#90A1B9]'>
            <div className='flex p-6 items-center gap-3'>
                <Image src={projectcode} alt="development icon" width={24} height={24}/>
                <button>Development</button>
            </div>
        </div>
        
        <div className='flex flex-col gap-2 pl-6 h-[80px] border-b-2 border-[#90A1B9]'>
            <div className='flex p-6 items-center gap-3'>
                <Image src={projecttesting} alt='testing icon' width={24} height={24}/>
                <button>Testing</button>
            </div>
        </div>
        
    </aside>
  )
}

export default ProjectSide