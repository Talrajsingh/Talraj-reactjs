import { motion } from 'framer-motion'
import { InteractiveCard } from "../animations/InteractiveCard"
import DecryptedText from "../animations/DecryptedText"

const services = [
  {
    emoji: '⚛️',
    name: 'Frontend Development',
    description: 'Building responsive, modern web interfaces using React.js, Tailwind CSS and JavaScript with focus on performance and UX.',
    link: '#',
    color: '#818cf8',
  },
  {
    emoji: '🔧',
    name: 'Backend Development',
    description: 'Developing scalable backend applications using ASP.NET Core and Node.js with secure authentication and optimized logic.',
    link: '#',
    color: '#34d399',
  },
  {
    emoji: '🔌',
    name: 'REST API Development',
    description: 'Designing and implementing RESTful APIs using ASP.NET Web API and Express.js to enable smooth frontend-backend communication.',
    link: '#',
    color: '#22d3ee',
  },
  {
    emoji: '🗄️',
    name: 'Database Management',
    description: 'Working with SQL Server and MongoDB to design efficient database structures and optimized queries for scalable apps.',
    link: '#',
    color: '#f59e0b',
  },
]

export default function Services() {
  return (
    <div id="services" className="w-full px-[6%] sm:px-[12%] py-16 scroll-mt-20">

      <div className="text-center mb-2 font-Space">
        <DecryptedText text="What I Offer" animateOn="view" sequential speed={40}
          className="text-base font-medium text-violet-500 dark:text-violet-400 tracking-widest uppercase" />
      </div>

      <h2 className="text-center text-4xl sm:text-5xl font-Space font-bold text-gray-900 dark:text-white mb-4">
        My Services
      </h2>

      <p className="text-center max-w-2xl mx-auto mt-4 mb-14 font-Space text-gray-500 dark:text-white/55 leading-relaxed">
        Full-Stack Developer specializing in React, MERN stack and ASP.NET.
        I build scalable web applications, REST APIs and responsive user interfaces.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 my-6">
        {services.map((service, i) => (
          <motion.div
            key={service.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.55, ease: 'easeOut' }}
          >
            <InteractiveCard
              className="h-full px-6 py-10 hover:-translate-y-2 duration-400 border border-gray-100 dark:border-white/10 rounded-2xl bg-white/50 dark:bg-white/[0.03] hover:border-violet-200 dark:hover:border-violet-500/30"
            >
              {/* Emoji icon with colored bg */}
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5"
                style={{ background: `${service.color}18`, border: `1px solid ${service.color}30` }}>
                {service.emoji}
              </div>

              <h3 className="font-Space text-base font-semibold text-gray-800 dark:text-white mb-3">
                {service.name}
              </h3>

              <p className="font-Space text-sm text-gray-500 dark:text-white/60 leading-relaxed mb-5">
                {service.description}
              </p>

              <a href={service.link}
                className="inline-flex items-center gap-1.5 font-Space text-sm font-medium transition-colors duration-200"
                style={{ color: service.color }}>
                Learn more
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </InteractiveCard>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
