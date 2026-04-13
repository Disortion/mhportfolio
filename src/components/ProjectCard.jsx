import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import './ProjectCard.css';

export default function ProjectCard({ project, index }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -12, y: x * 12 });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <motion.div
      className="project-card hoverable"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        delay: index * 0.15,
        type: 'spring',
        stiffness: 100,
        damping: 20,
      }}
      whileHover="hover"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
      }}
    >
      {/* Corner SVGs */}
      {[0, 1, 2, 3].map((i) => (
        <motion.svg
          key={i}
          className={`project-card__corner project-card__corner--${i}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-1 1 32 32"
          variants={{
            hover: { scale: 1.4, opacity: 1 },
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <path d="M32,32C14.355,32,0,17.645,0,0h.985c0,17.102,13.913,31.015,31.015,31.015v.985Z" />
        </motion.svg>
      ))}

      {/* Card gradient top */}
      <div className="project-card__gradient" style={{ background: project.gradient }} />

      {/* Icon */}
      <div className="project-card__icon-wrapper">
        <project.icon className="project-card__icon" />
      </div>

      {/* Content */}
      <h3 className="project-card__title">{project.title}</h3>
      <p className="project-card__description">{project.description}</p>

      {/* Tech drawer */}
      <motion.div
        className="project-card__tech-drawer"
        variants={{
          hover: { opacity: 1, y: 0, filter: 'blur(0px)' },
        }}
        initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
        transition={{ duration: 0.25 }}
      >
        {project.tech.map((t, i) => (
          <span key={i} className="project-card__tech-tag">{t}</span>
        ))}
      </motion.div>

      {/* Links */}
      <div className="project-card__links">
        {project.github && (
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card__link hoverable"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub /> Code
          </motion.a>
        )}
        {project.live && (
          <motion.a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card__link project-card__link--primary hoverable"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaExternalLinkAlt /> Live
          </motion.a>
        )}
      </div>
    </motion.div>
  );
}
