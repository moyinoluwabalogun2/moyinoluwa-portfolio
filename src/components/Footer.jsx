import React from 'react'
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <a href="#home" className="footer__brand">
            <span>BMU</span>
            <strong>Balogun Moyinoluwa Umar</strong>
          </a>

          <p>
            Full-Stack Developer building modern web applications, dashboards,
            admin portals, and polished digital products.
          </p>
        </div>

        <div className="footer__links">
          <a href="#projects">Work</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer__socials">
          <a href="https://github.com/moyinoluwabalogun2" aria-label="GitHub profile">
            <Github size={18} />
          </a>

          <a href="https://linkedin.com/in/balogun-moyinoluwa-595973355" aria-label="LinkedIn profile">
            <Linkedin size={18} />
          </a>

          <a href="moyinoluwabalogun2@gmail.com" aria-label="Email Balogun">
            <Mail size={18} />
          </a>

          <a href="#home" aria-label="Back to top">
            <ArrowUp size={18} />
          </a>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>© {currentYear} Balogun Moyinoluwa Umar. All rights reserved.</span>
        <span>Built by moyin.</span>
      </div>
    </footer>
  )
}

export default Footer