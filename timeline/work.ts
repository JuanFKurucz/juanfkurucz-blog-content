import { TimelineItemWithChildren } from './types';

// Work Experience Data - Active positions first in specified order (Tryolabs, UCU, IEEE)
export const workExperienceData: TimelineItemWithChildren[] = [
  {
    id: 'tryolabs',
    title: 'Lead Machine Learning Engineer',
    organization: 'Tryolabs',
    startDate: '2020-03-01',
    // No endDate means current position
    description: 'Leading machine learning projects across various industries, focusing on MLOps, generative AI, forecasting, and computer vision applications.',
    tags: ['Machine Learning', 'Python', 'AWS', 'MLOps', 'Computer Vision', 'NLP'],
    children: [
      {
        id: 'tryolabs-lead',
        title: 'Lead Machine Learning Engineer',
        startDate: '2023-01-01',
        // No endDate means current position
        description: 'Leading various machine learning projects across different industries, focusing on deployment, maintenance, and enhancement of AI solutions.\n\nKey Responsibilities:\n• MLOps - Developed solutions ensuring seamless deployment, scalability, and maintainability of ML models\n• Generative AI/LLMs - Conducted R&D on cutting-edge LLMs for applications such as summarization and information extraction\n• Forecasting - Designed models for pricing strategies, demand prediction, and discount optimization\n• Computer Vision - Developed solutions for feature extraction, product description, and image classification',
        tags: ['Machine Learning', 'MLOps', 'Generative AI', 'Computer Vision', 'Forecasting', 'Python', 'AWS'],
      },
      {
        id: 'tryolabs-mle',
        title: 'Machine Learning Engineer',
        startDate: '2022-09-01',
        endDate: '2022-12-31',
        description: 'Worked on machine learning projects with a focus on developing and deploying AI solutions for various industries.',
        tags: ['Machine Learning', 'Python', 'AWS', 'Docker'],
      },
      {
        id: 'tryolabs-mld',
        title: 'Machine Learning Developer',
        startDate: '2021-03-01',
        endDate: '2022-08-31',
        description: 'Developed machine learning solutions as part of a talented team, focusing on implementing AI capabilities for clients across various sectors.',
        tags: ['Python', 'Machine Learning', 'NLP', 'Computer Vision', 'AWS'],
      },
      {
        id: 'tryolabs-fsd',
        title: 'Full Stack Developer',
        startDate: '2020-03-01',
        endDate: '2021-02-28',
        description: 'Developed web applications using modern technologies and frameworks. Worked on both frontend and backend components of client projects.',
        tags: ['JavaScript', 'React', 'Node.js', 'Python', 'AWS', 'Docker'],
      }
    ]
  },
  {
    id: 'ucu-professor',
    title: 'Professor of Software Engineering',
    organization: 'Catholic University of Uruguay (UCU)',
    startDate: '2021-03-01',
    // No endDate means current position
    description: 'As a Professor of Software Engineering at UCU, I have been actively involved in teaching and mentoring students across various courses in software engineering, data structures, and artificial intelligence using Team-Based Learning (TBL) methodologies.',
    tags: ['Teaching', 'Data Structures', 'Artificial Intelligence', 'Java', 'Python'],
    children: [
      {
        id: 'ucu-reto-prof',
        title: 'Professor of "Reto" (Challenge)',
        startDate: '2024-02-01',
        // No endDate means current position
        description: 'Facilitating a problem-solving course that encourages students to tackle real-world challenges using innovative engineering solutions. Taught during February and December recesses.',
        tags: ['Problem Solving', 'Engineering', 'Innovation'],
      },
      {
        id: 'ucu-ai2-prof',
        title: 'Professor of Artificial Intelligence 2',
        startDate: '2023-03-01',
        // No endDate means current position
        description: 'Covering deep learning, computer vision, NLP, GANs, and tooling for training models using TensorFlow and other frameworks.',
        tags: ['Artificial Intelligence', 'Deep Learning', 'Computer Vision', 'TensorFlow', 'Python'],
      },
      {
        id: 'ucu-dsa-prof',
        title: 'Professor of Data Structures and Algorithms',
        startDate: '2023-03-01',
        endDate: '2024-07-31',
        description: 'Teaching fundamental concepts of data structures and algorithms in Java, including their implementation and application in solving computational problems.',
        tags: ['Data Structures', 'Algorithms', 'Java', 'Problem Solving'],
      },
      {
        id: 'ucu-ai1-assist',
        title: 'Assistant Professor of Artificial Intelligence 1',
        startDate: '2022-07-01',
        endDate: '2023-12-31',
        description: 'Introducing classical machine learning with tabular data, covering RapidMiner, Python, sklearn, numpy, pandas, and the CRISP-DM methodology. Topics include data preprocessing, linear algorithms, nonlinear algorithms (Naive Bayes, K-NN, Decision Trees, SVM), unsupervised learning, clustering, ensembles, and model tuning.',
        tags: ['Machine Learning', 'Python', 'sklearn', 'Data Preprocessing', 'CRISP-DM'],
      },
      {
        id: 'ucu-dsa-assist',
        title: 'Assistant Professor of Data Structures and Algorithms',
        startDate: '2022-03-01',
        endDate: '2023-07-31',
        description: 'Supporting the main professor in teaching data structures and algorithms fundamentals, grading assignments, and providing assistance to students.',
        tags: ['Data Structures', 'Algorithms', 'Java'],
      },
      {
        id: 'ucu-prog1-assist',
        title: 'Assistant Professor of Programming 1',
        startDate: '2021-03-01',
        endDate: '2022-12-31',
        description: 'Teaching basic programming concepts in Python, coding practices, and problem-solving techniques.',
        tags: ['Programming', 'Python', 'Problem Solving'],
      }
    ]
  },
  {
    id: 'ieee-vp',
    title: 'Vice President',
    organization: 'IEEE Uruguay Section',
    startDate: '2023-01-01',
    // No endDate means current position
    description: `Serving as Vice President of the IEEE Uruguay Section, the world's largest technical professional organization dedicated to advancing technology for the benefit of humanity.

Responsibilities include:
• Strategic planning and execution of section initiatives
• Coordinating with different IEEE chapters within Uruguay
• Representing IEEE Uruguay at regional and international events
• Promoting professional development and technical excellence`,
    tags: ['Leadership', 'Professional Organization', 'Technology Advancement'],
  },
  {
    id: 'manuar',
    title: 'Co-Founder',
    organization: 'ManuAR',
    startDate: '2023-09-01',
    endDate: '2025-02-01',
    description: 'Led technical development of products transforming traditional instruction manuals into interactive visual guides using advanced technologies.\n\nKey Achievements:\n• Utilized advanced image, text, and voice recognition with AR visualization\n• Implemented real-time interactions for an intuitive user experience\n• Used data analysis tools to help companies understand consumer behavior',
    tags: ['Augmented Reality', 'Image Recognition', 'Data Analysis'],
  },
  {
    id: 'inflexium',
    title: 'Full-stack Developer',
    organization: 'Inflexium',
    startDate: '2019-03-01',
    endDate: '2020-02-29',
    description: 'Led development of an end-to-end human resources system for employee attendance and work hours, integrating with various biometric devices.',
    tags: ['Web Development', 'Biometrics Integration', 'Data Management'],
  },
  {
    id: 'fixed',
    title: 'Junior Developer',
    organization: 'Fixed - Facturación Electrónica',
    startDate: '2018-08-01',
    endDate: '2019-02-28',
    description: 'Enhanced electronic billing web solution and supported various side projects, improving frontend features and developing desktop clients.',
    tags: ['Frontend Development', 'Desktop Applications', 'Electronic Billing'],
  }
]; 