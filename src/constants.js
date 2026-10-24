
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
  Trees,
} from 'lucide-react';

// Skills
export const SKILLS = [
  // Row 1
  { name: 'Python & JS', icon: Code2, category: 'Languages' },
  { name: 'Node.js', icon: Cpu, category: 'Backend' },
  { name: 'UI/UX', icon: Layout, category: 'Design' },

  // Row 2
  { name: 'MySQL', icon: Database, category: 'Database' },
  { name: 'NoSQL', icon: Server, category: 'Database' },
  {
    name: 'Data Analytics & Analysis',
    icon: BarChart,
    category: 'Analytics',
  },

  // Row 3
  { name: 'Prompt Engineer', icon: Brain, category: 'AI' },
  { name: 'n8n Automation', icon: Workflow, category: 'Automation' },
];

// Technical utilities
export const TECHNICAL_UTILITIES = [
  {
    name: 'VS Code',
    icon: Monitor,
    description:
      'Powerhouse IDE for full-stack development and script execution.',
  },
  {
    name: 'PostgreSQL',
    icon: Database,
    description:
      'Robust relational database management system.',
  },
  {
    name: 'PowerBI',
    icon: BarChart3,
    description:
      'Business intelligence and interactive data dashboards.',
  },
  {
    name: '20+ AI Tools',
    icon: Sparkles,
    description:
      'AI tools for productivity, language models, and image generation.',
  },
  {
    name: 'Anaconda',
    icon: Box,
    description:
      'Python distribution for data science and analytics workflows.',
  },
  {
    name: 'Google Cloud',
    icon: Cloud,
    description:
      'Cloud platform for computing, storage, and application deployment.',
  },
  {
    name: 'Google AI Studio',
    icon: Brain,
    description:
      'Platform for prototyping AI applications powered by Gemini.',
  },
  {
    name: 'n8n',
    icon: Workflow,
    description:
      'Workflow automation and integrations between applications.',
  },
];

// Projects — GitHub links only, no PDF downloads
export const PROJECTS = [
  {
    title: 'Walmart DataBricks DBT',
    description:
      'A data engineering project focused on Walmart data processing and analytics using Databricks and dbt.',
    tech: ['Databricks', 'dbt', 'SQL', 'Data Engineering'],
    github: 'https://github.com/bash11505/Walmart-DataBricks_Dbt',
  },
  {
    title: 'Message Spam Classifier',
    description:
      'A machine learning project designed to classify messages as spam or legitimate messages.',
    tech: ['Python', 'Machine Learning', 'NLP'],
    github: 'https://github.com/bash11505/Message-Spam-classifier',
  },
  {
    title: 'Career Pilot',
    description:
      'A career-focused application project. Explore the repository for its features and implementation.',
    tech: ['Application Development'],
    github: 'https://github.com/bash11505/Career-pilot',
  },
  {
    title: 'Netflix Data Analytics',
    description:
      'A data analytics project exploring Netflix-related data and insights.',
    tech: ['Data Analytics', 'SQL', 'Data Visualization'],
    github:
      'https://github.com/bash11505/Netflix---Data-Analytics-Project-',
  },
  {
    title: 'Microsoft Data Analytics',
    description:
      'A data analytics project focused on exploring and analyzing Microsoft-related data.',
    tech: ['Data Analytics', 'Data Visualization'],
    github: 'https://github.com/bash11505/Microsoft_Data_Analytics',
  },
  {
    title: 'E-commerce',
    description:
      'An e-commerce project. Visit the GitHub repository to explore its implementation.',
    tech: ['E-commerce', 'Web Development'],
    github: 'https://github.com/bash11505/E-commerce',
  },
];

// Hobbies
export const HOBBIES = [
  {
    name: 'Gaming Free Fire',
    icon: Gamepad2,
    description:
      'Competitive battle royale gaming and strategic team play.',
  },
  {
    name: 'Listening Music',
    icon: Headphones,
    description:
      'Exploring diverse genres and finding focus through rhythm.',
  },
  {
    name: 'Reading Histories',
    icon: BookOpen,
    description:
      'Learning from the past and understanding historical events.',
  },
  {
    name: 'Nature Exploring',
    icon: Trees,
    description:
      'Hiking and discovering the beauty of natural landscapes.',
  },
];
