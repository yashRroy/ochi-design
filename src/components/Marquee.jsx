import { motion } from 'framer-motion'
import React from 'react'

const Marquee = () => {
  return (
    <div className='w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]'>
      <div className='text border-t-2 border-b-2 border-zinc-300 flex overflow-hidden whitespace-nowrap'>
        <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat: Infinity , ease:"linear", duration: 10}} className='text-[18vw] leading-none font-["Founders_Grotesk_X-Condensed"] uppercase pt-10 -mb-[6vw] font-semibold pr-20'>we are ochi</motion.h1>
        <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat: Infinity , ease:"linear", duration: 10}} className='text-[18vw] leading-none font-["Founders_Grotesk_X-Condensed"] uppercase pt-10 -mb-[6vw] font-semibold pr-20'>we are ochi</motion.h1>

      </div>
    </div>
  )
}

export default Marquee
