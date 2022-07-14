import React from 'react'
import NavBar from '../NavBar'
import { FaTwitter, FaGithub, FaEnvelopeOpen, FaBars, FaTimes } from "react-icons/fa";
import {openNav, closeNav} from './app'

function Header() {
  
  return (
    <>
      <div className='header--wrapper'>
        <div className="container">
          <div className='header'>
            <div className='logo'><span>Gawusu</span> Razak</div>
            <div className='nav--wrapper'>
              <div className='nav--wrapper__container'>
                <NavBar />
                <div className='socials'>
                  <div><FaTwitter className='socials__icon'/> twitter</div>
                  <div><FaGithub className='socials__icon'/> github</div>
                  <div className='socials__icon--mail' ><FaEnvelopeOpen className='socials__mail' /></div>
                </div>
              </div>
              <FaTimes  className='closeNav' onClick={closeNav}/>
            </div>
            <div className='header__nav--hamburger' onClick={openNav}>
              <FaBars />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header