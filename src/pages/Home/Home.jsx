import React from 'react'
import { About, Featurs, Footers, GetStarted, Hero, Navigation } from '../../components'

const Home = () => {
  return (
    <>
      <Navigation />
      <main className='overflow-hidden' >
        <Hero />
        <About />
        <Featurs />
        <GetStarted />
        <Footers />
      </main>
    </>
  )
}

export default Home