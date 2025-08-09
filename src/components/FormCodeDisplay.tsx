import React from 'react'

import { ContactFormData } from "@/lib/validation";

type Props = {
    formdata: ContactFormData;
}

const FormCodeDisplay = ({formdata}: Props) => {

    const time = new Date().toLocaleString()

  return (
    <div className='text-[#90A1B9] text-lg font-fira-code p-14'>
        <div className='flex flex-col gap-5'>
            <div className='flex gap-6 items-center'>
                <span>1</span>
                <div><span className='text-[#C27AFF]'>const</span>button<span className='text-[#C27AFF]'> =</span> document.querySelector <span>{'('}</span><span className='text-[#FFB86A]'>'#sendBtn'</span><span>{'(;'}</span></div>
            </div>
            <div>2</div>
            <div className='flex gap-8 items-center'>
                <span>3</span>
                <div className='615FFF'><span className='text-[#C27AFF]'>const</span> message <span className='text-[#C27AFF]'>=</span> <span>{'{'}</span></div>
            </div>
            <div className='flex gap-8 items-center'>
                <span>4</span>
                <div className='text-[#FFB86A]'><span className='text-[#615FFF]'>name: </span> {formdata.name ? formdata.name : '"Jonathan Davis"'}</div>
            </div>
            <div className='flex gap-8 items-center'>
                <span>5</span>
                <div className='text-[#FFB86A]'><span className='text-[#615FFF]'>email: </span> {formdata.email ? formdata.email : '"",'}</div>
            </div>
            <div className='flex gap-8 items-center'>
                <span>6</span>
                <div className='text-[#FFB86A]'><span className='text-[#615FFF]'>message: </span> {formdata.message ? formdata.message : '""'}</div>
            </div>
            <div className='flex gap-8 items-center'>
                <span>7</span>
                <div className='text-[#FFB86A]'><span className='text-[#615FFF]'>date: </span>"{time}"</div>
            </div>
            <div className='flex gap-8 items-center'>
                <span>8</span>
                <div>{"}"}</div>
            </div>
            
            <span>9</span>
            <div className='flex gap-8 items-center'>
                <span>10</span>
                <div className='text-[#615FFF]'>button.addEventListener<span className='text-[#90A1B9]'>{'('}</span><span className='text-[#FFB86A]'>'click'</span> <span className='text-[#90A1B9]'>{', () '}</span> <span className='text-[#C27AFF]'>{'=> '}</span> <span className='text-[#90A1B9]'>{'{'}</span></div>
            </div>
            <div className='flex gap-8 items-center'>
                <span>11</span>
                <div className='text-[#615FFF]'>{'   '}form.send<span>{'('}</span>message<span>{');'}</span></div>
            </div>
            <div className='flex gap-8 items-center'>
                <span>12</span>
                <div className='text-[#90A1B9]'>{'})'}</div>
            </div>    
        </div>
        
    </div>
  )
}

export default FormCodeDisplay