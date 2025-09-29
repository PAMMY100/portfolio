'use client'
import { projectcode, projecttesting } from '@/public/Icon'
import Image from 'next/image'
import React from 'react'

type Tab = 'development' | 'testing';

type Props = {
    setTab: (tab: Tab) => void;
    currentTab: Tab
}

const ProjectSide = ({currentTab, setTab }: Props) => {
  return (
    <aside className='w-[400px] font-fira-code flex flex-col gap-4 md:w-[420px] border-r-2 border-l-2 border-[#90A1B9]'>
        <div className='gap-2 flex flex-col border-b-2 border-[#90A1B9]'>
                    {[
                      { id: 'development', icon: projectcode, label: 'Development' },
                      { id: 'testing', icon: projecttesting, label: 'Testing' }
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setTab(item.id as Tab)}
                        className={`flex flex-col mt-3 md:mt-0 md:flex-row items-center gap-2 pl-1 h-[80px] md:text-sm border-b-2 border-[#90A1B9] hover:text-blue-400 ${currentTab === item.id ? 'font-bold text-blue-400' : ''}`}
                      >
                        <Image src={item.icon} alt={`${item.label} Icon`} width={20} height={20}/>
                        <span>{item.label}</span>
                      </button>
                    ))}
                  </div>
    </aside>
  )
}

export default ProjectSide