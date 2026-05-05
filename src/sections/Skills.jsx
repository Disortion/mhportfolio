import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import {
  SiJavascript, SiReact, SiTauri,
  SiNodedotjs, SiPython, SiFigma,
  SiGit, SiFirebase, SiVite, SiFramer, SiGreensock
} from 'react-icons/si';

const SKILLS = [
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'React', icon: SiReact },
  { name: 'Tauri', icon: SiTauri },
  { name: 'Firebase', icon: SiFirebase },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'Python', icon: SiPython },
  { name: 'Vite', icon: SiVite },
  { name: 'Git', icon: SiGit },
  { name: 'Figma', icon: SiFigma },
  { name: 'GSAP', icon: SiGreensock },
];

export default function Skills() {
  const containerRef = useRef(null);
  const marqueeRef = useRef(null);

  useGSAP(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    const row = marquee.querySelector('.marquee-row');
    const rowWidth = row.offsetWidth;

    // Duplicate for seamless loop
    const clone = row.cloneNode(true);
    marquee.appendChild(clone);

    gsap.to(marquee, {
      x: -rowWidth,
      duration: 30,
      ease: "none",
      repeat: -1,
      runBackwards: false
    });

    // Vertical parallax for the section title
    gsap.fromTo(".skills-title",
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section
      id="skills"
      ref={containerRef}
      className="py-32 bg-black overflow-hidden relative"
    >
      <div className="container mx-auto px-6 mb-24">
        <div className="flex flex-col md:flex-row justify-between items-end gap-12">
          <div className="skills-title">
            <h2 className="text-xs font-mono uppercase tracking-[0.6em] text-neutral-500 mb-6">
              02. Expertise // Toolbox
            </h2>
            <h3 className="text-5xl md:text-8xl font-display font-medium tracking-tighter leading-none italic text-ivory">
              Modern Tech <br />
              <span className="text-white not-italic">Stack /</span>
            </h3>
          </div>
          <p className="max-w-xs text-neutral-500 font-body text-sm leading-relaxed mb-4">
            The tools I use to build stuff. Focused on speed and functionality.
          </p>
        </div>
      </div>

      {/* GSAP Infinite Marquee */}
      <div className="relative py-20 border-y border-white/5 bg-zinc-950/20 backdrop-blur-sm">
        <div
          ref={marqueeRef}
          className="flex whitespace-nowrap will-change-transform"
        >
          <div className="marquee-row flex items-center gap-24 px-12">
            {SKILLS.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center gap-6 group cursor-none"
                data-cursor="CORE"
              >
                <skill.icon className="text-6xl text-neutral-600 group-hover:text-white transition-all duration-500 group-hover:scale-110" />
                <span className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter text-neutral-800 group-hover:text-ivory transition-all duration-500">
                  {skill.name}
                </span>
                <div className="w-3 h-3 bg-white/10 rounded-full" />
              </div>
            ))}
          </div>
        </div>

        {/* Gradient Masks */}
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-black to-transparent z-10" />
      </div>

      {/* Background Decorative Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] font-display font-bold text-white/[0.01] pointer-events-none select-none uppercase tracking-tighter">
        ENGINEERING
      </div>
    </section>
  );
}
