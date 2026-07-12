import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Certificates from './components/Certificates'
import Lab from './components/Lab'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )

    document.querySelectorAll('[data-reveal]').forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Projects />
        <About />
        <Experience />
        <Skills />
        <Certificates />
        <Lab />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default App