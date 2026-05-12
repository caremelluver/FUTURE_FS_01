import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  FiCode, FiZap
} from 'react-icons/fi';
import {
  SiHtml5, SiCss, SiJavascript, SiReact, SiNodedotjs,
  SiMongodb, SiPython, SiCplusplus, SiGit, SiLinux
} from 'react-icons/si';
import { MdSecurity, MdAnalytics } from 'react-icons/md';

const skills = [
  { name: 'HTML5', icon: SiHtml5, color: '#E34F26', level: 92 },
  { name: 'CSS3', icon: SiCss, color: '#1572B6', level: 88 },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', level: 82 },
  { name: 'React.js', icon: SiReact, color: '#61DAFB', level: 80 },
  { name: 'Node.js', icon: SiNodedotjs, color: '#68A063', level: 72 },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248', level: 68 },
  { name: 'Python', icon: SiPython, color: '#3776AB', level: 78 },
  { name: 'C++', icon: SiCplusplus, color: '#00599C', level: 70 },
  { name: 'Cybersecurity', icon: MdSecurity, color: '#EF4444', level: 65 },
  { name: 'Data Analytics', icon: MdAnalytics, color: '#8B5CF6', level: 62 },
  { name: 'Git & GitHub', icon: SiGit, color: '#F05032', level: 85 },
  { name: 'Linux', icon: SiLinux, color: '#FCC624', level: 60 },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

function SkillBar({ level, color, inView }) {
  return (
    <div className="h-1.5 bg-secondary rounded-full overflow-hidden mt-3">
      <motion.div
        initial={{ width: 0 }}
        animate={inView ? { width: `${level}%` } : { width: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
        className="h-full rounded-full relative"
        style={{
          background: `linear-gradient(90deg, ${color}80, ${color})`,
          boxShadow: `0 0 8px ${color}60`,
        }}
      >
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full"
          style={{ background: color, boxShadow: `0 0 6px ${color}` }}
        />
      </motion.div>
    </div>
  );
}

function SkillCard({ skill, index, inView }) {
  const [hovered, setHovered] = useState(false);
  const Icon = skill.icon;

  return (
    <motion.div
      variants={cardVariants}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -6, rotateX: 5, rotateY: 5 }}
      style={{ transformStyle: 'preserve-3d' }}
      className="glass-card p-5 relative overflow-hidden group"
    >
      {/* Background glow on hover */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 rounded-2xl"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${skill.color}10, transparent 70%)`,
        }}
      />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center gap-3">
            <motion.div
              animate={{ rotate: hovered ? 360 : 0 }}
              transition={{ duration: 0.6 }}
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{
                background: `${skill.color}15`,
                border: `1px solid ${skill.color}30`,
                boxShadow: hovered ? `0 0 15px ${skill.color}30` : 'none',
              }}
            >
              <Icon size={20} color={skill.color} />
            </motion.div>
            <div>
              <h3 className="text-white font-semibold text-sm">{skill.name}</h3>
            </div>
          </div>
        </div>
        <SkillBar level={skill.level} color={skill.color} inView={inView} />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" className="py-24 lg:py-32 relative">
      {/* Background */}
      <div className="absolute left-0 top-1/3 w-80 h-80 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-badge">
            <FiZap size={12} />
            Technical Skills
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mt-2">
            My <span className="gradient-text">Arsenal</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            Technologies and tools I use to craft exceptional digital experiences.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          {skills.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} inView={isInView} />
          ))}
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
        >
          {[
            { label: 'Technologies', value: '12+' },
            { label: 'Projects Built', value: '5+' },
            { label: 'Certifications', value: '6+' },
            { label: 'Months Experience', value: '18+' },
          ].map(({ label, value }) => (
            <div key={label} className="glass-card p-5 text-center">
              <div className="text-2xl font-display font-bold gradient-text">{value}</div>
              <div className="text-slate-400 text-sm mt-1">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
