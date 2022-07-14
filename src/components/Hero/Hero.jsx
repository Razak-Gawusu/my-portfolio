import React from 'react'

function Hero() {
  return (
    <>
        <div className='hero--wrapper'>
        <div className='container'>
            <div className='hero'>
                <div className='hero__text'>
                    <button className='hero__text--title'>Full-Stack Developer</button>
                    <h1 className='hero__text--primary'>
                        Talk is cheap. Show me the code
                    </h1>
                    <p className='hero__text--secondary'>
                        I design and code beautiful simple things, and I love what I do.
                    </p>
                    <a className='hero__link' href=""> let's chat!</a>
                </div>
                <div className='hero__image'>
                    <img 
                        src={`./images/gawusu.jpg`} 
                        alt="profile" />
                </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default Hero