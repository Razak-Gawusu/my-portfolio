import React from 'react'
import { skillData } from '../Data/data'
import Skill from '../components/Skill'
import {useTheme} from '../contexts/ThemeProvider'

function AboutMe() {
    const theme = useTheme()
  return (
    <div id='aboutMe' className={`aboutMe ${theme ? 'dark' : ''}`}>
        <div className="container">            
            <div className='aboutMe__item'>
                <h6 className='paragraph'>Introduce</h6>
                <h3 className='mainTitle'>Hello! I'm Gawusu Razak</h3>
                <h4 className='subTitle'>Every great design begin with an even better story</h4>
                <p className='paragraph' >I've been a junior software engineer with First Technology for just over a year. In the short time I've been there, I've already contributed to over a dozen projects and helped manage one project for a long-standing client of the company.</p>
                <p className='paragraph' >I had a two-year internship with Mobile First prior to this position, during which I improved my abilities in web application development.</p>
            </div>
            
            <div className='aboutMe__item'>
                {skillData.map((skill) => (
                    <Skill 
                        key={skill.id} 
                        name={skill.name}
                        description={skill.description}
                        number={skill.number}
                    />
                ))}
            </div>
        </div>
    </div>
  )
}

export default AboutMe