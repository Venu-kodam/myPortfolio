import profile from './mypicc.jpg'
import resume from './venusai_updated resume.pdf'
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import postman from './postman.png';
import mongoDB from './mongoDB.png';
import figma from './figma.png';
import git from './git.png';
import right_arrow_white from './right-arrow-white.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import right_arrow from './right-arrow.png';
import link_icon from './link.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import ReactImg from '../assets/ReactLogo.svg'
import Express from '../assets/express.webp'
import Node from '../assets/nodejs.png'
import Tailwind from '../assets/tailwind.png'
import HtmlImg from '../assets/HtmlLogo.svg'
import CssImg from '../assets/CssLogo.svg'
import JavascriptImg from '../assets/JavascriptLogo.svg'
import ReduxImg from '../assets/ReduxLogo.svg'
import MysqlImg from '../assets/mysqlLogo.svg'
import JavaImg from '../assets/Java Logo.png'

import EcommerceImg from '../assets/ecommerce_img.jpg'
import ImageGen from '../assets/imageGen.png'
import carImg from '../assets/carImg.webp'
import cryptoTracker from '../assets/cryptoTracker.jpg'
export const assets = {
    resume,
    profile,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    postman,
    mongoDB,
    figma,
    git,
    right_arrow_white,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    right_arrow,
    link_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    ReactImg,Express,Node,Tailwind,ReduxImg,HtmlImg,CssImg,JavascriptImg,JavaImg,MysqlImg
};

export const ProjectData = [
    {
        title: 'Ecommerce project',
        description: 'Fullstack project',
        bgImage: EcommerceImg,
        url:'https://github.com/Venu-kodam/Sneaky-ecommerce'
    },
    {
        title: 'Image Generator',
        description: 'Fullstack project',
        bgImage: ImageGen,
        url:'https://github.com/Venu-kodam/Sneaky-ecommerce'
    },
    {
        title: 'Crypto Tracker',
        description: 'Frontend project',
        bgImage: cryptoTracker,
        url:'https://github.com/Venu-kodam/Sneaky-ecommerce'
    },
    {
        title: 'Car management system',
        description: 'Fullstack project',
        bgImage: carImg,
        url:'https://github.com/Venu-kodam/Car_management'
    },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'React Js, Next Js, Express, MongoDB' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'B.Tech in Computer Science' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built couple of projects' }
];

export const toolsData = [
    assets.vscode, assets.postman, assets.mongoDB, assets.git ,assets.figma,
];