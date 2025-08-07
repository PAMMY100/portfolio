// app/about/layout.tsx
'use client'

import React, { useState } from 'react'
import PersonalInfo from '@/components/PersonalInfo'
import Bio from '@/components/Bio'
import Interests from '@/components/Interests'


type Tab = 'bio' | 'interests'

const Page = () => {
  const [tab, setTab] = useState<Tab>('bio')

  const renderTabContent = () => {
    switch (tab) {
      case 'bio': return <Bio />;
      case 'interests': return <Interests />;
      default: return <Bio />;
    }
  }

  return (
    <div className='w-full flex min-h-screen overflow-hidden border-r-2 border-[#90A1B9] font-fira-code text-[#F8FAFC] '>
      {/* Sidebar */}
      <aside className='flex'>
        <PersonalInfo setTab={setTab} currentTab={tab} />
      </aside>

      {/* Main content */}
      <main className='flex-1 overflow-y-auto'>
        {renderTabContent()}
      </main>
    </div>
  )
}

export default Page
