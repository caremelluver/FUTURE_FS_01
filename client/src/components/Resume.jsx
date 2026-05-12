import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  FiDownload, FiAward, FiBook, FiChevronLeft, FiChevronRight
} from 'react-icons/fi';
import { MdSchool, MdVerified } from 'react-icons/md';

const educationTimeline = [
  {
    degree: 'B.Tech in CS & IT',
    institution: 'C.V. Raman Global University',
    period: '2022 – 2026',
    grade: 'CGPA: 7.08',
    description: 'Comprehensive program covering data structures, algorithms, computer networks, operating systems, AI/ML, and web technologies.',
    color: '#38BDF8',
  },
  {
    degree: 'Higher Secondary (12th)',
    institution: 'Senior Secondary School',
    period: '2020 – 2022',
    grade: 'Science Stream',
    description: 'Focused on Physics, Chemistry, Mathematics, and Computer Science — building a strong analytical foundation.',
    color: '#8B5CF6',
  },
  {
    degree: 'Secondary (10th)',
    institution: 'High School, Jamshedpur',
    period: 'Up to 2020',
    grade: 'Distinction',
    description: 'Completed with distinction, developing a passion for technology and problem-solving.',
    color: '#38BDF8',
  },
];

const certifications = [
  {
    title: 'PaloAlto Cybersecurity',
    issuer: 'Palo Alto Networks',
    color: '#EF4444',
    icon: '🔐',
    description: 'Network security fundamentals and threat prevention strategies.',
  },
  {
    title: 'Deloitte Cyber & Data Analytics',
    issuer: 'Deloitte',
    color: '#38BDF8',
    icon: '📊',
    description: 'Cybersecurity principles combined with data analytics methodologies.',
  },
  {
    title: 'TCS ION YUVA AI',
    issuer: 'Tata Consultancy Services',
    color: '#8B5CF6',
    icon: '🤖',
    description: 'Artificial intelligence and machine learning fundamentals.',
  },
  {
    title: 'Siemens Project Manager',
    issuer: 'Siemens',
    color: '#F59E0B',
    icon: '⚙️',
    description: 'Industrial project management and automation systems.',
  },
  {
    title: 'TATA Cybersecurity',
    issuer: 'Tata Group',
    color: '#10B981',
    icon: '🛡️',
    description: 'Comprehensive cybersecurity practices and protocols.',
  },
  {
    title: 'NPTEL Innovation By Design',
    issuer: 'NPTEL / IIT',
    color: '#F97316',
    icon: '💡',
    description: 'Design thinking and innovation methodologies.',
  },
];

function CertCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsVisible = 3;
  const maxIndex = certifications.length - itemsVisible;

  const prev = () => setCurrentIndex(i => Math.max(0, i - 1));
  const next = () => setCurrentIndex(i => Math.min(maxIndex, i + 1));

  return (
    <div className="relative">
      {/* Navigation */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-display font-bold text-white flex items-center gap-2">
          <MdVerified className="text-accent" size={20} />
          Certifications
        </h3>
        <div className="flex gap-2">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={prev}
            disabled={currentIndex === 0}
            className={`w-8 h-8 rounded-full glass flex items-center justify-center transition-all ${
              currentIndex === 0 ? 'text-slate-600 cursor-not-allowed' : 'text-accent hover:bg-accent/20'
            }`}
          >
            <FiChevronLeft size={16} />
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={next}
            disabled={currentIndex >= maxIndex}
            className={`w-8 h-8 rounded-full glass flex items-center justify-center transition-all ${
              currentIndex >= maxIndex ? 'text-slate-600 cursor-not-allowed' : 'text-accent hover:bg-accent/20'
            }`}
          >
            <FiChevronRight size={16} />
          </motion.button>
        </div>
      </div>

      {/* Scrollable track */}
      <div className="overflow-hidden">
        <motion.div
          animate={{ x: `-${currentIndex * (280 + 16)}px` }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="flex gap-4"
        >
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              whileHover={{ y: -4 }}
              className="glass-card p-5 flex-shrink-0 w-[280px]"
            >
              <div className="text-2xl mb-3">{cert.icon}</div>
              <h4 className="text-white font-semibold text-sm mb-1 leading-tight">{cert.title}</h4>
              <p className="text-xs font-medium mb-2" style={{ color: cert.color }}>{cert.issuer}</p>
              <p className="text-slate-500 text-xs leading-relaxed">{cert.description}</p>
              <div className="mt-3 flex items-center gap-1.5">
                <MdVerified size={12} style={{ color: cert.color }} />
                <span className="text-xs" style={{ color: cert.color }}>Verified</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Dots */}
      <div className="flex gap-1.5 justify-center mt-4">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === currentIndex ? 'w-6 bg-accent' : 'w-1.5 bg-slate-600'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Resume() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="resume" className="py-24 lg:py-32 relative">
      <div className="absolute left-0 top-1/2 w-80 h-80 bg-purple/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-badge">
            <FiAward size={12} />
            Resume
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mt-2">
            Education & <span className="gradient-text">Credentials</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            Academic foundation and professional certifications that drive my expertise.
          </p>

          {/* Download button */}
          <motion.a
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            href="/resume.pdf"
            download
            className="btn-primary inline-flex items-center gap-2 mt-6"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiDownload size={16} />
            Download Resume PDF
          </motion.a>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-lg font-display font-bold text-white flex items-center gap-2 mb-8">
              <MdSchool className="text-accent" size={20} />
              Education Timeline
            </h3>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-px">
                <motion.div
                  initial={{ scaleY: 0 }}
                  animate={isInView ? { scaleY: 1 } : {}}
                  transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.4 }}
                  className="h-full w-full origin-top timeline-line"
                />
              </div>

              <div className="space-y-8 pl-12">
                {educationTimeline.map((edu, i) => (
                  <motion.div
                    key={edu.degree}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + i * 0.2, duration: 0.6 }}
                    className="relative"
                  >
                    {/* Dot */}
                    <div
                      className="absolute -left-12 top-1 w-8 h-8 rounded-full flex items-center justify-center border-2"
                      style={{ background: `${edu.color}20`, borderColor: edu.color, boxShadow: `0 0 12px ${edu.color}40` }}
                    >
                      <FiBook size={12} style={{ color: edu.color }} />
                    </div>

                    <div className="glass-card p-5">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                        <h4 className="font-display font-bold text-white text-sm">{edu.degree}</h4>
                        <span className="text-xs text-slate-500 bg-secondary px-2 py-0.5 rounded-full">{edu.period}</span>
                      </div>
                      <p className="font-medium text-sm mb-1" style={{ color: edu.color }}>{edu.institution}</p>
                      <p className="text-xs text-accent font-semibold mb-2">{edu.grade}</p>
                      <p className="text-slate-400 text-xs leading-relaxed">{edu.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Certifications Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <CertCarousel />

            {/* Skills summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="glass-card p-6 mt-8"
            >
              <h3 className="text-base font-display font-bold text-white flex items-center gap-2 mb-4">
                <FiAward className="text-purple-400" size={16} />
                Achievement Highlights
              </h3>
              <ul className="space-y-3">
                {[
                  '6+ Industry-recognized certifications',
                  'Tata Steel Industrial Internship – Jun-Jul 2025',
                  'Research in AI/ML & Fake News Detection',
                  'NPTEL certified in Innovation by Design',
                  'Active open source contributor on GitHub',
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.9 + i * 0.1 }}
                    className="flex items-start gap-2.5 text-slate-300 text-sm"
                  >
                    <span className="w-5 h-5 rounded-full bg-accent/20 text-accent text-xs flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">
                      {i + 1}
                    </span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
