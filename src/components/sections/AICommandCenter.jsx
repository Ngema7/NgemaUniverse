import React, { useState, useRef, useEffect } from 'react'
import './AICommandCenter.css'

const AI_RESPONSES = {
  'who is ngema': `Ngema Theeng is a Creative Technologist and Full Stack MERN Developer based in Sindhupalchok, Nepal. He builds AI-powered products, immersive web experiences, and is the founder of EduSathi AI — a transformative educational platform for Nepal. Ngema is a rare fusion of engineer, designer, and visionary.`,

  'what is edusathi ai': `EduSathi AI is Ngema's flagship product — an AI-powered educational platform revolutionizing how students in Nepal learn. It features an intelligent AI tutor, MCQ practice engine, real-time progress tracking, and an adaptive learning system. Built to democratize quality education across Nepal and beyond.`,

  'projects list': `▸ EduSathi AI — Flagship AI educational platform\n▸ Notes System — Smart full-stack notes application\n▸ SaaS Concepts — UX blueprints for next-gen tools\n▸ AI Experiments — LLM integrations and chatbots\n▸ NGEMA UNIVERSE — This cinematic digital HQ`,

  'technologies used': `Frontend: React, Vite, GSAP, Framer Motion, Three.js\nBackend: Node.js, Express, MongoDB\nAI: Python, LLM APIs, AI Prompting\nDesign: Figma, UI/UX Design Systems\nTools: Git, VS Code, Lenis, React Router`,

  'future vision': `Ngema envisions building AI-powered platforms that serve millions globally — starting from Nepal. The roadmap includes: expanding EduSathi AI into a full edtech ecosystem, launching multiple SaaS products, contributing to the AI open-source community, and building a startup that creates meaningful impact across South Asia and the world.`,
}

const COMMANDS = [
  { cmd: 'Who is Ngema?', key: 'who is ngema' },
  { cmd: 'What is EduSathi AI?', key: 'what is edusathi ai' },
  { cmd: 'Projects list', key: 'projects list' },
  { cmd: 'Technologies used', key: 'technologies used' },
  { cmd: 'Future vision', key: 'future vision' },
]

export default function AICommandCenter() {
  const [history, setHistory] = useState([
    { type: 'system', text: 'NGEMA.AI v1.0 initialized. All systems operational.' },
    { type: 'system', text: 'Type a command or click a suggestion below.' },
  ])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const terminalRef = useRef(null)

  const scrollBottom = () => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }

  useEffect(scrollBottom, [history])

  const typeResponse = (text) => {
    setTyping(true)
    let i = 0
    const id = Date.now()
    setHistory(h => [...h, { type: 'ai', text: '', id }])

    const interval = setInterval(() => {
      i++
      setHistory(h => h.map(item =>
        item.id === id ? { ...item, text: text.slice(0, i) } : item
      ))
      if (i >= text.length) {
        clearInterval(interval)
        setTyping(false)
      }
    }, 16)
  }

  const handleCommand = (key, display) => {
    const response = AI_RESPONSES[key]
    setHistory(h => [...h, { type: 'user', text: `> ${display}` }])
    if (response) {
      setTimeout(() => typeResponse(response), 300)
    } else {
      setTimeout(() => typeResponse('Command not recognized. Try a suggestion below.'), 300)
    }
  }

  const handleSubmit = () => {
    const q = input.trim().toLowerCase()
    if (!q) return
    const matched = Object.keys(AI_RESPONSES).find(k => q.includes(k) || k.includes(q))
    handleCommand(matched || '__none__', input)
    setInput('')
  }

  return (
    <section className="ai section" id="ai">
      <div className="ai__glow" />
      <div className="container">
        <div className="ai__header">
          <span className="section-label">Section 05</span>
          <h2 className="text-display">
            AI Command <span className="gradient-purple">Center</span>
          </h2>
        </div>

        <div className="ai__layout">
          {/* Left: Orb */}
          <div className="ai__orb-side">
            <div className="ai__orb-wrap">
              <div className="ai__orb">
                <div className="ai__orb-core" />
                <div className="ai__orb-ring ai__orb-ring--1" />
                <div className="ai__orb-ring ai__orb-ring--2" />
                <div className="ai__orb-ring ai__orb-ring--3" />
              </div>
              <div className="ai__orb-status">
                <span className="ai__orb-dot" />
                <span>NGEMA.AI — ACTIVE</span>
              </div>
            </div>
          </div>

          {/* Right: Terminal */}
          <div className="ai__terminal glass">
            <div className="ai__terminal-header">
              <div className="ai__terminal-dots">
                <span /><span /><span />
              </div>
              <span className="ai__terminal-title">NGEMA.AI TERMINAL</span>
            </div>

            <div className="ai__terminal-body" ref={terminalRef}>
              {history.map((item, i) => (
                <div key={i} className={`ai__line ai__line--${item.type}`}>
                  {item.type === 'ai' && <span className="ai__cursor-prefix">◈ </span>}
                  <span style={{ whiteSpace: 'pre-line' }}>{item.text}</span>
                  {typing && i === history.length - 1 && item.type === 'ai' && (
                    <span className="ai__blink">▌</span>
                  )}
                </div>
              ))}
            </div>

            <div className="ai__suggestions">
              {COMMANDS.map(c => (
                <button key={c.key} className="ai__suggestion" onClick={() => handleCommand(c.key, c.cmd)} disabled={typing}>
                  {c.cmd}
                </button>
              ))}
            </div>

            <div className="ai__input-row">
              <span className="ai__prompt">{'>'}</span>
              <input
                className="ai__input"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSubmit()}
                placeholder="Ask anything about Ngema..."
                disabled={typing}
              />
              <button className="ai__send" onClick={handleSubmit} disabled={typing}>↵</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
