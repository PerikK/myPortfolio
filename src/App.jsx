import { useState } from 'react'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Home from './components/Home.jsx'
import Navbar from './components/Navbar.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'


function App() {

  return (
      <div className='bg-yellow-600 text-black text-5xl font-extrabold p-5 border-8 border-black border-dashed rounded-3xl ' >
              <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>


  )
}

export default App
