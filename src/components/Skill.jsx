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
    <div className='skills--item'>
      <div className='skills--item__text'>
        <h4 className='heading'>{props.name}</h4>
        <p className='paragraph'>{props.description}</p>
        <h6 className='link'>{props.number} projects</h6>
      </div>
            
      <div className='skills--item__image'>
        {image}
      </div>
    </div>
  )
}

export default Skill