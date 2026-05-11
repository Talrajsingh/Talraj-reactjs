import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const techCategories = [
  {
    id: 'frontend',
    label: 'Frontend',
    emoji: '🎨',
    color: '#818cf8',
    bg: 'rgba(129,140,248,0.12)',
    skills: [
      { name: 'React JS',       level: 85 },
      { name: 'JavaScript',     level: 88 },
      { name: 'HTML & CSS',     level: 92 },
      { name: 'Tailwind CSS',   level: 82 },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    emoji: '⚙️',
    color: '#34d399',
    bg: 'rgba(52,211,153,0.10)',
    skills: [
      { name: 'ASP.NET Web API', level: 78 },
      { name: 'Node.js',         level: 70 },
      { name: 'Express.js',      level: 72 },
      { name: 'C#',              level: 75 },
    ],
  },
  {
    id: 'database',
    label: 'Database',
    emoji: '🗄️',
    color: '#f59e0b',
    bg: 'rgba(245,158,11,0.10)',
    skills: [
      { name: 'SQL Server', level: 72 },
      { name: 'MongoDB',    level: 68 },
      { name: 'Firebase',   level: 65 },
    ],
  },
  {
    id: 'tools',
    label: 'Tools',
    emoji: '🛠️',
    color: '#fb7185',
    bg: 'rgba(251,113,133,0.10)',
    skills: [
      { name: 'Git & GitHub', level: 83 },
      { name: 'Figma',        level: 60 },
      { name: 'Docker',       level: 50 },
      { name: 'VS Code',      level: 90 },
    ],
  },
]

const infoCards = [
  { name: 'Languages', description: 'HTML, CSS, JS, React, ASP.NET, C#, SQL, Node.js, Express' },
  { name: 'Education',  description: 'B.Tech in Computer Science' },
  { name: 'Projects',  description: 'Built 20+ projects across web & APIs' },
]

function SkillBar({ name, level, color, animate }) {
  return (
    <div>
      <div className="flex justify-between text-xs sm:text-sm font-Space font-medium mb-1.5">
        <span className="text-gray-700 dark:text-white/80">{name}</span>
        <span style={{ color }}>{level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-white/10 rounded-full h-1.5 overflow-hidden">
        <motion.div
          className="h-1.5 rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}70, ${color})` }}
          initial={{ width: 0 }}
          animate={{ width: animate ? `${level}%` : 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.12 }}
        />
      </div>
    </div>
  )
}

export default function About() {
  const [activeId, setActiveId] = useState('frontend')
  const [animKey, setAnimKey] = useState(0)
  const [inView, setInView] = useState(false)
  const skillsRef = useRef(null)

  const active = techCategories.find(c => c.id === activeId)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setInView(true)
    }, { threshold: 0.2 })
    if (skillsRef.current) obs.observe(skillsRef.current)
    return () => obs.disconnect()
  }, [])

  const handleTab = (id) => {
    setActiveId(id)
    setAnimKey(k => k + 1)
  }

  return (
    <div id="about" className="relative w-full px-[6%] sm:px-[12%] py-16 scroll-mt-20 overflow-hidden">

      {/* Planet bg deco */}
      <img src="/assets/crash-image.png" alt="" aria-hidden
        className="absolute right-[-60px] sm:right-[-120px] md:right-[-220px] top-1/2 -translate-y-1/2
          w-[200px] sm:w-[320px] md:w-[520px] opacity-[0.12] pointer-events-none -z-10" />

      {/* Heading */}
      <h4 className="text-center mb-2 text-base font-Space font-medium text-violet-500 dark:text-violet-400 tracking-widest uppercase">Introduction</h4>
      <h2 className="text-center text-4xl sm:text-5xl font-Space font-bold text-gray-900 dark:text-white">About Me</h2>

      {/* Profile + bio */}
      <div className="flex w-full flex-col lg:flex-row items-center gap-12 lg:gap-20 my-14 sm:my-20">

        {/* Avatar with spinning ring */}
        <div className="relative flex-shrink-0 mx-auto">
          <img src="/assets/user-image.png" alt="Talraj Bhatia"
            className="w-52 sm:w-64 rounded-3xl shadow-xl shadow-violet-900/30" />
          <div className="bg-white dark:bg-darkTheme w-[45%] aspect-square absolute right-0 bottom-0
            rounded-full translate-x-1/4 translate-y-1/3 shadow-[0_4px_40px_rgba(139,92,246,0.25)]
            flex items-center justify-center overflow-hidden">
            <img src="/assets/circular-text.png" alt="" className="w-full animate-spin_slow" />
            <img src="/assets/logo.png" alt="" className="w-2/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 dark:hidden" />
            <img src="/assets/logo_dark.png" alt="" className="w-2/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden dark:block" />
          </div>
        </div>

        {/* Bio */}
        <div className="flex-1">
          <p className="mb-8 max-w-2xl font-Space text-gray-500 dark:text-white/65 leading-relaxed text-base">
            I'm a passionate Full-Stack Developer with strong expertise in modern web technologies.
            I enjoy building scalable web applications, designing APIs, and creating user-friendly interfaces.
            I have worked on multiple projects using React, ASP.NET Web API, Node.js, and SQL Server.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {infoCards.map((item, i) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border border-gray-200 dark:border-white/10 rounded-xl p-5 cursor-default
                  hover:border-violet-300 dark:hover:border-violet-500/40
                  hover:bg-violet-50/50 dark:hover:bg-violet-900/10
                  hover:-translate-y-1 hover:shadow-md
                  transition-all duration-300"
              >
                <h3 className="font-Space font-semibold text-gray-800 dark:text-white text-sm mb-2">{item.name}</h3>
                <p className="font-Space text-gray-500 dark:text-white/60 text-xs leading-relaxed">{item.description}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── Stitch-style Tech Category Selector ──────────────────── */}
      <div ref={skillsRef} className="mt-6">
        <h2 className="text-center text-2xl sm:text-3xl font-Space font-bold text-gray-800 dark:text-white/80 mb-8">
          Technical Skills
        </h2>

        {/* Pill tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
          {techCategories.map((cat) => {
            const isActive = cat.id === activeId
            return (
              <button
                key={cat.id}
                onClick={() => handleTab(cat.id)}
                className="relative flex items-center gap-2 px-5 py-2.5 rounded-full border font-Space text-sm font-medium transition-all duration-300 focus:outline-none"
                style={isActive
                  ? { background: cat.color, borderColor: cat.color, color: '#fff', boxShadow: `0 4px 20px ${cat.color}45`, transform: 'scale(1.06)' }
                  : { background: 'transparent', borderColor: 'rgba(156,163,175,0.4)', color: '', transform: 'scale(1)' }
                }
              >
                <span className="text-base">{cat.emoji}</span>
                <span>{cat.label}</span>
              </button>
            )
          })}
        </div>

        {/* Skill panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeId}-${animKey}`}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="w-full max-w-xl mx-auto"
          >
            {/* Panel header */}
            <div className="flex items-center gap-3 mb-5 px-2">
              <span className="text-2xl">{active.emoji}</span>
              <h3 className="font-Space text-lg font-semibold text-gray-800 dark:text-white">
                {active.label} Stack
              </h3>
              <div className="flex-1 h-px bg-gray-200 dark:bg-white/10" />
            </div>

            {/* Skill bars */}
            <div className="space-y-5">
              {active.skills.map((skill) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  color={active.color}
                  animate={inView}
                />
              ))}
            </div>

            {/* Chip badges */}
            <div className="flex flex-wrap gap-2 mt-7">
              {active.skills.map((skill) => (
                <span key={skill.name}
                  className="font-Mono text-xs px-3 py-1.5 rounded-full border transition-all duration-200"
                  style={{ borderColor: `${active.color}40`, color: active.color, background: active.bg }}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
