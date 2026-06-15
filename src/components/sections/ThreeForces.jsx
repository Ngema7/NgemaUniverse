import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import './ThreeForces.css'

const FORCES = [
  {
    label: 'Creator',
    desc: 'Crafting experiences that move people — through code, design, and storytelling that transcends the ordinary.',
    color: '#D4AF37',
    shadow: 'rgba(212,175,55,0.3)',
  },
  {
    label: 'Builder',
    desc: 'Engineering full-stack systems with architectural clarity. From database schema to pixel-perfect interfaces.',
    color: '#8B5CF6',
    shadow: 'rgba(139,92,246,0.3)',
  },
  {
    label: 'Visionary',
    desc: 'Seeing past the horizon — building AI products and platforms that will shape the next generation of technology.',
    color: '#3B82F6',
    shadow: 'rgba(59,130,246,0.3)',
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18 } }
}

const card = {
  hidden: { opacity: 0, y: 60, scale: 0.92 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
}

export default function ThreeForces() {
  return (
    <section className="forces section" id="forces">
      <div className="forces__glow" />
      <div className="container">
        <div className="forces__header">
          <span className="section-label">Section 02</span>
          <h2 className="text-display">
            Three <span className="gradient-purple">Forces</span>
          </h2>
        </div>

        <motion.div
          className="forces__grid"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
        >
          {FORCES.map((f, i) => (
            <motion.div key={f.label} className="forces__card glass" variants={card}
              whileHover={{ y: -12, transition: { duration: 0.3 } }}
            >
              <div className="forces__icon" style={{ color: f.color, textShadow: `0 0 30px ${f.shadow}` }}>
                {f.icon}
              </div>
              <div className="forces__line" style={{ background: f.color }} />
              <h3 className="forces__label" style={{ color: f.color }}>{f.label}</h3>
              <p className="forces__desc">{f.desc}</p>
              <div className="forces__glow-card" style={{ background: `radial-gradient(circle at 50% 0%, ${f.shadow} 0%, transparent 70%)` }} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
