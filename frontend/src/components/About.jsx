import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  FiMapPin, FiBook, FiAward, FiTarget, FiUser
} from 'react-icons/fi';

const infoCards = [
  {
    icon: FiMapPin,
    label: 'Location',
    value: 'Jamshedpur, Jharkhand',
    color: '#38BDF8',
  },
  {
    icon: FiBook,
    label: 'Education',
    value: 'B.Tech CS & IT',
    color: '#8B5CF6',
  },
  {
    icon: FiAward,
    label: 'University',
    value: 'C.V. Raman Global',
    color: '#38BDF8',
  },
  {
    icon: FiTarget,
    label: 'CGPA',
    value: '7.08 / 10',
    color: '#8B5CF6',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

function ProfileAvatar() {
  return (
    <div className="relative flex items-center justify-center">
      {/* Rotating ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute w-64 h-64 lg:w-80 lg:h-80 rounded-full border border-dashed border-accent/30"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        className="absolute w-56 h-56 lg:w-72 lg:h-72 rounded-full border border-dashed border-purple/20"
      />

      {/* Glow ring */}
      <div className="absolute w-52 h-52 lg:w-64 lg:h-64 rounded-full animate-glow-pulse" />

      {/* Avatar circle */}
      <div className="relative w-48 h-48 lg:w-60 lg:h-60 rounded-full overflow-hidden border-2 border-accent/40"
        style={{ boxShadow: '0 0 40px rgba(56,189,248,0.3), 0 0 80px rgba(56,189,248,0.1)' }}
      >
        <div className="w-full h-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center">
          <div className="text-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent/30 to-purple/30 flex items-center justify-center mx-auto mb-2 border border-accent/30">
              <FiUser size={40} className="text-accent" />
            </div>
            <span className="font-display text-sm font-bold gradient-text">Deepak Das</span>
          </div>
        </div>
      </div>

      {/* Floating badge */}
      <motion.div
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -right-4 top-8 glass px-3 py-1.5 rounded-xl border border-accent/20"
      >
        <span className="text-xs text-accent font-medium">Full Stack Dev</span>
      </motion.div>
      <motion.div
        animate={{ y: [5, -5, 5] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -left-4 bottom-12 glass px-3 py-1.5 rounded-xl border border-purple/20"
      >
        <span className="text-xs text-purple-400 font-medium">AI Enthusiast</span>
      </motion.div>
    </div>
  );
}

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 lg:py-32 relative">
      {/* Background glow */}
      <div className="absolute right-0 top-1/2 w-96 h-96 bg-purple/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
          ref={ref}
        >
          <span className="section-badge">
            <FiUser size={12} />
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mt-2">
            Who I <span className="gradient-text">Am</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            Passionate about building impactful tech solutions at the intersection of AI and web development.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Avatar */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <ProfileAvatar />
          </motion.div>

          {/* Right — Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-display font-bold text-white mb-4">
                Deepak Das
                <span className="neon-text-blue text-base font-sans font-normal ml-3">@ Jamshedpur</span>
              </h3>
              <p className="text-slate-400 leading-relaxed mb-8">
                Motivated Computer Science and IT student with hands-on experience in industrial
                communication systems and a strong interest in AI, machine learning, cybersecurity,
                and modern web development. I thrive at the crossroads of hardware and software,
                constantly pushing boundaries to build smarter, more connected systems.
              </p>
            </motion.div>

            {/* Career Objective */}
            <motion.div
              variants={itemVariants}
              className="glass-card p-5 mb-8"
            >
              <div className="flex items-center gap-2 mb-3">
                <FiTarget size={16} className="text-accent" />
                <h4 className="text-accent font-semibold text-sm uppercase tracking-wider">Career Objective</h4>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                To leverage my technical skills in full-stack development and AI/ML to contribute to 
                innovative projects that solve real-world problems, while continuously growing as 
                a developer and engineer in a dynamic, collaborative environment.
              </p>
            </motion.div>

            {/* Info Cards */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-4"
            >
              {infoCards.map(({ icon: Icon, label, value, color }) => (
                <motion.div
                  key={label}
                  whileHover={{ scale: 1.03, translateY: -2 }}
                  className="glass-card p-4 group"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: `${color}15`, border: `1px solid ${color}30` }}
                    >
                      <Icon size={16} style={{ color }} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-slate-500 text-xs mb-0.5">{label}</p>
                      <p className="text-white font-medium text-sm truncate">{value}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
