import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import './Creations.css'

const PROJECTS = [
  {
    id: '01',
    title: 'EduSathi AI',
    type: 'Flagship Product',
    desc: 'AI-powered educational platform revolutionizing how students in Nepal learn, practice, and grow. MCQ engine, AI tutor, progress tracking.',
    tags: ['React', 'AI', 'Node.js', 'MongoDB'],
    accent: '#D4AF37',
    status: 'Live',
  },
  {
    id: '02',
    title: 'Notes System',
    type: 'Full Stack App',
    desc: 'A smart notes application with rich-text editing, tagging, and AI-assisted summarization for students and professionals.',
    tags: ['MERN', 'GSAP', 'REST API'],
    accent: '#8B5CF6',
    status: 'Built',
  },
  {
    id: '03',
    title: 'SaaS Platform Ideas',
    type: 'Concept & Prototype',
    desc: 'A collection of SaaS product concepts targeting the education, productivity, and AI sectors with full UX blueprints.',
    tags: ['UI/UX', 'Figma', 'React'],
    accent: '#3B82F6',
    status: 'In Progress',
  },
  {
    id: '04',
    title: 'AI Experiments',
    type: 'Research & Dev',
    desc: 'A sandbox of AI integrations — chatbots, image analysis, prompt engineering, and LLM-powered tools built for real-world testing.',
    tags: ['Python', 'AI API', 'React'],
    accent: '#10B981',
    status: 'Ongoing',
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
          <span className="section-label">Section 04</span>
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
                <span className="creations__status" style={{ color: STATUS_COLORS[project.status], borderColor: `${STATUS_COLORS[project.status]}30` }}>
                  <span className="creations__status-dot" style={{ background: STATUS_COLORS[project.status] }} />
                  {project.status}
                </span>
              </div>
              <div className="creations__type">{project.type}</div>
              <h3 className="creations__title" style={{ color: project.accent }}>{project.title}</h3>
              <p className="creations__desc">{project.desc}</p>
              <div className="creations__tags">
                {project.tags.map(tag => (
                  <span key={tag} className="creations__tag">{tag}</span>
                ))}
              </div>
              <div className="creations__card-glow" style={{ background: `radial-gradient(circle at 0% 0%, ${project.accent}15, transparent 60%)` }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
