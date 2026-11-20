export type Project = {
  number: string
  title: string
  category: string
  description: string
  technologies: string[]
  url: string
}

export const projects: Project[] = [
  {
    number: '01',
    title: 'TemuBaca',
    category: 'Web Development · UINIC 8.0',
    description:
      'A digital reading platform designed to help university students discover books, explore book-lending opportunities, and connect with reading communities. The platform also includes book and community recommendation features.',
    technologies: [
      'Next.js',
      'Supabase',
      'Python',
      'FastAPI',
      'Machine Learning',
    ],
    url: 'https://temubaca.vercel.app/',
  },
  {
    number: '02',
    title: 'FinSight',
    category: 'FinTech · Machine Learning',
    description:
      'A personal-finance web application that uses machine learning to categorize transaction descriptions, helping users organize financial activity and better understand their spending patterns.',
    technologies: [
      'Python',
      'Flask',
      'Scikit-learn',
      'SVM',
      'TF-IDF',
      'Pandas',
    ],
    url: 'https://app.finsight.space/',
  },
  {
    number: '03',
    title: 'Waerebo Website',
    category: 'Web Application',
    description:
      'A static website that provides information about Waerebo village, its culture, and tourism. It was built using React and Tailwind CSS.',
    technologies: ['React', 'JavaScript', 'Tailwind CSS'],
    url: 'https://zuzur-zanggal.vercel.app/',
  },
  {
    number: '04',
    title: 'ITLab — Team Matching Platform',
    category: 'Software Development',
    description:
      'A competency-based team-matching platform that helps students find suitable collaborators for group assignments, competitions, research, and project development.',
    technologies: ['React', 'JavaScript', 'Tailwind CSS'],
    url: 'https://github.com/emorgency/ITLlab',
  },
  {
    number: '05',
    title: 'NaviAble — Inclusive Navigation Design',
    category: 'UI/UX Design · Gemastik 2023',
    description:
      'An accessibility-focused navigation design concept created to make wayfinding easier for users with disabilities. The interface was designed using Figma and Canva.',
    technologies: ['Figma', 'Canva'],
    url: 'https://www.figma.com/design/BSnKOi43A8tlAuw6t900m8/NaviableProject?m=auto&t=W6URlWO3QpPkL4j-6',
  },
]

export type Achievement = {
  title: string
  subtitle: string
  description: string
}

export const achievements: Achievement[] = [
  {
    title: 'UINIC 8.0',
    subtitle: 'Web Development Competition · TemuBaca',
    description:
      'Worked on TemuBaca, a digital reading platform that brings together book discovery, lending opportunities, and reading communities.',
  },
  {
    title: 'Bytesfest',
    subtitle: 'Finalist · SEAS UNS',
    description:
      'Selected as a finalist in Bytesfest (SEAS UNS).',
  },
  {
    title: 'HIMTIF UNPAM Hackathon',
    subtitle: 'Participant',
    description:
      'Took part in a collaborative hackathon organized by HIMTIF UNPAM.',
  },
]

export type SkillGroup = {
  label: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    label: 'Programming',
    items: ['Python', 'JavaScript', 'C++', 'Java'],
  },
  {
    label: 'Data & Machine Learning',
    items: ['Pandas', 'NumPy', 'Scikit-learn', 'SVM', 'TF-IDF', 'Jupyter Notebook'],
  },
  {
    label: 'Web Development',
    items: ['React', 'Next.js', 'Tailwind CSS', 'Flask', 'FastAPI'],
  },
  {
    label: 'Database & Tools',
    items: ['PostgreSQL', 'Supabase', 'Git', 'GitHub', 'VS Code'],
  },
  {
    label: 'Cloud',
    items: ['Vercel', 'Google Cloud'],
  },
  {
    label: 'UI/UX Design',
    items: ['Figma', 'Canva'],
  },
]

export const contactLinks = [
  { label: 'GitHub', href: 'https://github.com/emorgency' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/dinny-alya' },
  { label: 'Email', href: 'mailto:your.dddinnyalya@gmail.com' },
]

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]
