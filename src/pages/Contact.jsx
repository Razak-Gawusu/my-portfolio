import React from 'react'
import NavBar from '../components/NavBar'
import {useTheme} from '../contexts/ThemeProvider'

function Contact() {
  const theme = useTheme()
  return (
    <div id='contact' className={`contact ${theme ? 'dark' : ''}`}>
        <div className="container">
            <div className='contact__sayhi'>
                <h3 className='heading'>Let's make something amazing together</h3>
                <h3 className='heading'>Start by <span className='link'>saying hi</span></h3>
            </div>

            <div className='contact__information'>
                <h6 className='heading'>Information</h6>
                <div className='address'>
                  <h5 className='paragraph'>116 Fairground Rd. FL 3290, USA</h5>
                  <h4 className='heading'>gawusur@gmail.com</h4>
                </div>

                <NavBar />
            </div>
        </div>
    </div>
  )
}

export default Contact