import React from 'react'
import { assets, infoList, toolsData } from '../assets/assets'
import { motion } from 'motion/react'
const About = ({ isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className='w-full px-[12%] py-10 scroll-mt-20' id='about'>
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className='text-center mb-2 text-lg '>Introduction</motion.h4>
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className='text-center text-5xl'>About me</motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className='flex flex-col items-center w-full lg:flex-row  gap-20 my-20'>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className='w-64 sm:w-80 rounded-3xl max-w-none'>
          <img src={assets.profile} alt="Profile picture" className='w-full rounded-3xl' />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className='flex-1'>
          <p className='max-w-2xl mb-10'>I'm a Fullstack developer with experience in developing end-to-end web applications and solving real-world problems.My tech stack includes React, Next.js, Express and MongoDB and i have a keen eye for creating responsive web applications. I enjoy collaborating with teams and constantly learning to improve my skills.</p>
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
            {
              infoList.map(({ icon, iconDark, title, description }, index) => (
                <motion.li
                  whileHover={{ scale: 1.05 }}
                  key={index} className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer 
                hover:bg-lightHover hover:-translate-y-1 
                duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white/80 dark:hover:bg-darkHover/50'>
                  <img src={isDarkMode ? iconDark : icon} alt="" className='w-7 mt-2' />
                  <h3 className='font-semibold my-2 text-gray-700 dark:text-white'>{title}</h3>
                  <p className='text-sm text-gray-600 dark:text-white/80'>{description}</p>
                </motion.li>
              ))
            }
          </motion.ul>
          <motion.h4
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className='my-4 text-gray-700 dark:text-white/80'>Tools I use</motion.h4>
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.6, delay: 0.6 }}
            className='flex items-center gap-3 sm:gap-5'>
            {toolsData.map((tool, index) => (
              <motion.li
                whileHover={{ scale: 1.1}}
                key={index} className='flex items-center justify-center w-12 sm:w-14 cursor-pointer aspect-square border border-gray-400 rounded-lg hover:-translate-y-1 duration-500 '>
                <img src={tool} alt="tool" className='w-5 sm:w-7' />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default About