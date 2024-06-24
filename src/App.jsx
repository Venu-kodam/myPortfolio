import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from "./components/About"
import Contact from "./components/Contact"
import Education from "./components/Education"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Main from "./components/Main"
function App() {
  return (
    <div className="main">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/education" element={<Education/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
