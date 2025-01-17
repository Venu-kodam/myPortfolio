import React from 'react'

const Skill = ({image,text}) => {
    return (
        <div className="skill min-w-32 min-h-32 sm:min-w-40 sm:min-h-40 mx-[10px] sm:m-10 sm:mx-10 p-4 flex flex-col justify-center items-center rounded-lg shadow-black dark:shadow-white/80 gap-3 cursor-pointer hover:animate-none">
            <img src={image} alt=""  className='w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] dark:text-white'/>
            <h5 className='font-semibold'>{text}</h5>
        </div>
    )
}

export default Skill