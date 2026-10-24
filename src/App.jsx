
import React, { useEffect, useState } from 'react';
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
} from 'lucide-react';

import {
  SKILLS,
  TECHNICAL_UTILITIES,
  PROJECTS,
  HOBBIES,
} from './constants';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Hobbies', href: '#hobbies' },
  { name: 'Contact', href: '#contact' },
];

const EMAIL_ADDRESS = 'shaikbasha11512@gmail.com';
const LINKEDIN_URL =
  'https://www.linkedin.com/in/shaik-basha-20302735a/';
const LEETCODE_URL = 'https://leetcode.com/KL2400033085';
const GITHUB_URL = 'https://github.com/bash11505';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;

      for (const item of navItems) {
        const section = item.href.slice(1);
        const element = document.getElementById(section);

        if (element) {
          const top = element.offsetTop;
          const bottom = top + element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < bottom) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    document
      .getElementById(href.replace('#', ''))
      ?.scrollIntoView({ behavior: 'smooth' });

    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-black font-sans text-white antialiased selection:bg-orange-500 selection:text-black">
      {/* Navigation */}
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-zinc-900 bg-black/95 shadow-xl backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-8">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#home');
            }}
            className="text-xl font-black tracking-wider transition-colors hover:text-orange-500 md:text-2xl"
          >
            SHAIK BASHA
          </a>

          <div className="hidden items-center space-x-7 md:flex">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`text-sm font-semibold uppercase tracking-wide transition-colors hover:text-orange-500 ${
                  activeSection === item.name.toLowerCase()
                    ? 'text-orange-500'
                    : 'text-zinc-400'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          <button
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-white transition-colors hover:text-orange-500 md:hidden"
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden border-t border-zinc-900 bg-black md:hidden"
            >
              <div className="flex flex-col gap-1 p-4">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`rounded-xl px-5 py-3 text-left transition-colors ${
                      activeSection === item.name.toLowerCase()
                        ? 'bg-zinc-900 font-bold text-orange-500'
                        : 'text-zinc-300 hover:bg-zinc-900'
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

      <main>
        {/* Home */}
        <section
          id="home"
          className="relative flex min-h-screen items-center justify-center overflow-hidden border-b border-zinc-900 bg-black px-4 pb-20 pt-32"
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-orange-500/10 blur-[130px]" />
            <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-zinc-700/10 blur-[130px]" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 mx-auto max-w-5xl text-center"
          >
            <p className="mb-5 font-mono text-sm uppercase tracking-[0.3em] text-orange-500">
              Developer • Data Analyst
            </p>

            <h1 className="mb-8 text-5xl font-black tracking-tight md:text-7xl lg:text-8xl">
              Hello, I'm{' '}
              <span className="bg-gradient-to-r from-orange-500 via-yellow-400 to-white bg-clip-text text-transparent">
                SHAIK BASHA
              </span>
            </h1>

            <p className="mx-auto mb-10 max-w-3xl text-base leading-relaxed text-zinc-400 md:text-xl">
              Crafting production-ready applications with robust backends,
              data analytics, database architectures, prompt engineering,
              and workflow automation.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <button
                onClick={() => scrollToSection('#projects')}
                className="rounded-full bg-white px-9 py-4 font-bold text-black transition-all hover:bg-orange-500"
              >
                View My Work
              </button>

              <button
                onClick={() => scrollToSection('#contact')}
                className="rounded-full border border-zinc-700 px-9 py-4 font-bold transition-all hover:border-orange-500 hover:text-orange-500"
              >
                Get In Touch
              </button>
            </div>

            <div className="mt-12 flex justify-center gap-6">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="text-zinc-400 transition-colors hover:text-orange-500"
              >
                <Github size={25} />
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="text-zinc-400 transition-colors hover:text-orange-500"
              >
                <Linkedin size={25} />
              </a>
              <a
                href={`mailto:${EMAIL_ADDRESS}`}
                aria-label="Email"
                className="text-zinc-400 transition-colors hover:text-orange-500"
              >
                <Mail size={25} />
              </a>
            </div>
          </motion.div>

          <button
            aria-label="Scroll to About"
            onClick={() => scrollToSection('#about')}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce text-zinc-500 transition-colors hover:text-orange-500"
          >
            <ChevronDown size={32} />
          </button>
        </section>

        {/* About */}
        <section
          id="about"
          className="border-b border-zinc-900 bg-[#050505] px-5 py-24 md:px-8"
        >
          <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex justify-center"
            >
              <div className="flex h-64 w-64 flex-col items-center justify-center rounded-full border-2 border-orange-500/40 bg-black p-8 text-center shadow-[0_0_50px_rgba(249,115,22,0.08)] md:h-80 md:w-80">
                <span className="mb-3 text-6xl font-black text-orange-500">
                  SB
                </span>
                <span className="font-mono text-xs text-zinc-500">
                  DEVELOPER & DATA ANALYST
                </span>
                <a
                  href={`mailto:${EMAIL_ADDRESS}`}
                  className="mt-4 break-all text-sm text-orange-400 hover:underline"
                >
                  {EMAIL_ADDRESS}
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-5"
            >
              <span className="font-mono text-xs uppercase tracking-widest text-orange-500">
                My Background
              </span>
              <h2 className="text-4xl font-black tracking-tight md:text-5xl">
                About Me
              </h2>
              <p className="text-base leading-relaxed text-zinc-400 md:text-lg">
                I am <strong className="text-white">SHAIK BASHA</strong>, a
                developer and technical data analyst working with Python,
                JavaScript, Node.js, relational databases, and NoSQL
                technologies.
              </p>
              <p className="text-base leading-relaxed text-zinc-400 md:text-lg">
                I am interested in data engineering, analytics, AI prompt
                engineering, and workflow automation using tools such as n8n.
              </p>
              <p className="border-l-2 border-orange-500 pl-4 font-mono text-sm italic text-zinc-500">
                "Continuous learning drives me to engineer resilient
                workflows and automated data analytics."
              </p>
            </motion.div>
          </div>
        </section>

        {/* Skills */}
        <section
          id="skills"
          className="border-b border-zinc-900 bg-black px-5 py-24 md:px-8"
        >
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              eyebrow="Technical Capabilities"
              title="Skills Portfolio"
              description="Languages, frameworks, and technologies used across my work."
            />

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
              {SKILLS.map((skill) => {
                const SkillIcon = skill.icon;

                return (
                  <motion.div
                    key={skill.name}
                    whileHover={{ y: -5 }}
                    className="group flex flex-col items-center rounded-3xl border border-zinc-900 bg-zinc-950 p-8 text-center transition-colors hover:border-orange-500/50"
                  >
                    <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-900 text-orange-500 transition-colors group-hover:bg-orange-500 group-hover:text-black">
                      <SkillIcon size={30} />
                    </div>
                    <h3 className="mb-3 text-xl font-bold group-hover:text-orange-500">
                      {skill.name}
                    </h3>
                    <span className="rounded-full border border-zinc-800 px-3 py-1 font-mono text-xs uppercase text-zinc-500">
                      {skill.category}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-24 border-t border-zinc-900 pt-12">
              <SectionHeading
                eyebrow="Integrated Frameworks"
                title="Technical Utilities"
                description="Platforms, environments, and tools used in my projects."
              />

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4">
                {TECHNICAL_UTILITIES.map((tool) => {
                  const ToolIcon = tool.icon;

                  return (
                    <div
                      key={tool.name}
                      className="flex items-start gap-4 rounded-2xl border border-zinc-900 bg-zinc-950 p-5 transition-colors hover:border-orange-500/40"
                    >
                      <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-3 text-orange-500">
                        <ToolIcon size={21} />
                      </div>
                      <div>
                        <h3 className="mb-2 font-bold">{tool.name}</h3>
                        <p className="text-xs leading-relaxed text-zinc-500">
                          {tool.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section
          id="projects"
          className="border-b border-zinc-900 bg-[#050505] px-5 py-24 md:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Work Catalog"
              title="Featured Projects"
              description="Explore my projects and open their source code on GitHub."
            />

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {PROJECTS.map((project, index) => (
                <motion.article
                  key={project.github}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (index % 3) * 0.08 }}
                  whileHover={{ y: -5 }}
                  className="group flex min-h-64 flex-col justify-between rounded-2xl border border-zinc-900 bg-black/80 p-7 transition-colors hover:border-orange-500/50 hover:shadow-[0_0_25px_rgba(249,115,22,0.08)]"
                >
                  <div>
                    <div className="mb-6 flex items-center justify-between">
                      <span className="font-mono text-xs font-bold uppercase tracking-wider text-orange-500">
                        Project {String(index + 1).padStart(2, '0')}
                      </span>
                      <Github size={19} className="text-zinc-500" />
                    </div>

                    <h3 className="mb-3 text-xl font-bold leading-snug transition-colors group-hover:text-orange-500">
                      {project.title}
                    </h3>

                    {project.description && (
                      <p className="mb-5 text-sm leading-relaxed text-zinc-400">
                        {project.description}
                      </p>
                    )}

                    {project.tech && project.tech.length > 0 && (
                      <div className="mb-6 flex flex-wrap gap-2">
                        {project.tech.map((technology) => (
                          <span
                            key={technology}
                            className="rounded-full border border-zinc-800 bg-zinc-950 px-3 py-1 font-mono text-[10px] text-zinc-300"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} on GitHub`}
                    className="mt-5 inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-800 px-4 py-3 text-sm font-bold text-white transition-all hover:border-orange-500 hover:bg-orange-500 hover:text-black"
                  >
                    <Github size={17} />
                    View on GitHub
                    <ExternalLink size={14} />
                  </a>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Hobbies */}
        <section
          id="hobbies"
          className="border-b border-zinc-900 bg-black px-5 py-24 md:px-8"
        >
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              eyebrow="Personal Story"
              title="Beyond Coding"
              description="Activities and interests beyond my technical work."
            />

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {HOBBIES.map((hobby) => {
                const HobbyIcon = hobby.icon;

                return (
                  <motion.div
                    key={hobby.name}
                    whileHover={{ y: -5 }}
                    className="rounded-3xl border border-zinc-900 bg-zinc-950 p-7 transition-colors hover:border-orange-500/40"
                  >
                    <div className="mb-6 inline-flex rounded-2xl border border-zinc-800 bg-zinc-900 p-4 text-orange-500">
                      <HobbyIcon size={24} />
                    </div>
                    <h3 className="mb-3 text-xl font-bold transition-colors hover:text-orange-500">
                      {hobby.name}
                    </h3>
                    <p className="text-sm leading-relaxed text-zinc-400">
                      {hobby.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="border-b border-zinc-900 bg-[#050505] px-5 py-24 md:px-8"
        >
          <div className="mx-auto max-w-4xl">
            <SectionHeading
              eyebrow="Direct Communication"
              title="Let's Connect"
              description="I'm open to discussing development, data analytics, data engineering, and automation projects."
            />

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <ContactCard
                icon={<Mail size={21} />}
                label="Email"
                value={EMAIL_ADDRESS}
                href={`mailto:${EMAIL_ADDRESS}`}
              />

              <ContactCard
                icon={<Phone size={21} />}
                label="Phone (SMS / WA)"
                value="9391160842"
                href="tel:9391160842"
              />

              <ContactCard
                icon={<Github size={21} />}
                label="GitHub"
                value="github.com/bash11505"
                href={GITHUB_URL}
              />

              <ContactCard
                icon={<Linkedin size={21} />}
                label="LinkedIn"
                value="SHAIK BASHA"
                href={LINKEDIN_URL}
              />

              <ContactCard
                icon={<ExternalLink size={21} />}
                label="LeetCode Profile"
                value="KL2400033085"
                href={LEETCODE_URL}
              />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 text-center text-sm text-zinc-500 md:flex-row md:text-left">
          <p>
            © {new Date().getFullYear()} SHAIK BASHA. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="transition-colors hover:text-orange-500"
            >
              <Github size={20} />
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transition-colors hover:text-orange-500"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`mailto:${EMAIL_ADDRESS}`}
              aria-label="Email"
              className="transition-colors hover:text-orange-500"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mb-14 text-center">
      <span className="mb-3 block font-mono text-xs uppercase tracking-widest text-orange-500">
        {eyebrow}
      </span>
      <h2 className="text-3xl font-black tracking-tight md:text-5xl">
        {title}
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-zinc-400 md:text-base">
        {description}
      </p>
    </div>
  );
}

function ContactCard({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  const external = href.startsWith('https://');

  return (
    <a
      href={href}
      {...(external
        ? { target: '_blank', rel: 'noopener noreferrer' }
        : {})}
      className="group flex min-w-0 items-center gap-4 rounded-2xl border border-zinc-900 bg-zinc-950 p-5 transition-colors hover:border-orange-500/40"
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900 text-orange-500 transition-colors group-hover:bg-orange-500 group-hover:text-black">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="mb-1 font-mono text-[10px] font-bold uppercase tracking-wider text-zinc-500">
          {label}
        </p>
        <p className="break-all text-sm font-semibold text-white transition-colors group-hover:text-orange-500">
          {value}
        </p>
      </div>
    </a>
  );
}
