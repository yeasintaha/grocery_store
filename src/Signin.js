import React from 'react'
import Header from "./Header"
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';
import "./Signin.css"

function Signin() {
    return ( 
        <div>
            <Header/>
            <div class="signin">
                <h1>Sign in</h1>
                <div class="textbox">
                    <PersonIcon/>
                    <input type="text" placeholder="Username"/>
                </div>

                <div class="textbox">
                    <LockIcon/>
                    <input type="password" placeholder="Password"/>
                </div>

                <input type="button" class="btn" value="Sign in"/>
            </div>
        </div>
    )
}

export default Signin;
