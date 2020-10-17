import React from 'react'
import {Link} from "react-router-dom"
import "./MainPage_header.css"
import {Link as LinkS} from 'react-scroll';

function MainPage_header() {
    return (
        <div className='main_header'>
            <Link to='/home'>
                <img
                className='main_logo'
                src='logo_banner\LOGO.png'
                alt="LOGO"
                />
            </Link>
            <div className='main__list'>
                <ul>
                    <li>
                        <LinkS to="homeid" style={{textDecoration:'none', color:'whitesmoke'}} smooth={true} duration={1000}> Home </LinkS>
                    </li>
                    <li>
                        <LinkS to="aboutid"  style={{textDecoration:'none',color:'whitesmoke'}} smooth={true} duration={1000}> About </LinkS>
                    </li>
                    <li>
                        <LinkS to="servicesid"  style={{textDecoration:'none',color:'whitesmoke'}} smooth={true} duration={1000}> Services </LinkS> 
                    </li>
                </ul>
            </div>
            <div className='main__nav'>            
                <Link to="/signin" style={{textDecoration: 'none',color:'whitesmoke'}}>
                    <div className='main__option'>
                        Sign In
                    </div>
                </Link>
            </div>
        </div>

    )
}

export default MainPage_header
