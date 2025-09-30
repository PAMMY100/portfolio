'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const Header = () => {
  const pathName = usePathname()
  const [isOpen, setIsOpen] = useState(false) // hamburger state

  return (
    <div className="w-full h-[56px] dark:bg-[#0F172B] text-[#F8FAFC] font-medium border-2 border-[#90A1B9] flex items-center justify-between font-fira-code px-4">
      {/* Logo */}
      <p className="w-[180px] md:w-[311px] h-full p-5 border-[#90A1B9]">Samuel_Adebayo</p>

      {/* Desktop nav */}
      <div className="hidden sm:text-xs md:flex items-center w-[424px] h-full justify-between">
        <Link href="/" className="w-[33.3%] h-full">
          <div
            className={`p-5 h-full border-[#90A1B9] border-l-2 border-r-2 cursor-pointer hover:border-b-4 hover:border-b-[#FFB86A] ${
              pathName === '/' ? 'border-b-4 border-b-[#FFB86A]' : ''
            }`}
          >
            _hello
          </div>
        </Link>
        <Link href="/about" className="w-[33.3%] h-full">
          <div
            className={`p-5 h-full border-[#90A1B9]  cursor-pointer hover:border-b-4 hover:border-b-[#FFB86A] ${
              pathName === '/about' ? 'border-b-4 border-b-[#FFB86A]' : ''
            }`}
          >
            _about-me
          </div>
        </Link>
        <Link href="/projects" className="w-[33.3%] h-full">
          <div
            className={`p-5 h-full border-[#90A1B9] border-l-2 border-r-2 cursor-pointer hover:border-b-4 hover:border-b-[#FFB86A] ${
              pathName === '/projects' ? 'border-b-4 border-b-[#FFB86A]' : ''
            }`}
          >
            _projects
          </div>
        </Link>
      </div>

      {/* Desktop contact link */}
      <div className="hidden md:block">
        <Link href="/contact" className="flex justify-end w-[200px] h-full">
          <div
            className={`p-4 sm:text-xs w-full h-full text-center border-[#90A1B9] border-l-2 cursor-pointer hover:border-b-4 hover:border-b-[#FFB86A] ${
              pathName === '/contact' ? 'border-b-4 border-b-[#FFB86A]' : ''
            }`}
          >
            _contact-me
          </div>
        </Link>
      </div>

      {/* Mobile hamburger */}
      { isOpen ?
        <button onClick={() => setIsOpen(!isOpen)}>
          <span className='text-white text-[25px] items-center'>X</span>
        </button> 
        : 
        <button
          className="md:hidden flex flex-col gap-[4px] p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="block w-6 h-[2px] bg-white"></span>
          <span className="block w-6 h-[2px] bg-white"></span>
          <span className="block w-6 h-[2px] bg-white"></span>
        </button>
      }

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="absolute top-[56px] left-0 w-full bg-[#0F172B] border-t-2 border-[#90A1B9] flex flex-col z-50">
          <Link href="/" onClick={() => setIsOpen(false)}>
            <div
              className={`p-4 border-b border-[#90A1B9] hover:bg-[#1E293B] ${
                pathName === '/' ? 'text-[#FFB86A]' : ''
              }`}
            >
              _hello
            </div>
          </Link>
          <Link href="/about" onClick={() => setIsOpen(false)}>
            <div
              className={`p-4 border-b border-[#90A1B9] hover:bg-[#1E293B] ${
                pathName === '/about' ? 'text-[#FFB86A]' : ''
              }`}
            >
              _about-me
            </div>
          </Link>
          <Link href="/projects" onClick={() => setIsOpen(false)}>
            <div
              className={`p-4 border-b border-[#90A1B9] hover:bg-[#1E293B] ${
                pathName === '/projects' ? 'text-[#FFB86A]' : ''
              }`}
            >
              _projects
            </div>
          </Link>
          <Link href="/contact" onClick={() => setIsOpen(false)}>
            <div
              className={`p-4 hover:bg-[#1E293B] ${
                pathName === '/contact' ? 'text-[#FFB86A]' : ''
              }`}
            >
              _contact-me
            </div>
          </Link>
        </div>
      )}
    </div>
  )
}

export default Header
