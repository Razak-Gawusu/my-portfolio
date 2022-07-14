import React from 'react'
import { FaCode, FaDatabase } from "react-icons/fa";


function Skill(props) {
  const skill = props.name
  let image
  if (skill === 'Front-End'){
    image = <FaCode />
  } else {
    image = (<FaDatabase />)
  }

  return (
    <div className='work__skills--item'>
      <div className='work__skills--item__text'>
        <h4 className='heading'>{props.name}</h4>
        <p>{props.description}</p>
        <h6>{props.number} projects</h6>
      </div>
            
      <div className='work__skills--item__image'>
        <h6>{image}</h6>
      </div>
    </div>
  )
}

export default Skill