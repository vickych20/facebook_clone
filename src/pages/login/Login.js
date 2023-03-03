import React from 'react';
import './login.css';

const Login = () => {
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
                      <input placeholder='Email' className="logininput" />
                      <input placeholder='Password' className="logininput" />
                      <button className="loginbutton">Log In</button>
                      <span className="loginforgat">Forgot Password</span>
                      <button className="loginregistrationbutton">Create a New Account</button>
                  </div>
              </div>
          </div>
          
    </div>
  )
}

export default Login