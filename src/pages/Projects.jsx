import React from 'react'
import LatestWorks from '../components/LatestWorks'
import { latestWorksData } from '../Data/data'
import {useTheme} from '../contexts/ThemeProvider'

function Projects() {
    const theme = useTheme()
    const blank ='_blank'
    
  return (
    <div id='projects' className={`projects ${theme ? 'dark' : ''}`}>
        <div className='container'>
            <h3 className='mainTitle'>Latest Works</h3>
            <p className='paragraph'>Perfect solutions for digital experience</p>
            <div className='projects__works'>
                {latestWorksData.map((work) => (
                    <LatestWorks
                        key={work.id}
                        title={work.title}
                        languages={work.languages}
                        image={work.img}
                        webAddress={work.webAddress}
                        codeAddress={work.codeAddress}
                    />
                ))}
            </div>
            <a className='link' href="https://github.com/razak-gawusu" target={blank}>More projects</a>
        </div>
    </div>
  )
}

export default Projects