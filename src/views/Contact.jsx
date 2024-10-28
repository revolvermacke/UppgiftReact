import React from 'react'

import LocationPage from '../components/LocationPage'
import HeroContact from '../components/HeroContact'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Contact = () => {
  return (
    <>
    <div className='heroContact bgLightGray'>
        <Header />
        <HeroContact />
        <LocationPage />
        <Footer />
    </div>
    </>
  )
}

export default Contact