import React from 'react'
import {useTheme} from '../contexts/ThemeProvider'

function Hero() {
    const theme = useTheme();
    
  return (
    <div className={`hero ${theme ? 'dark' : ''}`}>
        <div className='container'>
            <div className='hero__text'>
                <button className='btn'>Web Developer</button>
                <h1 className='mainTitle'>
                    Talk is cheap. Show me the code
                </h1>
                <p className='paragraph'>
                    I design and code beautiful simple things, and I love what I do.
                </p>
                <a className='link' href="mailto:gawusur@gmail.com"> let's chat!</a>
            </div>

            <div className='hero__image'>
                <img src={`./images/gawusu.jpg`} alt="profile" />
            </div>
        </div>
    </div>
   
  )
}

export default Hero