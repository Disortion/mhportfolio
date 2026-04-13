import { motion } from 'framer-motion';
import './FancyButton.css';

export default function FancyButton({
  text = 'Click Me',
  drawerTop = '',
  drawerBottom = '',
  onClick,
  className = '',
  type = 'button',
}) {
  return (
    <motion.div
      className={`fancy-btn-container ${className}`}
      whileHover="hover"
      whileTap="tap"
    >
      {drawerTop && (
        <motion.div
          className="fancy-btn-drawer fancy-btn-drawer--top"
          variants={{
            hover: { y: -28, opacity: 1, filter: 'blur(0px)', rotate: 4 },
            tap: { y: 0, scale: 0.5, opacity: 0.5 },
          }}
        >
          {drawerTop}
        </motion.div>
      )}
      {drawerBottom && (
        <motion.div
          className="fancy-btn-drawer fancy-btn-drawer--bottom"
          variants={{
            hover: { y: 28, opacity: 1, filter: 'blur(0px)', rotate: 4 },
            tap: { y: 0, scale: 0.5, opacity: 0.5 },
          }}
        >
          {drawerBottom}
        </motion.div>
      )}

      <motion.button
        className="fancy-btn hoverable"
        onClick={onClick}
        type={type}
        variants={{
          hover: { scale: 1.05, filter: 'drop-shadow(0 16px 16px #0002)' },
          tap: { scale: 0.95, filter: 'drop-shadow(0 10px 4px #0002)' },
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      >
        <span className="fancy-btn__text">{text}</span>
      </motion.button>

      {/* Corner SVGs */}
      {[0, 1, 2, 3].map((i) => (
        <motion.svg
          key={i}
          className={`fancy-btn-corner fancy-btn-corner--${i}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-1 1 32 32"
          variants={{
            hover: {
              scale: 1.3,
              filter: 'drop-shadow(-10px 10px 1px #0004) drop-shadow(-20px 20px 2px #0004)',
            },
            tap: {
              scale: 0.9,
              filter: 'drop-shadow(-10px 10px 2px #0005) drop-shadow(-20px 20px 3px #0005)',
            },
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <path d="M32,32C14.355,32,0,17.645,0,0h.985c0,17.102,13.913,31.015,31.015,31.015v.985Z" />
        </motion.svg>
      ))}
    </motion.div>
  );
}
