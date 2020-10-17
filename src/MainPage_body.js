import React from 'react'
import "./MainPage_body.css";
import MainPage_header from "./MainPage_header";
import {Link} from "react-router-dom"
import Footer from "./Footer"


function MainPage_body() {
    return (
        <div>
            <MainPage_header/>
            <div>
                <div className="body__container">  
                    <div className="home" id="homeid">
                        <img src="logo_banner/fresh_vegetables.png" alt="plz"/>
                        <div className="home__intro">
                            <p>Welcome to BibhBazaar</p>
                             <Link to="./home" style={{textDecoration:'none'}}><button className="btn">Order Now</button> </Link> 

                        </div>
                    </div>
                    
                    <div className="about" id="aboutid">
                        <h3 >
                            Why People Choose Us
                        </h3>
                        <div className="about_info">
                            <div className="fast__delievery">
                                <img src="logo_banner/fast_delievery.png" alt=""/>
                                <p>Fast and free delivery</p>
                            </div>
                            
                            <div className="convenient">
                                <img src="logo_banner/services.png" alt=""/>
                                <p>Convenient & Quick</p>
                            </div>
                            
                            <div className="fresh">
                                <img src="logo_banner/fresh_vegetables.png" alt=""/>
                                <p>Freshly Picked</p>
                            </div>
                            
                        </div>
                        <br/> <br/>
                    </div>
                        <div className="service_content">
                            <h3>Our Services</h3>
                            <div className="services__info">
                                <div className="services" id="servicesid">
                                    <img src="logo_banner/services1.png" alt="" />
                                    <p>
                                    BibhBazaar  is an online shop in Dhaka, Bangladesh.
                                    We believe time is valuable to our fellow Dhaka residents, 
                                    and that they should not have to waste hours in traffic, 
                                    bad weather and wait in line just to buy daily basic necessities.
                                    This is why BibhBazaar delivers everything you need right at your door-step and 
                                    at no additional cost.
                                    </p>
                                </div>
                            </div>
                        </div>
                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default MainPage_body;
