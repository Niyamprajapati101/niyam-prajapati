import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiGit,
  SiPostman,
  SiFigma,
} from 'react-icons/si';

import { DiCss3 } from 'react-icons/di';
import { FaCode } from 'react-icons/fa';

export const techIcons = {
  // Frontend
  'React': SiReact,
  'JavaScript': SiJavascript,
  'HTML5': SiHtml5,
  'CSS3': DiCss3,
  'Tailwind CSS': SiTailwindcss,
  
  // Backend
  'Node.js': SiNodedotjs,
  'Express.js': SiExpress,
  
  // Database
  'MongoDB': SiMongodb,
  'MySQL': SiMysql,
  
  // Tools
  'Git': SiGit,
  'VS Code': FaCode,
  'Postman': SiPostman,
  'Figma': SiFigma,
};

export const getTechIcon = (techName) => {
  return techIcons[techName] || null;
};