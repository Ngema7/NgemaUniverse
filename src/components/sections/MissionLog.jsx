import React, { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import './MissionLog.css'

const STATS = [
  { value: 12, suffix: '+', label: 'Projects Built', color: '#D4AF37' },
  { value: 2000, suffix: '+', label: 'Learning Hours', color: '#8B5CF6' },
  { value: 20, suffix: '+', label: 'Technologies', color: '#3B82F6' },
  { value: 50, suffix: '+', label: 'AI Experiments', color: '#10B981' },
]

function Counter({ value, suffix, color }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const step = Math.ceil(value / 60)
    const interval = setInterval(() => {
      start += step
      if (start >= value) {
        setCount(value)
        clearInterval(interval)
      } else {
        setCount(start)
      }
    }, 20)
    return () => clearInterval(interval)
  }, [inView, value])

  return (
    <span ref={ref} style={{ color }}>
      {count}{suffix}
    </span>
  )
}

export default function MissionLog() {
  return (
    <section className="mission section" id="mission">
      <div className="container">
        <div className="mission__header">
          <span className="section-label">Section 06</span>
          <h2 className="text-display">
            Mission <span className="gradient-gold">Log</span>
          </h2>
        </div>

        <div className="mission__dashboard glass">
          <div className="mission__top-bar">
            <span className="mission__label">MISSION CONTROL DASHBOARD</span>
            <span className="mission__live">
              <span className="mission__live-dot" /> LIVE
            </span>
          </div>

          <div className="mission__grid">
            {STATS.map((stat, i) => (
              <div key={i} className="mission__stat">
                <div className="mission__value">
                  <Counter value={stat.value} suffix={stat.suffix} color={stat.color} />
                </div>
                <div className="mission__stat-label">{stat.label}</div>
                <div className="mission__bar">
                  <div className="mission__bar-fill" style={{ background: stat.color, width: '75%' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
