/* src/pages/Home.jsx */
// Home page component - exports the main sections
import React from 'react'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import About from '../components/About'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import Certificates from '../components/Certificates'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <>
      <Hero />
      <Projects />
      <About />
      <Experience />
      <Skills />
      <Certificates />
      <Contact />
    </>
  )
}

export default Home