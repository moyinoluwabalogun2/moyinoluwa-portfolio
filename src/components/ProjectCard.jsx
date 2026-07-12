import React, { useState } from 'react'
import { ArrowUpRight, Github, ExternalLink, FileText } from 'lucide-react'

function ProjectCard({ project, featured = false }) {
  const {
    title,
    category,
    status,
    description,
    techStack,
    liveDemo,
    github,
    caseStudy,
    image,
    accent,
    accentTwo,
    Icon,
  } = project

  const [imageFailed, setImageFailed] = useState(false)

  return (
    <article
      className={`project-card project-card--image ${featured ? 'project-card--featured' : ''}`}
      data-reveal
      style={{
        '--project-accent': accent || '#22D3EE',
        '--project-accent-two': accentTwo || '#8B5CF6',
      }}
    >
      <div className="project-card__visual">
        <div className="project-card__image-frame">
          {image && !imageFailed ? (
            <img
              src={image}
              alt={`${title} project preview`}
              className="project-card__image"
              onError={() => setImageFailed(true)}
            />
          ) : (
            <div className="project-card__fallback">
              <Icon size={42} />
              <span>{category}</span>
              <strong>{title}</strong>
            </div>
          )}

          <div className="project-card__image-overlay" />
        </div>

        <span className="project-card__status">{status}</span>
      </div>

      <div className="project-card__content">
        <div className="project-card__head">
          <span>{category}</span>
          <ArrowUpRight size={18} />
        </div>

        <h3>{title}</h3>
        <p>{description}</p>

        <div className="project-card__stack">
          {techStack.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        <div className="project-card__links">
          <a href={liveDemo} aria-label={`View live demo for ${title}`}>
            <ExternalLink size={16} />
            Live
          </a>

          <a href={github} aria-label={`View GitHub repository for ${title}`}>
            <Github size={16} />
            GitHub
          </a>

          <a href={caseStudy} aria-label={`Read case study for ${title}`}>
            <FileText size={16} />
            Case Study
          </a>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard