import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiCheckCircle } from 'react-icons/fi';

const experiences = [
  {
    id: 1,
    company: 'Tata Steel',
    role: 'Industrial Intern',
    duration: 'Jun 2025 – Jul 2025',
    type: 'Internship',
    color: '#38BDF8',
    description: 'Worked on industrial automation and communication systems within the plant infrastructure. Gained hands-on experience with Siemens PLC programming, PROFIBUS networking, and SCADA systems.',
    technologies: ['Siemens PLCs', 'PROFIBUS DP/PA', 'Industrial Ethernet', 'SIMATIC WinCC', 'Ladder Logic'],
    highlights: [
      'Configured PROFIBUS DP/PA networks for field device communication',
      'Developed Ladder Logic programs for process automation',
      'Monitored and analyzed plant data using SIMATIC WinCC SCADA',
      'Collaborated with engineers on Industrial Ethernet topology design',
    ],
  },
  {
    id: 2,
    company: 'Day Dream Training',
    role: 'Soft Skills Participant',
    duration: 'Jan 2026',
    type: 'Training',
    color: '#8B5CF6',
    description: 'Participated in a comprehensive soft skills development program focused on communication, leadership, teamwork, and professional development for career readiness.',
    technologies: ['Communication', 'Leadership', 'Team Collaboration', 'Problem Solving'],
    highlights: [
      'Enhanced professional communication and presentation skills',
      'Developed leadership and team management capabilities',
      'Practiced critical thinking and creative problem solving',
      'Improved interpersonal skills for workplace environments',
    ],
  },
];

function ExperienceCard({ exp, index, isInView }) {
  const isLeft = index % 2 === 0;

  return (
    <div className={`flex items-start gap-6 ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
      {/* Timeline dot (desktop) */}
      <div className="hidden lg:flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ delay: index * 0.3 + 0.3, duration: 0.4 }}
          className="w-12 h-12 rounded-full flex items-center justify-center z-10 flex-shrink-0"
          style={{
            background: `${exp.color}20`,
            border: `2px solid ${exp.color}`,
            boxShadow: `0 0 20px ${exp.color}40`,
          }}
        >
          <FiBriefcase size={18} style={{ color: exp.color }} />
        </motion.div>
      </div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, delay: index * 0.3, ease: 'easeOut' }}
        className="flex-1 glass-card p-6 lg:p-8 group"
      >
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span
                className="text-xs font-medium px-2.5 py-1 rounded-full"
                style={{
                  background: `${exp.color}15`,
                  color: exp.color,
                  border: `1px solid ${exp.color}30`,
                }}
              >
                {exp.type}
              </span>
            </div>
            <h3 className="text-xl font-display font-bold text-white">{exp.role}</h3>
            <p className="text-lg font-semibold" style={{ color: exp.color }}>{exp.company}</p>
          </div>
          <div className="flex items-center gap-2 text-slate-400 text-sm bg-secondary/50 px-3 py-1.5 rounded-full">
            <FiCalendar size={14} />
            {exp.duration}
          </div>
        </div>

        <p className="text-slate-400 text-sm leading-relaxed mb-5">{exp.description}</p>

        {/* Highlights */}
        <div className="mb-5">
          <h4 className="text-xs uppercase tracking-wider text-slate-500 mb-3 font-semibold">Key Highlights</h4>
          <ul className="space-y-2">
            {exp.highlights.map((h, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.3 + 0.5 + i * 0.1 }}
                className="flex items-start gap-2 text-slate-300 text-sm"
              >
                <FiCheckCircle size={14} style={{ color: exp.color }} className="mt-0.5 flex-shrink-0" />
                {h}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2">
          {exp.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2.5 py-1 rounded-full font-medium transition-all duration-200 hover:scale-105"
              style={{
                background: `${exp.color}10`,
                color: exp.color,
                border: `1px solid ${exp.color}25`,
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="experience" className="py-24 lg:py-32 relative">
      <div className="absolute right-0 bottom-1/4 w-80 h-80 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-badge">
            <FiBriefcase size={12} />
            Experience
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mt-2">
            My <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            Real-world experience that shaped my skills and professional outlook.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden lg:block absolute left-6 top-6 bottom-6 w-px">
            <motion.div
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
              className="h-full w-full origin-top timeline-line"
            />
          </div>

          <div className="space-y-12 lg:pl-0">
            {experiences.map((exp, i) => (
              <ExperienceCard key={exp.id} exp={exp} index={i} isInView={isInView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
