import React from 'react'
import NavBar from '../components/NavBar'
import {useTheme} from '../contexts/ThemeProvider'
import {FaLinkedin, FaGithub} from 'react-icons/fa'

function Contact() {
  const theme = useTheme()
  const blank = '_blank'
  return (
    <div id='contact' className={`contact ${theme ? 'dark' : ''}`}>
        <div className="container">
            <div className='contact__sayhi'>
                <h3 className='heading'>Let's make something amazing together</h3>
                <h3 className='heading'>Start by <a className='link' href="mailto:gawusur@gmail.com">saying hi</a></h3>
            </div>

            <div className='contact__information'>
                <h6 className='heading'>Information</h6>
                <div className='address'>
                  <h5 className='paragraph'>Nii Okai Street - Ghana</h5>
                  <a className='heading' href="mailto:gawusur@gmail.com">gawusur@gmail.com</a>
                </div>
                <div className='socials'>
                  <a href="https://github.com/razak-gawusu" target={blank}><FaGithub className='icon'/> </a>
                  <a href="https://linkedin.com/in/gawusu-razak-567732174" target={blank}><FaLinkedin className='icon'/></a>
                </div>
                <NavBar />
            </div>
        </div>
    </div>
  )
}

export default Contact