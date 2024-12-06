import React from 'react'
import Navbar from './components/navbar/page'
import Hero from './components/hero/page'
import About from './components/about/page'
import Skills from './components/skills/page'
import Projects from './components/projects/page'
import Contact from './components/contact/page'

const Portfolio = () => {
  return (
    <div>
   <Navbar/>
   <Hero/>
   <About/>
   <Skills/>
   <Projects/>
   <Contact/>
   <p className='text-center py-10'><span>&copy;Shahid Ali.All rights reserved</span></p>
   
  
  
    </div>
  )
}

export default Portfolio
