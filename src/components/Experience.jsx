import React from 'react'
import {
  Award,
  CalendarDays,
  CheckCircle2,
  GraduationCap,
  MapPin,
  Sparkles,
  TimerReset,
} from 'lucide-react'
import { experience } from '../data/experience'

const processSteps = [
  {
    title: 'Plan',
    text: 'Understand the idea, target users, pages, features, and product direction before building.',
  },
  {
    title: 'Design',
    text: 'Create clean layouts, responsive structure, component patterns, and a clear visual hierarchy.',
  },
  {
    title: 'Build',
    text: 'Develop the frontend, backend logic, data flow, reusable components, and user-facing screens.',
  },
  {
    title: 'Test',
    text: 'Check responsiveness, forms, routing, UI states, content clarity, and practical user experience.',
  },
  {
    title: 'Deploy',
    text: 'Prepare the project for real use with hosted links, clean assets, and final production checks.',
  },
]

function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <div className="section-header" data-reveal>
          <span className="section-kicker">
            <GraduationCap size={16} />
            Experience
          </span>

          <div className="section-header__row">
            <div>
              <h2>Internship experience and practical growth.</h2>

              <p>
                A focused section for my structured internship background,
                certificate-backed learning, and development process.
              </p>
            </div>
          </div>
        </div>

        <div className="experience__grid">
          <div className="experience__timeline">
            {experience.map((item) => (
              <article
                className="experience-card"
                key={`${item.company}-${item.title}`}
                data-reveal
              >
                <div className="experience-card__marker">
                  <Award size={20} />
                </div>

                <div className="experience-card__body">
                  <div className="experience-card__top">
                    <div>
                      <span>{item.company}</span>
                      <h3>{item.title}</h3>
                    </div>

                    {item.certificates?.length > 0 && (
                      <div className="experience-card__certificates">
                        {item.certificates.map((certificate) => (
                          <a
                            key={certificate.href}
                            href={certificate.href}
                            target="_blank"
                            rel="noreferrer"
                            className="experience-card__certificate"
                          >
                            {certificate.label}
                            <Sparkles size={16} />
                          </a>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="experience-card__meta">
                    <span>
                      <CalendarDays size={15} />
                      {item.period}
                    </span>

                    <span>
                      <MapPin size={15} />
                      {item.location}
                    </span>
                  </div>

                  <p>{item.description}</p>

                  <div className="experience-card__highlights">
                    {item.highlights.map((highlight) => (
                      <div key={highlight}>
                        <CheckCircle2 size={16} />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <div className="experience-card__skills">
                    {item.skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <aside className="experience__side" data-reveal>
            <div className="experience__side-card">
              <div className="experience__side-icon">
                <TimerReset size={22} />
              </div>

              <h3>How I approach builds</h3>

              <p>
                I don’t just throw sections on a page. I think through the
                product, the user flow, the UI structure, and how the final
                experience should feel.
              </p>
            </div>

            <div className="process-list">
              {processSteps.map((step, index) => (
                <div className="process-item" key={step.title}>
                  <span>{String(index + 1).padStart(2, '0')}</span>

                  <div>
                    <h4>{step.title}</h4>
                    <p>{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default Experience