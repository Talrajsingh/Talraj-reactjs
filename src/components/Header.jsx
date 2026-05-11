import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import TextType from "../animations/TextType.jsx"
import Particles from "../animations/Particles.jsx"

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
})

export default function Header() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setTimeout(() => setMounted(true), 100) }, [])

  return (
    <div id="top" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">

      {/* Particles — dark mode only */}
      <div className="absolute inset-0 -z-10 dark:block hidden">
        <Particles
          particleColors={['#a78bfa', '#c4b5fd', '#ffffff']}
          particleCount={180}
          particleSpread={12}
          speed={0.08}
          particleBaseSize={80}
          moveParticlesOnHover
          alphaParticles
          disableRotation={false}
          pixelRatio={1}
        />
      </div>

      {/* Light-mode particles */}
      <div className="absolute inset-0 -z-10 block dark:hidden">
        <Particles
          particleColors={['#7c3aed', '#a78bfa']}
          particleCount={100}
          particleSpread={10}
          speed={0.06}
          particleBaseSize={60}
          moveParticlesOnHover
          alphaParticles
          disableRotation={false}
          pixelRatio={1}
        />
      </div>

      {/* Moon — dark mode */}
      <div className="absolute left-[-260px] sm:left-[-420px] top-1/2 -translate-y-1/2 pointer-events-none -z-10 hidden dark:block">
        <img
          src="https://cdn.pixabay.com/photo/2013/07/13/12/12/moon-159383_1280.png"
          alt="moon"
          className="w-[580px] sm:w-[1000px] opacity-50"
          style={{ filter: 'hue-rotate(260deg) saturate(0.6)' }}
        />
      </div>

      {/* Content */}
      <div className="w-11/12 max-w-3xl text-center mx-auto flex flex-col items-center justify-center gap-5 py-24 sm:py-0">

        {/* Status badge */}
        <motion.div {...fadeUp(0.1)}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-300/40 dark:border-violet-500/30 bg-violet-50 dark:bg-violet-500/10 mb-2">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="font-Mono text-xs text-violet-600 dark:text-violet-300 tracking-widest uppercase">Available for Work</span>
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1 {...fadeUp(0.2)} className="font-Space text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
          Hi! I&apos;m{' '}
          <span className="relative">
            <span className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(135deg, #a78bfa, #38bdf8, #a78bfa)', backgroundSize: '200% auto', animation: 'gradientShift 4s ease infinite' }}>
              Talraj Bhatia
            </span>
          </span>
          <img src="./assets/hand-icon.png" alt="" className="inline w-8 ml-2 mb-1 align-bottom" />
        </motion.h1>

        {/* Typewriter */}
        <motion.div {...fadeUp(0.3)} className="w-full">
          <TextType
            text={["Web developer based in Indore.", "Full-Stack Developer.", "React & ASP.NET Expert."]}
            className="font-Space text-2xl sm:text-4xl lg:text-5xl font-semibold text-gray-700 dark:text-white/90"
            typingSpeed={80}
            pauseDuration={2200}
            showCursor
            cursorCharacter="_"
          />
        </motion.div>

        {/* Tagline */}
        <motion.p {...fadeUp(0.4)} className="font-Space max-w-xl mx-auto text-gray-500 dark:text-white/55 text-base sm:text-lg leading-relaxed">
          Full-Stack Developer crafting scalable web applications with MERN stack & ASP.NET.
          Building pixel-perfect UIs and powerful APIs.
        </motion.p>

        {/* CTA Buttons — Stitch-style */}
        <motion.div {...fadeUp(0.5)} className="flex flex-wrap gap-3 mt-2 justify-center">
          <a href="https://github.com/Talrajsingh" target="_blank" rel="noopener noreferrer"
            className="btn-stitch btn-stitch-light dark:btn-stitch px-7 py-3 text-sm font-Space">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
            GitHub
          </a>

          <a href="https://linkedin.com/in/talraj-bhatia" target="_blank" rel="noopener noreferrer"
            className="btn-stitch btn-stitch-light dark:btn-stitch px-7 py-3 text-sm font-Space">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </a>

          <a href="/assets/Talraj__Resume.pdf" download
            className="btn-stitch btn-stitch-light dark:btn-stitch px-7 py-3 text-sm font-Space">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M12 16l4-4m0 0l-4-4m4 4H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            Download Resume
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div {...fadeUp(0.9)} className="mt-12 flex flex-col items-center gap-2 opacity-40">
          <span className="font-Mono text-xs tracking-[0.3em] text-gray-400 dark:text-white/40 uppercase">scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-transparent via-violet-400 to-transparent animate-pulse" />
        </motion.div>
      </div>

      <style>{`
        @keyframes gradientShift {
          0%,100% { background-position: 0% center; }
          50% { background-position: 200% center; }
        }
      `}</style>
    </div>
  )
}
