
"use client"

import React from 'react'
import { testingProject } from '@/constant'
import Image from 'next/image'


const Projects = () => {

  return (
    <div className='text-[#90A1B9] grid gap-6 sm:grid-cols-2 lg:grid-cols-3 p-10'>
        {
            testingProject.map((data) => (
                <div key={data.name} className='bg-[#020618] rounded-2xl overflow-hidden shadow-lg'>
                    <div className='relative overflow-hidden'>
                        <a href={data.url} target='_blank' rel="noopener noreferrer">
                            <Image src={data.img} alt={data.name} className='w-full h-56 object-cover group-hover:scale-110 transition-transform duration-300 hover:opacity-50 hover:scale-110 ease' />
                        </a>
                        
                        {/* <a href="" className='absolute top-1/2 left-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full transition-all duration-300'>
                            <Image src={direction} alt='link direction'/>
                        </a> */}
                    </div>
                    <div className='space-y-3 p-5'>
                        <h3 className='text-xl font-semibold mb-2'>{data.name}</h3>
                        <p className='text-sm mb-4'>{data.description}</p>
                        <div className='flex flex-wrap gap-6'>
                            {data.stack.split(',').map((stack) => (
                                <span className='bg-[#45556C] text-white p-2 rounded-3xl' key={stack}>{stack}</span>
                            ))}
                        </div>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Projects