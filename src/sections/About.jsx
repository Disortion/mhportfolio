import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCoffee, FaCode, FaMapMarkerAlt, FaGraduationCap, FaHeart, FaLaptopCode, FaJsSquare, FaGamepad } from 'react-icons/fa';
import SectionTitle from '../components/SectionTitle';
import './About.css';

const FUN_FACTS = [
  {
    icon: FaCoffee,
    color: '#ffb87c',
    title: 'Coffee Addict',
    value: '∞',
    subtitle: 'cups consumed',
  },
  {
    icon: FaCode,
    color: '#d8ff7c',
    title: 'Lines of Code',
    value: '10K+',
    subtitle: 'and counting',
  },
  {
    icon: FaLaptopCode,
    color: '#7cc8ff',
    title: 'Projects',
    value: '4+',
    subtitle: 'shipped & live',
  },
  {
    icon: FaHeart,
    color: '#ff7cd8',
    title: 'Passion Level',
    value: '100%',
    subtitle: 'always',
  },
];

const INTERESTS = [
  { icon: FaCoffee, label: 'Coffee', color: '#ffb87c' },
  { icon: FaLaptopCode, label: 'Coding', color: '#7cc8ff' },
  { icon: FaGamepad, label: 'Gaming', color: '#ff7cd8' },
  { icon: FaJsSquare, label: 'Open Source', color: '#f7df1e' },
];

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="about" className="about section-padding">
      {/* Decorative blobs */}
      <div className="about__blob about__blob--1" />
      <div className="about__blob about__blob--2" />

      <div className="container">
        <SectionTitle
          title="About Me"
          subtitle="Get to know the person behind the code"
        />

        <div className="about__grid" ref={ref}>
          {/* Text side */}
          <motion.div
            className="about__text"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ type: 'spring', stiffness: 80, damping: 20 }}
          >
            <div className="about__intro-card">
              <div className="about__intro-header">
                <FaMapMarkerAlt className="about__intro-icon" style={{ color: '#ff7cd8' }} />
                <span>Amman, Jordan</span>
              </div>
              <p className="about__bio">
                Hey there! I'm <strong>Mohammad Hawash</strong>, a 17-year-old high schooler
                with a serious passion for computers and an even more serious coffee habit.
              </p>
              <p className="about__bio">
                I dream of studying <strong>Computer Engineering</strong> at
                <strong> Princess Sumaya University for Technology (PSUT)</strong>,
                where I can dive deeper into the world of hardware and software.
              </p>
              <p className="about__bio">
                When I'm not coding, you'll find me exploring new tech, gaming, or
                brewing my next cup of coffee. I believe every line of code is a
                chance to make something awesome.
              </p>

              <div className="about__tags">
                <span className="about__tag">
                  <FaGraduationCap /> High School Student
                </span>
                <span className="about__tag">
                  <FaMapMarkerAlt /> Jordan
                </span>
                <span className="about__tag">
                  <FaCoffee /> Coffee Lover
                </span>
              </div>

              {/* Interests */}
              <div className="about__interests">
                <h4 className="about__interests-title">What I Love</h4>
                <div className="about__interests-grid">
                  {INTERESTS.map((interest, i) => (
                    <motion.div
                      key={i}
                      className="about__interest"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: i * 0.1 + 0.6, type: 'spring', stiffness: 200 }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <interest.icon style={{ color: interest.color, fontSize: '1.2rem' }} />
                      <span>{interest.label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Fun facts side */}
          <div className="about__facts">
            {FUN_FACTS.map((fact, i) => (
              <motion.div
                key={i}
                className="about__fact-card"
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{
                  delay: i * 0.1 + 0.2,
                  type: 'spring',
                  stiffness: 120,
                  damping: 15,
                }}
                whileHover={{
                  scale: 1.05,
                  rotate: i % 2 === 0 ? 2 : -2,
                  transition: { type: 'spring', stiffness: 400 },
                }}
              >
                <fact.icon
                  className="about__fact-icon"
                  style={{ color: fact.color }}
                />
                <div className="about__fact-value">{fact.value}</div>
                <div className="about__fact-title">{fact.title}</div>
                <div className="about__fact-subtitle">{fact.subtitle}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Wavy divider to next section */}
      <div className="about__wave">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path
            d="M0,40 C360,100 720,0 1080,50 C1260,75 1380,20 1440,40 L1440,100 L0,100 Z"
            fill="var(--color-bg-deep)"
          />
        </svg>
      </div>
    </section>
  );
}
