import './register.css';

import React from 'react'

export default function () {
  return (
    <div className="login">
    <div className="loginWrapper">
        <div className="loginCenter">
            <div className="loginForm">
                <span className="connectLogin">Connect</span>
                <span className="signupText">SignUp to access Connect</span>
                <input type="text" className="emailLogin input" placeholder='Email' />
                <input type="text" className="username input" placeholder='Username'/>
                <input type="password" className="passwordLogin input" placeholder='Password'/>
                <span className="loginButton">Sign Up</span>
                <span className='signupLogin'>Already have an account? <span className="signupSpan">Login</span></span>
            </div>
        </div>
    </div>
  </div>
  )
}
