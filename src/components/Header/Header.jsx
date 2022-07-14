import React from 'react'
import NavBar from '../NavBar'
import { FaTwitter, FaGithub, FaEnvelopeOpen, FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import {openNav, closeNav} from './app'
import {useTheme, useUpdateTheme} from '../../contexts/ThemeProvider'

function Header() {
  const theme = useTheme()
  const toggleTheme = useUpdateTheme()

  let themeIcon 
  if (theme === true) {
    themeIcon = <FaMoon className='icon' />
  } else {
    themeIcon = <FaSun className='icon'/>
  }
  
  return (
    <header className={`header ${theme ? 'dark' : ''}`}>
      <div className="container">
        <h1 className='heading'>
          <span>Gawusu</span> Razak
        </h1>
        <NavBar />
        <div className='socials'>
          <div className="socials__item"><FaGithub className='icon'/> Github </div> 
          <div className="socials__item"><FaTwitter className='icon'/> Twitter </div>
          <div className="socials__item"><FaEnvelopeOpen className='icon'/></div>
          <div className="socials__item" onClick={() =>toggleTheme()}>{themeIcon}</div>
        </div>

        <nav className='mobile__view--nav'>
          <FaTimes className='icon close' onClick={() => closeNav()}/>
          <ul>
            <li>Home</li>
            <li>About Me</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
          <ul>
            <li className="socials__item"><FaGithub className='icon'/> Github </li> 
            <li className="socials__item"><FaTwitter className='icon'/> Twitter </li>
            <li className="socials__item"><FaEnvelopeOpen className='icon'/></li>
          </ul>
        </nav>
        <div>
          <div className="mobile__toggleTheme" onClick={() =>toggleTheme()}>{themeIcon}</div>
          <FaBars className='icon menu' onClick={() => openNav()} />
        </div>
      </div>
    </header>
  )
}

export default Header