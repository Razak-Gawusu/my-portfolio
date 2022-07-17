import React from 'react'

function NavBar() { 
  
  const scrollToHeader = (e) => {
    e.preventDefault()
    const link = e.target.getAttribute('href')
    document.querySelector(link).scrollIntoView({behavior: 'smooth'})
  }

  return (
    <nav className='nav' onClick={scrollToHeader}>
      <ul className='nav__list'>
        <li className='nav__item'><a className='navLink' href="#home">home</a></li>
        <li className='nav__item'><a className='navLink' href="#aboutMe">about Me</a></li>
        <li className='nav__item'><a className='navLink' href="#projects">Projects</a></li>
        <li className='nav__item'><a className='navLink' href="#contact">Contact</a></li>
      </ul>
    </nav>
  )
}

export default NavBar