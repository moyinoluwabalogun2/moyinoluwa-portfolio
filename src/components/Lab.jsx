import React from 'react'
import {
  FlaskConical,
  Gauge,
  LayoutTemplate,
  MonitorSmartphone,
  PanelsTopLeft,
  WandSparkles,
} from 'lucide-react'

const labItems = [
  {
    title: 'Dashboard UI Concepts',
    description:
      'Admin dashboards, analytics screens, KPI cards, and management layouts for SaaS-style products.',
    Icon: PanelsTopLeft,
  },
  {
    title: 'Landing Page Experiments',
    description:
      'Premium landing page layouts with stronger hero sections, conversion-focused CTAs, and clean visual hierarchy.',
    Icon: LayoutTemplate,
  },
  {
    title: 'Responsive UI Tests',
    description:
      'Mobile-first interface experiments focused on spacing, readability, layout behaviour, and smooth usability.',
    Icon: MonitorSmartphone,
  },
  {
    title: 'Interactive Web Tools',
    description:
      'Small calculators, simulators, UI widgets, and browser-based tools that explore interactivity and user feedback.',
    Icon: Gauge,
  },
]

function Lab() {
  return (
    <section id="lab" className="section lab">
      <div className="container">
        <div className="lab__wrapper" data-reveal>
          <div className="lab__content">
            <span className="section-kicker">
              <FlaskConical size={16} />
              Lab
            </span>

            <h2>A space for experiments, UI ideas, and mini builds.</h2>

            <p>
              Not every build needs to be a full case study. The Lab section is
              for smaller experiments, interface explorations, design concepts,
              and technical practice that show continuous improvement.
            </p>

            <a href="#projects" className="btn btn--secondary">
              Explore Selected Work
              <WandSparkles size={18} />
            </a>
          </div>

          <div className="lab__grid">
            {labItems.map(({ title, description, Icon }) => (
              <article className="lab-card" key={title}>
                <div className="lab-card__icon">
                  <Icon size={21} />
                </div>

                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Lab