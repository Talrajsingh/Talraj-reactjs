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
import Loader from "./components/Loader";
import { useState } from "react";
import ClickSpark from './animations/ClickSpark'

export default function App() {
     const [loading, setLoading] = useState(true);

  if (loading) {
    return <Loader onFinish={() => setLoading(false)} />;
  }
    return (
        <div className="relative">

        <ClickSpark
  sparkColor='#fff'
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
            <About />
            <Services />
            <Work />
            <Testimonials />
            <Contact />
            <Footer />

            </ClickSpark>

        </div>
    )
}