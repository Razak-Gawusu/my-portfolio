import React from 'react'
import {useTheme} from '../../contexts/ThemeProvider'
import NavBar from '../NavBar'
import { FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";

function Footer() {
  const theme = useTheme()
  
  return (
    <footer className={`footer ${theme ? 'dark' : ''}`}>
      <div className="container">
        <h3 className='paragraph'><span>Gawusu</span> Razak</h3>
        <small className='copyright'>&copy; 2022. All Right Reserved</small>
      </div>
    </footer>
  )
}

export default Footer