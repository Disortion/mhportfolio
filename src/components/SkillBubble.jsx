import { motion } from 'framer-motion';
import './SkillBubble.css';

export default function SkillBubble({ skill, index }) {
  return (
    <motion.div
      className="skill-bubble hoverable"
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{
        delay: index * 0.06,
        type: 'spring',
        stiffness: 260,
        damping: 20,
      }}
      whileHover={{
        scale: 1.1,
        rotate: [0, -3, 3, -2, 0],
        transition: { rotate: { duration: 0.5 } },
      }}
      whileTap={{ scale: 0.9 }}
    >
      <skill.icon
        className="skill-bubble__icon"
        style={{ color: skill.color }}
      />
      <span className="skill-bubble__label">{skill.name}</span>
    </motion.div>
  );
}
