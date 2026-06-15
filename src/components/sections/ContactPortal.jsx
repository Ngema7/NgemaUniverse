import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa'
import './ContactPortal.css'

const CONTACTS = [
  { icon: FaGithub, label: 'GitHub', handle: '@ngema-theeng', color: '#ffffff', href: 'https://github.com/Ngema7' },
  { icon: FaLinkedin, label: 'LinkedIn', handle: 'Ngema Theeng', color: '#0A66C2', href: 'https://www.linkedin.com/in/ngema-theeng-689425370/' },
  { icon: FaFacebook, label: 'Facebook', handle: 'Ngema.eXe07', color: '#1877F2', href: 'https://www.facebook.com/Ngema.eXe07' },
  { icon: FaInstagram, label: 'Instagram', handle: '@ngema_exe', color: '#E4405F', href: 'https://www.instagram.com/ngema_exe' },
  { icon: FaTiktok, label: 'TikTok', handle: '@ngema_universe', color: '#ffffff', href: 'https://www.tiktok.com/@ngema_universe' },
  { icon: FaYoutube, label: 'YouTube', handle: 'Ngema Universe', color: '#FF0000', href: 'https://www.youtube.com/@NgemaUniverse' },
]

export default function ContactPortal() {
  return (
    <section className="contact section" id="contact">
      <div className="contact__glow" />
      <div className="container">
        <div className="contact__header">
          <span className="section-label">Section 09</span>
          <h2 className="text-display">
            Contact <span className="gradient-gold">Portal</span>
          </h2>
          <p className="text-body" style={{ maxWidth: 480, margin: '16px auto 0' }}>
            Open a channel to the universe. Connect, collaborate, or just say hello.
          </p>
        </div>

        <div className="contact__grid">
          {CONTACTS.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="contact__card glass"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              whileHover={{ y: -8, scale: 1.02 }}
              data-cursor
            >
              <div className="contact__icon" style={{ color: c.color, filter: `drop-shadow(0 0 12px ${c.color}60)` }}>
                <c.icon size={28} />
              </div>
              <div className="contact__info">
                <div className="contact__platform">{c.label}</div>
                <div className="contact__handle">{c.handle}</div>
              </div>
              <div className="contact__arrow">→</div>
              <div className="contact__hover-glow" style={{ background: `radial-gradient(circle at 50% 50%, ${c.color}10, transparent 70%)` }} />
            </motion.a>
          ))}
        </div>

        {/* Footer */}
        <div className="contact__footer">
          <div className="contact__footer-logo">
            <img className="contact__footer-mark" src="./favicon.svg" alt="" />
            <span>NGEMA UNIVERSE</span>
          </div>
          <p className="contact__footer-text">
            Built with from Sindhupalchok, Nepal<br />
            Creative Technologist · MERN Stack Developer
          </p>
          <p className="contact__copyright">© 2025 Ngema Theeng. All rights reserved.</p>
        </div>
      </div>
    </section>
  )
}
