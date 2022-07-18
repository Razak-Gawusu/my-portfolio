import React from 'react'
import {nanoid} from 'nanoid'

function LatestWorks(props) {
  const blank ='_blank'
  const langArr = props.languages
  const langArrElement = langArr.map(lang => <button key={nanoid()}>{lang}</button>)

  return (
    <a className='project--link' href={props.webAddress} target={blank}>
        <div className='projects__works--item'>
            <div className='projects__works--item__text'>
                <h4 className='heading'>{props.title}</h4>
                <div className='langUsed'>
                  {langArrElement}
                </div> 
            </div>

            <div className='projects__works--item__image'>
                <img 
                  src={`./images/latest-works/${props.image}`}
                  alt="projectImage" 
                />
            </div>
            <a className='btn' href={props.codeAddress}>View Code</a>
        </div>
    </a>
  )
}

export default LatestWorks