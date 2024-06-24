import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div className="row" >
        <div className="col-md-4 containerleft">
        </div>
        <img src="./src/assets/mypiccrop.jpg" className='header-img' style={{width:'400px',height:'400px',borderRadius:'50%'}}/>
        <div className="col-md-8 container-right  ">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-12 content">
              <h5 className='heading my-3'>Full Stack Web Developer</h5>
              <h1 className=' fw-bolder' style={{color:'#9d09e2',fontSize:'50px'}}>Venusai Kodam</h1>
              <p className='p'>Welcome to my portfolio! I am a passionate  Fullstack developer <br /> with expertise in creating dynamic and responsive websites. <br /> Explore my projects to see innovative solutions.</p>
              <div className="buttons d-flex align-items-center my-5 gap-4">
                <a type="button" href='./src/assets/Venu resume_WebDevelopment.pdf' className="btn me-5 download-btn py-3 px-5" download>Resume</a>
                <Link type="button" className="btn me-5 contact-btn  py-3 px-5" to="/contact">Contact</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default Home