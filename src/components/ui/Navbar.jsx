import React, { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import './Navbar.css'

const NAV_ITEMS = [
  { label: 'Journey', href: '#origin', index: '01' },
  { label: 'Tech', href: '#tech', index: '02' },
  { label: 'Creations', href: '#creations', index: '03' },
  { label: 'AI', href: '#ai', index: '04' },
  { label: 'Vision', href: '#vision', index: '05' },
  { label: 'Contact', href: '#contact', index: '06' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const overlayRef = useRef(null)
  const itemsRef = useRef([])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
      gsap.fromTo(overlayRef.current,
        { opacity: 0, clipPath: 'circle(0% at calc(100% - 60px) 40px)' },
        { opacity: 1, clipPath: 'circle(150% at calc(100% - 60px) 40px)', duration: 0.7, ease: 'power3.inOut' }
      )
      gsap.fromTo(itemsRef.current,
        { opacity: 0, y: 60, rotateX: -30 },
        { opacity: 1, y: 0, rotateX: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out', delay: 0.3 }
      )
    } else {
      document.body.style.overflow = ''
      if (overlayRef.current) {
        gsap.to(overlayRef.current, {
          opacity: 0,
          clipPath: 'circle(0% at calc(100% - 60px) 40px)',
          duration: 0.5,
          ease: 'power3.inOut'
        })
      }
    }
  }, [open])

  const handleNavClick = (href) => {
    setOpen(false)
    setTimeout(() => {
      const el = document.querySelector(href)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }, 400)
  }

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
        <button
          className="navbar__logo"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <span className="navbar__logo-mark">N</span>
          <span className="navbar__logo-text">NGEMA UNIVERSE</span>
        </button>

        <button
          className={`navbar__burger ${open ? 'active' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* Fullscreen Spatial Menu */}
      <div className="nav-overlay" ref={overlayRef}>
        <div className="nav-overlay__inner">
          <div className="nav-overlay__label">Navigation</div>
          <ul className="nav-overlay__list">
            {NAV_ITEMS.map((item, i) => (
              <li
                key={item.label}
                ref={el => itemsRef.current[i] = el}
                className="nav-overlay__item"
              >
                <button
                  className="nav-overlay__link"
                  onClick={() => handleNavClick(item.href)}
                >
                  <span className="nav-overlay__index">{item.index}</span>
                  <span className="nav-overlay__name">{item.label}</span>
                  <span className="nav-overlay__arrow">→</span>
                </button>
              </li>
            ))}
          </ul>
          <div className="nav-overlay__footer">
            <span>NGEMA UNIVERSE © 2025</span>
            <span>Creative Technologist · Nepal</span>
          </div>
        </div>
      </div>
    </>
  )
}
