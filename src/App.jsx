import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import CustomCursor from './components/CustomCursor';
import { TracingBeam } from './components/ui/tracing-beam';
import { TooltipProvider } from './components/ui/tooltip';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

function App() {
  useEffect(() => {
    // Initialize Lenis for Premium Smooth Scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <TooltipProvider>
      <div className="bg-black min-h-screen text-white font-body selection:bg-white selection:text-black overflow-x-hidden antialiased">
        <CustomCursor />
        <Navbar />

        <main className="relative">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>

        <div className="noise-bg" />
      </div>
    </TooltipProvider>
  );
}

export default App;
