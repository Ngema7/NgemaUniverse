import React from 'react'
import { motion } from 'framer-motion'
import './EduSathi.css'

const PHASES = [
  {
    phase: 'Problem',
    icon: '◉',
    title: 'Education in Crisis',
    desc: 'Millions of students in Nepal lack access to quality, personalized education. Traditional learning fails to engage, adapt, and scale.',
    color: '#EF4444',
  },
  {
    phase: 'Solution',
    title: 'EduSathi AI',
    desc: 'An intelligent educational companion — powered by AI — that learns with every student, adapts to their pace, and makes excellence accessible.',
    color: '#D4AF37',
  },
  {
    phase: 'Features',
    title: 'Core Capabilities',
    items: ['AI Tutor System', 'MCQ Practice Engine', 'Progress Tracking', 'Adaptive Learning', 'Multi-subject Support'],
    color: '#8B5CF6',
  },
  {
    phase: 'Future',
    title: 'The Vision Ahead',
    desc: 'Scaling to every district in Nepal. Then South Asia. Then the world. EduSathi AI is not just a product — it is a movement.',
    color: '#10B981',
  },
]

export default function EduSathi() {
  return (
    <section className="edusathi section" id="edusathi">
      <div className="edusathi__glow" />
      <div className="container">
        <div className="edusathi__eyebrow">
          <span className="section-label">Section 07</span>
          <div className="edusathi__badge">FLAGSHIP PRODUCT LAUNCH</div>
        </div>

        <div className="edusathi__hero">
          <motion.h2
            className="text-display edusathi__title"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="gradient-gold">EduSathi</span> AI
          </motion.h2>
          <motion.p
            className="edusathi__subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            The AI companion every student in Nepal deserves.
          </motion.p>
        </div>

        <div className="edusathi__phases">
          {PHASES.map((p, i) => (
            <motion.div
              key={p.phase}
              className="edusathi__phase glass"
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
            >
              <div className="edusathi__phase-icon" style={{ color: p.color }}>{p.icon}</div>
              <div className="edusathi__phase-label" style={{ color: p.color }}>{p.phase}</div>
              <h3 className="edusathi__phase-title">{p.title}</h3>
              {p.desc && <p className="edusathi__phase-desc">{p.desc}</p>}
              {p.items && (
                <ul className="edusathi__features">
                  {p.items.map(item => (
                    <li key={item}>
                      <span style={{ color: p.color }}>▸</span> {item}
                    </li>
                  ))}
                </ul>
              )}
              <div className="edusathi__phase-glow" style={{ background: `radial-gradient(circle at 50% 100%, ${p.color}15, transparent 60%)` }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
