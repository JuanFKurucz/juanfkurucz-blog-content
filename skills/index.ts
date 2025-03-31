import { FaCode, FaBrain, FaServer, FaTools, FaUsers, FaGlobe } from 'react-icons/fa';
import { IconType } from 'react-icons';

export interface Skill {
  iconComponent: IconType;
  title: string;
  description: string;
  skills: SkillItem[];
}

export interface SkillItem {
  name: string;
  proficiency: number; // 0-100
  sources: Array<'experience' | 'education' | 'certification' | 'publication'>;
}

export const skillsData: Skill[] = [
  {
    iconComponent: FaBrain,
    title: 'Machine Learning & AI',
    description: 'Specialized in LLMs, RAG, MLOps, and advanced machine learning techniques',
    skills: [
      {
        name: 'Retrieval-Augmented Generation (RAG)',
        proficiency: 95,
        sources: ['experience', 'certification', 'publication']
      },
      {
        name: 'Large Language Models (LLMs)',
        proficiency: 90,
        sources: ['experience', 'certification', 'publication']
      },
      {
        name: 'Transformers & NLP',
        proficiency: 88,
        sources: ['experience', 'education', 'certification']
      },
      {
        name: 'MLOps & Model Deployment',
        proficiency: 90,
        sources: ['experience', 'certification']
      },
      {
        name: 'Computer Vision',
        proficiency: 85,
        sources: ['experience', 'education', 'certification']
      }
    ]
  },
  {
    iconComponent: FaCode,
    title: 'Software Engineering',
    description: 'Full-stack development with modern technologies',
    skills: [
      {
        name: 'Python & JavaScript/TypeScript',
        proficiency: 95,
        sources: ['experience', 'education']
      },
      {
        name: 'React & Node.js',
        proficiency: 85,
        sources: ['experience']
      },
      {
        name: 'Docker & AWS',
        proficiency: 80,
        sources: ['experience', 'certification']
      },
      {
        name: 'Git & CI/CD Pipelines',
        proficiency: 85,
        sources: ['experience']
      },
      {
        name: 'Deep Learning & Neural Networks',
        proficiency: 85,
        sources: ['experience', 'education', 'certification']
      }
    ]
  },
  {
    iconComponent: FaUsers,
    title: 'Teaching',
    description: 'University professor using Team-Based Learning methodology',
    skills: [
      {
        name: 'Artificial Intelligence & ML',
        proficiency: 95,
        sources: ['experience', 'education', 'certification']
      },
      {
        name: 'Data Structures & Algorithms',
        proficiency: 90,
        sources: ['experience', 'education']
      },
      {
        name: 'Programming Fundamentals',
        proficiency: 90,
        sources: ['experience', 'education']
      },
      {
        name: 'Student Mentoring',
        proficiency: 85,
        sources: ['experience']
      },
      {
        name: 'Course Development',
        proficiency: 80,
        sources: ['experience']
      }
    ]
  },
  {
    iconComponent: FaTools,
    title: 'Technical Skills',
    description: 'Specialized technical capabilities in emerging AI technologies',
    skills: [
      {
        name: 'Forecasting & Time Series Analysis',
        proficiency: 80,
        sources: ['experience', 'education']
      },
      {
        name: 'Edge Computing & Deployment',
        proficiency: 75,
        sources: ['experience']
      },
      {
        name: 'Biometrics Integration',
        proficiency: 80,
        sources: ['experience']
      },
      {
        name: 'Augmented Reality',
        proficiency: 75,
        sources: ['experience']
      },
      {
        name: 'Performance Optimization',
        proficiency: 80,
        sources: ['experience', 'education']
      }
    ]
  },
  {
    iconComponent: FaServer,
    title: 'Software Development',
    description: 'Building applications across various domains',
    skills: [
      {
        name: 'Web Application Development',
        proficiency: 90,
        sources: ['experience', 'education']
      },
      {
        name: 'Desktop Application Development',
        proficiency: 75,
        sources: ['experience']
      },
      {
        name: 'API Design & Integration',
        proficiency: 85,
        sources: ['experience']
      },
      {
        name: 'Human Resources Systems',
        proficiency: 80,
        sources: ['experience']
      },
      {
        name: 'Electronic Billing Solutions',
        proficiency: 75,
        sources: ['experience']
      }
    ]
  },
  {
    iconComponent: FaGlobe,
    title: 'Professional',
    description: 'Leadership and professional contributions',
    skills: [
      {
        name: 'IEEE Uruguay Vice President',
        proficiency: 90,
        sources: ['experience']
      },
      {
        name: 'Research & Publication',
        proficiency: 80,
        sources: ['publication', 'education']
      },
      {
        name: 'Technical Leadership',
        proficiency: 90,
        sources: ['experience']
      },
      {
        name: 'Project Management',
        proficiency: 85,
        sources: ['experience']
      },
      {
        name: 'Team Management',
        proficiency: 85,
        sources: ['experience']
      }
    ]
  }
]; 