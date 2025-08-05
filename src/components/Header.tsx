'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


const Header = () => {
  
  const pathName = usePathname()



  return (
    <div className='w-full h-[56px] dark:bg-[#0F172B] dark:text-[#F8FAFC] font-medium border-2 border-[#90A1B9] flex items-center justify-between font-fira-code'>
        <div className='flex items-center w-[735px] h-[56px]'>
            <p className='w-[311px] h-full p-5 border-[#90A1B9]'>Samuel_Adebayo</p>
            <div className='flex items-center w-[424px] h-full justify-between'>
              
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
                    className={`p-5 h-full border-[#90A1B9] border-l-2 border-r-2 cursor-pointer hover:border-b-4 hover:border-b-[#FFB86A] ${
                      pathName === '/about' ? 'border-b-4 border-b-[#FFB86A]' : ''
                    }`}
                  >
                    _about-me
                  </div>
                </Link>
                <Link href="/projects" className="w-[33.3%] h-full">
                  <div
                    className={`p-5 h-full border-[#90A1B9] border-l-2 border-r-2 cursor-pointer hover:border-b-4 hover:border-b-[#FFB86A] ${
                      pathName === '/projects' ? 'border-b-4 border-b-[#FFB86A]' : ''}`}
                  >
                    _projects
                  </div>
                </Link>
            </div>
        </div>
        <div className='w-[10%]'></div>
        <Link href="/contact" className='flex justify-end w-[200px] h-[full]'>
            <div className={`p-4 w-full h-full text-center border-[#90A1B9] border-l-2 cursor-pointer hover:border-b-4 hover:border-b-[#FFB86A] ${
                      pathName === '/projects' ? 'border-b-4 border-b-[#FFB86A]' : ''}`}>_contact-me</div>
        </Link>
    </div>
  )
}

export default Header