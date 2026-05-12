import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import axios from 'axios';
import {
  FiMail, FiMapPin, FiLinkedin, FiSend, FiCheck, FiAlertCircle, FiMessageSquare
} from 'react-icons/fi';

const contactInfo = [
  {
    icon: FiMail,
    label: 'Email',
    value: 'deepakdas212004@gmail.com',
    href: 'mailto:deepakdas212004@gmail.com',
    color: '#38BDF8',
  },
  {
    icon: FiLinkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/deepakdas',
    href: 'https://linkedin.com/in/deepakdas',
    color: '#0A66C2',
  },
  {
    icon: FiMapPin,
    label: 'Location',
    value: 'Jamshedpur, Jharkhand, India',
    href: null,
    color: '#8B5CF6',
  },
];

const BACKEND_URL = 'http://localhost:5000';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.subject || !form.message) return;

    setStatus('loading');
    setErrorMsg('');

    try {
      await axios.post(`${BACKEND_URL}/api/contact`, form, { timeout: 8000 });
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      // If backend is down, still show a friendly message
      if (err.code === 'ERR_NETWORK' || err.code === 'ECONNREFUSED') {
        setErrorMsg('Backend not reachable. Please email directly at deepakdas212004@gmail.com');
      } else {
        setErrorMsg(err?.response?.data?.message || 'Something went wrong. Please try again.');
      }
      setStatus('error');
      setTimeout(() => setStatus('idle'), 6000);
    }
  };

  return (
    <section id="contact" className="py-24 lg:py-32 relative">
      <div className="absolute left-1/2 bottom-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-badge">
            <FiMessageSquare size={12} />
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mt-2">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            Have a project in mind, want to collaborate, or just want to say hi?
            I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left — Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2 space-y-4"
          >
            <div className="glass-card p-6 mb-6">
              <h3 className="font-display font-bold text-white text-lg mb-2">Get In Touch</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                I'm currently open to internship opportunities, freelance projects, 
                and full-time positions. My inbox is always open — whether you have a 
                question or just want to connect!
              </p>
            </div>

            {contactInfo.map(({ icon: Icon, label, value, href, color }) => (
              <motion.div
                key={label}
                whileHover={{ scale: 1.02, x: 4 }}
                className="glass-card p-4 flex items-center gap-4 group"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all group-hover:scale-110"
                  style={{ background: `${color}15`, border: `1px solid ${color}30` }}
                >
                  <Icon size={18} style={{ color }} />
                </div>
                <div className="min-w-0">
                  <p className="text-slate-500 text-xs mb-0.5">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="text-white text-sm font-medium hover:underline decoration-accent truncate block"
                      style={{ textDecorationColor: color }}
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-white text-sm font-medium truncate">{value}</p>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Availability badge */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="glass-card p-4 flex items-center gap-3"
            >
              <div className="relative">
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <div className="absolute inset-0 w-3 h-3 rounded-full bg-green-400 animate-ping opacity-50" />
              </div>
              <div>
                <p className="text-white text-sm font-medium">Available for Opportunities</p>
                <p className="text-slate-400 text-xs">Open to internships & projects</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right — Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="glass-card p-8">
              <h3 className="font-display font-bold text-white text-lg mb-6">Send a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-slate-400 text-xs mb-2 block">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="glow-input"
                    />
                  </div>
                  <div>
                    <label className="text-slate-400 text-xs mb-2 block">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="glow-input"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-slate-400 text-xs mb-2 block">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Project Collaboration / Internship Opportunity"
                    required
                    className="glow-input"
                  />
                </div>

                <div>
                  <label className="text-slate-400 text-xs mb-2 block">Message *</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or opportunity..."
                    required
                    rows={5}
                    className="glow-input resize-none"
                  />
                </div>

                {/* Status messages */}
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-green-400 text-sm bg-green-400/10 border border-green-400/20 rounded-lg p-3"
                  >
                    <FiCheck size={16} />
                    Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}

                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-lg p-3"
                  >
                    <FiAlertCircle size={16} />
                    {errorMsg}
                  </motion.div>
                )}

                {/* Submit button */}
                <motion.button
                  type="submit"
                  disabled={status === 'loading'}
                  whileHover={{ scale: status === 'loading' ? 1 : 1.02 }}
                  whileTap={{ scale: status === 'loading' ? 1 : 0.98 }}
                  className="btn-primary w-full flex items-center justify-center gap-2 relative"
                >
                  {status === 'loading' ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                      />
                      Sending...
                    </>
                  ) : status === 'success' ? (
                    <>
                      <FiCheck size={16} />
                      Sent Successfully!
                    </>
                  ) : (
                    <>
                      <FiSend size={16} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
