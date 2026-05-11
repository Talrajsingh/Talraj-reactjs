import { motion, AnimatePresence } from 'framer-motion'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Work from './components/Work'
import Services from './components/Services'
import About from './components/About'
import Header from './components/Header'
import Navbar from './components/Navbar'
import LenisScroll from './components/LenisScroll'
import Testimonials from './components/Testimonials'
import Particles from './animations/Particles'
import Loader from "./components/Loader"
import { useState, useEffect } from "react"
import ClickSpark from './animations/ClickSpark'

import rocketCursor from "../public/assets/rocket-cursor.png"

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

  // 🚀 Rocket Cursor
  useEffect(() => {
    document.body.style.cursor = `url(${rocketCursor}) 16 16, auto`
  }, [])

  if (loading) {
    return <Loader onFinish={() => setLoading(false)} />
  }

  return (
    <div className="relative">

      <ClickSpark
        sparkColor="#fff"
        sparkSize={31}
        sparkRadius={105}
        sparkCount={20}
        duration={600}
      >

        {/* Global particles background */}
        <div className="fixed inset-0 -z-10">
          <Particles
            particleColors={["#ffffff"]}
            particleCount={250}
            particleSpread={15}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover
            alphaParticles={false}
            disableRotation={false}
            pixelRatio={1}
          />
        </div>

        <LenisScroll />

        <Navbar />
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

