import React from 'react'
import { ArrowRight, FolderKanban, Layers3 } from 'lucide-react'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

function Projects() {
  const featuredProjects = projects.slice(0, 6)
  const otherProjects = projects.slice(6)

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="section-header" data-reveal>
          <span className="section-kicker">
            <FolderKanban size={16} />
            Selected Work
          </span>

          <div className="section-header__row">
            <div>
              <h2>Projects built with product thinking.</h2>
              <p>
                A curated collection of full-stack applications, dashboards, SaaS concepts,
                admin portals, simulation tools, and responsive business websites.
              </p>
            </div>

            <a href="#contact" className="section-link">
              Start a project
              <ArrowRight size={17} />
            </a>
          </div>
        </div>

        <div className="featured-projects">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} featured={index === 0} />
          ))}
        </div>

        <div className="more-work" data-reveal>
          <div className="more-work__intro">
            <span>
              <Layers3 size={17} />
              More builds
            </span>

            <h3>Additional websites and MVP concepts</h3>
            <p>
              These projects show range across business websites, MVP interfaces,
              service platforms, and responsive frontend builds.
            </p>
          </div>

          <div className="more-work__grid">
            {otherProjects.map(({ id, title, category, description, techStack, Icon, liveDemo }) => (
              <a href={liveDemo} className="mini-project-card" key={id}>
                <div className="mini-project-card__icon">
                  <Icon size={20} />
                </div>

                <div>
                  <span>{category}</span>
                  <h4>{title}</h4>
                  <p>{description}</p>

                  <div className="mini-project-card__stack">
                    {techStack.slice(0, 4).map((tech) => (
                      <small key={tech}>{tech}</small>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects