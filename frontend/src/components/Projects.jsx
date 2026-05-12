import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiX, FiCode,
  FiLayers, FiCpu
} from 'react-icons/fi';
import { SiPython, SiJavascript, SiHtml5, SiCss, SiReact, SiScikitlearn } from 'react-icons/si';

const projects = [
  {
    id: 1,
    title: 'Fake News Detection with AI',
    tagline: 'AI-Powered Misinformation Detection',
    description: 'An intelligent system that leverages machine learning and NLP techniques to detect and classify fake news articles with high accuracy. Built using Python and scikit-learn with a research-driven approach.',
    longDescription: `This project addresses the critical problem of online misinformation by implementing a machine learning pipeline for fake news detection. The system:

• Preprocesses text data using NLP techniques (tokenization, stopword removal, TF-IDF vectorization)
• Trains multiple ML classifiers (Naive Bayes, Logistic Regression, Random Forest)
• Achieves 94%+ accuracy on standard benchmark datasets
• Provides confidence scores for each prediction
• Features a clean web interface for real-time news verification

The research-driven approach ensures the model generalizes well across different news domains and writing styles.`,
    icon: FiCpu,
    color: '#38BDF8',
    gradient: 'from-cyan-500/20 to-blue-500/20',
    techStack: ['Python', 'scikit-learn', 'NLP', 'Pandas', 'NumPy', 'Flask'],
    techIcons: [SiPython, SiScikitlearn],
    github: 'https://github.com/caremelluver/fake-news-detection',
    demo: '#',
    highlights: ['94%+ accuracy', 'NLP Pipeline', 'Multiple ML Models'],
    status: 'Completed',
  },
  {
    id: 2,
    title: 'Political Leaders Case Study',
    tagline: 'Interactive Educational Web Project',
    description: 'A fully responsive, interactive web project exploring political leadership profiles with dynamic content sections, smooth animations, and an engaging UI built with vanilla web technologies.',
    longDescription: `An educational web platform that presents in-depth case studies of political leaders with:

• Fully responsive design using HTML5, CSS3, and JavaScript
• Interactive timeline of key events and decisions
• Dynamic content sections with smooth CSS animations
• Image galleries with lightbox functionality  
• Search and filter functionality for easy navigation
• Accessible design following WCAG guidelines
• Cross-browser compatibility

The project showcases strong frontend fundamentals and the ability to build engaging user experiences without heavy frameworks.`,
    icon: FiLayers,
    color: '#8B5CF6',
    gradient: 'from-purple-500/20 to-violet-500/20',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'CSS Animation'],
    techIcons: [SiHtml5, SiCss, SiJavascript],
    github: 'https://github.com/caremelluver/political-leaders',
    demo: '#',
    highlights: ['Fully Responsive', 'No Framework', 'Animated UI'],
    status: 'Completed',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

function ProjectModal({ project, onClose }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="modal-overlay"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="glass-card max-w-2xl w-full p-8 relative max-h-[85vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full glass flex items-center justify-center text-slate-400 hover:text-white hover:bg-red-500/20 transition-all"
          >
            <FiX size={16} />
          </button>

          {/* Header */}
          <div className="mb-6">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
              style={{ background: `${project.color}20`, border: `1px solid ${project.color}40` }}
            >
              <project.icon size={22} style={{ color: project.color }} />
            </div>
            <span
              className="text-xs px-2.5 py-1 rounded-full font-medium mb-3 inline-block"
              style={{ background: `${project.color}15`, color: project.color, border: `1px solid ${project.color}30` }}
            >
              {project.status}
            </span>
            <h3 className="text-2xl font-display font-bold text-white">{project.title}</h3>
            <p className="text-sm font-medium mt-1" style={{ color: project.color }}>{project.tagline}</p>
          </div>

          {/* Description */}
          <div className="prose prose-sm prose-invert max-w-none mb-6">
            <pre className="text-slate-300 text-sm leading-relaxed whitespace-pre-wrap font-sans">
              {project.longDescription}
            </pre>
          </div>

          {/* Tech stack */}
          <div className="mb-6">
            <h4 className="text-xs uppercase tracking-wider text-slate-500 mb-3 font-semibold">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-3 py-1.5 rounded-full font-medium"
                  style={{ background: `${project.color}10`, color: project.color, border: `1px solid ${project.color}25` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 btn-primary text-sm flex-1 justify-center"
            >
              <FiGithub size={16} />
              View Code
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 btn-outline text-sm flex-1 justify-center"
            >
              <FiExternalLink size={16} />
              Live Demo
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function ProjectCard({ project, onOpen }) {
  const Icon = project.icon;

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -8 }}
      className="glass-card p-6 lg:p-8 relative overflow-hidden group cursor-pointer flex flex-col h-full"
      onClick={() => onOpen(project)}
    >
      {/* Background gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}
      />

      {/* Glow */}
      <div
        className="absolute -top-16 -right-16 w-48 h-48 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-all duration-500"
        style={{ background: project.color }}
      />

      <div className="relative z-10 flex flex-col h-full">
        {/* Icon + Status */}
        <div className="flex items-start justify-between mb-5">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center"
            style={{
              background: `${project.color}15`,
              border: `1px solid ${project.color}30`,
              boxShadow: `0 0 20px ${project.color}20`,
            }}
          >
            <Icon size={22} style={{ color: project.color }} />
          </div>
          <span
            className="text-xs px-2.5 py-1 rounded-full font-medium"
            style={{ background: `${project.color}15`, color: project.color, border: `1px solid ${project.color}30` }}
          >
            {project.status}
          </span>
        </div>

        {/* Content */}
        <h3 className="text-lg font-display font-bold text-white mb-1 group-hover:gradient-text transition-all">
          {project.title}
        </h3>
        <p className="text-xs font-medium mb-3" style={{ color: project.color }}>{project.tagline}</p>
        <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-1">{project.description}</p>

        {/* Highlights */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.highlights.map((h) => (
            <span key={h} className="text-xs bg-white/5 text-slate-300 px-2.5 py-1 rounded-full border border-white/10">
              {h}
            </span>
          ))}
        </div>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-0.5 rounded font-medium"
              style={{ background: `${project.color}10`, color: project.color }}
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="text-xs px-2 py-0.5 rounded text-slate-500">
              +{project.techStack.length - 4}
            </span>
          )}
        </div>

        {/* Action buttons */}
        <div className="flex gap-3 mt-auto">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-white glass px-3 py-2 rounded-lg border border-white/10 hover:border-accent/40 transition-all"
          >
            <FiGithub size={13} /> Code
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-white glass px-3 py-2 rounded-lg border border-white/10 hover:border-purple/40 transition-all"
          >
            <FiExternalLink size={13} /> Demo
          </a>
          <button className="ml-auto text-xs text-accent hover:text-white transition-colors font-medium">
            View Details →
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 lg:py-32 relative">
      <div className="absolute left-1/2 top-1/4 w-96 h-96 bg-purple/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-badge">
            <FiCode size={12} />
            Projects
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mt-2">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            Projects that demonstrate my problem-solving approach and technical depth.
          </p>
        </motion.div>

        {/* Project Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-6 lg:gap-8"
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpen={setSelectedProject}
            />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/caremelluver"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2"
          >
            <FiGithub size={16} />
            View All on GitHub
          </a>
        </motion.div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
