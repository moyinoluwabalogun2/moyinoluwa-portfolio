import React from 'react'
import {
  Award,
  BadgeCheck,
  CalendarDays,
  ExternalLink,
  FileBadge2,
  GraduationCap,
} from 'lucide-react'

const certificates = [
  {
    title: 'HNG Internship 13 Certificate',
    issuer: 'HNG Internship',
    year: '2025',
    description:
      'Certificate of participation from HNG Internship 13, completed in 2025. The internship strengthened my exposure to software development, data analysis, structured technical tasks, communication, and project delivery.',
    link: '/certificates/hng-internship-13.pdf',
    
    tags: ['HNG Internship', 'Software Development', 'Data Analysis', 'Technical Tasks'],
  },
]

function Certificates() {
  return (
    <section id="certificates" className="section certificates">
      <div className="container certificates__grid">
        <div className="certificates__content" data-reveal>
          <span className="section-kicker">
            <FileBadge2 size={16} />
            Certificates
          </span>

          <h2>Certificate-backed learning and technical growth.</h2>

          <p>
            This section highlights verified learning milestones, internship experience,
            and certificates that support my growth as a full-stack developer.
          </p>
        </div>

        <div className="certificates__list">
          {certificates.map((certificate) => (
            <article className="certificate-card" key={certificate.title} data-reveal>
              <div className="certificate-card__preview">
                <div className="certificate-card__seal">
                  <Award size={38} />
                </div>

                <div>
                  <span>Certificate</span>
                  <h3>HNG</h3>
                </div>
              </div>

              <div className="certificate-card__body">
                <div className="certificate-card__title">
                  <div>
                    <span>
                      <GraduationCap size={15} />
                      {certificate.issuer}
                    </span>

                    <h3>{certificate.title}</h3>
                  </div>

                  <BadgeCheck size={22} />
                </div>

                <p>{certificate.description}</p>

                <div className="certificate-card__meta">
                  <span>
                    <CalendarDays size={15} />
                    {certificate.year}
                  </span>
                </div>

                <div className="certificate-card__tags">
                  {certificate.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <a
                  href={certificate.link}
                  target="_blank"
                  rel="noreferrer"
                  className="certificate-card__link"
                >
                  View Certificate
                  <ExternalLink size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certificates