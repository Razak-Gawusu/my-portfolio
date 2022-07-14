import React from 'react'
import {nanoid} from 'nanoid'

function LatestWorks(props) {
  const langArr = props.languages
  const langArrElement = langArr.map(lang => <button key={nanoid()}>{lang}</button>)

  return (
    <>
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
        </div>
    </>
  )
}

export default LatestWorks