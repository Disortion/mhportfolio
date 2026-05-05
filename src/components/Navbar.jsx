import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const NAV_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Expertise' },
  { id: 'projects', label: 'Works' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const navRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = NAV_LINKS.map(l => document.getElementById(l.id));
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(NAV_LINKS[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useGSAP(() => {
    gsap.fromTo(navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power4.out", delay: 1 }
    );
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${scrolled
          ? 'py-4 bg-black/40 backdrop-blur-xl border-b border-white/5'
          : 'py-10 bg-transparent'
        }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">

        {/* Branding */}
        <button
          ref={logoRef}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="group flex items-center gap-4 py-2"
          data-cursor="TOP"
        >
          <div className="w-8 h-8 bg-white flex items-center justify-center rounded-sm group-hover:rotate-45 transition-transform duration-500">
            <span className="text-black font-display font-black text-sm -rotate-45">D</span>
          </div>
          <div className="flex flex-col items-start leading-none mt-1">
            <span className="text-sm font-display font-bold tracking-tighter text-white uppercase italic">Disortion</span>
            <span className="text-[8px] font-mono text-neutral-600 uppercase tracking-widest">Building Stuff.</span>
          </div>
        </button>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-12">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="relative py-2 group overflow-hidden"
              data-cursor="LINK"
            >
              <span className={`text-[10px] font-display uppercase tracking-[0.2em] transition-all duration-500 ${activeSection === link.id ? 'text-white' : 'text-neutral-500 group-hover:text-white'
                }`}>
                {link.label}
              </span>
              <div className={`absolute bottom-0 left-0 h-[1px] bg-white transition-all duration-500 ${activeSection === link.id ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
            </button>
          ))}
        </div>

        {/* Global Status/Action */}
        <div className="hidden sm:flex items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
            <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-[0.3em]">Available</span>
          </div>

          <button
            onClick={() => scrollTo('contact')}
            className="px-6 py-2 border border-white/10 hover:border-white transition-all duration-500 font-display text-[9px] uppercase tracking-widest text-white hover:bg-white hover:text-black"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Menu Placeholder - Can be expanded */}
        <div className="md:hidden">
          <button className="w-8 h-8 flex flex-col justify-center gap-1.5 items-end">
            <div className="w-8 h-[1px] bg-white" />
            <div className="w-5 h-[1px] bg-white" />
          </button>
        </div>

      </div>
    </nav>
  );
}
