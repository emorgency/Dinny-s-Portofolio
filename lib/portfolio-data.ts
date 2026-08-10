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
    title: 'Waerebo Website',
    category: 'Web Application',
    description:
      'Waerebo is a static web site that provides information about the Waerebo village, its culture, and tourism. It is built using React and Tailwind CSS.',
    technologies: [
      'React',
      'JavaScript',
      'Tailwind CSS',
    ],
    url: 'https://zuzur-zanggal.vercel.app/',
  },
  {
    number: '02',
    title: 'Naviable Gemastik Design Project',
    category: 'UI/UX DESIGN',
    description:
      'Naviable is a design project for Gemastik 2023, focusing on creating a user-friendly navigation for disabled users. The project was designed using Figma and Canva.',
    technologies: ['Figma', 'Canva'],
    url: 'https://www.figma.com/design/BSnKOi43A8tlAuw6t900m8/Naviable-Project?m=auto&t=W6URlW03QPpKxL4j-6',
  },
  {
    number: '03',
    title: 'ITLlab',
    category: 'Software Development',
    description:
      'Platform based on team to help students to find a team for their final project. It is built using React, JavaScript, and Tailwind CSS.',
    technologies: ['React', 'JavaScript', 'Tailwind CSS'],
    url: 'https://github.com/emorgency/ITLlab',
  },

    {
    number: '04',
    title: 'MySkill Figma Project',
    category: 'UI/UX DESIGN',
    description:
      'MySkill is a design project that focuses on creating a user-friendly interface for a skill management application. The project was designed using Figma.',
    technologies: ['Figma'],
    url: 'https://www.figma.com/design/ECn06Ov04SbjR2UxFx7ycJ/Dinny-Alya---MySkill?node-id=0-1&t=MOLplT4SO5DHyLpD-1',
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
    items: ['Pandas', 'NumPy', 'Scikit-learn','Jupyter Notebook'],
  },
  {
    label: 'Web Development',
    items: ['React', 'Next.js', 'Tailwind CSS', 'Flask'],
  },
  {
    label: 'Database & Tools',
    items: ['PostgreSQL', 'Git', 'GitHub', 'VS Code'],
  },
  {
    label: 'Cloud',
    items: ['Google Cloud'],
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
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]
