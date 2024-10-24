import React from 'react'
import Header from './Header'
import Hero from './Hero'
import Main from './Main'

const LinearGradient = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className='gradient-wrapper'>
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Hero />
    </div>
  )
}

export default LinearGradient