import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js';
import { Link } from 'react-router-dom'
import profile from '../assets/mypicc.jpg'
import resume from '../assets/Venu resume_WebDevelopment.pdf'

const Home = () => {
  // const el = useRef(null);
  useEffect(() => {
    const typed = new Typed("#designation", {
      strings: ['Full Stack Developer...', 'Web Developer...','Programmer...','Full Stack Developer...'],
      typeSpeed: 60,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <>
      <div className="row" >
        <div className="col-md-4 containerleft">
        </div>
        <img src={profile} className='header-img' style={{width:'400px',height:'400px',borderRadius:'50%'}}/>
        <div className="col-md-8 container-right  ">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-12 content">
              <h5 className='hello my-3' style={{color: '#eaeaea'}}>Hello, It's me</h5>
              <h1 className=' fw-bolder name' style={{color:'#9d09e2',fontSize:'50px'}}>Venusai Kodam</h1>
              <span className='heading my-3'  style={{color: '#eaeaea',fontSize:'30px'}}>And I'm a  </span> <span id="designation"></span>
              <p className='p desc'>Welcome to my Portfolio! I am a passionate  Fullstack developer <br /> with expertise in creating dynamic and responsive websites. <br /> Explore my projects to see innovative solutions.</p>
              <div className="buttons d-flex align-items-center my-5 gap-4">
                <a type="button" href={resume} className="btn me-5 download-btn py-3 px-5" download>Resume</a>
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