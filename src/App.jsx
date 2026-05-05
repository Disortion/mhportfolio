import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import CustomCursor from './components/CustomCursor';


function App() {
  return (
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
  );
}

export default App;
