import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [expand, setExpand] = useState(false)
    const handleToggle = () => {
        setExpand(!expand)
    }
    const handleClose = () => {
        setExpand(false)
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-black fixed-top py-3">
                <div className="container">
                    <a className="navbar-brand text-white fs-3" href="#" style={{fontFamily:'"Playwrite MX", cursive'}}>Portfolio</a>
                    <button className="navbar-toggler border border-white" onClick={handleToggle} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-expanded={expand} aria-label="Toggle navigation">
                    <i class="fa-solid fa-bars text-white" style={{fontSize:'36px'}}></i>
                    </button>
                    <div className={`offcanvas offcanvas-end text-bg-dark ${expand && 'show'}`} tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel" style={{ width: '250px' }}>
                        <div className="offcanvas-header text-end" >
                            <i class="fa-solid fa-xmark fs-1 p-3" style={{color:'#C741FC',cursor:'pointer'}} onClick={handleClose}></i>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav mb-2 mb-lg-0 ms-auto fs-5 text-center">
                                <li className="nav-item  mx-3">
                                    <Link className="nav-link active text-white" aria-current="page" to='/' style={{ color: '#C741FC' }}>Home</Link>
                                </li>
                                <li className="nav-item mx-3">
                                    <Link className="nav-link nav-anim text-white" to='/about' >About</Link>
                                </li>
                                <li className="nav-item mx-3">
                                    <Link className="nav-link nav-anim text-white" to="/skills" >Skills</Link>
                                </li>
                                <li className="nav-item mx-3">
                                    <Link className="nav-link  nav-anim text-white" to="/projects" >Projects</Link>
                                </li>
                                <li className="nav-item mx-3">
                                    <Link className="nav-link nav-anim text-white" to="/contact" >Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar