import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaGithub, FaInstagram, FaDiscord, FaArrowRight, FaCopy, FaCheck } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const SOCIALS = [
  { name: 'Github', icon: FaGithub, link: 'https://github.com/disortion' },
  { name: 'Instagram', icon: FaInstagram, link: 'https://instagram.com/vi.roar3h' },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const sectionRef = useRef(null);
  const DISCORD_USERNAME = 'disortion.';

  useGSAP(() => {
    gsap.fromTo(".contact-reveal",
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      }
    );
  }, { scope: sectionRef });

  const handleCopy = () => {
    navigator.clipboard.writeText(DISCORD_USERNAME);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-32 md:py-60 bg-black text-ivory relative overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">

          {/* Header Side */}
          <div className="lg:col-span-12 xl:col-span-6 space-y-16">
            <div className="space-y-8">
              <h2 className="contact-reveal text-xs font-mono uppercase tracking-[0.6em] text-neutral-500">
                04. Connection // Dialogue
              </h2>
              <h3 className="contact-reveal text-5xl md:text-8xl font-display font-medium tracking-tighter leading-none italic">
                Let’s build <br />
                <span className="text-white not-italic">something</span> solid.
              </h3>
              <p className="contact-reveal text-neutral-400 text-lg md:text-xl font-body font-light leading-relaxed max-w-md">
                Want to work together? The best way to reach me is on Discord.
              </p>
            </div>

            <div className="contact-reveal space-y-8">
              <span className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest">Socials</span>
              <div className="flex gap-10">
                {SOCIALS.map((social) => (
                  <a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex flex-col items-center gap-4 text-neutral-500 hover:text-white transition-all duration-500"
                    data-cursor="GOTO"
                  >
                    <social.icon size={24} className="group-hover:-translate-y-1 transition-transform duration-500" />
                    <span className="text-[8px] font-mono uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity">
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Discord Copy Side */}
          <div className="lg:col-span-12 xl:col-span-6">
            <div className="contact-reveal bg-zinc-950 border border-white/5 p-8 md:p-16 flex flex-col items-center justify-center gap-8 text-center relative group overflow-hidden">
              {/* Background Decorative */}
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <FaDiscord size={120} />
              </div>

              <div className="space-y-4 relative z-10">
                <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">Direct Contact</span>
                <div className="flex flex-col gap-2">
                  <span className="text-3xl md:text-5xl font-display text-white tracking-tighter">
                    {DISCORD_USERNAME}
                  </span>
                </div>
              </div>

              <button
                onClick={handleCopy}
                className={`relative z-10 flex items-center gap-4 px-12 py-6 font-display font-bold text-xs uppercase tracking-[0.4em] transition-all duration-500 ${copied ? 'bg-white text-black' : 'bg-transparent border border-white/10 text-white hover:border-white hover:bg-white hover:text-black'
                  }`}
                data-cursor={copied ? "COPIED" : "COPY"}
              >
                {copied ? (
                  <>
                    <FaCheck />
                    <span>Copied Username</span>
                  </>
                ) : (
                  <>
                    <FaCopy />
                    <span>Copy Discord</span>
                  </>
                )}
              </button>

              <div className="absolute bottom-0 left-0 h-[1px] bg-white transition-all duration-700 w-0 group-hover:w-full" />
            </div>
          </div>

        </div>
      </div>

      {/* Global Branding Footer */}
      <footer className="mt-60 py-20 border-t border-white/5">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
          <div className="space-y-2">
            <h4 className="text-xl font-display font-bold tracking-tighter uppercase italic">Disortion</h4>
            <p className="text-[10px] font-mono text-neutral-600 uppercase tracking-[0.4em]">© 2026 // Stuff // Projects</p>
          </div>

          <div className="flex gap-4">
            <div className="w-10 h-[1px] bg-white/10" />
            <span className="text-[8px] font-mono text-neutral-700 uppercase tracking-[0.5em]">Built with Love</span>
            <div className="w-10 h-[1px] bg-white/10" />
          </div>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-[10px] font-mono text-neutral-500 hover:text-white transition-colors uppercase tracking-widest flex items-center gap-2 group"
          >
            Back to top <FaArrowRight className="-rotate-90 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </footer>

      <div className="noise-bg" />
    </section>
  );
}
