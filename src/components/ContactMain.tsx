import React from 'react'
import ContactForm from './ContactForm'
import { useState } from "react";
import { ContactFormData } from "@/lib/validation";
import FormCodeDisplay from './FormCodeDisplay';

const ContactMain = () => {
    const [formdata, setFormData] = useState<ContactFormData>({
        name: '',
        email: '',
        message: ''
    })

  return (
        <section className='flex flex-1 mt-[48px] border-t-2 border-[#90A1B9] min-h-screen justify-around'>
            {/**Input container */}
            <div className='w-[45%] h-full border-r-2 border-[#90A1B9] flex justify-center items-center'>
                <ContactForm formdata={formdata} setFormData={setFormData}/>
            </div>
            {/*code display */}
            <div className='w-[45%] h-full border-r-2 border-[#90A1B9]'>
                <FormCodeDisplay formdata={formdata}/>
            </div>
            <div className='align-middle w-16 h-[10px] bg-[#62748E] mt-3' />
        </section>
  )
}

export default ContactMain