import React from 'react'
import {
  ArrowUpRight,
  BadgeCheck,
  BrainCircuit,
  Code2,
  LayoutDashboard,
  Rocket,
  ServerCog,
  Sparkles,
} from 'lucide-react'

const focusAreas = [
  {
    title: 'Frontend interfaces',
    text: 'Responsive layouts, reusable components, clean spacing, smooth interactions, and polished user experiences.',
    Icon: Code2,
  },
  {
    title: 'Backend logic',
    text: 'APIs, data flows, authentication logic, database-connected features, and practical full-stack structure.',
    Icon: ServerCog,
  },
  {
    title: 'Dashboard systems',
    text: 'Admin portals, SaaS dashboards, management flows, analytics screens, and role-based product interfaces.',
    Icon: LayoutDashboard,
  },
  {
    title: 'Product thinking',
    text: 'Planning pages, user journeys, feature flows, MVP structure, and turning rough ideas into usable products.',
    Icon: BrainCircuit,
  },
]

function About() {
  return (
    <section id="about" className="section about">
      <div className="container about__grid">
        <div className="about__content" data-reveal>
          <span className="section-kicker">
            <BadgeCheck size={16} />
            About Me
          </span>

          <h2>I’m building beyond basic websites now.</h2>

          <p>
            I’m <strong>Balogun Moyinoluwa Umar</strong>, a Full-Stack Developer
            focused on building modern web applications that are clean, functional,
            responsive, and visually polished.
          </p>

          <p>
            I enjoy turning ideas into usable digital products, from real estate
            platforms and admin portals to SaaS dashboards, educational tools,
            healthcare MVPs, and interactive full-stack applications.
          </p>

          <p>
            My work combines frontend design, backend logic, database structure,
            and product thinking. I care about how a product looks, how it works,
            and how easy it is for real users to understand.
          </p>

          <div className="about__actions">
            <a href="#projects" className="btn btn--primary">
              View Projects
              <ArrowUpRight size={18} />
            </a>

            <a href="#experience" className="btn btn--secondary">
              See Experience
              <Rocket size={18} />
            </a>
          </div>
        </div>

        <div className="about__panel" data-reveal>
          <div className="about__panel-header">
            <span>
              <Sparkles size={17} />
              Developer profile
            </span>

            <small>BMU</small>
          </div>

          <div className="about__identity">
            <div className="about__avatar">
              <img src="/images/profile.jpg" alt="Balogun Moyinoluwa Umar profile placeholder" />
            </div>

            <div>
              <h3>Balogun Moyinoluwa Umar</h3>
              <p>Full-Stack Developer</p>
            </div>
          </div>

          <div className="about__stats">
            <div>
              <strong>React</strong>
              <span>Frontend</span>
            </div>

            <div>
              <strong>FastAPI</strong>
              <span>Backend</span>
            </div>

            <div>
              <strong>PostgreSQL</strong>
              <span>Database</span>
            </div>
          </div>

          <div className="about__note">
            <p>
              Currently focused on building stronger full-stack products, improving
              UI quality, and presenting projects as real case studies.
            </p>
          </div>
        </div>
      </div>

      <div className="container focus-grid">
        {focusAreas.map(({ title, text, Icon }) => (
          <article className="focus-card" key={title} data-reveal>
            <div className="focus-card__icon">
              <Icon size={22} />
            </div>

            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default About