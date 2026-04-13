import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './SectionTitle.css';

export default function SectionTitle({ title, subtitle }) {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      className="section-title"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
    >
      <h2 className="section-title__text">
        {title.split('').map((char, i) => (
          <motion.span
            key={i}
            className="section-title__char"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              delay: i * 0.03,
              type: 'spring',
              stiffness: 200,
              damping: 15,
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </h2>
      <motion.div
        className="section-title__underline"
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ delay: 0.3, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      />
      {subtitle && (
        <motion.p
          className="section-title__subtitle"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
