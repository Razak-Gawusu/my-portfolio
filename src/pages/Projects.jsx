import React from 'react'
import LatestWorks from '../components/LatestWorks'
import { latestWorksData } from '../Data/data'

function Projects() {
  return (
    <div className='projects'>
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
                    />
                ))}
            </div>
            <a className='link' href="kjfdkjk">all projects</a>
        </div>
    </div>
  )
}

export default Projects