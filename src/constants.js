import { 
  Code2, 
  Cpu, 
  Layout, 
  Database, 
  Server, 
  BarChart,
  Brain, 
  Workflow,
  Monitor,
  BarChart3,
  Sparkles,
  Box,
  Cloud,
  Gamepad2, 
  Headphones, 
  BookOpen, 
  Trees
} from 'lucide-react';

// Exactly 3 rows of skills as requested by user
export const SKILLS = [
  // Row 1
  { name: 'Python & JS', icon: Code2, category: 'Languages' },
  { name: 'Node.js', icon: Cpu, category: 'Backend' },
  { name: 'UI/UX', icon: Layout, category: 'Design' },
  // Row 2
  { name: 'MySQL', icon: Database, category: 'Database' },
  { name: 'NoSQL', icon: Server, category: 'Database' },
  { name: 'Data Analytics & Analysis', icon: BarChart, category: 'Analytics' },
  // Row 3 (User explicitly requested 'Prompt Engineer' and 'n8n Automation' here)
  { name: 'Prompt Engineer', icon: Brain, category: 'AI' },
  { name: 'n8n Automation', icon: Workflow, category: 'Automation' },
];

// Technical utilities requested: VS Code, PostgreSQL, PowerBI, 20+ AI Tools, Anaconda, Google Cloud, Google AI Studio, n8n
export const TECHNICAL_UTILITIES = [
  { name: 'VS Code', icon: Monitor, description: 'Powerhouse IDE for full-stack and script execution.' },
  { name: 'PostgreSQL', icon: Database, description: 'Robust, enterprise-grade relational database manager.' },
  { name: 'PowerBI', icon: BarChart3, description: 'Business intelligence and interactive data dashboards.' },
  { name: '20+ AI Tools', icon: Sparkles, description: 'Daily productivity multiplier via advanced LLMs & image generation.' },
  { name: 'Anaconda', icon: Box, description: 'Scientific Python distribution for advanced data science workflow.' },
  { name: 'Google Cloud', icon: Cloud, description: 'Deploying servers, storage and virtual networks globally.' },
  { name: 'Google AI Studio', icon: Brain, description: 'Prototyping next-gen conversational applications powered by Gemini.' },
  { name: 'n8n', icon: Workflow, description: 'Complex multi-step workflow automated integration backend.' },
];

// Exactly 10 projects flat list with minimal details as requested
export const PROJECTS = [
  {
    title: 'Project 1',
    description: 'System specifications and architecture diagram.',
    tech: [],
    github: 'https://github.com/bash11505',
    pdfFile: 'project1.pdf', // Customize with your own PDF filename in the files explorer to make this downloadable
  },
  {
    title: 'Project 2',
    description: 'System specifications and architecture diagram.',
    tech: [],
    github: 'https://github.com/bash11505',
    pdfFile: 'project2.pdf',
  },
  {
    title: 'Project 3',
    description: 'System specifications and architecture diagram.',
    tech: [],
    github: 'https://github.com/bash11505',
    pdfFile: 'project3.pdf',
  },
  {
    title: 'Project 4',
    description: 'System specifications and architecture diagram.',
    tech: [],
    github: 'https://github.com/bash11505',
    pdfFile: 'project4.pdf',
  },
  {
    title: 'Project 5',
    description: 'System specifications and architecture diagram.',
    tech: [],
    github: 'https://github.com/bash11505',
    pdfFile: 'project5.pdf',
  },
  {
    title: 'Project 6',
    description: 'System specifications and architecture diagram.',
    tech: [],
    github: 'https://github.com/bash11505',
    pdfFile: 'project6.pdf',
  },
  {
    title: 'Project 7',
    description: 'System specifications and architecture diagram.',
    tech: [],
    github: 'https://github.com/bash11505',
    pdfFile: 'project7.pdf',
  },
  {
    title: 'Project 8',
    description: 'System specifications and architecture diagram.',
    tech: [],
    github: 'https://github.com/bash11505',
    pdfFile: 'project8.pdf',
  },
  {
    title: 'Project 9',
    description: 'System specifications and architecture diagram.',
    tech: [],
    github: 'https://github.com/bash11505',
    pdfFile: 'project9.pdf',
  },
  {
    title: 'Project 10',
    description: 'System specifications and architecture diagram.',
    tech: [],
    github: 'https://github.com/bash11505',
    pdfFile: 'project10.pdf',
  },
];

export const HOBBIES = [
  { name: 'Gaming Free Fire', icon: Gamepad2, description: 'Competitive battle royale gaming and strategic team play.' },
  { name: 'Listening Music', icon: Headphones, description: 'Exploring diverse genres and finding focus through rhythm.' },
  { name: 'Reading Histories', icon: BookOpen, description: 'Learning from the past and understanding historical events.' },
  { name: 'Nature Exploring', icon: Trees, description: 'Hiking and discovering the beauty of natural landscapes.' },
];
