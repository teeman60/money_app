import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import '~bootstrap'
import './App.scss';
// import '../node_modules'


const Signup = () => {
return (
            <div>
              <ul className="nav">
                <li onclick="showLogin()">Login</li>
                <li onclick="showSignup()">Sign up</li>
                <li onclick="showForgotPassword()">Forgot password</li>
                <li onclick="showSubscribe()">Subscribe</li>
                <li onclick="showContactUs()">Contact us</li>
              </ul>
              <div className="wrapper">
                <div className="rec-prism">
                  <div className="face face-top">
                    <div className="content">
                      <h2>Subscribe</h2>
                      <small>Enter your email so we can send you the latest updates!</small>
                      <form onsubmit="event.preventDefault()">
                        <div className="field-wrapper">
                          <input type="text" name="email" placeholder="email" />
                          <label>e-mail</label>
                        </div>
                        <div className="field-wrapper">
                          <input type="submit" onclick="showThankYou()" />
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="face face-front">
                    <div className="content">
                      <h2>Sign in</h2>
                      <form onsubmit="event.preventDefault()">
                        <div className="field-wrapper">
                          <input type="text" name="username" placeholder="username" />
                          <label>username</label>
                        </div>
                        <div className="field-wrapper">
                          <input type="password" name="password" placeholder="password" autoComplete="new-password" />
                          <label>password</label>
                        </div>
                        <div className="field-wrapper">
                          <input type="submit" onclick="showThankYou()" />
                        </div>
                        <span className="psw" onclick="showForgotPassword()">Forgot Password? </span>
                        <span className="signup" onclick="showSignup()">Not a user?  Sign up</span>
                      </form>
                    </div>
                  </div>
                  <div className="face face-back">
                    <div className="content">
                      <h2>Forgot your password?</h2>
                      <small>Enter your email so we can send you a reset link for your password</small>
                      <form onsubmit="event.preventDefault()">
                        <div className="field-wrapper">
                          <input type="text" name="email" placeholder="email" />
                          <label>e-mail</label>
                        </div>
                        <div className="field-wrapper">
                          <input type="submit" onclick="showThankYou()" />
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="face face-right">
                    <div className="content">
                      <h2>Sign up</h2>
                      <form onsubmit="event.preventDefault()">
                        <div className="field-wrapper">
                          <input type="text" name="email" placeholder="email" />
                          <label>e-mail</label>
                        </div>
                        <div className="field-wrapper">
                          <input type="password" name="password" placeholder="password" autoComplete="new-password" />
                          <label>password</label>
                        </div>
                        <div className="field-wrapper">
                          <input type="password" name="password2" placeholder="password" autoComplete="new-password" />
                          <label>re-enter password</label>
                        </div>
                        <div className="field-wrapper">
                          <input type="submit" onclick="showThankYou()" />
                        </div>
                        <span className="singin" onclick="showLogin()">Already a user?  Sign in</span>
                      </form>
                    </div>
                  </div>
                  <div className="face face-left">
                    <div className="content">
                      <h2>Contact us</h2>
                      <form onsubmit="event.preventDefault()">
                        <div className="field-wrapper">
                          <input type="text" name="name" placeholder="name" />
                          <label>Name</label>
                        </div>
                        <div className="field-wrapper">
                          <input type="text" name="email" placeholder="email" />
                          <label>e-mail</label>
                        </div>
                        <div className="field-wrapper">
                          <textarea placeholder="your message" defaultValue={""} />
                          <label>your message</label>
                        </div>
                        <div className="field-wrapper">
                          <input type="submit" onclick="showThankYou()" />
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="face face-bottom">
                    <div className="content">
                      <div className="thank-you-msg">
                        Thank you!
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        )};



export default Signup;