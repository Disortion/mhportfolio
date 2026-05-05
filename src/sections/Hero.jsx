import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef(null);
  const title1Ref = useRef(null);
  const title2Ref = useRef(null);
  const subRef = useRef(null);
  const buttonRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

    tl.fromTo(title1Ref.current,
      { y: 100, opacity: 0, rotateX: -20 },
      { y: 0, opacity: 1, rotateX: 0, duration: 1.5, delay: 0.5 }
    )
      .fromTo(title2Ref.current,
        { y: 100, opacity: 0, rotateX: -20 },
        { y: 0, opacity: 1, rotateX: 0, duration: 1.5 },
        "-=1.2"
      )
      .fromTo(subRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        "-=1"
      )
      .fromTo(buttonRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1 },
        "-=0.8"
      );

    // Parallax effect on scroll
    gsap.to(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
      y: 200,
      opacity: 0.5,
      ease: "none"
    });
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full flex flex-col items-center justify-center bg-black overflow-hidden px-6"
    >
      {/* Premium Background Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-ivory/5 rounded-full blur-[120px] animate-slow-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] animate-slow-glow [animation-delay:2s]" />
      </div>

      <div className="relative z-10 text-center max-w-5xl">
        <div className="mb-8 overflow-hidden">
          <h1
            ref={title1Ref}
            className="text-6xl md:text-[10rem] font-display font-medium leading-[0.8] tracking-tighter text-white uppercase italic select-none"
          >
            Disortion
          </h1>
        </div>

        <div className="mb-12 overflow-hidden py-2 text-white">
          <h1
            ref={title2Ref}
            className="text-6xl md:text-[10rem] font-display font-light leading-[0.8] tracking-tighter uppercase outline-text select-none"
            style={{ WebkitTextStroke: "1px white", color: "transparent" }}
          >
            Portfolio
          </h1>
        </div>

        <div className="flex flex-col items-center gap-12">
          <p
            ref={subRef}
            className="max-w-xl text-neutral-400 font-body text-sm md:text-lg leading-relaxed lowercase"
          >
            building stuff.
          </p>

          <div ref={buttonRef}>
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-12 py-5 bg-white text-black font-display font-bold text-xs uppercase tracking-[0.4em] overflow-hidden transition-all duration-500 hover:px-16"
              data-cursor="EXPLORE"
            >
              <span className="relative z-10">Enter the flow</span>
              <div className="absolute inset-0 bg-ivory -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-expo" />
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
        <span className="text-[10px] font-mono uppercase tracking-[0.5em] text-neutral-600">Scroll to explore</span>
        <div className="w-[1px] h-20 bg-gradient-to-b from-white to-transparent opacity-20" />
      </div>

      <div className="noise-bg" />
    </section>
  );
}
