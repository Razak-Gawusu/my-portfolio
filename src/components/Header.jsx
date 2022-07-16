import React from 'react'
import NavBar from './NavBar'
import { FaTwitter, FaGithub, FaEnvelopeOpen, FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import {useTheme, useUpdateTheme} from '../contexts/ThemeProvider'

function Header() {
  const theme = useTheme()
  const toggleTheme = useUpdateTheme()

  function openNav() {
    document.querySelector(".mobile__view--nav").style.width = '50vw';    
  }

  function closeNav(){
    document.querySelector(".mobile__view--nav").style.width = '0';
  }

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
            <li><a className='navLink' href="#home">home</a></li>
            <li><a className='navLink' href="#aboutMe">about Me</a></li>
            <li><a className='navLink' href="#projects">projects</a></li>
            <li><a className='navLink' href="#contact">contact</a></li>
          </ul>
          <ul>
            <li className="socials__item"><FaGithub className='icon'/> Github </li> 
            <li className="socials__item"><FaTwitter className='icon'/> Twitter </li>
            <li className="socials__item"><FaEnvelopeOpen className='icon'/></li>
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