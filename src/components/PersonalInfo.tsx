// components/PersonalInfo.tsx
'use client'

import { arrowDown, bio, circle, codeIcon, interest, lastIcon, message, phone, rightArrow, cv } from '@/public/Icon'
import Image from 'next/image'
import React from 'react'

type Tab = 'bio' | 'interests';

type Props = {
  setTab: (tab: Tab) => void;
  currentTab: Tab;
};

const PersonalInfo = ({ setTab, currentTab }: Props) => {

  const handleDownloadCv = () => {
    const link = document.createElement('a');
    link.href = '/cv.pdf';
    link.download = 'Samuel_Adebayo_CV.pdf'; // the name when user downloads
    link.click()
  }

  return (
    <>
      {/*Icons */}
      <div className='hidden md:w-[69px] border-l-2 border-r-2 border-[#90A1B9] md:flex flex-col items-center justify-start align-middle gap-[32px]'>
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
      <div className='w-[100px] text-base border-r-2 border-[#90A1B9] flex-col sm:w-[150px] sm:text-xl md:w-[242px] md:flex'>
        <div>
          <h1 className='px-2 py-3 text-[9px] gap-1 flex items-center border-b-2 border-[#90A1B9] font-bold sm:text-[10px] md:w-full md:px-6 md:py-3 md:gap-3 md:text-sm md:font-normal'>
            <Image src={arrowDown} alt='arrow down Icon' />personal-info
          </h1>
          <div className='p-1 gap-1 md:p-3 md:gap-2 flex flex-col'>
            {[
              { id: 'bio', icon: bio, label: 'bio' },
              { id: 'interests', icon: interest, label: 'interests' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setTab(item.id as Tab)}
                className={`text-[13px] mb-0 sm:mb-4 flex items-center gap-2 text-left md:text-lg ${currentTab === item.id ? 'font-bold text-blue-400' : ''}`}
              >
                <Image src={rightArrow} alt='arrow Icon' className='hidden md:block' />
                <Image src={item.icon} alt={`${item.label} Icon`} />
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className='p-3'>
            <button className='text-[11px] font-bold mb-0 sm:mb-3 flex items-center gap-2 text-left md:text-lg' onClick={handleDownloadCv}>
              <Image src={rightArrow} alt='arrow Icon' className='hidden md:block' />
              <Image src={cv} alt='cv Icon' width={20} height={20} className='hidden md:block'/>
               <span>Download CV</span>
              </button>
          </div>
          <h1 className='px-1 py-1 text-[9px] gap-1 flex items-center border-t-2 border-b-2 border-[#90A1B9] sm:text-[10px] md:w-full md:px-6 md:py-3 md:gap-3 md:text-sm'>
            <Image src={arrowDown} alt='arrow down Icon'/>contacts
          </h1>
          <div className='p-3 gap-2 flex flex-col'>
            <p className='hidden text-[10px] gap-2 md:flex flex-col md:text-[12px] md:flex-row items-center md:gap-[10px]'>
              <Image src={message} alt='email Icon' />
              <span>princesamuel636@gmail.com</span>
            </p>
            <p className='text-[10px] gap-2 flex flex-col md:text-[12px] md:flex-row items-center md:gap-[10px]'>
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
