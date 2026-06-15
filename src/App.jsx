import React, { useState, useEffect } from 'react'
import Preloader from './components/ui/Preloader'
import CustomCursor from './components/ui/CustomCursor'
import Navbar from './components/ui/Navbar'
import StarField from './components/effects/StarField'
import Hero from './components/sections/Hero'
import Origin from './components/sections/Origin'
import ThreeForces from './components/sections/ThreeForces'
import TechGalaxy from './components/sections/TechGalaxy'
import Creations from './components/sections/Creations'
import AICommandCenter from './components/sections/AICommandCenter'
import MissionLog from './components/sections/MissionLog'
import EduSathi from './components/sections/EduSathi'
import FutureVision from './components/sections/FutureVision'
import ContactPortal from './components/sections/ContactPortal'
import KonamiEasterEgg from './components/effects/KonamiEasterEgg'

export default function App() {
  const [loaded, setLoaded] = useState(false)

  return (
    <>
      {!loaded && <Preloader onComplete={() => setLoaded(true)} />}
      <div style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.8s ease' }}>
        <StarField />
        <CustomCursor />
        <Navbar />
        <main>
          <Hero />
          <Origin />
          <ThreeForces />
          <TechGalaxy />
          <Creations />
          <AICommandCenter />
          <MissionLog />
          <EduSathi />
          <FutureVision />
          <ContactPortal />
        </main>
        <KonamiEasterEgg />
      </div>
    </>
  )
}
