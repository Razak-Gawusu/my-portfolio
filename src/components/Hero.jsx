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
                I'm a freelance web developer. I design and code beautiful simple things, and I love what I do.
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