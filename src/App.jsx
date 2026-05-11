import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import Navbar      from './components/Navbar'
import Header      from './components/Header'
import About       from './components/About'
import Services    from './components/Services'
import Work        from './components/Work'
import Testimonials from './components/Testimonials'
import Contact     from './components/Contact'
import Footer      from './components/Footer'
import LenisScroll from './components/LenisScroll'
import Loader      from './components/Loader'
import ClickSpark  from './animations/ClickSpark'
import Particles   from './animations/Particles'

import rocketCursor from '../public/assets/rocket-cursor.png'

// Smooth section reveal wrapper
const SectionReveal = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
  >
    {children}
  </motion.div>
)

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    document.body.style.cursor = `url(${rocketCursor}) 16 16, auto`
  }, [])

  if (loading) return <Loader onFinish={() => setLoading(false)} />

  return (
    <div className="relative">
      <ClickSpark sparkColor="#a78bfa" sparkSize={28} sparkRadius={90} sparkCount={16} duration={550}>

        {/* Global dark-mode particle field */}
        <div className="fixed inset-0 -z-10 hidden dark:block pointer-events-none">
          <Particles
            particleColors={['#a78bfa', '#ffffff', '#38bdf8']}
            particleCount={200}
            particleSpread={15}
            speed={0.07}
            particleBaseSize={80}
            moveParticlesOnHover
            alphaParticles
            disableRotation={false}
            pixelRatio={1}
          />
        </div>

        <LenisScroll />
        <Navbar />

        {/* Hero — no reveal wrapper so it's immediate */}
        <Header />

        {/* Each section fades+slides up as it enters viewport */}
        <SectionReveal delay={0}>    <About />       </SectionReveal>
        <SectionReveal delay={0.05}> <Services />    </SectionReveal>
        <SectionReveal delay={0}>    <Work />        </SectionReveal>
        <SectionReveal delay={0.05}> <Testimonials /></SectionReveal>
        <SectionReveal delay={0.05}> <Contact />     </SectionReveal>
        <Footer />

      </ClickSpark>
    </div>
  )
}
