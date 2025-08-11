import React from 'react'
import InterestContent from './InterestContent'

const Interests = () => {
  return (
    <div className='flex flex-col gap-2 font-fira-code'>
        <div className='flex'>
            <h1 className='w-[242px] h-[48px] border-r-2 border-b-2 border-[#90A1B9] px-6 py-3 text-lg'>Interests</h1>
            <div className='flex-1 h-[48px] border-b-2 border-[#90A1B9]'></div>
        </div>
        <div className='flex gap-2 justify-around'>
            {/*Interest content*/}
            <div className='w-[45%] min-h-screen p-6 border-r-2 border-[#90A1B9]'>
                <InterestContent />
            </div>
            
            <div className='w-8 h-[10px] bg-[#62748E]' />
        
            {/*Code snippet*/}
            <div className='w-[45%] min-h-screen p-6 border-l-2 border-r-2 border-[#90A1B9]'></div>
            <div className='w-8 h-[10px] bg-[#62748E]' />
        </div>
    </div>
  )
}

export default Interests