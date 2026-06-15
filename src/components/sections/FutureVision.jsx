import React from 'react'
import { motion } from 'framer-motion'
import './FutureVision.css'

const VISIONS = [
  { icon: '◈', title: 'AI Products', desc: 'Building a suite of AI-native products that solve real problems across education, productivity, and human connection.', color: '#8B5CF6' },
  { icon: '⬡', title: 'Global Platforms', desc: 'Engineering platforms that scale from one user to one million — architected for the world from day one.', color: '#3B82F6' },
  { icon: '✦', title: 'Education Innovation', desc: 'Transforming how the next generation learns through adaptive AI, personalized experiences, and accessible technology.', color: '#D4AF37' },
  { icon: '◉', title: 'Startup Ecosystem', desc: 'Creating a thriving startup ecosystem in Nepal — proving that world-class products can be built from anywhere on Earth.', color: '#10B981' },
]

export default function FutureVision() {
  return (
    <section className="vision section" id="vision">
      <div className="vision__glow" />
      <div className="container">
        <div className="vision__header">
          <span className="section-label">Section 08</span>
          <h2 className="text-display">
            Future <span className="gradient-purple">Vision</span>
          </h2>
          <p className="text-body" style={{ maxWidth: 520, margin: '16px auto 0' }}>
            The universe is not a destination. It is a direction.
          </p>
        </div>

        <div className="vision__quote glass">
          <p className="vision__quote-text">
            "From the mountains of Nepal to the frontier of technology — I am building the future, one line of code at a time."
          </p>
          <span className="vision__quote-attr">— Ngema Theeng</span>
        </div>

        <div className="vision__grid">
          {VISIONS.map((v, i) => (
            <motion.div
              key={v.title}
              className="vision__card glass"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="vision__icon" style={{ color: v.color }}>{v.icon}</div>
              <h3 className="vision__card-title" style={{ color: v.color }}>{v.title}</h3>
              <p className="vision__card-desc">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
