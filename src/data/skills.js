import {
  Code2,
  ServerCog,
  Wrench,
  LayoutDashboard,
  Database,
  Sparkles,
} from 'lucide-react'

export const skills = [
  {
    category: 'Frontend Engineering',
    Icon: Code2,
    description: 'Clean, responsive interfaces with reusable components and polished user interactions.',
    items: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Responsive Design', 'Framer Motion'],
  },
  {
    category: 'Backend & APIs',
    Icon: ServerCog,
    description: 'Backend logic, API structure, server-side calculations, and app data flows.',
    items: ['Python', 'FastAPI', 'REST APIs', 'Authentication Logic', 'API Integration'],
  },
  {
    category: 'Database & Cloud',
    Icon: Database,
    description: 'Structured application data, cloud-hosted app logic, and practical database workflows.',
    items: ['Firebase', 'Firestore', 'User Roles', 'Form Data', 'Cloud Concepts', 'PostgreSQL'],
  },
  {
    category: 'Product UI',
    Icon: LayoutDashboard,
    description: 'Dashboards, admin portals, multi-role systems, SaaS layouts, and workflow-heavy screens.',
    items: ['Dashboard Design', 'Admin Portals', 'SaaS Interfaces', 'User Flows', 'Forms', 'Bento Layouts'],
  },
  {
    category: 'Tools',
    Icon: Wrench,
    description: 'Modern development tools for building, version control, design, deployment, and delivery.',
    items: ['Git', 'GitHub', 'Netlify', 'Vercel', 'VS Code', 'Figma', 'Vite'],
  },
  {
    category: 'Creative Systems',
    Icon: Sparkles,
    description: 'Visual polish, interactions, spacing, hierarchy, and interface details that make products feel premium.',
    items: ['UI Consistency', 'Micro-interactions', 'Visual Hierarchy', 'Accessibility Basics', 'Performance Mindset'],
  },
]