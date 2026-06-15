import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import './Preloader.css'

const STEPS = [
  'Initializing Systems...',
  'Loading AI Core...',
  'Connecting Galaxy...',
  'Synchronizing Mission Control...',
  'Entering Universe...',
]

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [stepIndex, setStepIndex] = useState(0)
  const containerRef = useRef(null)
  const titleRef = useRef(null)
  const progressBarRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline()
    tl.fromTo(titleRef.current,
      { opacity: 0, y: 40, letterSpacing: '0.5em' },
      { opacity: 1, y: 0, letterSpacing: '0.1em', duration: 1.2, ease: 'power3.out' }
    )

    let step = 0
    const interval = setInterval(() => {
      step++
      setProgress(Math.min(step * 20, 100))
      setStepIndex(Math.min(step, STEPS.length - 1))
      if (step >= 5) {
        clearInterval(interval)
        setTimeout(() => {
          gsap.to(containerRef.current, {
            opacity: 0,
            scale: 1.05,
            duration: 0.8,
            ease: 'power2.in',
            onComplete,
          })
        }, 400)
      }
    }, 500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="preloader" ref={containerRef}>
      <div className="preloader__grid" />
      <div className="preloader__content">
        <div className="preloader__universe-ring" />
        <div className="preloader__universe-ring ring2" />
        <h1 className="preloader__title" ref={titleRef}>
          NGEMA<br /><span>UNIVERSE</span>
        </h1>
        <p className="preloader__step">{STEPS[stepIndex]}</p>
        <div className="preloader__bar-wrap">
          <div
            className="preloader__bar"
            ref={progressBarRef}
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="preloader__percent">{progress}%</p>
      </div>
    </div>
  )
}
