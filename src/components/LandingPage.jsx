import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-1'>
        <div className='textstructure mt-52 px-20'>
            {["We Create", "Eye-Opening", "Presentations"].map((item, index)=>{
                return (
                <div className='masker'>
                    <div className='w-fit flex items-end overflow-hidden'>
                        {index === 1 && (
                        <motion.div initial={{width:0}} animate={{width:"9vw"}} transition={{ease:[0.76, 0, 0.24, 1], duration:1}} className='mr-[1vw] w-[8vw] rounded-md h-[5.7vw] -top-[1.2vw] relative bg-green-500'></motion.div>
                        )}
                        <h1 className="pt-[2vw] -mb-[1vw] uppercase text-[9vw] leading-[.75] font-['Founders_Grotesk_X-Condensed'] font-bold">{item}</h1>
                    </div>
                </div>
                );
            })}
        </div>
        <div className='border-t-[1px] border-zinc-700 mt-32 flex justify-between items-center py-5 px-20'>
            {["For public and private companies", "From the first pitch to IPO"].map((item, index) => (
            <p className='text-md font-light tracking-tight leading-none'>{item}</p>))}
            <div className='start flex items-center gap-5'>
                <div className='px-5 py-2 border-[2px] border-zinc-500 font-light text-md rounded-full uppercase'>start the project</div>
                <div className='w-10 h-10 flex items-center justify-center rounded-full border-[2px] border-zinc-500'>
                    <span className='rotate-[45deg]'>
                        <FaArrowUpLong/>
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LandingPage