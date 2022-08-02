import React, {useRef} from 'react'
import NavBar from './NavBar'
import { FaLinkedin, FaGithub, FaEnvelopeOpen, FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import {useTheme, useUpdateTheme} from '../contexts/ThemeProvider'

function Header() {
  const blank ='_blank'
  const theme = useTheme()
  const toggleTheme = useUpdateTheme()

  const mobileNav = useRef()
  function openNav() {
    mobileNav.current.style.width = '250px';    
  }

  function closeNav(){
    mobileNav.current.style.width = '0';
  }

  let themeIcon 
  if (theme === false) {
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
          <div className="socials__item"><FaGithub className='icon'/> <a href="https://github.com/razak-gawusu" target={blank}>github</a></div> 
          <div className="socials__item"><FaLinkedin className='icon'/> <a href="https://linkedin.com/in/gawusu-razak-567732174" target={blank}>linkedin</a> </div>
          <div className="socials__item"><a href="mailto:gawusur@gmail.com"><FaEnvelopeOpen className='icon'/></a></div>
          <div className="socials__item" onClick={() =>toggleTheme()}>{themeIcon}</div>
        </div>

        <nav className='mobile__view--nav' ref={mobileNav}>
          <FaTimes className='icon close' onClick={() => closeNav()}/>
          <ul>
            <li><a className='navLink' href="#home">home</a></li>
            <li><a className='navLink' href="#aboutMe">about Me</a></li>
            <li><a className='navLink' href="#projects">projects</a></li>
            <li><a className='navLink' href="#contact">contact</a></li>
          </ul>
          <ul>
            <li className="socials__item"><FaGithub className='icon'/> <a className='navLink' href="https://github.com/razak-gawusu" target={blank}>github</a> </li> 
            <li className="socials__item"><FaLinkedin className='icon'/> <a className='navLink' href="https://github.com/razak-gawusu" target={blank}>linkedin</a></li>
            <li className="socials__item"><a href="mailto:gawusur@gmail.com"><FaEnvelopeOpen className='icon'/></a></li>
          </ul>
        </nav>

        <div className='mobile__toggleTheme'>
          <div className="mobile__toggleTheme--icon" onClick={() =>toggleTheme()}>{themeIcon}</div>
          <FaBars className='icon menu' onClick={() => openNav()} />
        </div>
      </div>
    </header>
  )
}

export default Header