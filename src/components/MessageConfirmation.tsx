'use client'
import React from 'react'
import ContactForm from './ContactForm'
import { set } from 'zod';

type Props = {
    showConfirmation: boolean;
    setShowConfirmation : (value: boolean) => void;
}

const MessageConfirmation = ({showConfirmation, setShowConfirmation}: Props) => {

    const openForm = () => {
        // setShowConfirmation(false);
    }

  return (
    <div className='flex flex-col justify-center items-center gap-5'>
        <div>
            <h1 className='text-[40px] font-semibold text-white mb-5'>Thank you!  <span className='text-[40px] mr-4'>🤘</span></h1>
            <p className='text-[#90A1B9] text-[25px] mb-2'>Your message has been accepted</p>
            <p className='text-[#90A1B9] text-[25px] mb-2'>You will receive answer soon</p>
        </div>
        
        <button className='w-[200px] h-[40px] rounded-[10px] p-3 text-[#020618] bg-[#FFB86A] hover:bg-[#ffc689]' onClick={openForm}>Send-new-message</button>
    </div>
  )
}

export default MessageConfirmation