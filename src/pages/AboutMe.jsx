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
                {/* <h4 className='subTitle'>Every great design begin with an even better story</h4> */}
                {/* <p className='paragraph' >Since 2021, I have been working as a freelance  front-end and backend developer. I've always had a creative side and a logical side to me. When I first learned about web development in college, I knew it would be a good fit. I could create using my artistic side and code using my logical side.</p> */}
                <p className="paragraph">
                I'm a software developer who is passionate about developing web apps that increase an organization's effectiveness and efficiency. 
                </p>
                <p className="paragraph">As a software engineer have a good understanding of web technologies and can write code to produce dependable and user-friendly applications. </p>
                <p className="paragraph">
                I am a skilled communicator, strategic thinker, and imaginative developer who creates software that is tailored to match the organizational demands of a firm, showcasing its key capabilities, and advancing its success.
                </p>
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