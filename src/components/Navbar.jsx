import React, { useEffect, useRef, useState } from 'react'
import { assets } from '../assets/assets'
const Navbar = ({isDarkMode, setIsDarkMode}) => {
    const sideMenuref = useRef()
    const [isscroll, setIsScroll] = useState(false)

    const openMenu = ()=>{
        sideMenuref.current.style.transform = 'translateX(-16rem)'
    }
    const closeMenu = ()=>{
        sideMenuref.current.style.transform = 'translateX(16rem)'
    }

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(scrollY>50){
                setIsScroll(true)
            }
            else{
                setIsScroll(false)
            }
        })
    },[])
    return (
        <>
            <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
                <img src={assets.header_bg_color} className='w-full' alt="" />
            </div>
            <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-10 ${isscroll?'bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20':''}`}>
                <a className="w-28 cursor-pointer text-2xl md:text-4xl " href="#" style={{ fontFamily: '"Playwrite MX", cursive' }}>Portfolio</a>
                <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isscroll?'':'bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/20 dark:bg-transparent'} `}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                </ul>
                <div className='flex items-center gap-3'>
                    {/* button for darkmode and light mode */}
                    <button onClick={()=>setIsDarkMode(prev=>!prev)}>
                        <img src={isDarkMode? assets.sun_icon :assets.moon_icon} className='w-6' alt="" />
                    </button>
                    <a href="#contact" className='hidden lg:flex items-center gap-3 px-8 py-2.5 border border-gray-500 rounded-full ml-4 dark:border-white/50'>Contact
                        <img src={ isDarkMode?assets.arrow_icon_dark:assets.arrow_icon} className='w-3' alt="" />
                    </a>
                    <button onClick={openMenu} className='block md:hidden  ml-3'>
                        <img  src={isDarkMode?assets.menu_white:assets.menu_black} className='w-6 ' alt="" />
                    </button>
                </div>

                {/* -------- mobile menu --------- */}
                <ul ref={sideMenuref} className={`flex flex-col md:hidden py-20 gap-4 lg:gap-8  bg-purple-500 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 transition duration-500`}>
                    <div onClick={closeMenu} className='absolute right-6 top-6'>
                        <img src={assets.close_black} className='w-5 cursor-pointer' alt="" />
                    </div>
                    <li><a onClick={closeMenu} href="#">Home</a></li>
                    <li><a onClick={closeMenu} href="#about">About</a></li>
                    <li><a onClick={closeMenu} href="#skills">Skills</a></li>
                    <li><a onClick={closeMenu} href="#projects">Projects</a></li>
                </ul>
        
            </nav>
        </>
    )
}

export default Navbar