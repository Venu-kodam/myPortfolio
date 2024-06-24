import React from 'react'

const Contact = () => {
    return (
        <div className='contact'>
            <h1 className='text-center eheading' style={{ fontSize: '60px', color: '#9d09e2', paddingTop: '90px' }}>Contact</h1>
            <div className="row p-5">
                <div className="col-md contact-left text-white my-5">
                    <div className="address d-flex flex-column">
                        <div className="icons-container">
                            <div className="icons">
                                <div className="icon d-flex align-items-center gap-4 my-4">
                                    <div className="icon-div">
                                        <i className="fa-solid fa-envelope"></i>
                                    </div>
                                    <p> venukodam1234@gmail.com</p>
                                </div>
                                <div className="icon d-flex align-items-center gap-4 my-4">
                                    <div className="icon-div">
                                        <i className="fa-solid fa-square-phone"></i>
                                    </div>
                                    <p> +91 9347531588</p>
                                </div>
                                <div className="icon d-flex align-items-center gap-4 my-4">
                                    <div className="icon-div">
                                        <i class="fa-solid fa-location-dot"></i>
                                    </div>
                                    <p> Hyderabad,India</p>
                                </div>
                            </div>
                        </div>
                        <div className="social-icons my-4">
                            <a href="https://github.com/Venu-kodam" target='_blank'><i className="fa-brands fa-github"></i></a>
                            <a href="https://www.linkedin.com/in/venusaikodam/" target='_blank'><i className="fa-brands fa-linkedin"></i></a>
                            <a href="#"><i className="fa-brands fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-md contact-right my-5">
                    <form>
                        <div class="form-floating mb-3">
                            <input type="email" class="form-control" id="floatingInput" placeholder="Enter your Name" />
                            {/* <label for="floatingInput">Name</label> */}
                        </div>
                        <div class="form-floating mb-3">
                            <input type="password" class="form-control" id="floatingPassword" placeholder="Email" />
                            {/* <label for="floatingPassword">Email</label> */}
                        </div>
                        <div class="form-floating mb-3">
                            <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea" style={{ height: '150px' }}></textarea>
                            {/* <label for="floatingTextarea">Your Message</label> */}
                        </div>
                        <button type="button" class="btn submit-btn">Submit</button>
                    </form>
                </div>
            </div>
            <div className="copyright text-center text-white">
                <p>Copyright &copy; Made with <span><i class="fa-solid fa-heart" style={{ color: 'red' }}></i></span> by Venusai</p>
            </div>
        </div>
    )
}

export default Contact