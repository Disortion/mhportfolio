import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown, FaMapMarkerAlt, FaCoffee, FaLaptopCode } from 'react-icons/fa';
import { HiLightningBolt } from 'react-icons/hi';
import FancyButton from '../components/FancyButton';
import './Hero.css';

const TITLES = [
  'Future Computer Engineer',
  'Coffee-Powered Coder',
  'Problem Solver',
  'Tech Enthusiast',
  'Full-Stack Dreamer',
];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = TITLES[titleIndex];
    let timeout;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length + 1));
      }, 80);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length - 1));
      }, 40);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % TITLES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, titleIndex]);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollDown = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero section-padding">
      {/* Decorative background elements */}
      <div className="hero__bg-grid" />
      <div className="hero__blob hero__blob--1" />
      <div className="hero__blob hero__blob--2" />
      <div className="hero__blob hero__blob--3" />

      {/* Animated lines */}
      <motion.div
        className="hero__deco-line hero__deco-line--1"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.2, duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
      />
      <motion.div
        className="hero__deco-line hero__deco-line--2"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 1.5, duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
      />

      <div className="container hero__container">
        {/* Left content */}
        <div className="hero__content">
          <motion.div
            className="hero__badge"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, type: 'spring', stiffness: 120 }}
          >
            <HiLightningBolt className="hero__badge-icon" />
            <span>Available for opportunities</span>
          </motion.div>

          <motion.h1
            className="hero__name"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 80, damping: 15 }}
          >
            Hi, I'm{' '}
            <span className="hero__name-highlight">Mohammad</span>
          </motion.h1>

          <motion.div
            className="hero__typewriter"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <span className="hero__typewriter-text">{displayed}</span>
            <span className="hero__typewriter-cursor">|</span>
          </motion.div>

          <motion.p
            className="hero__description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            A 17-year-old from Jordan who loves turning caffeine into code.
            Building things that make people smile.
          </motion.p>

          <motion.div
            className="hero__cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <FancyButton
              text="See My Work"
              drawerTop="check it out..."
              drawerBottom="...cool stuff!"
              onClick={scrollToProjects}
            />
          </motion.div>

          {/* Stats row */}
          <motion.div
            className="hero__stats"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <div className="hero__stat">
              <span className="hero__stat-value">4+</span>
              <span className="hero__stat-label">Projects</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-value">10K+</span>
              <span className="hero__stat-label">Lines of Code</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-value">∞</span>
              <span className="hero__stat-label">Coffees</span>
            </div>
          </motion.div>
        </div>

        {/* Right visual */}
        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.4, type: 'spring', stiffness: 80, damping: 15 }}
        >
          <div className="hero__avatar-wrapper">
            <div className="hero__avatar-glow" />
            <div className="hero__avatar-card">
              <div className="hero__avatar-emoji">
                <svg viewBox="0 0 120 120" className="hero__avatar-svg">
                  {/* Cartoon laptop character */}
                  <rect x="20" y="45" width="80" height="50" rx="8" fill="#2d2d4a" stroke="#d8ff7c" strokeWidth="2"/>
                  <rect x="30" y="52" width="60" height="35" rx="4" fill="#1a1a2e"/>
                  {/* Screen content - code lines */}
                  <rect x="36" y="58" width="30" height="3" rx="1.5" fill="#d8ff7c" opacity="0.8"/>
                  <rect x="36" y="64" width="45" height="3" rx="1.5" fill="#7cc8ff" opacity="0.6"/>
                  <rect x="36" y="70" width="25" height="3" rx="1.5" fill="#ff7cd8" opacity="0.6"/>
                  <rect x="36" y="76" width="38" height="3" rx="1.5" fill="#fbff13" opacity="0.5"/>
                  {/* Keyboard base */}
                  <rect x="15" y="95" width="90" height="8" rx="4" fill="#2d2d4a" stroke="#d8ff7c33" strokeWidth="1"/>
                  {/* Coffee cup */}
                  <rect x="88" y="30" width="16" height="20" rx="3" fill="#ffb87c" opacity="0.9"/>
                  <path d="M104 36 Q112 36 112 42 Q112 48 104 48" fill="none" stroke="#ffb87c" strokeWidth="2" opacity="0.9"/>
                  {/* Steam */}
                  <path d="M92 28 Q94 22 92 16" fill="none" stroke="#d8ff7c44" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M96 26 Q98 20 96 14" fill="none" stroke="#d8ff7c33" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M100 28 Q102 22 100 16" fill="none" stroke="#d8ff7c22" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <motion.div
                className="hero__avatar-orbit"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              >
                <div className="hero__orbit-dot hero__orbit-dot--1" />
                <div className="hero__orbit-dot hero__orbit-dot--2" />
                <div className="hero__orbit-dot hero__orbit-dot--3" />
              </motion.div>
            </div>
          </div>

          {/* Floating info cards */}
          <motion.div
            className="hero__float-card hero__float-card--1"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            <FaMapMarkerAlt style={{ color: '#ff7cd8' }} />
            <span className="hero__float-card-text">Jordan</span>
          </motion.div>

          <motion.div
            className="hero__float-card hero__float-card--2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          >
            <FaCoffee style={{ color: '#ffb87c' }} />
            <span className="hero__float-card-text">Coffee Addict</span>
          </motion.div>

          <motion.div
            className="hero__float-card hero__float-card--3"
            animate={{ y: [0, -8, 0], x: [0, 5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          >
            <FaLaptopCode style={{ color: '#7cc8ff' }} />
            <span className="hero__float-card-text">Age 17</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        className="hero__scroll-indicator"
        onClick={scrollDown}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 1.5 },
          y: { duration: 1.5, repeat: Infinity, ease: 'easeInOut' },
        }}
      >
        <FaChevronDown />
      </motion.button>

      {/* Wavy divider */}
      <div className="hero__wave">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path
            d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z"
            fill="var(--color-bg)"
          />
        </svg>
      </div>
    </section>
  );
}
