import React, { useEffect, useState } from 'react'
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Code2,
  ServerCog,
  LayoutDashboard,
  Sparkles,
  ShieldCheck,
  Cpu,
  MousePointer2,
  Layers3,
} from 'lucide-react'

const stackItems = [
  'React',
  'JavaScript',
  'Python',
  'FastAPI',
  'Firebase',
  'Firestore',
  'Tailwind CSS',
  'Git',
  'Netlify',
  'Vercel',
]

const rotatingWords = [
  'web apps',
  'SaaS dashboards',
  'admin portals',
  'full-stack products',
  'digital experiences',
  'sales pages',
]

const heroCards = [
  {
    title: 'Frontend UI',
    text: 'Responsive interfaces with clean layouts and polished interactions.',
    Icon: Code2,
  },
  {
    title: 'Backend Logic',
    text: 'APIs, data flow, authentication logic, and practical app structure.',
    Icon: ServerCog,
  },
  {
    title: 'Dashboards',
    text: 'Admin portals, SaaS screens, analytics cards, and workflow systems.',
    Icon: LayoutDashboard,
  },
  {
    title: 'Product Polish',
    text: 'Spacing, hierarchy, motion, and details that make apps feel premium.',
    Icon: Sparkles,
  },
  {
    title: 'Delivery Ready',
    text: 'Structured builds, clear decisions, testing, deployment, and continuous improvement.',
    Icon: Layers3,
  },
]

function Hero() {
  const [profileSrc, setProfileSrc] = useState('/images/profile.jpg')
  const [wordIndex, setWordIndex] = useState(0)
  const [displayedWord, setDisplayedWord] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = rotatingWords[wordIndex]
    const typingSpeed = isDeleting ? 45 : 85

    const pauseTime =
      displayedWord === currentWord && !isDeleting
        ? 1200
        : typingSpeed

    const timer = setTimeout(() => {
      if (!isDeleting && displayedWord !== currentWord) {
        setDisplayedWord(
          currentWord.slice(0, displayedWord.length + 1)
        )
        return
      }

      if (!isDeleting && displayedWord === currentWord) {
        setIsDeleting(true)
        return
      }

      if (isDeleting && displayedWord.length > 0) {
        setDisplayedWord(
          currentWord.slice(0, displayedWord.length - 1)
        )
        return
      }

      setIsDeleting(false)
      setWordIndex(
        (current) => (current + 1) % rotatingWords.length
      )
    }, pauseTime)

    return () => clearTimeout(timer)
  }, [displayedWord, isDeleting, wordIndex])

  return (
    <section id="home" className="hero section">
      <div className="hero__background">
        <span className="hero__orb hero__orb--one" />
        <span className="hero__orb hero__orb--two" />
        <span className="hero__grid" />
      </div>

      <div className="container hero__container">
        <div className="hero__content" data-reveal>
          <div className="eyebrow">
            <ShieldCheck size={16} />
            Available for full-stack roles, freelance builds, and
            collaborations
          </div>

          <h1>
            I build polished{' '}
            <span className="typing-shell">
              <span className="typing-word">
                {displayedWord}
              </span>

              <span className="typing-cursor" />
            </span>
          </h1>

          <p className="hero__lead">
            I’m <strong>Balogun Moyinoluwa Umar</strong>, a
            Full-Stack Developer focused on modern interfaces,
            backend-powered systems, dashboards, SaaS products,
            admin portals, and interactive web applications.
          </p>

          <div className="hero__actions">
            <a href="#projects" className="btn btn--primary">
              View My Work
              <ArrowRight size={18} />
            </a>

            <a href="#contact" className="btn btn--secondary">
              Contact Me
              <Mail size={18} />
            </a>

            <a
              href="/resume.pdf"
              className="btn btn--ghost"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
              <Download size={18} />
            </a>
          </div>

          <div
            className="hero__socials"
            aria-label="Social links"
          >
            <a
              href="https://github.com/moyinoluwabalogun2"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
            >
              <Github size={18} />
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/balogun-moyinoluwa-595973355"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>

            <a
              href="mailto:moyinoluwabalogun2@gmail.com"
              aria-label="Email Balogun"
            >
              <Mail size={18} />
              Email
            </a>
          </div>

          <div
            className="hero__stack"
            aria-label="Technology stack"
          >
            {stackItems.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>

        <div className="hero__visual" data-reveal>
          <div className="profile-card profile-card--clean">
            <div className="profile-card__top">
              <span className="status-pill">
                <span />
                Open to opportunities
              </span>

              <span className="profile-card__tag">
                BMU.dev
              </span>
            </div>

            <div className="profile-card__image-wrap profile-card__image-wrap--clean">
              <img
                src={profileSrc}
                onError={() =>
                  setProfileSrc(
                    '/images/profile-placeholder.svg'
                  )
                }
                alt="Balogun Moyinoluwa Umar"
                className="profile-card__image"
              />

              <div className="profile-card__float profile-card__float--left">
                <Cpu size={18} />
                <span>Full-stack systems</span>
              </div>

              <div className="profile-card__float profile-card__float--right">
                <MousePointer2 size={18} />
                <span>Premium UI</span>
              </div>
            </div>

            <div className="profile-card__body profile-card__body--clean">
              <p className="profile-card__role">
                Full-Stack Developer
              </p>

              <h2>Balogun Moyinoluwa Umar</h2>

              <p>
                Building polished web apps, dashboards, admin
                portals, and useful digital product experiences.
              </p>
            </div>

            <div className="profile-card__chips">
              <span>React</span>
              <span>FastAPI</span>
              <span>Firebase</span>
              <span>Product UI</span>
              <span>PostgreSQL</span>
            </div>
          </div>
        </div>
      </div>

      <div
        className="container hero-focus-grid"
        data-reveal
      >
        {heroCards.map(({ title, text, Icon }) => (
          <article
            key={title}
            className="hero-bento__card"
          >
            <div className="hero-bento__icon">
              <Icon size={20} />
            </div>

            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Hero