import React from 'react'
import { assets, ProjectData } from '../assets/assets'
import { motion } from 'motion/react'
const Projects = ({ isDarkMode }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className='w-full px-[8%] py-10 scroll-mt-20'>
            <motion.h1
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                className='text-center text-5xl' id='projects'>Projects</motion.h1>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className='text-center max-w-2xl mx-auto mt-5 mb-12 '>Welcome to my web development portfolio! Explore a collection of projects showcasing my expertize in full stack development.</motion.p>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-10 gap-5'>
                {
                    ProjectData.map((project, index) => (
                        <motion.div
                            whileHover={{ scale:1.05 }}
                            transition={{ duration:0.3 }}
                            key={index} className='aspect-square bg-no-repeat bg-cover 
                        bg-center rounded-lg relative cursor-pointer group'
                            style={{ backgroundImage: `url(${project.bgImage})` }}>
                            <div className='bg-white rounded-md w-10/12 absolute bottom-5 
                            left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between  
                            duration-500 group-hover:bottom-7'>
                                <div>
                                    <h2 className='font-semibold dark:text-black'>{project.title}</h2>
                                    <p className='text-sm text-gray-700'>{project.description}</p>
                                </div>
                                <div className='w-9 aspect-square flex items-center justify-center border rounded-full border-black shadow-[2px_2px_10px_#000] group-hover:bg-violet-300'>
                                <a href={project.url} target="_blank"><img src={assets.link_icon} className='w-5' alt="" /></a>
                                </div>
                            </div>
                        </motion.div>
                    ))
                }
            </motion.div>
            <motion.button 
            initial={{opacity:0}}
            whileInView={{opacity:1}} 
            transition={{duration:1,delay:0.6}} 
             className='w-max flex items-center justify-center gap-2 py-3 px-8 mx-auto my-20 hover:bg-lightHover  duration-500 rounded-full
             text-gray-700 border-gray-700 border-[0.5px] dark:text-white dark:border-white dark:hover:bg-darkHover'>
                Show more <img src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} className='w-4' alt="" />
            </motion.button>
        </motion.div>
    )
}

export default Projects