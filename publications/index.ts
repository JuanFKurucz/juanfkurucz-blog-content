// Define publication data type
export interface Publication {
  id: string;
  title: string;
  description: string;
  date: string;
  url: string;
}

// Publications data
export const publications: Publication[] = [
  {
    id: 'pub1',
    title: 'Applying Bayesian Networks to Help Physicians Diagnose Respiratory Diseases in the Context of COVID-19 Pandemic',
    description: 'Research on using Bayesian Networks as Clinical Decision Support Systems to help physicians diagnose respiratory diseases during the COVID-19 pandemic. The system demonstrates the suitability and flexibility of BNs for diagnosis support and healthcare training.',
    date: '2021-12-01',
    url: 'https://ieeexplore.ieee.org/document/9647280/'
  },
  {
    id: 'pub2',
    title: 'Fine-tuned LLMs and Distributed Training to Elevate your Conversational AI Game',
    description: 'A deep dive into the process of fine-tuning large language models for conversational AI applications, with insights on distributed training techniques for building more efficient and effective AI systems.',
    date: '2023-01-27',
    url: 'https://tryolabs.com/blog/2023/01/27/fine-tuned-llms-and-distributed-training-to-elevate-your-conversational-ai-game'
  },
  {
    id: 'pub3',
    title: 'Practical Guide: Optimizing transformer-based models for faster inference',
    description: 'A comprehensive guide on techniques to optimize transformer-based models for faster inference, covering quantization, pruning, and knowledge distillation to improve performance in production environments.',
    date: '2022-11-24',
    url: 'https://tryolabs.com/blog/2022/11/24/transformer-based-model-for-faster-inference'
  }
]; 