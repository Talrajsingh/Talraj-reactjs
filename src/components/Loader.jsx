import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import Particles from "../animations/Particles";

export default function Loader({ onFinish }) {

  const [progress, setProgress] = useState(0);
  const loaderRef = useRef();

  useEffect(() => {

    const interval = setInterval(() => {

      setProgress((prev) => {

        if (prev >= 100) {
          clearInterval(interval);

          gsap.to(loaderRef.current, {
            y: "-100%",
            duration: 1,
            ease: "power4.inOut",
            onComplete: onFinish
          });

          return 100;
        }

        return prev + 2;
      });

    }, 30);

    return () => clearInterval(interval);

  }, [onFinish]);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 bg-black flex items-center justify-center z-[999]"
    >

      {/* Particles Background */}
      <div className="absolute inset-0">
        <Particles />
      </div>

      {/* Loader Content */}
      <div className="relative z-10 text-center text-white">

        <h1 className="text-6xl font-bold tracking-widest mb-6">
          TALRAJ
        </h1>

        <p className="text-2xl">
          {progress}%
        </p>

        <div className="w-64 h-[2px] bg-gray-700 mt-4 mx-auto">
          <div
            className="h-full bg-white transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>

      </div>

    </div>
  );
}