import React from 'react'
import HeroSec from './home-sections/HeroSec'
import AboutSec from './home-sections/AboutSec'
import ServicesSec from './home-sections/ServicesSec'
import PortfolioSec from './home-sections/PortfolioSec' 

function Home() {
  return (
    <>
    <HeroSec/>
    <AboutSec/>
    <ServicesSec/>
    <PortfolioSec/>
    </>
  )
}

export default Home