import React, { useEffect, useRef } from 'react'

export default function StarField() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let W = window.innerWidth
    let H = window.innerHeight
    let raf

    canvas.width = W
    canvas.height = H

    const isMobile = W <= 768
    const COUNT = isMobile ? 120 : 280

    const stars = Array.from({ length: COUNT }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.2 + 0.2,
      a: Math.random(),
      speed: Math.random() * 0.3 + 0.05,
      twinkle: Math.random() * Math.PI * 2,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, W, H)

      // Aurora/nebula gradient
      const grd = ctx.createRadialGradient(W * 0.3, H * 0.4, 0, W * 0.3, H * 0.4, W * 0.6)
      grd.addColorStop(0, 'rgba(139,92,246,0.04)')
      grd.addColorStop(0.5, 'rgba(59,130,246,0.02)')
      grd.addColorStop(1, 'transparent')
      ctx.fillStyle = grd
      ctx.fillRect(0, 0, W, H)

      const grd2 = ctx.createRadialGradient(W * 0.8, H * 0.7, 0, W * 0.8, H * 0.7, W * 0.5)
      grd2.addColorStop(0, 'rgba(212,175,55,0.03)')
      grd2.addColorStop(1, 'transparent')
      ctx.fillStyle = grd2
      ctx.fillRect(0, 0, W, H)

      stars.forEach(s => {
        s.twinkle += 0.02
        const opacity = s.a * (0.5 + 0.5 * Math.sin(s.twinkle))
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,255,255,${opacity})`
        ctx.fill()
        s.y -= s.speed
        if (s.y < -2) {
          s.y = H + 2
          s.x = Math.random() * W
        }
      })

      raf = requestAnimationFrame(draw)
    }

    draw()

    const onResize = () => {
      W = window.innerWidth
      H = window.innerHeight
      canvas.width = W
      canvas.height = H
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  )
}
