import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaCoffee, FaLaptopCode, FaGamepad, FaRocket, FaMicrochip, FaCode, FaCog } from 'react-icons/fa';
import { HiLightningBolt } from 'react-icons/hi';

const ICONS = [
  { Icon: FaCoffee, color: '#ffb87c' },
  { Icon: FaLaptopCode, color: '#7cc8ff' },
  { Icon: FaGamepad, color: '#ff7cd8' },
  { Icon: HiLightningBolt, color: '#fbff13' },
  { Icon: FaRocket, color: '#d8ff7c' },
  { Icon: FaMicrochip, color: '#7cc8ff' },
  { Icon: FaCode, color: '#d8ff7c' },
  { Icon: FaCog, color: '#ff7cd8' },
];

function FloatingIcon({ icon, index }) {
  const { Icon, color } = icon;
  const [position] = useState(() => ({
    left: `${Math.random() * 90 + 5}%`,
    top: `${Math.random() * 90 + 5}%`,
    size: Math.random() * 20 + 14,
    duration: Math.random() * 8 + 12,
    delay: index * 0.5,
  }));

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 0.15, 0.1, 0.15],
        scale: [0, 1, 0.9, 1],
        y: [0, -30, 10, -20, 0],
        x: [0, 15, -10, 5, 0],
        rotate: [0, 10, -5, 8, 0],
      }}
      transition={{
        duration: position.duration,
        delay: position.delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      style={{
        position: 'absolute',
        left: position.left,
        top: position.top,
        color: color,
        fontSize: position.size,
        pointerEvents: 'none',
        zIndex: 1,
        filter: 'blur(0.5px)',
      }}
    >
      <Icon />
    </motion.div>
  );
}

export default function FloatingIcons() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1,
        overflow: 'hidden',
      }}
    >
      {ICONS.map((icon, i) => (
        <FloatingIcon key={i} icon={icon} index={i} />
      ))}
    </div>
  );
}
