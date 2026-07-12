/* src/pages/AboutPage.jsx */
import React from 'react'
import About from '../components/About'
import Experience from '../components/Experience'
import Skills from '../components/Skills'

const AboutPage = () => {
  return (
    <div style={{ paddingTop: '80px' }}>
      <About />
      <Experience />
      <Skills />
    </div>
  )
}

export default AboutPage