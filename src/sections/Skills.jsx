import { FaHtml5, FaCss3Alt, FaReact, FaPython, FaGithub, FaNodeJs } from 'react-icons/fa';
import { SiVite, SiFirebase, SiJavascript } from 'react-icons/si';
import SectionTitle from '../components/SectionTitle';
import SkillBubble from '../components/SkillBubble';
import './Skills.css';

const SKILL_CATEGORIES = [
  {
    title: 'Languages',
    skills: [
      { name: 'HTML', icon: FaHtml5, color: '#e44d26' },
      { name: 'CSS', icon: FaCss3Alt, color: '#264de4' },
      { name: 'JSX', icon: SiJavascript, color: '#f7df1e' },
      { name: 'React', icon: FaReact, color: '#61dafb' },
      { name: 'Python', icon: FaPython, color: '#3776ab' },
    ],
  },
  {
    title: 'Tools & Frameworks',
    skills: [
      { name: 'GitHub', icon: FaGithub, color: '#e8e8f0' },
      { name: 'Firebase', icon: SiFirebase, color: '#ffca28' },
      { name: 'Vite', icon: SiVite, color: '#646cff' },
      { name: 'Node.js', icon: FaNodeJs, color: '#68a063' },
      { name: 'React', icon: FaReact, color: '#61dafb' },
    ],
  },
];

export default function Skills() {
  let globalIndex = 0;

  return (
    <section id="skills" className="skills section-padding">
      {/* Decorative blobs */}
      <div className="skills__blob skills__blob--1" />
      <div className="skills__blob skills__blob--2" />

      <div className="container">
        <SectionTitle
          title="My Skills"
          subtitle="Technologies I work with and explore"
        />

        {SKILL_CATEGORIES.map((category, catIndex) => (
          <div key={catIndex} className="skills__category">
            <h3 className="skills__category-title">{category.title}</h3>
            <div className="skills__grid">
              {category.skills.map((skill) => {
                const idx = globalIndex++;
                return (
                  <SkillBubble
                    key={skill.name + catIndex}
                    skill={skill}
                    index={idx}
                  />
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
