import { IconType } from 'react-icons';
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaTwitter
} from 'react-icons/fa';

// Define social link data type
export interface SocialLink {
  id: string;
  url: string;
  label: string;
  icon: IconType;
}

// Social links data
export const socialLinks: SocialLink[] = [
  {
    id: 'linkedin',
    url: 'https://linkedin.com/in/juanfkurucz',
    label: 'LinkedIn',
    icon: FaLinkedin
  },
  {
    id: 'twitter',
    url: 'https://twitter.com/juanfkurucz',
    label: 'Twitter',
    icon: FaTwitter
  },
  {
    id: 'github',
    url: 'https://github.com/juanfkurucz',
    label: 'GitHub',
    icon: FaGithub
  },
  {
    id: 'email',
    url: 'mailto:juanfkurucz@gmail.com',
    label: 'Email',
    icon: FaEnvelope
  }
]; 