import React from 'react'
import { motion } from 'framer-motion'
import './Creations.css'

const PROJECTS = [
  {
    id: '01',
    title: 'NGEMA UNIVERSE',
    type: 'Portfolio Website',
    desc: 'A cinematic personal portfolio showcasing my work, skills, and creative identity with smooth animations and an immersive experience.',
    tags: ['React', 'Vite', 'Framer Motion', 'CSS'],
    accent: '#D4AF37',
    status: 'Live',
    url: 'https://ngemauniverse.vercel.app',
  },
  {
    id: '02',
    title: 'Bhansaghar',
    type: 'Restaurant Website',
    desc: 'A modern restaurant website with an elegant menu showcase and a clean, responsive design built to welcome every guest.',
    tags: ['React', 'Responsive', 'UI/UX', 'Vercel'],
    accent: '#3B82F6',
    status: 'Live',
    url: 'https://bhansaghar.vercel.app',
  },
]

const STATUS_COLORS = {
  'Live': '#10B981',
  'Built': '#3B82F6',
  'In Progress': '#D4AF37',
  'Ongoing': '#8B5CF6',
}

export default function Creations() {
  return (
    <section className="creations section" id="creations">
      <div className="creations__glow" />
      <div className="container">
        <div className="creations__header">
          <span className="section-label">Section 02</span>
          <h2 className="text-display">
            Digital <span className="gradient-gold">Creations</span>
          </h2>
          <p className="text-body" style={{ maxWidth: 480, margin: '16px auto 0' }}>
            Products built with purpose. Each creation is a statement.
          </p>
        </div>

        <div className="creations__grid">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.id}
              className="creations__card glass"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8 }}
            >
              <div className="creations__card-top">
                <span className="creations__id" style={{ color: project.accent }}>{project.id}</span>
                <span
                  className="creations__status"
                  style={{ color: STATUS_COLORS[project.status], borderColor: `${STATUS_COLORS[project.status]}30` }}
                >
                  <span className="creations__status-dot" style={{ background: STATUS_COLORS[project.status] }} />
                  {project.status}
                </span>
              </div>

              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="creations__preview"
                style={{ borderColor: `${project.accent}30` }}
                aria-label={`Open ${project.title}`}
              >
                <div className="creations__preview-bar">
                  <span className="creations__preview-dots">
                    <i /><i /><i />
                  </span>
                  <span className="creations__preview-url">
                    {project.url.replace('https://', '')}
                  </span>
                </div>
                <div className="creations__preview-frame">
                  <iframe
                    src={project.url}
                    title={`${project.title} preview`}
                    loading="lazy"
                    tabIndex={-1}
                    scrolling="no"
                  />
                  <div className="creations__preview-overlay" style={{ '--accent': project.accent }}>
                    <span>Open Live Demo ↗</span>
                  </div>
                </div>
              </a>

              <div className="creations__type">{project.type}</div>
              <h3 className="creations__title" style={{ color: project.accent }}>{project.title}</h3>
              <p className="creations__desc">{project.desc}</p>

              <div className="creations__tags">
                {project.tags.map(tag => (
                  <span key={tag} className="creations__tag">{tag}</span>
                ))}
              </div>

              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="creations__link"
                style={{ color: project.accent, borderColor: `${project.accent}40` }}
              >
                Live Demo ↗
              </a>

              <div
                className="creations__card-glow"
                style={{ background: `radial-gradient(circle at 0% 0%, ${project.accent}15, transparent 60%)` }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}