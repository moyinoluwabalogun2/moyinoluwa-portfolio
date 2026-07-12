import React, { useEffect, useState } from 'react'
import { Menu, X, Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Work', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setIsOpen(false)

  return (
    <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
      <nav className="nav container">
        <a href="#home" className="brand" onClick={closeMenu} aria-label="Go to homepage">
          <img
            src="/images/mb-logo.png"
            alt="MB logo"
            className="brand-logo-image"
          />

          <span className="brand__text">
            <strong>Balogun</strong>
            <small>Full-Stack Developer</small>
          </span>
        </a>

        <div className="nav__links" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <div className="nav__actions">
          <a href="https://github.com/moyinoluwabalogun2" className="icon-link" aria-label="GitHub profile">
            <Github size={18} />
          </a>

          <a href="https://linkedin.com/in/balogun-moyinoluwa-595973355" className="icon-link" aria-label="LinkedIn profile">
            <Linkedin size={18} />
          </a>

          <a href="moyinoluwabalogun2@gmail.com" className="nav__cta">
            Let’s Talk
            <ArrowUpRight size={16} />
          </a>
        </div>

        <button
          type="button"
          className="nav__toggle"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <div className={`mobile-menu ${isOpen ? 'mobile-menu--open' : ''}`}>
        <div className="mobile-menu__inner container">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}

          <div className="mobile-menu__socials">
            <a href="#" aria-label="GitHub profile">
              <Github size={18} />
              GitHub
            </a>

            <a href="#" aria-label="LinkedIn profile">
              <Linkedin size={18} />
              LinkedIn
            </a>

            <a href="mailto:your-email@example.com" aria-label="Email Balogun">
              <Mail size={18} />
              Email
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar