import { arrowDown, bio, circle, codeIcon, education, interest, lastIcon, message, phone, rightArrow } from '@/public/Icon'
import Image from 'next/image'
import React from 'react'

const PersonalInfo = () => {
  return (
    <div>
        {/*Icons */}
        <div className='w-[69px] h-full border-l-2 border-r-2 border-[#314158] flex items-center justify-center gap-2'>
            <div>
                <Image src={codeIcon} alt="code Icon"/>
            </div>
            <div>
                <Image src={circle} alt='bulb Icon' />
            </div>
            <div>
                <Image src={lastIcon} alt='pad Icon'/>
            </div>
        </div>
        {/*sidebar content*/}
        <div>
            <div>
                <h1><Image src={arrowDown} alt='arrow down Icon'/>personal-info</h1>
                <div>
                    <div>
                        <Image src={rightArrow} alt='right arrow Icon' />
                        <Image src={bio} alt='bio Icon' />
                        <span>bio</span>
                    </div>
                    <div>
                        <Image src={rightArrow} alt='right arrow Icon' />
                        <Image src={interest} alt='interest Icon' />
                        <span>interests</span>
                    </div>
                    <div>
                        <Image src={rightArrow} alt='right arrow Icon' />
                        <Image src={education} alt='education Icon' />
                        <span>education</span>
                    </div>
                </div>
            </div>
            <div>
                <h1><Image src={arrowDown} alt='arrow down Icon'/>contacts</h1>
                <div>
                    <p>
                        <Image src={message} alt='email Icon' />
                        <span>email</span>
                    </p>
                    <p>
                        <Image src={phone} alt='phone Icon' />
                        <span>+2347085386788</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PersonalInfo