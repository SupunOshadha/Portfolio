import React from 'react'
import Hero from './components/Hero'
import NavBar from './components/NavBar'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'

const App = () => {
  return (
    <>
        <NavBar />
        <Hero />
        <About />
        <Projects />
        <Contact />
    </>
  )
}

export default App