import React from 'react'
import { skillData } from '../Data/data'
import Skill from '../components/Skill'

function AboutMe() {
  return (
    <div className='aboutMe'>
        <div className="container">            
            <div className='aboutMe__item'>
                <h6 className='paragraph'>Introduce</h6>
                <h3 className='mainTitle'>Hello! I'm Gawusu Razak</h3>
                <h4 className='subTitle'>Every great design begin with an even better story</h4>
                <p className='paragraph' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat corporis earum reprehenderit excepturi molestiae sed sint soluta expedita maxime molestias! Sequi accusamus voluptatem deserunt. Expedita cum, delectus voluptates quis quos quaerat animi pariatur veritatis maiores minima dolore quibusdam sequi asperiores optio dolorum consectetur similique velit aspernatur ab dignissimos deserunt eos.</p>
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