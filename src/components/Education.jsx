import React from 'react'
import eduPic from '../assets/education-img.png'
const Education = () => {
    return (
        <div className='education' style={{ height: '100%' }}>
            <div className="row align-items-center justify-content-center gap-4">
                <div className="col-md-6 col-sm-10 col-10 education-items text-white">
                    <h1 className="education-heading eheading" style={{ fontSize: '60px', color: '#9d09e2' }}>Education</h1>
                    <div className="education-item my-4 p-3 d-flex align-items-center gap-3" >
                        <div className="edu-img">
                            <i className="fa-solid fa-graduation-cap"></i>
                        </div>
                        <div className="education-desc">
                            <p>2019-2023</p>
                            <h6>Bachelors of Technology</h6>
                            <h6>Malla Reddy Institute of Technology and Science</h6>
                        </div>

                    </div>
                    <div className="education-item my-4 p-3  d-flex align-items-center gap-3">
                        <div className="edu-img">
                            <i className="fa-solid fa-graduation-cap"></i>
                        </div>
                        <div className="education-desc">
                            <p>2017-2019</p>
                            <h6>Intermediate</h6>
                            <h6>Saisri Junior College</h6>
                        </div>
                    </div>
                    <div className="education-item my-4 p-3  d-flex align-items-center gap-3">
                        <div className="edu-img">
                            <i className="fa-solid fa-graduation-cap"></i>
                        </div>
                        <div className="education-desc">
                            <p>2017</p>
                            <h6>Secondary School</h6>
                            <h6>ZP High School</h6>
                        </div>
                    </div>
                </div>
                <div className=" col-md-4 col-sm-10 col-10 education-img">
                    <img src={eduPic} alt="" width={400} height={350} />
                </div>
            </div>
        </div>
    )
}

export default Education