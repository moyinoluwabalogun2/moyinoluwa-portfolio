import React from 'react'
import { skills } from '../data/skills'
import { Layers3 } from 'lucide-react'

function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div className="section-header" data-reveal>
          <span className="section-kicker">
            <Layers3 size={16} />
            Skills & Stack
          </span>

          <div className="section-header__row">
            <div>
              <h2>Tools I use to build modern products.</h2>
              <p>
                I focus on practical full-stack development skills across frontend,
                backend, database structure, product interfaces, and deployment.
              </p>
            </div>
          </div>
        </div>

        <div className="skills__grid">
          {skills.map(({ category, description, items, Icon }) => (
            <article className="skill-card" key={category} data-reveal>
              <div className="skill-card__top">
                <div className="skill-card__icon">
                  <Icon size={22} />
                </div>

                <h3>{category}</h3>
              </div>

              <p>{description}</p>

              <div className="skill-card__items">
                {items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills