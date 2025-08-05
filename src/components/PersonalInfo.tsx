// components/PersonalInfo.tsx
'use client'

import { arrowDown, bio, circle, codeIcon, education, interest, lastIcon, message, phone, rightArrow } from '@/public/Icon'
import Image from 'next/image'
import React from 'react'

type Tab = 'bio' | 'interests';

type Props = {
  setTab: (tab: Tab) => void;
  currentTab: Tab;
};

const PersonalInfo = ({ setTab, currentTab }: Props) => {
  return (
    <>
      {/*Icons */}
      <div className='w-[69px] border-l-2 border-r-2 border-[#90A1B9] flex flex-col items-center justify-start align-middle gap-[32px]'>
        <div className='mt-[15px]'>
          <Image src={codeIcon} alt="code Icon" className='w-[24px] h-[24px]'/>
        </div>
        <div>
          <Image src={circle} alt='bulb Icon' className='w-[24px] h-[24px]'/>
        </div>
        <div>
          <Image src={lastIcon} alt='pad Icon' className='w-[24px] h-[24px]'/>
        </div>
      </div>

      {/*Sidebar content*/}
      <div className='w-[242px] border-r-2 border-[#90A1B9] flex flex-col'>
        <div>
          <h1 className='flex items-center w-full gap-3 border-b-2 border-[#90A1B9] px-6 py-3 '>
            <Image src={arrowDown} alt='arrow down Icon' />personal-info
          </h1>
          <div className='p-3 gap-2 flex flex-col'>
            {[
              { id: 'bio', icon: bio, label: 'bio' },
              { id: 'interests', icon: interest, label: 'interests' },
              { id: 'education', icon: education, label: 'education' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setTab(item.id as Tab)}
                className={`flex items-center gap-2 text-left text-lg ${currentTab === item.id ? 'font-bold text-blue-400' : ''}`}
              >
                <Image src={rightArrow} alt='arrow Icon' />
                <Image src={item.icon} alt={`${item.label} Icon`} />
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div>
          <h1 className='flex items-center gap-3 px-6 py-3 border-t-2 border-b-2 border-[#90A1B9] '>
            <Image src={arrowDown} alt='arrow down Icon'/>contacts
          </h1>
          <div className='p-3 gap-2 flex flex-col'>
            <p className='flex items-center gap-[10px]'>
              <Image src={message} alt='email Icon' />
              <span>email</span>
            </p>
            <p className='flex items-center gap-[10px]'>
              <Image src={phone} alt='phone Icon' />
              <span>+2347085386788</span>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default PersonalInfo;
