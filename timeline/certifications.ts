import { TimelineItemData } from '../../types';

// Certification Data - Sorted by completionDate/endDate (most recent first)
export const certificationData: TimelineItemData[] = [
  // Future courses with endDates in 2024
  {
    id: 'llms-course',
    title: "LLMs: Zero to (almost) Hero! - ECI 2024",
    organization: "Universidad de Buenos Aires (UBA)",
    completionDate: "2024-08-31",
    description: "Comprehensive course on large language models (LLMs) covering fundamental deep learning techniques and practical applications.\n\nProfessor: Giovanni Trappolini – Universidad de Roma La Sapienza\n\nKey Topics: Deep learning fundamentals, Attention mechanisms, Transformer architectures (BERT, GPT), Transfer learning, fine-tuning, prompting, and Retrieval-Augmented Generation (RAG)",
    tags: ["Large Language Models", "Transformers", "RAG"],
  },
  
  // 2024 completionDates
  {
    id: 'ai-agents',
    title: 'AI Agents Fundamentals',
    organization: 'Hugging Face',
    completionDate: '2025-02-01',
    description: 'Certification in AI agents and their fundamentals.',
    tags: ['Large Language Models', 'AI Agents'],
  },
  
  // 2023 completionDates and endDates
  {
    id: 'ml-engineer',
    title: 'Professional Machine Learning Engineer',
    organization: 'Google Cloud',
    completionDate: '2023-07-01',
    description: 'Validates expertise in designing, building, and productionizing ML models. Valid until July 2025.',
    tags: ['Machine Learning', 'MLOps', 'Google Cloud'],
  },
  {
    id: '3d-course',
    title: "3D reconstruction of humans from images - ECI 2023",
    organization: "Universidad de Buenos Aires (UBA)",
    completionDate: "2023-07-31",
    description: "Course covering estimation of 3D shape of humans from images or video, a key task for applications like AR/VR, telepresence, and entertainment.\n\nProfessor: Victoria Fernández Abrevaya\n\nFocus on both classic and modern techniques for estimating body and face in 3D from images.",
    tags: ["Computer Vision", "3D Reconstruction", "Deep Learning"],
  },
  {
    id: 'drl-course',
    title: 'Hugging Face Deep Reinforcement Learning Course',
    organization: 'Hugging Face',
    completionDate: '2023-05-01',
    description: 'Course on deep reinforcement learning techniques and applications.',
    tags: ['Deep Reinforcement Learning', 'Artificial Intelligence'],
  },
  
  // 2022 completionDates
  {
    id: 'data-specimens',
    title: 'Data or Specimens Only Research',
    organization: 'CITI Program',
    completionDate: '2022-05-01',
    description: 'Certification on handling research data and specimens. Valid until May 2025.',
    tags: ['Artificial Intelligence', 'Research'],
  },
  
  // 2020 completionDates
  {
    id: 'kaggle-certs',
    title: 'Kaggle Certifications',
    organization: 'Kaggle',
    completionDate: '2020-12-01',
    description: 'Certifications in Data Cleaning, Game AI and Reinforcement Learning, Natural Language Processing, Computer Vision, Intermediate Machine Learning, Intro to Deep Learning, and Intro to Machine Learning.',
    tags: ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'Python'],
  },
  
  // 2019 completionDates
  {
    id: 'cae',
    title: 'Certificate in Advanced English',
    organization: 'University of Cambridge',
    completionDate: '2019-12-01',
    description: 'Advanced English language certification.',
    tags: ['English'],
  },
  
  // 2017 completionDates
  {
    id: 'fce',
    title: 'First Certificate in English',
    organization: 'University of Cambridge',
    completionDate: '2017-01-01',
    description: 'English language certification at the intermediate level.',
    tags: ['English'],
  }
]; 