import React from 'react'
import { TbBrandGithub }  from 'react-icons/tb'
import {
    SlSocialLinkedin,
} from 'react-icons/sl'
import { MdOutgoingMail } from "react-icons/md";
import { FiTwitter } from "react-icons/fi";



const LeftSide = () => {
  return (
    <div className='w-full h-full flex  flex-col items-center justify-end gap-4 text-textLight'>
        <div className='flex flex-col gap-4 border-[2px] border-textDark py-4 px-2 rounded-md'>
        <a href="https://github.com/Subhojitd" target='_blank'>
            <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                <TbBrandGithub/>
            </span>
        </a>

        <a href="https://www.linkedin.com/in/subhajit-das-152907244/" target='_blank'>
            <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                <SlSocialLinkedin/>
            </span>
        </a>

        <a href="mailto:subhojitdas153@gmail.com" target='_blank'>
            <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                <MdOutgoingMail/>
            </span>
        </a>

        <a href="https://twitter.com/subhajit_2k1" target='_blank'>
            <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                <FiTwitter />
            </span>
        </a>
        </div>
    </div>
  )
}

export default LeftSide