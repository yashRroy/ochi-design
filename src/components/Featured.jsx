import { motion, useAnimation } from 'framer-motion'
import { Power4 } from 'gsap/all'
import React, { useState } from 'react'

function Featured() {
    const cards = [useAnimation(), useAnimation()];

    const handleHover = (index)=>{
        cards[index].start({y: "0"})
    }

  return (
    <div className='w-full py-20'>
        <div className='w-full px-20 border-b-[1px] border-zinc-700 pb-20'>
            <h1 className='text-7xl font-["Neue_Montreal"] tracking-tight'>Featured projects</h1>
        </div>
        <div className='px-20'>
            <div className="cards w-full flex gap-10 mt-10">
                <motion.div onHoverStart={()=>handleHover(0)} className="cardcontainer relative w-1/2 h-[75vh] ">
                    <h1 className='absolute flex overflow-hidden text-[#CDEA68] left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-8xl'>
                        {"FYDE".split('').map((item, index)=>(
                        <motion.span initial={{y:"100%"}} animate={cards[0]} className='inline-block'>{item}</motion.span>
                        ))}
                    </h1>
                    <div className='card w-full h-full rounded-xl overflow-hidden'>
                        <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png" alt="" />
                    </div>
                </motion.div>
                <div className="cardcontainer relative w-1/2 h-[75vh] ">
                    <h1 className='absolute flex overflow-hidden text-[#CDEA68] right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-8xl'>
                        {"VISE".split('').map((item, index)=>(
                        <span className='inline-block'>{item}</span>
                        ))}
                    </h1>
                    <div className='card w-full h-full rounded-xl overflow-hidden'>
                        <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
        <div className='px-20'>
            <div className="cards w-full flex gap-10 mt-10">
                <div className="cardcontainer relative w-1/2 h-[75vh] ">
                    <h1 className='absolute text-[#CDEA68] left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-8xl'>
                        {"TRAWA".split('').map((item, index)=><span>{item}</span>)}
                    </h1>
                    <div className='card w-full h-full rounded-xl overflow-hidden'>
                        <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-1326x1101.jpg" alt="" />
                    </div>
                </div>
                <div className="cardcontainer relative w-1/2 h-[75vh] ">
                    <h1 className='absolute text-[#CDEA68] right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-8xl'>
                        {"PREMIUM BLEND".split('').map((item, index)=><span>{item}</span>)}
                    </h1>
                    <div className='card w-full h-full rounded-xl overflow-hidden'>
                        <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-1326x1101.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured