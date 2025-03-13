import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    title: "Software Engineer",
    icon: web,
  },
  {
    title: "Full Stack Developer",
    icon: mobile,
  },
  {
    title: "AI Solutions Architect",
    icon: backend,
  },
  {
    title: "Data Scientist",
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
    name: "TypeScript",
    icon: typescript,
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
    title: "Full Stack Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Jan 2010 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Create interactive dashboards using Tableau and Power BI to visualize predictive analytics.",
    ],
  },
  {
    title: "Business Intelligence Analyst",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Sep 2016 - Aug 2020",
    points: [
      "Analyzed business processes and systems to identify inefficiencies and recommendations.",
      "Collaborating with stakeholders to better define requirements, and implement solutions.",
      "Delivered actionable insights through advanced data analytics and visualization tools.",
      "Provided predictive analysis, enabling leadership to implement proactive strategies.",
    ],
  },
  {
    title: "IT Security Specialist",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Sep 2014 - Aug 2016",
    points: [
      "Maintained the security of aviation systems by implementing advanced cybersecurity measures.",
      "Collaborated with cross-functional teams to develop tailored security solutions.",
      "Proactively monitored networks, preventing breaches and mitigating risks.",
      "Designed and deployed robust encryption and firewall protections to safeguard data.",
    ],
  },
  {
    title: "Technical Support Specialist",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Aug 2012 - Jul 2014",
    points: [
      "Provided assistance to customers, consultants and partners on the usage of Nest products.",
      "Troubleshot issues through reproducing the problem and determined resolutions.",
      "Assisted and collaborated with other support team members with technical issues.",
      "Escalation point for issues that fell outside of the scope of tier 1 and tier 2 technical support.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "The web application showcases our product, and the result far exceeded our expectations!",
    name: "Cynthia Wolf",
    designation: "CFO",
    company: "InnoVanta",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "His attention to detail and dedication made all the difference in bringing our vision to fruition.",
    name: "Arjun Singh",
    designation: "COO",
    company: "CodeSphere",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Our traffic skyrocketed by 50%. We couldn’t be more grateful for the results and the impact it’s had on our business!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "NexuVerse",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "AI Chatbot",
    description:
      "Web-based platform that enables users to engage in real-time conversations with an advanced AI chatbot, offering intelligent code formatting, seamless file uploads, and adaptive theming, providing an innovative solution for interactive communication.",
    tags: [
      {
        name: "HTML5",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/sjbentley/LLM_Chatbot",
  },
  {
    name: "Legal Summarizer",
    description:
      "Web-based platform that empowers individuals to rapidly condense complex legal documents, case files, and regulatory texts into concise, actionable summaries, leveraging natural language processing — an innovative solution for legal research.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Vite",
        color: "green-text-gradient",
      },
      {
        name: "FastAPI",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/sjbentley/Legal_Document_Summarizer",
  },
  {
    name: "Patient Management",
    description:
      "A web-based platform that simplifies patient management, enabling easy registration, scheduling, and SMS notifications with a responsive interface for both patients and practitioners. The system also integrates secure file storage and authentication.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Appwrite",
        color: "green-text-gradient",
      },
      {
        name: "Twilio",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/sjbentley/Patient_Management_System",
  },
];

export { services, technologies, experiences, testimonials, projects };
