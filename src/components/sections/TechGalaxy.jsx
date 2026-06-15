import { useState } from "react"
import { motion } from "framer-motion"
import './TechGalaxy.css'

// ─── Design tokens (same values used across the project) ───────────────────
const T = {
  gold:   "#D4AF37",
  purple: "#8B5CF6",
  blue:   "#3B82F6",
  dim:    "rgba(255,255,255,0.3)",
}

// ─── Shared primitives ─────────────────────────────────────────────────────
const Section = ({ id, children }) => (
  <section className="galaxy section" id={id}>
    <div className="container">{children}</div>
  </section>
)

const SectionLabel = ({ text }) => (
  <span className="section-label" style={{ display: "block", marginBottom: 16 }}>
    {text}
  </span>
)

// ─── Tech nodes data ───────────────────────────────────────────────────────
const techNodes = [
  { label: "React",      cat: "Frontend", r: 120, speed: 12,  size: 44, color: T.blue },
  { label: "HTML",   cat: "Frontend", r: 170, speed: 18,  size: 36, color: "#E34F26" },
  { label: "javascript", cat: "Frontend", r: 220, speed: 22,  size: 80, color: "#F7DF1E" },
  { label: "CSS",     cat: "Backend",  r: 150, speed: -16, size: 38, color: "#3572A5" },
  { label: "Node.js",    cat: "Backend",  r: 260, speed: -28, size: 34, color: "#68A063" },
  { label: "mangodb",      cat: "AI",       r: 190, speed: 20,  size: 48, color: T.purple },
  { label: "UI/UX",      cat: "Design",   r: 240, speed: -24, size: 36, color: T.gold },
  { label: "SQL",      cat: "Design",   r: 130, speed: -14, size: 32, color: "#F24E1E" },
  { label: "Git",        cat: "Tools",    r: 200, speed: 26,  size: 30, color: "#F05032" },
  { label: "Vite",       cat: "Tools",    r: 280, speed: -32, size: 30, color: "#BD34FE" },
   { label: "Expressjs",       cat: "Tools",    r: 100, speed: 20, size: 60, color: "#BD34FE" },
]

const centerX = 300
const centerY = 300

// ─── Component ─────────────────────────────────────────────────────────────
export default function TechGalaxy() {
  const [hovered, setHovered] = useState(null)

  return (
    <Section id="tech">
      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <SectionLabel text="TECH GALAXY" />
          <motion.h2
            className="sora"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ fontSize: "clamp(28px,5vw,52px)", fontWeight: 800, lineHeight: 1.1 }}
          >
            Skills <span style={{ color: T.gold }}>Constellation</span>
          </motion.h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 48 }}>

          {/* ── Orbital SVG + motion nodes ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ position: "relative", width: 600, height: 600, maxWidth: "100%" }}
          >
            {/* Static SVG rings + center glow */}
            <svg
              width="600"
              height="600"
              viewBox="0 0 600 600"
              style={{ position: "absolute", inset: 0 }}
            >
              <defs>
                <radialGradient id="centerGrad">
                  <stop offset="0%"   stopColor={T.gold} stopOpacity="0.3" />
                  <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Unique orbit radii */}
              {[...new Set(techNodes.map(n => n.r))].map(r => (
                <circle
                  key={r}
                  cx={centerX} cy={centerY} r={r}
                  fill="none"
                  stroke="rgba(255,255,255,0.04)"
                  strokeWidth="1"
                  strokeDasharray="4 8"
                />
              ))}

              {/* Center glow */}
              <circle cx={centerX} cy={centerY} r="60" fill="url(#centerGrad)" />
              <circle cx={centerX} cy={centerY} r="40" fill="rgba(212,175,55,0.15)" />
            </svg>

            {/* Center label */}
            <div
              style={{
                position: "absolute",
                left: centerX, top: centerY,
                transform: "translate(-50%, -50%)",
                textAlign: "center",
                zIndex: 2,
                pointerEvents: "none",
              }}
            >
              <div className="sora" style={{ color: T.gold, fontWeight: 700, fontSize: 13, letterSpacing: "0.15em" }}>
                NGEMA
              </div>
              <div style={{ color: T.dim, fontSize: 10, letterSpacing: "0.3em" }}>
                CORE
              </div>
            </div>

            {/* Orbiting nodes — outer wrapper rotates, inner counter-rotates so label stays upright */}
            {techNodes.map(node => (
              <motion.div
                key={node.label}
                animate={{ rotate: 360 }}
                transition={{
                  duration: Math.abs(node.speed),
                  repeat: Infinity,
                  ease: "linear",
                  direction: node.speed < 0 ? "reverse" : "normal",
                }}
                style={{
                  position: "absolute",
                  left: centerX, top: centerY,
                  width: 0, height: 0,
                  transformOrigin: "0 0",
                }}
              >
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: Math.abs(node.speed),
                    repeat: Infinity,
                    ease: "linear",
                    direction: node.speed < 0 ? "reverse" : "normal",
                  }}
                  onHoverStart={() => setHovered(node.label)}
                  onHoverEnd={() => setHovered(null)}
                  style={{
                    position: "absolute",
                    left: node.r,
                    top: -node.size / 2,
                    width: node.size,
                    height: node.size,
                    borderRadius: "50%",
                    background: `${node.color}15`,
                    border: `1px solid ${node.color}60`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "default",
                    boxShadow: hovered === node.label ? `0 0 20px ${node.color}60` : "none",
                    transition: "box-shadow 0.3s",
                  }}
                >
                  <span style={{ color: node.color, fontSize: 10, fontWeight: 600, textAlign: "center", lineHeight: 1.1 }}>
                    {node.label.length > 6 ? node.label.slice(0, 5) : node.label}
                  </span>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* ── Tech pill grid ── */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center", maxWidth: 700 }}>
            {techNodes.map((node, i) => (
              <motion.div
                key={node.label}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="glass"
                style={{
                  padding: "8px 16px",
                  borderRadius: 100,
                  border: `1px solid ${node.color}30`,
                  color: node.color,
                  fontSize: 12,
                  letterSpacing: "0.06em",
                  fontFamily: "var(--font-mono)",
                }}
              >
                {node.label}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
