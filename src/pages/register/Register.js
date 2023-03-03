import React from 'react';
import './register.css';

const Register = () => {
  return (
      <div className='login'>
          <div className="loginwrappeer">
              <div className="loginleft">
                  <h3 className="loginlogo">vickysocial</h3>
                  <span className="logindesc">
                      Connect with friends and the world around you on vickysocial
                  </span>

              </div>
              <div className="loginright">
                  <div className="loginbox">
                      <input placeholder='Username' className="logininput" />
                      <input placeholder='Email' className="logininput" />
                      <input placeholder='Password' className="logininput" />
                      <input placeholder='Conform password' className="logininput" />
                      <button className="loginbutton">Sign Up</button>
                      <button className="loginregistrationbutton">Log into Account</button>
                  </div>
              </div>
          </div>
          
    </div>
  )
}

export default Register;