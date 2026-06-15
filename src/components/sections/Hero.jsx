import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import './Hero.css'

export default function Hero() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const subRef = useRef(null)
  const btnsRef = useRef(null)
  const photo1Ref = useRef(null)
  const photo2Ref = useRef(null)
  const photo3Ref = useRef(null)
  const scrollRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.2 })

    tl.fromTo(titleRef.current,
      { opacity: 0, y: 80, skewY: 4 },
      { opacity: 1, y: 0, skewY: 0, duration: 1.2, ease: 'power4.out' }
    )
    .fromTo(subRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.6'
    )
    .fromTo(btnsRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.4'
    )
    .fromTo([photo1Ref.current, photo2Ref.current, photo3Ref.current],
      { opacity: 0, scale: 0.85, y: 40 },
      { opacity: 1, scale: 1, y: 0, duration: 1, stagger: 0.15, ease: 'power3.out' }, '-=0.5'
    )
    .fromTo(scrollRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.6 }, '-=0.2'
    )

    // Floating animations
    gsap.to(photo1Ref.current, {
      y: -18, duration: 3.5, ease: 'sine.inOut', yoyo: true, repeat: -1
    })
    gsap.to(photo2Ref.current, {
      y: -12, duration: 4, ease: 'sine.inOut', yoyo: true, repeat: -1, delay: 0.6
    })
    gsap.to(photo3Ref.current, {
      y: -20, duration: 3.2, ease: 'sine.inOut', yoyo: true, repeat: -1, delay: 1.1
    })
  }, [])

  return (
    <section className="hero section" id="hero" ref={sectionRef}>
      {/* Radial glow */}
      <div className="hero__glow hero__glow--gold" />
      <div className="hero__glow hero__glow--purple" />

      {/* Grid overlay */}
      <div className="hero__grid" />

      <div className="hero__inner container">
        {/* Text content */}
        <div className="hero__text">
          <div className="hero__eyebrow">
            <span className="hero__dot" />
            Creative Technologist · Nepal
          </div>
          <h1 className="hero__title text-hero" ref={titleRef}>
            NGEMA<br />
            <span className="gradient-gold">UNIVERSE</span>
          </h1>
          <p className="hero__tagline" ref={subRef}>
            Dream Big. Build Bigger.
          </p>
          <p className="hero__description" ref={subRef}>
            A cinematic digital headquarters of an AI builder,<br />
            full-stack creator, and future tech founder from Nepal.
          </p>
          <div className="hero__buttons" ref={btnsRef}>
            <button
              className="btn-primary"
              onClick={() => document.querySelector('#origin')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Universe
            </button>
            <button
              className="btn-outline"
              onClick={() => document.querySelector('#creations')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Innovations
            </button>
          </div>

          {/* Status pills */}
          <div className="hero__status">
            <span className="hero__pill hero__pill--green">
              <span className="hero__pill-dot" /> Available
            </span>
            <span className="hero__pill hero__pill--gold">
              AI Builder
            </span>
            <span className="hero__pill hero__pill--purple">
              MERN Dev
            </span>
          </div>
        </div>

        {/* Photo cluster */}
        <div className="hero__photos">
          <div className="hero__photo hero__photo--1" ref={photo1Ref}>
            <img src="/image.png" alt="Ngema" />
            <div className="hero__photo-ring" />
          </div>
          <div className="hero__photo hero__photo--2" ref={photo2Ref}>
            <img src="/image1.png" alt="Ngema" />
            <div className="hero__photo-badge">
              <span>AI</span>
              <span>Builder</span>
            </div>
          </div>
          <div className="hero__photo hero__photo--3" ref={photo3Ref}>
            <img src="/image2.png" alt="Ngema" />
          </div>

          {/* Orbit decoration */}
          <div className="hero__orbit hero__orbit--1" />
          <div className="hero__orbit hero__orbit--2" />

          {/* Floating label */}
          <div className="hero__float-label">
            <span className="text-mono" style={{ color: '#D4AF37', fontSize: '0.65rem' }}>⬤ ONLINE</span>
            <span>Ngema Theeng</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll" ref={scrollRef}>
        <div className="hero__scroll-line" />
        <span>Scroll to explore</span>
      </div>
    </section>
  )
}
