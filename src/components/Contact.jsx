import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  MessageSquare,
  Send,
  Sparkles,
} from 'lucide-react'
import { profile } from '../data/profile'

const contactLinks = [
  {
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    Icon: Mail,
  },
  {
    label: 'GitHub',
    value: 'github.com/moyinoluwabalogun2',
    href: profile.github,
    Icon: Github,
  },
  {
    label: 'LinkedIn',
    value: 'https://linkedin.com/in/balogun-moyinoluwa-595973355',
    href: profile.linkedin,
    Icon: Linkedin,
  },
]

function Contact() {
  const formRef = useRef(null)

  const [status, setStatus] = useState({
    loading: false,
    message: '',
    type: '',
  })

  const handleSubmit = async (event) => {
    event.preventDefault()

    setStatus({
      loading: true,
      message: 'Sending message...',
      type: 'loading',
    })

    try {
      await emailjs.sendForm(
        'service_mzuyj9b',
        'template_fnsixle',
        formRef.current,
        {
          publicKey: 'c9f9TPJOD44PcAaOM',
        }
      )

      setStatus({
        loading: false,
        message: 'Message sent successfully. I’ll get back to you soon.',
        type: 'success',
      })

      formRef.current.reset()

      setTimeout(() => {
        setStatus({
          loading: false,
          message: '',
          type: '',
        })
      }, 5000)
    } catch (error) {
      console.error('EmailJS error:', error)

      setStatus({
        loading: false,
        message: 'Message failed to send. Please email me directly.',
        type: 'error',
      })

      setTimeout(() => {
        setStatus({
          loading: false,
          message: '',
          type: '',
        })
      }, 5000)
    }
  }

  return (
    <section id="contact" className="section contact">
      <div className="container contact__grid">
        <div className="contact__content" data-reveal>
          <span className="section-kicker">
            <MessageSquare size={16} />
            Contact
          </span>

          <h2>Let’s build something clean, useful, and visually polished.</h2>

          <p>
            I’m open to full-stack development opportunities, freelance projects,
            collaborations, internships, and product-focused web development work.
          </p>

          <div className="contact__availability">
            <Sparkles size={18} />
            <span>{profile.availability}</span>
          </div>

          <div className="contact__location">
            <MapPin size={18} />
            <span>{profile.location}</span>
          </div>
        </div>

        <div className="contact__panel" data-reveal>
          <div className="contact__panel-header">
            <span>Start a conversation</span>
            <ArrowUpRight size={18} />
          </div>

          <div className="contact__links">
            {contactLinks.map(({ label, value, href, Icon }) => (
              <a
                href={href}
                className="contact-link"
                key={label}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noreferrer' : undefined}
              >
                <div className="contact-link__icon">
                  <Icon size={20} />
                </div>

                <div>
                  <span>{label}</span>
                  <strong>{value}</strong>
                </div>

                <ArrowUpRight size={17} />
              </a>
            ))}
          </div>

          <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                required
              />
            </div>

            <div className="form-row">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                required
              />
            </div>

            <div className="form-row">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Tell me about the project, role, or idea..."
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn--primary contact-form__button"
              disabled={status.loading}
            >
              {status.loading ? 'Sending...' : 'Send Message'}
              <Send size={18} />
            </button>

            {status.message && (
              <p className={`form-status form-status--${status.type}`}>
                {status.message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact