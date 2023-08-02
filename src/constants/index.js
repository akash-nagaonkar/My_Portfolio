import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  python,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  mysql,
  git,
  gitHub,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  infosys,
  project_1,
  project_2,
  project_3,
  project_4,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Front-end Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Angular Developer",
    icon: creator,
  },
  {
    title: "Vue JS Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Python",
    icon: python,
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
    name: "MySQL",
    icon: mysql,
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
    name: "GitHub",
    icon: gitHub,
  },
];

const experiences = [
  {
    title: "System Engineer",
    company_name: "Infosys",
    icon: infosys,
    iconBg: "#E6DEDD",
    date: "Since August 2022 to till now",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies and frameworks.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Making it fully responsive to elevate user experience",
    ],
  },
  {
    title: "System Engineer Trainee",
    company_name: "Infosys",
    icon: infosys,
    iconBg: "#383E56",
    date: "March 2022 to July 2022",
    points: [
      "First of all, I had been trained on Java until Object Oriented Programming Language and MySQL data-base management system",
      "I went through couple of training on Angular CLI and React JS",
      "In my training, as a captone projects, I buil CRUD application in both React and Angular and Infy Airlines Web App",
    ],
  },
];

const certifications = [
  {
    certificate_name: "Infosys Certified React Professional",
    tags: [
      {
        name: "React JS",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "blue-text-gradient",
      }
    ],
    image: infosys,
  },
  {
    certificate_name: "Infosys Certified Angular Professional",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
    ],
    image: infosys,
  },
  {
    certificate_name: "Infosys Certified Angular Associate",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
    ],
    image: infosys,
  },
  {
    certificate_name: "Infosys Certified Front-end web developer",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
    ],
    image: infosys,
  },
  {
    certificate_name: "Infosys Certified PHP Associate",
    tags: [
      {
        name: "PHP",
        color: "blue-text-gradient",
      },
    ],
    image: infosys,
  },
];

const projects = [
  {
    name: "3D Portfolio",
    description:
      "My personal portfolio project showcases my expertise in front-end development, featuring cutting-edge 3D animations and advanced styling with Tailwind CSS. Leveraging external libraries like Three JS for captivating visuals and interactivity.",
    tags: [
      {
        name: "React JS",
        color: "blue-text-gradient",
      },
      {
        name: "Three JS",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: project_1,
  },
  {
    name: "Movix Web app",
    description:
      "A movie lover's paradise offering the latest, trending, and popular films and TV shows. Utilizing TMDB's API service, the platform showcases detailed information, trailers, cast, featured videos, and ratings for a seamless user experience.",
    tags: [
      {
        name: "React JS",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "orange-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "SCSS",
        color: "pink-text-gradient",
      },
    ],
    image: project_4,
  },
  {
    name: "Modern Bank Webpage",
    description:
      "Sleek bank webpage with stunning UI, created using Tailwind CSS and React JS. Leaves lasting impressions on users.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
    ],
    image: project_3,
  },
];

export { services, technologies, experiences, certifications, projects };
