import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaArrowRight } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      }
    });

    tl.fromTo(".about-reveal",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out" }
    );

    gsap.fromTo(imageRef.current,
      { clipPath: "inset(100% 0 0 0)" },
      {
        clipPath: "inset(0% 0 0 0)",
        duration: 1.5,
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
        }
      }
    );
  }, { scope: sectionRef });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-32 md:py-60 bg-black text-ivory relative overflow-hidden"
    >
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">

        {/* Left Side: Text */}
        <div className="lg:col-span-7 space-y-12 order-2 lg:order-1">
          <div className="space-y-6">
            <h2 className="about-reveal text-xs font-mono uppercase tracking-[0.6em] text-neutral-500">
              01. Identity // Profile
            </h2>
            <h3 className="about-reveal text-5xl md:text-8xl font-display font-medium tracking-tighter leading-none italic">
              Code is the <br />
              <span className="text-white not-italic">blueprint</span> for everything.
            </h3>
          </div>

          <div ref={textRef} className="about-reveal space-y-8 text-neutral-400 text-lg md:text-2xl font-body font-light leading-relaxed max-w-2xl">
            <p>
              I’m <span className="text-white font-medium">Disortion</span>. I build stuff that works.
            </p>
            <p>
              I focus on the intersection of structure and speed. I create digital tools that are fast, clean, and intentional.
            </p>
            <p>
              No fluff. Just solid code and functional design.
            </p>
          </div>

          <div className="about-reveal flex flex-wrap gap-8 pt-6">
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest">Focus</span>
              <span className="text-sm font-display uppercase tracking-widest flex items-center gap-2 text-white">
                Building Stuff
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest">Base</span>
              <span className="text-sm font-display uppercase tracking-widest flex items-center gap-2 text-white">
                Digital Sandbox
              </span>
            </div>
          </div>
        </div>

        {/* Right Side: Visual Image/Box */}
        <div className="lg:col-span-5 order-1 lg:order-2">
          <div
            ref={imageRef}
            className="relative aspect-[4/5] bg-zinc-950 border border-white/5 overflow-hidden group"
          >
            {/* Minimalist visual representation instead of a placeholder image */}
            <div className="absolute inset-0 flex flex-col justify-between p-12">
              <div className="flex justify-between items-start">
                <div className="w-12 h-[1px] bg-white/20" />
                <span className="text-[8px] font-mono text-white/20 uppercase tracking-[0.5em] rotate-90 origin-right translate-y-8">
                  V.1.0 // IDENTITY
                </span>
              </div>
              <div className="space-y-4">
                <div className="text-8xl font-display font-bold text-white/5 select-none leading-none">
                  DISORTION
                </div>
                <div className="w-full h-[1px] bg-gradient-to-r from-white/20 to-transparent" />
              </div>
            </div>

            {/* Subtle glow effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-white/[0.02] blur-3xl rounded-full" />

            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
          </div>
        </div>

      </div>
    </section>
  );
}
