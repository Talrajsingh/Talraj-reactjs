import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Home',     href: '#top' },
  { label: 'About',   href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'My Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(true)

  const toggleTheme = () => {
    const next = !isDark
    setIsDark(next)
    if (next) {
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.theme = 'light'
    }
  }

  useEffect(() => {
    const stored = localStorage.theme
    if (stored === 'light') {
      setIsDark(false)
      document.documentElement.classList.remove('dark')
    } else {
      setIsDark(true)
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
    }
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setMenuOpen(false)

  return (
    <>
      {/* Light-mode gradient decoration */}
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden pointer-events-none">
        <img src="./assets/header-bg-color.png" alt="" className="w-full" />
      </div>

      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className={`w-full fixed top-0 left-0 right-0 px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/75 backdrop-blur-xl shadow-sm dark:bg-[#0a0014]/90 dark:border-b dark:border-white/5'
            : ''
        }`}
      >
        {/* Logo */}
        <a href="#top" className="flex-shrink-0">
          <img src="./assets/logo.png" alt="Logo" className="w-28 dark:hidden" />
          <img src="./assets/logo_dark.png" alt="Logo" className="w-28 hidden dark:block" />
        </a>

        {/* Desktop links */}
        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-10 py-3 font-Space text-sm font-medium transition-all duration-500 ${
          scrolled
            ? ''
            : 'bg-white/60 shadow-sm backdrop-blur-sm dark:border dark:border-white/10 dark:bg-white/[0.03]'
        }`}>
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="relative text-gray-600 dark:text-white/70 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 group py-1"
              >
                {label}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-violet-500 dark:bg-violet-400 transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* Right controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-gray-100 dark:hover:bg-white/10 transition-colors duration-200"
          >
            <img src="./assets/moon_icon.png" alt="dark" className="w-5 dark:hidden" />
            <img src="./assets/sun_icon.png"  alt="light" className="w-5 hidden dark:block" />
          </button>

          {/* Contact — Stitch pill button */}
          <a
            href="#contact"
            className="hidden lg:flex btn-stitch btn-stitch-light dark:btn-stitch items-center gap-2"
          >
            Contact
            <img src="./assets/arrow-icon.png" alt="" className="w-3 dark:hidden" />
            <img src="./assets/arrow-icon-dark.png" alt="" className="w-3 hidden dark:block" />
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
            className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-[5px] rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
          >
            <motion.span className="block w-5 h-0.5 bg-gray-700 dark:bg-white rounded-full origin-center"
              animate={menuOpen ? { rotate: 45, y: 5.5 } : { rotate: 0, y: 0 }} transition={{ duration: 0.25 }} />
            <motion.span className="block w-5 h-0.5 bg-gray-700 dark:bg-white rounded-full"
              animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }} transition={{ duration: 0.2 }} />
            <motion.span className="block w-5 h-0.5 bg-gray-700 dark:bg-white rounded-full origin-center"
              animate={menuOpen ? { rotate: -45, y: -5.5 } : { rotate: 0, y: 0 }} transition={{ duration: 0.25 }} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={close}
            />
            <motion.div
              className="fixed top-0 right-0 bottom-0 z-50 w-72 md:hidden shadow-2xl flex flex-col bg-white dark:bg-[#130025]"
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {/* Close button */}
              <div className="flex items-center justify-between px-6 pt-5 pb-4 border-b border-gray-100 dark:border-white/10">
                <img src="./assets/logo.png" alt="Logo" className="w-24 dark:hidden" />
                <img src="./assets/logo_dark.png" alt="Logo" className="w-24 hidden dark:block" />
                <button onClick={close} className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition">
                  <img src="./assets/close-black.png" alt="close" className="w-4 dark:hidden" />
                  <img src="./assets/close-white.png" alt="close" className="w-4 hidden dark:block" />
                </button>
              </div>

              {/* Links */}
              <ul className="flex flex-col py-4 flex-1">
                {navLinks.map(({ label, href }, i) => (
                  <motion.li
                    key={label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 + 0.1 }}
                  >
                    <a
                      href={href}
                      onClick={close}
                      className="flex items-center px-6 py-4 font-Space text-sm font-medium text-gray-700 dark:text-white/80 hover:text-violet-600 dark:hover:text-violet-400 hover:bg-violet-50 dark:hover:bg-white/5 transition-colors border-b border-gray-50 dark:border-white/5"
                    >
                      {label}
                    </a>
                  </motion.li>
                ))}
              </ul>

              {/* Bottom CTA */}
              <div className="px-6 pb-8">
                <a href="#contact" onClick={close}
                  className="btn-stitch btn-stitch-light dark:btn-stitch w-full justify-center">
                  Get in touch ↗
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
