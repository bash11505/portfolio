/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  ChevronDown,
  Menu,
  X,
  Phone,
  FileDown
} from 'lucide-react';
import { SKILLS, TECHNICAL_UTILITIES, PROJECTS, HOBBIES } from './constants';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Hobbies', href: '#hobbies' },
  { name: 'Contact', href: '#contact' },
];

const EMAIL_ADDRESS = 'shaikbasha11512@gmail.com';
const LINKEDIN_URL = 'https://www.linkedin.com/in/shaik-basha';
const LEETCODE_URL = 'https://leetcode.com/KL2400033085';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.name.toLowerCase());
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-black text-white font-sans antialiased selection:bg-accent-orange selection:text-black">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-black/95 backdrop-blur-md border-b border-zinc-900 shadow-xl">
        <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
          <div className="flex items-center">
            <span className="font-display font-bold text-white text-2xl tracking-wider hover:text-accent-orange hover:shadow-[0_0_15px_rgba(255,107,0,0.5)] transition-all duration-150 cursor-pointer">
              SHAIK BASHA
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`text-sm font-semibold tracking-wider uppercase transition-all hover:text-accent-orange hover:scale-105 duration-150 ${
                  activeSection === item.name.toLowerCase() 
                    ? 'text-accent-orange font-bold drop-shadow-[0_0_8px_rgba(255,107,0,0.6)]' 
                    : 'text-zinc-400'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-white hover:text-accent-orange transition-colors">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-black/95 border-t border-zinc-900 overflow-hidden md:hidden"
            >
              <div className="flex flex-col p-4 space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`text-left px-6 py-4 rounded-xl transition-all ${
                      activeSection === item.name.toLowerCase() 
                        ? 'bg-zinc-900 text-accent-orange font-bold border border-zinc-850 shadow-[0_0_15px_rgba(255,107,0,0.15)]' 
                        : 'text-zinc-300 hover:bg-zinc-900/50 hover:text-accent-orange'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Sections */}
      <main>
        {/* Home Section */}
        <section id="home" className="section-full bg-black relative overflow-hidden pt-36">
          <div className="absolute inset-0 opacity-25 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-accent-orange/15 blur-[120px] animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-zinc-850/20 blur-[150px]" />
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center z-10 px-4"
          >
            <h1 className="font-display text-6xl md:text-8xl font-black tracking-tight mb-8">
              Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-orange via-yellow-400 to-white drop-shadow-[0_0_20px_rgba(255,107,0,0.25)]">SHAIK BASHA</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto mb-12 leading-relaxed">
              Crafting production-ready applications with robust backends in Node.js, relational and non-relational database architectures, state-of-the-art prompt engineering, and n8n orchestration.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button 
                onClick={() => scrollToSection('#projects')}
                className="w-full sm:w-auto bg-white text-black px-10 py-4 rounded-full font-bold hover:bg-accent-orange hover:text-black transition-all duration-150 shadow-xl shadow-orange-500/10 active:scale-95 hover:shadow-[0_0_25px_rgba(255,107,0,0.5)] cursor-pointer"
              >
                View My Work
              </button>
              <button 
                onClick={() => scrollToSection('#contact')}
                className="w-full sm:w-auto border border-zinc-800 hover:border-accent-orange px-10 py-4 rounded-full font-bold hover:bg-zinc-950 text-white transition-all duration-150 active:scale-95 hover:shadow-[0_0_15px_rgba(255,107,0,0.2)] cursor-pointer"
              >
                Get In Touch
              </button>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-650 hover:text-accent-orange transition-colors duration-300 cursor-pointer"
            onClick={() => scrollToSection('#about')}
          >
            <ChevronDown size={36} />
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="section-full bg-[#050505] relative border-t border-zinc-900">
          <div className="max-w-6xl w-full grid md:grid-cols-2 gap-16 items-center px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center"
            >
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full border-2 border-zinc-850 bg-black flex items-center justify-center relative shadow-2xl overflow-hidden group">
                <div className="absolute inset-4 rounded-full border border-dashed border-accent-orange/30 animate-[spin_40s_linear_infinite]" />
                <div className="absolute inset-0 bg-gradient-to-br from-accent-orange/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                <div className="w-11/12 h-11/12 rounded-full overflow-hidden bg-zinc-950 flex flex-col items-center justify-center p-8 text-center border border-zinc-900 z-10 transition-transform duration-200 group-hover:scale-102 shadow-[inset_0_0_40px_rgba(0,0,0,0.8)]">
                  <span className="font-display font-black text-3xl tracking-tight text-white mb-2 group-hover:text-accent-orange transition-colors duration-150">SB</span>
                  <span className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest mt-1">9391160842</span>
                  <span className="text-accent-orange/95 font-mono text-xs mt-2 font-bold select-all drop-shadow-[0_0_5px_rgba(255,107,0,0.2)]">shaikbasha11512@gmail.com</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <span className="text-accent-orange font-mono text-xs tracking-widest uppercase">My Background</span>
              <h2 className="font-display text-4xl md:text-5xl font-black text-white tracking-tight">About Me</h2>
              <p className="text-lg text-zinc-350 leading-relaxed">
                I am <strong className="text-white">SHAIK BASHA</strong>, a devoted Full-Stack Developer and technical Data Analyst. I build robust web architectures using Python, JavaScript, and Node.js, relying on high-reliability query structures in MySQL & NoSQL.
              </p>
              <p className="text-lg text-zinc-350 leading-relaxed">
                With expertise extending into Next-Gen Prompt Engineering and complex automation loops using tools like n8n, I bridge the gap between AI orchestration and operational performance.
              </p>
              <p className="text-zinc-450 text-sm italic border-l-2 border-accent-orange pl-4 font-mono">
                "Continuous learning drives me to engineer resilient workflows and automated data analytics."
              </p>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="section-full bg-black relative border-t border-zinc-900">
          <div className="max-w-6xl w-full px-4">
            <div className="text-center mb-20">
              <span className="text-accent-orange font-mono text-xs tracking-widest uppercase mb-2 block">Technical Capabilities</span>
              <h2 className="font-display text-4xl md:text-5xl font-black tracking-tight text-white">Skills Portfolio</h2>
              <p className="text-zinc-400 max-w-xl mx-auto mt-2 text-sm md:text-base">
                An organized matrix of core engineering languages, data utilities, and automated orchestrations.
              </p>
            </div>
            
            {/* Core Skills Rows */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {SKILLS.map((skill) => (
                <div
                  key={skill.name}
                  className="bg-zinc-950 p-8 rounded-3xl border border-zinc-900 hover:border-zinc-800 hover:shadow-[0_0_25px_rgba(255,107,0,0.15)] flex flex-col items-center text-center group"
                >
                  <div className="w-16 h-16 bg-zinc-900 rounded-2xl flex items-center justify-center text-white border border-zinc-800 mb-6 group-hover:bg-accent-orange group-hover:text-black shadow-inner">
                    <skill.icon size={30} />
                  </div>
                  <h3 className="font-bold text-xl text-white tracking-wide mb-2 group-hover:text-accent-orange">{skill.name}</h3>
                  <span className="text-xs text-zinc-500 font-mono uppercase tracking-widest mt-1 border border-zinc-900 px-3 py-1 rounded-full bg-black">
                    {skill.category}
                  </span>
                </div>
              ))}
            </div>

            {/* Technical Utilities & Tools requested explicitly by user */}
            <div className="mt-28 pt-8 border-t border-zinc-900/60">
              <div className="text-center mb-16">
                <span className="text-accent-orange font-mono text-xs tracking-widest uppercase mb-2 block">Integrated Frameworks</span>
                <h3 className="font-display text-3xl font-black tracking-tight text-white">Technical Utilities</h3>
                <p className="text-zinc-500 text-sm mt-1 max-w-xl mx-auto">
                  Platforms, environments, and enterprise services deployed actively.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {TECHNICAL_UTILITIES.map((tool) => (
                  <div
                    key={tool.name}
                    className="p-6 rounded-2xl bg-zinc-950 border border-zinc-900 hover:border-zinc-800 hover:shadow-[0_0_15px_rgba(255,107,0,0.1)] flex items-start gap-4 group"
                  >
                    <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-xl text-accent-orange group-hover:bg-accent-orange group-hover:text-black shrink-0">
                      <tool.icon size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-base mb-1 group-hover:text-accent-orange">{tool.name}</h4>
                      <p className="text-xs text-zinc-450 leading-relaxed font-mono">{tool.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section-full bg-[#050505] relative border-t border-zinc-900">
          <div className="max-w-6xl w-full px-4">
            <div className="text-center mb-20">
              <span className="text-accent-orange font-mono text-xs tracking-widest uppercase mb-2 block animate-pulse">Work Catalog</span>
              <h2 className="font-display text-4xl md:text-5xl font-black text-white">Featured Projects</h2>
              <p className="text-zinc-405 mt-2 max-w-xl mx-auto text-sm">
                A clean structure displaying your core catalog. Upload project PDF files to enable automatic downloads.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {PROJECTS.map((project, index) => (
                <div
                  key={project.title}
                  className="bg-black/80 rounded-2xl overflow-hidden border border-zinc-900 hover:border-zinc-850 hover:shadow-[0_0_30px_rgba(255,107,0,0.2)] flex flex-col justify-between p-8 group relative"
                >
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="text-accent-orange font-mono text-xs tracking-wider uppercase font-bold">Project {index + 1}</span>
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-zinc-500 hover:text-white hover:border-accent-orange p-2 bg-zinc-950 border border-zinc-900 rounded-full"
                      >
                        <Github size={16} />
                      </a>
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold mb-3 text-white tracking-wide group-hover:text-accent-orange">
                        {project.title}
                      </h3>
                      {project.description && (
                        <p className="text-zinc-450 text-xs leading-relaxed mb-4">
                          {project.description}
                        </p>
                      )}
                    </div>
                    {project.tech && project.tech.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map(t => (
                          <span key={t} className="text-[10px] font-mono px-3 py-1 bg-zinc-950 border border-zinc-900 rounded-full text-zinc-300">
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* PDF Download file specification section explicitly requested by user */}
                  {project.pdfFile ? (
                    <div className="mt-6 pt-4 border-t border-zinc-900/60 flex flex-col gap-2">
                      <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 bg-accent-orange rounded-full animate-ping" />
                        PDF Attached
                      </span>
                      <a 
                        href={`/${project.pdfFile}`}
                        download={project.pdfFile}
                        className="flex items-center justify-center gap-2 bg-white text-black hover:bg-accent-orange hover:text-black px-4 py-2 rounded-xl text-xs font-bold font-mono shadow hover:shadow-[0_0_15px_rgba(255,107,0,0.5)]"
                        onClick={(e) => {
                          console.log(`Downloading PDF: ${project.pdfFile}`);
                        }}
                      >
                        <FileDown size={14} />
                        <span>Download PDF</span>
                      </a>
                    </div>
                  ) : (
                    <div className="mt-6 pt-4 border-t border-zinc-900/40">
                      <span className="text-[10px] font-mono text-zinc-650 italic">
                        No PDF uploaded yet
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Hobbies Section */}
        <section id="hobbies" className="section-full bg-black relative border-t border-zinc-900">
          <div className="max-w-6xl w-full px-4">
            <div className="text-center mb-20">
              <span className="text-accent-orange font-mono text-xs tracking-widest uppercase mb-2 block">Personal Story</span>
              <h2 className="font-display text-4xl md:text-5xl font-black text-white tracking-tight">Beyond Coding</h2>
              <p className="text-zinc-400 mt-2 text-sm max-w-xl mx-auto">
                Activities I explore actively in my personal time.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {HOBBIES.map((hobby, index) => (
                <motion.div
                  key={hobby.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-zinc-950 p-8 rounded-3xl border border-zinc-900 hover:border-zinc-800 hover:shadow-[0_0_20px_rgba(255,107,0,0.15)] transition-all duration-150 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-14 h-14 bg-zinc-900 border border-zinc-800 text-accent-orange rounded-2xl flex items-center justify-center mb-6 shadow-inner group-hover:bg-accent-orange group-hover:text-black transition-all duration-150">
                      <hobby.icon size={24} />
                    </div>
                    <h3 className="font-display text-xl font-bold mb-3 text-white tracking-wide group-hover:text-accent-orange transition-colors">{hobby.name}</h3>
                    <p className="text-zinc-450 text-sm leading-relaxed">{hobby.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section-full bg-[#050505] relative border-t border-zinc-900">
          <div className="max-w-4xl w-full px-4 mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="text-accent-orange font-mono text-xs tracking-widest uppercase mb-2 block animate-pulse">Direct Communication</span>
              <h2 className="font-display text-4xl md:text-5xl font-black text-white tracking-tight mb-4">Let's Connect</h2>
              <p className="text-zinc-400 max-w-2xl mx-auto text-sm md:text-base">
                I'm always open to discussing new projects, database structures, prompt integrations and n8n automations. Reach out to me directly through any of the channels below.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              <div className="flex items-center space-x-4 p-6 bg-zinc-950 border border-zinc-900 rounded-2xl hover:border-zinc-800 hover:shadow-[0_0_15px_rgba(255,107,0,0.1)] transition-all duration-150">
                <div className="w-12 h-12 bg-zinc-900 border border-zinc-850 rounded-full flex items-center justify-center text-accent-orange shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-wider font-mono">Email</p>
                  <p className="font-medium text-white hover:text-accent-orange transition-colors cursor-pointer font-mono select-all font-bold text-sm">shaikbasha11512@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-6 bg-zinc-950 border border-zinc-900 rounded-2xl hover:border-zinc-800 hover:shadow-[0_0_15px_rgba(255,107,0,0.1)] transition-all duration-150">
                <div className="w-12 h-12 bg-zinc-900 border border-zinc-850 rounded-full flex items-center justify-center text-accent-orange shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-wider font-mono">Phone (SMS / WA)</p>
                  <p className="font-medium text-white font-mono select-all font-bold text-sm">9391160842</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-6 bg-zinc-950 border border-zinc-900 rounded-2xl hover:border-zinc-800 hover:shadow-[0_0_15px_rgba(255,107,0,0.1)] transition-all duration-150">
                <div className="w-12 h-12 bg-zinc-900 border border-zinc-850 rounded-full flex items-center justify-center text-accent-orange shrink-0">
                  <Github size={20} />
                </div>
                <div>
                  <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-wider font-mono">GitHub</p>
                  <a href="https://github.com/bash11505" target="_blank" rel="noopener noreferrer" className="font-medium text-white hover:text-accent-orange hover:underline transition-all duration-150 font-mono font-bold text-sm">
                    github.com/bash11505
                  </a>
                </div>
              </div>

              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="group flex items-center space-x-4 p-6 bg-zinc-950 border border-zinc-900 rounded-2xl hover:border-zinc-800 hover:shadow-[0_0_15px_rgba(255,107,0,0.1)] transition-all duration-150">
                <div className="w-12 h-12 bg-zinc-900 border border-zinc-850 rounded-full flex items-center justify-center text-accent-orange shrink-0 group-hover:text-white">
                  <Linkedin size={20} />
                </div>
                <div>
                  <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-wider font-mono">LinkedIn</p>
                  <p className="font-medium text-white font-mono font-bold text-sm">SHAIK BASHA</p>
                </div>
              </a>

              <a href={LEETCODE_URL} target="_blank" rel="noopener noreferrer" className="group flex items-center space-x-4 p-6 bg-zinc-950 border border-zinc-900 rounded-2xl hover:border-zinc-800 hover:shadow-[0_0_15px_rgba(255,107,0,0.1)] transition-all duration-150 sm:col-span-2">
                <div className="w-12 h-12 bg-zinc-900 border border-zinc-850 rounded-full flex items-center justify-center text-accent-orange shrink-0 animate-pulse group-hover:text-white">
                  <ExternalLink size={20} />
                </div>
                <div>
                  <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-wider font-mono">LeetCode Profile</p>
                  <p className="font-medium text-white hover:text-accent-orange transition-colors duration-150 font-mono select-all font-bold text-sm">KL2400033085</p>
                </div>
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-zinc-900">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-zinc-500 text-sm">
          <p className="mb-4 md:mb-0">
            © {new Date().getFullYear()} SHAIK BASHA. Developed this website completely by using prompt.
          </p>
          <div className="flex space-x-6">
            <a href="https://github.com/bash11505" target="_blank" rel="noopener noreferrer" className="hover:text-accent-orange transition-colors"><Github size={20} /></a>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="hover:text-accent-orange transition-colors"><Linkedin size={20} /></a>
            <a href={`mailto:${EMAIL_ADDRESS}`} className="hover:text-accent-orange transition-colors"><Mail size={20} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
