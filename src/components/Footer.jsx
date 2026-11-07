import React from 'react'
import {
  ArrowUp,
  Github,
  Linkedin,
  Mail,
} from 'lucide-react'

const githubUrl = 'https://github.com/moyinoluwabalogun2'

const linkedinUrl =
  'https://linkedin.com/in/balogun-moyinoluwa-595973355'

const emailUrl = 'mailto:moyinoluwabalogun2@gmail.com'

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
            Full-Stack Developer building modern web
            applications, dashboards, admin portals, and
            polished digital products.
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
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
          >
            <Github size={18} />
          </a>

          <a
            href={linkedinUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
          >
            <Linkedin size={18} />
          </a>

          <a
            href={emailUrl}
            aria-label="Email Balogun"
          >
            <Mail size={18} />
          </a>

          <a href="#home" aria-label="Back to top">
            <ArrowUp size={18} />
          </a>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>
          © {currentYear} Balogun Moyinoluwa Umar. All rights
          reserved.
        </span>

        <span>Built by Moyin.</span>
      </div>
    </footer>
  )
}

export default Footer