import { useState } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Card from './components/Card'
import MidSection from './components/MidSection'
import Footer from './components/Footer'

function App() {

  return (
    <div>
      <Navbar />
      <hr  />
      <HeroSection />
      <hr />
      <MidSection />
      <hr />
      <Footer />
    </div>
  )
}

export default App
