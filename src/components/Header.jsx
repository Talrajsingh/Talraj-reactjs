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

      {/* Header Content */}
      <div className="w-11/12 max-w-3xl text-center mx-auto h-full flex flex-col items-center justify-center gap-4">

        <img src="./assets/profile-img.png" alt="" className="rounded-full w-32" />

        <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
          Hi! I&apos;m Talraj Bhatia
          <img src="./assets/hand-icon.png" alt="" className="w-6 mb-1" />
        </h3>

        <TextType
          text={["Web developer based in Indore."]}
          className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo"
          typingSpeed={95}
          pauseDuration={2500}
          showCursor
          cursorCharacter="_"
        />

        <p className="max-w-2xl mx-auto font-Ovo">
          Full-Stack Developer with hands-on experience in MERN stack and ASP.NET development.
        </p>

      </div>
    </div>
  );
}