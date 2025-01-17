import React from 'react'
import Skill from './Skill'
import { assets } from '../assets/assets'
const Skills = () => {
    const skillsData = [
        { image: assets.ReactImg, text: 'React' },
        { image: assets.Express, text: 'Express' },
        { image: assets.mongoDB, text: 'MongoDB' },
        { image: assets.Tailwind, text: 'Tailwind' },
        { image: assets.Node, text: 'NodeJs' },
        { image: assets.HtmlImg, text: 'Html' },
        { image: assets.CssImg, text: 'Css' },
        { image: assets.JavascriptImg, text: 'Javascript' },
        { image: assets.ReduxImg, text: 'Redux' },
        { image: assets.JavaImg, text: 'Java' },
        { image: assets.MysqlImg, text: 'Mysql' },
    ]
    return (
        <div className='skill-container scroll-mt-20 py-10' id='skills'>
            <h1 className='text-center eheading text-5xl'>Skills</h1>
            <div className="logos py-5 whitespace-nowrap relative "> 
                <div className="logos-slide flex my-24 hover:animate-none">
                    {
                        skillsData.concat(skillsData).map((skill, index) => (
                            <Skill key={index} image = {skill.image} text={skill.text}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
export default Skills