import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  aigen,
  todogo,
  sociopilot,
  threejs,
  du,
  iet,
  school,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "work",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Tech Enthusiast",
    icon: mobile,
  },
  {
    title: "Software Developer",
    icon: backend,
  },
  {
    title: "Problem Solver",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: du,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: du,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const education = [
  {
    title: "Master of Computer Applications",
    company_name: "Institute of Engineering & Technology, Lucknow",
    icon: iet,
    iconBg: "#383E56",
    date: "Sep 2024 - May 2026",
    grade: "CGPA: 9.2",
    points: [
      
    ],
  },
  {
    title: "B.Sc. Computer Science Hons.",
    company_name: "Shyama Prasad Mukherjee College for Women, University of Delhi",
    icon: du,
    iconBg: "#E6DEDD",
    date: "Nov 2021 - May 2024",
    grade: "CGPA: 9.108",
    points: [
      
    ],
  },
  {
    title: "Senior High School",
    company_name: "Modern Science College, Pratapgarh",
    icon: school,
    iconBg: "#383E56",
    date: "Apr 2020 - Mar 2021",
    grade: "Percentage: 90.6",
    points: [
      
    ],
  },
  {
    title: "High School",
    company_name: "Modern Science College, Pratapgarh",
    icon: school,
    iconBg: "#E6DEDD",
    date: "Apr 2018 - Mar 2019",
    grade: "Percentage: 89.6",
    points: [
      
    ],
  },
];

const projects = [
  {
    name: "AI Img-Gen",
    description:
      "Developed a text-to-image generator with 5+ art styles using Pollinations AI. Added batch generation, smart prompts, metadata features, and a responsive dark/light UI for 100+ users.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "framer-motion",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: aigen,
    source_code_link: "https://github.com/JahnaviJais/AI-Img-Gen",
  },
  {
    name: "SocioPilot",
    description:
      "Built a full-stack social media content analysis tool with smart file uploads and OCR for accurate text extraction. Integrated Gemini API to generate insights, sentiment analysis, and engagement metrics.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "orange-text-gradient",
      },

    ],
    image: sociopilot,
    source_code_link: "https://github.com/JahnaviJais/SocioPilot",
  },
  {
    name: "TodoGo",
    description:
      "Developed a clean and user-friendly to-do list application using React. Features include task creation, editing, deletion, and completion tracking, with dynamic state management and a responsive UI.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "localstorage",
        color: "pink-text-gradient",
      },
    ],
    image: todogo,
    source_code_link: "https://github.com/JahnaviJais/TodoGo",
  },
];

export { services, technologies, experiences, education , projects };