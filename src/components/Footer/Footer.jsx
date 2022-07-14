import React from 'react'
import NavBar from '../NavBar'
import { FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className='footer--wrapper'>
        <div className="container">
          <div className="footer">
            <div className='footer__item footer__item--primary'>
              <div className='sayhi'>
                <h3>Let's make something amazing together</h3>
                <h3>Start by <span>saying hi</span></h3>
              </div>

              <div className='information'>
                <h6>Information</h6>
                <div className='address'>
                  <h5>116 Fairground Rd. FL 3290, USA</h5>
                  <h4>gawusur@gmail.com</h4>
                </div>
                <NavBar />
              </div>
            </div>

            <div className='footer__item footer__item--secondary'>
              <div className='logo'>
                <h3><span>Gawusu</span> Razak</h3>
                <small className='copyright'>&copy; 2022. All Right Reserved</small>
              </div>
              <ul className='footer__socials'>
                <li><FaTwitter /></li>
                <li><FaGithub /></li>
                <li><FaInstagram /></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer