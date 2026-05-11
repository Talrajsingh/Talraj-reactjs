import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const works = [
  {
    id: 1,
    number: '01',
    name: 'MERN Fruit Website',
    category: 'Full Stack',
    description: 'A complete e-commerce fruit store built with MongoDB, Express, React and Node.js. Features product listing, cart, and full order management with MERN architecture.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    link: 'https://github.com/Talrajsingh/MERN-STACK-FRUIT-WEBSITE',
    accentColor: '#a78bfa',
    gradFrom: 'rgba(109,40,217,0.35)',
    gradTo:   'rgba(76,29,149,0.15)',
  },
  {
    id: 2,
    number: '02',
    name: 'Hotel Management App',
    category: 'Frontend',
    description: 'A React-based hotel management system with room booking, guest management, and real-time availability tracking with a modern dashboard UI.',
    tech: ['React', 'Tailwind CSS', 'JavaScript'],
    link: 'https://github.com/Talrajsingh/React-js-HotelManagement-project',
    accentColor: '#22d3ee',
    gradFrom: 'rgba(8,145,178,0.30)',
    gradTo:   'rgba(6,95,70,0.15)',
  },
  {
    id: 3,
    number: '03',
    name: 'ASP.NET Excel Project',
    category: 'Backend',
    description: 'A .NET web application that reads, parses and displays structured data from Excel files via a clean REST API, with export and filtering capabilities.',
    tech: ['ASP.NET', 'C#', 'SQL Server', 'Excel API'],
    link: 'https://github.com/Talrajsingh/.Net---Excel-Project-',
    accentColor: '#34d399',
    gradFrom: 'rgba(5,150,105,0.28)',
    gradTo:   'rgba(6,78,59,0.15)',
  },
  {
    id: 4,
    number: '04',
    name: 'Auth System – ASP.NET',
    category: 'Backend',
    description: 'Secure authentication system built with ASP.NET Core featuring JWT token auth, role-based access control, refresh tokens, and a complete user management module.',
    tech: ['ASP.NET Core', 'JWT', 'C#', 'SQL Server'],
    link: 'https://github.com/Talrajsingh/Auth---.net',
    accentColor: '#fb7185',
    gradFrom: 'rgba(190,18,60,0.28)',
    gradTo:   'rgba(136,19,55,0.15)',
  },
]

/* ── Single sticky card ─────────────────────────────────────── */
function ProjectCard({ work, index, total, scrollYProgress }) {
  const start   = index / total
  const end     = (index + 1) / total
  const isLast  = index === total - 1

  /* This card: slide up on entry */
  const cardY       = useTransform(scrollYProgress, [Math.max(0, start - 0.04), start + 0.1], ['80px', '0px'])
  const cardOpacity = useTransform(scrollYProgress, [Math.max(0, start - 0.02), start + 0.09], [0, 1])

  /* Previous cards: scale + fade as next pushes in */
  const pushScale   = useTransform(scrollYProgress, [end - 0.04, Math.min(1, end + 0.14)], [1, 0.93])
  const pushY       = useTransform(scrollYProgress, [end - 0.04, Math.min(1, end + 0.14)], ['0px', '-22px'])
  const pushOpacity = useTransform(scrollYProgress, [end, Math.min(1, end + 0.18)], [1, 0.48])

  return (
    <motion.div
      className="sticky top-24"
      style={{
        zIndex: 10 + index,
        ...(isLast
          ? { y: cardY, opacity: cardOpacity, scale: pushScale }
          : { y: pushY,  opacity: pushOpacity, scale: pushScale }),
      }}
    >
      <div
        className="relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden border border-white/10"
        style={{
          background: `linear-gradient(135deg, ${work.gradFrom}, ${work.gradTo})`,
          backdropFilter: 'blur(12px)',
          boxShadow: `0 12px 50px ${work.accentColor}22, 0 2px 0 ${work.accentColor}20 inset`,
        }}
      >
        {/* Top accent bar */}
        <div className="absolute top-0 left-0 right-0 h-[2px]"
          style={{ background: `linear-gradient(90deg, transparent, ${work.accentColor}, transparent)` }} />

        <div className="p-7 sm:p-10 lg:p-12">
          <div className="flex flex-col lg:flex-row gap-8 items-start">

            {/* Number + badge */}
            <div className="flex-shrink-0 flex flex-row lg:flex-col items-center lg:items-start gap-4 lg:gap-0">
              <span className="font-Mono text-5xl sm:text-7xl font-bold leading-none select-none"
                style={{ color: work.accentColor, opacity: 0.22 }}>
                {work.number}
              </span>
              <span className="font-Mono text-xs tracking-[0.2em] uppercase px-3 py-1 rounded-full border lg:mt-3"
                style={{ color: work.accentColor, borderColor: `${work.accentColor}40`, background: `${work.accentColor}12` }}>
                {work.category}
              </span>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <h3 className="font-Space text-xl sm:text-2xl lg:text-3xl font-semibold text-white mb-4 leading-snug">
                {work.name}
              </h3>
              <p className="font-Space text-white/60 leading-relaxed mb-6 text-sm sm:text-base">
                {work.description}
              </p>

              {/* Tech chips */}
              <div className="flex flex-wrap gap-2 mb-8">
                {work.tech.map((t) => (
                  <span key={t}
                    className="font-Mono text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/65">
                    {t}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <a href={work.link} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-Space text-sm px-6 py-2.5 rounded-full border transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{ color: work.accentColor, borderColor: `${work.accentColor}55`, background: `${work.accentColor}12` }}>
                View on GitHub
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

/* ── Work section ────────────────────────────────────────────── */
export default function Work() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  return (
    <div id="work" className="w-full px-[6%] sm:px-[10%] py-16 scroll-mt-20">

      {/* Section header */}
      <h4 className="text-center mb-2 text-base font-Space font-medium text-violet-500 dark:text-violet-400 tracking-widest uppercase">
        My Portfolio
      </h4>
      <h2 className="text-center text-4xl sm:text-5xl font-Space font-bold text-gray-900 dark:text-white mb-4">
        My Latest Work
      </h2>
      <p className="text-center max-w-2xl mx-auto mt-4 mb-16 font-Space text-gray-500 dark:text-white/55 text-base leading-relaxed">
        A collection of projects showcasing my expertise in frontend and full-stack development —
        from MERN apps to ASP.NET APIs.
      </p>

      {/* Sticky scroll container */}
      <div ref={containerRef} style={{ height: `${works.length * 40}vh` }} className="relative">
        <div className="flex flex-col gap-5">
          {works.map((work, index) => (
            <ProjectCard
              key={work.id}
              work={work}
              index={index}
              total={works.length}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>

      {/* Bottom label */}
      <p className="text-center font-Mono text-xs text-gray-400 dark:text-white/25 tracking-widest uppercase mt-8">
        ↑ Scroll up to revisit projects
      </p>
    </div>
  )
}
