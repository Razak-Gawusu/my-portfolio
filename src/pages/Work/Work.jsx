import React from 'react'
import Skill from '../../components/Skill'
import LatestWorks from '../../components/LatestWorks'
import { skillData, latestWorksData } from '../../Data/data'

function Work() {
    const [skills, setSkills] = React.useState(skillData)
    const [latestWorks, setLatesWorks] = React.useState(latestWorksData)

    const skillsElement = skills.map(skill => {
        return(
            <Skill 
                key={skill.id} 
                name={skill.name}
                description={skill.description}
                number={skill.number} 
            />
        )
    })

    const latestWorksElement = latestWorks.map(work => {
        return(
            <LatestWorks
                key={work.id}
                title={work.title}
                languages={work.languages}
                image={work.img}
            />
        )
    })


  return (
    <>  
        <div className='work--wrapper'>
            <div className="container">
                <div className="work">
                    <div className='work__skills'>
                        {skillsElement}
                    </div>
                    
                    <div className='work__intro'>
                        <h6>Introduce</h6>
                        <h3>Hello! I'm Gawusu Razak</h3>
                        <h4>Every great design begin with an even better story</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat corporis earum reprehenderit excepturi molestiae sed sint soluta expedita maxime molestias! Sequi accusamus voluptatem deserunt. Expedita cum, delectus voluptates quis quos quaerat animi pariatur veritatis maiores minima dolore quibusdam sequi asperiores optio dolorum consectetur similique velit aspernatur ab dignissimos deserunt eos.</p>
                    </div>
                </div>

                <div className='latest__works'>
                    <h3 className='heading'>Latest Works</h3>
                    <p>Perfect solutions for digital experience</p>
                    <div className='latest__works--cards'>
                        {latestWorksElement}
                    </div>
                    <a href="#">all projects</a>
                </div>
            </div>
        </div>
    </>
  )
}

export default Work