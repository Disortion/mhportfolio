import { FaCheckSquare, FaGlobeAmericas, FaTrello, FaFilm } from 'react-icons/fa';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import './Projects.css';

const PROJECTS = [
  {
    title: 'Fisca',
    description:
      'A fun, cartoony ToDo list app. Easy and simple to use — just add your tasks and get things done with style.',
    icon: FaCheckSquare,
    gradient: 'linear-gradient(135deg, #d8ff7c, #fbff13)',
    tech: ['React', 'Firebase', 'CSS', 'Vite'],
    github: '',
    live: 'https://disortion.web.app',
  },
  {
    title: 'Olive-MUN',
    description:
      'A professional MUN website with a full application dashboard, status tracker, and streamlined application flow for delegates.',
    icon: FaGlobeAmericas,
    gradient: 'linear-gradient(135deg, #7cc8ff, #d8ff7c)',
    tech: ['React', 'Firebase', 'Node.js', 'Auth'],
    github: '',
    live: 'https://olive-mun.web.app',
  },
  {
    title: 'FlowLemon',
    description:
      'A Trello-like web app designed for simplicity. Organize your tasks in boards and columns — fun, clean, and easy to use.',
    icon: FaTrello,
    gradient: 'linear-gradient(135deg, #fbff13, #d8ff7c)',
    tech: ['React', 'Firebase', 'Drag & Drop', 'Vite'],
    github: '',
    live: 'https://flowlemon.web.app',
  },
  {
    title: 'CineStream',
    description:
      'A movies and shows streaming app with zero ads. Browse, discover, and watch your favorites with a clean, distraction-free interface.',
    icon: FaFilm,
    gradient: 'linear-gradient(135deg, #ff7cd8, #7cc8ff)',
    tech: ['React', 'Tauri', 'Rust', 'API'],
    github: 'https://github.com/disortion/cinestream',
    live: '',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects section-padding">
      {/* Decorative elements */}
      <div className="projects__blob projects__blob--1" />
      <div className="projects__blob projects__blob--2" />

      <div className="container">
        <SectionTitle
          title="My Projects"
          subtitle="Things I've built and am proud of"
        />

        <div className="projects__grid">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
