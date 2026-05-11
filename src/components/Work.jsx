import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const works = [
  {
    id: 1,
    number: "01",
    name: "MERN Fruit Website",
    category: "Full Stack",
    description:
      "A complete e-commerce fruit store built with MongoDB, Express, React and Node.js.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    link: "https://github.com/Talrajsingh/MERN-STACK-FRUIT-WEBSITE",
    accentColor: "#a78bfa",
    gradFrom: "rgba(109,40,217,0.35)",
    gradTo: "rgba(76,29,149,0.15)",
  },
  {
    id: 2,
    number: "02",
    name: "Hotel Management App",
    category: "Frontend",
    description:
      "React-based hotel management dashboard with booking + availability tracking.",
    tech: ["React", "Tailwind", "JavaScript"],
    link: "#",
    accentColor: "#22d3ee",
    gradFrom: "rgba(8,145,178,0.30)",
    gradTo: "rgba(6,95,70,0.15)",
  },
  {
    id: 3,
    number: "03",
    name: "ASP.NET Excel Project",
    category: "Backend",
    description:
      "Reads and parses structured Excel files with filtering + API export.",
    tech: ["ASP.NET", "C#", "SQL Server"],
    link: "#",
    accentColor: "#34d399",
    gradFrom: "rgba(5,150,105,0.28)",
    gradTo: "rgba(6,78,59,0.15)",
  },
  {
    id: 4,
    number: "04",
    name: "Auth System",
    category: "Backend",
    description:
      "JWT auth system with refresh tokens + role based access.",
    tech: ["ASP.NET Core", "JWT", "SQL"],
    link: "#",
    accentColor: "#fb7185",
    gradFrom: "rgba(190,18,60,0.28)",
    gradTo: "rgba(136,19,55,0.15)",
  },
];

function ProjectCard({ work, index, total, scrollYProgress }) {
  const start = index / total;
  const end = (index + 1) / total;

  const scale = useTransform(
    scrollYProgress,
    [start, end],
    [1, 0.92]
  );

const opacity = useTransform(
  scrollYProgress,
  [start, end],
  [1, 0]
);

const y = useTransform(
  scrollYProgress,
  [start, end],
  [0, -120]
);

  return (
    <motion.div
      className="sticky top-16 flex items-center py-10"
      style={{
        zIndex: total - index,
        scale,
        opacity,
        y,
      }}
    >
      <div
        className="w-full max-w-5xl mx-auto rounded-3xl border border-white/10 p-10"
        style={{
  background: `linear-gradient(135deg, ${work.gradFrom}, ${work.gradTo})`,
  backgroundColor: "rgba(10,10,20,0.75)",
  backdropFilter: "blur(20px)",
  boxShadow: `0 20px 80px ${work.accentColor}22`,
}}
      >
        <div className="flex gap-8">
          <div
            className="text-8xl font-bold opacity-20"
            style={{ color: work.accentColor }}
          >
            {work.number}
          </div>

          <div className="flex-1">
            <h3 className="text-4xl font-bold text-white mb-4">
              {work.name}
            </h3>

            <p className="text-white/60 mb-6">{work.description}</p>

            <div className="flex flex-wrap gap-2 mb-8">
              {work.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full bg-white/5 text-white/70 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href={work.link}
              className="px-6 py-3 rounded-full border inline-block"
              style={{
                color: work.accentColor,
                borderColor: work.accentColor,
              }}
            >
              View Project
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Work() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section className="w-full px-[8%] py-20">
      <h2 className="text-center text-5xl text-white mb-20">
        My Latest Work
      </h2>

      <div
        ref={ref}
        className="relative"
        style={{
          height: `${works.length * 40}vh`,
        }}
      >
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
    </section>
  );
}