import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const PROJECTS = [
  {
    title: 'Fisca',
    id: '01',
    description: 'Clean task management. Built for efficiency.',
    tech: ['React', 'Firebase'],
    link: 'https://disortion.web.app',
    github: 'https://github.com/disortion/fisca',
    image: '/assets/projects/fisca.png',
  },
  {
    title: 'Olive-MUN',
    id: '02',
    description: 'Model United Nations portal. Dashboard for delegate management.',
    tech: ['React', 'Firebase', 'Node.js'],
    link: 'https://olive-mun.web.app',
    github: 'https://github.com/disortion/olive-mun',
    image: '/assets/projects/olive.jpg',
  },
  {
    title: 'FlowLemon',
    id: '03',
    description: 'Kanban board for workflows. Simple drag and drop.',
    tech: ['React', 'Firebase'],
    link: 'https://flowlemon.web.app',
    github: 'https://github.com/disortion/flowlemon',
    image: '/assets/projects/flow.png',
  },
  {
    title: 'CineStream',
    id: '04',
    description: 'High-performance media streaming engine built with Rust and Tauri for zero overhead and native speed.',
    tech: ['Rust', 'Tauri', 'React'],
    link: null,
    github: 'https://github.com/disortion/cinestream',
    image: null,
  },
];

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);
  const visualsRef = useRef(null);

  useGSAP(() => {
    // Entrance animation
    gsap.fromTo(cardRef.current.querySelectorAll('.project-reveal'),
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 80%",
        }
      }
    );

    // Visuals parallax
    gsap.to(visualsRef.current, {
      y: -50,
      ease: "none",
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      }
    });

    // Tilt effect on mouse move
    const card = cardRef.current;
    if (!card) return;

    const onMouseMove = (e) => {
      const { left, top, width, height } = card.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;

      gsap.to(visualsRef.current, {
        rotateY: x * 10,
        rotateX: -y * 10,
        duration: 0.5,
        ease: "power2.out"
      });
    };

    const onMouseLeave = () => {
      gsap.to(visualsRef.current, {
        rotateY: 0,
        rotateX: 0,
        duration: 0.8,
        ease: "elastic.out(1, 0.3)"
      });
    };

    card.addEventListener("mousemove", onMouseMove);
    card.addEventListener("mouseleave", onMouseLeave);

    return () => {
      card.removeEventListener("mousemove", onMouseMove);
      card.removeEventListener("mouseleave", onMouseLeave);
    };
  }, { scope: cardRef });

  return (
    <div
      ref={cardRef}
      className="group relative pt-24 pb-32 border-b border-white/5 last:border-0"
    >
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        {/* Info Side */}
        <div className="lg:col-span-12 xl:col-span-8 xl:col-start-3 space-y-12">
          <div className="space-y-6">
            <span className="project-reveal block text-[10px] font-mono text-neutral-600 uppercase tracking-[0.5em]">
              Project // {project.id}
            </span>
            <h3 className="project-reveal text-5xl md:text-7xl font-display font-medium text-white italic tracking-tighter group-hover:text-ivory transition-colors">
              {project.title}
            </h3>
          </div>

          <p className="project-reveal text-neutral-400 text-lg md:text-xl font-body font-light leading-relaxed max-w-4xl">
            {project.description}
          </p>

          <div className="project-reveal flex flex-wrap gap-4">
            {project.tech.map((t) => (
              <span key={t} className="text-[9px] font-mono tracking-[0.2em] text-neutral-500 border border-white/5 px-4 py-2 uppercase bg-zinc-950">
                {t}
              </span>
            ))}
          </div>

          <div className="project-reveal flex items-center gap-10 pt-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="text-neutral-500 hover:text-white transition-all flex items-center gap-3 group/link"
                data-cursor="GITHUB"
              >
                <FaGithub size={24} />
                <span className="text-[10px] uppercase tracking-[0.3em] font-mono opacity-0 group-hover/link:opacity-100 transition-opacity">Source Code</span>
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="text-neutral-500 hover:text-white transition-all flex items-center gap-3 group/link"
                data-cursor="LIVE"
              >
                <FaExternalLinkAlt size={20} />
                <span className="text-[10px] uppercase tracking-[0.3em] font-mono opacity-0 group-hover/link:opacity-100 transition-opacity">Live Preview</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Projects() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(".projects-header",
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
      id="projects"
      ref={containerRef}
      className="py-32 bg-black relative"
    >
      <div className="container mx-auto px-6 mb-24">
        <div className="projects-header">
          <h2 className="text-xs font-mono uppercase tracking-[0.6em] text-neutral-500 mb-6">
            03. Portfolio // Selected Works
          </h2>
          <h3 className="text-5xl md:text-8xl font-display font-medium tracking-tighter leading-none italic text-ivory">
            Built <br />
            <span className="text-white not-italic">Works /</span>
          </h3>
        </div>
      </div>

      <div className="relative z-10">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>

      {/* Decorative vertical line */}
      <div className="absolute left-6 md:left-24 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/5 to-transparent pointer-events-none" />
    </section>
  );
}
