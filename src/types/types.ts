export interface CareerTimelineItem {
  role: string;
  company: string;
  date: string;
  description: string;
  notes: string;
  icon: React.ReactElement;
  data?: ScoutingReportData;
}

// Types
interface Stat {
  label: string;
  value: string;
}

interface Technology {
  name: string;
  challenge: string;
  solution: string;
  impact: string;
}

interface Innovation {
  title: string;
  type: string;
  description: string;
  phases?: {
    name: string;
    items: string[];
  }[];
  metrics?: Stat[];
  highlights?: string[];
  technologies?: Technology[];
  approach?: string;
}

interface Leadership {
  title: string;
  type: string;
  situation: string;
  strategies: {
    type: string;
    tactics: string[];
  }[];
  style?: string;
  metrics?: {
    value: string;
    label: string;
  }[];
  qualities?: {
    title: string;
    desc: string;
  }[];
}

interface Assessment {
  summary: string;
  strengths: {
    title: string;
    detail: string;
  }[];
  playingStyle: {
    title: string;
    description: string;
  };
  grades: {
    category: string;
    grade: string;
  }[];
  projection: string;
  comparableTo?: string;
}

export interface ScoutingReportData {
  currentRole: {
    title: string;
    subtitle: string;
    skills: string[];
  };
  highlights: {
    icon: React.ReactNode;
    text: string;
  }[];
  stats: Stat[];
  innovations: Innovation[];
  leadership: Leadership[];
  assessment: Assessment;
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  github: string;
  demo: string;
  image: string;
  details: string[];
  type: '3-Pointer' | 'Mid-Range' | 'In the Paint';
  shotPosition: { x: string; y: string };
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  image: string;
}

export interface PortfolioData {
  fullName: string;
  jobTitle: string;
  aboutMeShort: string;
  aboutme: string;
  skills: string[];
  careerTimeline: CareerTimelineItem[];
  projects: Project[];
  blogPosts: BlogPost[];
}