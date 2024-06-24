import React from 'react'

const Projects = () => {
    return (
        <div>
            <h1 className='text-center eheading' style={{ fontSize: '60px', color: '#9d09e2',paddingTop:'90px' }}>Projects</h1>
            <div class="cards d-flex align-items-center justify-content-center gap-4 flex-wrap" style={{padding:'100px 0'}}>
                <div class="card projects" style={{ width: '20rem' }}>
                    <img src="https://venu-kodam.github.io/Portfolio/images/netflix-symbol-black.png" class="card-img-top" alt="..." width={350} height={350} />
                    <div class="layer">
                        <h5>Netflix Clone(React)</h5>
                        <p>A Netflix clone project is a web application that replicates the functionality and
                            features
                            of the original Netflix platform. The project involves creating a user-friendly
                            interface.
                        </p>
                        <a href="https://github.com/Venu-kodam/Netflix-Clone-React" target="_blank"><i
                            class="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                </div>
                <div class="card projects" style={{ width: '20rem' }}>
                    <img src="https://img.freepik.com/free-psd/3d-icon-weather-conditions-with-rain-lightning_23-2150108739.jpg?size=626&ext=jpg&ga=GA1.1.1572456733.1718803568&semt=sph" class="card-img-top" alt="..." width={350} height={350} />
                    <div class="layer">
                        <h5>Weather Application React</h5>
                        <p>The Weather Application is a React-based project that provides users with real-time weather
                            information and a 7-day forecast for their selected location.</p>
                        <a href="https://github.com/Venu-kodam/Weather-App" target="_blank"><i
                            class="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                </div>
                <div class="card projects" style={{ width: '20rem' }}>
                    <img src="https://img.freepik.com/free-psd/3d-rendering-buy-online-icon_23-2151563893.jpg?t=st=1718804818~exp=1718808418~hmac=4debecc10d4f34e571178670e76192b313c02fd138ddb5c0f699233223861ccb&w=740" class="card-img-top" alt="..." width={350} height={350} />
                    <div class="layer">
                        <h5>React Shopping Cart</h5>
                        <p>Shopping Cart is a e-commerce cart management system designed to enhance the online shopping
                            experience. Developed using the Redux Toolkit, this project ensures state management is
                            efficient.</p>
                        <a href="https://github.com/Venu-kodam/Shopping-cart" target="_blank">
                            <i class="fa-solid fa-arrow-up-right-from-square"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects