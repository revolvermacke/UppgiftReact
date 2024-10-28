import React from 'react'
import BrandSection from './BrandSection'
import AppFeatures from './AppFeatures'
import Work from './Work'
import MoneyTransfer from './MoneyTransfer'
import Clients from './Clients'
import FaqPage from './FaqPage'
import SubscribePage from './SubscribePage'
import Hero from './Hero'

const Main = () => {
  return (
    <main>
        <Hero />
        <BrandSection />
        <AppFeatures />
        <Work />
        <MoneyTransfer />
        <Clients />
        <FaqPage />
        <SubscribePage />
    </main>
  )
}

export default Main