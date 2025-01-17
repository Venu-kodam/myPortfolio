import React, { useState } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios';
import { motion } from 'motion/react'
const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        setResult("Sending....");

        const formData = new FormData(event.target);

        formData.append("access_key", "76371e17-7e6c-4342-bd4c-bc8e17ebb419");

        const { data } = await axios.post("https://api.web3forms.com/submit", formData)
        console.log(data)

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className='contact  w-full px-[12%] pt-10 scroll-mt-20' id='contact'>
            <motion.h4 
            initial={{y:-20,opacity:0}}
            whileInView={{opacity:1,y:0}} 
            transition={{duration:0.3,delay:0.5}} 
            className='text-center mb-2 text-lg'>Connect with me</motion.h4>
            <motion.h2 
            initial={{y:-20,opacity:0}}
            whileInView={{opacity:1,y:0}} 
            transition={{duration:0.5,delay:0.5}} 
            className='text-center text-5xl'>Get in touch</motion.h2>
            <motion.p 
            initial={{opacity:0}}
            whileInView={{opacity:1}} 
            transition={{duration:0.7,delay:0.5}} 
            className='text-center max-w-2xl mx-auto mt-5 mb-12'>I'd love to hear from you! If you have any questions, comments, or feedback, please use the form below.</motion.p>
            <motion.form 
            initial={{opacity:0}}
            whileInView={{opacity:1}} 
            transition={{duration:1,delay:0.4}} 
            onSubmit={onSubmitHandler} className='max-w-2xl mx-auto'>
                <div className='grid grid-cols-1  sm:grid-cols-2 gap-6 mt-10 mb-8'>
                    <motion.input 
                    initial={{y:-50,opacity:0}}
                    whileInView={{opacity:1,y:0}} 
                    transition={{duration:1.1,delay:0.5}} 
                    type="text" placeholder='Enter your name' name='name' className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90' required />
                    <motion.input 
                    initial={{x:50,opacity:0}}
                    whileInView={{opacity:1,x:0}} 
                    transition={{duration:1.1,delay:0.5}} 
                    type="email" placeholder='Enter your email' name='email' className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90' required />
                </div>
                <motion.textarea
                initial={{y:100,opacity:0}}
                whileInView={{opacity:1,y:0}} 
                transition={{duration:1.2,delay:0.6}} 
                rows='6' placeholder='Enter your message' name='message' className='w-full flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90' required></motion.textarea>
                <motion.button 
                whileHover={{scale:1.05}} 
                transition={{duration:0.3}} 
                type='submit' className='w-max flex items-center justify-center gap-2 py-3 px-8 mx-auto my-20 bg-black/80 text-white
                 hover:bg-black duration-500 rounded-full dark:border-[0.5px] dark:hover:bg-darkHover'>
                    Submit now <img src={assets.right_arrow_white} className='w-4' alt="" /> </motion.button>
            </motion.form>

            <p className='mt-4 text-center font-semibold'>{result}</p>

            <div className='flex items-center justify-center mx-auto '>
                <div className=' grid grid-cols-1 md:flex items-center justify-center lg:grid-cols-3 gap-8'>
                    <div className="icon flex items-center gap-4 my-4 ">
                        <div className="icon-div bg-black dark:bg-white w-12 h-12 rounded-full text-white dark:text-black flex items-center justify-center">
                            <i className="fa-solid fa-envelope text-2xl"></i>
                        </div>
                        <p> venukodam1234@gmail.com</p>
                    </div>
                    <div className="icon flex items-center gap-4 my-4">
                        <div className="icon-div  bg-black dark:bg-white w-12 h-12 rounded-full text-white dark:text-black flex items-center justify-center">
                            <i className="fa-solid fa-square-phone text-2xl"></i>
                        </div>
                        <p> +91 9347531588</p>
                    </div>
                    <div className="icon flex items-center gap-4 my-4">
                        <div className="icon-div  bg-black dark:bg-white w-12 h-12 rounded-full text-white dark:text-black flex items-center justify-center">
                            <i className="fa-solid fa-location-dot text-2xl"></i>
                        </div>
                        <p> Hyderabad, India</p>
                    </div>
                </div>
            </div>
            <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-8 py-4">
                <p>Copyright &copy; 2025, All rights reserved.</p>
                <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                    <li><a href="https://github.com/Venu-kodam" className='' target='_blank'><i className="fa-brands fa-github text-4xl "></i></a></li>
                    <li><a href="https://www.linkedin.com/in/venusaikodam/" target='_blank'><i className="fa-brands fa-linkedin text-4xl"></i></a></li>
                </ul>
            </div>
        </motion.div>
    )
}

export default Contact