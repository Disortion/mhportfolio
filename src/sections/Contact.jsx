import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter, FaPaperPlane, FaHeart, FaArrowUp } from 'react-icons/fa';
import SectionTitle from '../components/SectionTitle';
import FancyButton from '../components/FancyButton';
import './Contact.css';

const SOCIALS = [
  { icon: FaGithub, label: 'GitHub', href: 'https://github.com/disortion', color: '#e8e8f0' },
  { icon: FaLinkedin, label: 'LinkedIn', href: '#', color: '#0077b5' },
  { icon: FaTwitter, label: 'Twitter', href: '#', color: '#1da1f2' },
  { icon: FaEnvelope, label: 'Email', href: 'mailto:hello@mohawash.com', color: '#ff7cd8' },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  const scrollToTop = () => {
    document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="contact" className="contact section-padding">
      {/* Decorative */}
      <div className="contact__blob contact__blob--1" />
      <div className="contact__blob contact__blob--2" />

      {/* Wavy divider at top */}
      <div className="contact__wave-top">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path
            d="M0,40 C360,0 720,80 1080,30 C1260,10 1380,50 1440,40 L1440,0 L0,0 Z"
            fill="var(--color-bg)"
          />
        </svg>
      </div>

      <div className="container" ref={ref}>
        <SectionTitle
          title="Get In Touch"
          subtitle="Have a project in mind? Let's chat!"
        />

        <div className="contact__grid">
          {/* Form */}
          <motion.form
            className="contact__form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ type: 'spring', stiffness: 80, damping: 20 }}
          >
            <div className="contact__field">
              <label htmlFor="contact-name" className="contact__label">Name</label>
              <input
                id="contact-name"
                type="text"
                className="contact__input"
                placeholder="Your awesome name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div className="contact__field">
              <label htmlFor="contact-email" className="contact__label">Email</label>
              <input
                id="contact-email"
                type="email"
                className="contact__input"
                placeholder="you@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div className="contact__field">
              <label htmlFor="contact-message" className="contact__label">Message</label>
              <textarea
                id="contact-message"
                className="contact__input contact__textarea"
                placeholder="Tell me about your idea..."
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
            </div>

            <div className="contact__submit">
              {submitted ? (
                <motion.div
                  className="contact__success"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: 'spring' }}
                >
                  <FaPaperPlane /> Message sent! I'll get back to you soon.
                </motion.div>
              ) : (
                <FancyButton
                  text="Send Message"
                  drawerTop="ready?"
                  drawerBottom="...let's go!"
                  type="submit"
                />
              )}
            </div>
          </motion.form>

          {/* Social side */}
          <motion.div
            className="contact__social-side"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ type: 'spring', stiffness: 80, damping: 20, delay: 0.2 }}
          >
            <div className="contact__social-card">
              <motion.div
                className="contact__envelope"
                animate={{ rotate: [0, -5, 5, -3, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <FaEnvelope className="contact__envelope-icon" />
              </motion.div>

              <h3 className="contact__social-title">Let's connect!</h3>
              <p className="contact__social-text">
                I'm always open to discussing new projects,
                creative ideas, or opportunities to be part of something amazing.
              </p>

              <div className="contact__social-links">
                {SOCIALS.map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact__social-link"
                    whileHover={{ scale: 1.1, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: i * 0.1 + 0.5 }}
                    style={{ '--social-color': social.color }}
                  >
                    <social.icon className="contact__social-icon" />
                    <span>{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.footer
          className="contact__footer"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
        >
          <p>
            Built with <FaHeart className="contact__footer-heart" /> by Mohammad Hawash
          </p>
          <p className="contact__footer-year">© {new Date().getFullYear()}</p>
          <motion.button
            className="contact__back-to-top"
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -4 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaArrowUp /> Back to Top
          </motion.button>
        </motion.footer>
      </div>
    </section>
  );
}
