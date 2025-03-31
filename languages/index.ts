import { IconType } from 'react-icons';
import { FaFlag, FaFlagUsa } from 'react-icons/fa';

// Define language data type
export interface Language {
  name: string;
  proficiency: number;
  description: string;
  icon: IconType;
  countryCode: string;
  flagEmoji: string;
}

// Languages data
export const languages: Language[] = [
  {
    name: 'Spanish',
    proficiency: 5, // Native or bilingual proficiency
    description: 'Native or Bilingual Proficiency',
    icon: FaFlag,
    countryCode: 'ES',
    flagEmoji: '🇪🇸'
  },
  {
    name: 'English',
    proficiency: 4, // Full professional proficiency
    description: 'Full Professional Proficiency',
    icon: FaFlagUsa,
    countryCode: 'US',
    flagEmoji: '🇺🇸'
  },
  {
    name: 'Japanese',
    proficiency: 1, // Elementary proficiency
    description: 'Elementary Proficiency',
    icon: FaFlag,
    countryCode: 'JP',
    flagEmoji: '🇯🇵'
  }
]; 