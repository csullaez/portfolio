export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  demoUrl?: string;
  repoUrl?: string;
  image?: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  category: SkillCategory;
}

export type SkillCategory = 'frontend' | 'backend' | 'tools' | 'soft';

export interface Education {
  id: string;
  title: string;
  institution: string;
  period: string;
  type: 'degree' | 'certification' | 'course';
  description?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  achievements: string[];
  technologies: string[];
}

export interface Language {
  name: string;
  level: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface PersonalInfo {
  name: string;
  lastName: string;
  role: string;
  description: string;
  email: string;
  phone?: string;
  location: string;
  socialLinks: SocialLink[];
  cvUrl?: string;
}
