import React from 'react';
import StayCurrentPortraitIcon from '@material-ui/icons/StayCurrentPortrait';
import EmailIcon from '@material-ui/icons/Email';
import FacebookIcon from '@material-ui/icons/Facebook';
import "./Footer.css"

function Footer() {
    return (
        <div className="footer">                    
            <div className="contact__us">
                <h2>Contact Us</h2>
                <div className="mobile__number"><StayCurrentPortraitIcon/><h3 color="white">  +880 155991122</h3> </div>
                <div className="email"><EmailIcon/>  <h3> bibhbazaar@gmail.com</h3> </div>
                <div className="facebook"><FacebookIcon/> <h3> BibhBazaar</h3></div>                       
            </div>  
        </div> 
    )
}

export default Footer;
