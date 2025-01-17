import React from 'react'
import { assets } from '../assets/assets';
import {motion} from 'motion/react'
const Home = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4' id='home'>
      <motion.div
      initial={{scale:0}}
      whileInView={{scale:1}} 
      transition={{duration:0.8,type:'spring',stiffness:100}}
      >
        <img src={assets.profile} className='rounded-full w-28 h-28' alt="" />
      </motion.div>
      <motion.h3 
      initial={{y:-20,opacity:0}}
      whileInView={{opacity:1,y:0}} 
      transition={{duration:0.6,delay:0.4}}
      className='flex items-end gap-2 text-xl md:text-2xl mb-3'>
        Hi! I'm Venusai Kodam <img src={assets.hand_icon} className='w-6' alt="" />
      </motion.h3>
      <motion.h1
      initial={{y:-30,opacity:0}}
      whileInView={{opacity:1,y:0}} 
      transition={{duration:0.8,delay:0.5}} 
      className='text-3xl sm:text-6xl lg:text-[66px] '>
        Fullstack Developer
      </motion.h1>
      <motion.p 
      initial={{opacity:0}}
      whileInView={{opacity:1}} 
      transition={{duration:0.6,delay:0.4}} 
      className='max-w-2xl mx-auto'>I specialize in building dynamic,user-friendly and responsive websites using modern technologies like React, Next.js and Express.js. I'm dedicated to creating impactful digital experiences.Checkout my projects to see innovative solutions.</motion.p>
      <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
        <motion.a
        initial={{y:30,opacity:0}}
        whileInView={{opacity:1,y:0}} 
        transition={{duration:0.6,delay:1.2}}  
        href={assets.resume} download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black'>
          Download Resume <img src={assets.download_icon} className='rounded-full w-4' alt="" />
        </motion.a>
        <motion.a 
        initial={{y:30,opacity:0}}
        whileInView={{opacity:1,y:0}} 
        transition={{duration:0.6,delay:1}} 
         href="#contact" className='px-10 py-3 border rounded-full bg-black text-white border-white outline-none flex items-center gap-2  dark:bg-transparent'>
          Let's collaborate<img src={assets.right_arrow_white} className='rounded-full w-4' alt="" />
        </motion.a>
      </div>
    </div>
  )
}

export default Home