import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

const Navbar = () => {
  return (
    <div className='w-full shadow-navBarShadow h-20 lg:h-[12vh] sticky top-0 z-50 bg-slate-900 px-4'>
      <div className='max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between'>
    
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration:0.5}}>
      <h1 className='font-logoFont text-5xl tracking-widest'>Subhajit.<span className='text-2xl tracking-wider'>dev</span></h1>
    </motion.div>

    <div className='hidden mdl:inline-flex items-center gap-7'>
      
      <ul className='flex text-[17px] gap-7'>
        <Link href="#home" className='flex items-center gap-1 font-logoFont tracking-widest  font-semibold text-textDark hover:text-gray-200 cursor-pointer duration-300 nav-link'>
          <motion.li initial={{y : -10 , opacity: 0}} animate={{y:0 , opacity:1}} transition={{duration : 0.1}}>Home</motion.li>
        </Link>

        <Link href="#home" className='flex items-center gap-1 font-logoFont tracking-widest  font-semibold text-textDark hover:text-gray-200 cursor-pointer duration-300 nav-link'>
        <motion.li initial={{y : -10 , opacity: 0}} animate={{y:0 , opacity:1}} transition={{duration : 0.1,delay: 0.1}}>About</motion.li>
        </Link>

        <Link href="#home" className='flex items-center gap-1 font-logoFont tracking-widest  font-semibold text-textDark hover:text-gray-200 cursor-pointer duration-300 nav-link'>
        <motion.li initial={{y : -10 , opacity: 0}} animate={{y:0 , opacity:1}} transition={{duration : 0.1, delay: 0.2}}>Experience</motion.li>
        </Link>

        <Link href="#home" className='flex items-center gap-1 font-logoFont tracking-widest  font-semibold text-textDark hover:text-gray-200 cursor-pointer duration-300 nav-link'>
        <motion.li initial={{y : -10 , opacity: 0}} animate={{y:0 , opacity:1}} transition={{duration : 0.1, delay: 0.3}}>Projects</motion.li>
        </Link>

        <Link href="#home" className='flex items-center gap-1 font-logoFont tracking-widest  font-semibold text-textDark hover:text-gray-200 cursor-pointer duration-300 nav-link'>
        <motion.li initial={{y : -10 , opacity: 0}} animate={{y: 0 , opacity: 1}} transition={{duration : 0.1, delay: 0.4}}>Contact</motion.li>
        </Link>
      </ul>

      
    </div>

  {/* Icon -- Dropdown */}
  <div className='w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-gray-200 cursor-pointer overflow-hidden group'>
    <span className='w-full h-[2px] bg-gray-200 inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300'></span>
    <span className='w-full h-[2px] bg-gray-200 inline-flex transform translate-x-3 group-hover:translate-x-0  transition-all ease-in-out duration-300'></span>

    <span className='w-full h-[2px] bg-gray-200 inline-flex transform translate-x-1 group-hover:translate-x-3   transition-all ease-in-out duration-300'></span>

  </div>
    </div>
    </div>
  )
}

export default Navbar