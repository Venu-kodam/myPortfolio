import Navbar from "./components/Navbar"
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Home from "./components/Home"
import { useEffect, useState } from "react"
function App() {
  const[isDarkMode,setIsDarkMode] = useState(false)

  useEffect(()=>{
    if(localStorage.theme ==='dark' || (!('theme' in localStorage) && 
    window.matchMedia('(prefers-color-scheme:dark)').matches)){
      setIsDarkMode(true)
    }
    else{
      setIsDarkMode(false)
    }
  },[])
  useEffect(()=>{
    if(isDarkMode){
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
    }
    else{
      document.documentElement.classList.remove('dark')
      localStorage.theme = ''
    }
  },[isDarkMode])
  return (
    <div className="leading-8 overflow-x-hidden">
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
      <Home isDarkMode={isDarkMode}/>
      <About isDarkMode={isDarkMode}/>
      <Skills isDarkMode={isDarkMode}/>
      <Projects isDarkMode={isDarkMode}/>
      <Contact isDarkMode={isDarkMode}/>
    </div>
  )
}

export default App
