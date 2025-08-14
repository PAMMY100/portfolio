import Image from 'next/image'
import React from 'react'
import dp from '@/public/images/dp.png'
import dpp from '@/public/images/dpp.png'
import { details, ratedStars } from '@/public/Icon'

const CodeSnippet = () => {
  return (
    <div className='flex flex-col gap-10'>
        <div className=''>
            <div className='flex justify-between align-middle mb-6'>
                <div className='w-[250px] h-[44px] flex gap-3'>
                    <Image src={dp} alt='display picture'width={36} height={36} style={{borderRadius: '100%'}}/>
                    <div className='flex flex-col gap-1'>
                        <p className='text-[#615FFF]'>@username</p>
                        <p className='text-[#90A1B9]'>Created 5 months ago</p>
                    </div>
                </div>
                <div className='flex gap-3 items-center'>
                    <span className='flex gap-3 align-middle'>
                        <Image src={details} alt='detail Icon' />
                        details
                    </span>
                    <span className='flex gap-3 align-middle'>
                        <Image src={ratedStars} alt='star Icon' />
                        stars
                    </span>
                </div>
            </div>
            <div className='flex flex-col gap-1 bg-[#020618] p-4 rounded-[16px]'>
                <p className='ml-2'><span className='text-[#FFA1AD]'>function</span> initializeModelChunk{'<T>'}(chunk: ResolvedModelChunk): T {'{'}</p>
                <p className='ml-2'>const value: <span className='text-[#FFB86A]'>T</span> = <span>parseModel</span>(chunk.<span>_response</span>, chunk.<span>_value</span>);</p>
                <p className='ml-2'><span className='text-[#FFA1AD]'>const</span> initializedChunk: <span className='text-[#FFB86A]'>InitializedChunk</span>{'<T>'} = (chunk: any);</p>
                <p className='ml-2'>initializedChunk.<span className='text-[#615FFF]'>_status = INITIALIZED;</span></p>
                <p className='ml-2'>initializedChunk.<span className='text-[#615FFF]'>_value = </span>value;</p>
                <p><span className='text-[#FFA1AD] ml-2'>return</span> value;</p>
                <p>{'}'}</p>
            </div>
        </div>
        <div>
            <div className='flex justify-between align-middle mb-6'>
                <div className='w-[250px] h-[44px] flex gap-3'>
                    <Image src={dpp} alt='display picture'width={36} height={36} style={{borderRadius: '100%'}}/>
                    <div className='flex flex-col gap-1'>
                        <p className='text-[#615FFF]'>@username</p>
                        <p className='text-[#90A1B9]'>Created 9 months ago</p>
                    </div>
                </div>
                <div className='flex gap-3 items-center'>
                    <span className='flex gap-3 align-middle'>
                        <Image src={details} alt='detail Icon' />
                        details
                    </span>
                    <span className='flex gap-3 align-middle'>
                        <Image src={ratedStars} alt='star Icon' />
                        stars
                    </span>
                </div>
            </div>
            <div className='flex flex-col gap-1 bg-[#020618] p-4 rounded-[16px]'>
                <p className='ml-2'><span className='text-[#FFA1AD]'> export function</span> parseModelTuple{'('}</p>
                <p className='ml-2'>response: <span className='text-[#FFB86A]'>Response</span>,</p>
                <p className='ml-2'>value: {'{+[key: string]: JsonValue} | $ReadOnlyArray'}<span className='text-[#615FFF]'>{'<'}</span><span className='text-[#00BBA7]'>JSONValue</span><span className='text-[#615FFF]'>{'>'}</span>,</p>
                <p className='ml-2'>{'):'} any {'{'}</p>
                <p className='ml-2'>{'  const tuple: [mixed, mixed, mixed, mixed] = (value: any);'}</p>
            </div>
        </div>
    </div>
  )
}

export default CodeSnippet