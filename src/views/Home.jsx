import React from 'react'
import Hero from '../components/Hero'
import BrandSection from '../components/BrandSection'
import AppFeatures from '../components/AppFeatures'
import Work from '../components/Work'
import MoneyTransfer from '../components/MoneyTransfer'
import Clients from '../components/Clients'
import FaqPage from '../components/FaqPage'
import SubscribePage from '../components/SubscribePage'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Home = () => {
  return (
    <>
    <div className='gradient-wrapper'>
      <Header />
      <Hero />
    </div>
      <BrandSection />
      <AppFeatures />
      <Work />
      <MoneyTransfer />
      <Clients />
      <FaqPage />
      <SubscribePage />
      <Footer />
    </>
  )
}

export default Home