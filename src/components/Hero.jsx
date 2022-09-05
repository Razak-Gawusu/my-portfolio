import React from 'react'
import {useTheme} from '../contexts/ThemeProvider'

function Hero() {
    const theme = useTheme();
    
  return (
    <div className={`hero ${theme ? 'dark' : ''}`}>
        <div className='container'>
            <div className='hero__text'>
                
                <h1 className='mainTitle'>
                    Hi. I'm Gawusu
                </h1>
                <p className='paragraph'>
                I'm a Software Engineer who is passionate about developing web apps that increase an organization's effectiveness and efficiency.
                </p>
                
                <a className='link' href="mailto:gawusur@gmail.com"> Get in Touch</a>
                
            </div>

            <div className='hero__image'>
                <img src={`./images/gawusu.jpg`} alt="profile" />
            </div>
        </div>
    </div>
   
  )
}

export default Hero