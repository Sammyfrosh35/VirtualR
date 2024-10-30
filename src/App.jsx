import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Features from './Components/Features'
import Workflow from './Components/Workflow'
import Pricing from './Components/Pricing'
import Testimonial from './Components/Testimonial'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Hero />
        <Features />
        <Workflow />
        <Pricing />
        <Testimonial />
        <Footer />
      </div>
    </div>
  )
}

export default App