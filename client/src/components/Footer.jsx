import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import {
  FiGithub, FiLinkedin, FiMail, FiArrowUp, FiHeart
} from 'react-icons/fi';

const quickLinks = [
  { label: 'Home', to: 'hero' },
  { label: 'About', to: 'about' },
  { label: 'Skills', to: 'skills' },
  { label: 'Projects', to: 'projects' },
  { label: 'Contact', to: 'contact' },
];

const socialLinks = [
  { icon: FiGithub, href: 'https://github.com/caremelluver', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://linkedin.com/in/deepakdas', label: 'LinkedIn' },
  { icon: FiMail, href: 'mailto:deepakdas212004@gmail.com', label: 'Email' },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-16">
      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-purple flex items-center justify-center">
                <span className="font-display font-bold text-sm text-white">D</span>
              </div>
              <span className="font-display font-bold text-lg gradient-text">Deepak</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              CS & IT student from Jamshedpur, building impactful solutions at the 
              intersection of AI, web development, and industrial systems.
            </p>
            <div className="flex gap-3 mt-5">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-9 h-9 rounded-full glass flex items-center justify-center text-slate-400 hover:text-accent hover:border-accent/30 transition-all duration-200"
                  aria-label={label}
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-white text-sm mb-4 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map(({ label, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    smooth={true}
                    duration={600}
                    offset={-80}
                    className="text-slate-400 hover:text-accent text-sm cursor-pointer transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent/50 group-hover:bg-accent transition-colors" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Snippet */}
          <div>
            <h4 className="font-display font-bold text-white text-sm mb-4 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-2.5">
              <li className="text-slate-400 text-sm">📍 Jamshedpur, Jharkhand</li>
              <li>
                <a href="mailto:deepakdas212004@gmail.com" className="text-slate-400 hover:text-accent text-sm transition-colors">
                  📧 deepakdas212004@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/deepakdas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-accent text-sm transition-colors"
                >
                  🔗 LinkedIn Profile
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-400">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Open to Opportunities
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Deepak Das. All rights reserved.
          </p>

          <p className="text-slate-500 text-sm flex items-center gap-1.5">
            Built with React & <FiHeart size={12} className="text-red-400 fill-red-400" /> Passion
          </p>

          {/* Back to top */}
          <Link to="hero" smooth={true} duration={700}>
            <motion.button
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-9 h-9 rounded-full glass flex items-center justify-center text-accent hover:bg-accent/20 transition-all"
              aria-label="Back to top"
            >
              <FiArrowUp size={16} />
            </motion.button>
          </Link>
        </div>
      </div>
    </footer>
  );
}
