import React from 'react'

function Skill(props) {
  return (
    <div className='skills--item'>
      <div className='skills--item__text'>
        <h4 className='heading'>{props.name}</h4>
        <p className='paragraph'>{props.description}</p>
      </div>
            
      {/* <div className='skills--item__image'>
        {image}
      </div> */}

      <div className='image__container'>
        {props.images.map((pic, index) => {
          console.log({pic, index})
          return <img key={index} src={require(`../assets/images/skills/${pic}`)} alt={`php`}/>
        })}
      </div>
    </div>
  )
}

export default Skill