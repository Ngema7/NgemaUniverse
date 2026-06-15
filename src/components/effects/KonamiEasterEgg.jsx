import React, { useEffect, useState } from 'react'
import './KonamiEasterEgg.css'

const KONAMI = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a']

export default function KonamiEasterEgg() {
  const [seq, setSeq] = useState([])
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onKey = (e) => {
      setSeq(s => {
        const next = [...s, e.key].slice(-KONAMI.length)
        if (next.join(',') === KONAMI.join(',')) {
          setShow(true)
          setTimeout(() => setShow(false), 4000)
        }
        return next
      })
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  if (!show) return null

  return (
    <div className="konami glass">
      <div className="konami__inner">
        <div className="konami__icon">⬡</div>
        <h3 className="konami__title">🔓 Secret Unlocked</h3>
        <p className="konami__msg">
          You found the developer portal. Welcome to the inner sanctum, explorer.<br />
          <span style={{ color: '#D4AF37' }}>NGEMA UNIVERSE — Admin Mode</span>
        </p>
        <code className="konami__code">// TODO: Rule the universe</code>
      </div>
    </div>
  )
}
