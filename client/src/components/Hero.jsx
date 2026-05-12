import { useCallback } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { Link } from 'react-scroll';
import {
  FiGithub, FiLinkedin, FiMail, FiArrowDown,
  FiDownload, FiEye
} from 'react-icons/fi';
import {
  SiReact, SiNodedotjs, SiPython, SiMongodb,
  SiJavascript, SiCplusplus, SiDocker, SiGit
} from 'react-icons/si';

const floatingIcons = [
  { icon: SiReact, color: '#61DAFB', x: '8%', y: '25%', size: 32, delay: 0 },
  { icon: SiNodedotjs, color: '#68A063', x: '88%', y: '20%', size: 28, delay: 0.5 },
  { icon: SiPython, color: '#FFE873', x: '5%', y: '65%', size: 30, delay: 1 },
  { icon: SiMongodb, color: '#47A248', x: '92%', y: '55%', size: 26, delay: 1.5 },
  { icon: SiJavascript, color: '#F7DF1E', x: '15%', y: '80%', size: 28, delay: 0.3 },
  { icon: SiCplusplus, color: '#00599C', x: '82%', y: '78%', size: 26, delay: 0.8 },
  { icon: SiGit, color: '#F05032', x: '75%', y: '12%', size: 24, delay: 1.2 },
  { icon: SiDocker, color: '#2496ED', x: '20%', y: '12%', size: 26, delay: 0.6 },
];

const particlesConfig = {
  background: { color: { value: 'transparent' } },
  fpsLimit: 60,
  interactivity: {
    events: {
      onHover: { enable: true, mode: 'repulse' },
      onClick: { enable: true, mode: 'push' },
    },
    modes: {
      repulse: { distance: 120, duration: 0.4 },
      push: { quantity: 2 },
    },
  },
  particles: {
    color: { value: ['#38BDF8', '#8B5CF6', '#ffffff'] },
    links: {
      color: '#38BDF8',
      distance: 130,
      enable: true,
      opacity: 0.15,
      width: 1,
    },
    move: {
      direction: 'none',
      enable: true,
      outModes: { default: 'bounce' },
      random: true,
      speed: 0.8,
      straight: false,
    },
    number: { density: { enable: true, area: 900 }, value: 60 },
    opacity: { value: { min: 0.1, max: 0.5 } },
    shape: { type: 'circle' },
    size: { value: { min: 1, max: 3 } },
  },
  detectRetina: true,
};

export default function Hero() {
  const initParticles = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg"
    >
      {/* Particles */}
      <Particles id="tsparticles" init={initParticles} options={particlesConfig} />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-accent/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-purple/5 blur-[100px] pointer-events-none" />

      {/* Floating Tech Icons */}
      {floatingIcons.map(({ icon: Icon, color, x, y, size, delay }, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.7, 0.5, 0.7],
            scale: 1,
            y: [0, -15, 0, -10, 0],
          }}
          transition={{
            opacity: { delay: delay + 0.5, duration: 1 },
            scale: { delay: delay + 0.5, duration: 0.5 },
            y: {
              delay: delay + 1,
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            },
          }}
          className="absolute hidden lg:block"
          style={{ left: x, top: y }}
        >
          <div
            className="p-3 rounded-xl"
            style={{
              background: `${color}15`,
              border: `1px solid ${color}30`,
              boxShadow: `0 0 20px ${color}20`,
            }}
          >
            <Icon size={size} color={color} />
          </div>
        </motion.div>
      ))}

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-6"
        >
          <span className="section-badge">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Available for Internship & Projects
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold leading-tight mb-4">
            <span className="text-white">Hi, I'm </span>
            <span className="gradient-text">Deepak Das</span>
          </h1>
        </motion.div>

        {/* Typing animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="text-xl sm:text-2xl lg:text-3xl font-display font-medium mb-6 h-10"
        >
          <span className="text-slate-400">I'm a </span>
          <TypeAnimation
            sequence={[
              'CS & IT Student', 2000,
              'Full Stack Developer', 2000,
              'AI Enthusiast', 2000,
              'Problem Solver', 2000,
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            className="neon-text-blue"
          />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Motivated CS & IT student with hands-on experience in industrial communication systems,
          specializing in AI, machine learning, cybersecurity, and modern web development.
          Building tomorrow's digital solutions today.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <Link to="projects" smooth={true} duration={700} offset={-80}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary flex items-center gap-2 text-base"
            >
              <FiEye size={18} />
              View Projects
            </motion.button>
          </Link>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/resume.pdf"
            download
            className="btn-outline flex items-center gap-2 text-base"
          >
            <FiDownload size={18} />
            Download Resume
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="flex items-center justify-center gap-5"
        >
          {[
            { icon: FiGithub, href: 'https://github.com/caremelluver', label: 'GitHub' },
            { icon: FiLinkedin, href: 'https://linkedin.com/in/deepakdas', label: 'LinkedIn' },
            { icon: FiMail, href: 'mailto:deepakdas212004@gmail.com', label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="w-11 h-11 rounded-full glass flex items-center justify-center text-slate-400 hover:text-accent hover:border-accent/40 transition-all duration-300"
              aria-label={label}
            >
              <Icon size={18} />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-slate-500 text-xs font-medium tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <FiArrowDown size={18} className="text-accent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
