import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Origin.css'

gsap.registerPlugin(ScrollTrigger)

const TIMELINE = [
  {
    year: '2023',
    title: 'SEE Graduate',
    org: 'Shree Jaldevi Secondary School',
    loc: 'Jugal-7, Sindhupalchok',
    desc: 'Completed SEE examinations, the first step of an extraordinary journey into technology.',
    accent: '#D4AF37',
  },
  {
    year: '2026',
    title: 'Diploma in Computer Engineering',
    org: 'Shree Siddhababa Secondary School',
    loc: 'Kamalamai-7, Sindhuli',
    desc: 'Dived into the world of computer engineering, building a solid foundation in software and systems.',
    accent: '#8B5CF6',
  },
  {
    year: '2025',
    title: 'Frontend Development Journey',
    org: 'Self-Directed Learning',
    loc: 'Nepal',
    desc: 'Began crafting web experiences from scratch — pixel by pixel, line by line.',
    accent: '#3B82F6',
  },
  {
    year: '2026',
    title: 'React Ecosystem Mastery',
    org: 'MERN Stack Development',
    loc: 'Remote',
    desc: 'Mastered the MERN stack, building full-stack applications with elegant, performant interfaces.',
    accent: '#06B6D4',
  },

  {
    year: '2026',
    title: 'EduSathi AI Development',
    org: 'Flagship Product',
    loc: 'Nepal',
    desc: 'Launched EduSathi AI — a transformative educational platform designed to democratize learning across Nepal.',
    accent: '#D4AF37',
  },
  {
    year: '2026+',
    title: 'Future Startup Founder Vision',
    org: 'The Universe Awaits',
    loc: 'Global',
    desc: 'Building AI-powered platforms, global products, and a startup ecosystem from the mountains of Nepal to the world.',
    accent: '#8B5CF6',
  },
]

export default function Origin() {
  const sectionRef = useRef(null)
  const lineRef = useRef(null)
  const itemsRef = useRef([])

  useEffect(() => {
    // Animate the progress line
    gsap.fromTo(lineRef.current,
      { scaleY: 0 },
      {
        scaleY: 1,
        transformOrigin: 'top',
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
          end: 'bottom 60%',
          scrub: 1,
        }
      }
    )

    // Animate each item
    itemsRef.current.forEach((el, i) => {
      if (!el) return
      gsap.fromTo(el,
        { opacity: 0, x: i % 2 === 0 ? -50 : 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
          }
        }
      )
    })
  }, [])

  return (
    <section className="origin section" id="origin" ref={sectionRef}>
      <div className="origin__glow" />
      <div className="container">
        <div className="origin__header">
          <span className="section-label">Section 01</span>
          <h2 className="text-display">
            Origin <span className="gradient-gold">Story</span>
          </h2>
          <p className="text-body" style={{ maxWidth: 520, margin: '16px auto 0' }}>
            Every universe has a beginning. This is how one developer from the hills of Nepal set out to build the future.
          </p>
        </div>

        <div className="origin__timeline">
          <div className="origin__line-wrap">
            <div className="origin__line" ref={lineRef} />
          </div>

          {TIMELINE.map((item, i) => (
            <div
              key={i}
              className={`origin__item ${i % 2 === 0 ? 'origin__item--left' : 'origin__item--right'}`}
              ref={el => itemsRef.current[i] = el}
            >
              <div className="origin__dot" style={{ background: item.accent, boxShadow: `0 0 16px ${item.accent}60` }} />
              <div className="origin__card glass">
                <div className="origin__year" style={{ color: item.accent }}>{item.year}</div>
                <h3 className="origin__title">{item.title}</h3>
                <div className="origin__org">{item.org} · {item.loc}</div>
                <p className="origin__desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
