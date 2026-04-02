import TextType from "../animations/TextType.jsx";
import Particles from "../animations/Particles.jsx";

export default function Header() {
  return (
    <div className="relative w-full h-screen overflow-hidden">

      {/* Particles Background */}
      <div className="absolute inset-0 -z-10">
        <Particles
          particleColors={["#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover
          alphaParticles={false}
          disableRotation={false}
          pixelRatio={1}
        />
      </div>

      {/* Moon Image */}
<img
  src="https://cdn.pixabay.com/photo/2013/07/13/12/12/moon-159383_1280.png"
  alt="moon"
  className="
  absolute 
  left-[-250px] md:left-[-420px] 
  top-1/2 -translate-y-1/2 
  w-[600px] md:w-[1100px] 
  opacity-70 
  pointer-events-none
  "
/>

      {/* Header Content */}
      <div className="w-11/12 max-w-3xl text-center mx-auto h-full flex flex-col items-center justify-center gap-4">


        <h1 className="flex items-end gap-2 text-5xl md:text-3xl mb-3 font-Ovo">
          Hi! I&apos;m Talraj Bhatia
          <img src="./assets/hand-icon.png" alt="" className="w-6 mb-1" />
        </h1>

        <TextType
          text={["Web developer based in Indore."]}
          className="text-2xl sm:text-6xl lg:text-[66px] font-Ovo"
          typingSpeed={95}
          pauseDuration={2500}
          showCursor
          cursorCharacter="_"
        />

        <p className="max-w-2xl mx-auto font-Ovo">
          Full-Stack Developer with hands-on experience in MERN stack and ASP.NET development.
        </p>

        {/* ===== Buttons Section ===== */}
        <div className="flex gap-4 mt-4 flex-wrap justify-center">

          {/* GitHub */}
          <a
            href="https://github.com/Talrajsingh"
            target="_blank"
            className="px-6 py-2 border border-gray-300 rounded-full hover:bg-gray-100 dark:hover:bg-darkHover dark:border-white/30 font-Ovo transition"
          >
            GitHub
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/talraj-bhatia"
            target="_blank"
            className="px-6 py-2 border border-gray-300 rounded-full hover:bg-gray-100 dark:hover:bg-darkHover dark:border-white/30 font-Ovo transition"
          >
            LinkedIn
          </a>

          {/* Resume */}
          <a
            href="/assets/Talraj__Resume.pdf"
            download
            className="px-6 py-2 border border-gray-300 rounded-full hover:bg-gray-100 dark:hover:bg-darkHover dark:border-white/30 font-Ovo transition"
          >
            Download Resume
          </a>

        </div>

      </div>
    </div>
  );
}